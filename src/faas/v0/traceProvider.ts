// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import {
  ConsoleSpanExporter,
  BatchSpanProcessor,
  NodeTracerProvider,
} from '@opentelemetry/sdk-trace-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { TraceIdRatioBasedSampler } from '@opentelemetry/sdk-trace-node';

/**
 * Creates a new node tracer provider
 * If it is a local run, it will output to the console. If it is run on the cloud it will output to localhost:4317
 *
 * @returns a tracer provider
 */
const newTracerProvider = (): NodeTracerProvider => {
  // Add trace provider
  const localRun = !process.env.OTELCOL_BIN;
  const samplePercentage = localRun
    ? 100 // local default to 100
    : Number.parseInt(process.env.NITRIC_TRACE_SAMPLE_PERCENT) || 0;

  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: process.env.NITRIC_STACK ?? '',
      [SemanticResourceAttributes.SERVICE_VERSION]:
        process.env.npm_package_version ?? '0.0.1',
    }),
    sampler: new TraceIdRatioBasedSampler(samplePercentage),
  });

  registerInstrumentations({
    instrumentations: [new HttpInstrumentation(), new GrpcInstrumentation()],
    tracerProvider: provider,
  });

  const traceExporter = localRun // If running locally
    ? new ConsoleSpanExporter()
    : new OTLPTraceExporter({
        url: 'http://localhost:4317',
      });

  const processor = new BatchSpanProcessor(traceExporter);

  provider.addSpanProcessor(processor);
  provider.register();

  return provider;
};

export default newTracerProvider;
