var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/gen/nitric/proto/topics/v1/topics_pb.js
var require_topics_pb = __commonJS({
  "src/gen/nitric/proto/topics/v1/topics_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    goog.object.extend(proto, google_protobuf_struct_pb);
    var google_protobuf_duration_pb = require("google-protobuf/google/protobuf/duration_pb.js");
    goog.object.extend(proto, google_protobuf_duration_pb);
    goog.exportSymbol("proto.nitric.proto.topics.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.ClientMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.Message", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.Message.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.MessageRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.MessageResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.RegistrationRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.RegistrationResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.ServerMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.ServerMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.TopicPublishRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.topics.v1.TopicPublishResponse", null, global);
    proto.nitric.proto.topics.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.topics.v1.ClientMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.topics.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.ClientMessage.displayName = "proto.nitric.proto.topics.v1.ClientMessage";
    }
    proto.nitric.proto.topics.v1.MessageRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.topics.v1.MessageRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.MessageRequest.displayName = "proto.nitric.proto.topics.v1.MessageRequest";
    }
    proto.nitric.proto.topics.v1.MessageResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.topics.v1.MessageResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.MessageResponse.displayName = "proto.nitric.proto.topics.v1.MessageResponse";
    }
    proto.nitric.proto.topics.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.topics.v1.ServerMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.topics.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.ServerMessage.displayName = "proto.nitric.proto.topics.v1.ServerMessage";
    }
    proto.nitric.proto.topics.v1.RegistrationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.topics.v1.RegistrationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.RegistrationRequest.displayName = "proto.nitric.proto.topics.v1.RegistrationRequest";
    }
    proto.nitric.proto.topics.v1.RegistrationResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.topics.v1.RegistrationResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.RegistrationResponse.displayName = "proto.nitric.proto.topics.v1.RegistrationResponse";
    }
    proto.nitric.proto.topics.v1.Message = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.topics.v1.Message.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.topics.v1.Message, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.Message.displayName = "proto.nitric.proto.topics.v1.Message";
    }
    proto.nitric.proto.topics.v1.TopicPublishRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.topics.v1.TopicPublishRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.TopicPublishRequest.displayName = "proto.nitric.proto.topics.v1.TopicPublishRequest";
    }
    proto.nitric.proto.topics.v1.TopicPublishResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.topics.v1.TopicPublishResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.topics.v1.TopicPublishResponse.displayName = "proto.nitric.proto.topics.v1.TopicPublishResponse";
    }
    proto.nitric.proto.topics.v1.ClientMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.topics.v1.ClientMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_REQUEST: 2,
      MESSAGE_RESPONSE: 3
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.topics.v1.ClientMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.topics.v1.ClientMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationRequest: (f = msg.getRegistrationRequest()) && proto.nitric.proto.topics.v1.RegistrationRequest.toObject(includeInstance, f),
          messageResponse: (f = msg.getMessageResponse()) && proto.nitric.proto.topics.v1.MessageResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.ClientMessage();
      return proto.nitric.proto.topics.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.topics.v1.RegistrationRequest();
            reader.readMessage(value, proto.nitric.proto.topics.v1.RegistrationRequest.deserializeBinaryFromReader);
            msg.setRegistrationRequest(value);
            break;
          case 3:
            var value = new proto.nitric.proto.topics.v1.MessageResponse();
            reader.readMessage(value, proto.nitric.proto.topics.v1.MessageResponse.deserializeBinaryFromReader);
            msg.setMessageResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.topics.v1.RegistrationRequest.serializeBinaryToWriter
        );
      }
      f = message.getMessageResponse();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.topics.v1.MessageResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.getRegistrationRequest = function() {
      return (
        /** @type{?proto.nitric.proto.topics.v1.RegistrationRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.topics.v1.RegistrationRequest, 2)
      );
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.setRegistrationRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.topics.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.clearRegistrationRequest = function() {
      return this.setRegistrationRequest(void 0);
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.hasRegistrationRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.getMessageResponse = function() {
      return (
        /** @type{?proto.nitric.proto.topics.v1.MessageResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.topics.v1.MessageResponse, 3)
      );
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.setMessageResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.topics.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.clearMessageResponse = function() {
      return this.setMessageResponse(void 0);
    };
    proto.nitric.proto.topics.v1.ClientMessage.prototype.hasMessageResponse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.MessageRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.MessageRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.MessageRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          topicName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          message: (f = msg.getMessage()) && proto.nitric.proto.topics.v1.Message.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.MessageRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.MessageRequest();
      return proto.nitric.proto.topics.v1.MessageRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.MessageRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTopicName(value);
            break;
          case 2:
            var value = new proto.nitric.proto.topics.v1.Message();
            reader.readMessage(value, proto.nitric.proto.topics.v1.Message.deserializeBinaryFromReader);
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.MessageRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.MessageRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopicName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getMessage();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.topics.v1.Message.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.getTopicName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.setTopicName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.getMessage = function() {
      return (
        /** @type{?proto.nitric.proto.topics.v1.Message} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.topics.v1.Message, 2)
      );
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.setMessage = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.clearMessage = function() {
      return this.setMessage(void 0);
    };
    proto.nitric.proto.topics.v1.MessageRequest.prototype.hasMessage = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.MessageResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.MessageResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.MessageResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.MessageResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.MessageResponse();
      return proto.nitric.proto.topics.v1.MessageResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.MessageResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setSuccess(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.MessageResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.MessageResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.MessageResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSuccess();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.proto.topics.v1.MessageResponse.prototype.getSuccess = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.proto.topics.v1.MessageResponse.prototype.setSuccess = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    proto.nitric.proto.topics.v1.ServerMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.topics.v1.ServerMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_RESPONSE: 2,
      MESSAGE_REQUEST: 3
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.topics.v1.ServerMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.topics.v1.ServerMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationResponse: (f = msg.getRegistrationResponse()) && proto.nitric.proto.topics.v1.RegistrationResponse.toObject(includeInstance, f),
          messageRequest: (f = msg.getMessageRequest()) && proto.nitric.proto.topics.v1.MessageRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.ServerMessage();
      return proto.nitric.proto.topics.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.topics.v1.RegistrationResponse();
            reader.readMessage(value, proto.nitric.proto.topics.v1.RegistrationResponse.deserializeBinaryFromReader);
            msg.setRegistrationResponse(value);
            break;
          case 3:
            var value = new proto.nitric.proto.topics.v1.MessageRequest();
            reader.readMessage(value, proto.nitric.proto.topics.v1.MessageRequest.deserializeBinaryFromReader);
            msg.setMessageRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationResponse();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.topics.v1.RegistrationResponse.serializeBinaryToWriter
        );
      }
      f = message.getMessageRequest();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.topics.v1.MessageRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.getRegistrationResponse = function() {
      return (
        /** @type{?proto.nitric.proto.topics.v1.RegistrationResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.topics.v1.RegistrationResponse, 2)
      );
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.setRegistrationResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.topics.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.clearRegistrationResponse = function() {
      return this.setRegistrationResponse(void 0);
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.hasRegistrationResponse = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.getMessageRequest = function() {
      return (
        /** @type{?proto.nitric.proto.topics.v1.MessageRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.topics.v1.MessageRequest, 3)
      );
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.setMessageRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.topics.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.clearMessageRequest = function() {
      return this.setMessageRequest(void 0);
    };
    proto.nitric.proto.topics.v1.ServerMessage.prototype.hasMessageRequest = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.RegistrationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.RegistrationRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.RegistrationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          topicName: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.RegistrationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.RegistrationRequest();
      return proto.nitric.proto.topics.v1.RegistrationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.RegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTopicName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.RegistrationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.RegistrationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.RegistrationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopicName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.topics.v1.RegistrationRequest.prototype.getTopicName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.topics.v1.RegistrationRequest.prototype.setTopicName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.RegistrationResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.RegistrationResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.RegistrationResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.RegistrationResponse();
      return proto.nitric.proto.topics.v1.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.RegistrationResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.RegistrationResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.proto.topics.v1.Message.oneofGroups_ = [[1]];
    proto.nitric.proto.topics.v1.Message.ContentCase = {
      CONTENT_NOT_SET: 0,
      STRUCT_PAYLOAD: 1
    };
    proto.nitric.proto.topics.v1.Message.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.topics.v1.Message.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.topics.v1.Message.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.Message.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.Message.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.Message.toObject = function(includeInstance, msg) {
        var f, obj = {
          structPayload: (f = msg.getStructPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.Message.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.Message();
      return proto.nitric.proto.topics.v1.Message.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.Message.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new google_protobuf_struct_pb.Struct();
            reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
            msg.setStructPayload(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.Message.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.Message.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.Message.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getStructPayload();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          google_protobuf_struct_pb.Struct.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.topics.v1.Message.prototype.getStructPayload = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1)
      );
    };
    proto.nitric.proto.topics.v1.Message.prototype.setStructPayload = function(value) {
      return jspb.Message.setOneofWrapperField(this, 1, proto.nitric.proto.topics.v1.Message.oneofGroups_[0], value);
    };
    proto.nitric.proto.topics.v1.Message.prototype.clearStructPayload = function() {
      return this.setStructPayload(void 0);
    };
    proto.nitric.proto.topics.v1.Message.prototype.hasStructPayload = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.TopicPublishRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.TopicPublishRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          topicName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          message: (f = msg.getMessage()) && proto.nitric.proto.topics.v1.Message.toObject(includeInstance, f),
          delay: (f = msg.getDelay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.TopicPublishRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.TopicPublishRequest();
      return proto.nitric.proto.topics.v1.TopicPublishRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTopicName(value);
            break;
          case 2:
            var value = new proto.nitric.proto.topics.v1.Message();
            reader.readMessage(value, proto.nitric.proto.topics.v1.Message.deserializeBinaryFromReader);
            msg.setMessage(value);
            break;
          case 3:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setDelay(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.TopicPublishRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopicName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getMessage();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.topics.v1.Message.serializeBinaryToWriter
        );
      }
      f = message.getDelay();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.getTopicName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.setTopicName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.getMessage = function() {
      return (
        /** @type{?proto.nitric.proto.topics.v1.Message} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.topics.v1.Message, 2)
      );
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.setMessage = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.clearMessage = function() {
      return this.setMessage(void 0);
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.hasMessage = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.getDelay = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3)
      );
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.setDelay = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.clearDelay = function() {
      return this.setDelay(void 0);
    };
    proto.nitric.proto.topics.v1.TopicPublishRequest.prototype.hasDelay = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.topics.v1.TopicPublishResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.topics.v1.TopicPublishResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.topics.v1.TopicPublishResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.topics.v1.TopicPublishResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.topics.v1.TopicPublishResponse();
      return proto.nitric.proto.topics.v1.TopicPublishResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.topics.v1.TopicPublishResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.topics.v1.TopicPublishResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.topics.v1.TopicPublishResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.topics.v1.TopicPublishResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    goog.object.extend(exports, proto.nitric.proto.topics.v1);
  }
});

// src/gen/nitric/proto/topics/v1/topics_grpc_pb.js
var require_topics_grpc_pb = __commonJS({
  "src/gen/nitric/proto/topics/v1/topics_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_topics_v1_topics_pb = require_topics_pb();
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    var google_protobuf_duration_pb = require("google-protobuf/google/protobuf/duration_pb.js");
    function serialize_nitric_proto_topics_v1_ClientMessage(arg) {
      if (!(arg instanceof nitric_proto_topics_v1_topics_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.proto.topics.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_topics_v1_ClientMessage(buffer_arg) {
      return nitric_proto_topics_v1_topics_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_topics_v1_ServerMessage(arg) {
      if (!(arg instanceof nitric_proto_topics_v1_topics_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.proto.topics.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_topics_v1_ServerMessage(buffer_arg) {
      return nitric_proto_topics_v1_topics_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_topics_v1_TopicPublishRequest(arg) {
      if (!(arg instanceof nitric_proto_topics_v1_topics_pb.TopicPublishRequest)) {
        throw new Error("Expected argument of type nitric.proto.topics.v1.TopicPublishRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_topics_v1_TopicPublishRequest(buffer_arg) {
      return nitric_proto_topics_v1_topics_pb.TopicPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_topics_v1_TopicPublishResponse(arg) {
      if (!(arg instanceof nitric_proto_topics_v1_topics_pb.TopicPublishResponse)) {
        throw new Error("Expected argument of type nitric.proto.topics.v1.TopicPublishResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_topics_v1_TopicPublishResponse(buffer_arg) {
      return nitric_proto_topics_v1_topics_pb.TopicPublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var TopicsService = exports.TopicsService = {
      // Publishes a message to a given topic
      publish: {
        path: "/nitric.proto.topics.v1.Topics/Publish",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_topics_v1_topics_pb.TopicPublishRequest,
        responseType: nitric_proto_topics_v1_topics_pb.TopicPublishResponse,
        requestSerialize: serialize_nitric_proto_topics_v1_TopicPublishRequest,
        requestDeserialize: deserialize_nitric_proto_topics_v1_TopicPublishRequest,
        responseSerialize: serialize_nitric_proto_topics_v1_TopicPublishResponse,
        responseDeserialize: deserialize_nitric_proto_topics_v1_TopicPublishResponse
      }
    };
    exports.TopicsClient = grpc13.makeGenericClientConstructor(TopicsService);
    var SubscriberService = exports.SubscriberService = {
      // Subscribe to a topic and handle incoming messages
      subscribe: {
        path: "/nitric.proto.topics.v1.Subscriber/Subscribe",
        requestStream: true,
        responseStream: true,
        requestType: nitric_proto_topics_v1_topics_pb.ClientMessage,
        responseType: nitric_proto_topics_v1_topics_pb.ServerMessage,
        requestSerialize: serialize_nitric_proto_topics_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_proto_topics_v1_ClientMessage,
        responseSerialize: serialize_nitric_proto_topics_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_proto_topics_v1_ServerMessage
      }
    };
    exports.SubscriberClient = grpc13.makeGenericClientConstructor(SubscriberService);
  }
});

// src/gen/nitric/proto/resources/v1/resources_pb.js
var require_resources_pb = __commonJS({
  "src/gen/nitric/proto/resources/v1/resources_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.nitric.proto.resources.v1.Action", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ApiResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ApiScopes", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.DefinitionCase", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.BucketResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.KeyValueStoreResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.PolicyResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.QueueResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ResourceDeclareRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ResourceDeclareRequest.ConfigCase", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ResourceDeclareResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ResourceIdentifier", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.ResourceType", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.SecretResource", null, global);
    goog.exportSymbol("proto.nitric.proto.resources.v1.TopicResource", null, global);
    proto.nitric.proto.resources.v1.PolicyResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.resources.v1.PolicyResource.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.PolicyResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.PolicyResource.displayName = "proto.nitric.proto.resources.v1.PolicyResource";
    }
    proto.nitric.proto.resources.v1.ResourceIdentifier = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ResourceIdentifier, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ResourceIdentifier.displayName = "proto.nitric.proto.resources.v1.ResourceIdentifier";
    }
    proto.nitric.proto.resources.v1.ResourceDeclareRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ResourceDeclareRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ResourceDeclareRequest.displayName = "proto.nitric.proto.resources.v1.ResourceDeclareRequest";
    }
    proto.nitric.proto.resources.v1.BucketResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.BucketResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.BucketResource.displayName = "proto.nitric.proto.resources.v1.BucketResource";
    }
    proto.nitric.proto.resources.v1.TopicResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.TopicResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.TopicResource.displayName = "proto.nitric.proto.resources.v1.TopicResource";
    }
    proto.nitric.proto.resources.v1.QueueResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.QueueResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.QueueResource.displayName = "proto.nitric.proto.resources.v1.QueueResource";
    }
    proto.nitric.proto.resources.v1.KeyValueStoreResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.KeyValueStoreResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.KeyValueStoreResource.displayName = "proto.nitric.proto.resources.v1.KeyValueStoreResource";
    }
    proto.nitric.proto.resources.v1.SecretResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.SecretResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.SecretResource.displayName = "proto.nitric.proto.resources.v1.SecretResource";
    }
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.displayName = "proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition";
    }
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.displayName = "proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource";
    }
    proto.nitric.proto.resources.v1.ApiScopes = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.resources.v1.ApiScopes.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ApiScopes, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ApiScopes.displayName = "proto.nitric.proto.resources.v1.ApiScopes";
    }
    proto.nitric.proto.resources.v1.ApiResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ApiResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ApiResource.displayName = "proto.nitric.proto.resources.v1.ApiResource";
    }
    proto.nitric.proto.resources.v1.ResourceDeclareResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.resources.v1.ResourceDeclareResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.resources.v1.ResourceDeclareResponse.displayName = "proto.nitric.proto.resources.v1.ResourceDeclareResponse";
    }
    proto.nitric.proto.resources.v1.PolicyResource.repeatedFields_ = [1, 2, 3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.PolicyResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.PolicyResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.PolicyResource.toObject = function(includeInstance, msg) {
        var f, obj = {
          principalsList: jspb.Message.toObjectList(
            msg.getPrincipalsList(),
            proto.nitric.proto.resources.v1.ResourceIdentifier.toObject,
            includeInstance
          ),
          actionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? void 0 : f,
          resourcesList: jspb.Message.toObjectList(
            msg.getResourcesList(),
            proto.nitric.proto.resources.v1.ResourceIdentifier.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.PolicyResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.PolicyResource();
      return proto.nitric.proto.resources.v1.PolicyResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.PolicyResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.resources.v1.ResourceIdentifier();
            reader.readMessage(value, proto.nitric.proto.resources.v1.ResourceIdentifier.deserializeBinaryFromReader);
            msg.addPrincipals(value);
            break;
          case 2:
            var values = (
              /** @type {!Array<!proto.nitric.proto.resources.v1.Action>} */
              reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addActions(values[i]);
            }
            break;
          case 3:
            var value = new proto.nitric.proto.resources.v1.ResourceIdentifier();
            reader.readMessage(value, proto.nitric.proto.resources.v1.ResourceIdentifier.deserializeBinaryFromReader);
            msg.addResources(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.PolicyResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.PolicyResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getPrincipalsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.proto.resources.v1.ResourceIdentifier.serializeBinaryToWriter
        );
      }
      f = message.getActionsList();
      if (f.length > 0) {
        writer.writePackedEnum(
          2,
          f
        );
      }
      f = message.getResourcesList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          3,
          f,
          proto.nitric.proto.resources.v1.ResourceIdentifier.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.getPrincipalsList = function() {
      return (
        /** @type{!Array<!proto.nitric.proto.resources.v1.ResourceIdentifier>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.resources.v1.ResourceIdentifier, 1)
      );
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.setPrincipalsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.addPrincipals = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.proto.resources.v1.ResourceIdentifier, opt_index);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.clearPrincipalsList = function() {
      return this.setPrincipalsList([]);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.getActionsList = function() {
      return (
        /** @type {!Array<!proto.nitric.proto.resources.v1.Action>} */
        jspb.Message.getRepeatedField(this, 2)
      );
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.setActionsList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.addActions = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.clearActionsList = function() {
      return this.setActionsList([]);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.getResourcesList = function() {
      return (
        /** @type{!Array<!proto.nitric.proto.resources.v1.ResourceIdentifier>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.resources.v1.ResourceIdentifier, 3)
      );
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.setResourcesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.addResources = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nitric.proto.resources.v1.ResourceIdentifier, opt_index);
    };
    proto.nitric.proto.resources.v1.PolicyResource.prototype.clearResourcesList = function() {
      return this.setResourcesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ResourceIdentifier.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ResourceIdentifier.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ResourceIdentifier.toObject = function(includeInstance, msg) {
        var f, obj = {
          type: jspb.Message.getFieldWithDefault(msg, 1, 0),
          name: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ResourceIdentifier.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ResourceIdentifier();
      return proto.nitric.proto.resources.v1.ResourceIdentifier.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!proto.nitric.proto.resources.v1.ResourceType} */
              reader.readEnum()
            );
            msg.setType(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ResourceIdentifier.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getType();
      if (f !== 0) {
        writer.writeEnum(
          1,
          f
        );
      }
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.prototype.getType = function() {
      return (
        /** @type {!proto.nitric.proto.resources.v1.ResourceType} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.prototype.setType = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.resources.v1.ResourceIdentifier.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_ = [[10, 11, 12, 13, 14, 15, 16, 17]];
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.ConfigCase = {
      CONFIG_NOT_SET: 0,
      POLICY: 10,
      BUCKET: 11,
      TOPIC: 12,
      KEY_VALUE_STORE: 13,
      SECRET: 14,
      API: 15,
      API_SECURITY_DEFINITION: 16,
      QUEUE: 17
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getConfigCase = function() {
      return (
        /** @type {proto.nitric.proto.resources.v1.ResourceDeclareRequest.ConfigCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ResourceDeclareRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ResourceDeclareRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: (f = msg.getId()) && proto.nitric.proto.resources.v1.ResourceIdentifier.toObject(includeInstance, f),
          policy: (f = msg.getPolicy()) && proto.nitric.proto.resources.v1.PolicyResource.toObject(includeInstance, f),
          bucket: (f = msg.getBucket()) && proto.nitric.proto.resources.v1.BucketResource.toObject(includeInstance, f),
          topic: (f = msg.getTopic()) && proto.nitric.proto.resources.v1.TopicResource.toObject(includeInstance, f),
          keyValueStore: (f = msg.getKeyValueStore()) && proto.nitric.proto.resources.v1.KeyValueStoreResource.toObject(includeInstance, f),
          secret: (f = msg.getSecret()) && proto.nitric.proto.resources.v1.SecretResource.toObject(includeInstance, f),
          api: (f = msg.getApi()) && proto.nitric.proto.resources.v1.ApiResource.toObject(includeInstance, f),
          apiSecurityDefinition: (f = msg.getApiSecurityDefinition()) && proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.toObject(includeInstance, f),
          queue: (f = msg.getQueue()) && proto.nitric.proto.resources.v1.QueueResource.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ResourceDeclareRequest();
      return proto.nitric.proto.resources.v1.ResourceDeclareRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.resources.v1.ResourceIdentifier();
            reader.readMessage(value, proto.nitric.proto.resources.v1.ResourceIdentifier.deserializeBinaryFromReader);
            msg.setId(value);
            break;
          case 10:
            var value = new proto.nitric.proto.resources.v1.PolicyResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.PolicyResource.deserializeBinaryFromReader);
            msg.setPolicy(value);
            break;
          case 11:
            var value = new proto.nitric.proto.resources.v1.BucketResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.BucketResource.deserializeBinaryFromReader);
            msg.setBucket(value);
            break;
          case 12:
            var value = new proto.nitric.proto.resources.v1.TopicResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.TopicResource.deserializeBinaryFromReader);
            msg.setTopic(value);
            break;
          case 13:
            var value = new proto.nitric.proto.resources.v1.KeyValueStoreResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.KeyValueStoreResource.deserializeBinaryFromReader);
            msg.setKeyValueStore(value);
            break;
          case 14:
            var value = new proto.nitric.proto.resources.v1.SecretResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.SecretResource.deserializeBinaryFromReader);
            msg.setSecret(value);
            break;
          case 15:
            var value = new proto.nitric.proto.resources.v1.ApiResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.ApiResource.deserializeBinaryFromReader);
            msg.setApi(value);
            break;
          case 16:
            var value = new proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.deserializeBinaryFromReader);
            msg.setApiSecurityDefinition(value);
            break;
          case 17:
            var value = new proto.nitric.proto.resources.v1.QueueResource();
            reader.readMessage(value, proto.nitric.proto.resources.v1.QueueResource.deserializeBinaryFromReader);
            msg.setQueue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ResourceDeclareRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.resources.v1.ResourceIdentifier.serializeBinaryToWriter
        );
      }
      f = message.getPolicy();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.proto.resources.v1.PolicyResource.serializeBinaryToWriter
        );
      }
      f = message.getBucket();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.proto.resources.v1.BucketResource.serializeBinaryToWriter
        );
      }
      f = message.getTopic();
      if (f != null) {
        writer.writeMessage(
          12,
          f,
          proto.nitric.proto.resources.v1.TopicResource.serializeBinaryToWriter
        );
      }
      f = message.getKeyValueStore();
      if (f != null) {
        writer.writeMessage(
          13,
          f,
          proto.nitric.proto.resources.v1.KeyValueStoreResource.serializeBinaryToWriter
        );
      }
      f = message.getSecret();
      if (f != null) {
        writer.writeMessage(
          14,
          f,
          proto.nitric.proto.resources.v1.SecretResource.serializeBinaryToWriter
        );
      }
      f = message.getApi();
      if (f != null) {
        writer.writeMessage(
          15,
          f,
          proto.nitric.proto.resources.v1.ApiResource.serializeBinaryToWriter
        );
      }
      f = message.getApiSecurityDefinition();
      if (f != null) {
        writer.writeMessage(
          16,
          f,
          proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.serializeBinaryToWriter
        );
      }
      f = message.getQueue();
      if (f != null) {
        writer.writeMessage(
          17,
          f,
          proto.nitric.proto.resources.v1.QueueResource.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getId = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.ResourceIdentifier} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.ResourceIdentifier, 1)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setId = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearId = function() {
      return this.setId(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasId = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getPolicy = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.PolicyResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.PolicyResource, 10)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setPolicy = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearPolicy = function() {
      return this.setPolicy(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasPolicy = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getBucket = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.BucketResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.BucketResource, 11)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setBucket = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearBucket = function() {
      return this.setBucket(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasBucket = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getTopic = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.TopicResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.TopicResource, 12)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setTopic = function(value) {
      return jspb.Message.setOneofWrapperField(this, 12, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearTopic = function() {
      return this.setTopic(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasTopic = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getKeyValueStore = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.KeyValueStoreResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.KeyValueStoreResource, 13)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setKeyValueStore = function(value) {
      return jspb.Message.setOneofWrapperField(this, 13, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearKeyValueStore = function() {
      return this.setKeyValueStore(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasKeyValueStore = function() {
      return jspb.Message.getField(this, 13) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getSecret = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.SecretResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.SecretResource, 14)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setSecret = function(value) {
      return jspb.Message.setOneofWrapperField(this, 14, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearSecret = function() {
      return this.setSecret(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasSecret = function() {
      return jspb.Message.getField(this, 14) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getApi = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.ApiResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.ApiResource, 15)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setApi = function(value) {
      return jspb.Message.setOneofWrapperField(this, 15, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearApi = function() {
      return this.setApi(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasApi = function() {
      return jspb.Message.getField(this, 15) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getApiSecurityDefinition = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource, 16)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setApiSecurityDefinition = function(value) {
      return jspb.Message.setOneofWrapperField(this, 16, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearApiSecurityDefinition = function() {
      return this.setApiSecurityDefinition(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasApiSecurityDefinition = function() {
      return jspb.Message.getField(this, 16) != null;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.getQueue = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.QueueResource} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.QueueResource, 17)
      );
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.setQueue = function(value) {
      return jspb.Message.setOneofWrapperField(this, 17, proto.nitric.proto.resources.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.clearQueue = function() {
      return this.setQueue(void 0);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareRequest.prototype.hasQueue = function() {
      return jspb.Message.getField(this, 17) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.BucketResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.BucketResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.BucketResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.BucketResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.BucketResource();
      return proto.nitric.proto.resources.v1.BucketResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.BucketResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.BucketResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.BucketResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.BucketResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.TopicResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.TopicResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.TopicResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.TopicResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.TopicResource();
      return proto.nitric.proto.resources.v1.TopicResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.TopicResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.TopicResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.TopicResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.TopicResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.QueueResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.QueueResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.QueueResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.QueueResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.QueueResource();
      return proto.nitric.proto.resources.v1.QueueResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.QueueResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.QueueResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.QueueResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.QueueResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.KeyValueStoreResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.KeyValueStoreResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.KeyValueStoreResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.KeyValueStoreResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.KeyValueStoreResource();
      return proto.nitric.proto.resources.v1.KeyValueStoreResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.KeyValueStoreResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.KeyValueStoreResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.KeyValueStoreResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.KeyValueStoreResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.SecretResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.SecretResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.SecretResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.SecretResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.SecretResource();
      return proto.nitric.proto.resources.v1.SecretResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.SecretResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.SecretResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.SecretResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.SecretResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.toObject = function(includeInstance, msg) {
        var f, obj = {
          issuer: jspb.Message.getFieldWithDefault(msg, 1, ""),
          audiencesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition();
      return proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setIssuer(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addAudiences(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getIssuer();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getAudiencesList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.getIssuer = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.setIssuer = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.getAudiencesList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 2)
      );
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.setAudiencesList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.addAudiences = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.prototype.clearAudiencesList = function() {
      return this.setAudiencesList([]);
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.oneofGroups_ = [[2]];
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.DefinitionCase = {
      DEFINITION_NOT_SET: 0,
      OIDC: 2
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.getDefinitionCase = function() {
      return (
        /** @type {proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.DefinitionCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.toObject = function(includeInstance, msg) {
        var f, obj = {
          apiName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          oidc: (f = msg.getOidc()) && proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource();
      return proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setApiName(value);
            break;
          case 2:
            var value = new proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition();
            reader.readMessage(value, proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.deserializeBinaryFromReader);
            msg.setOidc(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getApiName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getOidc();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.getApiName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.setApiName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.getOidc = function() {
      return (
        /** @type{?proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.resources.v1.ApiOpenIdConnectionDefinition, 2)
      );
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.setOidc = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.oneofGroups_[0], value);
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.clearOidc = function() {
      return this.setOidc(void 0);
    };
    proto.nitric.proto.resources.v1.ApiSecurityDefinitionResource.prototype.hasOidc = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.resources.v1.ApiScopes.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ApiScopes.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ApiScopes.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ApiScopes.toObject = function(includeInstance, msg) {
        var f, obj = {
          scopesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ApiScopes.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ApiScopes();
      return proto.nitric.proto.resources.v1.ApiScopes.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ApiScopes.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addScopes(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ApiScopes.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ApiScopes.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ApiScopes.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScopesList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.resources.v1.ApiScopes.prototype.getScopesList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.proto.resources.v1.ApiScopes.prototype.setScopesList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.proto.resources.v1.ApiScopes.prototype.addScopes = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.proto.resources.v1.ApiScopes.prototype.clearScopesList = function() {
      return this.setScopesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ApiResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ApiResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ApiResource.toObject = function(includeInstance, msg) {
        var f, obj = {
          securityMap: (f = msg.getSecurityMap()) ? f.toObject(includeInstance, proto.nitric.proto.resources.v1.ApiScopes.toObject) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ApiResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ApiResource();
      return proto.nitric.proto.resources.v1.ApiResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ApiResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getSecurityMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.proto.resources.v1.ApiScopes.deserializeBinaryFromReader, "", new proto.nitric.proto.resources.v1.ApiScopes());
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ApiResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ApiResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ApiResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecurityMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.proto.resources.v1.ApiScopes.serializeBinaryToWriter);
      }
    };
    proto.nitric.proto.resources.v1.ApiResource.prototype.getSecurityMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.proto.resources.v1.ApiScopes>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          proto.nitric.proto.resources.v1.ApiScopes
        )
      );
    };
    proto.nitric.proto.resources.v1.ApiResource.prototype.clearSecurityMap = function() {
      this.getSecurityMap().clear();
      return this;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.resources.v1.ResourceDeclareResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.resources.v1.ResourceDeclareResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.resources.v1.ResourceDeclareResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.resources.v1.ResourceDeclareResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.resources.v1.ResourceDeclareResponse();
      return proto.nitric.proto.resources.v1.ResourceDeclareResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.resources.v1.ResourceDeclareResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.resources.v1.ResourceDeclareResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.resources.v1.ResourceDeclareResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.resources.v1.ResourceDeclareResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.proto.resources.v1.ResourceType = {
      API: 0,
      SERVICE: 1,
      BUCKET: 2,
      TOPIC: 3,
      SCHEDULE: 4,
      SUBSCRIPTION: 5,
      KEYVALUESTORE: 6,
      POLICY: 7,
      SECRET: 8,
      BUCKETLISTENER: 9,
      WEBSOCKET: 10,
      HTTP: 11,
      APISECURITYDEFINITION: 12,
      QUEUE: 13
    };
    proto.nitric.proto.resources.v1.Action = {
      BUCKETFILELIST: 0,
      BUCKETFILEGET: 1,
      BUCKETFILEPUT: 2,
      BUCKETFILEDELETE: 3,
      TOPICLIST: 200,
      TOPICDETAIL: 201,
      TOPICEVENTPUBLISH: 202,
      KEYVALUESTOREREAD: 300,
      KEYVALUESTOREWRITE: 301,
      KEYVALUESTOREDELETE: 302,
      SECRETPUT: 400,
      SECRETACCESS: 401,
      WEBSOCKETMANAGE: 500,
      QUEUESEND: 600,
      QUEUERECEIVE: 601,
      QUEUELIST: 602,
      QUEUEDETAIL: 603
    };
    goog.object.extend(exports, proto.nitric.proto.resources.v1);
  }
});

// src/gen/nitric/proto/resources/v1/resources_grpc_pb.js
var require_resources_grpc_pb = __commonJS({
  "src/gen/nitric/proto/resources/v1/resources_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_resources_v1_resources_pb = require_resources_pb();
    function serialize_nitric_proto_resources_v1_ResourceDeclareRequest(arg) {
      if (!(arg instanceof nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest)) {
        throw new Error("Expected argument of type nitric.proto.resources.v1.ResourceDeclareRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_resources_v1_ResourceDeclareRequest(buffer_arg) {
      return nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_resources_v1_ResourceDeclareResponse(arg) {
      if (!(arg instanceof nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse)) {
        throw new Error("Expected argument of type nitric.proto.resources.v1.ResourceDeclareResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_resources_v1_ResourceDeclareResponse(buffer_arg) {
      return nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var ResourcesService = exports.ResourcesService = {
      // Declare a resource for the nitric application
      // At Deploy time this will create resources as part of the nitric stacks dependency graph
      // At runtime
      declare: {
        path: "/nitric.proto.resources.v1.Resources/Declare",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_resources_v1_resources_pb.ResourceDeclareRequest,
        responseType: nitric_proto_resources_v1_resources_pb.ResourceDeclareResponse,
        requestSerialize: serialize_nitric_proto_resources_v1_ResourceDeclareRequest,
        requestDeserialize: deserialize_nitric_proto_resources_v1_ResourceDeclareRequest,
        responseSerialize: serialize_nitric_proto_resources_v1_ResourceDeclareResponse,
        responseDeserialize: deserialize_nitric_proto_resources_v1_ResourceDeclareResponse
      }
    };
    exports.ResourcesClient = grpc13.makeGenericClientConstructor(ResourcesService);
  }
});

// src/gen/nitric/proto/keyvalue/v1/keyvalue_pb.js
var require_keyvalue_pb = __commonJS({
  "src/gen/nitric/proto/keyvalue/v1/keyvalue_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    goog.object.extend(proto, google_protobuf_struct_pb);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.KeyValueGetRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.KeyValueGetResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.KeyValueSetRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.KeyValueSetResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.Store", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.Value", null, global);
    goog.exportSymbol("proto.nitric.proto.KeyValue.v1.ValueRef", null, global);
    proto.nitric.proto.KeyValue.v1.Store = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.Store, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.Store.displayName = "proto.nitric.proto.KeyValue.v1.Store";
    }
    proto.nitric.proto.KeyValue.v1.ValueRef = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.ValueRef, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.ValueRef.displayName = "proto.nitric.proto.KeyValue.v1.ValueRef";
    }
    proto.nitric.proto.KeyValue.v1.Value = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.Value, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.Value.displayName = "proto.nitric.proto.KeyValue.v1.Value";
    }
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.KeyValueGetRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.displayName = "proto.nitric.proto.KeyValue.v1.KeyValueGetRequest";
    }
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.KeyValueGetResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.displayName = "proto.nitric.proto.KeyValue.v1.KeyValueGetResponse";
    }
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.KeyValueSetRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.displayName = "proto.nitric.proto.KeyValue.v1.KeyValueSetRequest";
    }
    proto.nitric.proto.KeyValue.v1.KeyValueSetResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.KeyValueSetResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.displayName = "proto.nitric.proto.KeyValue.v1.KeyValueSetResponse";
    }
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.displayName = "proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest";
    }
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.displayName = "proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.Store.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.Store.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.Store.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.Store.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.Store();
      return proto.nitric.proto.KeyValue.v1.Store.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.Store.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.Store.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.Store.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.Store.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.Store.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.KeyValue.v1.Store.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.ValueRef.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.ValueRef.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.ValueRef.toObject = function(includeInstance, msg) {
        var f, obj = {
          store: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.ValueRef();
      return proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setStore(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.ValueRef.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getStore();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.prototype.getStore = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.prototype.setStore = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.KeyValue.v1.ValueRef.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.Value.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.Value.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.Value.toObject = function(includeInstance, msg) {
        var f, obj = {
          ref: (f = msg.getRef()) && proto.nitric.proto.KeyValue.v1.ValueRef.toObject(includeInstance, f),
          content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.Value.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.Value();
      return proto.nitric.proto.KeyValue.v1.Value.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.Value.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.KeyValue.v1.ValueRef();
            reader.readMessage(value, proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinaryFromReader);
            msg.setRef(value);
            break;
          case 2:
            var value = new google_protobuf_struct_pb.Struct();
            reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
            msg.setContent(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.Value.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.Value.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRef();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.KeyValue.v1.ValueRef.serializeBinaryToWriter
        );
      }
      f = message.getContent();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          google_protobuf_struct_pb.Struct.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.getRef = function() {
      return (
        /** @type{?proto.nitric.proto.KeyValue.v1.ValueRef} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.KeyValue.v1.ValueRef, 1)
      );
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.setRef = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.clearRef = function() {
      return this.setRef(void 0);
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.hasRef = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.getContent = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2)
      );
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.setContent = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.clearContent = function() {
      return this.setContent(void 0);
    };
    proto.nitric.proto.KeyValue.v1.Value.prototype.hasContent = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          ref: (f = msg.getRef()) && proto.nitric.proto.KeyValue.v1.ValueRef.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.KeyValueGetRequest();
      return proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.KeyValue.v1.ValueRef();
            reader.readMessage(value, proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinaryFromReader);
            msg.setRef(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRef();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.KeyValue.v1.ValueRef.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.prototype.getRef = function() {
      return (
        /** @type{?proto.nitric.proto.KeyValue.v1.ValueRef} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.KeyValue.v1.ValueRef, 1)
      );
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.prototype.setRef = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.prototype.clearRef = function() {
      return this.setRef(void 0);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetRequest.prototype.hasRef = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          value: (f = msg.getValue()) && proto.nitric.proto.KeyValue.v1.Value.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.KeyValueGetResponse();
      return proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.KeyValue.v1.Value();
            reader.readMessage(value, proto.nitric.proto.KeyValue.v1.Value.deserializeBinaryFromReader);
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValue();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.KeyValue.v1.Value.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.prototype.getValue = function() {
      return (
        /** @type{?proto.nitric.proto.KeyValue.v1.Value} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.KeyValue.v1.Value, 1)
      );
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.prototype.setValue = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.prototype.clearValue = function() {
      return this.setValue(void 0);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueGetResponse.prototype.hasValue = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          ref: (f = msg.getRef()) && proto.nitric.proto.KeyValue.v1.ValueRef.toObject(includeInstance, f),
          content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.KeyValueSetRequest();
      return proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.KeyValue.v1.ValueRef();
            reader.readMessage(value, proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinaryFromReader);
            msg.setRef(value);
            break;
          case 3:
            var value = new google_protobuf_struct_pb.Struct();
            reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
            msg.setContent(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRef();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.KeyValue.v1.ValueRef.serializeBinaryToWriter
        );
      }
      f = message.getContent();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          google_protobuf_struct_pb.Struct.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.getRef = function() {
      return (
        /** @type{?proto.nitric.proto.KeyValue.v1.ValueRef} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.KeyValue.v1.ValueRef, 1)
      );
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.setRef = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.clearRef = function() {
      return this.setRef(void 0);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.hasRef = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.getContent = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3)
      );
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.setContent = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.clearContent = function() {
      return this.setContent(void 0);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetRequest.prototype.hasContent = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.KeyValueSetResponse();
      return proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.KeyValueSetResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          ref: (f = msg.getRef()) && proto.nitric.proto.KeyValue.v1.ValueRef.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest();
      return proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.KeyValue.v1.ValueRef();
            reader.readMessage(value, proto.nitric.proto.KeyValue.v1.ValueRef.deserializeBinaryFromReader);
            msg.setRef(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRef();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.KeyValue.v1.ValueRef.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.prototype.getRef = function() {
      return (
        /** @type{?proto.nitric.proto.KeyValue.v1.ValueRef} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.KeyValue.v1.ValueRef, 1)
      );
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.prototype.setRef = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.prototype.clearRef = function() {
      return this.setRef(void 0);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteRequest.prototype.hasRef = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse();
      return proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.KeyValue.v1.KeyValueDeleteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    goog.object.extend(exports, proto.nitric.proto.KeyValue.v1);
  }
});

// src/gen/nitric/proto/keyvalue/v1/keyvalue_grpc_pb.js
var require_keyvalue_grpc_pb = __commonJS({
  "src/gen/nitric/proto/keyvalue/v1/keyvalue_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_keyvalue_v1_keyvalue_pb = require_keyvalue_pb();
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    function serialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest(arg) {
      if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest)) {
        throw new Error("Expected argument of type nitric.proto.KeyValue.v1.KeyValueDeleteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest(buffer_arg) {
      return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse(arg) {
      if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse)) {
        throw new Error("Expected argument of type nitric.proto.KeyValue.v1.KeyValueDeleteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse(buffer_arg) {
      return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_KeyValue_v1_KeyValueGetRequest(arg) {
      if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest)) {
        throw new Error("Expected argument of type nitric.proto.KeyValue.v1.KeyValueGetRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_KeyValue_v1_KeyValueGetRequest(buffer_arg) {
      return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_KeyValue_v1_KeyValueGetResponse(arg) {
      if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse)) {
        throw new Error("Expected argument of type nitric.proto.KeyValue.v1.KeyValueGetResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_KeyValue_v1_KeyValueGetResponse(buffer_arg) {
      return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_KeyValue_v1_KeyValueSetRequest(arg) {
      if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest)) {
        throw new Error("Expected argument of type nitric.proto.KeyValue.v1.KeyValueSetRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_KeyValue_v1_KeyValueSetRequest(buffer_arg) {
      return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_KeyValue_v1_KeyValueSetResponse(arg) {
      if (!(arg instanceof nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse)) {
        throw new Error("Expected argument of type nitric.proto.KeyValue.v1.KeyValueSetResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_KeyValue_v1_KeyValueSetResponse(buffer_arg) {
      return nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var KeyValueService = exports.KeyValueService = {
      // Get an existing document
      get: {
        path: "/nitric.proto.KeyValue.v1.KeyValue/Get",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetRequest,
        responseType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueGetResponse,
        requestSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueGetRequest,
        requestDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueGetRequest,
        responseSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueGetResponse,
        responseDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueGetResponse
      },
      // Create a new or overwrite an existing document
      set: {
        path: "/nitric.proto.KeyValue.v1.KeyValue/Set",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetRequest,
        responseType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueSetResponse,
        requestSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueSetRequest,
        requestDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueSetRequest,
        responseSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueSetResponse,
        responseDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueSetResponse
      },
      // Delete an existing document
      delete: {
        path: "/nitric.proto.KeyValue.v1.KeyValue/Delete",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteRequest,
        responseType: nitric_proto_keyvalue_v1_keyvalue_pb.KeyValueDeleteResponse,
        requestSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest,
        requestDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteRequest,
        responseSerialize: serialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse,
        responseDeserialize: deserialize_nitric_proto_KeyValue_v1_KeyValueDeleteResponse
      }
    };
    exports.KeyValueClient = grpc13.makeGenericClientConstructor(KeyValueService);
  }
});

// src/gen/nitric/proto/storage/v1/storage_pb.js
var require_storage_pb = __commonJS({
  "src/gen/nitric/proto/storage/v1/storage_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    var google_protobuf_duration_pb = require("google-protobuf/google/protobuf/duration_pb.js");
    goog.object.extend(proto, google_protobuf_duration_pb);
    goog.exportSymbol("proto.nitric.proto.storage.v1.Blob", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.BlobEvent", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.BlobEventRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.BlobEventRequest.EventCase", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.BlobEventResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.BlobEventType", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.ClientMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.RegistrationRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.RegistrationResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.ServerMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.ServerMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageDeleteRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageDeleteResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageExistsRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageExistsResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageListBlobsRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageListBlobsResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StoragePreSignUrlRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.Operation", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StoragePreSignUrlResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageReadRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageReadResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageWriteRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.storage.v1.StorageWriteResponse", null, global);
    proto.nitric.proto.storage.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.storage.v1.ClientMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.storage.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.ClientMessage.displayName = "proto.nitric.proto.storage.v1.ClientMessage";
    }
    proto.nitric.proto.storage.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.storage.v1.ServerMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.storage.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.ServerMessage.displayName = "proto.nitric.proto.storage.v1.ServerMessage";
    }
    proto.nitric.proto.storage.v1.BlobEventRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.storage.v1.BlobEventRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.storage.v1.BlobEventRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.BlobEventRequest.displayName = "proto.nitric.proto.storage.v1.BlobEventRequest";
    }
    proto.nitric.proto.storage.v1.BlobEvent = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.BlobEvent, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.BlobEvent.displayName = "proto.nitric.proto.storage.v1.BlobEvent";
    }
    proto.nitric.proto.storage.v1.BlobEventResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.BlobEventResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.BlobEventResponse.displayName = "proto.nitric.proto.storage.v1.BlobEventResponse";
    }
    proto.nitric.proto.storage.v1.RegistrationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.RegistrationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.RegistrationRequest.displayName = "proto.nitric.proto.storage.v1.RegistrationRequest";
    }
    proto.nitric.proto.storage.v1.RegistrationResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.RegistrationResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.RegistrationResponse.displayName = "proto.nitric.proto.storage.v1.RegistrationResponse";
    }
    proto.nitric.proto.storage.v1.StorageWriteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageWriteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageWriteRequest.displayName = "proto.nitric.proto.storage.v1.StorageWriteRequest";
    }
    proto.nitric.proto.storage.v1.StorageWriteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageWriteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageWriteResponse.displayName = "proto.nitric.proto.storage.v1.StorageWriteResponse";
    }
    proto.nitric.proto.storage.v1.StorageReadRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageReadRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageReadRequest.displayName = "proto.nitric.proto.storage.v1.StorageReadRequest";
    }
    proto.nitric.proto.storage.v1.StorageReadResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageReadResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageReadResponse.displayName = "proto.nitric.proto.storage.v1.StorageReadResponse";
    }
    proto.nitric.proto.storage.v1.StorageDeleteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageDeleteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageDeleteRequest.displayName = "proto.nitric.proto.storage.v1.StorageDeleteRequest";
    }
    proto.nitric.proto.storage.v1.StorageDeleteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageDeleteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageDeleteResponse.displayName = "proto.nitric.proto.storage.v1.StorageDeleteResponse";
    }
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StoragePreSignUrlRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.displayName = "proto.nitric.proto.storage.v1.StoragePreSignUrlRequest";
    }
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StoragePreSignUrlResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.displayName = "proto.nitric.proto.storage.v1.StoragePreSignUrlResponse";
    }
    proto.nitric.proto.storage.v1.StorageListBlobsRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageListBlobsRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageListBlobsRequest.displayName = "proto.nitric.proto.storage.v1.StorageListBlobsRequest";
    }
    proto.nitric.proto.storage.v1.Blob = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.Blob, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.Blob.displayName = "proto.nitric.proto.storage.v1.Blob";
    }
    proto.nitric.proto.storage.v1.StorageListBlobsResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.storage.v1.StorageListBlobsResponse.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageListBlobsResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageListBlobsResponse.displayName = "proto.nitric.proto.storage.v1.StorageListBlobsResponse";
    }
    proto.nitric.proto.storage.v1.StorageExistsRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageExistsRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageExistsRequest.displayName = "proto.nitric.proto.storage.v1.StorageExistsRequest";
    }
    proto.nitric.proto.storage.v1.StorageExistsResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.storage.v1.StorageExistsResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.storage.v1.StorageExistsResponse.displayName = "proto.nitric.proto.storage.v1.StorageExistsResponse";
    }
    proto.nitric.proto.storage.v1.ClientMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.storage.v1.ClientMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_REQUEST: 2,
      BLOB_EVENT_RESPONSE: 3
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.storage.v1.ClientMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.storage.v1.ClientMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationRequest: (f = msg.getRegistrationRequest()) && proto.nitric.proto.storage.v1.RegistrationRequest.toObject(includeInstance, f),
          blobEventResponse: (f = msg.getBlobEventResponse()) && proto.nitric.proto.storage.v1.BlobEventResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.ClientMessage();
      return proto.nitric.proto.storage.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.storage.v1.RegistrationRequest();
            reader.readMessage(value, proto.nitric.proto.storage.v1.RegistrationRequest.deserializeBinaryFromReader);
            msg.setRegistrationRequest(value);
            break;
          case 3:
            var value = new proto.nitric.proto.storage.v1.BlobEventResponse();
            reader.readMessage(value, proto.nitric.proto.storage.v1.BlobEventResponse.deserializeBinaryFromReader);
            msg.setBlobEventResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.storage.v1.RegistrationRequest.serializeBinaryToWriter
        );
      }
      f = message.getBlobEventResponse();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.storage.v1.BlobEventResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.getRegistrationRequest = function() {
      return (
        /** @type{?proto.nitric.proto.storage.v1.RegistrationRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.storage.v1.RegistrationRequest, 2)
      );
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.setRegistrationRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.storage.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.clearRegistrationRequest = function() {
      return this.setRegistrationRequest(void 0);
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.hasRegistrationRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.getBlobEventResponse = function() {
      return (
        /** @type{?proto.nitric.proto.storage.v1.BlobEventResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.storage.v1.BlobEventResponse, 3)
      );
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.setBlobEventResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.storage.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.clearBlobEventResponse = function() {
      return this.setBlobEventResponse(void 0);
    };
    proto.nitric.proto.storage.v1.ClientMessage.prototype.hasBlobEventResponse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.proto.storage.v1.ServerMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.storage.v1.ServerMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_RESPONSE: 2,
      BLOB_EVENT_REQUEST: 3
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.storage.v1.ServerMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.storage.v1.ServerMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationResponse: (f = msg.getRegistrationResponse()) && proto.nitric.proto.storage.v1.RegistrationResponse.toObject(includeInstance, f),
          blobEventRequest: (f = msg.getBlobEventRequest()) && proto.nitric.proto.storage.v1.BlobEventRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.ServerMessage();
      return proto.nitric.proto.storage.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.storage.v1.RegistrationResponse();
            reader.readMessage(value, proto.nitric.proto.storage.v1.RegistrationResponse.deserializeBinaryFromReader);
            msg.setRegistrationResponse(value);
            break;
          case 3:
            var value = new proto.nitric.proto.storage.v1.BlobEventRequest();
            reader.readMessage(value, proto.nitric.proto.storage.v1.BlobEventRequest.deserializeBinaryFromReader);
            msg.setBlobEventRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationResponse();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.storage.v1.RegistrationResponse.serializeBinaryToWriter
        );
      }
      f = message.getBlobEventRequest();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.storage.v1.BlobEventRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.getRegistrationResponse = function() {
      return (
        /** @type{?proto.nitric.proto.storage.v1.RegistrationResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.storage.v1.RegistrationResponse, 2)
      );
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.setRegistrationResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.storage.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.clearRegistrationResponse = function() {
      return this.setRegistrationResponse(void 0);
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.hasRegistrationResponse = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.getBlobEventRequest = function() {
      return (
        /** @type{?proto.nitric.proto.storage.v1.BlobEventRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.storage.v1.BlobEventRequest, 3)
      );
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.setBlobEventRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.storage.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.clearBlobEventRequest = function() {
      return this.setBlobEventRequest(void 0);
    };
    proto.nitric.proto.storage.v1.ServerMessage.prototype.hasBlobEventRequest = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.oneofGroups_ = [[10]];
    proto.nitric.proto.storage.v1.BlobEventRequest.EventCase = {
      EVENT_NOT_SET: 0,
      BLOB_EVENT: 10
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.getEventCase = function() {
      return (
        /** @type {proto.nitric.proto.storage.v1.BlobEventRequest.EventCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.storage.v1.BlobEventRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.BlobEventRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.BlobEventRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.BlobEventRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          blobEvent: (f = msg.getBlobEvent()) && proto.nitric.proto.storage.v1.BlobEvent.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.BlobEventRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.BlobEventRequest();
      return proto.nitric.proto.storage.v1.BlobEventRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 10:
            var value = new proto.nitric.proto.storage.v1.BlobEvent();
            reader.readMessage(value, proto.nitric.proto.storage.v1.BlobEvent.deserializeBinaryFromReader);
            msg.setBlobEvent(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.BlobEventRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getBlobEvent();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.proto.storage.v1.BlobEvent.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.getBlobEvent = function() {
      return (
        /** @type{?proto.nitric.proto.storage.v1.BlobEvent} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.storage.v1.BlobEvent, 10)
      );
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.setBlobEvent = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.storage.v1.BlobEventRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.clearBlobEvent = function() {
      return this.setBlobEvent(void 0);
    };
    proto.nitric.proto.storage.v1.BlobEventRequest.prototype.hasBlobEvent = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.BlobEvent.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.BlobEvent.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.BlobEvent.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: jspb.Message.getFieldWithDefault(msg, 1, ""),
          type: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.BlobEvent.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.BlobEvent();
      return proto.nitric.proto.storage.v1.BlobEvent.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.BlobEvent.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          case 2:
            var value = (
              /** @type {!proto.nitric.proto.storage.v1.BlobEventType} */
              reader.readEnum()
            );
            msg.setType(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.BlobEvent.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.BlobEvent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.BlobEvent.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getType();
      if (f !== 0) {
        writer.writeEnum(
          2,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.BlobEvent.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.BlobEvent.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.BlobEvent.prototype.getType = function() {
      return (
        /** @type {!proto.nitric.proto.storage.v1.BlobEventType} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.nitric.proto.storage.v1.BlobEvent.prototype.setType = function(value) {
      return jspb.Message.setProto3EnumField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.BlobEventResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.BlobEventResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.BlobEventResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.BlobEventResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.BlobEventResponse();
      return proto.nitric.proto.storage.v1.BlobEventResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.BlobEventResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setSuccess(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.BlobEventResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.BlobEventResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.BlobEventResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSuccess();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.BlobEventResponse.prototype.getSuccess = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.proto.storage.v1.BlobEventResponse.prototype.setSuccess = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.RegistrationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.RegistrationRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.RegistrationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          blobEventType: jspb.Message.getFieldWithDefault(msg, 2, 0),
          keyPrefixFilter: jspb.Message.getFieldWithDefault(msg, 3, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.RegistrationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.RegistrationRequest();
      return proto.nitric.proto.storage.v1.RegistrationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {!proto.nitric.proto.storage.v1.BlobEventType} */
              reader.readEnum()
            );
            msg.setBlobEventType(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKeyPrefixFilter(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.RegistrationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getBlobEventType();
      if (f !== 0) {
        writer.writeEnum(
          2,
          f
        );
      }
      f = message.getKeyPrefixFilter();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.getBlobEventType = function() {
      return (
        /** @type {!proto.nitric.proto.storage.v1.BlobEventType} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.setBlobEventType = function(value) {
      return jspb.Message.setProto3EnumField(this, 2, value);
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.getKeyPrefixFilter = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.proto.storage.v1.RegistrationRequest.prototype.setKeyPrefixFilter = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.RegistrationResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.RegistrationResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.RegistrationResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.RegistrationResponse();
      return proto.nitric.proto.storage.v1.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.RegistrationResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.RegistrationResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.RegistrationResponse.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.RegistrationResponse.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageWriteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageWriteRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, ""),
          body: msg.getBody_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageWriteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageWriteRequest();
      return proto.nitric.proto.storage.v1.StorageWriteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          case 3:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setBody(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageWriteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getBody_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          3,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.storage.v1.StorageWriteRequest.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageWriteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageWriteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageWriteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageWriteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageWriteResponse();
      return proto.nitric.proto.storage.v1.StorageWriteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageWriteResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageWriteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageWriteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageWriteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageReadRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageReadRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageReadRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageReadRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageReadRequest();
      return proto.nitric.proto.storage.v1.StorageReadRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageReadRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageReadRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageReadResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageReadResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageReadResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          body: msg.getBody_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageReadResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageReadResponse();
      return proto.nitric.proto.storage.v1.StorageReadResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setBody(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageReadResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBody_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          1,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.storage.v1.StorageReadResponse.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageDeleteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageDeleteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageDeleteRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageDeleteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageDeleteRequest();
      return proto.nitric.proto.storage.v1.StorageDeleteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageDeleteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageDeleteRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageDeleteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageDeleteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageDeleteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageDeleteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageDeleteResponse();
      return proto.nitric.proto.storage.v1.StorageDeleteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageDeleteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageDeleteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageDeleteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, ""),
          operation: jspb.Message.getFieldWithDefault(msg, 3, 0),
          expiry: (f = msg.getExpiry()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StoragePreSignUrlRequest();
      return proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          case 3:
            var value = (
              /** @type {!proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.Operation} */
              reader.readEnum()
            );
            msg.setOperation(value);
            break;
          case 4:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setExpiry(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getOperation();
      if (f !== 0) {
        writer.writeEnum(
          3,
          f
        );
      }
      f = message.getExpiry();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.Operation = {
      READ: 0,
      WRITE: 1
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.getOperation = function() {
      return (
        /** @type {!proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.Operation} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.setOperation = function(value) {
      return jspb.Message.setProto3EnumField(this, 3, value);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.getExpiry = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4)
      );
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.setExpiry = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.clearExpiry = function() {
      return this.setExpiry(void 0);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlRequest.prototype.hasExpiry = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          url: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StoragePreSignUrlResponse();
      return proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setUrl(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getUrl();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.prototype.getUrl = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StoragePreSignUrlResponse.prototype.setUrl = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageListBlobsRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageListBlobsRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageListBlobsRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          prefix: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageListBlobsRequest();
      return proto.nitric.proto.storage.v1.StorageListBlobsRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPrefix(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageListBlobsRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPrefix();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.prototype.getPrefix = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageListBlobsRequest.prototype.setPrefix = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.Blob.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.Blob.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.Blob.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.Blob.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.Blob();
      return proto.nitric.proto.storage.v1.Blob.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.Blob.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.Blob.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.Blob.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.Blob.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.Blob.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.Blob.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageListBlobsResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageListBlobsResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageListBlobsResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          blobsList: jspb.Message.toObjectList(
            msg.getBlobsList(),
            proto.nitric.proto.storage.v1.Blob.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageListBlobsResponse();
      return proto.nitric.proto.storage.v1.StorageListBlobsResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.storage.v1.Blob();
            reader.readMessage(value, proto.nitric.proto.storage.v1.Blob.deserializeBinaryFromReader);
            msg.addBlobs(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageListBlobsResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBlobsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.proto.storage.v1.Blob.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.prototype.getBlobsList = function() {
      return (
        /** @type{!Array<!proto.nitric.proto.storage.v1.Blob>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.storage.v1.Blob, 1)
      );
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.prototype.setBlobsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.prototype.addBlobs = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.proto.storage.v1.Blob, opt_index);
    };
    proto.nitric.proto.storage.v1.StorageListBlobsResponse.prototype.clearBlobsList = function() {
      return this.setBlobsList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageExistsRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageExistsRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageExistsRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageExistsRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageExistsRequest();
      return proto.nitric.proto.storage.v1.StorageExistsRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBucketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageExistsRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.storage.v1.StorageExistsRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.storage.v1.StorageExistsResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.storage.v1.StorageExistsResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.storage.v1.StorageExistsResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          exists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.storage.v1.StorageExistsResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.storage.v1.StorageExistsResponse();
      return proto.nitric.proto.storage.v1.StorageExistsResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.storage.v1.StorageExistsResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setExists(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.storage.v1.StorageExistsResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.storage.v1.StorageExistsResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.storage.v1.StorageExistsResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getExists();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.proto.storage.v1.StorageExistsResponse.prototype.getExists = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.proto.storage.v1.StorageExistsResponse.prototype.setExists = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    proto.nitric.proto.storage.v1.BlobEventType = {
      CREATED: 0,
      DELETED: 1
    };
    goog.object.extend(exports, proto.nitric.proto.storage.v1);
  }
});

// src/gen/nitric/proto/storage/v1/storage_grpc_pb.js
var require_storage_grpc_pb = __commonJS({
  "src/gen/nitric/proto/storage/v1/storage_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_storage_v1_storage_pb = require_storage_pb();
    var google_protobuf_duration_pb = require("google-protobuf/google/protobuf/duration_pb.js");
    function serialize_nitric_proto_storage_v1_ClientMessage(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_ClientMessage(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_ServerMessage(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_ServerMessage(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageDeleteRequest(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageDeleteRequest)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageDeleteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageDeleteRequest(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageDeleteResponse(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageDeleteResponse)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageDeleteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageDeleteResponse(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageExistsRequest(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageExistsRequest)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageExistsRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageExistsRequest(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageExistsResponse(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageExistsResponse)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageExistsResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageExistsResponse(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageListBlobsRequest(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageListBlobsRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageListBlobsRequest(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageListBlobsResponse(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageListBlobsResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageListBlobsResponse(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StoragePreSignUrlRequest(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StoragePreSignUrlRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StoragePreSignUrlRequest(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StoragePreSignUrlResponse(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StoragePreSignUrlResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StoragePreSignUrlResponse(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageReadRequest(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageReadRequest)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageReadRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageReadRequest(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageReadResponse(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageReadResponse)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageReadResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageReadResponse(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageWriteRequest(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageWriteRequest)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageWriteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageWriteRequest(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_storage_v1_StorageWriteResponse(arg) {
      if (!(arg instanceof nitric_proto_storage_v1_storage_pb.StorageWriteResponse)) {
        throw new Error("Expected argument of type nitric.proto.storage.v1.StorageWriteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_storage_v1_StorageWriteResponse(buffer_arg) {
      return nitric_proto_storage_v1_storage_pb.StorageWriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var StorageService = exports.StorageService = {
      // Retrieve an item from a bucket
      read: {
        path: "/nitric.proto.storage.v1.Storage/Read",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_storage_v1_storage_pb.StorageReadRequest,
        responseType: nitric_proto_storage_v1_storage_pb.StorageReadResponse,
        requestSerialize: serialize_nitric_proto_storage_v1_StorageReadRequest,
        requestDeserialize: deserialize_nitric_proto_storage_v1_StorageReadRequest,
        responseSerialize: serialize_nitric_proto_storage_v1_StorageReadResponse,
        responseDeserialize: deserialize_nitric_proto_storage_v1_StorageReadResponse
      },
      // Store an item to a bucket
      write: {
        path: "/nitric.proto.storage.v1.Storage/Write",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_storage_v1_storage_pb.StorageWriteRequest,
        responseType: nitric_proto_storage_v1_storage_pb.StorageWriteResponse,
        requestSerialize: serialize_nitric_proto_storage_v1_StorageWriteRequest,
        requestDeserialize: deserialize_nitric_proto_storage_v1_StorageWriteRequest,
        responseSerialize: serialize_nitric_proto_storage_v1_StorageWriteResponse,
        responseDeserialize: deserialize_nitric_proto_storage_v1_StorageWriteResponse
      },
      // Delete an item from a bucket
      delete: {
        path: "/nitric.proto.storage.v1.Storage/Delete",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_storage_v1_storage_pb.StorageDeleteRequest,
        responseType: nitric_proto_storage_v1_storage_pb.StorageDeleteResponse,
        requestSerialize: serialize_nitric_proto_storage_v1_StorageDeleteRequest,
        requestDeserialize: deserialize_nitric_proto_storage_v1_StorageDeleteRequest,
        responseSerialize: serialize_nitric_proto_storage_v1_StorageDeleteResponse,
        responseDeserialize: deserialize_nitric_proto_storage_v1_StorageDeleteResponse
      },
      // Generate a pre-signed URL for direct operations on an item
      preSignUrl: {
        path: "/nitric.proto.storage.v1.Storage/PreSignUrl",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlRequest,
        responseType: nitric_proto_storage_v1_storage_pb.StoragePreSignUrlResponse,
        requestSerialize: serialize_nitric_proto_storage_v1_StoragePreSignUrlRequest,
        requestDeserialize: deserialize_nitric_proto_storage_v1_StoragePreSignUrlRequest,
        responseSerialize: serialize_nitric_proto_storage_v1_StoragePreSignUrlResponse,
        responseDeserialize: deserialize_nitric_proto_storage_v1_StoragePreSignUrlResponse
      },
      // List blobs currently in the bucket
      listBlobs: {
        path: "/nitric.proto.storage.v1.Storage/ListBlobs",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_storage_v1_storage_pb.StorageListBlobsRequest,
        responseType: nitric_proto_storage_v1_storage_pb.StorageListBlobsResponse,
        requestSerialize: serialize_nitric_proto_storage_v1_StorageListBlobsRequest,
        requestDeserialize: deserialize_nitric_proto_storage_v1_StorageListBlobsRequest,
        responseSerialize: serialize_nitric_proto_storage_v1_StorageListBlobsResponse,
        responseDeserialize: deserialize_nitric_proto_storage_v1_StorageListBlobsResponse
      },
      // Determine is an object exists in a bucket
      exists: {
        path: "/nitric.proto.storage.v1.Storage/Exists",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_storage_v1_storage_pb.StorageExistsRequest,
        responseType: nitric_proto_storage_v1_storage_pb.StorageExistsResponse,
        requestSerialize: serialize_nitric_proto_storage_v1_StorageExistsRequest,
        requestDeserialize: deserialize_nitric_proto_storage_v1_StorageExistsRequest,
        responseSerialize: serialize_nitric_proto_storage_v1_StorageExistsResponse,
        responseDeserialize: deserialize_nitric_proto_storage_v1_StorageExistsResponse
      }
    };
    exports.StorageClient = grpc13.makeGenericClientConstructor(StorageService);
    var StorageListenerService = exports.StorageListenerService = {
      // Listen for changes on a bucket
      listen: {
        path: "/nitric.proto.storage.v1.StorageListener/Listen",
        requestStream: true,
        responseStream: true,
        requestType: nitric_proto_storage_v1_storage_pb.ClientMessage,
        responseType: nitric_proto_storage_v1_storage_pb.ServerMessage,
        requestSerialize: serialize_nitric_proto_storage_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_proto_storage_v1_ClientMessage,
        responseSerialize: serialize_nitric_proto_storage_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_proto_storage_v1_ServerMessage
      }
    };
    exports.StorageListenerClient = grpc13.makeGenericClientConstructor(StorageListenerService);
  }
});

// src/gen/nitric/proto/apis/v1/apis_pb.js
var require_apis_pb = __commonJS({
  "src/gen/nitric/proto/apis/v1/apis_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ApiDetailsRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ApiDetailsResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ApiWorkerOptions", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ApiWorkerScopes", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ClientMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.HeaderValue", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.HttpRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.HttpResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.QueryValue", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.RegistrationRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.RegistrationResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ServerMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.apis.v1.ServerMessage.ContentCase", null, global);
    proto.nitric.proto.apis.v1.ApiDetailsRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.ApiDetailsRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.ApiDetailsRequest.displayName = "proto.nitric.proto.apis.v1.ApiDetailsRequest";
    }
    proto.nitric.proto.apis.v1.ApiDetailsResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.ApiDetailsResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.ApiDetailsResponse.displayName = "proto.nitric.proto.apis.v1.ApiDetailsResponse";
    }
    proto.nitric.proto.apis.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.apis.v1.ClientMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.apis.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.ClientMessage.displayName = "proto.nitric.proto.apis.v1.ClientMessage";
    }
    proto.nitric.proto.apis.v1.HeaderValue = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.apis.v1.HeaderValue.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.HeaderValue, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.HeaderValue.displayName = "proto.nitric.proto.apis.v1.HeaderValue";
    }
    proto.nitric.proto.apis.v1.QueryValue = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.apis.v1.QueryValue.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.QueryValue, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.QueryValue.displayName = "proto.nitric.proto.apis.v1.QueryValue";
    }
    proto.nitric.proto.apis.v1.HttpRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.HttpRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.HttpRequest.displayName = "proto.nitric.proto.apis.v1.HttpRequest";
    }
    proto.nitric.proto.apis.v1.HttpResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.HttpResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.HttpResponse.displayName = "proto.nitric.proto.apis.v1.HttpResponse";
    }
    proto.nitric.proto.apis.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.apis.v1.ServerMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.apis.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.ServerMessage.displayName = "proto.nitric.proto.apis.v1.ServerMessage";
    }
    proto.nitric.proto.apis.v1.RegistrationResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.RegistrationResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.RegistrationResponse.displayName = "proto.nitric.proto.apis.v1.RegistrationResponse";
    }
    proto.nitric.proto.apis.v1.ApiWorkerScopes = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.apis.v1.ApiWorkerScopes.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.ApiWorkerScopes, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.ApiWorkerScopes.displayName = "proto.nitric.proto.apis.v1.ApiWorkerScopes";
    }
    proto.nitric.proto.apis.v1.ApiWorkerOptions = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.ApiWorkerOptions, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.ApiWorkerOptions.displayName = "proto.nitric.proto.apis.v1.ApiWorkerOptions";
    }
    proto.nitric.proto.apis.v1.RegistrationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.apis.v1.RegistrationRequest.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.apis.v1.RegistrationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.apis.v1.RegistrationRequest.displayName = "proto.nitric.proto.apis.v1.RegistrationRequest";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.ApiDetailsRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.ApiDetailsRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.ApiDetailsRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          apiName: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.ApiDetailsRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.ApiDetailsRequest();
      return proto.nitric.proto.apis.v1.ApiDetailsRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.ApiDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setApiName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.ApiDetailsRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.ApiDetailsRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.ApiDetailsRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getApiName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.ApiDetailsRequest.prototype.getApiName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.apis.v1.ApiDetailsRequest.prototype.setApiName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.ApiDetailsResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.ApiDetailsResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.ApiDetailsResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          url: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.ApiDetailsResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.ApiDetailsResponse();
      return proto.nitric.proto.apis.v1.ApiDetailsResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.ApiDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setUrl(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.ApiDetailsResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.ApiDetailsResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.ApiDetailsResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getUrl();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.ApiDetailsResponse.prototype.getUrl = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.apis.v1.ApiDetailsResponse.prototype.setUrl = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.apis.v1.ClientMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.apis.v1.ClientMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_REQUEST: 2,
      HTTP_RESPONSE: 3
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.apis.v1.ClientMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.apis.v1.ClientMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationRequest: (f = msg.getRegistrationRequest()) && proto.nitric.proto.apis.v1.RegistrationRequest.toObject(includeInstance, f),
          httpResponse: (f = msg.getHttpResponse()) && proto.nitric.proto.apis.v1.HttpResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.ClientMessage();
      return proto.nitric.proto.apis.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.apis.v1.RegistrationRequest();
            reader.readMessage(value, proto.nitric.proto.apis.v1.RegistrationRequest.deserializeBinaryFromReader);
            msg.setRegistrationRequest(value);
            break;
          case 3:
            var value = new proto.nitric.proto.apis.v1.HttpResponse();
            reader.readMessage(value, proto.nitric.proto.apis.v1.HttpResponse.deserializeBinaryFromReader);
            msg.setHttpResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.apis.v1.RegistrationRequest.serializeBinaryToWriter
        );
      }
      f = message.getHttpResponse();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.apis.v1.HttpResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.getRegistrationRequest = function() {
      return (
        /** @type{?proto.nitric.proto.apis.v1.RegistrationRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.apis.v1.RegistrationRequest, 2)
      );
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.setRegistrationRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.apis.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.clearRegistrationRequest = function() {
      return this.setRegistrationRequest(void 0);
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.hasRegistrationRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.getHttpResponse = function() {
      return (
        /** @type{?proto.nitric.proto.apis.v1.HttpResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.apis.v1.HttpResponse, 3)
      );
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.setHttpResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.apis.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.clearHttpResponse = function() {
      return this.setHttpResponse(void 0);
    };
    proto.nitric.proto.apis.v1.ClientMessage.prototype.hasHttpResponse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.proto.apis.v1.HeaderValue.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.HeaderValue.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.HeaderValue.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.HeaderValue.toObject = function(includeInstance, msg) {
        var f, obj = {
          valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.HeaderValue.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.HeaderValue();
      return proto.nitric.proto.apis.v1.HeaderValue.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.HeaderValue.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.HeaderValue.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.HeaderValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.HeaderValue.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValueList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.HeaderValue.prototype.getValueList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.proto.apis.v1.HeaderValue.prototype.setValueList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.proto.apis.v1.HeaderValue.prototype.addValue = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.proto.apis.v1.HeaderValue.prototype.clearValueList = function() {
      return this.setValueList([]);
    };
    proto.nitric.proto.apis.v1.QueryValue.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.QueryValue.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.QueryValue.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.QueryValue.toObject = function(includeInstance, msg) {
        var f, obj = {
          valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.QueryValue.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.QueryValue();
      return proto.nitric.proto.apis.v1.QueryValue.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.QueryValue.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.QueryValue.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.QueryValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.QueryValue.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValueList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.QueryValue.prototype.getValueList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.proto.apis.v1.QueryValue.prototype.setValueList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.proto.apis.v1.QueryValue.prototype.addValue = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.proto.apis.v1.QueryValue.prototype.clearValueList = function() {
      return this.setValueList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.HttpRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.HttpRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.HttpRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          method: jspb.Message.getFieldWithDefault(msg, 1, ""),
          path: jspb.Message.getFieldWithDefault(msg, 2, ""),
          headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, proto.nitric.proto.apis.v1.HeaderValue.toObject) : [],
          queryParamsMap: (f = msg.getQueryParamsMap()) ? f.toObject(includeInstance, proto.nitric.proto.apis.v1.QueryValue.toObject) : [],
          pathParamsMap: (f = msg.getPathParamsMap()) ? f.toObject(includeInstance, void 0) : [],
          body: msg.getBody_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.HttpRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.HttpRequest();
      return proto.nitric.proto.apis.v1.HttpRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.HttpRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setMethod(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPath(value);
            break;
          case 3:
            var value = msg.getHeadersMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.proto.apis.v1.HeaderValue.deserializeBinaryFromReader, "", new proto.nitric.proto.apis.v1.HeaderValue());
            });
            break;
          case 4:
            var value = msg.getQueryParamsMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.proto.apis.v1.QueryValue.deserializeBinaryFromReader, "", new proto.nitric.proto.apis.v1.QueryValue());
            });
            break;
          case 5:
            var value = msg.getPathParamsMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          case 6:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setBody(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.HttpRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.HttpRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMethod();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPath();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getHeadersMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.proto.apis.v1.HeaderValue.serializeBinaryToWriter);
      }
      f = message.getQueryParamsMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.proto.apis.v1.QueryValue.serializeBinaryToWriter);
      }
      f = message.getPathParamsMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
      f = message.getBody_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          6,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getMethod = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.setMethod = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getPath = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.setPath = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getHeadersMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.proto.apis.v1.HeaderValue>} */
        jspb.Message.getMapField(
          this,
          3,
          opt_noLazyCreate,
          proto.nitric.proto.apis.v1.HeaderValue
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.clearHeadersMap = function() {
      this.getHeadersMap().clear();
      return this;
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getQueryParamsMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.proto.apis.v1.QueryValue>} */
        jspb.Message.getMapField(
          this,
          4,
          opt_noLazyCreate,
          proto.nitric.proto.apis.v1.QueryValue
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.clearQueryParamsMap = function() {
      this.getQueryParamsMap().clear();
      return this;
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getPathParamsMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          5,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.clearPathParamsMap = function() {
      this.getPathParamsMap().clear();
      return this;
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 6, "")
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpRequest.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 6, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.HttpResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.HttpResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.HttpResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          status: jspb.Message.getFieldWithDefault(msg, 1, 0),
          headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, proto.nitric.proto.apis.v1.HeaderValue.toObject) : [],
          body: msg.getBody_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.HttpResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.HttpResponse();
      return proto.nitric.proto.apis.v1.HttpResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.HttpResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setStatus(value);
            break;
          case 2:
            var value = msg.getHeadersMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.proto.apis.v1.HeaderValue.deserializeBinaryFromReader, "", new proto.nitric.proto.apis.v1.HeaderValue());
            });
            break;
          case 3:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setBody(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.HttpResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.HttpResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getStatus();
      if (f !== 0) {
        writer.writeInt32(
          1,
          f
        );
      }
      f = message.getHeadersMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.proto.apis.v1.HeaderValue.serializeBinaryToWriter);
      }
      f = message.getBody_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          3,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.getStatus = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.setStatus = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.getHeadersMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.proto.apis.v1.HeaderValue>} */
        jspb.Message.getMapField(
          this,
          2,
          opt_noLazyCreate,
          proto.nitric.proto.apis.v1.HeaderValue
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.clearHeadersMap = function() {
      this.getHeadersMap().clear();
      return this;
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.apis.v1.HttpResponse.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 3, value);
    };
    proto.nitric.proto.apis.v1.ServerMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.apis.v1.ServerMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_RESPONSE: 2,
      HTTP_REQUEST: 3
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.apis.v1.ServerMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.apis.v1.ServerMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationResponse: (f = msg.getRegistrationResponse()) && proto.nitric.proto.apis.v1.RegistrationResponse.toObject(includeInstance, f),
          httpRequest: (f = msg.getHttpRequest()) && proto.nitric.proto.apis.v1.HttpRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.ServerMessage();
      return proto.nitric.proto.apis.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.apis.v1.RegistrationResponse();
            reader.readMessage(value, proto.nitric.proto.apis.v1.RegistrationResponse.deserializeBinaryFromReader);
            msg.setRegistrationResponse(value);
            break;
          case 3:
            var value = new proto.nitric.proto.apis.v1.HttpRequest();
            reader.readMessage(value, proto.nitric.proto.apis.v1.HttpRequest.deserializeBinaryFromReader);
            msg.setHttpRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationResponse();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.apis.v1.RegistrationResponse.serializeBinaryToWriter
        );
      }
      f = message.getHttpRequest();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.apis.v1.HttpRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.getRegistrationResponse = function() {
      return (
        /** @type{?proto.nitric.proto.apis.v1.RegistrationResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.apis.v1.RegistrationResponse, 2)
      );
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.setRegistrationResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.apis.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.clearRegistrationResponse = function() {
      return this.setRegistrationResponse(void 0);
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.hasRegistrationResponse = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.getHttpRequest = function() {
      return (
        /** @type{?proto.nitric.proto.apis.v1.HttpRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.apis.v1.HttpRequest, 3)
      );
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.setHttpRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.apis.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.clearHttpRequest = function() {
      return this.setHttpRequest(void 0);
    };
    proto.nitric.proto.apis.v1.ServerMessage.prototype.hasHttpRequest = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.RegistrationResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.RegistrationResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.RegistrationResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.RegistrationResponse();
      return proto.nitric.proto.apis.v1.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.RegistrationResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.RegistrationResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.ApiWorkerScopes.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.ApiWorkerScopes.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.ApiWorkerScopes.toObject = function(includeInstance, msg) {
        var f, obj = {
          scopesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.ApiWorkerScopes.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.ApiWorkerScopes();
      return proto.nitric.proto.apis.v1.ApiWorkerScopes.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addScopes(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.ApiWorkerScopes.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScopesList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.prototype.getScopesList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.prototype.setScopesList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.prototype.addScopes = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.proto.apis.v1.ApiWorkerScopes.prototype.clearScopesList = function() {
      return this.setScopesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.ApiWorkerOptions.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.ApiWorkerOptions.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.ApiWorkerOptions.toObject = function(includeInstance, msg) {
        var f, obj = {
          securityMap: (f = msg.getSecurityMap()) ? f.toObject(includeInstance, proto.nitric.proto.apis.v1.ApiWorkerScopes.toObject) : [],
          securityDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.ApiWorkerOptions.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.ApiWorkerOptions();
      return proto.nitric.proto.apis.v1.ApiWorkerOptions.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getSecurityMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.proto.apis.v1.ApiWorkerScopes.deserializeBinaryFromReader, "", new proto.nitric.proto.apis.v1.ApiWorkerScopes());
            });
            break;
          case 2:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setSecurityDisabled(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.ApiWorkerOptions.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecurityMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.proto.apis.v1.ApiWorkerScopes.serializeBinaryToWriter);
      }
      f = message.getSecurityDisabled();
      if (f) {
        writer.writeBool(
          2,
          f
        );
      }
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.prototype.getSecurityMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.proto.apis.v1.ApiWorkerScopes>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          proto.nitric.proto.apis.v1.ApiWorkerScopes
        )
      );
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.prototype.clearSecurityMap = function() {
      this.getSecurityMap().clear();
      return this;
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.prototype.getSecurityDisabled = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 2, false)
      );
    };
    proto.nitric.proto.apis.v1.ApiWorkerOptions.prototype.setSecurityDisabled = function(value) {
      return jspb.Message.setProto3BooleanField(this, 2, value);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.apis.v1.RegistrationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.apis.v1.RegistrationRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.apis.v1.RegistrationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          api: jspb.Message.getFieldWithDefault(msg, 1, ""),
          path: jspb.Message.getFieldWithDefault(msg, 2, ""),
          methodsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f,
          options: (f = msg.getOptions()) && proto.nitric.proto.apis.v1.ApiWorkerOptions.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.apis.v1.RegistrationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.apis.v1.RegistrationRequest();
      return proto.nitric.proto.apis.v1.RegistrationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setApi(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPath(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addMethods(value);
            break;
          case 4:
            var value = new proto.nitric.proto.apis.v1.ApiWorkerOptions();
            reader.readMessage(value, proto.nitric.proto.apis.v1.ApiWorkerOptions.deserializeBinaryFromReader);
            msg.setOptions(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.apis.v1.RegistrationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getApi();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPath();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getMethodsList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          3,
          f
        );
      }
      f = message.getOptions();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.nitric.proto.apis.v1.ApiWorkerOptions.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.getApi = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.setApi = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.getPath = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.setPath = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.getMethodsList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 3)
      );
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.setMethodsList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.addMethods = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.clearMethodsList = function() {
      return this.setMethodsList([]);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.getOptions = function() {
      return (
        /** @type{?proto.nitric.proto.apis.v1.ApiWorkerOptions} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.apis.v1.ApiWorkerOptions, 4)
      );
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.setOptions = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.clearOptions = function() {
      return this.setOptions(void 0);
    };
    proto.nitric.proto.apis.v1.RegistrationRequest.prototype.hasOptions = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    goog.object.extend(exports, proto.nitric.proto.apis.v1);
  }
});

// src/gen/nitric/proto/apis/v1/apis_grpc_pb.js
var require_apis_grpc_pb = __commonJS({
  "src/gen/nitric/proto/apis/v1/apis_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_apis_v1_apis_pb = require_apis_pb();
    function serialize_nitric_proto_apis_v1_ApiDetailsRequest(arg) {
      if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ApiDetailsRequest)) {
        throw new Error("Expected argument of type nitric.proto.apis.v1.ApiDetailsRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_apis_v1_ApiDetailsRequest(buffer_arg) {
      return nitric_proto_apis_v1_apis_pb.ApiDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_apis_v1_ApiDetailsResponse(arg) {
      if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ApiDetailsResponse)) {
        throw new Error("Expected argument of type nitric.proto.apis.v1.ApiDetailsResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_apis_v1_ApiDetailsResponse(buffer_arg) {
      return nitric_proto_apis_v1_apis_pb.ApiDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_apis_v1_ClientMessage(arg) {
      if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.proto.apis.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_apis_v1_ClientMessage(buffer_arg) {
      return nitric_proto_apis_v1_apis_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_apis_v1_ServerMessage(arg) {
      if (!(arg instanceof nitric_proto_apis_v1_apis_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.proto.apis.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_apis_v1_ServerMessage(buffer_arg) {
      return nitric_proto_apis_v1_apis_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var ApiService = exports.ApiService = {
      // Serve a route on an API
      serve: {
        path: "/nitric.proto.apis.v1.Api/Serve",
        requestStream: true,
        responseStream: true,
        requestType: nitric_proto_apis_v1_apis_pb.ClientMessage,
        responseType: nitric_proto_apis_v1_apis_pb.ServerMessage,
        requestSerialize: serialize_nitric_proto_apis_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_proto_apis_v1_ClientMessage,
        responseSerialize: serialize_nitric_proto_apis_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_proto_apis_v1_ServerMessage
      },
      // Retrieve details about an API
      details: {
        path: "/nitric.proto.apis.v1.Api/Details",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_apis_v1_apis_pb.ApiDetailsRequest,
        responseType: nitric_proto_apis_v1_apis_pb.ApiDetailsResponse,
        requestSerialize: serialize_nitric_proto_apis_v1_ApiDetailsRequest,
        requestDeserialize: deserialize_nitric_proto_apis_v1_ApiDetailsRequest,
        responseSerialize: serialize_nitric_proto_apis_v1_ApiDetailsResponse,
        responseDeserialize: deserialize_nitric_proto_apis_v1_ApiDetailsResponse
      }
    };
    exports.ApiClient = grpc13.makeGenericClientConstructor(ApiService);
  }
});

// src/gen/nitric/proto/schedules/v1/schedules_pb.js
var require_schedules_pb = __commonJS({
  "src/gen/nitric/proto/schedules/v1/schedules_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.ClientMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.IntervalRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.IntervalResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.MessageResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.RegistrationRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.RegistrationRequest.CadenceCase", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.RegistrationResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.ScheduleCron", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.ScheduleEvery", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.ServerMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.schedules.v1.ServerMessage.ContentCase", null, global);
    proto.nitric.proto.schedules.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.schedules.v1.ClientMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.ClientMessage.displayName = "proto.nitric.proto.schedules.v1.ClientMessage";
    }
    proto.nitric.proto.schedules.v1.IntervalRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.IntervalRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.IntervalRequest.displayName = "proto.nitric.proto.schedules.v1.IntervalRequest";
    }
    proto.nitric.proto.schedules.v1.MessageResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.MessageResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.MessageResponse.displayName = "proto.nitric.proto.schedules.v1.MessageResponse";
    }
    proto.nitric.proto.schedules.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.schedules.v1.ServerMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.ServerMessage.displayName = "proto.nitric.proto.schedules.v1.ServerMessage";
    }
    proto.nitric.proto.schedules.v1.RegistrationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.schedules.v1.RegistrationRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.RegistrationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.RegistrationRequest.displayName = "proto.nitric.proto.schedules.v1.RegistrationRequest";
    }
    proto.nitric.proto.schedules.v1.ScheduleEvery = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.ScheduleEvery, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.ScheduleEvery.displayName = "proto.nitric.proto.schedules.v1.ScheduleEvery";
    }
    proto.nitric.proto.schedules.v1.ScheduleCron = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.ScheduleCron, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.ScheduleCron.displayName = "proto.nitric.proto.schedules.v1.ScheduleCron";
    }
    proto.nitric.proto.schedules.v1.RegistrationResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.RegistrationResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.RegistrationResponse.displayName = "proto.nitric.proto.schedules.v1.RegistrationResponse";
    }
    proto.nitric.proto.schedules.v1.IntervalResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.schedules.v1.IntervalResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.schedules.v1.IntervalResponse.displayName = "proto.nitric.proto.schedules.v1.IntervalResponse";
    }
    proto.nitric.proto.schedules.v1.ClientMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.schedules.v1.ClientMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_REQUEST: 2,
      INTERVAL_RESPONSE: 3
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.schedules.v1.ClientMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.schedules.v1.ClientMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationRequest: (f = msg.getRegistrationRequest()) && proto.nitric.proto.schedules.v1.RegistrationRequest.toObject(includeInstance, f),
          intervalResponse: (f = msg.getIntervalResponse()) && proto.nitric.proto.schedules.v1.IntervalResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.ClientMessage();
      return proto.nitric.proto.schedules.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.schedules.v1.RegistrationRequest();
            reader.readMessage(value, proto.nitric.proto.schedules.v1.RegistrationRequest.deserializeBinaryFromReader);
            msg.setRegistrationRequest(value);
            break;
          case 3:
            var value = new proto.nitric.proto.schedules.v1.IntervalResponse();
            reader.readMessage(value, proto.nitric.proto.schedules.v1.IntervalResponse.deserializeBinaryFromReader);
            msg.setIntervalResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.schedules.v1.RegistrationRequest.serializeBinaryToWriter
        );
      }
      f = message.getIntervalResponse();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.schedules.v1.IntervalResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.getRegistrationRequest = function() {
      return (
        /** @type{?proto.nitric.proto.schedules.v1.RegistrationRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.schedules.v1.RegistrationRequest, 2)
      );
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.setRegistrationRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.schedules.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.clearRegistrationRequest = function() {
      return this.setRegistrationRequest(void 0);
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.hasRegistrationRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.getIntervalResponse = function() {
      return (
        /** @type{?proto.nitric.proto.schedules.v1.IntervalResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.schedules.v1.IntervalResponse, 3)
      );
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.setIntervalResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.schedules.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.clearIntervalResponse = function() {
      return this.setIntervalResponse(void 0);
    };
    proto.nitric.proto.schedules.v1.ClientMessage.prototype.hasIntervalResponse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.IntervalRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.IntervalRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.IntervalRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          scheduleName: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.IntervalRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.IntervalRequest();
      return proto.nitric.proto.schedules.v1.IntervalRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.IntervalRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setScheduleName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.IntervalRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.IntervalRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.IntervalRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScheduleName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.schedules.v1.IntervalRequest.prototype.getScheduleName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.schedules.v1.IntervalRequest.prototype.setScheduleName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.MessageResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.MessageResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.MessageResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.MessageResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.MessageResponse();
      return proto.nitric.proto.schedules.v1.MessageResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.MessageResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setSuccess(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.MessageResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.MessageResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.MessageResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSuccess();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.proto.schedules.v1.MessageResponse.prototype.getSuccess = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.proto.schedules.v1.MessageResponse.prototype.setSuccess = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.schedules.v1.ServerMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_RESPONSE: 2,
      INTERVAL_REQUEST: 3
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.schedules.v1.ServerMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.schedules.v1.ServerMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationResponse: (f = msg.getRegistrationResponse()) && proto.nitric.proto.schedules.v1.RegistrationResponse.toObject(includeInstance, f),
          intervalRequest: (f = msg.getIntervalRequest()) && proto.nitric.proto.schedules.v1.IntervalRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.ServerMessage();
      return proto.nitric.proto.schedules.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.schedules.v1.RegistrationResponse();
            reader.readMessage(value, proto.nitric.proto.schedules.v1.RegistrationResponse.deserializeBinaryFromReader);
            msg.setRegistrationResponse(value);
            break;
          case 3:
            var value = new proto.nitric.proto.schedules.v1.IntervalRequest();
            reader.readMessage(value, proto.nitric.proto.schedules.v1.IntervalRequest.deserializeBinaryFromReader);
            msg.setIntervalRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationResponse();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.schedules.v1.RegistrationResponse.serializeBinaryToWriter
        );
      }
      f = message.getIntervalRequest();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.schedules.v1.IntervalRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.getRegistrationResponse = function() {
      return (
        /** @type{?proto.nitric.proto.schedules.v1.RegistrationResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.schedules.v1.RegistrationResponse, 2)
      );
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.setRegistrationResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.schedules.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.clearRegistrationResponse = function() {
      return this.setRegistrationResponse(void 0);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.hasRegistrationResponse = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.getIntervalRequest = function() {
      return (
        /** @type{?proto.nitric.proto.schedules.v1.IntervalRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.schedules.v1.IntervalRequest, 3)
      );
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.setIntervalRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.schedules.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.clearIntervalRequest = function() {
      return this.setIntervalRequest(void 0);
    };
    proto.nitric.proto.schedules.v1.ServerMessage.prototype.hasIntervalRequest = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.oneofGroups_ = [[10, 11]];
    proto.nitric.proto.schedules.v1.RegistrationRequest.CadenceCase = {
      CADENCE_NOT_SET: 0,
      EVERY: 10,
      CRON: 11
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.getCadenceCase = function() {
      return (
        /** @type {proto.nitric.proto.schedules.v1.RegistrationRequest.CadenceCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.schedules.v1.RegistrationRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.RegistrationRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.RegistrationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          scheduleName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          every: (f = msg.getEvery()) && proto.nitric.proto.schedules.v1.ScheduleEvery.toObject(includeInstance, f),
          cron: (f = msg.getCron()) && proto.nitric.proto.schedules.v1.ScheduleCron.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.RegistrationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.RegistrationRequest();
      return proto.nitric.proto.schedules.v1.RegistrationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setScheduleName(value);
            break;
          case 10:
            var value = new proto.nitric.proto.schedules.v1.ScheduleEvery();
            reader.readMessage(value, proto.nitric.proto.schedules.v1.ScheduleEvery.deserializeBinaryFromReader);
            msg.setEvery(value);
            break;
          case 11:
            var value = new proto.nitric.proto.schedules.v1.ScheduleCron();
            reader.readMessage(value, proto.nitric.proto.schedules.v1.ScheduleCron.deserializeBinaryFromReader);
            msg.setCron(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.RegistrationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScheduleName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getEvery();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.proto.schedules.v1.ScheduleEvery.serializeBinaryToWriter
        );
      }
      f = message.getCron();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.proto.schedules.v1.ScheduleCron.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.getScheduleName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.setScheduleName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.getEvery = function() {
      return (
        /** @type{?proto.nitric.proto.schedules.v1.ScheduleEvery} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.schedules.v1.ScheduleEvery, 10)
      );
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.setEvery = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.schedules.v1.RegistrationRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.clearEvery = function() {
      return this.setEvery(void 0);
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.hasEvery = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.getCron = function() {
      return (
        /** @type{?proto.nitric.proto.schedules.v1.ScheduleCron} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.schedules.v1.ScheduleCron, 11)
      );
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.setCron = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.proto.schedules.v1.RegistrationRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.clearCron = function() {
      return this.setCron(void 0);
    };
    proto.nitric.proto.schedules.v1.RegistrationRequest.prototype.hasCron = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.ScheduleEvery.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.ScheduleEvery.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.ScheduleEvery.toObject = function(includeInstance, msg) {
        var f, obj = {
          rate: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.ScheduleEvery.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.ScheduleEvery();
      return proto.nitric.proto.schedules.v1.ScheduleEvery.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.ScheduleEvery.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setRate(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.ScheduleEvery.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.ScheduleEvery.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.ScheduleEvery.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRate();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.schedules.v1.ScheduleEvery.prototype.getRate = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.schedules.v1.ScheduleEvery.prototype.setRate = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.ScheduleCron.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.ScheduleCron.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.ScheduleCron.toObject = function(includeInstance, msg) {
        var f, obj = {
          expression: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.ScheduleCron.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.ScheduleCron();
      return proto.nitric.proto.schedules.v1.ScheduleCron.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.ScheduleCron.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setExpression(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.ScheduleCron.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.ScheduleCron.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.ScheduleCron.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getExpression();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.schedules.v1.ScheduleCron.prototype.getExpression = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.schedules.v1.ScheduleCron.prototype.setExpression = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.RegistrationResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.RegistrationResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.RegistrationResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.RegistrationResponse();
      return proto.nitric.proto.schedules.v1.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.RegistrationResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.RegistrationResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.schedules.v1.IntervalResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.schedules.v1.IntervalResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.schedules.v1.IntervalResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.schedules.v1.IntervalResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.schedules.v1.IntervalResponse();
      return proto.nitric.proto.schedules.v1.IntervalResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.schedules.v1.IntervalResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.schedules.v1.IntervalResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.schedules.v1.IntervalResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.schedules.v1.IntervalResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    goog.object.extend(exports, proto.nitric.proto.schedules.v1);
  }
});

// src/gen/nitric/proto/schedules/v1/schedules_grpc_pb.js
var require_schedules_grpc_pb = __commonJS({
  "src/gen/nitric/proto/schedules/v1/schedules_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_schedules_v1_schedules_pb = require_schedules_pb();
    function serialize_nitric_proto_schedules_v1_ClientMessage(arg) {
      if (!(arg instanceof nitric_proto_schedules_v1_schedules_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.proto.schedules.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_schedules_v1_ClientMessage(buffer_arg) {
      return nitric_proto_schedules_v1_schedules_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_schedules_v1_ServerMessage(arg) {
      if (!(arg instanceof nitric_proto_schedules_v1_schedules_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.proto.schedules.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_schedules_v1_ServerMessage(buffer_arg) {
      return nitric_proto_schedules_v1_schedules_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var SchedulesService = exports.SchedulesService = {
      schedule: {
        path: "/nitric.proto.schedules.v1.Schedules/Schedule",
        requestStream: true,
        responseStream: true,
        requestType: nitric_proto_schedules_v1_schedules_pb.ClientMessage,
        responseType: nitric_proto_schedules_v1_schedules_pb.ServerMessage,
        requestSerialize: serialize_nitric_proto_schedules_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_proto_schedules_v1_ClientMessage,
        responseSerialize: serialize_nitric_proto_schedules_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_proto_schedules_v1_ServerMessage
      }
    };
    exports.SchedulesClient = grpc13.makeGenericClientConstructor(SchedulesService);
  }
});

// src/gen/nitric/proto/secrets/v1/secrets_pb.js
var require_secrets_pb = __commonJS({
  "src/gen/nitric/proto/secrets/v1/secrets_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.nitric.proto.secrets.v1.Secret", null, global);
    goog.exportSymbol("proto.nitric.proto.secrets.v1.SecretAccessRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.secrets.v1.SecretAccessResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.secrets.v1.SecretPutRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.secrets.v1.SecretPutResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.secrets.v1.SecretVersion", null, global);
    proto.nitric.proto.secrets.v1.SecretPutRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.secrets.v1.SecretPutRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.secrets.v1.SecretPutRequest.displayName = "proto.nitric.proto.secrets.v1.SecretPutRequest";
    }
    proto.nitric.proto.secrets.v1.SecretPutResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.secrets.v1.SecretPutResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.secrets.v1.SecretPutResponse.displayName = "proto.nitric.proto.secrets.v1.SecretPutResponse";
    }
    proto.nitric.proto.secrets.v1.SecretAccessRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.secrets.v1.SecretAccessRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.secrets.v1.SecretAccessRequest.displayName = "proto.nitric.proto.secrets.v1.SecretAccessRequest";
    }
    proto.nitric.proto.secrets.v1.SecretAccessResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.secrets.v1.SecretAccessResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.secrets.v1.SecretAccessResponse.displayName = "proto.nitric.proto.secrets.v1.SecretAccessResponse";
    }
    proto.nitric.proto.secrets.v1.Secret = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.secrets.v1.Secret, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.secrets.v1.Secret.displayName = "proto.nitric.proto.secrets.v1.Secret";
    }
    proto.nitric.proto.secrets.v1.SecretVersion = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.secrets.v1.SecretVersion, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.secrets.v1.SecretVersion.displayName = "proto.nitric.proto.secrets.v1.SecretVersion";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.secrets.v1.SecretPutRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.secrets.v1.SecretPutRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          secret: (f = msg.getSecret()) && proto.nitric.proto.secrets.v1.Secret.toObject(includeInstance, f),
          value: msg.getValue_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.secrets.v1.SecretPutRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.secrets.v1.SecretPutRequest();
      return proto.nitric.proto.secrets.v1.SecretPutRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.secrets.v1.Secret();
            reader.readMessage(value, proto.nitric.proto.secrets.v1.Secret.deserializeBinaryFromReader);
            msg.setSecret(value);
            break;
          case 2:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.secrets.v1.SecretPutRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecret();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.secrets.v1.Secret.serializeBinaryToWriter
        );
      }
      f = message.getValue_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          2,
          f
        );
      }
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.getSecret = function() {
      return (
        /** @type{?proto.nitric.proto.secrets.v1.Secret} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.secrets.v1.Secret, 1)
      );
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.setSecret = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.clearSecret = function() {
      return this.setSecret(void 0);
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.hasSecret = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.getValue = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.getValue_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getValue()
        )
      );
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.getValue_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getValue()
        )
      );
    };
    proto.nitric.proto.secrets.v1.SecretPutRequest.prototype.setValue = function(value) {
      return jspb.Message.setProto3BytesField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.secrets.v1.SecretPutResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.secrets.v1.SecretPutResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.secrets.v1.SecretPutResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          secretVersion: (f = msg.getSecretVersion()) && proto.nitric.proto.secrets.v1.SecretVersion.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.secrets.v1.SecretPutResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.secrets.v1.SecretPutResponse();
      return proto.nitric.proto.secrets.v1.SecretPutResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.secrets.v1.SecretVersion();
            reader.readMessage(value, proto.nitric.proto.secrets.v1.SecretVersion.deserializeBinaryFromReader);
            msg.setSecretVersion(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.secrets.v1.SecretPutResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecretVersion();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.secrets.v1.SecretVersion.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.prototype.getSecretVersion = function() {
      return (
        /** @type{?proto.nitric.proto.secrets.v1.SecretVersion} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.secrets.v1.SecretVersion, 1)
      );
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.prototype.setSecretVersion = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.prototype.clearSecretVersion = function() {
      return this.setSecretVersion(void 0);
    };
    proto.nitric.proto.secrets.v1.SecretPutResponse.prototype.hasSecretVersion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.secrets.v1.SecretAccessRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.secrets.v1.SecretAccessRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.secrets.v1.SecretAccessRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          secretVersion: (f = msg.getSecretVersion()) && proto.nitric.proto.secrets.v1.SecretVersion.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.secrets.v1.SecretAccessRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.secrets.v1.SecretAccessRequest();
      return proto.nitric.proto.secrets.v1.SecretAccessRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.secrets.v1.SecretVersion();
            reader.readMessage(value, proto.nitric.proto.secrets.v1.SecretVersion.deserializeBinaryFromReader);
            msg.setSecretVersion(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.secrets.v1.SecretAccessRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecretVersion();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.secrets.v1.SecretVersion.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.prototype.getSecretVersion = function() {
      return (
        /** @type{?proto.nitric.proto.secrets.v1.SecretVersion} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.secrets.v1.SecretVersion, 1)
      );
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.prototype.setSecretVersion = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.prototype.clearSecretVersion = function() {
      return this.setSecretVersion(void 0);
    };
    proto.nitric.proto.secrets.v1.SecretAccessRequest.prototype.hasSecretVersion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.secrets.v1.SecretAccessResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.secrets.v1.SecretAccessResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          secretVersion: (f = msg.getSecretVersion()) && proto.nitric.proto.secrets.v1.SecretVersion.toObject(includeInstance, f),
          value: msg.getValue_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.secrets.v1.SecretAccessResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.secrets.v1.SecretAccessResponse();
      return proto.nitric.proto.secrets.v1.SecretAccessResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.secrets.v1.SecretVersion();
            reader.readMessage(value, proto.nitric.proto.secrets.v1.SecretVersion.deserializeBinaryFromReader);
            msg.setSecretVersion(value);
            break;
          case 2:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.secrets.v1.SecretAccessResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecretVersion();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.secrets.v1.SecretVersion.serializeBinaryToWriter
        );
      }
      f = message.getValue_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          2,
          f
        );
      }
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.getSecretVersion = function() {
      return (
        /** @type{?proto.nitric.proto.secrets.v1.SecretVersion} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.secrets.v1.SecretVersion, 1)
      );
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.setSecretVersion = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.clearSecretVersion = function() {
      return this.setSecretVersion(void 0);
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.hasSecretVersion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.getValue = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.getValue_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getValue()
        )
      );
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.getValue_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getValue()
        )
      );
    };
    proto.nitric.proto.secrets.v1.SecretAccessResponse.prototype.setValue = function(value) {
      return jspb.Message.setProto3BytesField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.secrets.v1.Secret.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.secrets.v1.Secret.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.secrets.v1.Secret.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.secrets.v1.Secret.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.secrets.v1.Secret();
      return proto.nitric.proto.secrets.v1.Secret.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.secrets.v1.Secret.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.secrets.v1.Secret.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.secrets.v1.Secret.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.secrets.v1.Secret.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.secrets.v1.Secret.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.secrets.v1.Secret.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.secrets.v1.SecretVersion.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.secrets.v1.SecretVersion.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.secrets.v1.SecretVersion.toObject = function(includeInstance, msg) {
        var f, obj = {
          secret: (f = msg.getSecret()) && proto.nitric.proto.secrets.v1.Secret.toObject(includeInstance, f),
          version: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.secrets.v1.SecretVersion.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.secrets.v1.SecretVersion();
      return proto.nitric.proto.secrets.v1.SecretVersion.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.secrets.v1.SecretVersion.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.secrets.v1.Secret();
            reader.readMessage(value, proto.nitric.proto.secrets.v1.Secret.deserializeBinaryFromReader);
            msg.setSecret(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setVersion(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.secrets.v1.SecretVersion.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.secrets.v1.SecretVersion.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecret();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.secrets.v1.Secret.serializeBinaryToWriter
        );
      }
      f = message.getVersion();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.getSecret = function() {
      return (
        /** @type{?proto.nitric.proto.secrets.v1.Secret} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.secrets.v1.Secret, 1)
      );
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.setSecret = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.clearSecret = function() {
      return this.setSecret(void 0);
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.hasSecret = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.getVersion = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.secrets.v1.SecretVersion.prototype.setVersion = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    goog.object.extend(exports, proto.nitric.proto.secrets.v1);
  }
});

// src/gen/nitric/proto/secrets/v1/secrets_grpc_pb.js
var require_secrets_grpc_pb = __commonJS({
  "src/gen/nitric/proto/secrets/v1/secrets_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_secrets_v1_secrets_pb = require_secrets_pb();
    function serialize_nitric_proto_secrets_v1_SecretAccessRequest(arg) {
      if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest)) {
        throw new Error("Expected argument of type nitric.proto.secrets.v1.SecretAccessRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_secrets_v1_SecretAccessRequest(buffer_arg) {
      return nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_secrets_v1_SecretAccessResponse(arg) {
      if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse)) {
        throw new Error("Expected argument of type nitric.proto.secrets.v1.SecretAccessResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_secrets_v1_SecretAccessResponse(buffer_arg) {
      return nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_secrets_v1_SecretPutRequest(arg) {
      if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretPutRequest)) {
        throw new Error("Expected argument of type nitric.proto.secrets.v1.SecretPutRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_secrets_v1_SecretPutRequest(buffer_arg) {
      return nitric_proto_secrets_v1_secrets_pb.SecretPutRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_secrets_v1_SecretPutResponse(arg) {
      if (!(arg instanceof nitric_proto_secrets_v1_secrets_pb.SecretPutResponse)) {
        throw new Error("Expected argument of type nitric.proto.secrets.v1.SecretPutResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_secrets_v1_SecretPutResponse(buffer_arg) {
      return nitric_proto_secrets_v1_secrets_pb.SecretPutResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var SecretManagerService = exports.SecretManagerService = {
      // Updates a secret, creating a new one if it doesn't already exist
      put: {
        path: "/nitric.proto.secrets.v1.SecretManager/Put",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_secrets_v1_secrets_pb.SecretPutRequest,
        responseType: nitric_proto_secrets_v1_secrets_pb.SecretPutResponse,
        requestSerialize: serialize_nitric_proto_secrets_v1_SecretPutRequest,
        requestDeserialize: deserialize_nitric_proto_secrets_v1_SecretPutRequest,
        responseSerialize: serialize_nitric_proto_secrets_v1_SecretPutResponse,
        responseDeserialize: deserialize_nitric_proto_secrets_v1_SecretPutResponse
      },
      // Gets a secret from a Secret Store
      access: {
        path: "/nitric.proto.secrets.v1.SecretManager/Access",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_secrets_v1_secrets_pb.SecretAccessRequest,
        responseType: nitric_proto_secrets_v1_secrets_pb.SecretAccessResponse,
        requestSerialize: serialize_nitric_proto_secrets_v1_SecretAccessRequest,
        requestDeserialize: deserialize_nitric_proto_secrets_v1_SecretAccessRequest,
        responseSerialize: serialize_nitric_proto_secrets_v1_SecretAccessResponse,
        responseDeserialize: deserialize_nitric_proto_secrets_v1_SecretAccessResponse
      }
    };
    exports.SecretManagerClient = grpc13.makeGenericClientConstructor(SecretManagerService);
  }
});

// src/gen/nitric/proto/http/v1/http_pb.js
var require_http_pb = __commonJS({
  "src/gen/nitric/proto/http/v1/http_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.nitric.proto.http.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.http.v1.HttpProxyRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.http.v1.ServerMessage", null, global);
    proto.nitric.proto.http.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.http.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.http.v1.ClientMessage.displayName = "proto.nitric.proto.http.v1.ClientMessage";
    }
    proto.nitric.proto.http.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.http.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.http.v1.ServerMessage.displayName = "proto.nitric.proto.http.v1.ServerMessage";
    }
    proto.nitric.proto.http.v1.HttpProxyRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.http.v1.HttpProxyRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.http.v1.HttpProxyRequest.displayName = "proto.nitric.proto.http.v1.HttpProxyRequest";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.http.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.http.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.http.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          request: (f = msg.getRequest()) && proto.nitric.proto.http.v1.HttpProxyRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.http.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.http.v1.ClientMessage();
      return proto.nitric.proto.http.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.http.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.proto.http.v1.HttpProxyRequest();
            reader.readMessage(value, proto.nitric.proto.http.v1.HttpProxyRequest.deserializeBinaryFromReader);
            msg.setRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.http.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.http.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.http.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRequest();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.proto.http.v1.HttpProxyRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.http.v1.ClientMessage.prototype.getRequest = function() {
      return (
        /** @type{?proto.nitric.proto.http.v1.HttpProxyRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.http.v1.HttpProxyRequest, 1)
      );
    };
    proto.nitric.proto.http.v1.ClientMessage.prototype.setRequest = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.proto.http.v1.ClientMessage.prototype.clearRequest = function() {
      return this.setRequest(void 0);
    };
    proto.nitric.proto.http.v1.ClientMessage.prototype.hasRequest = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.http.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.http.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.http.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.http.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.http.v1.ServerMessage();
      return proto.nitric.proto.http.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.http.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.http.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.http.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.http.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.http.v1.HttpProxyRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.http.v1.HttpProxyRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.http.v1.HttpProxyRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          host: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.http.v1.HttpProxyRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.http.v1.HttpProxyRequest();
      return proto.nitric.proto.http.v1.HttpProxyRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.http.v1.HttpProxyRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setHost(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.http.v1.HttpProxyRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.http.v1.HttpProxyRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.http.v1.HttpProxyRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getHost();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.http.v1.HttpProxyRequest.prototype.getHost = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.http.v1.HttpProxyRequest.prototype.setHost = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    goog.object.extend(exports, proto.nitric.proto.http.v1);
  }
});

// src/gen/nitric/proto/http/v1/http_grpc_pb.js
var require_http_grpc_pb = __commonJS({
  "src/gen/nitric/proto/http/v1/http_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_http_v1_http_pb = require_http_pb();
    function serialize_nitric_proto_http_v1_ClientMessage(arg) {
      if (!(arg instanceof nitric_proto_http_v1_http_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.proto.http.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_http_v1_ClientMessage(buffer_arg) {
      return nitric_proto_http_v1_http_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_http_v1_ServerMessage(arg) {
      if (!(arg instanceof nitric_proto_http_v1_http_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.proto.http.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_http_v1_ServerMessage(buffer_arg) {
      return nitric_proto_http_v1_http_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var HttpService = exports.HttpService = {
      // Serve a route on an API Gateway
      proxy: {
        path: "/nitric.proto.http.v1.Http/Proxy",
        requestStream: true,
        responseStream: true,
        requestType: nitric_proto_http_v1_http_pb.ClientMessage,
        responseType: nitric_proto_http_v1_http_pb.ServerMessage,
        requestSerialize: serialize_nitric_proto_http_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_proto_http_v1_ClientMessage,
        responseSerialize: serialize_nitric_proto_http_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_proto_http_v1_ServerMessage
      }
    };
    exports.HttpClient = grpc13.makeGenericClientConstructor(HttpService);
  }
});

// src/gen/nitric/proto/websockets/v1/websockets_pb.js
var require_websockets_pb = __commonJS({
  "src/gen/nitric/proto/websockets/v1/websockets_pb.js"(exports) {
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.ClientMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.QueryValue", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.RegistrationRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.RegistrationResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.ServerMessage", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.ServerMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketCloseRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketCloseResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketConnectionEvent", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketConnectionResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketDetailsRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketDetailsResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketEventRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketEventRequest.WebsocketEventCase", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketEventResponse", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketEventResponse.WebsocketResponseCase", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketEventType", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketMessageEvent", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketSendRequest", null, global);
    goog.exportSymbol("proto.nitric.proto.websockets.v1.WebsocketSendResponse", null, global);
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketDetailsRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.displayName = "proto.nitric.proto.websockets.v1.WebsocketDetailsRequest";
    }
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketDetailsResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.displayName = "proto.nitric.proto.websockets.v1.WebsocketDetailsResponse";
    }
    proto.nitric.proto.websockets.v1.WebsocketSendRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketSendRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketSendRequest.displayName = "proto.nitric.proto.websockets.v1.WebsocketSendRequest";
    }
    proto.nitric.proto.websockets.v1.WebsocketSendResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketSendResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketSendResponse.displayName = "proto.nitric.proto.websockets.v1.WebsocketSendResponse";
    }
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketCloseRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketCloseRequest.displayName = "proto.nitric.proto.websockets.v1.WebsocketCloseRequest";
    }
    proto.nitric.proto.websockets.v1.WebsocketCloseResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketCloseResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketCloseResponse.displayName = "proto.nitric.proto.websockets.v1.WebsocketCloseResponse";
    }
    proto.nitric.proto.websockets.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.websockets.v1.ClientMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.ClientMessage.displayName = "proto.nitric.proto.websockets.v1.ClientMessage";
    }
    proto.nitric.proto.websockets.v1.RegistrationResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.RegistrationResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.RegistrationResponse.displayName = "proto.nitric.proto.websockets.v1.RegistrationResponse";
    }
    proto.nitric.proto.websockets.v1.RegistrationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.RegistrationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.RegistrationRequest.displayName = "proto.nitric.proto.websockets.v1.RegistrationRequest";
    }
    proto.nitric.proto.websockets.v1.WebsocketEventRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.websockets.v1.WebsocketEventRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketEventRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketEventRequest.displayName = "proto.nitric.proto.websockets.v1.WebsocketEventRequest";
    }
    proto.nitric.proto.websockets.v1.QueryValue = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.websockets.v1.QueryValue.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.QueryValue, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.QueryValue.displayName = "proto.nitric.proto.websockets.v1.QueryValue";
    }
    proto.nitric.proto.websockets.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.websockets.v1.ServerMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.ServerMessage.displayName = "proto.nitric.proto.websockets.v1.ServerMessage";
    }
    proto.nitric.proto.websockets.v1.WebsocketEventResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.websockets.v1.WebsocketEventResponse.oneofGroups_);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketEventResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketEventResponse.displayName = "proto.nitric.proto.websockets.v1.WebsocketEventResponse";
    }
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketConnectionEvent, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.displayName = "proto.nitric.proto.websockets.v1.WebsocketConnectionEvent";
    }
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketConnectionResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.displayName = "proto.nitric.proto.websockets.v1.WebsocketConnectionResponse";
    }
    proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.displayName = "proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent";
    }
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.proto.websockets.v1.WebsocketMessageEvent, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.proto.websockets.v1.WebsocketMessageEvent.displayName = "proto.nitric.proto.websockets.v1.WebsocketMessageEvent";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          socketName: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketDetailsRequest();
      return proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSocketName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSocketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.prototype.getSocketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsRequest.prototype.setSocketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          url: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketDetailsResponse();
      return proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setUrl(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getUrl();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.prototype.getUrl = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketDetailsResponse.prototype.setUrl = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketSendRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketSendRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          socketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          connectionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          data: msg.getData_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketSendRequest();
      return proto.nitric.proto.websockets.v1.WebsocketSendRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSocketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setConnectionId(value);
            break;
          case 3:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketSendRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSocketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getConnectionId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getData_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          3,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.getSocketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.setSocketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.getConnectionId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.setConnectionId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.getData = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.getData_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getData()
        )
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.getData_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getData()
        )
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketSendRequest.prototype.setData = function(value) {
      return jspb.Message.setProto3BytesField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketSendResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketSendResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketSendResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketSendResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketSendResponse();
      return proto.nitric.proto.websockets.v1.WebsocketSendResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketSendResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketSendResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketSendResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketSendResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketCloseRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketCloseRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketCloseRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          socketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          connectionId: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketCloseRequest();
      return proto.nitric.proto.websockets.v1.WebsocketCloseRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSocketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setConnectionId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketCloseRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSocketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getConnectionId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.prototype.getSocketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.prototype.setSocketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.prototype.getConnectionId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseRequest.prototype.setConnectionId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketCloseResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketCloseResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketCloseResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketCloseResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketCloseResponse();
      return proto.nitric.proto.websockets.v1.WebsocketCloseResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketCloseResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketCloseResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.proto.websockets.v1.ClientMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.websockets.v1.ClientMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_REQUEST: 2,
      WEBSOCKET_EVENT_RESPONSE: 3
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.websockets.v1.ClientMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.websockets.v1.ClientMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationRequest: (f = msg.getRegistrationRequest()) && proto.nitric.proto.websockets.v1.RegistrationRequest.toObject(includeInstance, f),
          websocketEventResponse: (f = msg.getWebsocketEventResponse()) && proto.nitric.proto.websockets.v1.WebsocketEventResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.ClientMessage();
      return proto.nitric.proto.websockets.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.websockets.v1.RegistrationRequest();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.RegistrationRequest.deserializeBinaryFromReader);
            msg.setRegistrationRequest(value);
            break;
          case 3:
            var value = new proto.nitric.proto.websockets.v1.WebsocketEventResponse();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.WebsocketEventResponse.deserializeBinaryFromReader);
            msg.setWebsocketEventResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.websockets.v1.RegistrationRequest.serializeBinaryToWriter
        );
      }
      f = message.getWebsocketEventResponse();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.websockets.v1.WebsocketEventResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.getRegistrationRequest = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.RegistrationRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.RegistrationRequest, 2)
      );
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.setRegistrationRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.websockets.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.clearRegistrationRequest = function() {
      return this.setRegistrationRequest(void 0);
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.hasRegistrationRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.getWebsocketEventResponse = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.WebsocketEventResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.WebsocketEventResponse, 3)
      );
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.setWebsocketEventResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.websockets.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.clearWebsocketEventResponse = function() {
      return this.setWebsocketEventResponse(void 0);
    };
    proto.nitric.proto.websockets.v1.ClientMessage.prototype.hasWebsocketEventResponse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.RegistrationResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.RegistrationResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.RegistrationResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.RegistrationResponse();
      return proto.nitric.proto.websockets.v1.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.RegistrationResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.RegistrationResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.RegistrationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.RegistrationRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.RegistrationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          socketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          eventType: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.RegistrationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.RegistrationRequest();
      return proto.nitric.proto.websockets.v1.RegistrationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSocketName(value);
            break;
          case 2:
            var value = (
              /** @type {!proto.nitric.proto.websockets.v1.WebsocketEventType} */
              reader.readEnum()
            );
            msg.setEventType(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.RegistrationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSocketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getEventType();
      if (f !== 0) {
        writer.writeEnum(
          2,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.prototype.getSocketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.prototype.setSocketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.prototype.getEventType = function() {
      return (
        /** @type {!proto.nitric.proto.websockets.v1.WebsocketEventType} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.nitric.proto.websockets.v1.RegistrationRequest.prototype.setEventType = function(value) {
      return jspb.Message.setProto3EnumField(this, 2, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.oneofGroups_ = [[10, 11, 12]];
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.WebsocketEventCase = {
      WEBSOCKET_EVENT_NOT_SET: 0,
      CONNECTION: 10,
      DISCONNECTION: 11,
      MESSAGE: 12
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.getWebsocketEventCase = function() {
      return (
        /** @type {proto.nitric.proto.websockets.v1.WebsocketEventRequest.WebsocketEventCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.websockets.v1.WebsocketEventRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketEventRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketEventRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          socketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          connectionid: jspb.Message.getFieldWithDefault(msg, 2, ""),
          connection: (f = msg.getConnection()) && proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.toObject(includeInstance, f),
          disconnection: (f = msg.getDisconnection()) && proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.toObject(includeInstance, f),
          message: (f = msg.getMessage()) && proto.nitric.proto.websockets.v1.WebsocketMessageEvent.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketEventRequest();
      return proto.nitric.proto.websockets.v1.WebsocketEventRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSocketName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setConnectionid(value);
            break;
          case 10:
            var value = new proto.nitric.proto.websockets.v1.WebsocketConnectionEvent();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.deserializeBinaryFromReader);
            msg.setConnection(value);
            break;
          case 11:
            var value = new proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.deserializeBinaryFromReader);
            msg.setDisconnection(value);
            break;
          case 12:
            var value = new proto.nitric.proto.websockets.v1.WebsocketMessageEvent();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.WebsocketMessageEvent.deserializeBinaryFromReader);
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketEventRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSocketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getConnectionid();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getConnection();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.serializeBinaryToWriter
        );
      }
      f = message.getDisconnection();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.serializeBinaryToWriter
        );
      }
      f = message.getMessage();
      if (f != null) {
        writer.writeMessage(
          12,
          f,
          proto.nitric.proto.websockets.v1.WebsocketMessageEvent.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.getSocketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.setSocketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.getConnectionid = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.setConnectionid = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.getConnection = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.WebsocketConnectionEvent} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.WebsocketConnectionEvent, 10)
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.setConnection = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.websockets.v1.WebsocketEventRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.clearConnection = function() {
      return this.setConnection(void 0);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.hasConnection = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.getDisconnection = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent, 11)
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.setDisconnection = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.proto.websockets.v1.WebsocketEventRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.clearDisconnection = function() {
      return this.setDisconnection(void 0);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.hasDisconnection = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.getMessage = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.WebsocketMessageEvent} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.WebsocketMessageEvent, 12)
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.setMessage = function(value) {
      return jspb.Message.setOneofWrapperField(this, 12, proto.nitric.proto.websockets.v1.WebsocketEventRequest.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.clearMessage = function() {
      return this.setMessage(void 0);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventRequest.prototype.hasMessage = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.nitric.proto.websockets.v1.QueryValue.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.QueryValue.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.QueryValue.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.QueryValue.toObject = function(includeInstance, msg) {
        var f, obj = {
          valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.QueryValue.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.QueryValue();
      return proto.nitric.proto.websockets.v1.QueryValue.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.QueryValue.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.QueryValue.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.QueryValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.QueryValue.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValueList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.QueryValue.prototype.getValueList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.proto.websockets.v1.QueryValue.prototype.setValueList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.proto.websockets.v1.QueryValue.prototype.addValue = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.proto.websockets.v1.QueryValue.prototype.clearValueList = function() {
      return this.setValueList([]);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.proto.websockets.v1.ServerMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      REGISTRATION_RESPONSE: 2,
      WEBSOCKET_EVENT_REQUEST: 3
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.proto.websockets.v1.ServerMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.websockets.v1.ServerMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          registrationResponse: (f = msg.getRegistrationResponse()) && proto.nitric.proto.websockets.v1.RegistrationResponse.toObject(includeInstance, f),
          websocketEventRequest: (f = msg.getWebsocketEventRequest()) && proto.nitric.proto.websockets.v1.WebsocketEventRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.ServerMessage();
      return proto.nitric.proto.websockets.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setId(value);
            break;
          case 2:
            var value = new proto.nitric.proto.websockets.v1.RegistrationResponse();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.RegistrationResponse.deserializeBinaryFromReader);
            msg.setRegistrationResponse(value);
            break;
          case 3:
            var value = new proto.nitric.proto.websockets.v1.WebsocketEventRequest();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.WebsocketEventRequest.deserializeBinaryFromReader);
            msg.setWebsocketEventRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRegistrationResponse();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.proto.websockets.v1.RegistrationResponse.serializeBinaryToWriter
        );
      }
      f = message.getWebsocketEventRequest();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.proto.websockets.v1.WebsocketEventRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.getRegistrationResponse = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.RegistrationResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.RegistrationResponse, 2)
      );
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.setRegistrationResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.websockets.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.clearRegistrationResponse = function() {
      return this.setRegistrationResponse(void 0);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.hasRegistrationResponse = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.getWebsocketEventRequest = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.WebsocketEventRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.WebsocketEventRequest, 3)
      );
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.setWebsocketEventRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.websockets.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.clearWebsocketEventRequest = function() {
      return this.setWebsocketEventRequest(void 0);
    };
    proto.nitric.proto.websockets.v1.ServerMessage.prototype.hasWebsocketEventRequest = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.oneofGroups_ = [[10]];
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.WebsocketResponseCase = {
      WEBSOCKET_RESPONSE_NOT_SET: 0,
      CONNECTION_RESPONSE: 10
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.getWebsocketResponseCase = function() {
      return (
        /** @type {proto.nitric.proto.websockets.v1.WebsocketEventResponse.WebsocketResponseCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.proto.websockets.v1.WebsocketEventResponse.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketEventResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketEventResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          connectionResponse: (f = msg.getConnectionResponse()) && proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketEventResponse();
      return proto.nitric.proto.websockets.v1.WebsocketEventResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 10:
            var value = new proto.nitric.proto.websockets.v1.WebsocketConnectionResponse();
            reader.readMessage(value, proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.deserializeBinaryFromReader);
            msg.setConnectionResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketEventResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getConnectionResponse();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.getConnectionResponse = function() {
      return (
        /** @type{?proto.nitric.proto.websockets.v1.WebsocketConnectionResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.proto.websockets.v1.WebsocketConnectionResponse, 10)
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.setConnectionResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.websockets.v1.WebsocketEventResponse.oneofGroups_[0], value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.clearConnectionResponse = function() {
      return this.setConnectionResponse(void 0);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventResponse.prototype.hasConnectionResponse = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.toObject = function(includeInstance, msg) {
        var f, obj = {
          queryParamsMap: (f = msg.getQueryParamsMap()) ? f.toObject(includeInstance, proto.nitric.proto.websockets.v1.QueryValue.toObject) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketConnectionEvent();
      return proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getQueryParamsMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.proto.websockets.v1.QueryValue.deserializeBinaryFromReader, "", new proto.nitric.proto.websockets.v1.QueryValue());
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getQueryParamsMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.proto.websockets.v1.QueryValue.serializeBinaryToWriter);
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.prototype.getQueryParamsMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.proto.websockets.v1.QueryValue>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          proto.nitric.proto.websockets.v1.QueryValue
        )
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionEvent.prototype.clearQueryParamsMap = function() {
      this.getQueryParamsMap().clear();
      return this;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          reject: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketConnectionResponse();
      return proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setReject(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getReject();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.prototype.getReject = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketConnectionResponse.prototype.setReject = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent();
      return proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketDisconnectionEvent.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.proto.websockets.v1.WebsocketMessageEvent.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.proto.websockets.v1.WebsocketMessageEvent.toObject(opt_includeInstance, this);
      };
      proto.nitric.proto.websockets.v1.WebsocketMessageEvent.toObject = function(includeInstance, msg) {
        var f, obj = {
          body: msg.getBody_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.proto.websockets.v1.WebsocketMessageEvent();
      return proto.nitric.proto.websockets.v1.WebsocketMessageEvent.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setBody(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.proto.websockets.v1.WebsocketMessageEvent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBody_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          1,
          f
        );
      }
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.proto.websockets.v1.WebsocketMessageEvent.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 1, value);
    };
    proto.nitric.proto.websockets.v1.WebsocketEventType = {
      CONNECT: 0,
      DISCONNECT: 1,
      MESSAGE: 2
    };
    goog.object.extend(exports, proto.nitric.proto.websockets.v1);
  }
});

// src/gen/nitric/proto/websockets/v1/websockets_grpc_pb.js
var require_websockets_grpc_pb = __commonJS({
  "src/gen/nitric/proto/websockets/v1/websockets_grpc_pb.js"(exports) {
    "use strict";
    var grpc13 = require("@grpc/grpc-js");
    var nitric_proto_websockets_v1_websockets_pb = require_websockets_pb();
    function serialize_nitric_proto_websockets_v1_ClientMessage(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_ClientMessage(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_ServerMessage(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_ServerMessage(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_WebsocketCloseRequest(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.WebsocketCloseRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_WebsocketCloseRequest(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_WebsocketCloseResponse(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.WebsocketCloseResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_WebsocketCloseResponse(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_WebsocketDetailsRequest(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.WebsocketDetailsRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_WebsocketDetailsRequest(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_WebsocketDetailsResponse(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.WebsocketDetailsResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_WebsocketDetailsResponse(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_WebsocketSendRequest(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.WebsocketSendRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_WebsocketSendRequest(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_proto_websockets_v1_WebsocketSendResponse(arg) {
      if (!(arg instanceof nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse)) {
        throw new Error("Expected argument of type nitric.proto.websockets.v1.WebsocketSendResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_proto_websockets_v1_WebsocketSendResponse(buffer_arg) {
      return nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var WebsocketService = exports.WebsocketService = {
      // Send a messages to a websocket
      send: {
        path: "/nitric.proto.websockets.v1.Websocket/Send",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_websockets_v1_websockets_pb.WebsocketSendRequest,
        responseType: nitric_proto_websockets_v1_websockets_pb.WebsocketSendResponse,
        requestSerialize: serialize_nitric_proto_websockets_v1_WebsocketSendRequest,
        requestDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketSendRequest,
        responseSerialize: serialize_nitric_proto_websockets_v1_WebsocketSendResponse,
        responseDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketSendResponse
      },
      // Close a websocket connection
      // This can be used to force a client to disconnect
      close: {
        path: "/nitric.proto.websockets.v1.Websocket/Close",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseRequest,
        responseType: nitric_proto_websockets_v1_websockets_pb.WebsocketCloseResponse,
        requestSerialize: serialize_nitric_proto_websockets_v1_WebsocketCloseRequest,
        requestDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketCloseRequest,
        responseSerialize: serialize_nitric_proto_websockets_v1_WebsocketCloseResponse,
        responseDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketCloseResponse
      },
      // Retrieve details about an API
      details: {
        path: "/nitric.proto.websockets.v1.Websocket/Details",
        requestStream: false,
        responseStream: false,
        requestType: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsRequest,
        responseType: nitric_proto_websockets_v1_websockets_pb.WebsocketDetailsResponse,
        requestSerialize: serialize_nitric_proto_websockets_v1_WebsocketDetailsRequest,
        requestDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketDetailsRequest,
        responseSerialize: serialize_nitric_proto_websockets_v1_WebsocketDetailsResponse,
        responseDeserialize: deserialize_nitric_proto_websockets_v1_WebsocketDetailsResponse
      }
    };
    exports.WebsocketClient = grpc13.makeGenericClientConstructor(WebsocketService);
    var WebsocketHandlerService = exports.WebsocketHandlerService = {
      // Handle incoming websocket events
      handleEvents: {
        path: "/nitric.proto.websockets.v1.WebsocketHandler/HandleEvents",
        requestStream: true,
        responseStream: true,
        requestType: nitric_proto_websockets_v1_websockets_pb.ClientMessage,
        responseType: nitric_proto_websockets_v1_websockets_pb.ServerMessage,
        requestSerialize: serialize_nitric_proto_websockets_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_proto_websockets_v1_ClientMessage,
        responseSerialize: serialize_nitric_proto_websockets_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_proto_websockets_v1_ServerMessage
      }
    };
    exports.WebsocketHandlerClient = grpc13.makeGenericClientConstructor(WebsocketHandlerService);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Api: () => Api,
  ApiWorkerOptions: () => ApiWorkerOptions,
  Bucket: () => Bucket2,
  BucketNotification: () => BucketNotification,
  BucketNotificationWorkerOptions: () => BucketNotificationWorkerOptions,
  BucketResource: () => BucketResource,
  Cron: () => Cron,
  Eventing: () => Eventing,
  File: () => File,
  FileMode: () => FileMode,
  FileNotification: () => FileNotification,
  FileNotificationWorkerOptions: () => FileNotificationWorkerOptions,
  HttpWorkerOptions: () => HttpWorkerOptions,
  KeyValue: () => KeyValue,
  KeyValueStoreResource: () => KeyValueStoreResource,
  Method: () => Method,
  Rate: () => Rate,
  Route: () => Route,
  Schedule: () => Schedule,
  Secret: () => Secret,
  SecretResource: () => SecretResource,
  Secrets: () => Secrets,
  Storage: () => Storage,
  Subscription: () => Subscription,
  SubscriptionWorkerOptions: () => SubscriptionWorkerOptions,
  Topic: () => Topic,
  TopicResource: () => TopicResource,
  Websocket: () => Websocket2,
  WebsocketResource: () => WebsocketResource,
  api: () => api,
  bucket: () => bucket,
  http: () => http,
  jwt: () => jwt,
  keyvalue: () => keyvalue,
  kv: () => kv,
  schedule: () => schedule,
  secret: () => secret,
  secrets: () => secrets,
  storage: () => storage,
  topic: () => topic,
  topics: () => topics,
  websocket: () => websocket2
});
module.exports = __toCommonJS(src_exports);

// src/constants.ts
var SERVICE_BIND = process.env.SERVICE_ADDRESS || "127.0.0.1:50051";
var NITRIC_DEBUG = process.env.NITRIC_DEBUG === "true" || false;

// src/api/topics/v1/topics.ts
var import_topics_grpc_pb = __toESM(require_topics_grpc_pb());
var import_topics_pb = __toESM(require_topics_pb());
var import_struct_pb = require("google-protobuf/google/protobuf/struct_pb");
var grpc2 = __toESM(require("@grpc/grpc-js"));

// src/resources/common.ts
var import_resources_pb = __toESM(require_resources_pb());

// src/resources/client.ts
var import_resources_grpc_pb = __toESM(require_resources_grpc_pb());
var grpc = __toESM(require("@grpc/grpc-js"));
var resourceClient = new import_resources_grpc_pb.ResourcesClient(
  SERVICE_BIND,
  grpc.ChannelCredentials.createInsecure()
);
var client_default = resourceClient;

// src/resources/common.ts
var import_duration_pb = require("google-protobuf/google/protobuf/duration_pb");

// src/api/errors/index.ts
var import_grpc_js = require("@grpc/grpc-js");

// src/api/errors/provider-error.ts
var NitricProviderError = class extends Error {
  constructor(grpcError) {
    const message = `${grpcError.message};
Nitric Provider Error: ${grpcError.name}
  Code: ${grpcError.code}
  Details: ${grpcError.details}
  Metadata: ${JSON.stringify(grpcError.metadata)}`;
    super(message);
  }
};
var NotFoundError = class extends NitricProviderError {
};
var PermissionDeniedError = class extends NitricProviderError {
};
var AbortedError = class extends NitricProviderError {
};
var AlreadyExistsError = class extends NitricProviderError {
};
var CancelledError = class extends NitricProviderError {
};
var DataLossError = class extends NitricProviderError {
};
var DeadlineExceededError = class extends NitricProviderError {
};
var FailedPreconditionError = class extends NitricProviderError {
};
var InternalError = class extends NitricProviderError {
};
var InvalidArgumentError = class extends NitricProviderError {
};
var OutOfRangeError = class extends NitricProviderError {
};
var ResourceExhaustedError = class extends NitricProviderError {
};
var UnauthenticatedError = class extends NitricProviderError {
};
var UnavailableError = class extends NitricProviderError {
};
var UnimplementedError = class extends NitricProviderError {
};
var UnknownError = class extends NitricProviderError {
};

// src/api/errors/index.ts
var STATUS_CODE_MAP = {
  [import_grpc_js.status.CANCELLED]: CancelledError,
  [import_grpc_js.status.UNKNOWN]: UnknownError,
  [import_grpc_js.status.INVALID_ARGUMENT]: InvalidArgumentError,
  [import_grpc_js.status.DEADLINE_EXCEEDED]: DeadlineExceededError,
  [import_grpc_js.status.NOT_FOUND]: NotFoundError,
  [import_grpc_js.status.ALREADY_EXISTS]: AlreadyExistsError,
  [import_grpc_js.status.PERMISSION_DENIED]: PermissionDeniedError,
  [import_grpc_js.status.RESOURCE_EXHAUSTED]: ResourceExhaustedError,
  [import_grpc_js.status.FAILED_PRECONDITION]: FailedPreconditionError,
  [import_grpc_js.status.ABORTED]: AbortedError,
  [import_grpc_js.status.OUT_OF_RANGE]: OutOfRangeError,
  [import_grpc_js.status.UNIMPLEMENTED]: UnimplementedError,
  [import_grpc_js.status.INTERNAL]: InternalError,
  [import_grpc_js.status.UNAVAILABLE]: UnavailableError,
  [import_grpc_js.status.DATA_LOSS]: DataLossError,
  [import_grpc_js.status.UNAUTHENTICATED]: UnauthenticatedError
};
var fromGrpcError = (error) => {
  const construct = STATUS_CODE_MAP[error.code];
  if (construct) {
    return new construct(error);
  }
  return new UnknownError(error);
};

// src/resources/common.ts
var Resource = class {
  constructor(name) {
    this.name = name;
  }
  get registerPromise() {
    return this._registerPromise;
  }
  set registerPromise(promise) {
    this._registerPromise = promise;
  }
};
var SecureResource = class extends Resource {
  registerPolicy(...perms) {
    const req = new import_resources_pb.ResourceDeclareRequest();
    const policyResource = new import_resources_pb.ResourceIdentifier();
    policyResource.setType(import_resources_pb.ResourceType.POLICY);
    const policy = new import_resources_pb.PolicyResource();
    const defaultPrincipal = new import_resources_pb.ResourceIdentifier();
    defaultPrincipal.setType(import_resources_pb.ResourceType.SERVICE);
    policy.setPrincipalsList([defaultPrincipal]);
    const actions = this.permsToActions(...perms);
    policy.setActionsList(actions);
    req.setId(policyResource);
    req.setPolicy(policy);
    this.registerPromise.then((resource) => {
      policy.setResourcesList([resource]);
      client_default.declare(req, (error) => {
        if (error) {
          throw fromGrpcError(error);
        }
      });
    });
  }
};
var cache = {};
var make = (T) => {
  const typename = T.name;
  return (name, ...args) => {
    if (!cache[typename]) {
      cache[typename] = {};
    }
    if (!cache[typename][name]) {
      cache[typename][name] = new T(name, ...args);
      const prom = cache[typename][name]["register"]();
      cache[typename][name]["registerPromise"] = prom;
      prom.catch((err) => {
        console.error(err);
      });
    }
    return cache[typename][name];
  };
};
var toDuration = (seconds) => {
  const duration = new import_duration_pb.Duration();
  duration.setSeconds(seconds);
  return duration;
};
var startStreamHandler = (handler) => __async(void 0, null, function* () {
  const stream = yield handler();
  yield new Promise((res) => {
    stream.on("end", () => {
      console.log("Membrane has terminated the trigger stream");
      res();
    });
  });
});

// src/api/topics/v1/topics.ts
var DEFAULT_PUBLISH_OPTS = {
  delay: 0
};
var Topic = class {
  constructor(eventing, name) {
    this.eventing = eventing;
    this.name = name;
  }
  /**
   * Publishes an event to a nitric topic.
   *
   * @param event The event to publish
   * @param opts Additional publishing options
   * @returns NitricEvent containing the unique id of the event (if not provided it will be generated)
   *
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   *
   * const eventing = Eventing();
   *
   * async function publishEvent(): NitricEvent {
   *   const topic = eventing.topic("my-topic");
   *   const event = {
   *     payloadType: "my-payload",
   *     payload: {
   *       value: "Hello World!"
   *     }
   *   };
   *   // Publish immediately
   *   await topic.publish(event);
   *
   *   // Publish after 10 seconds delay
   *   await topic.publish(event, { delay: 10 });
   * }
   * ```
   */
  publish(_0) {
    return __async(this, arguments, function* (event, opts = DEFAULT_PUBLISH_OPTS) {
      const publishOpts = __spreadValues(__spreadValues({}, DEFAULT_PUBLISH_OPTS), opts);
      const request = new import_topics_pb.TopicPublishRequest();
      const msg = new import_topics_pb.Message();
      msg.setStructPayload(import_struct_pb.Struct.fromJavaScript(event));
      request.setTopicName(this.name);
      request.setMessage(msg);
      request.setDelay(toDuration(publishOpts.delay));
      return new Promise((resolve, reject) => {
        this.eventing.TopicServiceClient.publish(request, (error, _response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        });
      });
    });
  }
};
var Eventing = class {
  constructor() {
    this._client = void 0;
  }
  get TopicServiceClient() {
    if (!this._client) {
      this._client = new import_topics_grpc_pb.TopicsClient(
        SERVICE_BIND,
        grpc2.ChannelCredentials.createInsecure()
      );
    }
    return this._client;
  }
  /**
   * Get a reference to a Topic.
   *
   * @param name Name of the topic, as defined in nitric.yaml.
   * @returns a topic resource.
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   * const eventing = new Eventing();
   * const topic = eventing.topic('notifications');
   * ```
   */
  topic(name) {
    if (!name) {
      throw new Error("A topic name is needed to use a Topic.");
    }
    return new Topic(this, name);
  }
};
var TOPIC = void 0;
var topics = () => {
  if (!TOPIC) {
    TOPIC = new Eventing();
  }
  return TOPIC;
};

// src/api/keyvalue/v1/keyvalue.ts
var import_keyvalue_grpc_pb = __toESM(require_keyvalue_grpc_pb());
var grpc3 = __toESM(require("@grpc/grpc-js"));

// src/api/keyvalue/v1/store.ts
var import_keyvalue_pb = __toESM(require_keyvalue_pb());
var import_struct_pb2 = require("google-protobuf/google/protobuf/struct_pb");
var StoreRef = class {
  constructor(kvClient, name) {
    this.kvClient = kvClient;
    this.name = name;
  }
  /**
   * Return a value from the store
   * 
   * @param key The key of the value to retrieve
   *
   * @returns the value or null if not found
   */
  get(key) {
    return __async(this, null, function* () {
      const request = new import_keyvalue_pb.KeyValueGetRequest();
      const ref = new import_keyvalue_pb.ValueRef();
      ref.setStore(this.name);
      ref.setKey(key);
      request.setRef(ref);
      return new Promise((resolve, reject) => {
        this.kvClient.get(
          request,
          (error, response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else if (response.hasValue()) {
              const value = response.getValue();
              const content = value.getContent().toJavaScript();
              resolve(content);
            } else {
              resolve(null);
            }
          }
        );
      });
    });
  }
  /**
   * Set a value in the store
   *
   * @param key The key to store the value against
   * @param value The value to store
   * 
   * @returns void
   */
  set(key, value) {
    return __async(this, null, function* () {
      const request = new import_keyvalue_pb.KeyValueSetRequest();
      const ref = new import_keyvalue_pb.ValueRef();
      ref.setStore(this.name);
      ref.setKey(key);
      request.setRef(ref);
      const content = import_struct_pb2.Struct.fromJavaScript(value);
      request.setContent(content);
      return new Promise((resolve, reject) => {
        this.kvClient.set(
          request,
          (error) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve();
            }
          }
        );
      });
    });
  }
  /**
   * Delete a value from the store
   * 
   * @param key The key of the key/value pair to delete
   *
   * @returns void
   */
  delete(key) {
    return __async(this, null, function* () {
      const request = new import_keyvalue_pb.KeyValueDeleteRequest();
      const ref = new import_keyvalue_pb.ValueRef();
      ref.setStore(this.name);
      ref.setKey(key);
      request.setRef(ref);
      return new Promise((resolve, reject) => {
        this.kvClient.delete(
          request,
          (error) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve();
            }
          }
        );
      });
    });
  }
};

// src/api/keyvalue/v1/keyvalue.ts
var KeyValue = class {
  constructor() {
    this.kvClient = new import_keyvalue_grpc_pb.KeyValueClient(
      SERVICE_BIND,
      grpc3.ChannelCredentials.createInsecure()
    );
  }
  /**
   * Gets a store instance that refers to the store at the specified path.
   *
   * @param name The name of the store (required)
   * @returns The Store instance
   */
  store(name) {
    return new StoreRef(this.kvClient, name);
  }
};
var KEY_VALUE = void 0;
var keyvalue = () => {
  if (!KEY_VALUE) {
    KEY_VALUE = new KeyValue();
  }
  return KEY_VALUE;
};

// src/api/storage/v1/storage.ts
var import_storage_grpc_pb2 = __toESM(require_storage_grpc_pb());
var import_storage_pb3 = __toESM(require_storage_pb());
var grpc12 = __toESM(require("@grpc/grpc-js"));

// src/resources/api.ts
var grpc4 = __toESM(require("@grpc/grpc-js"));
var import_resources_pb2 = __toESM(require_resources_pb());
var import_apis_pb2 = __toESM(require_apis_pb());
var import_apis_grpc_pb = __toESM(require_apis_grpc_pb());
var import_path = __toESM(require("path"));
var import_apis_pb3 = __toESM(require_apis_pb());

// src/helpers/handler.ts
var createHandler = (...handlers) => {
  const reversedHandlers = handlers.slice().reverse();
  return (ctx, finalNext = (ctx2) => ctx2) => __async(void 0, null, function* () {
    if (handlers.length < 1) {
      throw new Error(
        "at least one handler or middleware function must be provided"
      );
    }
    if (handlers.some((handler) => typeof handler !== "function")) {
      throw new Error("all handlers and middleware must be functions");
    }
    const composedHandler = reversedHandlers.reduce(
      (next, h) => {
        const nextNext = (ctx2) => __async(void 0, null, function* () {
          return (yield h(ctx2, next)) || ctx2;
        });
        return nextNext;
      },
      finalNext
    );
    return yield composedHandler(ctx);
  });
};

// src/context/http.ts
var import_apis_pb = __toESM(require_apis_pb());

// src/context/base.ts
var AbstractRequest = class {
  //   readonly traceContext: api.Context;
  constructor(data) {
    this.data = data;
  }
  /**
   * Return the request payload as a string.
   * If the request was a byte array it will converted using UTF-8 text decoding.
   *
   * @returns the request payload as a string
   */
  text() {
    const stringPayload = typeof this.data === "string" ? this.data : new TextDecoder("utf-8").decode(this.data);
    return stringPayload;
  }
  /**
   * Deserialize the request payload from JSON
   *
   * @returns JSON parsed request body
   */
  json() {
    const textBody = this.text();
    return textBody ? JSON.parse(textBody) : void 0;
  }
};
var BaseContext = class {
  /**
   * Return the request object from this context.
   *
   * @returns the request object.
   */
  get req() {
    return this.request;
  }
  /**
   * Return the response object from this context.
   *
   * @returns the response object.
   */
  get res() {
    return this.response;
  }
};

// src/helpers/json.ts
var jsonResponse = (ctx) => (data) => {
  ctx.res.body = new TextEncoder().encode(JSON.stringify(data));
  ctx.res.headers["Content-Type"] = ["application/json"];
  return ctx;
};

// src/context/http.ts
var HttpRequest = class extends AbstractRequest {
  constructor({
    data,
    method,
    path: path2,
    params,
    query,
    headers
  }) {
    super(data);
    this.method = method;
    this.path = path2;
    this.params = params;
    this.query = query;
    this.headers = headers;
  }
};
var HttpResponse = class {
  constructor({ status: status2, headers, body, ctx }) {
    this.status = status2;
    this.headers = headers;
    this.body = body;
    this.ctx = ctx;
  }
  /**
   * Helper method to encode to JSON string for JSON http responses.
   *
   * @returns HttpContext with body property set with an encoded JSON string and json headers set.
   */
  get json() {
    return jsonResponse(this.ctx);
  }
};
var HttpContext = class extends BaseContext {
  get http() {
    return this;
  }
  static fromHttpRequest(http2) {
    const ctx = new HttpContext();
    const headers = http2.getHeadersMap().getEntryList().reduce(
      (acc, [key, [val]]) => __spreadProps(__spreadValues({}, acc), {
        [key.toLowerCase()]: val.length === 1 ? val[0] : val
      }),
      {}
    );
    const query = http2.getQueryParamsMap().getEntryList().reduce(
      (acc, [key, [val]]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val.length === 1 ? decodeURIComponent(val[0]) : val.map((v) => decodeURIComponent(v))
      }),
      {}
    );
    const params = http2.getPathParamsMap().getEntryList().reduce(
      (acc, [key, val]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val.length === 1 ? val[0] : val
      }),
      {}
    );
    ctx.request = new HttpRequest({
      data: http2.getBody(),
      path: http2.getPath(),
      params,
      query,
      headers,
      method: http2.getMethod()
      //traceContext: getTraceContext(trigger.getTraceContext()),
    });
    ctx.response = new HttpResponse({
      status: 200,
      headers: {},
      body: "",
      ctx
    });
    if (!ctx) {
      throw new Error("failed to create context");
    }
    return ctx;
  }
  static toHttpResponse(ctx) {
    const httpCtx = ctx.http;
    const resp = new import_apis_pb.HttpResponse();
    let body;
    let bodyContentType = "application/octet-stream";
    if (typeof httpCtx.response.body === "string") {
      body = new TextEncoder().encode(httpCtx.response.body);
      bodyContentType = "text/plain";
    } else if (httpCtx.response.body instanceof Uint8Array) {
      body = httpCtx.response.body;
      bodyContentType = "application/octet-stream";
    } else {
      body = new TextEncoder().encode(JSON.stringify(httpCtx.response.body));
      bodyContentType = "application/json";
    }
    resp.setBody(body);
    resp.setStatus(httpCtx.response.status);
    Object.entries(httpCtx.response.headers).forEach(([k, v]) => {
      const headerVal = new import_apis_pb.HeaderValue();
      headerVal.setValueList(v);
      resp.getHeadersMap().set(k.toLowerCase(), headerVal);
    });
    const contentHeader = resp.getHeadersMap().get("content-type");
    if (!contentHeader || contentHeader.getValueList().length === 0) {
      const headerVal = new import_apis_pb.HeaderValue();
      headerVal.setValueList([bodyContentType]);
      resp.getHeadersMap().set("content-type", headerVal);
    }
    return resp;
  }
};

// src/resources/api.ts
var ApiWorkerOptions = class {
  constructor(api2, route, methods, opts = {}) {
    this.api = api2;
    this.route = route;
    this.methods = methods;
    this.opts = opts;
  }
};
var Method = class {
  constructor(route, methods, opts, ...middleware) {
    this.route = route;
    this.methods = methods;
    this.options = new ApiWorkerOptions(
      this.route.api.name,
      this.route.path,
      this.methods,
      opts
    );
    this.handler = createHandler(...middleware);
  }
  start() {
    return __async(this, null, function* () {
      return startStreamHandler(() => __async(this, null, function* () {
        if (!this.handler) {
          throw new Error(
            `A handler function must be provided for ${this.route.path}.`
          );
        }
        const apiClient = new import_apis_grpc_pb.ApiClient(
          SERVICE_BIND,
          grpc4.ChannelCredentials.createInsecure()
        );
        const stream = apiClient.serve();
        stream.on("data", (message) => __async(this, null, function* () {
          if (message.hasRegistrationResponse()) {
            console.log("Function connected with membrane");
          } else if (message.hasHttpRequest()) {
            const httpRequest = message.getHttpRequest();
            const responseMessage = new import_apis_pb3.ClientMessage();
            responseMessage.setId(message.getId());
            try {
              const httpResponse = new import_apis_pb3.HttpResponse();
              httpResponse.setStatus(200);
              httpResponse.setBody("");
              const ctx = HttpContext.fromHttpRequest(httpRequest);
              const result = (yield this.handler(ctx, (ctx2) => __async(this, null, function* () {
                return ctx2;
              }))) || ctx;
              responseMessage.setHttpResponse(HttpContext.toHttpResponse(result));
            } catch (e) {
              console.error(e);
              const httpResponse = new import_apis_pb3.HttpResponse();
              responseMessage.setHttpResponse(httpResponse);
              httpResponse.setBody(
                new TextEncoder().encode("Internal Server Error")
              );
              httpResponse.setStatus(500);
              const headers = httpResponse.getHeadersMap();
              const contentTypeHeader = new import_apis_pb3.HeaderValue();
              contentTypeHeader.addValue("text/plain");
              headers.set("Content-Type", contentTypeHeader);
            }
            stream.write(responseMessage);
          }
        }));
        const initRequest = new import_apis_pb3.RegistrationRequest();
        const initMessage = new import_apis_pb3.ClientMessage();
        if (this.options instanceof ApiWorkerOptions) {
          initRequest.setApi(this.options.api);
          initRequest.setMethodsList(this.options.methods);
          initRequest.setPath(this.options.route);
          const opts = new import_apis_pb3.ApiWorkerOptions();
          if (this.options.opts && this.options.opts.security) {
            if (Object.keys(this.options.opts.security).length == 0) {
              opts.setSecurityDisabled(true);
            } else {
              const methodOpts = this.options.opts;
              Object.keys(methodOpts.security).forEach((k) => {
                const scopes = new import_apis_pb3.ApiWorkerScopes();
                scopes.setScopesList(methodOpts.security[k]);
                opts.getSecurityMap().set(k, scopes);
              });
            }
          }
          initRequest.setOptions(opts);
        }
        initMessage.setRegistrationRequest(initRequest);
        stream.write(initMessage);
        return stream;
      }));
    });
  }
};
var Route = class {
  constructor(api2, path2, options = {}) {
    this.api = api2;
    this.path = path2;
    const { middleware = [] } = options;
    this.middleware = composeMiddleware(middleware);
  }
  method(methods, options, ...middleware) {
    return __async(this, null, function* () {
      const getHandler = new Method(
        this,
        methods,
        options,
        ...this.middleware,
        ...middleware
      );
      return getHandler["start"]();
    });
  }
  /**
   * Register a handler function for GET requests to this route
   *
   * @param middleware that should be run on any GET request to this route
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  get(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(["GET"], options, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for POST requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  post(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(["POST"], options, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for PUT requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  put(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(["PUT"], options, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for PATCH requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  patch(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(["PATCH"], options, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for DELETE requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  delete(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(["DELETE"], options, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for OPTIONS requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  options(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(["OPTIONS"], options, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for GET, POST, PATCH, PUT and DELETE requests to this route
   *
   * @param middleware that should respond to matching requests to this route and all HTTP methods
   * @param options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  all(_0) {
    return __async(this, arguments, function* (middleware, options = {}) {
      return this.method(
        ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        options,
        ...composeMiddleware(middleware)
      );
    });
  }
};
var Api = class extends Resource {
  constructor(name, options = {}) {
    super(name);
    const {
      middleware,
      path: path2 = "/",
      // securityDefinitions = null,
      security = {}
    } = options;
    this.path = path2.replace(/^\/?/, "/");
    this.middleware = composeMiddleware(middleware);
    this.security = security;
    this.routes = [];
  }
  /**
   * Register a new route in this API.
   *
   * Used to define Method handlers. e.g.
   *
   * ```
   * // Create a route
   * const home = api.route('/home')
   *
   * // Register a handler for Http GET request to this route
   * home.get(homeHandler)
   * ```
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param options route options such as setting middleware which applies to all methods in the route
   * @returns the route object, which can be used to register method handlers
   */
  route(match, options) {
    const apiRoute = import_path.default.join(this.path, match).split(import_path.default.sep).join("/");
    const routeMiddleware = options ? composeMiddleware(options.middleware) : [];
    const r = new Route(this, apiRoute, __spreadProps(__spreadValues({}, options), {
      // join the api level middleware and route level (route options) middleware
      middleware: [...this.middleware, ...routeMiddleware]
    }));
    this.routes.push(r);
    return r;
  }
  /*  === Quick Register Functions ===
   *
   * Convenience methods that enable quick registration of method handlers, without defining the route first.
   * makes for more succinct code in straightforward cases.
   *
   * e.g. api.route('/home').get(ctx => ctx) becomes api.get('/home', ctx => ctx)
   */
  /**
   * Registers a new route with a GET handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to GET
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  get(_0, _1) {
    return __async(this, arguments, function* (match, middleware, options = {}) {
      return this.route(match).get(composeMiddleware(middleware), options);
    });
  }
  /**
   * Registers a new route with a POST handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to POST
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  post(_0, _1) {
    return __async(this, arguments, function* (match, middleware, options = {}) {
      return this.route(match).post(composeMiddleware(middleware), options);
    });
  }
  /**
   * Registers a new route with a PUT handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PUT
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  put(_0, _1) {
    return __async(this, arguments, function* (match, middleware, options = {}) {
      return this.route(match).put(composeMiddleware(middleware), options);
    });
  }
  /**
   * Registers a new route with a PATCH handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PATCH
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  patch(_0, _1) {
    return __async(this, arguments, function* (match, middleware, options = {}) {
      return this.route(match).patch(composeMiddleware(middleware), options);
    });
  }
  /**
   * Registers a new route with a DELETE handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  delete(_0, _1) {
    return __async(this, arguments, function* (match, middleware, options = {}) {
      return this.route(match).delete(composeMiddleware(middleware), options);
    });
  }
  /**
   * Registers a new route with a OPTIONS handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @param options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  options(_0, _1) {
    return __async(this, arguments, function* (match, middleware, options = {}) {
      return this.route(match).options(composeMiddleware(middleware), options);
    });
  }
  /**
   * Retrieves the Invocation URL of this API at runtime.
   *
   * @returns Promise that returns the URL of this API
   */
  url() {
    return __async(this, null, function* () {
      const request = new import_apis_pb2.ApiDetailsRequest();
      request.setApiName(this.name);
      const apiClient = new import_apis_grpc_pb.ApiClient(
        SERVICE_BIND,
        grpc4.ChannelCredentials.createInsecure()
      );
      const details = yield new Promise((resolve, reject) => {
        apiClient.details(request, (error, data) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve({
              url: data.getUrl()
            });
          }
        });
      });
      return details.url;
    });
  }
  resourceType() {
    return import_resources_pb2.ResourceType.API;
  }
  /**
   * Register this api as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resources_pb2.ResourceDeclareRequest();
      const resourceId = new import_resources_pb2.ResourceIdentifier();
      const apiResource = new import_resources_pb2.ApiResource();
      const { security } = this;
      if (security) {
        Object.keys(security).forEach((k) => {
          const scopes = new import_resources_pb2.ApiScopes();
          scopes.setScopesList(security[k]);
          apiResource.getSecurityMap().set(k, scopes);
        });
      }
      resourceId.setName(this.name);
      resourceId.setType(import_resources_pb2.ResourceType.API);
      req.setApi(apiResource);
      req.setId(resourceId);
      return new Promise((resolve, reject) => {
        client_default.declare(req, (error, _) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resourceId);
          }
        });
      });
    });
  }
};
var api = make(Api);
var jwt = (options) => {
  return { kind: "jwt", issuer: options.issuer, audiences: options.audiences };
};
var composeMiddleware = (middleware) => Array.isArray(middleware) ? middleware : middleware ? [middleware] : [];

// src/resources/topic.ts
var import_resources_pb3 = __toESM(require_resources_pb());
var import_topics_grpc_pb2 = __toESM(require_topics_grpc_pb());
var grpc5 = __toESM(require("@grpc/grpc-js"));
var import_topics_pb3 = __toESM(require_topics_pb());

// src/context/message.ts
var import_topics_pb2 = __toESM(require_topics_pb());
var MessageRequest = class extends AbstractRequest {
  constructor(data, topic2) {
    super(data);
    this.topic = topic2;
  }
};
var MessageContext = class extends BaseContext {
  get event() {
    return this;
  }
  static fromMessageRequest(messageRequest) {
    const topic2 = messageRequest.getTopicName();
    const ctx = new MessageContext();
    const data = messageRequest.getMessage().getStructPayload().toJavaScript();
    ctx.request = new MessageRequest(JSON.stringify(data), topic2);
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toMessageResponse(ctx) {
    const evtCtx = ctx.event;
    const messageResponse = new import_topics_pb2.MessageResponse();
    messageResponse.setSuccess(evtCtx.res.success);
    return messageResponse;
  }
};

// src/resources/topic.ts
var SubscriptionWorkerOptions = class {
  constructor(topic2) {
    this.topic = topic2;
  }
};
var Subscription = class {
  constructor(name, ...middleware) {
    this.options = new SubscriptionWorkerOptions(name);
    this.handler = createHandler(...middleware);
  }
  start() {
    return __async(this, null, function* () {
      return startStreamHandler(() => __async(this, null, function* () {
        if (!this.handler) {
          throw new Error(
            `A handler function must be provided for topic ${this.options.topic}.`
          );
        }
        const subscriberClient = new import_topics_grpc_pb2.SubscriberClient(
          SERVICE_BIND,
          grpc5.ChannelCredentials.createInsecure()
        );
        const stream = subscriberClient.subscribe();
        stream.on("data", (message) => __async(this, null, function* () {
          if (message.hasRegistrationResponse()) {
            console.log("Function connected with membrane");
          } else if (message.hasMessageRequest()) {
            const messageRequest = message.getMessageRequest();
            const clientMessage = new import_topics_pb3.ClientMessage();
            clientMessage.setId(message.getId());
            try {
              const ctx = MessageContext.fromMessageRequest(messageRequest);
              const result = (yield this.handler(ctx, (ctx2) => __async(this, null, function* () {
                return ctx2;
              }))) || ctx;
              const messageResponse = MessageContext.toMessageResponse(result);
              clientMessage.setMessageResponse(messageResponse);
            } catch (e) {
              console.error(e);
              const messageResponse = new import_topics_pb3.MessageResponse();
              messageResponse.setSuccess(false);
              clientMessage.setMessageResponse(messageResponse);
            }
            stream.write(clientMessage);
          }
        }));
        const initRequest = new import_topics_pb3.RegistrationRequest();
        const initMessage = new import_topics_pb3.ClientMessage();
        initRequest.setTopicName(this.options.topic);
        initMessage.setRegistrationRequest(initRequest);
        stream.write(initMessage);
        return stream;
      }));
    });
  }
};
var TopicResource = class extends SecureResource {
  /**
   * Register this topic as a required resource for the calling function/container
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resources_pb3.ResourceDeclareRequest();
      const resource = new import_resources_pb3.ResourceIdentifier();
      resource.setName(this.name);
      resource.setType(import_resources_pb3.ResourceType.TOPIC);
      req.setId(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, _response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve(resource);
            }
          }
        );
      });
    });
  }
  permsToActions(...perms) {
    return perms.reduce((actions, p) => {
      switch (p) {
        case "publishing":
          return [
            ...actions,
            import_resources_pb3.Action.TOPICEVENTPUBLISH,
            import_resources_pb3.Action.TOPICLIST,
            import_resources_pb3.Action.TOPICDETAIL
          ];
        default:
          throw new Error(
            `unknown permission ${p}, supported permissions is publishing.}
            )}`
          );
      }
    }, []);
  }
  /**
   * Register and start a subscription handler that will be called for all events from this topic.
   *
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  subscribe(...middleware) {
    const sub = new Subscription(this.name, ...middleware);
    return sub["start"]();
  }
  resourceType() {
    return import_resources_pb3.ResourceType.TOPIC;
  }
  /**
   * Return a topic reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const updates = resources.topic('updates').for('publishing')
   *
   * @param perm the required permission set
   * @param perms additional required permissions set
   * @returns a usable topic reference
   */
  for(perm, ...perms) {
    this.registerPolicy(perm, ...perms);
    return topics().topic(this.name);
  }
};
function topic(name) {
  return make(TopicResource)(name);
}

// src/resources/keyvalue.ts
var import_resources_pb4 = __toESM(require_resources_pb());
var everything = ["getting", "setting", "deleting"];
var KeyValueStoreResource = class extends SecureResource {
  /**
   * Register this key/value store as a required resource for the calling service
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resources_pb4.ResourceDeclareRequest();
      const resource = new import_resources_pb4.ResourceIdentifier();
      resource.setName(this.name);
      resource.setType(import_resources_pb4.ResourceType.KEYVALUESTORE);
      req.setId(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, _response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve(resource);
            }
          }
        );
      });
    });
  }
  permsToActions(...perms) {
    const actions = perms.reduce((actions2, perm) => {
      switch (perm) {
        case "getting":
          return [...actions2, import_resources_pb4.Action.KEYVALUESTOREREAD];
        case "setting":
          return [...actions2, import_resources_pb4.Action.KEYVALUESTOREWRITE];
        case "deleting":
          return [...actions2, import_resources_pb4.Action.KEYVALUESTOREDELETE];
        default:
          throw new Error(
            `unknown key/value store permission ${perm}, supported permissions are ${everything.join(
              ", "
            )}`
          );
      }
    }, []);
    return actions;
  }
  resourceType() {
    return import_resources_pb4.ResourceType.KEYVALUESTORE;
  }
  /**
   * Return a key/value store reference and register the permissions required by the currently scoped service for this resource.
   *
   * e.g. const customers = resources.kv('customers').for('getting', 'setting')
   *
   * @param perm  the required permission set
   * @param perms additional required permissions set
   * @returns a usable key/value store reference
   */
  for(perm, ...perms) {
    this.registerPolicy(perm, ...perms);
    return keyvalue().store(this.name);
  }
};
function kv(name) {
  return make(KeyValueStoreResource)(name);
}

// src/resources/bucket.ts
var import_resources_pb5 = __toESM(require_resources_pb());
var import_storage_pb2 = __toESM(require_storage_pb());
var import_storage_grpc_pb = __toESM(require_storage_grpc_pb());
var grpc6 = __toESM(require("@grpc/grpc-js"));

// src/context/bucket.ts
var import_storage_pb = __toESM(require_storage_pb());
var BlobEventContext = class extends BaseContext {
  get bucketNotification() {
    return this;
  }
  static fromRequest(request, bucket2) {
    const ctx = new BlobEventContext();
    const blobEvent = request.getBlobEvent();
    ctx.request = new BlobEventRequest(
      blobEvent.getKey(),
      blobEvent.getType(),
      bucket2
    );
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toResponse(ctx) {
    const blobEventRespsonse = new import_storage_pb.BlobEventResponse();
    blobEventRespsonse.setSuccess(ctx.res.success);
    return blobEventRespsonse;
  }
};
var BucketEventContext = class extends BaseContext {
  get bucketNotification() {
    return this;
  }
  static fromRequest(request) {
    const ctx = new BucketEventContext();
    const blobEvent = request.getBlobEvent();
    ctx.request = new BucketEventRequest(
      blobEvent.getKey(),
      blobEvent.getType()
    );
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toResponse(ctx) {
    const blobEventRespsonse = new import_storage_pb.BlobEventResponse();
    blobEventRespsonse.setSuccess(ctx.res.success);
    return blobEventRespsonse;
  }
};
var BucketEventRequest = class extends AbstractRequest {
  constructor(key, notificationType) {
    super("");
    this.eventTypeToNotificationType = (eventType) => {
      switch (eventType) {
        case import_storage_pb.BlobEventType.CREATED:
          return 0 /* Created */;
        case import_storage_pb.BlobEventType.DELETED:
          return 1 /* Deleted */;
        default:
          throw new Error(`event type unsupported: ${eventType}`);
      }
    };
    this.key = key;
    this.eventType = this.eventTypeToNotificationType(notificationType);
  }
};
var BlobEventRequest = class extends BucketEventRequest {
  constructor(key, notificationType, bucket2) {
    super(key, notificationType);
    this.file = bucket2.file(key);
  }
};

// src/resources/bucket.ts
var everything2 = ["reading", "writing", "deleting"];
var BucketNotificationWorkerOptions = class {
  constructor(bucket2, notificationType, notificationPrefixFilter) {
    this.bucket = bucket2;
    this.notificationType = BucketNotificationWorkerOptions.toGrpcEvent(notificationType);
    this.notificationPrefixFilter = notificationPrefixFilter;
  }
  static toGrpcEvent(notificationType) {
    switch (notificationType) {
      case "write":
        return import_storage_pb2.BlobEventType.CREATED;
      case "delete":
        return import_storage_pb2.BlobEventType.DELETED;
      default:
        throw new Error(`notification type ${notificationType} is unsupported`);
    }
  }
};
var FileNotificationWorkerOptions = class extends BucketNotificationWorkerOptions {
  constructor(bucketRef, notificationType, notificationPrefixFilter) {
    super(bucketRef.name, notificationType, notificationPrefixFilter);
    this.bucketRef = bucketRef;
  }
};
var BucketNotification = class {
  constructor(bucketName, notificationType, notificationPrefixFilter, ...middleware) {
    this.options = new BucketNotificationWorkerOptions(
      bucketName,
      notificationType,
      notificationPrefixFilter
    );
    this.handler = createHandler(...middleware);
  }
  start(bucket2) {
    return __async(this, null, function* () {
      return startStreamHandler(() => __async(this, null, function* () {
        const storageListenerClient = new import_storage_grpc_pb.StorageListenerClient(
          SERVICE_BIND,
          grpc6.ChannelCredentials.createInsecure()
        );
        const stream = storageListenerClient.listen();
        stream.on("data", (message) => __async(this, null, function* () {
          if (message.hasRegistrationResponse()) {
            console.log("Function connected with membrane");
          } else if (message.hasBlobEventRequest()) {
            const blobEventRequest = message.getBlobEventRequest();
            const responseMessage = new import_storage_pb2.ClientMessage();
            responseMessage.setId(message.getId());
            try {
              blobEventRequest.setBucketName(this.options.bucket);
              const blobEvent = new import_storage_pb2.BlobEvent();
              blobEvent.setKey(this.options.notificationPrefixFilter);
              blobEvent.setType(this.options.notificationType);
              blobEventRequest.setBlobEvent(blobEvent);
              if (bucket2) {
                const ctx = BlobEventContext.fromRequest(
                  blobEventRequest,
                  bucket2
                );
                const result = (yield this.handler(ctx, (ctx2) => __async(this, null, function* () {
                  return ctx2;
                }))) || ctx;
                responseMessage.setBlobEventResponse(
                  BlobEventContext.toResponse(result)
                );
              } else {
                const ctx = BucketEventContext.fromRequest(blobEventRequest);
                const result = (yield this.handler(ctx, (ctx2) => __async(this, null, function* () {
                  return ctx2;
                }))) || ctx;
                responseMessage.setBlobEventResponse(
                  BucketEventContext.toResponse(result)
                );
              }
            } catch (e) {
              console.error(e);
              const eventResponse = new import_storage_pb2.BlobEventResponse();
              eventResponse.setSuccess(false);
              responseMessage.setBlobEventResponse(eventResponse);
            }
            stream.write(responseMessage);
          }
        }));
        const initRequest = new import_storage_pb2.RegistrationRequest();
        const initMessage = new import_storage_pb2.ClientMessage();
        initRequest.setBucketName(this.options.bucket);
        initRequest.setKeyPrefixFilter(this.options.notificationPrefixFilter);
        initRequest.setBlobEventType(this.options.notificationType);
        initMessage.setRegistrationRequest(initRequest);
        stream.write(initMessage);
        return stream;
      }));
    });
  }
};
var FileNotification = class extends BucketNotification {
  constructor(bucket2, notificationType, notificationPrefixFilter, ...middleware) {
    super(
      bucket2.name,
      notificationType,
      notificationPrefixFilter,
      ...middleware
    );
    this.bucket = bucket2;
  }
};
var BucketResource = class extends SecureResource {
  /**
   * Register this bucket as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resources_pb5.ResourceDeclareRequest();
      const resource = new import_resources_pb5.ResourceIdentifier();
      resource.setName(this.name);
      resource.setType(import_resources_pb5.ResourceType.BUCKET);
      req.setId(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(req, (error, _) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        });
      });
    });
  }
  /**
   * Register and start a bucket notification handler that will be called for all matching notification events on this bucket
   *
   * @param notificationType the notification type that should trigger the middleware, either 'write' or 'delete'
   * @param notificationPrefixFilter the file name prefix that files must match to trigger a notification
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  on(notificationType, notificationPrefixFilter, ...middleware) {
    const notification = new BucketNotification(
      this.name,
      notificationType,
      notificationPrefixFilter,
      ...middleware
    );
    return notification["start"]();
  }
  permsToActions(...perms) {
    return perms.reduce((actions, perm) => {
      switch (perm) {
        case "reading":
          return [...actions, import_resources_pb5.Action.BUCKETFILEGET, import_resources_pb5.Action.BUCKETFILELIST];
        case "writing":
          return [...actions, import_resources_pb5.Action.BUCKETFILEPUT];
        case "deleting":
          return [...actions, import_resources_pb5.Action.BUCKETFILEDELETE];
        default:
          throw new Error(
            `unknown bucket permission ${perm}, supported permissions are ${everything2.join(
              ", "
            )}`
          );
      }
    }, []);
  }
  resourceType() {
    return import_resources_pb5.ResourceType.BUCKET;
  }
  /**
   * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const imgs = resources.bucket('image').for('writing')
   *
   * @param perm  the required permission set
   * @param perms additional required permissions set
   * @returns a usable bucket reference
   */
  for(perm, ...perms) {
    this.registerPolicy(perm, ...perms);
    return storage().bucket(this.name);
  }
};
var bucket = make(BucketResource);

// src/resources/schedule.ts
var import_schedules_grpc_pb = __toESM(require_schedules_grpc_pb());
var grpc7 = __toESM(require("@grpc/grpc-js"));
var import_schedules_pb2 = __toESM(require_schedules_pb());

// src/context/interval.ts
var import_schedules_pb = __toESM(require_schedules_pb());
var IntervalRequest = class extends AbstractRequest {
  constructor(schedule2) {
    super("");
    this.schedule = schedule2;
  }
};
var IntervalContext = class extends BaseContext {
  get event() {
    return this;
  }
  static fromRequest(messageRequest) {
    const schedule2 = messageRequest.getScheduleName();
    const ctx = new IntervalContext();
    ctx.request = new IntervalRequest(schedule2);
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toResponse(_) {
    const intervalResponse = new import_schedules_pb.IntervalResponse();
    return intervalResponse;
  }
};

// src/resources/schedule.ts
var Frequencies = ["days", "hours", "minutes"];
var handleStart = (schedule2) => startStreamHandler(() => __async(void 0, null, function* () {
  const scheduleClient = new import_schedules_grpc_pb.SchedulesClient(
    SERVICE_BIND,
    grpc7.ChannelCredentials.createInsecure()
  );
  const stream = scheduleClient.schedule();
  stream.on("data", (message) => __async(void 0, null, function* () {
    if (message.hasRegistrationResponse()) {
      console.log("Function connected with membrane");
    } else if (message.hasIntervalRequest()) {
      const intervalRequest = message.getIntervalRequest();
      const responseMessage = new import_schedules_pb2.ClientMessage();
      responseMessage.setId(message.getId());
      try {
        const ctx = IntervalContext.fromRequest(intervalRequest);
        const handler = schedule2["handler"];
        const result = (yield handler(ctx, (ctx2) => __async(void 0, null, function* () {
          return ctx2;
        }))) || ctx;
        responseMessage.setIntervalResponse(
          IntervalContext.toResponse(result)
        );
      } catch (e) {
        console.error(e);
      }
      stream.write(responseMessage);
    }
  }));
  const initRequest = new import_schedules_pb2.RegistrationRequest();
  const initMessage = new import_schedules_pb2.ClientMessage();
  if (schedule2 instanceof Rate) {
    initRequest.setScheduleName(schedule2.scheduleName);
    const rate = new import_schedules_pb2.ScheduleEvery();
    rate.setRate(schedule2.rate);
    initRequest.setEvery(rate);
  } else if (schedule2 instanceof Cron) {
    initRequest.setScheduleName(schedule2.scheduleName);
    const cron = new import_schedules_pb2.ScheduleCron();
    cron.setExpression(schedule2.cron);
    initRequest.setCron(cron);
  }
  initMessage.setRegistrationRequest(initRequest);
  stream.write(initMessage);
  return stream;
}));
var Rate = class {
  constructor(schedule2, rate, ...middleware) {
    const [, frequency] = rate.split(" ");
    const normalizedFrequency = frequency.toLocaleLowerCase();
    const rateNum = parseInt(rate);
    if (isNaN(rateNum)) {
      throw new Error(
        "invalid rate expression, expression must begin with a number"
      );
    }
    if (!Frequencies.includes(normalizedFrequency)) {
      throw new Error(
        `invalid rate expression, frequency must one of [${Frequencies.join(
          ", "
        )}] received ${frequency}`
      );
    }
    this.scheduleName = schedule2["name"];
    this.rate = rate;
    this.frequency = normalizedFrequency;
    this.handler = createHandler(...middleware);
  }
  start() {
    return __async(this, null, function* () {
      if (!this.handler) {
        throw new Error(
          `A handler function must be provided for schedule ${this.scheduleName}.`
        );
      }
      return handleStart(this);
    });
  }
};
var Cron = class {
  constructor(schedule2, cron, ...middleware) {
    this.scheduleName = schedule2["name"];
    this.cron = cron;
    this.handler = createHandler(...middleware);
  }
  start() {
    return __async(this, null, function* () {
      if (!this.handler) {
        throw new Error(
          `A handler function must be provided for schedule ${this.scheduleName}.`
        );
      }
      return handleStart(this);
    });
  }
};
var Schedule = class {
  constructor(name) {
    /**
     * Run this schedule on the provided frequency.
     *
     * @param rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'day/days', 'hour/hours' or 'minute/minutes'.
     * @param middleware the handler/middleware to run on a schedule
     * @returns A promise that resolves when the schedule worker stops running.
     */
    this.every = (rate, ...middleware) => {
      if (Frequencies.indexOf(`${rate}s`) !== -1) {
        rate = `1 ${rate}s`;
      }
      const rateParts = rate.split(" ");
      const value = rateParts[0];
      let unit = rateParts[1];
      if (Frequencies.indexOf(`${unit}s`) !== -1) {
        unit = `${unit}s`;
      }
      const r = new Rate(this, `${value} ${unit}`, ...middleware);
      return r["start"]();
    };
    this.cron = (expression, ...middleware) => {
      const r = new Cron(this, expression, ...middleware);
      return r["start"]();
    };
    this.name = name;
  }
};
var schedule = (name) => {
  return new Schedule(name);
};

// src/resources/secret.ts
var import_resources_pb6 = __toESM(require_resources_pb());

// src/api/secrets/v1/secrets.ts
var import_secrets_grpc_pb = __toESM(require_secrets_grpc_pb());
var import_secrets_pb = __toESM(require_secrets_pb());
var grpc8 = __toESM(require("@grpc/grpc-js"));
var ENCODER = new TextEncoder();
var DECODER = new TextDecoder();
var Secrets = class {
  constructor() {
    /**
     * Get a reference to a secret.
     *
     * @param name the name of the secret
     * @returns A Secret reference.
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * const secret = secrets().secret("my-secret");
     * ```
     */
    this.secret = (name) => {
      if (!name) {
        throw new Error("A name is required to use a Secret.");
      }
      return new Secret(this, name);
    };
    this.SecretManagerClient = new import_secrets_grpc_pb.SecretManagerClient(
      SERVICE_BIND,
      grpc8.ChannelCredentials.createInsecure()
    );
  }
};
var _Secret = class {
  constructor(secrets2, name) {
    this.secrets = secrets2;
    this.name = name;
  }
  /**
   * Creates a new SecretVersion containing the given value.
   *
   * @param secret the value to store
   * @returns A Promise which returns a reference to the newly created version of the secret
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function putSecret() {
   *  const secret = secrets().secret('secret');
   *  const version = await secret.put("ssssshhhhh... it's a secret");
   * }
   * ```
   */
  put(secret2) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const secretBuff = typeof secret2 === "string" ? ENCODER.encode(secret2) : secret2;
        const request = new import_secrets_pb.SecretPutRequest();
        request.setSecret(_Secret.toWire(this));
        request.setValue(secretBuff);
        this.secrets.SecretManagerClient.put(
          request,
          (error, response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve(
                new SecretVersion(
                  this.secrets,
                  this,
                  response.getSecretVersion().getVersion()
                )
              );
            }
          }
        );
      });
    });
  }
  /**
   * Returns a reference to the latest version of a secret.
   *
   * @returns a reference to the latest version of the secret
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function getSecret() {
   *  const secret = secrets().secret('secret');
   *  const latestVersion = secret.latest();
   * }
   * ```
   */
  latest() {
    return this.version("latest");
  }
  /**
   * Creates a reference to a specific version of a secret.
   *
   * @param version the ID of the version reference to be created.
   * @returns a secret version reference, the version may or may not exist.
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * const secret = secrets().secret('secret');
   * // NOTE: Version identifiers can differ between providers
   * // In most cases 'latest' should be used
   * const latestVersion = secret.version('1');
   * ```
   */
  version(version) {
    if (!version) {
      throw new Error("A version is required to create a version reference.");
    }
    return new SecretVersion(this.secrets, this, version);
  }
};
var Secret = _Secret;
Secret.toWire = (secret2) => {
  const wire = new import_secrets_pb.Secret();
  wire.setName(secret2.name);
  return wire;
};
var _SecretVersion = class {
  constructor(secrets2, secret2, version) {
    this.secrets = secrets2;
    this.secret = secret2;
    this.version = version;
  }
  /**
   * Accesses the stored secret value from this version, it can be used to access the underlying secret data.
   *
   * @returns A Promise that return the stored value in this version of the secret.
   * @example
   * ```typescript
   * import { secrets } from "@nitric/sdk";
   *
   * async function accessSecret() {
   *  const secret = secrets().secret('secret').latest();
   *  const secretValue = await secret.access();
   *  const secretString = secretValue.asString();
   * }
   * ```
   */
  access() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const request = new import_secrets_pb.SecretAccessRequest();
        request.setSecretVersion(_SecretVersion.toWire(this));
        this.secrets.SecretManagerClient.access(
          request,
          (error, response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              const secretVersion = new _SecretVersion(
                this.secrets,
                this.secret,
                response.getSecretVersion().getVersion()
              );
              const val = new SecretValue(
                secretVersion,
                response.getValue_asU8()
              );
              resolve(val);
            }
          }
        );
      });
    });
  }
};
var SecretVersion = _SecretVersion;
SecretVersion.toWire = (secretVersion) => {
  const wire = new import_secrets_pb.SecretVersion();
  wire.setSecret(Secret.toWire(secretVersion.secret));
  wire.setVersion(secretVersion.version);
  return wire;
};
var SecretValue = class {
  constructor(secretVersion, val) {
    /**
     * @returns A Uint8Array (byte array) containing the value of the secret
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function accessSecret() {
     *  const secret = secrets().secret('secret').latest();
     *  const secretValue = await secret.access();
     *
     *  const content = secretValue.asBytes();
     * }
     * ```
     */
    this.asBytes = () => {
      return this.val;
    };
    /**
     * Return the secret value as a string.
     *
     * @returns the secret value as a string
     * @example
     * ```typescript
     * import { secrets } from "@nitric/sdk";
     *
     * async function accessSecret() {
     *  const secret = secrets().secret('secret').latest();
     *  const secretValue = await secret.access();
     *
     *  const content = secretValue.asString();
     * }
     * ```
     */
    this.asString = () => {
      return DECODER.decode(this.asBytes());
    };
    this.secretVersion = secretVersion;
    this.val = val;
  }
};
var SECRETS = void 0;
var secrets = () => {
  if (!SECRETS) {
    SECRETS = new Secrets();
  }
  return SECRETS;
};

