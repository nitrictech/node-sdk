[@nitric/sdk](../README.md) / [grpc](../modules/grpc.md) / [grpc](../modules/grpc.grpc-1.md) / Metadata

# Class: Metadata

[grpc](../modules/grpc.md).[grpc](../modules/grpc.grpc-1.md).Metadata

Metadata

## Table of contents

### Constructors

- [constructor](grpc.grpc-1.metadata.md#constructor)

### Properties

- [\_getCoreRepresentation](grpc.grpc-1.metadata.md#_getcorerepresentation)
- [internalRepr](grpc.grpc-1.metadata.md#internalrepr)
- [options](grpc.grpc-1.metadata.md#options)

### Methods

- [add](grpc.grpc-1.metadata.md#add)
- [clone](grpc.grpc-1.metadata.md#clone)
- [get](grpc.grpc-1.metadata.md#get)
- [getMap](grpc.grpc-1.metadata.md#getmap)
- [getOptions](grpc.grpc-1.metadata.md#getoptions)
- [merge](grpc.grpc-1.metadata.md#merge)
- [remove](grpc.grpc-1.metadata.md#remove)
- [set](grpc.grpc-1.metadata.md#set)
- [setOptions](grpc.grpc-1.metadata.md#setoptions)
- [toHttp2Headers](grpc.grpc-1.metadata.md#tohttp2headers)
- [fromHttp2Headers](grpc.grpc-1.metadata.md#fromhttp2headers)

## Constructors

### constructor

\+ **new Metadata**(`options?`: MetadataOptions): [*Metadata*](grpc.grpc-1.metadata.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | MetadataOptions |

**Returns:** [*Metadata*](grpc.grpc-1.metadata.md)

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:16

## Properties

### \_getCoreRepresentation

• `Private` **\_getCoreRepresentation**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:72

___

### internalRepr

• `Protected` **internalRepr**: MetadataObject

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:15

___

### options

• `Private` **options**: *any*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:16

## Methods

### add

▸ **add**(`key`: *string*, `value`: [*MetadataValue*](../modules/grpc.grpc-1.md#metadatavalue)): *void*

Adds the given value for the given key by appending to a list of previous
values associated with that key. Normalizes the key.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key for which a new value should be appended.   |
`value` | [*MetadataValue*](../modules/grpc.grpc-1.md#metadatavalue) | The value to add. Must be a buffer if and only   if the normalized key ends with '-bin'.    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:33

___

### clone

▸ **clone**(): [*Metadata*](grpc.grpc-1.metadata.md)

Clones the metadata object.

**Returns:** [*Metadata*](grpc.grpc-1.metadata.md)

The newly cloned object.

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:57

___

### get

▸ **get**(`key`: *string*): [*MetadataValue*](../modules/grpc.grpc-1.md#metadatavalue)[]

Gets a list of all values associated with the key. Normalizes the key.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key whose value should be retrieved.   |

**Returns:** [*MetadataValue*](../modules/grpc.grpc-1.md#metadatavalue)[]

A list of values associated with the given key.

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:44

___

### getMap

▸ **getMap**(): *object*

Gets a plain object mapping each key to the first value associated with it.
This reflects the most common way that people will want to see metadata.

**Returns:** *object*

A key/value mapping of the metadata.

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:50

___

### getOptions

▸ **getOptions**(): MetadataOptions

**Returns:** MetadataOptions

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:67

___

### merge

▸ **merge**(`other`: [*Metadata*](grpc.grpc-1.metadata.md)): *void*

Merges all key-value pairs from a given Metadata object into this one.
If both this object and the given object have values in the same key,
values from the other Metadata object will be appended to this object's
values.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`other` | [*Metadata*](grpc.grpc-1.metadata.md) | A Metadata object.    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:65

___

### remove

▸ **remove**(`key`: *string*): *void*

Removes the given key and any associated values. Normalizes the key.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key whose values should be removed.    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:38

___

### set

▸ **set**(`key`: *string*, `value`: [*MetadataValue*](../modules/grpc.grpc-1.md#metadatavalue)): *void*

Sets the given value for the given key by replacing any other values
associated with that key. Normalizes the key.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key to whose value should be set.   |
`value` | [*MetadataValue*](../modules/grpc.grpc-1.md#metadatavalue) | The value to set. Must be a buffer if and only   if the normalized key ends with '-bin'.    |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:25

___

### setOptions

▸ **setOptions**(`options`: MetadataOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | MetadataOptions |

**Returns:** *void*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:66

___

### toHttp2Headers

▸ **toHttp2Headers**(): *OutgoingHttpHeaders*

Creates an OutgoingHttpHeaders object that can be used with the http2 API.

**Returns:** *OutgoingHttpHeaders*

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:71

___

### fromHttp2Headers

▸ `Static`**fromHttp2Headers**(`headers`: *IncomingHttpHeaders*): [*Metadata*](grpc.grpc-1.metadata.md)

Returns a new Metadata object based fields in a given IncomingHttpHeaders
object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`headers` | *IncomingHttpHeaders* | An IncomingHttpHeaders object.    |

**Returns:** [*Metadata*](grpc.grpc-1.metadata.md)

Defined in: node_modules/@grpc/grpc-js/build/src/metadata.d.ts:78
