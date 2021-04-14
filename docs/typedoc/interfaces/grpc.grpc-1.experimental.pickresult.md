[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / [experimental](../modules/grpc.grpc-1.experimental.md) / PickResult

# Interface: PickResult

[grpc](../modules/grpc.grpc-1.md).[experimental](../modules/grpc.grpc-1.experimental.md).PickResult

## Table of contents

### Properties

- [extraFilterFactory](grpc.grpc-1.experimental.pickresult.md#extrafilterfactory)
- [onCallStarted](grpc.grpc-1.experimental.pickresult.md#oncallstarted)
- [pickResultType](grpc.grpc-1.experimental.pickresult.md#pickresulttype)
- [status](grpc.grpc-1.experimental.pickresult.md#status)
- [subchannel](grpc.grpc-1.experimental.pickresult.md#subchannel)

## Properties

### extraFilterFactory

• **extraFilterFactory**: [*FilterFactory*](grpc.grpc-1.experimental.filterfactory.md)<[*Filter*](grpc.grpc-1.experimental.filter.md)\>

Extra FilterFactory (can be multiple encapsulated in a FilterStackFactory)
provided by the load balancer to be used with the call. For technical
reasons filters from this factory will not see sendMetadata events.

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:30

___

### onCallStarted

• **onCallStarted**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:31

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:31

___

### pickResultType

• **pickResultType**: [*PickResultType*](../enums/grpc.grpc-1.experimental.pickresulttype.md)

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:13

___

### status

• **status**: [*StatusObject*](grpc.grpc-1.statusobject.md)

The status object to end the call with. Populated if and only if
`pickResultType` is TRANSIENT_FAILURE.

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:24

___

### subchannel

• **subchannel**: *Subchannel*

The subchannel to use as the transport for the call. Only meaningful if
`pickResultType` is COMPLETE. If null, indicates that the call should be
dropped.

Defined in: node_modules/@grpc/grpc-js/build/src/picker.d.ts:19