// src/resources/secret.ts
var everything3 = ["putting", "accessing"];
var SecretResource = class extends SecureResource {
  register() {
    return __async(this, null, function* () {
      const req = new import_resources_pb6.ResourceDeclareRequest();
      const resource = new import_resources_pb6.ResourceIdentifier();
      resource.setName(this.name);
      resource.setType(import_resources_pb6.ResourceType.SECRET);
      req.setId(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, _response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve(resource);
            }
          }
        );
      });
    });
  }
  permsToActions(...perms) {
    return perms.reduce((actions, perm) => {
      switch (perm) {
        case "putting":
          return [...actions, import_resources_pb6.Action.SECRETPUT];
        case "accessing":
          return [...actions, import_resources_pb6.Action.SECRETACCESS];
        default:
          throw new Error(
            `unknown secret permission ${perm}, supported permissions are ${everything3.join(
              ", "
            )}`
          );
      }
    }, []);
  }
  resourceType() {
    return import_resources_pb6.ResourceType.SECRET;
  }
  for(perm, ...perms) {
    this.registerPolicy(perm, ...perms);
    return secrets().secret(this.name);
  }
};
var secret = make(SecretResource);

// src/resources/http.ts
var import_portfinder = __toESM(require("portfinder"));
var import_http_grpc_pb = __toESM(require_http_grpc_pb());
var grpc9 = __toESM(require("@grpc/grpc-js"));
var import_http_pb = __toESM(require_http_pb());
var NO_OP = () => {
};
var HttpWorkerOptions = class {
  constructor(app, port, callback = NO_OP) {
    this.app = app;
    this.port = port;
    this.callback = callback;
  }
};
var createWorker = (app, port, callback) => {
  const httpClient = new import_http_grpc_pb.HttpClient(
    SERVICE_BIND,
    grpc9.ChannelCredentials.createInsecure()
  );
  const httpProxyRequest = new import_http_pb.HttpProxyRequest();
  httpProxyRequest.setHost(`localhost:${port}`);
  const httpProxyStream = httpClient.proxy();
  httpProxyStream.on("data", () => {
  });
  const clientMessage = new import_http_pb.ClientMessage();
  clientMessage.setRequest(httpProxyRequest);
  httpProxyStream.write(clientMessage);
  if (process.env.NITRIC_ENVIRONMENT !== "build") {
    app.listen(port, callback);
    httpProxyStream.cancel();
  }
};
var http = (app, callback) => {
  const unknownApp = app;
  const nodeApp = !!unknownApp.listen && typeof unknownApp.listen === "function" ? app : { listen: app };
  const port = Number.parseInt(process.env.NITRIC_HTTP_PROXY_PORT);
  if (Number.isNaN(port)) {
    console.log("NITRIC_HTTP_PROXY_PORT not set. Finding open port...");
    import_portfinder.default.getPort((err, port2) => {
      if (err) {
        throw new Error(
          "Unable to find open port. Try setting the env var `NITRIC_HTTP_PROXY_PORT`"
        );
      }
      createWorker(nodeApp, port2, callback);
    });
    return;
  }
  createWorker(nodeApp, port, callback);
};

