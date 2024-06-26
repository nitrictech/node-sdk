// source: nitric/proto/sql/v1/sql.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.nitric.proto.sql.v1.SqlConnectionStringRequest', null, global);
goog.exportSymbol('proto.nitric.proto.sql.v1.SqlConnectionStringResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.sql.v1.SqlConnectionStringRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.sql.v1.SqlConnectionStringRequest.displayName = 'proto.nitric.proto.sql.v1.SqlConnectionStringRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.sql.v1.SqlConnectionStringResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.sql.v1.SqlConnectionStringResponse.displayName = 'proto.nitric.proto.sql.v1.SqlConnectionStringResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.sql.v1.SqlConnectionStringRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.sql.v1.SqlConnectionStringRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    databaseName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.proto.sql.v1.SqlConnectionStringRequest}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.sql.v1.SqlConnectionStringRequest;
  return proto.nitric.proto.sql.v1.SqlConnectionStringRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.sql.v1.SqlConnectionStringRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.sql.v1.SqlConnectionStringRequest}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabaseName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.sql.v1.SqlConnectionStringRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.sql.v1.SqlConnectionStringRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabaseName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string database_name = 1;
 * @return {string}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.prototype.getDatabaseName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.sql.v1.SqlConnectionStringRequest} returns this
 */
proto.nitric.proto.sql.v1.SqlConnectionStringRequest.prototype.setDatabaseName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.sql.v1.SqlConnectionStringResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.sql.v1.SqlConnectionStringResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionString: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.proto.sql.v1.SqlConnectionStringResponse}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.sql.v1.SqlConnectionStringResponse;
  return proto.nitric.proto.sql.v1.SqlConnectionStringResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.sql.v1.SqlConnectionStringResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.sql.v1.SqlConnectionStringResponse}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.sql.v1.SqlConnectionStringResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.sql.v1.SqlConnectionStringResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionString();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connection_string = 1;
 * @return {string}
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.prototype.getConnectionString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.sql.v1.SqlConnectionStringResponse} returns this
 */
proto.nitric.proto.sql.v1.SqlConnectionStringResponse.prototype.setConnectionString = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.nitric.proto.sql.v1);
