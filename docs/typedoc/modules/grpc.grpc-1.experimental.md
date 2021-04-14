[@nitric/sdk](../README.md) / [grpc](grpc.md) / [grpc](grpc.grpc-1.md) / experimental

# Namespace: experimental

[grpc](grpc.md).[grpc](grpc.grpc-1.md).experimental

## Table of contents

### Enumerations

- [PickResultType](../enums/grpc.grpc-1.experimental.pickresulttype.md)

### Classes

- [BackoffTimeout](../classes/grpc.grpc-1.experimental.backofftimeout.md)
- [BaseFilter](../classes/grpc.grpc-1.experimental.basefilter.md)
- [ChildLoadBalancerHandler](../classes/grpc.grpc-1.experimental.childloadbalancerhandler.md)
- [FilterStackFactory](../classes/grpc.grpc-1.experimental.filterstackfactory.md)
- [QueuePicker](../classes/grpc.grpc-1.experimental.queuepicker.md)
- [UnavailablePicker](../classes/grpc.grpc-1.experimental.unavailablepicker.md)

### Interfaces

- [CallStream](../interfaces/grpc.grpc-1.experimental.callstream.md)
- [ChannelControlHelper](../interfaces/grpc.grpc-1.experimental.channelcontrolhelper.md)
- [Filter](../interfaces/grpc.grpc-1.experimental.filter.md)
- [FilterFactory](../interfaces/grpc.grpc-1.experimental.filterfactory.md)
- [GrpcUri](../interfaces/grpc.grpc-1.experimental.grpcuri.md)
- [LoadBalancer](../interfaces/grpc.grpc-1.experimental.loadbalancer.md)
- [LoadBalancingConfig](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)
- [PickArgs](../interfaces/grpc.grpc-1.experimental.pickargs.md)
- [PickResult](../interfaces/grpc.grpc-1.experimental.pickresult.md)
- [Picker](../interfaces/grpc.grpc-1.experimental.picker.md)
- [Resolver](../interfaces/grpc.grpc-1.experimental.resolver.md)
- [ResolverListener](../interfaces/grpc.grpc-1.experimental.resolverlistener.md)
- [ServiceConfig](../interfaces/grpc.grpc-1.experimental.serviceconfig.md)

### Type aliases

- [SubchannelAddress](grpc.grpc-1.experimental.md#subchanneladdress)

### Functions

- [createGoogleDefaultCredentials](grpc.grpc-1.experimental.md#creategoogledefaultcredentials)
- [getFirstUsableConfig](grpc.grpc-1.experimental.md#getfirstusableconfig)
- [registerLoadBalancerType](grpc.grpc-1.experimental.md#registerloadbalancertype)
- [registerResolver](grpc.grpc-1.experimental.md#registerresolver)
- [subchannelAddressToString](grpc.grpc-1.experimental.md#subchanneladdresstostring)
- [trace](grpc.grpc-1.experimental.md#trace)
- [uriToString](grpc.grpc-1.experimental.md#uritostring)
- [validateLoadBalancingConfig](grpc.grpc-1.experimental.md#validateloadbalancingconfig)

## Type aliases

### SubchannelAddress

Ƭ **SubchannelAddress**: TcpSubchannelAddress \| IpcSubchannelAddress

This represents a single backend address to connect to. This interface is a
subset of net.SocketConnectOpts, i.e. the options described at
https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener.
Those are in turn a subset of the options that can be passed to http2.connect.

Defined in: node_modules/@grpc/grpc-js/build/src/subchannel.d.ts:22

## Functions

### createGoogleDefaultCredentials

▸ **createGoogleDefaultCredentials**(): [*ChannelCredentials*](../classes/grpc.grpc-1.channelcredentials.md)

**Returns:** [*ChannelCredentials*](../classes/grpc.grpc-1.channelcredentials.md)

Defined in: node_modules/@grpc/grpc-js/build/src/channel-credentials.d.ts:80

___

### getFirstUsableConfig

▸ **getFirstUsableConfig**(`configs`: [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)[], `defaultPickFirst?`: *true*): [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)

#### Parameters:

Name | Type |
:------ | :------ |
`configs` | [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)[] |
`defaultPickFirst?` | *true* |

**Returns:** [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:82

___

### registerLoadBalancerType

▸ **registerLoadBalancerType**(`typeName`: *string*, `loadBalancerType`: LoadBalancerConstructor, `loadBalancingConfigType`: LoadBalancingConfigConstructor): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`typeName` | *string* |
`loadBalancerType` | LoadBalancerConstructor |
`loadBalancingConfigType` | LoadBalancingConfigConstructor |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:79

___

### registerResolver

▸ **registerResolver**(`scheme`: *string*, `resolverClass`: ResolverConstructor): *void*

Register a resolver class to handle target names prefixed with the `prefix`
string. This prefix should correspond to a URI scheme name listed in the
[gRPC Name Resolution document](https://github.com/grpc/grpc/blob/master/doc/naming.md)

#### Parameters:

Name | Type |
:------ | :------ |
`scheme` | *string* |
`resolverClass` | ResolverConstructor |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/resolver.d.ts:63

___

### subchannelAddressToString

▸ **subchannelAddressToString**(`address`: [*SubchannelAddress*](grpc.grpc-1.experimental.md#subchanneladdress)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`address` | [*SubchannelAddress*](grpc.grpc-1.experimental.md#subchanneladdress) |

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/subchannel.d.ts:25

___

### trace

▸ **trace**(`severity`: [*logVerbosity*](../enums/grpc.grpc-1.logverbosity.md), `tracer`: *string*, `text`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`severity` | [*logVerbosity*](../enums/grpc.grpc-1.logverbosity.md) |
`tracer` | *string* |
`text` | *string* |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/logging.d.ts:7

___

### uriToString

▸ **uriToString**(`uri`: [*GrpcUri*](../interfaces/grpc.grpc-1.experimental.grpcuri.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | [*GrpcUri*](../interfaces/grpc.grpc-1.experimental.grpcuri.md) |

**Returns:** *string*

Defined in: node_modules/@grpc/grpc-js/build/src/uri-parser.d.ts:12

___

### validateLoadBalancingConfig

▸ **validateLoadBalancingConfig**(`obj`: *any*): [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *any* |

**Returns:** [*LoadBalancingConfig*](../interfaces/grpc.grpc-1.experimental.loadbalancingconfig.md)

Defined in: node_modules/@grpc/grpc-js/build/src/load-balancer.d.ts:83