// src/api/websocket/v1/websocket.ts
var import_websockets_grpc_pb = __toESM(require_websockets_grpc_pb());
var import_websockets_pb = __toESM(require_websockets_pb());
var grpc10 = __toESM(require("@grpc/grpc-js"));
var Websocket = class {
  constructor() {
    this.client = new import_websockets_grpc_pb.WebsocketClient(
      SERVICE_BIND,
      grpc10.ChannelCredentials.createInsecure()
    );
  }
  send(socket, connectionId, message) {
    return __async(this, null, function* () {
      let payload;
      if (typeof message === "string") {
        payload = new TextEncoder().encode(message);
      } else if (message instanceof Uint8Array) {
        payload = message;
      } else {
        payload = new TextEncoder().encode(JSON.stringify(message));
      }
      const sendRequest = new import_websockets_pb.WebsocketSendRequest();
      sendRequest.setSocketName(socket);
      sendRequest.setConnectionId(connectionId);
      sendRequest.setData(payload);
      return new Promise((res, rej) => {
        this.client.send(sendRequest, (error, _data) => {
          if (error) {
            rej(error);
          }
          res();
        });
      });
    });
  }
  close(socket, connectionId) {
    return __async(this, null, function* () {
      const closeRequest = new import_websockets_pb.WebsocketCloseRequest();
      closeRequest.setSocketName(socket);
      closeRequest.setConnectionId(connectionId);
      return new Promise((res, rej) => {
        this.client.close(closeRequest, (error) => {
          if (error) {
            rej(error);
          }
          res();
        });
      });
    });
  }
};
var WEBSOCKET = void 0;
var websocket = () => {
  if (!WEBSOCKET) {
    WEBSOCKET = new Websocket();
  }
  return WEBSOCKET;
};

