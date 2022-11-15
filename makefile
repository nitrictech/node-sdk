# the version of of https://github.com/nitrictech/nitric to use in base client generation.
NITRIC_VERSION := v0.20.0-rc.2

generate: download
	@yarn gen:proto

download:
	@curl -L https://github.com/nitrictech/nitric/releases/download/${NITRIC_VERSION}/contracts.tgz -o contracts.tgz
	@tar xvzf contracts.tgz
	@rm contracts.tgz