// src/resources/websocket.ts
var import_resources_pb7 = __toESM(require_resources_pb());
var import_websockets_pb3 = __toESM(require_websockets_pb());
var import_websockets_grpc_pb2 = __toESM(require_websockets_grpc_pb());
var grpc11 = __toESM(require("@grpc/grpc-js"));

// src/context/websocket.ts
var import_websockets_pb2 = __toESM(require_websockets_pb());
var WebsocketNotificationContext = class extends BaseContext {
  get websocket() {
    return this;
  }
  static fromRequest(request) {
    const ctx = new WebsocketNotificationContext();
    const connection = request.getConnection();
    const query = connection ? connection.getQueryParamsMap().getEntryList().reduce(
      (acc, [key, [val]]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val.map((v) => decodeURIComponent(v))
      }),
      {}
    ) : {};
    const message = request.getMessage();
    ctx.request = new WebsocketNotificationRequest(
      message ? message.getBody() : "",
      request.getSocketName(),
      request.getWebsocketEventCase(),
      request.getConnectionid(),
      query
    );
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toResponse(ctx) {
    const notifyCtx = ctx.websocket;
    const eventResponse = new import_websockets_pb2.WebsocketEventResponse();
    const connectionResponse = new import_websockets_pb2.WebsocketConnectionResponse();
    connectionResponse.setReject(!notifyCtx.res.success);
    eventResponse.setConnectionResponse(connectionResponse);
    return eventResponse;
  }
};
var WebsocketNotificationRequest = class extends AbstractRequest {
  constructor(data, socket, eventType, connectionId, query) {
    super(data);
    this.eventCaseToType = (eventType) => {
      switch (eventType) {
        case import_websockets_pb2.WebsocketEventRequest.WebsocketEventCase.CONNECTION:
          return "connect";
        case import_websockets_pb2.WebsocketEventRequest.WebsocketEventCase.DISCONNECTION:
          return "disconnect";
        case import_websockets_pb2.WebsocketEventRequest.WebsocketEventCase.MESSAGE:
          return "message";
        default:
          throw new Error(`event type unsupported: ${eventType}`);
      }
    };
    this.socket = socket;
    this.eventType = this.eventCaseToType(eventType);
    this.connectionId = connectionId;
    this.query = query;
  }
};

// src/resources/websocket.ts
var WebsocketEventTypeMap = {
  connect: import_websockets_pb3.WebsocketEventType.CONNECT,
  disconnect: import_websockets_pb3.WebsocketEventType.DISCONNECT,
  message: import_websockets_pb3.WebsocketEventType.MESSAGE
};
var Websocket2 = class {
  constructor(socketName, eventType, ...middleware) {
    this.handler = createHandler(...middleware);
    this.socketName = socketName;
    this.eventType = WebsocketEventTypeMap[eventType];
  }
  start() {
    return __async(this, null, function* () {
      return startStreamHandler(() => __async(this, null, function* () {
        if (!this.handler) {
          throw new Error(
            `A handler function must be provided for websocket ${this.socketName}.`
          );
        }
        const wsHandlerClient = new import_websockets_grpc_pb2.WebsocketHandlerClient(
          SERVICE_BIND,
          grpc11.ChannelCredentials.createInsecure()
        );
        const stream = wsHandlerClient.handleEvents();
        stream.on("data", (message) => __async(this, null, function* () {
          if (message.hasRegistrationResponse()) {
            console.log("Websocket function connected with membrane");
          } else if (message.hasWebsocketEventRequest()) {
            const eventRequest = message.getWebsocketEventRequest();
            const responseMessage = new import_websockets_pb3.ClientMessage();
            responseMessage.setId(message.getId());
            try {
              const ctx = WebsocketNotificationContext.fromRequest(eventRequest);
              const result = (yield this.handler(ctx, (ctx2) => __async(this, null, function* () {
                return ctx2;
              }))) || ctx;
              responseMessage.setWebsocketEventResponse(
                WebsocketNotificationContext.toResponse(result)
              );
            } catch (e) {
              console.error(e);
              const eventResponse = new import_websockets_pb3.WebsocketEventResponse();
              const connectionResponse = new import_websockets_pb3.WebsocketConnectionResponse();
              connectionResponse.setReject(true);
              eventResponse.setConnectionResponse(connectionResponse);
              responseMessage.setWebsocketEventResponse(eventResponse);
            }
            stream.write(responseMessage);
          }
        }));
        const initRequest = new import_websockets_pb3.RegistrationRequest();
        const initMessage = new import_websockets_pb3.ClientMessage();
        initRequest.setSocketName(this.socketName);
        initRequest.setEventType(this.eventType);
        initMessage.setRegistrationRequest(initRequest);
        stream.write(initMessage);
        return stream;
      }));
    });
  }
};
var WebsocketResource = class extends Resource {
  constructor(name) {
    super(name);
    this.wsClient = websocket();
  }
  /**
   * Register this websocket as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resources_pb7.ResourceDeclareRequest();
      const resource = new import_resources_pb7.ResourceIdentifier();
      resource.setName(this.name);
      resource.setType(import_resources_pb7.ResourceType.WEBSOCKET);
      req.setId(resource);
      const res = yield new Promise((resolve, reject) => {
        client_default.declare(req, (error, _) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        });
      });
      const defaultPrincipal = new import_resources_pb7.ResourceIdentifier();
      defaultPrincipal.setType(import_resources_pb7.ResourceType.SERVICE);
      const policyResource = new import_resources_pb7.ResourceIdentifier();
      policyResource.setType(import_resources_pb7.ResourceType.POLICY);
      const policyReq = new import_resources_pb7.ResourceDeclareRequest();
      const policy = new import_resources_pb7.PolicyResource();
      policy.setActionsList([import_resources_pb7.Action.WEBSOCKETMANAGE]);
      policy.setPrincipalsList([defaultPrincipal]);
      policy.setResourcesList([resource]);
      policyReq.setPolicy(policy);
      policyReq.setId(policyResource);
      yield new Promise((resolve, reject) => {
        client_default.declare(policyReq, (error, _) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        });
      });
      return res;
    });
  }
  send(connectionId, data) {
    return __async(this, null, function* () {
      yield this.wsClient.send(this.name, connectionId, data);
    });
  }
  close(connectionId) {
    return __async(this, null, function* () {
      yield this.wsClient.close(this.name, connectionId);
    });
  }
  /**
   * Retrieves the Invocation URL of this Websocket at runtime.
   *
   * @returns Promise that returns the URL of this Websocket
   */
  url() {
    return __async(this, null, function* () {
      const request = new import_websockets_pb3.WebsocketDetailsRequest();
      request.setSocketName(this.name);
      const details = yield new Promise((resolve, reject) => {
        this.wsClient.client.details(request, (error, data) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve({
              url: data.getUrl()
            });
          }
        });
      });
      return details.url;
    });
  }
  /**
   * Register and start a websocket event handler that will be called for all matching events on this websocket
   *
   * @param eventType the notification type that should trigger the middleware, either 'connect', 'disconnect' or 'message'
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  on(eventType, ...middleware) {
    const notification = new Websocket2(this.name, eventType, ...middleware);
    return notification["start"]();
  }
  resourceType() {
    return import_resources_pb7.ResourceType.WEBSOCKET;
  }
};
var websocket2 = make(WebsocketResource);

// src/api/storage/v1/storage.ts
var Storage = class {
  constructor() {
    this.StorageClient = new import_storage_grpc_pb2.StorageClient(
      SERVICE_BIND,
      grpc12.ChannelCredentials.createInsecure()
    );
  }
  /**
   * Create a bucket reference.
   *
   * @param name of the bucket to reference
   * @returns a bucket reference
   */
  bucket(name) {
    if (!name) {
      throw new Error("A bucket name is required to use a Bucket.");
    }
    return new Bucket2(this, name);
  }
};
var Bucket2 = class {
  constructor(storage2, name) {
    this.storage = storage2;
    this.name = name;
  }
  /**
   * Retrieve a list of files on the bucket.
   *
   * @returns An array of file references
   */
  files() {
    return __async(this, null, function* () {
      const request = new import_storage_pb3.StorageListBlobsRequest();
      request.setBucketName(this.name);
      return yield new Promise((resolve, reject) => {
        this.storage.StorageClient.listBlobs(request, (err, data) => {
          if (err) {
            reject(fromGrpcError(err));
          }
          resolve(
            data.getBlobsList().map((f) => {
              return new File(this.storage, this, f.getKey());
            })
          );
        });
      });
    });
  }
  file(name) {
    if (!name) {
      throw new Error("A file name/path is required to use a File.");
    }
    return new File(this.storage, this, name);
  }
  /**
   * Register and start a bucket notification handler that will be called for all matching notification events on this bucket
   *
   * @param notificationType the notification type that should trigger the middleware, either 'write' or 'delete'
   * @param notificationPrefixFilter the file name prefix that files must match to trigger a notification
   * @param middleware handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  on(notificationType, notificationPrefixFilter, ...middleware) {
    const notification = new FileNotification(
      this,
      notificationType,
      notificationPrefixFilter,
      ...middleware
    );
    return notification["start"]();
  }
};
var FileMode = /* @__PURE__ */ ((FileMode2) => {
  FileMode2[FileMode2["Read"] = 0] = "Read";
  FileMode2[FileMode2["Write"] = 1] = "Write";
  return FileMode2;
})(FileMode || {});
var DEFAULT_SIGN_URL_OPTS = {
  expiry: 600
};
var File = class {
  constructor(storage2, bucket2, name) {
    this.storage = storage2;
    this.bucket = bucket2;
    this.name = name;
  }
  /**
   * Get a pre-signed download URL for the file.
   *
   * @param opts the option passed to the signUrl function.
   * @returns a download URL string.
   */
  getDownloadUrl(opts) {
    return this.signUrl(0 /* Read */, opts);
  }
  /**
   * Get a pre-signed upload URL for the file.
   *
   * @param opts the option passed to the signUrl function.
   * @returns a upload URL string.
   */
  getUploadUrl(opts) {
    return this.signUrl(1 /* Write */, opts);
  }
  /**
   * Create a presigned url for reading or writing for the given file reference.
   *
   * @param mode the mode the url will access the file with. E.g. reading or writing.
   * @param opts file URL signing options.
   * @param opts.expiry how long the URL should be valid for in seconds.
   * @returns a presigned url string.
   */
  signUrl(_0) {
    return __async(this, arguments, function* (mode, opts = DEFAULT_SIGN_URL_OPTS) {
      const { expiry } = __spreadValues(__spreadValues({}, DEFAULT_SIGN_URL_OPTS), opts);
      const request = new import_storage_pb3.StoragePreSignUrlRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      request.setOperation(mode);
      request.setExpiry(toDuration(expiry));
      return new Promise((resolve, reject) => {
        this.storage.StorageClient.preSignUrl(request, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(response.getUrl());
          }
        });
      });
    });
  }
  /**
   * Write an array of bytes to the file.
   *
   * @param body The file contents to write.
   * @returns A promise that resolves when the write operation completes.
   *
   * Example:
   * ```typescript
   * import { Storage } from "@nitric/sdk";
   *
   * const storage = new Storage();
   *
   * const buf = Buffer.from("My Test File...");
   * await storage.bucket("my-bucket").file("my-item").write(buf);
   * ```
   */
  write(body) {
    return __async(this, null, function* () {
      const request = new import_storage_pb3.StorageWriteRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      if (typeof body === "string" || body instanceof String) {
        request.setBody(new TextEncoder().encode(body));
      } else {
        request.setBody(body);
      }
      return new Promise((resolve, reject) => {
        this.storage.StorageClient.write(request, (error) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        });
      });
    });
  }
  /**
   * Read the contents of this file as an array of bytes.
   *
   * @returns A promise that returns a byte array of the contents of the read blob.
   *
   * Example:
   * ```typescript
   * import { Storage } from "@nitric/sdk";
   *
   * const storage = new Storage();
   *
   * const bytes = await storage.bucket("my-bucket").file("my-item").read();
   * ```
   */
  read() {
    return __async(this, null, function* () {
      const request = new import_storage_pb3.StorageReadRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      return new Promise((resolve, reject) => {
        this.storage.StorageClient.read(request, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(response.getBody_asU8());
          }
        });
      });
    });
  }
  /**
   * Delete this file from the bucket.
   *
   * @returns A void promise.
   *
   * Example:
   * ```typescript
   * import { Storage } from "@nitric/sdk";
   *
   * const storage = new Storage();
   *
   * const bytes = await storage.bucket("my-bucket").file("my-item").delete();
   * ```
   */
  delete() {
    return __async(this, null, function* () {
      const request = new import_storage_pb3.StorageDeleteRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      return new Promise((resolve, reject) => {
        this.storage.StorageClient.delete(request, (error) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        });
      });
    });
  }
  /**
   * Determine if a file exists in a bucket.
   *
   * @returns A boolean promise.
   *
   * Example:
   * ```typescript
   * import { bucket } from "@nitric/sdk";
   *
   * const exampleBucket = bucket('exampleBucket').for('reading');
   *
   * const exists = await exampleBucket.file("my-item").exists();
   * ```
   */
  exists() {
    return __async(this, null, function* () {
      const request = new import_storage_pb3.StorageExistsRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      return new Promise((resolve, reject) => {
        this.storage.StorageClient.exists(request, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(response.getExists());
          }
        });
      });
    });
  }
};
var STORAGE = void 0;
var storage = () => {
  if (!STORAGE) {
    STORAGE = new Storage();
  }
  return STORAGE;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Api,
  ApiWorkerOptions,
  Bucket,
  BucketNotification,
  BucketNotificationWorkerOptions,
  BucketResource,
  Cron,
  Eventing,
  File,
  FileMode,
  FileNotification,
  FileNotificationWorkerOptions,
  HttpWorkerOptions,
  KeyValue,
  KeyValueStoreResource,
  Method,
  Rate,
  Route,
  Schedule,
  Secret,
  SecretResource,
  Secrets,
  Storage,
  Subscription,
  SubscriptionWorkerOptions,
  Topic,
  TopicResource,
  Websocket,
  WebsocketResource,
  api,
  bucket,
  http,
  jwt,
  keyvalue,
  kv,
  schedule,
  secret,
  secrets,
  storage,
  topic,
  topics,
  websocket
});
