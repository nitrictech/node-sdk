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

// src/gen/validate/validate_pb.js
var require_validate_pb = __commonJS({
  "src/gen/validate/validate_pb.js"(exports) {
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
    var google_protobuf_descriptor_pb = require("google-protobuf/google/protobuf/descriptor_pb.js");
    goog.object.extend(proto, google_protobuf_descriptor_pb);
    var google_protobuf_duration_pb = require("google-protobuf/google/protobuf/duration_pb.js");
    goog.object.extend(proto, google_protobuf_duration_pb);
    var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");
    goog.object.extend(proto, google_protobuf_timestamp_pb);
    goog.exportSymbol("proto.validate.AnyRules", null, global);
    goog.exportSymbol("proto.validate.BoolRules", null, global);
    goog.exportSymbol("proto.validate.BytesRules", null, global);
    goog.exportSymbol("proto.validate.BytesRules.WellKnownCase", null, global);
    goog.exportSymbol("proto.validate.DoubleRules", null, global);
    goog.exportSymbol("proto.validate.DurationRules", null, global);
    goog.exportSymbol("proto.validate.EnumRules", null, global);
    goog.exportSymbol("proto.validate.FieldRules", null, global);
    goog.exportSymbol("proto.validate.FieldRules.TypeCase", null, global);
    goog.exportSymbol("proto.validate.Fixed32Rules", null, global);
    goog.exportSymbol("proto.validate.Fixed64Rules", null, global);
    goog.exportSymbol("proto.validate.FloatRules", null, global);
    goog.exportSymbol("proto.validate.Int32Rules", null, global);
    goog.exportSymbol("proto.validate.Int64Rules", null, global);
    goog.exportSymbol("proto.validate.KnownRegex", null, global);
    goog.exportSymbol("proto.validate.MapRules", null, global);
    goog.exportSymbol("proto.validate.MessageRules", null, global);
    goog.exportSymbol("proto.validate.RepeatedRules", null, global);
    goog.exportSymbol("proto.validate.SFixed32Rules", null, global);
    goog.exportSymbol("proto.validate.SFixed64Rules", null, global);
    goog.exportSymbol("proto.validate.SInt32Rules", null, global);
    goog.exportSymbol("proto.validate.SInt64Rules", null, global);
    goog.exportSymbol("proto.validate.StringRules", null, global);
    goog.exportSymbol("proto.validate.StringRules.WellKnownCase", null, global);
    goog.exportSymbol("proto.validate.TimestampRules", null, global);
    goog.exportSymbol("proto.validate.UInt32Rules", null, global);
    goog.exportSymbol("proto.validate.UInt64Rules", null, global);
    goog.exportSymbol("proto.validate.disabled", null, global);
    goog.exportSymbol("proto.validate.ignored", null, global);
    goog.exportSymbol("proto.validate.required", null, global);
    goog.exportSymbol("proto.validate.rules", null, global);
    proto.validate.FieldRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.validate.FieldRules.oneofGroups_);
    };
    goog.inherits(proto.validate.FieldRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.FieldRules.displayName = "proto.validate.FieldRules";
    }
    proto.validate.FloatRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.FloatRules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.FloatRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.FloatRules.displayName = "proto.validate.FloatRules";
    }
    proto.validate.DoubleRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.DoubleRules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.DoubleRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.DoubleRules.displayName = "proto.validate.DoubleRules";
    }
    proto.validate.Int32Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.Int32Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.Int32Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.Int32Rules.displayName = "proto.validate.Int32Rules";
    }
    proto.validate.Int64Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.Int64Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.Int64Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.Int64Rules.displayName = "proto.validate.Int64Rules";
    }
    proto.validate.UInt32Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.UInt32Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.UInt32Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.UInt32Rules.displayName = "proto.validate.UInt32Rules";
    }
    proto.validate.UInt64Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.UInt64Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.UInt64Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.UInt64Rules.displayName = "proto.validate.UInt64Rules";
    }
    proto.validate.SInt32Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.SInt32Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.SInt32Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.SInt32Rules.displayName = "proto.validate.SInt32Rules";
    }
    proto.validate.SInt64Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.SInt64Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.SInt64Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.SInt64Rules.displayName = "proto.validate.SInt64Rules";
    }
    proto.validate.Fixed32Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.Fixed32Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.Fixed32Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.Fixed32Rules.displayName = "proto.validate.Fixed32Rules";
    }
    proto.validate.Fixed64Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.Fixed64Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.Fixed64Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.Fixed64Rules.displayName = "proto.validate.Fixed64Rules";
    }
    proto.validate.SFixed32Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.SFixed32Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.SFixed32Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.SFixed32Rules.displayName = "proto.validate.SFixed32Rules";
    }
    proto.validate.SFixed64Rules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.SFixed64Rules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.SFixed64Rules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.SFixed64Rules.displayName = "proto.validate.SFixed64Rules";
    }
    proto.validate.BoolRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.validate.BoolRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.BoolRules.displayName = "proto.validate.BoolRules";
    }
    proto.validate.StringRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.StringRules.repeatedFields_, proto.validate.StringRules.oneofGroups_);
    };
    goog.inherits(proto.validate.StringRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.StringRules.displayName = "proto.validate.StringRules";
    }
    proto.validate.BytesRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.BytesRules.repeatedFields_, proto.validate.BytesRules.oneofGroups_);
    };
    goog.inherits(proto.validate.BytesRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.BytesRules.displayName = "proto.validate.BytesRules";
    }
    proto.validate.EnumRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.EnumRules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.EnumRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.EnumRules.displayName = "proto.validate.EnumRules";
    }
    proto.validate.MessageRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.validate.MessageRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.MessageRules.displayName = "proto.validate.MessageRules";
    }
    proto.validate.RepeatedRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.validate.RepeatedRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.RepeatedRules.displayName = "proto.validate.RepeatedRules";
    }
    proto.validate.MapRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.validate.MapRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.MapRules.displayName = "proto.validate.MapRules";
    }
    proto.validate.AnyRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.AnyRules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.AnyRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.AnyRules.displayName = "proto.validate.AnyRules";
    }
    proto.validate.DurationRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.validate.DurationRules.repeatedFields_, null);
    };
    goog.inherits(proto.validate.DurationRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.DurationRules.displayName = "proto.validate.DurationRules";
    }
    proto.validate.TimestampRules = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.validate.TimestampRules, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.validate.TimestampRules.displayName = "proto.validate.TimestampRules";
    }
    proto.validate.FieldRules.oneofGroups_ = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22]];
    proto.validate.FieldRules.TypeCase = {
      TYPE_NOT_SET: 0,
      FLOAT: 1,
      DOUBLE: 2,
      INT32: 3,
      INT64: 4,
      UINT32: 5,
      UINT64: 6,
      SINT32: 7,
      SINT64: 8,
      FIXED32: 9,
      FIXED64: 10,
      SFIXED32: 11,
      SFIXED64: 12,
      BOOL: 13,
      STRING: 14,
      BYTES: 15,
      ENUM: 16,
      REPEATED: 18,
      MAP: 19,
      ANY: 20,
      DURATION: 21,
      TIMESTAMP: 22
    };
    proto.validate.FieldRules.prototype.getTypeCase = function() {
      return (
        /** @type {proto.validate.FieldRules.TypeCase} */
        jspb.Message.computeOneofCase(this, proto.validate.FieldRules.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.FieldRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.FieldRules.toObject(opt_includeInstance, this);
      };
      proto.validate.FieldRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: (f = msg.getMessage()) && proto.validate.MessageRules.toObject(includeInstance, f),
          pb_float: (f = msg.getFloat()) && proto.validate.FloatRules.toObject(includeInstance, f),
          pb_double: (f = msg.getDouble()) && proto.validate.DoubleRules.toObject(includeInstance, f),
          int32: (f = msg.getInt32()) && proto.validate.Int32Rules.toObject(includeInstance, f),
          int64: (f = msg.getInt64()) && proto.validate.Int64Rules.toObject(includeInstance, f),
          uint32: (f = msg.getUint32()) && proto.validate.UInt32Rules.toObject(includeInstance, f),
          uint64: (f = msg.getUint64()) && proto.validate.UInt64Rules.toObject(includeInstance, f),
          sint32: (f = msg.getSint32()) && proto.validate.SInt32Rules.toObject(includeInstance, f),
          sint64: (f = msg.getSint64()) && proto.validate.SInt64Rules.toObject(includeInstance, f),
          fixed32: (f = msg.getFixed32()) && proto.validate.Fixed32Rules.toObject(includeInstance, f),
          fixed64: (f = msg.getFixed64()) && proto.validate.Fixed64Rules.toObject(includeInstance, f),
          sfixed32: (f = msg.getSfixed32()) && proto.validate.SFixed32Rules.toObject(includeInstance, f),
          sfixed64: (f = msg.getSfixed64()) && proto.validate.SFixed64Rules.toObject(includeInstance, f),
          bool: (f = msg.getBool()) && proto.validate.BoolRules.toObject(includeInstance, f),
          string: (f = msg.getString()) && proto.validate.StringRules.toObject(includeInstance, f),
          bytes: (f = msg.getBytes()) && proto.validate.BytesRules.toObject(includeInstance, f),
          pb_enum: (f = msg.getEnum()) && proto.validate.EnumRules.toObject(includeInstance, f),
          repeated: (f = msg.getRepeated()) && proto.validate.RepeatedRules.toObject(includeInstance, f),
          map: (f = msg.getMap()) && proto.validate.MapRules.toObject(includeInstance, f),
          any: (f = msg.getAny()) && proto.validate.AnyRules.toObject(includeInstance, f),
          duration: (f = msg.getDuration()) && proto.validate.DurationRules.toObject(includeInstance, f),
          timestamp: (f = msg.getTimestamp()) && proto.validate.TimestampRules.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.FieldRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.FieldRules();
      return proto.validate.FieldRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.FieldRules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 17:
            var value = new proto.validate.MessageRules();
            reader.readMessage(value, proto.validate.MessageRules.deserializeBinaryFromReader);
            msg.setMessage(value);
            break;
          case 1:
            var value = new proto.validate.FloatRules();
            reader.readMessage(value, proto.validate.FloatRules.deserializeBinaryFromReader);
            msg.setFloat(value);
            break;
          case 2:
            var value = new proto.validate.DoubleRules();
            reader.readMessage(value, proto.validate.DoubleRules.deserializeBinaryFromReader);
            msg.setDouble(value);
            break;
          case 3:
            var value = new proto.validate.Int32Rules();
            reader.readMessage(value, proto.validate.Int32Rules.deserializeBinaryFromReader);
            msg.setInt32(value);
            break;
          case 4:
            var value = new proto.validate.Int64Rules();
            reader.readMessage(value, proto.validate.Int64Rules.deserializeBinaryFromReader);
            msg.setInt64(value);
            break;
          case 5:
            var value = new proto.validate.UInt32Rules();
            reader.readMessage(value, proto.validate.UInt32Rules.deserializeBinaryFromReader);
            msg.setUint32(value);
            break;
          case 6:
            var value = new proto.validate.UInt64Rules();
            reader.readMessage(value, proto.validate.UInt64Rules.deserializeBinaryFromReader);
            msg.setUint64(value);
            break;
          case 7:
            var value = new proto.validate.SInt32Rules();
            reader.readMessage(value, proto.validate.SInt32Rules.deserializeBinaryFromReader);
            msg.setSint32(value);
            break;
          case 8:
            var value = new proto.validate.SInt64Rules();
            reader.readMessage(value, proto.validate.SInt64Rules.deserializeBinaryFromReader);
            msg.setSint64(value);
            break;
          case 9:
            var value = new proto.validate.Fixed32Rules();
            reader.readMessage(value, proto.validate.Fixed32Rules.deserializeBinaryFromReader);
            msg.setFixed32(value);
            break;
          case 10:
            var value = new proto.validate.Fixed64Rules();
            reader.readMessage(value, proto.validate.Fixed64Rules.deserializeBinaryFromReader);
            msg.setFixed64(value);
            break;
          case 11:
            var value = new proto.validate.SFixed32Rules();
            reader.readMessage(value, proto.validate.SFixed32Rules.deserializeBinaryFromReader);
            msg.setSfixed32(value);
            break;
          case 12:
            var value = new proto.validate.SFixed64Rules();
            reader.readMessage(value, proto.validate.SFixed64Rules.deserializeBinaryFromReader);
            msg.setSfixed64(value);
            break;
          case 13:
            var value = new proto.validate.BoolRules();
            reader.readMessage(value, proto.validate.BoolRules.deserializeBinaryFromReader);
            msg.setBool(value);
            break;
          case 14:
            var value = new proto.validate.StringRules();
            reader.readMessage(value, proto.validate.StringRules.deserializeBinaryFromReader);
            msg.setString(value);
            break;
          case 15:
            var value = new proto.validate.BytesRules();
            reader.readMessage(value, proto.validate.BytesRules.deserializeBinaryFromReader);
            msg.setBytes(value);
            break;
          case 16:
            var value = new proto.validate.EnumRules();
            reader.readMessage(value, proto.validate.EnumRules.deserializeBinaryFromReader);
            msg.setEnum(value);
            break;
          case 18:
            var value = new proto.validate.RepeatedRules();
            reader.readMessage(value, proto.validate.RepeatedRules.deserializeBinaryFromReader);
            msg.setRepeated(value);
            break;
          case 19:
            var value = new proto.validate.MapRules();
            reader.readMessage(value, proto.validate.MapRules.deserializeBinaryFromReader);
            msg.setMap(value);
            break;
          case 20:
            var value = new proto.validate.AnyRules();
            reader.readMessage(value, proto.validate.AnyRules.deserializeBinaryFromReader);
            msg.setAny(value);
            break;
          case 21:
            var value = new proto.validate.DurationRules();
            reader.readMessage(value, proto.validate.DurationRules.deserializeBinaryFromReader);
            msg.setDuration(value);
            break;
          case 22:
            var value = new proto.validate.TimestampRules();
            reader.readMessage(value, proto.validate.TimestampRules.deserializeBinaryFromReader);
            msg.setTimestamp(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.FieldRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.FieldRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.FieldRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f != null) {
        writer.writeMessage(
          17,
          f,
          proto.validate.MessageRules.serializeBinaryToWriter
        );
      }
      f = message.getFloat();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.validate.FloatRules.serializeBinaryToWriter
        );
      }
      f = message.getDouble();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.validate.DoubleRules.serializeBinaryToWriter
        );
      }
      f = message.getInt32();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.validate.Int32Rules.serializeBinaryToWriter
        );
      }
      f = message.getInt64();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.validate.Int64Rules.serializeBinaryToWriter
        );
      }
      f = message.getUint32();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.validate.UInt32Rules.serializeBinaryToWriter
        );
      }
      f = message.getUint64();
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          proto.validate.UInt64Rules.serializeBinaryToWriter
        );
      }
      f = message.getSint32();
      if (f != null) {
        writer.writeMessage(
          7,
          f,
          proto.validate.SInt32Rules.serializeBinaryToWriter
        );
      }
      f = message.getSint64();
      if (f != null) {
        writer.writeMessage(
          8,
          f,
          proto.validate.SInt64Rules.serializeBinaryToWriter
        );
      }
      f = message.getFixed32();
      if (f != null) {
        writer.writeMessage(
          9,
          f,
          proto.validate.Fixed32Rules.serializeBinaryToWriter
        );
      }
      f = message.getFixed64();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.validate.Fixed64Rules.serializeBinaryToWriter
        );
      }
      f = message.getSfixed32();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.validate.SFixed32Rules.serializeBinaryToWriter
        );
      }
      f = message.getSfixed64();
      if (f != null) {
        writer.writeMessage(
          12,
          f,
          proto.validate.SFixed64Rules.serializeBinaryToWriter
        );
      }
      f = message.getBool();
      if (f != null) {
        writer.writeMessage(
          13,
          f,
          proto.validate.BoolRules.serializeBinaryToWriter
        );
      }
      f = message.getString();
      if (f != null) {
        writer.writeMessage(
          14,
          f,
          proto.validate.StringRules.serializeBinaryToWriter
        );
      }
      f = message.getBytes();
      if (f != null) {
        writer.writeMessage(
          15,
          f,
          proto.validate.BytesRules.serializeBinaryToWriter
        );
      }
      f = message.getEnum();
      if (f != null) {
        writer.writeMessage(
          16,
          f,
          proto.validate.EnumRules.serializeBinaryToWriter
        );
      }
      f = message.getRepeated();
      if (f != null) {
        writer.writeMessage(
          18,
          f,
          proto.validate.RepeatedRules.serializeBinaryToWriter
        );
      }
      f = message.getMap();
      if (f != null) {
        writer.writeMessage(
          19,
          f,
          proto.validate.MapRules.serializeBinaryToWriter
        );
      }
      f = message.getAny();
      if (f != null) {
        writer.writeMessage(
          20,
          f,
          proto.validate.AnyRules.serializeBinaryToWriter
        );
      }
      f = message.getDuration();
      if (f != null) {
        writer.writeMessage(
          21,
          f,
          proto.validate.DurationRules.serializeBinaryToWriter
        );
      }
      f = message.getTimestamp();
      if (f != null) {
        writer.writeMessage(
          22,
          f,
          proto.validate.TimestampRules.serializeBinaryToWriter
        );
      }
    };
    proto.validate.FieldRules.prototype.getMessage = function() {
      return (
        /** @type{?proto.validate.MessageRules} */
        jspb.Message.getWrapperField(this, proto.validate.MessageRules, 17)
      );
    };
    proto.validate.FieldRules.prototype.setMessage = function(value) {
      return jspb.Message.setWrapperField(this, 17, value);
    };
    proto.validate.FieldRules.prototype.clearMessage = function() {
      return this.setMessage(void 0);
    };
    proto.validate.FieldRules.prototype.hasMessage = function() {
      return jspb.Message.getField(this, 17) != null;
    };
    proto.validate.FieldRules.prototype.getFloat = function() {
      return (
        /** @type{?proto.validate.FloatRules} */
        jspb.Message.getWrapperField(this, proto.validate.FloatRules, 1)
      );
    };
    proto.validate.FieldRules.prototype.setFloat = function(value) {
      return jspb.Message.setOneofWrapperField(this, 1, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearFloat = function() {
      return this.setFloat(void 0);
    };
    proto.validate.FieldRules.prototype.hasFloat = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.FieldRules.prototype.getDouble = function() {
      return (
        /** @type{?proto.validate.DoubleRules} */
        jspb.Message.getWrapperField(this, proto.validate.DoubleRules, 2)
      );
    };
    proto.validate.FieldRules.prototype.setDouble = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearDouble = function() {
      return this.setDouble(void 0);
    };
    proto.validate.FieldRules.prototype.hasDouble = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.FieldRules.prototype.getInt32 = function() {
      return (
        /** @type{?proto.validate.Int32Rules} */
        jspb.Message.getWrapperField(this, proto.validate.Int32Rules, 3)
      );
    };
    proto.validate.FieldRules.prototype.setInt32 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearInt32 = function() {
      return this.setInt32(void 0);
    };
    proto.validate.FieldRules.prototype.hasInt32 = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.FieldRules.prototype.getInt64 = function() {
      return (
        /** @type{?proto.validate.Int64Rules} */
        jspb.Message.getWrapperField(this, proto.validate.Int64Rules, 4)
      );
    };
    proto.validate.FieldRules.prototype.setInt64 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 4, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearInt64 = function() {
      return this.setInt64(void 0);
    };
    proto.validate.FieldRules.prototype.hasInt64 = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.FieldRules.prototype.getUint32 = function() {
      return (
        /** @type{?proto.validate.UInt32Rules} */
        jspb.Message.getWrapperField(this, proto.validate.UInt32Rules, 5)
      );
    };
    proto.validate.FieldRules.prototype.setUint32 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 5, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearUint32 = function() {
      return this.setUint32(void 0);
    };
    proto.validate.FieldRules.prototype.hasUint32 = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.FieldRules.prototype.getUint64 = function() {
      return (
        /** @type{?proto.validate.UInt64Rules} */
        jspb.Message.getWrapperField(this, proto.validate.UInt64Rules, 6)
      );
    };
    proto.validate.FieldRules.prototype.setUint64 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 6, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearUint64 = function() {
      return this.setUint64(void 0);
    };
    proto.validate.FieldRules.prototype.hasUint64 = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.validate.FieldRules.prototype.getSint32 = function() {
      return (
        /** @type{?proto.validate.SInt32Rules} */
        jspb.Message.getWrapperField(this, proto.validate.SInt32Rules, 7)
      );
    };
    proto.validate.FieldRules.prototype.setSint32 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 7, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearSint32 = function() {
      return this.setSint32(void 0);
    };
    proto.validate.FieldRules.prototype.hasSint32 = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.validate.FieldRules.prototype.getSint64 = function() {
      return (
        /** @type{?proto.validate.SInt64Rules} */
        jspb.Message.getWrapperField(this, proto.validate.SInt64Rules, 8)
      );
    };
    proto.validate.FieldRules.prototype.setSint64 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 8, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearSint64 = function() {
      return this.setSint64(void 0);
    };
    proto.validate.FieldRules.prototype.hasSint64 = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.FieldRules.prototype.getFixed32 = function() {
      return (
        /** @type{?proto.validate.Fixed32Rules} */
        jspb.Message.getWrapperField(this, proto.validate.Fixed32Rules, 9)
      );
    };
    proto.validate.FieldRules.prototype.setFixed32 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 9, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearFixed32 = function() {
      return this.setFixed32(void 0);
    };
    proto.validate.FieldRules.prototype.hasFixed32 = function() {
      return jspb.Message.getField(this, 9) != null;
    };
    proto.validate.FieldRules.prototype.getFixed64 = function() {
      return (
        /** @type{?proto.validate.Fixed64Rules} */
        jspb.Message.getWrapperField(this, proto.validate.Fixed64Rules, 10)
      );
    };
    proto.validate.FieldRules.prototype.setFixed64 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearFixed64 = function() {
      return this.setFixed64(void 0);
    };
    proto.validate.FieldRules.prototype.hasFixed64 = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.validate.FieldRules.prototype.getSfixed32 = function() {
      return (
        /** @type{?proto.validate.SFixed32Rules} */
        jspb.Message.getWrapperField(this, proto.validate.SFixed32Rules, 11)
      );
    };
    proto.validate.FieldRules.prototype.setSfixed32 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearSfixed32 = function() {
      return this.setSfixed32(void 0);
    };
    proto.validate.FieldRules.prototype.hasSfixed32 = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.validate.FieldRules.prototype.getSfixed64 = function() {
      return (
        /** @type{?proto.validate.SFixed64Rules} */
        jspb.Message.getWrapperField(this, proto.validate.SFixed64Rules, 12)
      );
    };
    proto.validate.FieldRules.prototype.setSfixed64 = function(value) {
      return jspb.Message.setOneofWrapperField(this, 12, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearSfixed64 = function() {
      return this.setSfixed64(void 0);
    };
    proto.validate.FieldRules.prototype.hasSfixed64 = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.validate.FieldRules.prototype.getBool = function() {
      return (
        /** @type{?proto.validate.BoolRules} */
        jspb.Message.getWrapperField(this, proto.validate.BoolRules, 13)
      );
    };
    proto.validate.FieldRules.prototype.setBool = function(value) {
      return jspb.Message.setOneofWrapperField(this, 13, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearBool = function() {
      return this.setBool(void 0);
    };
    proto.validate.FieldRules.prototype.hasBool = function() {
      return jspb.Message.getField(this, 13) != null;
    };
    proto.validate.FieldRules.prototype.getString = function() {
      return (
        /** @type{?proto.validate.StringRules} */
        jspb.Message.getWrapperField(this, proto.validate.StringRules, 14)
      );
    };
    proto.validate.FieldRules.prototype.setString = function(value) {
      return jspb.Message.setOneofWrapperField(this, 14, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearString = function() {
      return this.setString(void 0);
    };
    proto.validate.FieldRules.prototype.hasString = function() {
      return jspb.Message.getField(this, 14) != null;
    };
    proto.validate.FieldRules.prototype.getBytes = function() {
      return (
        /** @type{?proto.validate.BytesRules} */
        jspb.Message.getWrapperField(this, proto.validate.BytesRules, 15)
      );
    };
    proto.validate.FieldRules.prototype.setBytes = function(value) {
      return jspb.Message.setOneofWrapperField(this, 15, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearBytes = function() {
      return this.setBytes(void 0);
    };
    proto.validate.FieldRules.prototype.hasBytes = function() {
      return jspb.Message.getField(this, 15) != null;
    };
    proto.validate.FieldRules.prototype.getEnum = function() {
      return (
        /** @type{?proto.validate.EnumRules} */
        jspb.Message.getWrapperField(this, proto.validate.EnumRules, 16)
      );
    };
    proto.validate.FieldRules.prototype.setEnum = function(value) {
      return jspb.Message.setOneofWrapperField(this, 16, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearEnum = function() {
      return this.setEnum(void 0);
    };
    proto.validate.FieldRules.prototype.hasEnum = function() {
      return jspb.Message.getField(this, 16) != null;
    };
    proto.validate.FieldRules.prototype.getRepeated = function() {
      return (
        /** @type{?proto.validate.RepeatedRules} */
        jspb.Message.getWrapperField(this, proto.validate.RepeatedRules, 18)
      );
    };
    proto.validate.FieldRules.prototype.setRepeated = function(value) {
      return jspb.Message.setOneofWrapperField(this, 18, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearRepeated = function() {
      return this.setRepeated(void 0);
    };
    proto.validate.FieldRules.prototype.hasRepeated = function() {
      return jspb.Message.getField(this, 18) != null;
    };
    proto.validate.FieldRules.prototype.getMap = function() {
      return (
        /** @type{?proto.validate.MapRules} */
        jspb.Message.getWrapperField(this, proto.validate.MapRules, 19)
      );
    };
    proto.validate.FieldRules.prototype.setMap = function(value) {
      return jspb.Message.setOneofWrapperField(this, 19, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearMap = function() {
      return this.setMap(void 0);
    };
    proto.validate.FieldRules.prototype.hasMap = function() {
      return jspb.Message.getField(this, 19) != null;
    };
    proto.validate.FieldRules.prototype.getAny = function() {
      return (
        /** @type{?proto.validate.AnyRules} */
        jspb.Message.getWrapperField(this, proto.validate.AnyRules, 20)
      );
    };
    proto.validate.FieldRules.prototype.setAny = function(value) {
      return jspb.Message.setOneofWrapperField(this, 20, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearAny = function() {
      return this.setAny(void 0);
    };
    proto.validate.FieldRules.prototype.hasAny = function() {
      return jspb.Message.getField(this, 20) != null;
    };
    proto.validate.FieldRules.prototype.getDuration = function() {
      return (
        /** @type{?proto.validate.DurationRules} */
        jspb.Message.getWrapperField(this, proto.validate.DurationRules, 21)
      );
    };
    proto.validate.FieldRules.prototype.setDuration = function(value) {
      return jspb.Message.setOneofWrapperField(this, 21, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearDuration = function() {
      return this.setDuration(void 0);
    };
    proto.validate.FieldRules.prototype.hasDuration = function() {
      return jspb.Message.getField(this, 21) != null;
    };
    proto.validate.FieldRules.prototype.getTimestamp = function() {
      return (
        /** @type{?proto.validate.TimestampRules} */
        jspb.Message.getWrapperField(this, proto.validate.TimestampRules, 22)
      );
    };
    proto.validate.FieldRules.prototype.setTimestamp = function(value) {
      return jspb.Message.setOneofWrapperField(this, 22, proto.validate.FieldRules.oneofGroups_[0], value);
    };
    proto.validate.FieldRules.prototype.clearTimestamp = function() {
      return this.setTimestamp(void 0);
    };
    proto.validate.FieldRules.prototype.hasTimestamp = function() {
      return jspb.Message.getField(this, 22) != null;
    };
    proto.validate.FloatRules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.FloatRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.FloatRules.toObject(opt_includeInstance, this);
      };
      proto.validate.FloatRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.FloatRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.FloatRules();
      return proto.validate.FloatRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.FloatRules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.FloatRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.FloatRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.FloatRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeFloat(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeFloat(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeFloat(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeFloat(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeFloat(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedFloat(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedFloat(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.FloatRules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.FloatRules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.FloatRules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.FloatRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.FloatRules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.FloatRules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.FloatRules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.FloatRules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.FloatRules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.FloatRules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.FloatRules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.FloatRules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.FloatRules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.FloatRules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.FloatRules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.FloatRules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.FloatRules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.FloatRules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.FloatRules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.FloatRules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.FloatRules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedFloatingPointField(this, 6)
      );
    };
    proto.validate.FloatRules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.FloatRules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.FloatRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.FloatRules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedFloatingPointField(this, 7)
      );
    };
    proto.validate.FloatRules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.FloatRules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.FloatRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.FloatRules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.FloatRules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.FloatRules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.FloatRules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.DoubleRules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.DoubleRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.DoubleRules.toObject(opt_includeInstance, this);
      };
      proto.validate.DoubleRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.DoubleRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.DoubleRules();
      return proto.validate.DoubleRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.DoubleRules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readDouble()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readDouble()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readDouble()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readDouble()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readDouble()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.DoubleRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.DoubleRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.DoubleRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeDouble(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeDouble(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeDouble(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeDouble(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeDouble(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedDouble(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedDouble(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.DoubleRules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.DoubleRules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.DoubleRules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.DoubleRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.DoubleRules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.DoubleRules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.DoubleRules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.DoubleRules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.DoubleRules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.DoubleRules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.DoubleRules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.DoubleRules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.DoubleRules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.DoubleRules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.DoubleRules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.DoubleRules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.DoubleRules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.DoubleRules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.DoubleRules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.DoubleRules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.DoubleRules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedFloatingPointField(this, 6)
      );
    };
    proto.validate.DoubleRules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.DoubleRules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.DoubleRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.DoubleRules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedFloatingPointField(this, 7)
      );
    };
    proto.validate.DoubleRules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.DoubleRules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.DoubleRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.DoubleRules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.DoubleRules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.DoubleRules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.DoubleRules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.Int32Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.Int32Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.Int32Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.Int32Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.Int32Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.Int32Rules();
      return proto.validate.Int32Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.Int32Rules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.Int32Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.Int32Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.Int32Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeInt32(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeInt32(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeInt32(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeInt32(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeInt32(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedInt32(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedInt32(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.Int32Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.Int32Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.Int32Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.Int32Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.Int32Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.Int32Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.Int32Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.Int32Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.Int32Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.Int32Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.Int32Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.Int32Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.Int32Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.Int32Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.Int32Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.Int32Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.Int32Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.Int32Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.Int32Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.Int32Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.Int32Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.Int32Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.Int32Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.Int32Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.Int32Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.Int32Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.Int32Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.Int32Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.Int32Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.Int32Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.Int32Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.Int32Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.Int64Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.Int64Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.Int64Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.Int64Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.Int64Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.Int64Rules();
      return proto.validate.Int64Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.Int64Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readInt64()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readInt64()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readInt64()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readInt64()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readInt64()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.Int64Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.Int64Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.Int64Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeInt64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeInt64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeInt64(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeInt64(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeInt64(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedInt64(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedInt64(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.Int64Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.Int64Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.Int64Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.Int64Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.Int64Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.Int64Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.Int64Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.Int64Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.Int64Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.Int64Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.Int64Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.Int64Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.Int64Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.Int64Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.Int64Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.Int64Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.Int64Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.Int64Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.Int64Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.Int64Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.Int64Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.Int64Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.Int64Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.Int64Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.Int64Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.Int64Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.Int64Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.Int64Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.Int64Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.Int64Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.Int64Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.Int64Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.UInt32Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.UInt32Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.UInt32Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.UInt32Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.UInt32Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.UInt32Rules();
      return proto.validate.UInt32Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.UInt32Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.UInt32Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.UInt32Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.UInt32Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeUint32(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint32(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint32(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeUint32(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeUint32(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedUint32(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedUint32(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.UInt32Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.UInt32Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.UInt32Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.UInt32Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.UInt32Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.UInt32Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.UInt32Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.UInt32Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.UInt32Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.UInt32Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.UInt32Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.UInt32Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.UInt32Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.UInt32Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.UInt32Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.UInt32Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.UInt32Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.UInt32Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.UInt32Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.UInt32Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.UInt32Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.UInt32Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.UInt32Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.UInt32Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.UInt32Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.UInt32Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.UInt32Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.UInt32Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.UInt32Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.UInt32Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.UInt32Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.UInt32Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.UInt64Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.UInt64Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.UInt64Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.UInt64Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.UInt64Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.UInt64Rules();
      return proto.validate.UInt64Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.UInt64Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.UInt64Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.UInt64Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.UInt64Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeUint64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeUint64(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedUint64(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedUint64(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.UInt64Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.UInt64Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.UInt64Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.UInt64Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.UInt64Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.UInt64Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.UInt64Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.UInt64Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.UInt64Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.UInt64Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.UInt64Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.UInt64Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.UInt64Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.UInt64Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.UInt64Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.UInt64Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.UInt64Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.UInt64Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.UInt64Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.UInt64Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.UInt64Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.UInt64Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.UInt64Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.UInt64Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.UInt64Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.UInt64Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.UInt64Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.UInt64Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.UInt64Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.UInt64Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.UInt64Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.UInt64Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.SInt32Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.SInt32Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.SInt32Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.SInt32Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.SInt32Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.SInt32Rules();
      return proto.validate.SInt32Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.SInt32Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readSint32()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readSint32()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readSint32()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readSint32()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readSint32()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSint32() : [reader.readSint32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSint32() : [reader.readSint32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.SInt32Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.SInt32Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.SInt32Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeSint32(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeSint32(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeSint32(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeSint32(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeSint32(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedSint32(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedSint32(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.SInt32Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.SInt32Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.SInt32Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.SInt32Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.SInt32Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.SInt32Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.SInt32Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.SInt32Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.SInt32Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.SInt32Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.SInt32Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.SInt32Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.SInt32Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.SInt32Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.SInt32Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.SInt32Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.SInt32Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.SInt32Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.SInt32Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.SInt32Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.SInt32Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.SInt32Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.SInt32Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.SInt32Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.SInt32Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.SInt32Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.SInt32Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.SInt32Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.SInt32Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.SInt32Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.SInt32Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.SInt32Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.SInt64Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.SInt64Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.SInt64Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.SInt64Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.SInt64Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.SInt64Rules();
      return proto.validate.SInt64Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.SInt64Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readSint64()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readSint64()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readSint64()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readSint64()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readSint64()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSint64() : [reader.readSint64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSint64() : [reader.readSint64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.SInt64Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.SInt64Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.SInt64Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeSint64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeSint64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeSint64(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeSint64(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeSint64(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedSint64(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedSint64(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.SInt64Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.SInt64Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.SInt64Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.SInt64Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.SInt64Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.SInt64Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.SInt64Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.SInt64Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.SInt64Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.SInt64Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.SInt64Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.SInt64Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.SInt64Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.SInt64Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.SInt64Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.SInt64Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.SInt64Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.SInt64Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.SInt64Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.SInt64Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.SInt64Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.SInt64Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.SInt64Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.SInt64Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.SInt64Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.SInt64Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.SInt64Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.SInt64Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.SInt64Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.SInt64Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.SInt64Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.SInt64Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.Fixed32Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.Fixed32Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.Fixed32Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.Fixed32Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.Fixed32Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.Fixed32Rules();
      return proto.validate.Fixed32Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.Fixed32Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readFixed32()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readFixed32()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readFixed32()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readFixed32()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readFixed32()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.Fixed32Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.Fixed32Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.Fixed32Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeFixed32(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeFixed32(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeFixed32(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeFixed32(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeFixed32(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedFixed32(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedFixed32(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.Fixed32Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.Fixed32Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.Fixed32Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.Fixed32Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.Fixed32Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.Fixed32Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.Fixed32Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.Fixed32Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.Fixed32Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.Fixed32Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.Fixed32Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.Fixed32Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.Fixed32Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.Fixed32Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.Fixed32Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.Fixed32Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.Fixed32Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.Fixed32Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.Fixed32Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.Fixed32Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.Fixed32Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.Fixed32Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.Fixed32Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.Fixed32Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.Fixed32Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.Fixed32Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.Fixed32Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.Fixed32Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.Fixed32Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.Fixed32Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.Fixed32Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.Fixed32Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.Fixed64Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.Fixed64Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.Fixed64Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.Fixed64Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.Fixed64Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.Fixed64Rules();
      return proto.validate.Fixed64Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.Fixed64Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readFixed64()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readFixed64()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readFixed64()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readFixed64()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readFixed64()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedFixed64() : [reader.readFixed64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedFixed64() : [reader.readFixed64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.Fixed64Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.Fixed64Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.Fixed64Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeFixed64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeFixed64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeFixed64(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeFixed64(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeFixed64(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedFixed64(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedFixed64(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.Fixed64Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.Fixed64Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.Fixed64Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.Fixed64Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.Fixed64Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.Fixed64Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.Fixed64Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.Fixed64Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.Fixed64Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.Fixed64Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.Fixed64Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.Fixed64Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.Fixed64Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.Fixed64Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.Fixed64Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.Fixed64Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.Fixed64Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.Fixed64Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.Fixed64Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.Fixed64Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.Fixed64Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.Fixed64Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.Fixed64Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.Fixed64Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.Fixed64Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.Fixed64Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.Fixed64Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.Fixed64Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.Fixed64Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.Fixed64Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.Fixed64Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.Fixed64Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.SFixed32Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.SFixed32Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.SFixed32Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.SFixed32Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.SFixed32Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.SFixed32Rules();
      return proto.validate.SFixed32Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.SFixed32Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readSfixed32()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readSfixed32()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readSfixed32()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readSfixed32()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readSfixed32()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSfixed32() : [reader.readSfixed32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSfixed32() : [reader.readSfixed32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.SFixed32Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.SFixed32Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.SFixed32Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeSfixed32(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeSfixed32(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeSfixed32(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeSfixed32(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeSfixed32(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedSfixed32(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedSfixed32(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.SFixed32Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.SFixed32Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.SFixed32Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.SFixed32Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.SFixed32Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.SFixed32Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.SFixed32Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.SFixed32Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.SFixed32Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.SFixed32Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.SFixed32Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.SFixed32Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.SFixed32Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.SFixed32Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.SFixed32Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.SFixed32Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.SFixed32Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.SFixed32Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.SFixed32Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.SFixed32Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.SFixed32Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.SFixed32Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.SFixed32Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.SFixed32Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.SFixed32Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.SFixed32Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.SFixed32Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.SFixed32Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.SFixed32Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.SFixed32Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.SFixed32Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.SFixed32Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.SFixed64Rules.repeatedFields_ = [6, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.SFixed64Rules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.SFixed64Rules.toObject(opt_includeInstance, this);
      };
      proto.validate.SFixed64Rules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          lt: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          lte: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          gt: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          gte: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.SFixed64Rules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.SFixed64Rules();
      return proto.validate.SFixed64Rules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.SFixed64Rules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readSfixed64()
            );
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readSfixed64()
            );
            msg.setLt(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readSfixed64()
            );
            msg.setLte(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readSfixed64()
            );
            msg.setGt(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readSfixed64()
            );
            msg.setGte(value);
            break;
          case 6:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSfixed64() : [reader.readSfixed64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 7:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedSfixed64() : [reader.readSfixed64()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.SFixed64Rules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.SFixed64Rules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.SFixed64Rules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeSfixed64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeSfixed64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeSfixed64(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeSfixed64(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeSfixed64(
          5,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedSfixed64(
          6,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedSfixed64(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
    };
    proto.validate.SFixed64Rules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.SFixed64Rules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.SFixed64Rules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.SFixed64Rules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.SFixed64Rules.prototype.getLt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.SFixed64Rules.prototype.setLt = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.SFixed64Rules.prototype.clearLt = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.SFixed64Rules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.SFixed64Rules.prototype.getLte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.SFixed64Rules.prototype.setLte = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.SFixed64Rules.prototype.clearLte = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.SFixed64Rules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.SFixed64Rules.prototype.getGt = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.SFixed64Rules.prototype.setGt = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.SFixed64Rules.prototype.clearGt = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.SFixed64Rules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.SFixed64Rules.prototype.getGte = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.SFixed64Rules.prototype.setGte = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.SFixed64Rules.prototype.clearGte = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.SFixed64Rules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.SFixed64Rules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 6)
      );
    };
    proto.validate.SFixed64Rules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 6, value || []);
    };
    proto.validate.SFixed64Rules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
    };
    proto.validate.SFixed64Rules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.SFixed64Rules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 7)
      );
    };
    proto.validate.SFixed64Rules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 7, value || []);
    };
    proto.validate.SFixed64Rules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
    };
    proto.validate.SFixed64Rules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.SFixed64Rules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.SFixed64Rules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.SFixed64Rules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.SFixed64Rules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.BoolRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.BoolRules.toObject(opt_includeInstance, this);
      };
      proto.validate.BoolRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getBooleanField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.BoolRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.BoolRules();
      return proto.validate.BoolRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.BoolRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setConst(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.BoolRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.BoolRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.BoolRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {boolean} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.validate.BoolRules.prototype.getConst = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.validate.BoolRules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.BoolRules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.BoolRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.StringRules.repeatedFields_ = [10, 11];
    proto.validate.StringRules.oneofGroups_ = [[12, 13, 14, 15, 16, 17, 18, 21, 22, 24]];
    proto.validate.StringRules.WellKnownCase = {
      WELL_KNOWN_NOT_SET: 0,
      EMAIL: 12,
      HOSTNAME: 13,
      IP: 14,
      IPV4: 15,
      IPV6: 16,
      URI: 17,
      URI_REF: 18,
      ADDRESS: 21,
      UUID: 22,
      WELL_KNOWN_REGEX: 24
    };
    proto.validate.StringRules.prototype.getWellKnownCase = function() {
      return (
        /** @type {proto.validate.StringRules.WellKnownCase} */
        jspb.Message.computeOneofCase(this, proto.validate.StringRules.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.StringRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.StringRules.toObject(opt_includeInstance, this);
      };
      proto.validate.StringRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          len: (f = jspb.Message.getField(msg, 19)) == null ? void 0 : f,
          minLen: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          maxLen: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          lenBytes: (f = jspb.Message.getField(msg, 20)) == null ? void 0 : f,
          minBytes: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          maxBytes: (f = jspb.Message.getField(msg, 5)) == null ? void 0 : f,
          pattern: (f = jspb.Message.getField(msg, 6)) == null ? void 0 : f,
          prefix: (f = jspb.Message.getField(msg, 7)) == null ? void 0 : f,
          suffix: (f = jspb.Message.getField(msg, 8)) == null ? void 0 : f,
          contains: (f = jspb.Message.getField(msg, 9)) == null ? void 0 : f,
          notContains: (f = jspb.Message.getField(msg, 23)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? void 0 : f,
          email: (f = jspb.Message.getBooleanField(msg, 12)) == null ? void 0 : f,
          hostname: (f = jspb.Message.getBooleanField(msg, 13)) == null ? void 0 : f,
          ip: (f = jspb.Message.getBooleanField(msg, 14)) == null ? void 0 : f,
          ipv4: (f = jspb.Message.getBooleanField(msg, 15)) == null ? void 0 : f,
          ipv6: (f = jspb.Message.getBooleanField(msg, 16)) == null ? void 0 : f,
          uri: (f = jspb.Message.getBooleanField(msg, 17)) == null ? void 0 : f,
          uriRef: (f = jspb.Message.getBooleanField(msg, 18)) == null ? void 0 : f,
          address: (f = jspb.Message.getBooleanField(msg, 21)) == null ? void 0 : f,
          uuid: (f = jspb.Message.getBooleanField(msg, 22)) == null ? void 0 : f,
          wellKnownRegex: (f = jspb.Message.getField(msg, 24)) == null ? void 0 : f,
          strict: jspb.Message.getBooleanFieldWithDefault(msg, 25, true),
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 26)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.StringRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.StringRules();
      return proto.validate.StringRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.StringRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setConst(value);
            break;
          case 19:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setLen(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMinLen(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMaxLen(value);
            break;
          case 20:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setLenBytes(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMinBytes(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMaxBytes(value);
            break;
          case 6:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPattern(value);
            break;
          case 7:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPrefix(value);
            break;
          case 8:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSuffix(value);
            break;
          case 9:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setContains(value);
            break;
          case 23:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setNotContains(value);
            break;
          case 10:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addIn(value);
            break;
          case 11:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addNotIn(value);
            break;
          case 12:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setEmail(value);
            break;
          case 13:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setHostname(value);
            break;
          case 14:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIp(value);
            break;
          case 15:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIpv4(value);
            break;
          case 16:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIpv6(value);
            break;
          case 17:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setUri(value);
            break;
          case 18:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setUriRef(value);
            break;
          case 21:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setAddress(value);
            break;
          case 22:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setUuid(value);
            break;
          case 24:
            var value = (
              /** @type {!proto.validate.KnownRegex} */
              reader.readEnum()
            );
            msg.setWellKnownRegex(value);
            break;
          case 25:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setStrict(value);
            break;
          case 26:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.StringRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.StringRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.StringRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {string} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 19);
      if (f != null) {
        writer.writeUint64(
          19,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 20);
      if (f != null) {
        writer.writeUint64(
          20,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeUint64(
          5,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 6);
      if (f != null) {
        writer.writeString(
          6,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 7);
      if (f != null) {
        writer.writeString(
          7,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeString(
          8,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 9);
      if (f != null) {
        writer.writeString(
          9,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 23);
      if (f != null) {
        writer.writeString(
          23,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          10,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          11,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 12);
      if (f != null) {
        writer.writeBool(
          12,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 13);
      if (f != null) {
        writer.writeBool(
          13,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 14);
      if (f != null) {
        writer.writeBool(
          14,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 15);
      if (f != null) {
        writer.writeBool(
          15,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 16);
      if (f != null) {
        writer.writeBool(
          16,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 17);
      if (f != null) {
        writer.writeBool(
          17,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 18);
      if (f != null) {
        writer.writeBool(
          18,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 21);
      if (f != null) {
        writer.writeBool(
          21,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 22);
      if (f != null) {
        writer.writeBool(
          22,
          f
        );
      }
      f = /** @type {!proto.validate.KnownRegex} */
      jspb.Message.getField(message, 24);
      if (f != null) {
        writer.writeEnum(
          24,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 25);
      if (f != null) {
        writer.writeBool(
          25,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 26);
      if (f != null) {
        writer.writeBool(
          26,
          f
        );
      }
    };
    proto.validate.StringRules.prototype.getConst = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.validate.StringRules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.StringRules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.StringRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.StringRules.prototype.getLen = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 19, 0)
      );
    };
    proto.validate.StringRules.prototype.setLen = function(value) {
      return jspb.Message.setField(this, 19, value);
    };
    proto.validate.StringRules.prototype.clearLen = function() {
      return jspb.Message.setField(this, 19, void 0);
    };
    proto.validate.StringRules.prototype.hasLen = function() {
      return jspb.Message.getField(this, 19) != null;
    };
    proto.validate.StringRules.prototype.getMinLen = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.StringRules.prototype.setMinLen = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.StringRules.prototype.clearMinLen = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.StringRules.prototype.hasMinLen = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.StringRules.prototype.getMaxLen = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.StringRules.prototype.setMaxLen = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.StringRules.prototype.clearMaxLen = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.StringRules.prototype.hasMaxLen = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.StringRules.prototype.getLenBytes = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 20, 0)
      );
    };
    proto.validate.StringRules.prototype.setLenBytes = function(value) {
      return jspb.Message.setField(this, 20, value);
    };
    proto.validate.StringRules.prototype.clearLenBytes = function() {
      return jspb.Message.setField(this, 20, void 0);
    };
    proto.validate.StringRules.prototype.hasLenBytes = function() {
      return jspb.Message.getField(this, 20) != null;
    };
    proto.validate.StringRules.prototype.getMinBytes = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.validate.StringRules.prototype.setMinBytes = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.StringRules.prototype.clearMinBytes = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.StringRules.prototype.hasMinBytes = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.StringRules.prototype.getMaxBytes = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.validate.StringRules.prototype.setMaxBytes = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.StringRules.prototype.clearMaxBytes = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.StringRules.prototype.hasMaxBytes = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.StringRules.prototype.getPattern = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 6, "")
      );
    };
    proto.validate.StringRules.prototype.setPattern = function(value) {
      return jspb.Message.setField(this, 6, value);
    };
    proto.validate.StringRules.prototype.clearPattern = function() {
      return jspb.Message.setField(this, 6, void 0);
    };
    proto.validate.StringRules.prototype.hasPattern = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.validate.StringRules.prototype.getPrefix = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 7, "")
      );
    };
    proto.validate.StringRules.prototype.setPrefix = function(value) {
      return jspb.Message.setField(this, 7, value);
    };
    proto.validate.StringRules.prototype.clearPrefix = function() {
      return jspb.Message.setField(this, 7, void 0);
    };
    proto.validate.StringRules.prototype.hasPrefix = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.validate.StringRules.prototype.getSuffix = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 8, "")
      );
    };
    proto.validate.StringRules.prototype.setSuffix = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.StringRules.prototype.clearSuffix = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.StringRules.prototype.hasSuffix = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.StringRules.prototype.getContains = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 9, "")
      );
    };
    proto.validate.StringRules.prototype.setContains = function(value) {
      return jspb.Message.setField(this, 9, value);
    };
    proto.validate.StringRules.prototype.clearContains = function() {
      return jspb.Message.setField(this, 9, void 0);
    };
    proto.validate.StringRules.prototype.hasContains = function() {
      return jspb.Message.getField(this, 9) != null;
    };
    proto.validate.StringRules.prototype.getNotContains = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 23, "")
      );
    };
    proto.validate.StringRules.prototype.setNotContains = function(value) {
      return jspb.Message.setField(this, 23, value);
    };
    proto.validate.StringRules.prototype.clearNotContains = function() {
      return jspb.Message.setField(this, 23, void 0);
    };
    proto.validate.StringRules.prototype.hasNotContains = function() {
      return jspb.Message.getField(this, 23) != null;
    };
    proto.validate.StringRules.prototype.getInList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 10)
      );
    };
    proto.validate.StringRules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 10, value || []);
    };
    proto.validate.StringRules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
    };
    proto.validate.StringRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.StringRules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 11)
      );
    };
    proto.validate.StringRules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 11, value || []);
    };
    proto.validate.StringRules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
    };
    proto.validate.StringRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.StringRules.prototype.getEmail = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 12, false)
      );
    };
    proto.validate.StringRules.prototype.setEmail = function(value) {
      return jspb.Message.setOneofField(this, 12, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearEmail = function() {
      return jspb.Message.setOneofField(this, 12, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasEmail = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.validate.StringRules.prototype.getHostname = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 13, false)
      );
    };
    proto.validate.StringRules.prototype.setHostname = function(value) {
      return jspb.Message.setOneofField(this, 13, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearHostname = function() {
      return jspb.Message.setOneofField(this, 13, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasHostname = function() {
      return jspb.Message.getField(this, 13) != null;
    };
    proto.validate.StringRules.prototype.getIp = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 14, false)
      );
    };
    proto.validate.StringRules.prototype.setIp = function(value) {
      return jspb.Message.setOneofField(this, 14, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearIp = function() {
      return jspb.Message.setOneofField(this, 14, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasIp = function() {
      return jspb.Message.getField(this, 14) != null;
    };
    proto.validate.StringRules.prototype.getIpv4 = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 15, false)
      );
    };
    proto.validate.StringRules.prototype.setIpv4 = function(value) {
      return jspb.Message.setOneofField(this, 15, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearIpv4 = function() {
      return jspb.Message.setOneofField(this, 15, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasIpv4 = function() {
      return jspb.Message.getField(this, 15) != null;
    };
    proto.validate.StringRules.prototype.getIpv6 = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 16, false)
      );
    };
    proto.validate.StringRules.prototype.setIpv6 = function(value) {
      return jspb.Message.setOneofField(this, 16, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearIpv6 = function() {
      return jspb.Message.setOneofField(this, 16, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasIpv6 = function() {
      return jspb.Message.getField(this, 16) != null;
    };
    proto.validate.StringRules.prototype.getUri = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 17, false)
      );
    };
    proto.validate.StringRules.prototype.setUri = function(value) {
      return jspb.Message.setOneofField(this, 17, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearUri = function() {
      return jspb.Message.setOneofField(this, 17, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasUri = function() {
      return jspb.Message.getField(this, 17) != null;
    };
    proto.validate.StringRules.prototype.getUriRef = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 18, false)
      );
    };
    proto.validate.StringRules.prototype.setUriRef = function(value) {
      return jspb.Message.setOneofField(this, 18, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearUriRef = function() {
      return jspb.Message.setOneofField(this, 18, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasUriRef = function() {
      return jspb.Message.getField(this, 18) != null;
    };
    proto.validate.StringRules.prototype.getAddress = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 21, false)
      );
    };
    proto.validate.StringRules.prototype.setAddress = function(value) {
      return jspb.Message.setOneofField(this, 21, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearAddress = function() {
      return jspb.Message.setOneofField(this, 21, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasAddress = function() {
      return jspb.Message.getField(this, 21) != null;
    };
    proto.validate.StringRules.prototype.getUuid = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 22, false)
      );
    };
    proto.validate.StringRules.prototype.setUuid = function(value) {
      return jspb.Message.setOneofField(this, 22, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearUuid = function() {
      return jspb.Message.setOneofField(this, 22, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasUuid = function() {
      return jspb.Message.getField(this, 22) != null;
    };
    proto.validate.StringRules.prototype.getWellKnownRegex = function() {
      return (
        /** @type {!proto.validate.KnownRegex} */
        jspb.Message.getFieldWithDefault(this, 24, 0)
      );
    };
    proto.validate.StringRules.prototype.setWellKnownRegex = function(value) {
      return jspb.Message.setOneofField(this, 24, proto.validate.StringRules.oneofGroups_[0], value);
    };
    proto.validate.StringRules.prototype.clearWellKnownRegex = function() {
      return jspb.Message.setOneofField(this, 24, proto.validate.StringRules.oneofGroups_[0], void 0);
    };
    proto.validate.StringRules.prototype.hasWellKnownRegex = function() {
      return jspb.Message.getField(this, 24) != null;
    };
    proto.validate.StringRules.prototype.getStrict = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 25, true)
      );
    };
    proto.validate.StringRules.prototype.setStrict = function(value) {
      return jspb.Message.setField(this, 25, value);
    };
    proto.validate.StringRules.prototype.clearStrict = function() {
      return jspb.Message.setField(this, 25, void 0);
    };
    proto.validate.StringRules.prototype.hasStrict = function() {
      return jspb.Message.getField(this, 25) != null;
    };
    proto.validate.StringRules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 26, false)
      );
    };
    proto.validate.StringRules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 26, value);
    };
    proto.validate.StringRules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 26, void 0);
    };
    proto.validate.StringRules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 26) != null;
    };
    proto.validate.BytesRules.repeatedFields_ = [8, 9];
    proto.validate.BytesRules.oneofGroups_ = [[10, 11, 12]];
    proto.validate.BytesRules.WellKnownCase = {
      WELL_KNOWN_NOT_SET: 0,
      IP: 10,
      IPV4: 11,
      IPV6: 12
    };
    proto.validate.BytesRules.prototype.getWellKnownCase = function() {
      return (
        /** @type {proto.validate.BytesRules.WellKnownCase} */
        jspb.Message.computeOneofCase(this, proto.validate.BytesRules.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.BytesRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.BytesRules.toObject(opt_includeInstance, this);
      };
      proto.validate.BytesRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: msg.getConst_asB64(),
          len: (f = jspb.Message.getField(msg, 13)) == null ? void 0 : f,
          minLen: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          maxLen: (f = jspb.Message.getField(msg, 3)) == null ? void 0 : f,
          pattern: (f = jspb.Message.getField(msg, 4)) == null ? void 0 : f,
          prefix: msg.getPrefix_asB64(),
          suffix: msg.getSuffix_asB64(),
          contains: msg.getContains_asB64(),
          inList: msg.getInList_asB64(),
          notInList: msg.getNotInList_asB64(),
          ip: (f = jspb.Message.getBooleanField(msg, 10)) == null ? void 0 : f,
          ipv4: (f = jspb.Message.getBooleanField(msg, 11)) == null ? void 0 : f,
          ipv6: (f = jspb.Message.getBooleanField(msg, 12)) == null ? void 0 : f,
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 14)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.BytesRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.BytesRules();
      return proto.validate.BytesRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.BytesRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setConst(value);
            break;
          case 13:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setLen(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMinLen(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMaxLen(value);
            break;
          case 4:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPattern(value);
            break;
          case 5:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setPrefix(value);
            break;
          case 6:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setSuffix(value);
            break;
          case 7:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setContains(value);
            break;
          case 8:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.addIn(value);
            break;
          case 9:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.addNotIn(value);
            break;
          case 10:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIp(value);
            break;
          case 11:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIpv4(value);
            break;
          case 12:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIpv6(value);
            break;
          case 14:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.BytesRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.BytesRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.BytesRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {!(string|Uint8Array)} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBytes(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 13);
      if (f != null) {
        writer.writeUint64(
          13,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeString(
          4,
          f
        );
      }
      f = /** @type {!(string|Uint8Array)} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeBytes(
          5,
          f
        );
      }
      f = /** @type {!(string|Uint8Array)} */
      jspb.Message.getField(message, 6);
      if (f != null) {
        writer.writeBytes(
          6,
          f
        );
      }
      f = /** @type {!(string|Uint8Array)} */
      jspb.Message.getField(message, 7);
      if (f != null) {
        writer.writeBytes(
          7,
          f
        );
      }
      f = message.getInList_asU8();
      if (f.length > 0) {
        writer.writeRepeatedBytes(
          8,
          f
        );
      }
      f = message.getNotInList_asU8();
      if (f.length > 0) {
        writer.writeRepeatedBytes(
          9,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 10);
      if (f != null) {
        writer.writeBool(
          10,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 11);
      if (f != null) {
        writer.writeBool(
          11,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 12);
      if (f != null) {
        writer.writeBool(
          12,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 14);
      if (f != null) {
        writer.writeBool(
          14,
          f
        );
      }
    };
    proto.validate.BytesRules.prototype.getConst = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.validate.BytesRules.prototype.getConst_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getConst()
        )
      );
    };
    proto.validate.BytesRules.prototype.getConst_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getConst()
        )
      );
    };
    proto.validate.BytesRules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.BytesRules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.BytesRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.BytesRules.prototype.getLen = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 13, 0)
      );
    };
    proto.validate.BytesRules.prototype.setLen = function(value) {
      return jspb.Message.setField(this, 13, value);
    };
    proto.validate.BytesRules.prototype.clearLen = function() {
      return jspb.Message.setField(this, 13, void 0);
    };
    proto.validate.BytesRules.prototype.hasLen = function() {
      return jspb.Message.getField(this, 13) != null;
    };
    proto.validate.BytesRules.prototype.getMinLen = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.BytesRules.prototype.setMinLen = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.BytesRules.prototype.clearMinLen = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.BytesRules.prototype.hasMinLen = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.BytesRules.prototype.getMaxLen = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.validate.BytesRules.prototype.setMaxLen = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.BytesRules.prototype.clearMaxLen = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.BytesRules.prototype.hasMaxLen = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.BytesRules.prototype.getPattern = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 4, "")
      );
    };
    proto.validate.BytesRules.prototype.setPattern = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.validate.BytesRules.prototype.clearPattern = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.validate.BytesRules.prototype.hasPattern = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.BytesRules.prototype.getPrefix = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 5, "")
      );
    };
    proto.validate.BytesRules.prototype.getPrefix_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getPrefix()
        )
      );
    };
    proto.validate.BytesRules.prototype.getPrefix_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getPrefix()
        )
      );
    };
    proto.validate.BytesRules.prototype.setPrefix = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.BytesRules.prototype.clearPrefix = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.BytesRules.prototype.hasPrefix = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.BytesRules.prototype.getSuffix = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 6, "")
      );
    };
    proto.validate.BytesRules.prototype.getSuffix_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getSuffix()
        )
      );
    };
    proto.validate.BytesRules.prototype.getSuffix_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getSuffix()
        )
      );
    };
    proto.validate.BytesRules.prototype.setSuffix = function(value) {
      return jspb.Message.setField(this, 6, value);
    };
    proto.validate.BytesRules.prototype.clearSuffix = function() {
      return jspb.Message.setField(this, 6, void 0);
    };
    proto.validate.BytesRules.prototype.hasSuffix = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.validate.BytesRules.prototype.getContains = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 7, "")
      );
    };
    proto.validate.BytesRules.prototype.getContains_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getContains()
        )
      );
    };
    proto.validate.BytesRules.prototype.getContains_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getContains()
        )
      );
    };
    proto.validate.BytesRules.prototype.setContains = function(value) {
      return jspb.Message.setField(this, 7, value);
    };
    proto.validate.BytesRules.prototype.clearContains = function() {
      return jspb.Message.setField(this, 7, void 0);
    };
    proto.validate.BytesRules.prototype.hasContains = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.validate.BytesRules.prototype.getInList = function() {
      return (
        /** @type {!(Array<!Uint8Array>|Array<string>)} */
        jspb.Message.getRepeatedField(this, 8)
      );
    };
    proto.validate.BytesRules.prototype.getInList_asB64 = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.bytesListAsB64(
          this.getInList()
        )
      );
    };
    proto.validate.BytesRules.prototype.getInList_asU8 = function() {
      return (
        /** @type {!Array<!Uint8Array>} */
        jspb.Message.bytesListAsU8(
          this.getInList()
        )
      );
    };
    proto.validate.BytesRules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 8, value || []);
    };
    proto.validate.BytesRules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
    };
    proto.validate.BytesRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.BytesRules.prototype.getNotInList = function() {
      return (
        /** @type {!(Array<!Uint8Array>|Array<string>)} */
        jspb.Message.getRepeatedField(this, 9)
      );
    };
    proto.validate.BytesRules.prototype.getNotInList_asB64 = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.bytesListAsB64(
          this.getNotInList()
        )
      );
    };
    proto.validate.BytesRules.prototype.getNotInList_asU8 = function() {
      return (
        /** @type {!Array<!Uint8Array>} */
        jspb.Message.bytesListAsU8(
          this.getNotInList()
        )
      );
    };
    proto.validate.BytesRules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 9, value || []);
    };
    proto.validate.BytesRules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
    };
    proto.validate.BytesRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.BytesRules.prototype.getIp = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 10, false)
      );
    };
    proto.validate.BytesRules.prototype.setIp = function(value) {
      return jspb.Message.setOneofField(this, 10, proto.validate.BytesRules.oneofGroups_[0], value);
    };
    proto.validate.BytesRules.prototype.clearIp = function() {
      return jspb.Message.setOneofField(this, 10, proto.validate.BytesRules.oneofGroups_[0], void 0);
    };
    proto.validate.BytesRules.prototype.hasIp = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.validate.BytesRules.prototype.getIpv4 = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 11, false)
      );
    };
    proto.validate.BytesRules.prototype.setIpv4 = function(value) {
      return jspb.Message.setOneofField(this, 11, proto.validate.BytesRules.oneofGroups_[0], value);
    };
    proto.validate.BytesRules.prototype.clearIpv4 = function() {
      return jspb.Message.setOneofField(this, 11, proto.validate.BytesRules.oneofGroups_[0], void 0);
    };
    proto.validate.BytesRules.prototype.hasIpv4 = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.validate.BytesRules.prototype.getIpv6 = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 12, false)
      );
    };
    proto.validate.BytesRules.prototype.setIpv6 = function(value) {
      return jspb.Message.setOneofField(this, 12, proto.validate.BytesRules.oneofGroups_[0], value);
    };
    proto.validate.BytesRules.prototype.clearIpv6 = function() {
      return jspb.Message.setOneofField(this, 12, proto.validate.BytesRules.oneofGroups_[0], void 0);
    };
    proto.validate.BytesRules.prototype.hasIpv6 = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.validate.BytesRules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 14, false)
      );
    };
    proto.validate.BytesRules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 14, value);
    };
    proto.validate.BytesRules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 14, void 0);
    };
    proto.validate.BytesRules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 14) != null;
    };
    proto.validate.EnumRules.repeatedFields_ = [3, 4];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.EnumRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.EnumRules.toObject(opt_includeInstance, this);
      };
      proto.validate.EnumRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          pb_const: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          definedOnly: (f = jspb.Message.getBooleanField(msg, 2)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.EnumRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.EnumRules();
      return proto.validate.EnumRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.EnumRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setConst(value);
            break;
          case 2:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setDefinedOnly(value);
            break;
          case 3:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addIn(values[i]);
            }
            break;
          case 4:
            var values = (
              /** @type {!Array<number>} */
              reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addNotIn(values[i]);
            }
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.EnumRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.EnumRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.EnumRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeInt32(
          1,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeBool(
          2,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedInt32(
          3,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedInt32(
          4,
          f
        );
      }
    };
    proto.validate.EnumRules.prototype.getConst = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.EnumRules.prototype.setConst = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.EnumRules.prototype.clearConst = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.EnumRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.EnumRules.prototype.getDefinedOnly = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 2, false)
      );
    };
    proto.validate.EnumRules.prototype.setDefinedOnly = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.EnumRules.prototype.clearDefinedOnly = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.EnumRules.prototype.hasDefinedOnly = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.EnumRules.prototype.getInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 3)
      );
    };
    proto.validate.EnumRules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.validate.EnumRules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.validate.EnumRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.EnumRules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<number>} */
        jspb.Message.getRepeatedField(this, 4)
      );
    };
    proto.validate.EnumRules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 4, value || []);
    };
    proto.validate.EnumRules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
    };
    proto.validate.EnumRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.MessageRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.MessageRules.toObject(opt_includeInstance, this);
      };
      proto.validate.MessageRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          skip: (f = jspb.Message.getBooleanField(msg, 1)) == null ? void 0 : f,
          required: (f = jspb.Message.getBooleanField(msg, 2)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.MessageRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.MessageRules();
      return proto.validate.MessageRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.MessageRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setSkip(value);
            break;
          case 2:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setRequired(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.MessageRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.MessageRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.MessageRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {boolean} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeBool(
          2,
          f
        );
      }
    };
    proto.validate.MessageRules.prototype.getSkip = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.validate.MessageRules.prototype.setSkip = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.MessageRules.prototype.clearSkip = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.MessageRules.prototype.hasSkip = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.MessageRules.prototype.getRequired = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 2, false)
      );
    };
    proto.validate.MessageRules.prototype.setRequired = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.MessageRules.prototype.clearRequired = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.MessageRules.prototype.hasRequired = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.RepeatedRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.RepeatedRules.toObject(opt_includeInstance, this);
      };
      proto.validate.RepeatedRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          minItems: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          maxItems: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          unique: (f = jspb.Message.getBooleanField(msg, 3)) == null ? void 0 : f,
          items: (f = msg.getItems()) && proto.validate.FieldRules.toObject(includeInstance, f),
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 5)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.RepeatedRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.RepeatedRules();
      return proto.validate.RepeatedRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.RepeatedRules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMinItems(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMaxItems(value);
            break;
          case 3:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setUnique(value);
            break;
          case 4:
            var value = new proto.validate.FieldRules();
            reader.readMessage(value, proto.validate.FieldRules.deserializeBinaryFromReader);
            msg.setItems(value);
            break;
          case 5:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.RepeatedRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.RepeatedRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.RepeatedRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeUint64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeBool(
          3,
          f
        );
      }
      f = message.getItems();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.validate.FieldRules.serializeBinaryToWriter
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeBool(
          5,
          f
        );
      }
    };
    proto.validate.RepeatedRules.prototype.getMinItems = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.RepeatedRules.prototype.setMinItems = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.RepeatedRules.prototype.clearMinItems = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.RepeatedRules.prototype.hasMinItems = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.RepeatedRules.prototype.getMaxItems = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.RepeatedRules.prototype.setMaxItems = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.RepeatedRules.prototype.clearMaxItems = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.RepeatedRules.prototype.hasMaxItems = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.RepeatedRules.prototype.getUnique = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 3, false)
      );
    };
    proto.validate.RepeatedRules.prototype.setUnique = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.RepeatedRules.prototype.clearUnique = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.RepeatedRules.prototype.hasUnique = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.RepeatedRules.prototype.getItems = function() {
      return (
        /** @type{?proto.validate.FieldRules} */
        jspb.Message.getWrapperField(this, proto.validate.FieldRules, 4)
      );
    };
    proto.validate.RepeatedRules.prototype.setItems = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.validate.RepeatedRules.prototype.clearItems = function() {
      return this.setItems(void 0);
    };
    proto.validate.RepeatedRules.prototype.hasItems = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.RepeatedRules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 5, false)
      );
    };
    proto.validate.RepeatedRules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.validate.RepeatedRules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.validate.RepeatedRules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.MapRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.MapRules.toObject(opt_includeInstance, this);
      };
      proto.validate.MapRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          minPairs: (f = jspb.Message.getField(msg, 1)) == null ? void 0 : f,
          maxPairs: (f = jspb.Message.getField(msg, 2)) == null ? void 0 : f,
          noSparse: (f = jspb.Message.getBooleanField(msg, 3)) == null ? void 0 : f,
          keys: (f = msg.getKeys()) && proto.validate.FieldRules.toObject(includeInstance, f),
          values: (f = msg.getValues()) && proto.validate.FieldRules.toObject(includeInstance, f),
          ignoreEmpty: (f = jspb.Message.getBooleanField(msg, 6)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.MapRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.MapRules();
      return proto.validate.MapRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.MapRules.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMinPairs(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readUint64()
            );
            msg.setMaxPairs(value);
            break;
          case 3:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setNoSparse(value);
            break;
          case 4:
            var value = new proto.validate.FieldRules();
            reader.readMessage(value, proto.validate.FieldRules.deserializeBinaryFromReader);
            msg.setKeys(value);
            break;
          case 5:
            var value = new proto.validate.FieldRules();
            reader.readMessage(value, proto.validate.FieldRules.deserializeBinaryFromReader);
            msg.setValues(value);
            break;
          case 6:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIgnoreEmpty(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.MapRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.MapRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.MapRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeUint64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeBool(
          3,
          f
        );
      }
      f = message.getKeys();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.validate.FieldRules.serializeBinaryToWriter
        );
      }
      f = message.getValues();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.validate.FieldRules.serializeBinaryToWriter
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 6);
      if (f != null) {
        writer.writeBool(
          6,
          f
        );
      }
    };
    proto.validate.MapRules.prototype.getMinPairs = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.validate.MapRules.prototype.setMinPairs = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.MapRules.prototype.clearMinPairs = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.MapRules.prototype.hasMinPairs = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.MapRules.prototype.getMaxPairs = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.validate.MapRules.prototype.setMaxPairs = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.validate.MapRules.prototype.clearMaxPairs = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.validate.MapRules.prototype.hasMaxPairs = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.MapRules.prototype.getNoSparse = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 3, false)
      );
    };
    proto.validate.MapRules.prototype.setNoSparse = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.validate.MapRules.prototype.clearNoSparse = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.validate.MapRules.prototype.hasNoSparse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.MapRules.prototype.getKeys = function() {
      return (
        /** @type{?proto.validate.FieldRules} */
        jspb.Message.getWrapperField(this, proto.validate.FieldRules, 4)
      );
    };
    proto.validate.MapRules.prototype.setKeys = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.validate.MapRules.prototype.clearKeys = function() {
      return this.setKeys(void 0);
    };
    proto.validate.MapRules.prototype.hasKeys = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.MapRules.prototype.getValues = function() {
      return (
        /** @type{?proto.validate.FieldRules} */
        jspb.Message.getWrapperField(this, proto.validate.FieldRules, 5)
      );
    };
    proto.validate.MapRules.prototype.setValues = function(value) {
      return jspb.Message.setWrapperField(this, 5, value);
    };
    proto.validate.MapRules.prototype.clearValues = function() {
      return this.setValues(void 0);
    };
    proto.validate.MapRules.prototype.hasValues = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.MapRules.prototype.getIgnoreEmpty = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 6, false)
      );
    };
    proto.validate.MapRules.prototype.setIgnoreEmpty = function(value) {
      return jspb.Message.setField(this, 6, value);
    };
    proto.validate.MapRules.prototype.clearIgnoreEmpty = function() {
      return jspb.Message.setField(this, 6, void 0);
    };
    proto.validate.MapRules.prototype.hasIgnoreEmpty = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.validate.AnyRules.repeatedFields_ = [2, 3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.AnyRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.AnyRules.toObject(opt_includeInstance, this);
      };
      proto.validate.AnyRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          required: (f = jspb.Message.getBooleanField(msg, 1)) == null ? void 0 : f,
          inList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? void 0 : f,
          notInList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.AnyRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.AnyRules();
      return proto.validate.AnyRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.AnyRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setRequired(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addIn(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addNotIn(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.AnyRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.AnyRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.AnyRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {boolean} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          2,
          f
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          3,
          f
        );
      }
    };
    proto.validate.AnyRules.prototype.getRequired = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.validate.AnyRules.prototype.setRequired = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.AnyRules.prototype.clearRequired = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.AnyRules.prototype.hasRequired = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.AnyRules.prototype.getInList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 2)
      );
    };
    proto.validate.AnyRules.prototype.setInList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.validate.AnyRules.prototype.addIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.validate.AnyRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.AnyRules.prototype.getNotInList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 3)
      );
    };
    proto.validate.AnyRules.prototype.setNotInList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.validate.AnyRules.prototype.addNotIn = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.validate.AnyRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    proto.validate.DurationRules.repeatedFields_ = [7, 8];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.DurationRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.DurationRules.toObject(opt_includeInstance, this);
      };
      proto.validate.DurationRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          required: (f = jspb.Message.getBooleanField(msg, 1)) == null ? void 0 : f,
          pb_const: (f = msg.getConst()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
          lt: (f = msg.getLt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
          lte: (f = msg.getLte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
          gt: (f = msg.getGt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
          gte: (f = msg.getGte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
          inList: jspb.Message.toObjectList(
            msg.getInList(),
            google_protobuf_duration_pb.Duration.toObject,
            includeInstance
          ),
          notInList: jspb.Message.toObjectList(
            msg.getNotInList(),
            google_protobuf_duration_pb.Duration.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.DurationRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.DurationRules();
      return proto.validate.DurationRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.DurationRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setRequired(value);
            break;
          case 2:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setConst(value);
            break;
          case 3:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setLt(value);
            break;
          case 4:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setLte(value);
            break;
          case 5:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setGt(value);
            break;
          case 6:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setGte(value);
            break;
          case 7:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.addIn(value);
            break;
          case 8:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.addNotIn(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.DurationRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.DurationRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.DurationRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {boolean} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
      f = message.getConst();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
      f = message.getLt();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
      f = message.getLte();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
      f = message.getGt();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
      f = message.getGte();
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
      f = message.getInList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          7,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
      f = message.getNotInList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          8,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
    };
    proto.validate.DurationRules.prototype.getRequired = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.validate.DurationRules.prototype.setRequired = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.DurationRules.prototype.clearRequired = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.DurationRules.prototype.hasRequired = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.DurationRules.prototype.getConst = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2)
      );
    };
    proto.validate.DurationRules.prototype.setConst = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.validate.DurationRules.prototype.clearConst = function() {
      return this.setConst(void 0);
    };
    proto.validate.DurationRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.DurationRules.prototype.getLt = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3)
      );
    };
    proto.validate.DurationRules.prototype.setLt = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.validate.DurationRules.prototype.clearLt = function() {
      return this.setLt(void 0);
    };
    proto.validate.DurationRules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.DurationRules.prototype.getLte = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4)
      );
    };
    proto.validate.DurationRules.prototype.setLte = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.validate.DurationRules.prototype.clearLte = function() {
      return this.setLte(void 0);
    };
    proto.validate.DurationRules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.DurationRules.prototype.getGt = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5)
      );
    };
    proto.validate.DurationRules.prototype.setGt = function(value) {
      return jspb.Message.setWrapperField(this, 5, value);
    };
    proto.validate.DurationRules.prototype.clearGt = function() {
      return this.setGt(void 0);
    };
    proto.validate.DurationRules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.DurationRules.prototype.getGte = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6)
      );
    };
    proto.validate.DurationRules.prototype.setGte = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.validate.DurationRules.prototype.clearGte = function() {
      return this.setGte(void 0);
    };
    proto.validate.DurationRules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.validate.DurationRules.prototype.getInList = function() {
      return (
        /** @type{!Array<!proto.google.protobuf.Duration>} */
        jspb.Message.getRepeatedWrapperField(this, google_protobuf_duration_pb.Duration, 7)
      );
    };
    proto.validate.DurationRules.prototype.setInList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 7, value);
    };
    proto.validate.DurationRules.prototype.addIn = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.Duration, opt_index);
    };
    proto.validate.DurationRules.prototype.clearInList = function() {
      return this.setInList([]);
    };
    proto.validate.DurationRules.prototype.getNotInList = function() {
      return (
        /** @type{!Array<!proto.google.protobuf.Duration>} */
        jspb.Message.getRepeatedWrapperField(this, google_protobuf_duration_pb.Duration, 8)
      );
    };
    proto.validate.DurationRules.prototype.setNotInList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 8, value);
    };
    proto.validate.DurationRules.prototype.addNotIn = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.Duration, opt_index);
    };
    proto.validate.DurationRules.prototype.clearNotInList = function() {
      return this.setNotInList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.validate.TimestampRules.prototype.toObject = function(opt_includeInstance) {
        return proto.validate.TimestampRules.toObject(opt_includeInstance, this);
      };
      proto.validate.TimestampRules.toObject = function(includeInstance, msg) {
        var f, obj = {
          required: (f = jspb.Message.getBooleanField(msg, 1)) == null ? void 0 : f,
          pb_const: (f = msg.getConst()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
          lt: (f = msg.getLt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
          lte: (f = msg.getLte()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
          gt: (f = msg.getGt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
          gte: (f = msg.getGte()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
          ltNow: (f = jspb.Message.getBooleanField(msg, 7)) == null ? void 0 : f,
          gtNow: (f = jspb.Message.getBooleanField(msg, 8)) == null ? void 0 : f,
          within: (f = msg.getWithin()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.validate.TimestampRules.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.validate.TimestampRules();
      return proto.validate.TimestampRules.deserializeBinaryFromReader(msg, reader);
    };
    proto.validate.TimestampRules.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setRequired(value);
            break;
          case 2:
            var value = new google_protobuf_timestamp_pb.Timestamp();
            reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
            msg.setConst(value);
            break;
          case 3:
            var value = new google_protobuf_timestamp_pb.Timestamp();
            reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
            msg.setLt(value);
            break;
          case 4:
            var value = new google_protobuf_timestamp_pb.Timestamp();
            reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
            msg.setLte(value);
            break;
          case 5:
            var value = new google_protobuf_timestamp_pb.Timestamp();
            reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
            msg.setGt(value);
            break;
          case 6:
            var value = new google_protobuf_timestamp_pb.Timestamp();
            reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
            msg.setGte(value);
            break;
          case 7:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setLtNow(value);
            break;
          case 8:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setGtNow(value);
            break;
          case 9:
            var value = new google_protobuf_duration_pb.Duration();
            reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
            msg.setWithin(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.validate.TimestampRules.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.validate.TimestampRules.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.validate.TimestampRules.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {boolean} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
      f = message.getConst();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
        );
      }
      f = message.getLt();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
        );
      }
      f = message.getLte();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
        );
      }
      f = message.getGt();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
        );
      }
      f = message.getGte();
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 7);
      if (f != null) {
        writer.writeBool(
          7,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 8);
      if (f != null) {
        writer.writeBool(
          8,
          f
        );
      }
      f = message.getWithin();
      if (f != null) {
        writer.writeMessage(
          9,
          f,
          google_protobuf_duration_pb.Duration.serializeBinaryToWriter
        );
      }
    };
    proto.validate.TimestampRules.prototype.getRequired = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.validate.TimestampRules.prototype.setRequired = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.validate.TimestampRules.prototype.clearRequired = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.validate.TimestampRules.prototype.hasRequired = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.validate.TimestampRules.prototype.getConst = function() {
      return (
        /** @type{?proto.google.protobuf.Timestamp} */
        jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2)
      );
    };
    proto.validate.TimestampRules.prototype.setConst = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.validate.TimestampRules.prototype.clearConst = function() {
      return this.setConst(void 0);
    };
    proto.validate.TimestampRules.prototype.hasConst = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.validate.TimestampRules.prototype.getLt = function() {
      return (
        /** @type{?proto.google.protobuf.Timestamp} */
        jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3)
      );
    };
    proto.validate.TimestampRules.prototype.setLt = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.validate.TimestampRules.prototype.clearLt = function() {
      return this.setLt(void 0);
    };
    proto.validate.TimestampRules.prototype.hasLt = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.validate.TimestampRules.prototype.getLte = function() {
      return (
        /** @type{?proto.google.protobuf.Timestamp} */
        jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4)
      );
    };
    proto.validate.TimestampRules.prototype.setLte = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.validate.TimestampRules.prototype.clearLte = function() {
      return this.setLte(void 0);
    };
    proto.validate.TimestampRules.prototype.hasLte = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.validate.TimestampRules.prototype.getGt = function() {
      return (
        /** @type{?proto.google.protobuf.Timestamp} */
        jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5)
      );
    };
    proto.validate.TimestampRules.prototype.setGt = function(value) {
      return jspb.Message.setWrapperField(this, 5, value);
    };
    proto.validate.TimestampRules.prototype.clearGt = function() {
      return this.setGt(void 0);
    };
    proto.validate.TimestampRules.prototype.hasGt = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.validate.TimestampRules.prototype.getGte = function() {
      return (
        /** @type{?proto.google.protobuf.Timestamp} */
        jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6)
      );
    };
    proto.validate.TimestampRules.prototype.setGte = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.validate.TimestampRules.prototype.clearGte = function() {
      return this.setGte(void 0);
    };
    proto.validate.TimestampRules.prototype.hasGte = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.validate.TimestampRules.prototype.getLtNow = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 7, false)
      );
    };
    proto.validate.TimestampRules.prototype.setLtNow = function(value) {
      return jspb.Message.setField(this, 7, value);
    };
    proto.validate.TimestampRules.prototype.clearLtNow = function() {
      return jspb.Message.setField(this, 7, void 0);
    };
    proto.validate.TimestampRules.prototype.hasLtNow = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.validate.TimestampRules.prototype.getGtNow = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 8, false)
      );
    };
    proto.validate.TimestampRules.prototype.setGtNow = function(value) {
      return jspb.Message.setField(this, 8, value);
    };
    proto.validate.TimestampRules.prototype.clearGtNow = function() {
      return jspb.Message.setField(this, 8, void 0);
    };
    proto.validate.TimestampRules.prototype.hasGtNow = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.validate.TimestampRules.prototype.getWithin = function() {
      return (
        /** @type{?proto.google.protobuf.Duration} */
        jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9)
      );
    };
    proto.validate.TimestampRules.prototype.setWithin = function(value) {
      return jspb.Message.setWrapperField(this, 9, value);
    };
    proto.validate.TimestampRules.prototype.clearWithin = function() {
      return this.setWithin(void 0);
    };
    proto.validate.TimestampRules.prototype.hasWithin = function() {
      return jspb.Message.getField(this, 9) != null;
    };
    proto.validate.KnownRegex = {
      UNKNOWN: 0,
      HTTP_HEADER_NAME: 1,
      HTTP_HEADER_VALUE: 2
    };
    proto.validate.disabled = new jspb.ExtensionFieldInfo(
      1071,
      { disabled: 0 },
      null,
      /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */
      null,
      0
    );
    google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[1071] = new jspb.ExtensionFieldBinaryInfo(
      proto.validate.disabled,
      jspb.BinaryReader.prototype.readBool,
      jspb.BinaryWriter.prototype.writeBool,
      void 0,
      void 0,
      false
    );
    google_protobuf_descriptor_pb.MessageOptions.extensions[1071] = proto.validate.disabled;
    proto.validate.ignored = new jspb.ExtensionFieldInfo(
      1072,
      { ignored: 0 },
      null,
      /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */
      null,
      0
    );
    google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[1072] = new jspb.ExtensionFieldBinaryInfo(
      proto.validate.ignored,
      jspb.BinaryReader.prototype.readBool,
      jspb.BinaryWriter.prototype.writeBool,
      void 0,
      void 0,
      false
    );
    google_protobuf_descriptor_pb.MessageOptions.extensions[1072] = proto.validate.ignored;
    proto.validate.required = new jspb.ExtensionFieldInfo(
      1071,
      { required: 0 },
      null,
      /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */
      null,
      0
    );
    google_protobuf_descriptor_pb.OneofOptions.extensionsBinary[1071] = new jspb.ExtensionFieldBinaryInfo(
      proto.validate.required,
      jspb.BinaryReader.prototype.readBool,
      jspb.BinaryWriter.prototype.writeBool,
      void 0,
      void 0,
      false
    );
    google_protobuf_descriptor_pb.OneofOptions.extensions[1071] = proto.validate.required;
    proto.validate.rules = new jspb.ExtensionFieldInfo(
      1071,
      { rules: 0 },
      proto.validate.FieldRules,
      /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */
      proto.validate.FieldRules.toObject,
      0
    );
    google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1071] = new jspb.ExtensionFieldBinaryInfo(
      proto.validate.rules,
      jspb.BinaryReader.prototype.readMessage,
      jspb.BinaryWriter.prototype.writeMessage,
      proto.validate.FieldRules.serializeBinaryToWriter,
      proto.validate.FieldRules.deserializeBinaryFromReader,
      false
    );
    google_protobuf_descriptor_pb.FieldOptions.extensions[1071] = proto.validate.rules;
    goog.object.extend(exports, proto.validate);
  }
});

// src/gen/proto/event/v1/event_pb.js
var require_event_pb = __commonJS({
  "src/gen/proto/event/v1/event_pb.js"(exports) {
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
    var validate_validate_pb = require_validate_pb();
    goog.object.extend(proto, validate_validate_pb);
    goog.exportSymbol("proto.nitric.event.v1.EventPublishRequest", null, global);
    goog.exportSymbol("proto.nitric.event.v1.EventPublishResponse", null, global);
    goog.exportSymbol("proto.nitric.event.v1.NitricEvent", null, global);
    goog.exportSymbol("proto.nitric.event.v1.NitricTopic", null, global);
    goog.exportSymbol("proto.nitric.event.v1.TopicListRequest", null, global);
    goog.exportSymbol("proto.nitric.event.v1.TopicListResponse", null, global);
    proto.nitric.event.v1.EventPublishRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.event.v1.EventPublishRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.event.v1.EventPublishRequest.displayName = "proto.nitric.event.v1.EventPublishRequest";
    }
    proto.nitric.event.v1.EventPublishResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.event.v1.EventPublishResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.event.v1.EventPublishResponse.displayName = "proto.nitric.event.v1.EventPublishResponse";
    }
    proto.nitric.event.v1.TopicListRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.event.v1.TopicListRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.event.v1.TopicListRequest.displayName = "proto.nitric.event.v1.TopicListRequest";
    }
    proto.nitric.event.v1.TopicListResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.event.v1.TopicListResponse.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.event.v1.TopicListResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.event.v1.TopicListResponse.displayName = "proto.nitric.event.v1.TopicListResponse";
    }
    proto.nitric.event.v1.NitricTopic = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.event.v1.NitricTopic, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.event.v1.NitricTopic.displayName = "proto.nitric.event.v1.NitricTopic";
    }
    proto.nitric.event.v1.NitricEvent = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.event.v1.NitricEvent, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.event.v1.NitricEvent.displayName = "proto.nitric.event.v1.NitricEvent";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.event.v1.EventPublishRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.event.v1.EventPublishRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.event.v1.EventPublishRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
          event: (f = msg.getEvent()) && proto.nitric.event.v1.NitricEvent.toObject(includeInstance, f),
          delay: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.event.v1.EventPublishRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.event.v1.EventPublishRequest();
      return proto.nitric.event.v1.EventPublishRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.event.v1.EventPublishRequest.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setTopic(value);
            break;
          case 2:
            var value = new proto.nitric.event.v1.NitricEvent();
            reader.readMessage(value, proto.nitric.event.v1.NitricEvent.deserializeBinaryFromReader);
            msg.setEvent(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setDelay(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.event.v1.EventPublishRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.event.v1.EventPublishRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopic();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getEvent();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.event.v1.NitricEvent.serializeBinaryToWriter
        );
      }
      f = message.getDelay();
      if (f !== 0) {
        writer.writeUint32(
          3,
          f
        );
      }
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.getTopic = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.setTopic = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.getEvent = function() {
      return (
        /** @type{?proto.nitric.event.v1.NitricEvent} */
        jspb.Message.getWrapperField(this, proto.nitric.event.v1.NitricEvent, 2)
      );
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.setEvent = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.clearEvent = function() {
      return this.setEvent(void 0);
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.hasEvent = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.getDelay = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.nitric.event.v1.EventPublishRequest.prototype.setDelay = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.event.v1.EventPublishResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.event.v1.EventPublishResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.event.v1.EventPublishResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.event.v1.EventPublishResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.event.v1.EventPublishResponse();
      return proto.nitric.event.v1.EventPublishResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.event.v1.EventPublishResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.event.v1.EventPublishResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.event.v1.EventPublishResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.event.v1.EventPublishResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.event.v1.EventPublishResponse.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.event.v1.EventPublishResponse.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.event.v1.TopicListRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.event.v1.TopicListRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.event.v1.TopicListRequest.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.event.v1.TopicListRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.event.v1.TopicListRequest();
      return proto.nitric.event.v1.TopicListRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.event.v1.TopicListRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.event.v1.TopicListRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.event.v1.TopicListRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.event.v1.TopicListRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.event.v1.TopicListResponse.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.event.v1.TopicListResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.event.v1.TopicListResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.event.v1.TopicListResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          topicsList: jspb.Message.toObjectList(
            msg.getTopicsList(),
            proto.nitric.event.v1.NitricTopic.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.event.v1.TopicListResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.event.v1.TopicListResponse();
      return proto.nitric.event.v1.TopicListResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.event.v1.TopicListResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.event.v1.NitricTopic();
            reader.readMessage(value, proto.nitric.event.v1.NitricTopic.deserializeBinaryFromReader);
            msg.addTopics(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.event.v1.TopicListResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.event.v1.TopicListResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.event.v1.TopicListResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopicsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.event.v1.NitricTopic.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.event.v1.TopicListResponse.prototype.getTopicsList = function() {
      return (
        /** @type{!Array<!proto.nitric.event.v1.NitricTopic>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.event.v1.NitricTopic, 1)
      );
    };
    proto.nitric.event.v1.TopicListResponse.prototype.setTopicsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.event.v1.TopicListResponse.prototype.addTopics = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.event.v1.NitricTopic, opt_index);
    };
    proto.nitric.event.v1.TopicListResponse.prototype.clearTopicsList = function() {
      return this.setTopicsList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.event.v1.NitricTopic.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.event.v1.NitricTopic.toObject(opt_includeInstance, this);
      };
      proto.nitric.event.v1.NitricTopic.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.event.v1.NitricTopic.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.event.v1.NitricTopic();
      return proto.nitric.event.v1.NitricTopic.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.event.v1.NitricTopic.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.event.v1.NitricTopic.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.event.v1.NitricTopic.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.event.v1.NitricTopic.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.event.v1.NitricTopic.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.event.v1.NitricTopic.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.event.v1.NitricEvent.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.event.v1.NitricEvent.toObject(opt_includeInstance, this);
      };
      proto.nitric.event.v1.NitricEvent.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          payloadType: jspb.Message.getFieldWithDefault(msg, 2, ""),
          payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.event.v1.NitricEvent.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.event.v1.NitricEvent();
      return proto.nitric.event.v1.NitricEvent.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.event.v1.NitricEvent.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPayloadType(value);
            break;
          case 3:
            var value = new google_protobuf_struct_pb.Struct();
            reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
            msg.setPayload(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.event.v1.NitricEvent.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.event.v1.NitricEvent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.event.v1.NitricEvent.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPayloadType();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getPayload();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          google_protobuf_struct_pb.Struct.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.event.v1.NitricEvent.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.event.v1.NitricEvent.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.event.v1.NitricEvent.prototype.getPayloadType = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.event.v1.NitricEvent.prototype.setPayloadType = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.event.v1.NitricEvent.prototype.getPayload = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3)
      );
    };
    proto.nitric.event.v1.NitricEvent.prototype.setPayload = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.nitric.event.v1.NitricEvent.prototype.clearPayload = function() {
      return this.setPayload(void 0);
    };
    proto.nitric.event.v1.NitricEvent.prototype.hasPayload = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    goog.object.extend(exports, proto.nitric.event.v1);
  }
});

// src/gen/proto/event/v1/event_grpc_pb.js
var require_event_grpc_pb = __commonJS({
  "src/gen/proto/event/v1/event_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_event_v1_event_pb = require_event_pb();
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    var validate_validate_pb = require_validate_pb();
    function serialize_nitric_event_v1_EventPublishRequest(arg) {
      if (!(arg instanceof proto_event_v1_event_pb.EventPublishRequest)) {
        throw new Error("Expected argument of type nitric.event.v1.EventPublishRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_event_v1_EventPublishRequest(buffer_arg) {
      return proto_event_v1_event_pb.EventPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_event_v1_EventPublishResponse(arg) {
      if (!(arg instanceof proto_event_v1_event_pb.EventPublishResponse)) {
        throw new Error("Expected argument of type nitric.event.v1.EventPublishResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_event_v1_EventPublishResponse(buffer_arg) {
      return proto_event_v1_event_pb.EventPublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_event_v1_TopicListRequest(arg) {
      if (!(arg instanceof proto_event_v1_event_pb.TopicListRequest)) {
        throw new Error("Expected argument of type nitric.event.v1.TopicListRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_event_v1_TopicListRequest(buffer_arg) {
      return proto_event_v1_event_pb.TopicListRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_event_v1_TopicListResponse(arg) {
      if (!(arg instanceof proto_event_v1_event_pb.TopicListResponse)) {
        throw new Error("Expected argument of type nitric.event.v1.TopicListResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_event_v1_TopicListResponse(buffer_arg) {
      return proto_event_v1_event_pb.TopicListResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var EventServiceService = exports.EventServiceService = {
      // Publishes an message to a given topic
      publish: {
        path: "/nitric.event.v1.EventService/Publish",
        requestStream: false,
        responseStream: false,
        requestType: proto_event_v1_event_pb.EventPublishRequest,
        responseType: proto_event_v1_event_pb.EventPublishResponse,
        requestSerialize: serialize_nitric_event_v1_EventPublishRequest,
        requestDeserialize: deserialize_nitric_event_v1_EventPublishRequest,
        responseSerialize: serialize_nitric_event_v1_EventPublishResponse,
        responseDeserialize: deserialize_nitric_event_v1_EventPublishResponse
      }
    };
    exports.EventServiceClient = grpc8.makeGenericClientConstructor(EventServiceService);
    var TopicServiceService = exports.TopicServiceService = {
      // Return a list of existing topics in the provider environment
      list: {
        path: "/nitric.event.v1.TopicService/List",
        requestStream: false,
        responseStream: false,
        requestType: proto_event_v1_event_pb.TopicListRequest,
        responseType: proto_event_v1_event_pb.TopicListResponse,
        requestSerialize: serialize_nitric_event_v1_TopicListRequest,
        requestDeserialize: deserialize_nitric_event_v1_TopicListRequest,
        responseSerialize: serialize_nitric_event_v1_TopicListResponse,
        responseDeserialize: deserialize_nitric_event_v1_TopicListResponse
      }
    };
    exports.TopicServiceClient = grpc8.makeGenericClientConstructor(TopicServiceService);
  }
});

// src/gen/proto/document/v1/document_pb.js
var require_document_pb = __commonJS({
  "src/gen/proto/document/v1/document_pb.js"(exports) {
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
    var validate_validate_pb = require_validate_pb();
    goog.object.extend(proto, validate_validate_pb);
    goog.exportSymbol("proto.nitric.document.v1.Collection", null, global);
    goog.exportSymbol("proto.nitric.document.v1.Document", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentDeleteRequest", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentDeleteResponse", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentGetRequest", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentGetResponse", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentQueryRequest", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentQueryResponse", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentQueryStreamRequest", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentQueryStreamResponse", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentSetRequest", null, global);
    goog.exportSymbol("proto.nitric.document.v1.DocumentSetResponse", null, global);
    goog.exportSymbol("proto.nitric.document.v1.Expression", null, global);
    goog.exportSymbol("proto.nitric.document.v1.ExpressionValue", null, global);
    goog.exportSymbol("proto.nitric.document.v1.ExpressionValue.KindCase", null, global);
    goog.exportSymbol("proto.nitric.document.v1.Key", null, global);
    proto.nitric.document.v1.Collection = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.Collection, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.Collection.displayName = "proto.nitric.document.v1.Collection";
    }
    proto.nitric.document.v1.Key = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.Key, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.Key.displayName = "proto.nitric.document.v1.Key";
    }
    proto.nitric.document.v1.Document = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.Document, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.Document.displayName = "proto.nitric.document.v1.Document";
    }
    proto.nitric.document.v1.ExpressionValue = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.document.v1.ExpressionValue.oneofGroups_);
    };
    goog.inherits(proto.nitric.document.v1.ExpressionValue, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.ExpressionValue.displayName = "proto.nitric.document.v1.ExpressionValue";
    }
    proto.nitric.document.v1.Expression = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.Expression, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.Expression.displayName = "proto.nitric.document.v1.Expression";
    }
    proto.nitric.document.v1.DocumentGetRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentGetRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentGetRequest.displayName = "proto.nitric.document.v1.DocumentGetRequest";
    }
    proto.nitric.document.v1.DocumentGetResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentGetResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentGetResponse.displayName = "proto.nitric.document.v1.DocumentGetResponse";
    }
    proto.nitric.document.v1.DocumentSetRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentSetRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentSetRequest.displayName = "proto.nitric.document.v1.DocumentSetRequest";
    }
    proto.nitric.document.v1.DocumentSetResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentSetResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentSetResponse.displayName = "proto.nitric.document.v1.DocumentSetResponse";
    }
    proto.nitric.document.v1.DocumentDeleteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentDeleteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentDeleteRequest.displayName = "proto.nitric.document.v1.DocumentDeleteRequest";
    }
    proto.nitric.document.v1.DocumentDeleteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentDeleteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentDeleteResponse.displayName = "proto.nitric.document.v1.DocumentDeleteResponse";
    }
    proto.nitric.document.v1.DocumentQueryRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.document.v1.DocumentQueryRequest.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentQueryRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentQueryRequest.displayName = "proto.nitric.document.v1.DocumentQueryRequest";
    }
    proto.nitric.document.v1.DocumentQueryResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.document.v1.DocumentQueryResponse.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentQueryResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentQueryResponse.displayName = "proto.nitric.document.v1.DocumentQueryResponse";
    }
    proto.nitric.document.v1.DocumentQueryStreamRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.document.v1.DocumentQueryStreamRequest.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentQueryStreamRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentQueryStreamRequest.displayName = "proto.nitric.document.v1.DocumentQueryStreamRequest";
    }
    proto.nitric.document.v1.DocumentQueryStreamResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.document.v1.DocumentQueryStreamResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.document.v1.DocumentQueryStreamResponse.displayName = "proto.nitric.document.v1.DocumentQueryStreamResponse";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.Collection.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.Collection.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.Collection.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, ""),
          parent: (f = msg.getParent()) && proto.nitric.document.v1.Key.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.Collection.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.Collection();
      return proto.nitric.document.v1.Collection.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.Collection.deserializeBinaryFromReader = function(msg, reader) {
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
          case 2:
            var value = new proto.nitric.document.v1.Key();
            reader.readMessage(value, proto.nitric.document.v1.Key.deserializeBinaryFromReader);
            msg.setParent(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.Collection.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.Collection.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.Collection.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getParent();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.document.v1.Key.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.Collection.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.document.v1.Collection.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.document.v1.Collection.prototype.getParent = function() {
      return (
        /** @type{?proto.nitric.document.v1.Key} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Key, 2)
      );
    };
    proto.nitric.document.v1.Collection.prototype.setParent = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.document.v1.Collection.prototype.clearParent = function() {
      return this.setParent(void 0);
    };
    proto.nitric.document.v1.Collection.prototype.hasParent = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.Key.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.Key.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.Key.toObject = function(includeInstance, msg) {
        var f, obj = {
          collection: (f = msg.getCollection()) && proto.nitric.document.v1.Collection.toObject(includeInstance, f),
          id: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.Key.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.Key();
      return proto.nitric.document.v1.Key.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.Key.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Collection();
            reader.readMessage(value, proto.nitric.document.v1.Collection.deserializeBinaryFromReader);
            msg.setCollection(value);
            break;
          case 2:
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
    proto.nitric.document.v1.Key.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.Key.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.Key.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getCollection();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Collection.serializeBinaryToWriter
        );
      }
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.document.v1.Key.prototype.getCollection = function() {
      return (
        /** @type{?proto.nitric.document.v1.Collection} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Collection, 1)
      );
    };
    proto.nitric.document.v1.Key.prototype.setCollection = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.Key.prototype.clearCollection = function() {
      return this.setCollection(void 0);
    };
    proto.nitric.document.v1.Key.prototype.hasCollection = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.document.v1.Key.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.document.v1.Key.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.Document.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.Document.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.Document.toObject = function(includeInstance, msg) {
        var f, obj = {
          content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
          key: (f = msg.getKey()) && proto.nitric.document.v1.Key.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.Document.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.Document();
      return proto.nitric.document.v1.Document.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.Document.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new google_protobuf_struct_pb.Struct();
            reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
            msg.setContent(value);
            break;
          case 2:
            var value = new proto.nitric.document.v1.Key();
            reader.readMessage(value, proto.nitric.document.v1.Key.deserializeBinaryFromReader);
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.Document.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.Document.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.Document.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getContent();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          google_protobuf_struct_pb.Struct.serializeBinaryToWriter
        );
      }
      f = message.getKey();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.document.v1.Key.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.Document.prototype.getContent = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1)
      );
    };
    proto.nitric.document.v1.Document.prototype.setContent = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.Document.prototype.clearContent = function() {
      return this.setContent(void 0);
    };
    proto.nitric.document.v1.Document.prototype.hasContent = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.document.v1.Document.prototype.getKey = function() {
      return (
        /** @type{?proto.nitric.document.v1.Key} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Key, 2)
      );
    };
    proto.nitric.document.v1.Document.prototype.setKey = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.document.v1.Document.prototype.clearKey = function() {
      return this.setKey(void 0);
    };
    proto.nitric.document.v1.Document.prototype.hasKey = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.document.v1.ExpressionValue.oneofGroups_ = [[1, 2, 3, 4]];
    proto.nitric.document.v1.ExpressionValue.KindCase = {
      KIND_NOT_SET: 0,
      INT_VALUE: 1,
      DOUBLE_VALUE: 2,
      STRING_VALUE: 3,
      BOOL_VALUE: 4
    };
    proto.nitric.document.v1.ExpressionValue.prototype.getKindCase = function() {
      return (
        /** @type {proto.nitric.document.v1.ExpressionValue.KindCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.ExpressionValue.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.ExpressionValue.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.ExpressionValue.toObject = function(includeInstance, msg) {
        var f, obj = {
          intValue: jspb.Message.getFieldWithDefault(msg, 1, 0),
          doubleValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
          stringValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
          boolValue: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.ExpressionValue.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.ExpressionValue();
      return proto.nitric.document.v1.ExpressionValue.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.ExpressionValue.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readInt64()
            );
            msg.setIntValue(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readDouble()
            );
            msg.setDoubleValue(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setStringValue(value);
            break;
          case 4:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setBoolValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.ExpressionValue.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.ExpressionValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.ExpressionValue.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = /** @type {number} */
      jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeInt64(
          1,
          f
        );
      }
      f = /** @type {number} */
      jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeDouble(
          2,
          f
        );
      }
      f = /** @type {string} */
      jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeString(
          3,
          f
        );
      }
      f = /** @type {boolean} */
      jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeBool(
          4,
          f
        );
      }
    };
    proto.nitric.document.v1.ExpressionValue.prototype.getIntValue = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.nitric.document.v1.ExpressionValue.prototype.setIntValue = function(value) {
      return jspb.Message.setOneofField(this, 1, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], value);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.clearIntValue = function() {
      return jspb.Message.setOneofField(this, 1, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], void 0);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.hasIntValue = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.document.v1.ExpressionValue.prototype.getDoubleValue = function() {
      return (
        /** @type {number} */
        jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0)
      );
    };
    proto.nitric.document.v1.ExpressionValue.prototype.setDoubleValue = function(value) {
      return jspb.Message.setOneofField(this, 2, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], value);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.clearDoubleValue = function() {
      return jspb.Message.setOneofField(this, 2, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], void 0);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.hasDoubleValue = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.document.v1.ExpressionValue.prototype.getStringValue = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.document.v1.ExpressionValue.prototype.setStringValue = function(value) {
      return jspb.Message.setOneofField(this, 3, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], value);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.clearStringValue = function() {
      return jspb.Message.setOneofField(this, 3, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], void 0);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.hasStringValue = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.document.v1.ExpressionValue.prototype.getBoolValue = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 4, false)
      );
    };
    proto.nitric.document.v1.ExpressionValue.prototype.setBoolValue = function(value) {
      return jspb.Message.setOneofField(this, 4, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], value);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.clearBoolValue = function() {
      return jspb.Message.setOneofField(this, 4, proto.nitric.document.v1.ExpressionValue.oneofGroups_[0], void 0);
    };
    proto.nitric.document.v1.ExpressionValue.prototype.hasBoolValue = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.Expression.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.Expression.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.Expression.toObject = function(includeInstance, msg) {
        var f, obj = {
          operand: jspb.Message.getFieldWithDefault(msg, 1, ""),
          operator: jspb.Message.getFieldWithDefault(msg, 2, ""),
          value: (f = msg.getValue()) && proto.nitric.document.v1.ExpressionValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.Expression.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.Expression();
      return proto.nitric.document.v1.Expression.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.Expression.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setOperand(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setOperator(value);
            break;
          case 3:
            var value = new proto.nitric.document.v1.ExpressionValue();
            reader.readMessage(value, proto.nitric.document.v1.ExpressionValue.deserializeBinaryFromReader);
            msg.setValue(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.Expression.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.Expression.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.Expression.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOperand();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getOperator();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getValue();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.document.v1.ExpressionValue.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.Expression.prototype.getOperand = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.document.v1.Expression.prototype.setOperand = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.document.v1.Expression.prototype.getOperator = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.document.v1.Expression.prototype.setOperator = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.document.v1.Expression.prototype.getValue = function() {
      return (
        /** @type{?proto.nitric.document.v1.ExpressionValue} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.ExpressionValue, 3)
      );
    };
    proto.nitric.document.v1.Expression.prototype.setValue = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.nitric.document.v1.Expression.prototype.clearValue = function() {
      return this.setValue(void 0);
    };
    proto.nitric.document.v1.Expression.prototype.hasValue = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentGetRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentGetRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentGetRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: (f = msg.getKey()) && proto.nitric.document.v1.Key.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentGetRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentGetRequest();
      return proto.nitric.document.v1.DocumentGetRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentGetRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Key();
            reader.readMessage(value, proto.nitric.document.v1.Key.deserializeBinaryFromReader);
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentGetRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentGetRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentGetRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Key.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.DocumentGetRequest.prototype.getKey = function() {
      return (
        /** @type{?proto.nitric.document.v1.Key} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Key, 1)
      );
    };
    proto.nitric.document.v1.DocumentGetRequest.prototype.setKey = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentGetRequest.prototype.clearKey = function() {
      return this.setKey(void 0);
    };
    proto.nitric.document.v1.DocumentGetRequest.prototype.hasKey = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentGetResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentGetResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentGetResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          document: (f = msg.getDocument()) && proto.nitric.document.v1.Document.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentGetResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentGetResponse();
      return proto.nitric.document.v1.DocumentGetResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentGetResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Document();
            reader.readMessage(value, proto.nitric.document.v1.Document.deserializeBinaryFromReader);
            msg.setDocument(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentGetResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentGetResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentGetResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getDocument();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Document.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.DocumentGetResponse.prototype.getDocument = function() {
      return (
        /** @type{?proto.nitric.document.v1.Document} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Document, 1)
      );
    };
    proto.nitric.document.v1.DocumentGetResponse.prototype.setDocument = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentGetResponse.prototype.clearDocument = function() {
      return this.setDocument(void 0);
    };
    proto.nitric.document.v1.DocumentGetResponse.prototype.hasDocument = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentSetRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentSetRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentSetRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: (f = msg.getKey()) && proto.nitric.document.v1.Key.toObject(includeInstance, f),
          content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentSetRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentSetRequest();
      return proto.nitric.document.v1.DocumentSetRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentSetRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Key();
            reader.readMessage(value, proto.nitric.document.v1.Key.deserializeBinaryFromReader);
            msg.setKey(value);
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
    proto.nitric.document.v1.DocumentSetRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentSetRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentSetRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Key.serializeBinaryToWriter
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
    proto.nitric.document.v1.DocumentSetRequest.prototype.getKey = function() {
      return (
        /** @type{?proto.nitric.document.v1.Key} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Key, 1)
      );
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.setKey = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.clearKey = function() {
      return this.setKey(void 0);
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.hasKey = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.getContent = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3)
      );
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.setContent = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.clearContent = function() {
      return this.setContent(void 0);
    };
    proto.nitric.document.v1.DocumentSetRequest.prototype.hasContent = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentSetResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentSetResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentSetResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentSetResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentSetResponse();
      return proto.nitric.document.v1.DocumentSetResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentSetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.document.v1.DocumentSetResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentSetResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentSetResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentDeleteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentDeleteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentDeleteRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: (f = msg.getKey()) && proto.nitric.document.v1.Key.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentDeleteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentDeleteRequest();
      return proto.nitric.document.v1.DocumentDeleteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Key();
            reader.readMessage(value, proto.nitric.document.v1.Key.deserializeBinaryFromReader);
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentDeleteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentDeleteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentDeleteRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Key.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.DocumentDeleteRequest.prototype.getKey = function() {
      return (
        /** @type{?proto.nitric.document.v1.Key} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Key, 1)
      );
    };
    proto.nitric.document.v1.DocumentDeleteRequest.prototype.setKey = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentDeleteRequest.prototype.clearKey = function() {
      return this.setKey(void 0);
    };
    proto.nitric.document.v1.DocumentDeleteRequest.prototype.hasKey = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentDeleteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentDeleteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentDeleteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentDeleteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentDeleteResponse();
      return proto.nitric.document.v1.DocumentDeleteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.document.v1.DocumentDeleteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentDeleteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentDeleteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.document.v1.DocumentQueryRequest.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentQueryRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentQueryRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentQueryRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          collection: (f = msg.getCollection()) && proto.nitric.document.v1.Collection.toObject(includeInstance, f),
          expressionsList: jspb.Message.toObjectList(
            msg.getExpressionsList(),
            proto.nitric.document.v1.Expression.toObject,
            includeInstance
          ),
          limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
          pagingTokenMap: (f = msg.getPagingTokenMap()) ? f.toObject(includeInstance, void 0) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentQueryRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentQueryRequest();
      return proto.nitric.document.v1.DocumentQueryRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Collection();
            reader.readMessage(value, proto.nitric.document.v1.Collection.deserializeBinaryFromReader);
            msg.setCollection(value);
            break;
          case 3:
            var value = new proto.nitric.document.v1.Expression();
            reader.readMessage(value, proto.nitric.document.v1.Expression.deserializeBinaryFromReader);
            msg.addExpressions(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setLimit(value);
            break;
          case 5:
            var value = msg.getPagingTokenMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentQueryRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentQueryRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getCollection();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Collection.serializeBinaryToWriter
        );
      }
      f = message.getExpressionsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          3,
          f,
          proto.nitric.document.v1.Expression.serializeBinaryToWriter
        );
      }
      f = message.getLimit();
      if (f !== 0) {
        writer.writeInt32(
          4,
          f
        );
      }
      f = message.getPagingTokenMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.getCollection = function() {
      return (
        /** @type{?proto.nitric.document.v1.Collection} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Collection, 1)
      );
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.setCollection = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.clearCollection = function() {
      return this.setCollection(void 0);
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.hasCollection = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.getExpressionsList = function() {
      return (
        /** @type{!Array<!proto.nitric.document.v1.Expression>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.document.v1.Expression, 3)
      );
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.setExpressionsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.addExpressions = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nitric.document.v1.Expression, opt_index);
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.clearExpressionsList = function() {
      return this.setExpressionsList([]);
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.getLimit = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.setLimit = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    proto.nitric.document.v1.DocumentQueryRequest.prototype.getPagingTokenMap = function(opt_noLazyCreate) {
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
    proto.nitric.document.v1.DocumentQueryRequest.prototype.clearPagingTokenMap = function() {
      this.getPagingTokenMap().clear();
      return this;
    };
    proto.nitric.document.v1.DocumentQueryResponse.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentQueryResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentQueryResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentQueryResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          documentsList: jspb.Message.toObjectList(
            msg.getDocumentsList(),
            proto.nitric.document.v1.Document.toObject,
            includeInstance
          ),
          pagingTokenMap: (f = msg.getPagingTokenMap()) ? f.toObject(includeInstance, void 0) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentQueryResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentQueryResponse();
      return proto.nitric.document.v1.DocumentQueryResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Document();
            reader.readMessage(value, proto.nitric.document.v1.Document.deserializeBinaryFromReader);
            msg.addDocuments(value);
            break;
          case 2:
            var value = msg.getPagingTokenMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentQueryResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentQueryResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getDocumentsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.document.v1.Document.serializeBinaryToWriter
        );
      }
      f = message.getPagingTokenMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.getDocumentsList = function() {
      return (
        /** @type{!Array<!proto.nitric.document.v1.Document>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.document.v1.Document, 1)
      );
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.setDocumentsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.addDocuments = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.document.v1.Document, opt_index);
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.clearDocumentsList = function() {
      return this.setDocumentsList([]);
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.getPagingTokenMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          2,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.document.v1.DocumentQueryResponse.prototype.clearPagingTokenMap = function() {
      this.getPagingTokenMap().clear();
      return this;
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentQueryStreamRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentQueryStreamRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          collection: (f = msg.getCollection()) && proto.nitric.document.v1.Collection.toObject(includeInstance, f),
          expressionsList: jspb.Message.toObjectList(
            msg.getExpressionsList(),
            proto.nitric.document.v1.Expression.toObject,
            includeInstance
          ),
          limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentQueryStreamRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentQueryStreamRequest();
      return proto.nitric.document.v1.DocumentQueryStreamRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Collection();
            reader.readMessage(value, proto.nitric.document.v1.Collection.deserializeBinaryFromReader);
            msg.setCollection(value);
            break;
          case 3:
            var value = new proto.nitric.document.v1.Expression();
            reader.readMessage(value, proto.nitric.document.v1.Expression.deserializeBinaryFromReader);
            msg.addExpressions(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setLimit(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentQueryStreamRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getCollection();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Collection.serializeBinaryToWriter
        );
      }
      f = message.getExpressionsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          3,
          f,
          proto.nitric.document.v1.Expression.serializeBinaryToWriter
        );
      }
      f = message.getLimit();
      if (f !== 0) {
        writer.writeInt32(
          4,
          f
        );
      }
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.getCollection = function() {
      return (
        /** @type{?proto.nitric.document.v1.Collection} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Collection, 1)
      );
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.setCollection = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.clearCollection = function() {
      return this.setCollection(void 0);
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.hasCollection = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.getExpressionsList = function() {
      return (
        /** @type{!Array<!proto.nitric.document.v1.Expression>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.document.v1.Expression, 3)
      );
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.setExpressionsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.addExpressions = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nitric.document.v1.Expression, opt_index);
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.clearExpressionsList = function() {
      return this.setExpressionsList([]);
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.getLimit = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.nitric.document.v1.DocumentQueryStreamRequest.prototype.setLimit = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.document.v1.DocumentQueryStreamResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.document.v1.DocumentQueryStreamResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.document.v1.DocumentQueryStreamResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          document: (f = msg.getDocument()) && proto.nitric.document.v1.Document.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.document.v1.DocumentQueryStreamResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.document.v1.DocumentQueryStreamResponse();
      return proto.nitric.document.v1.DocumentQueryStreamResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.document.v1.Document();
            reader.readMessage(value, proto.nitric.document.v1.Document.deserializeBinaryFromReader);
            msg.setDocument(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.document.v1.DocumentQueryStreamResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getDocument();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.document.v1.Document.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.prototype.getDocument = function() {
      return (
        /** @type{?proto.nitric.document.v1.Document} */
        jspb.Message.getWrapperField(this, proto.nitric.document.v1.Document, 1)
      );
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.prototype.setDocument = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.prototype.clearDocument = function() {
      return this.setDocument(void 0);
    };
    proto.nitric.document.v1.DocumentQueryStreamResponse.prototype.hasDocument = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    goog.object.extend(exports, proto.nitric.document.v1);
  }
});

// src/gen/proto/document/v1/document_grpc_pb.js
var require_document_grpc_pb = __commonJS({
  "src/gen/proto/document/v1/document_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_document_v1_document_pb = require_document_pb();
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    var validate_validate_pb = require_validate_pb();
    function serialize_nitric_document_v1_DocumentDeleteRequest(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentDeleteRequest)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentDeleteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentDeleteRequest(buffer_arg) {
      return proto_document_v1_document_pb.DocumentDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentDeleteResponse(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentDeleteResponse)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentDeleteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentDeleteResponse(buffer_arg) {
      return proto_document_v1_document_pb.DocumentDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentGetRequest(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentGetRequest)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentGetRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentGetRequest(buffer_arg) {
      return proto_document_v1_document_pb.DocumentGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentGetResponse(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentGetResponse)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentGetResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentGetResponse(buffer_arg) {
      return proto_document_v1_document_pb.DocumentGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentQueryRequest(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryRequest)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentQueryRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentQueryRequest(buffer_arg) {
      return proto_document_v1_document_pb.DocumentQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentQueryResponse(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryResponse)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentQueryResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentQueryResponse(buffer_arg) {
      return proto_document_v1_document_pb.DocumentQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentQueryStreamRequest(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryStreamRequest)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentQueryStreamRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentQueryStreamRequest(buffer_arg) {
      return proto_document_v1_document_pb.DocumentQueryStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentQueryStreamResponse(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentQueryStreamResponse)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentQueryStreamResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentQueryStreamResponse(buffer_arg) {
      return proto_document_v1_document_pb.DocumentQueryStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentSetRequest(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentSetRequest)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentSetRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentSetRequest(buffer_arg) {
      return proto_document_v1_document_pb.DocumentSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_document_v1_DocumentSetResponse(arg) {
      if (!(arg instanceof proto_document_v1_document_pb.DocumentSetResponse)) {
        throw new Error("Expected argument of type nitric.document.v1.DocumentSetResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_document_v1_DocumentSetResponse(buffer_arg) {
      return proto_document_v1_document_pb.DocumentSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var DocumentServiceService = exports.DocumentServiceService = {
      // Get an existing document
      get: {
        path: "/nitric.document.v1.DocumentService/Get",
        requestStream: false,
        responseStream: false,
        requestType: proto_document_v1_document_pb.DocumentGetRequest,
        responseType: proto_document_v1_document_pb.DocumentGetResponse,
        requestSerialize: serialize_nitric_document_v1_DocumentGetRequest,
        requestDeserialize: deserialize_nitric_document_v1_DocumentGetRequest,
        responseSerialize: serialize_nitric_document_v1_DocumentGetResponse,
        responseDeserialize: deserialize_nitric_document_v1_DocumentGetResponse
      },
      // Create a new or overwrite an existing document
      set: {
        path: "/nitric.document.v1.DocumentService/Set",
        requestStream: false,
        responseStream: false,
        requestType: proto_document_v1_document_pb.DocumentSetRequest,
        responseType: proto_document_v1_document_pb.DocumentSetResponse,
        requestSerialize: serialize_nitric_document_v1_DocumentSetRequest,
        requestDeserialize: deserialize_nitric_document_v1_DocumentSetRequest,
        responseSerialize: serialize_nitric_document_v1_DocumentSetResponse,
        responseDeserialize: deserialize_nitric_document_v1_DocumentSetResponse
      },
      // Delete an existing document
      delete: {
        path: "/nitric.document.v1.DocumentService/Delete",
        requestStream: false,
        responseStream: false,
        requestType: proto_document_v1_document_pb.DocumentDeleteRequest,
        responseType: proto_document_v1_document_pb.DocumentDeleteResponse,
        requestSerialize: serialize_nitric_document_v1_DocumentDeleteRequest,
        requestDeserialize: deserialize_nitric_document_v1_DocumentDeleteRequest,
        responseSerialize: serialize_nitric_document_v1_DocumentDeleteResponse,
        responseDeserialize: deserialize_nitric_document_v1_DocumentDeleteResponse
      },
      // Query the document collection (supports pagination)
      query: {
        path: "/nitric.document.v1.DocumentService/Query",
        requestStream: false,
        responseStream: false,
        requestType: proto_document_v1_document_pb.DocumentQueryRequest,
        responseType: proto_document_v1_document_pb.DocumentQueryResponse,
        requestSerialize: serialize_nitric_document_v1_DocumentQueryRequest,
        requestDeserialize: deserialize_nitric_document_v1_DocumentQueryRequest,
        responseSerialize: serialize_nitric_document_v1_DocumentQueryResponse,
        responseDeserialize: deserialize_nitric_document_v1_DocumentQueryResponse
      },
      // Query the document collection (supports streaming)
      queryStream: {
        path: "/nitric.document.v1.DocumentService/QueryStream",
        requestStream: false,
        responseStream: true,
        requestType: proto_document_v1_document_pb.DocumentQueryStreamRequest,
        responseType: proto_document_v1_document_pb.DocumentQueryStreamResponse,
        requestSerialize: serialize_nitric_document_v1_DocumentQueryStreamRequest,
        requestDeserialize: deserialize_nitric_document_v1_DocumentQueryStreamRequest,
        responseSerialize: serialize_nitric_document_v1_DocumentQueryStreamResponse,
        responseDeserialize: deserialize_nitric_document_v1_DocumentQueryStreamResponse
      }
    };
    exports.DocumentServiceClient = grpc8.makeGenericClientConstructor(DocumentServiceService);
  }
});

// src/gen/proto/queue/v1/queue_pb.js
var require_queue_pb = __commonJS({
  "src/gen/proto/queue/v1/queue_pb.js"(exports) {
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
    var validate_validate_pb = require_validate_pb();
    goog.object.extend(proto, validate_validate_pb);
    goog.exportSymbol("proto.nitric.queue.v1.FailedTask", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.NitricTask", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueCompleteRequest", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueCompleteResponse", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueReceiveRequest", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueReceiveResponse", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueSendBatchRequest", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueSendBatchResponse", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueSendRequest", null, global);
    goog.exportSymbol("proto.nitric.queue.v1.QueueSendResponse", null, global);
    proto.nitric.queue.v1.QueueSendRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueSendRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueSendRequest.displayName = "proto.nitric.queue.v1.QueueSendRequest";
    }
    proto.nitric.queue.v1.QueueSendResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueSendResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueSendResponse.displayName = "proto.nitric.queue.v1.QueueSendResponse";
    }
    proto.nitric.queue.v1.QueueSendBatchRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.queue.v1.QueueSendBatchRequest.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueSendBatchRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueSendBatchRequest.displayName = "proto.nitric.queue.v1.QueueSendBatchRequest";
    }
    proto.nitric.queue.v1.QueueSendBatchResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.queue.v1.QueueSendBatchResponse.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueSendBatchResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueSendBatchResponse.displayName = "proto.nitric.queue.v1.QueueSendBatchResponse";
    }
    proto.nitric.queue.v1.QueueReceiveRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueReceiveRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueReceiveRequest.displayName = "proto.nitric.queue.v1.QueueReceiveRequest";
    }
    proto.nitric.queue.v1.QueueReceiveResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.queue.v1.QueueReceiveResponse.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueReceiveResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueReceiveResponse.displayName = "proto.nitric.queue.v1.QueueReceiveResponse";
    }
    proto.nitric.queue.v1.QueueCompleteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueCompleteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueCompleteRequest.displayName = "proto.nitric.queue.v1.QueueCompleteRequest";
    }
    proto.nitric.queue.v1.QueueCompleteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.QueueCompleteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.QueueCompleteResponse.displayName = "proto.nitric.queue.v1.QueueCompleteResponse";
    }
    proto.nitric.queue.v1.FailedTask = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.FailedTask, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.FailedTask.displayName = "proto.nitric.queue.v1.FailedTask";
    }
    proto.nitric.queue.v1.NitricTask = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.queue.v1.NitricTask, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.queue.v1.NitricTask.displayName = "proto.nitric.queue.v1.NitricTask";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueSendRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueSendRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueSendRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          queue: jspb.Message.getFieldWithDefault(msg, 1, ""),
          task: (f = msg.getTask()) && proto.nitric.queue.v1.NitricTask.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueSendRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueSendRequest();
      return proto.nitric.queue.v1.QueueSendRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueSendRequest.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setQueue(value);
            break;
          case 2:
            var value = new proto.nitric.queue.v1.NitricTask();
            reader.readMessage(value, proto.nitric.queue.v1.NitricTask.deserializeBinaryFromReader);
            msg.setTask(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueSendRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueSendRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getQueue();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getTask();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.queue.v1.NitricTask.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.getQueue = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.setQueue = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.getTask = function() {
      return (
        /** @type{?proto.nitric.queue.v1.NitricTask} */
        jspb.Message.getWrapperField(this, proto.nitric.queue.v1.NitricTask, 2)
      );
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.setTask = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.clearTask = function() {
      return this.setTask(void 0);
    };
    proto.nitric.queue.v1.QueueSendRequest.prototype.hasTask = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueSendResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueSendResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueSendResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueSendResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueSendResponse();
      return proto.nitric.queue.v1.QueueSendResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueSendResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.queue.v1.QueueSendResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueSendResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueSendResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueSendBatchRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueSendBatchRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueSendBatchRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          queue: jspb.Message.getFieldWithDefault(msg, 1, ""),
          tasksList: jspb.Message.toObjectList(
            msg.getTasksList(),
            proto.nitric.queue.v1.NitricTask.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueSendBatchRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueSendBatchRequest();
      return proto.nitric.queue.v1.QueueSendBatchRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setQueue(value);
            break;
          case 2:
            var value = new proto.nitric.queue.v1.NitricTask();
            reader.readMessage(value, proto.nitric.queue.v1.NitricTask.deserializeBinaryFromReader);
            msg.addTasks(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueSendBatchRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getQueue();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getTasksList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.nitric.queue.v1.NitricTask.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.getQueue = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.setQueue = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.getTasksList = function() {
      return (
        /** @type{!Array<!proto.nitric.queue.v1.NitricTask>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.queue.v1.NitricTask, 2)
      );
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.setTasksList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.addTasks = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.nitric.queue.v1.NitricTask, opt_index);
    };
    proto.nitric.queue.v1.QueueSendBatchRequest.prototype.clearTasksList = function() {
      return this.setTasksList([]);
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueSendBatchResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueSendBatchResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueSendBatchResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          failedtasksList: jspb.Message.toObjectList(
            msg.getFailedtasksList(),
            proto.nitric.queue.v1.FailedTask.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueSendBatchResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueSendBatchResponse();
      return proto.nitric.queue.v1.QueueSendBatchResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.queue.v1.FailedTask();
            reader.readMessage(value, proto.nitric.queue.v1.FailedTask.deserializeBinaryFromReader);
            msg.addFailedtasks(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueSendBatchResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getFailedtasksList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.queue.v1.FailedTask.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.prototype.getFailedtasksList = function() {
      return (
        /** @type{!Array<!proto.nitric.queue.v1.FailedTask>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.queue.v1.FailedTask, 1)
      );
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.prototype.setFailedtasksList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.prototype.addFailedtasks = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.queue.v1.FailedTask, opt_index);
    };
    proto.nitric.queue.v1.QueueSendBatchResponse.prototype.clearFailedtasksList = function() {
      return this.setFailedtasksList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueReceiveRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueReceiveRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueReceiveRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          queue: jspb.Message.getFieldWithDefault(msg, 1, ""),
          depth: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueReceiveRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueReceiveRequest();
      return proto.nitric.queue.v1.QueueReceiveRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueReceiveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setQueue(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setDepth(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.QueueReceiveRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueReceiveRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueReceiveRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getQueue();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getDepth();
      if (f !== 0) {
        writer.writeInt32(
          2,
          f
        );
      }
    };
    proto.nitric.queue.v1.QueueReceiveRequest.prototype.getQueue = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.queue.v1.QueueReceiveRequest.prototype.setQueue = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.queue.v1.QueueReceiveRequest.prototype.getDepth = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.nitric.queue.v1.QueueReceiveRequest.prototype.setDepth = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.nitric.queue.v1.QueueReceiveResponse.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueReceiveResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueReceiveResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueReceiveResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          tasksList: jspb.Message.toObjectList(
            msg.getTasksList(),
            proto.nitric.queue.v1.NitricTask.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueReceiveResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueReceiveResponse();
      return proto.nitric.queue.v1.QueueReceiveResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueReceiveResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.queue.v1.NitricTask();
            reader.readMessage(value, proto.nitric.queue.v1.NitricTask.deserializeBinaryFromReader);
            msg.addTasks(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.QueueReceiveResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueReceiveResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueReceiveResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTasksList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.queue.v1.NitricTask.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.queue.v1.QueueReceiveResponse.prototype.getTasksList = function() {
      return (
        /** @type{!Array<!proto.nitric.queue.v1.NitricTask>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.queue.v1.NitricTask, 1)
      );
    };
    proto.nitric.queue.v1.QueueReceiveResponse.prototype.setTasksList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.queue.v1.QueueReceiveResponse.prototype.addTasks = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.queue.v1.NitricTask, opt_index);
    };
    proto.nitric.queue.v1.QueueReceiveResponse.prototype.clearTasksList = function() {
      return this.setTasksList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueCompleteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueCompleteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueCompleteRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          queue: jspb.Message.getFieldWithDefault(msg, 1, ""),
          leaseId: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueCompleteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueCompleteRequest();
      return proto.nitric.queue.v1.QueueCompleteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueCompleteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setQueue(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setLeaseId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.QueueCompleteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueCompleteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueCompleteRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getQueue();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getLeaseId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.queue.v1.QueueCompleteRequest.prototype.getQueue = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.queue.v1.QueueCompleteRequest.prototype.setQueue = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.queue.v1.QueueCompleteRequest.prototype.getLeaseId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.queue.v1.QueueCompleteRequest.prototype.setLeaseId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.QueueCompleteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.QueueCompleteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.QueueCompleteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.QueueCompleteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.QueueCompleteResponse();
      return proto.nitric.queue.v1.QueueCompleteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.QueueCompleteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.queue.v1.QueueCompleteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.QueueCompleteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.QueueCompleteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.FailedTask.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.FailedTask.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.FailedTask.toObject = function(includeInstance, msg) {
        var f, obj = {
          task: (f = msg.getTask()) && proto.nitric.queue.v1.NitricTask.toObject(includeInstance, f),
          message: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.FailedTask.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.FailedTask();
      return proto.nitric.queue.v1.FailedTask.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.FailedTask.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.queue.v1.NitricTask();
            reader.readMessage(value, proto.nitric.queue.v1.NitricTask.deserializeBinaryFromReader);
            msg.setTask(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.FailedTask.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.FailedTask.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.FailedTask.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTask();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.queue.v1.NitricTask.serializeBinaryToWriter
        );
      }
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.queue.v1.FailedTask.prototype.getTask = function() {
      return (
        /** @type{?proto.nitric.queue.v1.NitricTask} */
        jspb.Message.getWrapperField(this, proto.nitric.queue.v1.NitricTask, 1)
      );
    };
    proto.nitric.queue.v1.FailedTask.prototype.setTask = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.queue.v1.FailedTask.prototype.clearTask = function() {
      return this.setTask(void 0);
    };
    proto.nitric.queue.v1.FailedTask.prototype.hasTask = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.queue.v1.FailedTask.prototype.getMessage = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.queue.v1.FailedTask.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.queue.v1.NitricTask.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.queue.v1.NitricTask.toObject(opt_includeInstance, this);
      };
      proto.nitric.queue.v1.NitricTask.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          leaseId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          payloadType: jspb.Message.getFieldWithDefault(msg, 3, ""),
          payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.queue.v1.NitricTask.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.queue.v1.NitricTask();
      return proto.nitric.queue.v1.NitricTask.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.queue.v1.NitricTask.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setLeaseId(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setPayloadType(value);
            break;
          case 4:
            var value = new google_protobuf_struct_pb.Struct();
            reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
            msg.setPayload(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.queue.v1.NitricTask.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.queue.v1.NitricTask.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.queue.v1.NitricTask.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getLeaseId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getPayloadType();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = message.getPayload();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          google_protobuf_struct_pb.Struct.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.queue.v1.NitricTask.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.queue.v1.NitricTask.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.queue.v1.NitricTask.prototype.getLeaseId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.queue.v1.NitricTask.prototype.setLeaseId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.queue.v1.NitricTask.prototype.getPayloadType = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.queue.v1.NitricTask.prototype.setPayloadType = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.nitric.queue.v1.NitricTask.prototype.getPayload = function() {
      return (
        /** @type{?proto.google.protobuf.Struct} */
        jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4)
      );
    };
    proto.nitric.queue.v1.NitricTask.prototype.setPayload = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.nitric.queue.v1.NitricTask.prototype.clearPayload = function() {
      return this.setPayload(void 0);
    };
    proto.nitric.queue.v1.NitricTask.prototype.hasPayload = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    goog.object.extend(exports, proto.nitric.queue.v1);
  }
});

// src/gen/proto/queue/v1/queue_grpc_pb.js
var require_queue_grpc_pb = __commonJS({
  "src/gen/proto/queue/v1/queue_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_queue_v1_queue_pb = require_queue_pb();
    var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");
    var validate_validate_pb = require_validate_pb();
    function serialize_nitric_queue_v1_QueueCompleteRequest(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueCompleteRequest)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueCompleteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueCompleteRequest(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueCompleteResponse(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueCompleteResponse)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueCompleteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueCompleteResponse(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueCompleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueReceiveRequest(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueReceiveRequest)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueReceiveRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueReceiveRequest(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueReceiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueReceiveResponse(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueReceiveResponse)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueReceiveResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueReceiveResponse(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueReceiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueSendBatchRequest(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendBatchRequest)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueSendBatchRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueSendBatchRequest(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueSendBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueSendBatchResponse(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendBatchResponse)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueSendBatchResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueSendBatchResponse(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueSendBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueSendRequest(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendRequest)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueSendRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueSendRequest(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_queue_v1_QueueSendResponse(arg) {
      if (!(arg instanceof proto_queue_v1_queue_pb.QueueSendResponse)) {
        throw new Error("Expected argument of type nitric.queue.v1.QueueSendResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_queue_v1_QueueSendResponse(buffer_arg) {
      return proto_queue_v1_queue_pb.QueueSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var QueueServiceService = exports.QueueServiceService = {
      // Send a single event to a queue
      send: {
        path: "/nitric.queue.v1.QueueService/Send",
        requestStream: false,
        responseStream: false,
        requestType: proto_queue_v1_queue_pb.QueueSendRequest,
        responseType: proto_queue_v1_queue_pb.QueueSendResponse,
        requestSerialize: serialize_nitric_queue_v1_QueueSendRequest,
        requestDeserialize: deserialize_nitric_queue_v1_QueueSendRequest,
        responseSerialize: serialize_nitric_queue_v1_QueueSendResponse,
        responseDeserialize: deserialize_nitric_queue_v1_QueueSendResponse
      },
      // Send multiple events to a queue
      sendBatch: {
        path: "/nitric.queue.v1.QueueService/SendBatch",
        requestStream: false,
        responseStream: false,
        requestType: proto_queue_v1_queue_pb.QueueSendBatchRequest,
        responseType: proto_queue_v1_queue_pb.QueueSendBatchResponse,
        requestSerialize: serialize_nitric_queue_v1_QueueSendBatchRequest,
        requestDeserialize: deserialize_nitric_queue_v1_QueueSendBatchRequest,
        responseSerialize: serialize_nitric_queue_v1_QueueSendBatchResponse,
        responseDeserialize: deserialize_nitric_queue_v1_QueueSendBatchResponse
      },
      // Receive event(s) off a queue
      receive: {
        path: "/nitric.queue.v1.QueueService/Receive",
        requestStream: false,
        responseStream: false,
        requestType: proto_queue_v1_queue_pb.QueueReceiveRequest,
        responseType: proto_queue_v1_queue_pb.QueueReceiveResponse,
        requestSerialize: serialize_nitric_queue_v1_QueueReceiveRequest,
        requestDeserialize: deserialize_nitric_queue_v1_QueueReceiveRequest,
        responseSerialize: serialize_nitric_queue_v1_QueueReceiveResponse,
        responseDeserialize: deserialize_nitric_queue_v1_QueueReceiveResponse
      },
      // Complete an event previously popped from a queue
      complete: {
        path: "/nitric.queue.v1.QueueService/Complete",
        requestStream: false,
        responseStream: false,
        requestType: proto_queue_v1_queue_pb.QueueCompleteRequest,
        responseType: proto_queue_v1_queue_pb.QueueCompleteResponse,
        requestSerialize: serialize_nitric_queue_v1_QueueCompleteRequest,
        requestDeserialize: deserialize_nitric_queue_v1_QueueCompleteRequest,
        responseSerialize: serialize_nitric_queue_v1_QueueCompleteResponse,
        responseDeserialize: deserialize_nitric_queue_v1_QueueCompleteResponse
      }
    };
    exports.QueueServiceClient = grpc8.makeGenericClientConstructor(QueueServiceService);
  }
});

// src/gen/proto/storage/v1/storage_pb.js
var require_storage_pb = __commonJS({
  "src/gen/proto/storage/v1/storage_pb.js"(exports) {
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
    var validate_validate_pb = require_validate_pb();
    goog.object.extend(proto, validate_validate_pb);
    goog.exportSymbol("proto.nitric.storage.v1.File", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageDeleteRequest", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageDeleteResponse", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageListFilesRequest", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageListFilesResponse", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StoragePreSignUrlRequest", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StoragePreSignUrlRequest.Operation", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StoragePreSignUrlResponse", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageReadRequest", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageReadResponse", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageWriteRequest", null, global);
    goog.exportSymbol("proto.nitric.storage.v1.StorageWriteResponse", null, global);
    proto.nitric.storage.v1.StorageWriteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageWriteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageWriteRequest.displayName = "proto.nitric.storage.v1.StorageWriteRequest";
    }
    proto.nitric.storage.v1.StorageWriteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageWriteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageWriteResponse.displayName = "proto.nitric.storage.v1.StorageWriteResponse";
    }
    proto.nitric.storage.v1.StorageReadRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageReadRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageReadRequest.displayName = "proto.nitric.storage.v1.StorageReadRequest";
    }
    proto.nitric.storage.v1.StorageReadResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageReadResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageReadResponse.displayName = "proto.nitric.storage.v1.StorageReadResponse";
    }
    proto.nitric.storage.v1.StorageDeleteRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageDeleteRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageDeleteRequest.displayName = "proto.nitric.storage.v1.StorageDeleteRequest";
    }
    proto.nitric.storage.v1.StorageDeleteResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageDeleteResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageDeleteResponse.displayName = "proto.nitric.storage.v1.StorageDeleteResponse";
    }
    proto.nitric.storage.v1.StoragePreSignUrlRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StoragePreSignUrlRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StoragePreSignUrlRequest.displayName = "proto.nitric.storage.v1.StoragePreSignUrlRequest";
    }
    proto.nitric.storage.v1.StoragePreSignUrlResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StoragePreSignUrlResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StoragePreSignUrlResponse.displayName = "proto.nitric.storage.v1.StoragePreSignUrlResponse";
    }
    proto.nitric.storage.v1.StorageListFilesRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageListFilesRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageListFilesRequest.displayName = "proto.nitric.storage.v1.StorageListFilesRequest";
    }
    proto.nitric.storage.v1.File = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.storage.v1.File, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.File.displayName = "proto.nitric.storage.v1.File";
    }
    proto.nitric.storage.v1.StorageListFilesResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.storage.v1.StorageListFilesResponse.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.storage.v1.StorageListFilesResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.storage.v1.StorageListFilesResponse.displayName = "proto.nitric.storage.v1.StorageListFilesResponse";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageWriteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageWriteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageWriteRequest.toObject = function(includeInstance, msg) {
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
    proto.nitric.storage.v1.StorageWriteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageWriteRequest();
      return proto.nitric.storage.v1.StorageWriteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageWriteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StorageWriteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageWriteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageWriteRequest.serializeBinaryToWriter = function(message, writer) {
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
    proto.nitric.storage.v1.StorageWriteRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.storage.v1.StorageWriteRequest.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageWriteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageWriteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageWriteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StorageWriteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageWriteResponse();
      return proto.nitric.storage.v1.StorageWriteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageWriteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StorageWriteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageWriteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageWriteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageReadRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageReadRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageReadRequest.toObject = function(includeInstance, msg) {
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
    proto.nitric.storage.v1.StorageReadRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageReadRequest();
      return proto.nitric.storage.v1.StorageReadRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageReadRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StorageReadRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageReadRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageReadRequest.serializeBinaryToWriter = function(message, writer) {
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
    proto.nitric.storage.v1.StorageReadRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StorageReadRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.storage.v1.StorageReadRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.storage.v1.StorageReadRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageReadResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageReadResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageReadResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          body: msg.getBody_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StorageReadResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageReadResponse();
      return proto.nitric.storage.v1.StorageReadResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageReadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StorageReadResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageReadResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageReadResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBody_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          1,
          f
        );
      }
    };
    proto.nitric.storage.v1.StorageReadResponse.prototype.getBody = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StorageReadResponse.prototype.getBody_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getBody()
        )
      );
    };
    proto.nitric.storage.v1.StorageReadResponse.prototype.getBody_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getBody()
        )
      );
    };
    proto.nitric.storage.v1.StorageReadResponse.prototype.setBody = function(value) {
      return jspb.Message.setProto3BytesField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageDeleteRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageDeleteRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageDeleteRequest.toObject = function(includeInstance, msg) {
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
    proto.nitric.storage.v1.StorageDeleteRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageDeleteRequest();
      return proto.nitric.storage.v1.StorageDeleteRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StorageDeleteRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageDeleteRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageDeleteRequest.serializeBinaryToWriter = function(message, writer) {
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
    proto.nitric.storage.v1.StorageDeleteRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StorageDeleteRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.storage.v1.StorageDeleteRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.storage.v1.StorageDeleteRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageDeleteResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageDeleteResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageDeleteResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StorageDeleteResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageDeleteResponse();
      return proto.nitric.storage.v1.StorageDeleteResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StorageDeleteResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageDeleteResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageDeleteResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StoragePreSignUrlRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StoragePreSignUrlRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, ""),
          operation: jspb.Message.getFieldWithDefault(msg, 3, 0),
          expiry: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StoragePreSignUrlRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StoragePreSignUrlRequest();
      return proto.nitric.storage.v1.StoragePreSignUrlRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.deserializeBinaryFromReader = function(msg, reader) {
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
              /** @type {!proto.nitric.storage.v1.StoragePreSignUrlRequest.Operation} */
              reader.readEnum()
            );
            msg.setOperation(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readUint32()
            );
            msg.setExpiry(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StoragePreSignUrlRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.serializeBinaryToWriter = function(message, writer) {
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
      if (f !== 0) {
        writer.writeUint32(
          4,
          f
        );
      }
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.Operation = {
      READ: 0,
      WRITE: 1
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.getOperation = function() {
      return (
        /** @type {!proto.nitric.storage.v1.StoragePreSignUrlRequest.Operation} */
        jspb.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.setOperation = function(value) {
      return jspb.Message.setProto3EnumField(this, 3, value);
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.getExpiry = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.nitric.storage.v1.StoragePreSignUrlRequest.prototype.setExpiry = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StoragePreSignUrlResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StoragePreSignUrlResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StoragePreSignUrlResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          url: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StoragePreSignUrlResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StoragePreSignUrlResponse();
      return proto.nitric.storage.v1.StoragePreSignUrlResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StoragePreSignUrlResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.StoragePreSignUrlResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StoragePreSignUrlResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StoragePreSignUrlResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getUrl();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.storage.v1.StoragePreSignUrlResponse.prototype.getUrl = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StoragePreSignUrlResponse.prototype.setUrl = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageListFilesRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageListFilesRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageListFilesRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucketName: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StorageListFilesRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageListFilesRequest();
      return proto.nitric.storage.v1.StorageListFilesRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageListFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.storage.v1.StorageListFilesRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageListFilesRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageListFilesRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucketName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.storage.v1.StorageListFilesRequest.prototype.getBucketName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.StorageListFilesRequest.prototype.setBucketName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.File.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.File.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.File.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.File.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.File();
      return proto.nitric.storage.v1.File.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.File.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.storage.v1.File.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.File.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.File.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.storage.v1.File.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.storage.v1.File.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.storage.v1.StorageListFilesResponse.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.storage.v1.StorageListFilesResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.storage.v1.StorageListFilesResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.storage.v1.StorageListFilesResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          filesList: jspb.Message.toObjectList(
            msg.getFilesList(),
            proto.nitric.storage.v1.File.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.storage.v1.StorageListFilesResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.storage.v1.StorageListFilesResponse();
      return proto.nitric.storage.v1.StorageListFilesResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.storage.v1.StorageListFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.storage.v1.File();
            reader.readMessage(value, proto.nitric.storage.v1.File.deserializeBinaryFromReader);
            msg.addFiles(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.storage.v1.StorageListFilesResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.storage.v1.StorageListFilesResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.storage.v1.StorageListFilesResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getFilesList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.storage.v1.File.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.storage.v1.StorageListFilesResponse.prototype.getFilesList = function() {
      return (
        /** @type{!Array<!proto.nitric.storage.v1.File>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.storage.v1.File, 1)
      );
    };
    proto.nitric.storage.v1.StorageListFilesResponse.prototype.setFilesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.storage.v1.StorageListFilesResponse.prototype.addFiles = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.storage.v1.File, opt_index);
    };
    proto.nitric.storage.v1.StorageListFilesResponse.prototype.clearFilesList = function() {
      return this.setFilesList([]);
    };
    goog.object.extend(exports, proto.nitric.storage.v1);
  }
});

// src/gen/proto/storage/v1/storage_grpc_pb.js
var require_storage_grpc_pb = __commonJS({
  "src/gen/proto/storage/v1/storage_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_storage_v1_storage_pb = require_storage_pb();
    var validate_validate_pb = require_validate_pb();
    function serialize_nitric_storage_v1_StorageDeleteRequest(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageDeleteRequest)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageDeleteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageDeleteRequest(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageDeleteResponse(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageDeleteResponse)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageDeleteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageDeleteResponse(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageListFilesRequest(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageListFilesRequest)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageListFilesRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageListFilesRequest(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageListFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageListFilesResponse(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageListFilesResponse)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageListFilesResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageListFilesResponse(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageListFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StoragePreSignUrlRequest(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StoragePreSignUrlRequest)) {
        throw new Error("Expected argument of type nitric.storage.v1.StoragePreSignUrlRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StoragePreSignUrlRequest(buffer_arg) {
      return proto_storage_v1_storage_pb.StoragePreSignUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StoragePreSignUrlResponse(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StoragePreSignUrlResponse)) {
        throw new Error("Expected argument of type nitric.storage.v1.StoragePreSignUrlResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StoragePreSignUrlResponse(buffer_arg) {
      return proto_storage_v1_storage_pb.StoragePreSignUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageReadRequest(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageReadRequest)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageReadRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageReadRequest(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageReadResponse(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageReadResponse)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageReadResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageReadResponse(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageWriteRequest(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageWriteRequest)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageWriteRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageWriteRequest(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_storage_v1_StorageWriteResponse(arg) {
      if (!(arg instanceof proto_storage_v1_storage_pb.StorageWriteResponse)) {
        throw new Error("Expected argument of type nitric.storage.v1.StorageWriteResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_storage_v1_StorageWriteResponse(buffer_arg) {
      return proto_storage_v1_storage_pb.StorageWriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var StorageServiceService = exports.StorageServiceService = {
      // Retrieve an item from a bucket
      read: {
        path: "/nitric.storage.v1.StorageService/Read",
        requestStream: false,
        responseStream: false,
        requestType: proto_storage_v1_storage_pb.StorageReadRequest,
        responseType: proto_storage_v1_storage_pb.StorageReadResponse,
        requestSerialize: serialize_nitric_storage_v1_StorageReadRequest,
        requestDeserialize: deserialize_nitric_storage_v1_StorageReadRequest,
        responseSerialize: serialize_nitric_storage_v1_StorageReadResponse,
        responseDeserialize: deserialize_nitric_storage_v1_StorageReadResponse
      },
      // Store an item to a bucket
      write: {
        path: "/nitric.storage.v1.StorageService/Write",
        requestStream: false,
        responseStream: false,
        requestType: proto_storage_v1_storage_pb.StorageWriteRequest,
        responseType: proto_storage_v1_storage_pb.StorageWriteResponse,
        requestSerialize: serialize_nitric_storage_v1_StorageWriteRequest,
        requestDeserialize: deserialize_nitric_storage_v1_StorageWriteRequest,
        responseSerialize: serialize_nitric_storage_v1_StorageWriteResponse,
        responseDeserialize: deserialize_nitric_storage_v1_StorageWriteResponse
      },
      // Delete an item from a bucket
      delete: {
        path: "/nitric.storage.v1.StorageService/Delete",
        requestStream: false,
        responseStream: false,
        requestType: proto_storage_v1_storage_pb.StorageDeleteRequest,
        responseType: proto_storage_v1_storage_pb.StorageDeleteResponse,
        requestSerialize: serialize_nitric_storage_v1_StorageDeleteRequest,
        requestDeserialize: deserialize_nitric_storage_v1_StorageDeleteRequest,
        responseSerialize: serialize_nitric_storage_v1_StorageDeleteResponse,
        responseDeserialize: deserialize_nitric_storage_v1_StorageDeleteResponse
      },
      // Generate a pre-signed URL for direct operations on an item
      preSignUrl: {
        path: "/nitric.storage.v1.StorageService/PreSignUrl",
        requestStream: false,
        responseStream: false,
        requestType: proto_storage_v1_storage_pb.StoragePreSignUrlRequest,
        responseType: proto_storage_v1_storage_pb.StoragePreSignUrlResponse,
        requestSerialize: serialize_nitric_storage_v1_StoragePreSignUrlRequest,
        requestDeserialize: deserialize_nitric_storage_v1_StoragePreSignUrlRequest,
        responseSerialize: serialize_nitric_storage_v1_StoragePreSignUrlResponse,
        responseDeserialize: deserialize_nitric_storage_v1_StoragePreSignUrlResponse
      },
      // List files currently in the bucket
      listFiles: {
        path: "/nitric.storage.v1.StorageService/ListFiles",
        requestStream: false,
        responseStream: false,
        requestType: proto_storage_v1_storage_pb.StorageListFilesRequest,
        responseType: proto_storage_v1_storage_pb.StorageListFilesResponse,
        requestSerialize: serialize_nitric_storage_v1_StorageListFilesRequest,
        requestDeserialize: deserialize_nitric_storage_v1_StorageListFilesRequest,
        responseSerialize: serialize_nitric_storage_v1_StorageListFilesResponse,
        responseDeserialize: deserialize_nitric_storage_v1_StorageListFilesResponse
      }
    };
    exports.StorageServiceClient = grpc8.makeGenericClientConstructor(StorageServiceService);
  }
});

// src/gen/proto/secret/v1/secret_pb.js
var require_secret_pb = __commonJS({
  "src/gen/proto/secret/v1/secret_pb.js"(exports) {
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
    var validate_validate_pb = require_validate_pb();
    goog.object.extend(proto, validate_validate_pb);
    goog.exportSymbol("proto.nitric.secret.v1.Secret", null, global);
    goog.exportSymbol("proto.nitric.secret.v1.SecretAccessRequest", null, global);
    goog.exportSymbol("proto.nitric.secret.v1.SecretAccessResponse", null, global);
    goog.exportSymbol("proto.nitric.secret.v1.SecretPutRequest", null, global);
    goog.exportSymbol("proto.nitric.secret.v1.SecretPutResponse", null, global);
    goog.exportSymbol("proto.nitric.secret.v1.SecretVersion", null, global);
    proto.nitric.secret.v1.SecretPutRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.secret.v1.SecretPutRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.secret.v1.SecretPutRequest.displayName = "proto.nitric.secret.v1.SecretPutRequest";
    }
    proto.nitric.secret.v1.SecretPutResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.secret.v1.SecretPutResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.secret.v1.SecretPutResponse.displayName = "proto.nitric.secret.v1.SecretPutResponse";
    }
    proto.nitric.secret.v1.SecretAccessRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.secret.v1.SecretAccessRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.secret.v1.SecretAccessRequest.displayName = "proto.nitric.secret.v1.SecretAccessRequest";
    }
    proto.nitric.secret.v1.SecretAccessResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.secret.v1.SecretAccessResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.secret.v1.SecretAccessResponse.displayName = "proto.nitric.secret.v1.SecretAccessResponse";
    }
    proto.nitric.secret.v1.Secret = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.secret.v1.Secret, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.secret.v1.Secret.displayName = "proto.nitric.secret.v1.Secret";
    }
    proto.nitric.secret.v1.SecretVersion = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.secret.v1.SecretVersion, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.secret.v1.SecretVersion.displayName = "proto.nitric.secret.v1.SecretVersion";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.secret.v1.SecretPutRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.secret.v1.SecretPutRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.secret.v1.SecretPutRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          secret: (f = msg.getSecret()) && proto.nitric.secret.v1.Secret.toObject(includeInstance, f),
          value: msg.getValue_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.secret.v1.SecretPutRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.secret.v1.SecretPutRequest();
      return proto.nitric.secret.v1.SecretPutRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.secret.v1.SecretPutRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.secret.v1.Secret();
            reader.readMessage(value, proto.nitric.secret.v1.Secret.deserializeBinaryFromReader);
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
    proto.nitric.secret.v1.SecretPutRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.secret.v1.SecretPutRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.secret.v1.SecretPutRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecret();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.secret.v1.Secret.serializeBinaryToWriter
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
    proto.nitric.secret.v1.SecretPutRequest.prototype.getSecret = function() {
      return (
        /** @type{?proto.nitric.secret.v1.Secret} */
        jspb.Message.getWrapperField(this, proto.nitric.secret.v1.Secret, 1)
      );
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.setSecret = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.clearSecret = function() {
      return this.setSecret(void 0);
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.hasSecret = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.getValue = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.getValue_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getValue()
        )
      );
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.getValue_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getValue()
        )
      );
    };
    proto.nitric.secret.v1.SecretPutRequest.prototype.setValue = function(value) {
      return jspb.Message.setProto3BytesField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.secret.v1.SecretPutResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.secret.v1.SecretPutResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.secret.v1.SecretPutResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          secretVersion: (f = msg.getSecretVersion()) && proto.nitric.secret.v1.SecretVersion.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.secret.v1.SecretPutResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.secret.v1.SecretPutResponse();
      return proto.nitric.secret.v1.SecretPutResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.secret.v1.SecretPutResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.secret.v1.SecretVersion();
            reader.readMessage(value, proto.nitric.secret.v1.SecretVersion.deserializeBinaryFromReader);
            msg.setSecretVersion(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.secret.v1.SecretPutResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.secret.v1.SecretPutResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.secret.v1.SecretPutResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecretVersion();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.secret.v1.SecretVersion.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.secret.v1.SecretPutResponse.prototype.getSecretVersion = function() {
      return (
        /** @type{?proto.nitric.secret.v1.SecretVersion} */
        jspb.Message.getWrapperField(this, proto.nitric.secret.v1.SecretVersion, 1)
      );
    };
    proto.nitric.secret.v1.SecretPutResponse.prototype.setSecretVersion = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.secret.v1.SecretPutResponse.prototype.clearSecretVersion = function() {
      return this.setSecretVersion(void 0);
    };
    proto.nitric.secret.v1.SecretPutResponse.prototype.hasSecretVersion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.secret.v1.SecretAccessRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.secret.v1.SecretAccessRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.secret.v1.SecretAccessRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          secretVersion: (f = msg.getSecretVersion()) && proto.nitric.secret.v1.SecretVersion.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.secret.v1.SecretAccessRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.secret.v1.SecretAccessRequest();
      return proto.nitric.secret.v1.SecretAccessRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.secret.v1.SecretAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.secret.v1.SecretVersion();
            reader.readMessage(value, proto.nitric.secret.v1.SecretVersion.deserializeBinaryFromReader);
            msg.setSecretVersion(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.secret.v1.SecretAccessRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.secret.v1.SecretAccessRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.secret.v1.SecretAccessRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecretVersion();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.secret.v1.SecretVersion.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.secret.v1.SecretAccessRequest.prototype.getSecretVersion = function() {
      return (
        /** @type{?proto.nitric.secret.v1.SecretVersion} */
        jspb.Message.getWrapperField(this, proto.nitric.secret.v1.SecretVersion, 1)
      );
    };
    proto.nitric.secret.v1.SecretAccessRequest.prototype.setSecretVersion = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.secret.v1.SecretAccessRequest.prototype.clearSecretVersion = function() {
      return this.setSecretVersion(void 0);
    };
    proto.nitric.secret.v1.SecretAccessRequest.prototype.hasSecretVersion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.secret.v1.SecretAccessResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.secret.v1.SecretAccessResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.secret.v1.SecretAccessResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          secretVersion: (f = msg.getSecretVersion()) && proto.nitric.secret.v1.SecretVersion.toObject(includeInstance, f),
          value: msg.getValue_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.secret.v1.SecretAccessResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.secret.v1.SecretAccessResponse();
      return proto.nitric.secret.v1.SecretAccessResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.secret.v1.SecretAccessResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.secret.v1.SecretVersion();
            reader.readMessage(value, proto.nitric.secret.v1.SecretVersion.deserializeBinaryFromReader);
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
    proto.nitric.secret.v1.SecretAccessResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.secret.v1.SecretAccessResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.secret.v1.SecretAccessResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecretVersion();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.secret.v1.SecretVersion.serializeBinaryToWriter
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
    proto.nitric.secret.v1.SecretAccessResponse.prototype.getSecretVersion = function() {
      return (
        /** @type{?proto.nitric.secret.v1.SecretVersion} */
        jspb.Message.getWrapperField(this, proto.nitric.secret.v1.SecretVersion, 1)
      );
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.setSecretVersion = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.clearSecretVersion = function() {
      return this.setSecretVersion(void 0);
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.hasSecretVersion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.getValue = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.getValue_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getValue()
        )
      );
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.getValue_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getValue()
        )
      );
    };
    proto.nitric.secret.v1.SecretAccessResponse.prototype.setValue = function(value) {
      return jspb.Message.setProto3BytesField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.secret.v1.Secret.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.secret.v1.Secret.toObject(opt_includeInstance, this);
      };
      proto.nitric.secret.v1.Secret.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.secret.v1.Secret.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.secret.v1.Secret();
      return proto.nitric.secret.v1.Secret.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.secret.v1.Secret.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.secret.v1.Secret.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.secret.v1.Secret.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.secret.v1.Secret.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.secret.v1.Secret.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.secret.v1.Secret.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.secret.v1.SecretVersion.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.secret.v1.SecretVersion.toObject(opt_includeInstance, this);
      };
      proto.nitric.secret.v1.SecretVersion.toObject = function(includeInstance, msg) {
        var f, obj = {
          secret: (f = msg.getSecret()) && proto.nitric.secret.v1.Secret.toObject(includeInstance, f),
          version: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.secret.v1.SecretVersion.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.secret.v1.SecretVersion();
      return proto.nitric.secret.v1.SecretVersion.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.secret.v1.SecretVersion.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.secret.v1.Secret();
            reader.readMessage(value, proto.nitric.secret.v1.Secret.deserializeBinaryFromReader);
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
    proto.nitric.secret.v1.SecretVersion.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.secret.v1.SecretVersion.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.secret.v1.SecretVersion.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecret();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.secret.v1.Secret.serializeBinaryToWriter
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
    proto.nitric.secret.v1.SecretVersion.prototype.getSecret = function() {
      return (
        /** @type{?proto.nitric.secret.v1.Secret} */
        jspb.Message.getWrapperField(this, proto.nitric.secret.v1.Secret, 1)
      );
    };
    proto.nitric.secret.v1.SecretVersion.prototype.setSecret = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.secret.v1.SecretVersion.prototype.clearSecret = function() {
      return this.setSecret(void 0);
    };
    proto.nitric.secret.v1.SecretVersion.prototype.hasSecret = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.secret.v1.SecretVersion.prototype.getVersion = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.secret.v1.SecretVersion.prototype.setVersion = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    goog.object.extend(exports, proto.nitric.secret.v1);
  }
});

// src/gen/proto/secret/v1/secret_grpc_pb.js
var require_secret_grpc_pb = __commonJS({
  "src/gen/proto/secret/v1/secret_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_secret_v1_secret_pb = require_secret_pb();
    var validate_validate_pb = require_validate_pb();
    function serialize_nitric_secret_v1_SecretAccessRequest(arg) {
      if (!(arg instanceof proto_secret_v1_secret_pb.SecretAccessRequest)) {
        throw new Error("Expected argument of type nitric.secret.v1.SecretAccessRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_secret_v1_SecretAccessRequest(buffer_arg) {
      return proto_secret_v1_secret_pb.SecretAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_secret_v1_SecretAccessResponse(arg) {
      if (!(arg instanceof proto_secret_v1_secret_pb.SecretAccessResponse)) {
        throw new Error("Expected argument of type nitric.secret.v1.SecretAccessResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_secret_v1_SecretAccessResponse(buffer_arg) {
      return proto_secret_v1_secret_pb.SecretAccessResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_secret_v1_SecretPutRequest(arg) {
      if (!(arg instanceof proto_secret_v1_secret_pb.SecretPutRequest)) {
        throw new Error("Expected argument of type nitric.secret.v1.SecretPutRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_secret_v1_SecretPutRequest(buffer_arg) {
      return proto_secret_v1_secret_pb.SecretPutRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_secret_v1_SecretPutResponse(arg) {
      if (!(arg instanceof proto_secret_v1_secret_pb.SecretPutResponse)) {
        throw new Error("Expected argument of type nitric.secret.v1.SecretPutResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_secret_v1_SecretPutResponse(buffer_arg) {
      return proto_secret_v1_secret_pb.SecretPutResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var SecretServiceService = exports.SecretServiceService = {
      // Updates a secret, creating a new one if it doesn't already exist
      put: {
        path: "/nitric.secret.v1.SecretService/Put",
        requestStream: false,
        responseStream: false,
        requestType: proto_secret_v1_secret_pb.SecretPutRequest,
        responseType: proto_secret_v1_secret_pb.SecretPutResponse,
        requestSerialize: serialize_nitric_secret_v1_SecretPutRequest,
        requestDeserialize: deserialize_nitric_secret_v1_SecretPutRequest,
        responseSerialize: serialize_nitric_secret_v1_SecretPutResponse,
        responseDeserialize: deserialize_nitric_secret_v1_SecretPutResponse
      },
      // Gets a secret from a Secret Store
      access: {
        path: "/nitric.secret.v1.SecretService/Access",
        requestStream: false,
        responseStream: false,
        requestType: proto_secret_v1_secret_pb.SecretAccessRequest,
        responseType: proto_secret_v1_secret_pb.SecretAccessResponse,
        requestSerialize: serialize_nitric_secret_v1_SecretAccessRequest,
        requestDeserialize: deserialize_nitric_secret_v1_SecretAccessRequest,
        responseSerialize: serialize_nitric_secret_v1_SecretAccessResponse,
        responseDeserialize: deserialize_nitric_secret_v1_SecretAccessResponse
      }
    };
    exports.SecretServiceClient = grpc8.makeGenericClientConstructor(SecretServiceService);
  }
});

// src/gen/proto/faas/v1/faas_pb.js
var require_faas_pb = __commonJS({
  "src/gen/proto/faas/v1/faas_pb.js"(exports) {
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
    goog.exportSymbol("proto.nitric.faas.v1.ApiWorker", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ApiWorkerOptions", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ApiWorkerScopes", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.BucketNotificationConfig", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.BucketNotificationWorker", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ClientMessage", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ClientMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.EventType", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.HeaderValue", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.HttpResponseContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.HttpTriggerContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.InitRequest", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.InitRequest.WorkerCase", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.InitResponse", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.NotificationResponseContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.NotificationTriggerContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.NotificationType", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.QueryValue", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ScheduleCron", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ScheduleRate", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ScheduleWorker", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ScheduleWorker.CadenceCase", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ServerMessage", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.ServerMessage.ContentCase", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.SubscriptionWorker", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TopicResponseContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TopicTriggerContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TraceContext", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TriggerRequest", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TriggerRequest.ContextCase", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TriggerResponse", null, global);
    goog.exportSymbol("proto.nitric.faas.v1.TriggerResponse.ContextCase", null, global);
    proto.nitric.faas.v1.ClientMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.faas.v1.ClientMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.faas.v1.ClientMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ClientMessage.displayName = "proto.nitric.faas.v1.ClientMessage";
    }
    proto.nitric.faas.v1.ServerMessage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.faas.v1.ServerMessage.oneofGroups_);
    };
    goog.inherits(proto.nitric.faas.v1.ServerMessage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ServerMessage.displayName = "proto.nitric.faas.v1.ServerMessage";
    }
    proto.nitric.faas.v1.ApiWorkerScopes = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.faas.v1.ApiWorkerScopes.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.faas.v1.ApiWorkerScopes, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ApiWorkerScopes.displayName = "proto.nitric.faas.v1.ApiWorkerScopes";
    }
    proto.nitric.faas.v1.ApiWorkerOptions = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.ApiWorkerOptions, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ApiWorkerOptions.displayName = "proto.nitric.faas.v1.ApiWorkerOptions";
    }
    proto.nitric.faas.v1.ApiWorker = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.faas.v1.ApiWorker.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.faas.v1.ApiWorker, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ApiWorker.displayName = "proto.nitric.faas.v1.ApiWorker";
    }
    proto.nitric.faas.v1.SubscriptionWorker = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.SubscriptionWorker, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.SubscriptionWorker.displayName = "proto.nitric.faas.v1.SubscriptionWorker";
    }
    proto.nitric.faas.v1.ScheduleWorker = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.faas.v1.ScheduleWorker.oneofGroups_);
    };
    goog.inherits(proto.nitric.faas.v1.ScheduleWorker, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ScheduleWorker.displayName = "proto.nitric.faas.v1.ScheduleWorker";
    }
    proto.nitric.faas.v1.ScheduleRate = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.ScheduleRate, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ScheduleRate.displayName = "proto.nitric.faas.v1.ScheduleRate";
    }
    proto.nitric.faas.v1.ScheduleCron = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.ScheduleCron, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.ScheduleCron.displayName = "proto.nitric.faas.v1.ScheduleCron";
    }
    proto.nitric.faas.v1.BucketNotificationWorker = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.BucketNotificationWorker, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.BucketNotificationWorker.displayName = "proto.nitric.faas.v1.BucketNotificationWorker";
    }
    proto.nitric.faas.v1.BucketNotificationConfig = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.BucketNotificationConfig, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.BucketNotificationConfig.displayName = "proto.nitric.faas.v1.BucketNotificationConfig";
    }
    proto.nitric.faas.v1.InitRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.faas.v1.InitRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.faas.v1.InitRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.InitRequest.displayName = "proto.nitric.faas.v1.InitRequest";
    }
    proto.nitric.faas.v1.InitResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.InitResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.InitResponse.displayName = "proto.nitric.faas.v1.InitResponse";
    }
    proto.nitric.faas.v1.TraceContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.TraceContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.TraceContext.displayName = "proto.nitric.faas.v1.TraceContext";
    }
    proto.nitric.faas.v1.TriggerRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.faas.v1.TriggerRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.faas.v1.TriggerRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.TriggerRequest.displayName = "proto.nitric.faas.v1.TriggerRequest";
    }
    proto.nitric.faas.v1.HeaderValue = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.faas.v1.HeaderValue.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.faas.v1.HeaderValue, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.HeaderValue.displayName = "proto.nitric.faas.v1.HeaderValue";
    }
    proto.nitric.faas.v1.QueryValue = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.faas.v1.QueryValue.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.faas.v1.QueryValue, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.QueryValue.displayName = "proto.nitric.faas.v1.QueryValue";
    }
    proto.nitric.faas.v1.HttpTriggerContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.HttpTriggerContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.HttpTriggerContext.displayName = "proto.nitric.faas.v1.HttpTriggerContext";
    }
    proto.nitric.faas.v1.TopicTriggerContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.TopicTriggerContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.TopicTriggerContext.displayName = "proto.nitric.faas.v1.TopicTriggerContext";
    }
    proto.nitric.faas.v1.NotificationTriggerContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.NotificationTriggerContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.NotificationTriggerContext.displayName = "proto.nitric.faas.v1.NotificationTriggerContext";
    }
    proto.nitric.faas.v1.TriggerResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.faas.v1.TriggerResponse.oneofGroups_);
    };
    goog.inherits(proto.nitric.faas.v1.TriggerResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.TriggerResponse.displayName = "proto.nitric.faas.v1.TriggerResponse";
    }
    proto.nitric.faas.v1.HttpResponseContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.HttpResponseContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.HttpResponseContext.displayName = "proto.nitric.faas.v1.HttpResponseContext";
    }
    proto.nitric.faas.v1.TopicResponseContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.TopicResponseContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.TopicResponseContext.displayName = "proto.nitric.faas.v1.TopicResponseContext";
    }
    proto.nitric.faas.v1.NotificationResponseContext = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.faas.v1.NotificationResponseContext, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.faas.v1.NotificationResponseContext.displayName = "proto.nitric.faas.v1.NotificationResponseContext";
    }
    proto.nitric.faas.v1.ClientMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.faas.v1.ClientMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      INIT_REQUEST: 2,
      TRIGGER_RESPONSE: 3
    };
    proto.nitric.faas.v1.ClientMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.faas.v1.ClientMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.faas.v1.ClientMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ClientMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ClientMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ClientMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          initRequest: (f = msg.getInitRequest()) && proto.nitric.faas.v1.InitRequest.toObject(includeInstance, f),
          triggerResponse: (f = msg.getTriggerResponse()) && proto.nitric.faas.v1.TriggerResponse.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ClientMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ClientMessage();
      return proto.nitric.faas.v1.ClientMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = new proto.nitric.faas.v1.InitRequest();
            reader.readMessage(value, proto.nitric.faas.v1.InitRequest.deserializeBinaryFromReader);
            msg.setInitRequest(value);
            break;
          case 3:
            var value = new proto.nitric.faas.v1.TriggerResponse();
            reader.readMessage(value, proto.nitric.faas.v1.TriggerResponse.deserializeBinaryFromReader);
            msg.setTriggerResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.ClientMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ClientMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ClientMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getInitRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.faas.v1.InitRequest.serializeBinaryToWriter
        );
      }
      f = message.getTriggerResponse();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.faas.v1.TriggerResponse.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.ClientMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.ClientMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.ClientMessage.prototype.getInitRequest = function() {
      return (
        /** @type{?proto.nitric.faas.v1.InitRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.InitRequest, 2)
      );
    };
    proto.nitric.faas.v1.ClientMessage.prototype.setInitRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.faas.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.ClientMessage.prototype.clearInitRequest = function() {
      return this.setInitRequest(void 0);
    };
    proto.nitric.faas.v1.ClientMessage.prototype.hasInitRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.faas.v1.ClientMessage.prototype.getTriggerResponse = function() {
      return (
        /** @type{?proto.nitric.faas.v1.TriggerResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.TriggerResponse, 3)
      );
    };
    proto.nitric.faas.v1.ClientMessage.prototype.setTriggerResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.faas.v1.ClientMessage.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.ClientMessage.prototype.clearTriggerResponse = function() {
      return this.setTriggerResponse(void 0);
    };
    proto.nitric.faas.v1.ClientMessage.prototype.hasTriggerResponse = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.faas.v1.ServerMessage.oneofGroups_ = [[2, 3]];
    proto.nitric.faas.v1.ServerMessage.ContentCase = {
      CONTENT_NOT_SET: 0,
      INIT_RESPONSE: 2,
      TRIGGER_REQUEST: 3
    };
    proto.nitric.faas.v1.ServerMessage.prototype.getContentCase = function() {
      return (
        /** @type {proto.nitric.faas.v1.ServerMessage.ContentCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.faas.v1.ServerMessage.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ServerMessage.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ServerMessage.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ServerMessage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          initResponse: (f = msg.getInitResponse()) && proto.nitric.faas.v1.InitResponse.toObject(includeInstance, f),
          triggerRequest: (f = msg.getTriggerRequest()) && proto.nitric.faas.v1.TriggerRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ServerMessage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ServerMessage();
      return proto.nitric.faas.v1.ServerMessage.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = new proto.nitric.faas.v1.InitResponse();
            reader.readMessage(value, proto.nitric.faas.v1.InitResponse.deserializeBinaryFromReader);
            msg.setInitResponse(value);
            break;
          case 3:
            var value = new proto.nitric.faas.v1.TriggerRequest();
            reader.readMessage(value, proto.nitric.faas.v1.TriggerRequest.deserializeBinaryFromReader);
            msg.setTriggerRequest(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.ServerMessage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ServerMessage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ServerMessage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getInitResponse();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.faas.v1.InitResponse.serializeBinaryToWriter
        );
      }
      f = message.getTriggerRequest();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.faas.v1.TriggerRequest.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.ServerMessage.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.ServerMessage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.ServerMessage.prototype.getInitResponse = function() {
      return (
        /** @type{?proto.nitric.faas.v1.InitResponse} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.InitResponse, 2)
      );
    };
    proto.nitric.faas.v1.ServerMessage.prototype.setInitResponse = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.faas.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.ServerMessage.prototype.clearInitResponse = function() {
      return this.setInitResponse(void 0);
    };
    proto.nitric.faas.v1.ServerMessage.prototype.hasInitResponse = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.nitric.faas.v1.ServerMessage.prototype.getTriggerRequest = function() {
      return (
        /** @type{?proto.nitric.faas.v1.TriggerRequest} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.TriggerRequest, 3)
      );
    };
    proto.nitric.faas.v1.ServerMessage.prototype.setTriggerRequest = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.faas.v1.ServerMessage.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.ServerMessage.prototype.clearTriggerRequest = function() {
      return this.setTriggerRequest(void 0);
    };
    proto.nitric.faas.v1.ServerMessage.prototype.hasTriggerRequest = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.faas.v1.ApiWorkerScopes.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ApiWorkerScopes.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ApiWorkerScopes.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ApiWorkerScopes.toObject = function(includeInstance, msg) {
        var f, obj = {
          scopesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ApiWorkerScopes.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ApiWorkerScopes();
      return proto.nitric.faas.v1.ApiWorkerScopes.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ApiWorkerScopes.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.ApiWorkerScopes.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ApiWorkerScopes.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ApiWorkerScopes.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScopesList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.ApiWorkerScopes.prototype.getScopesList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.faas.v1.ApiWorkerScopes.prototype.setScopesList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.faas.v1.ApiWorkerScopes.prototype.addScopes = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.faas.v1.ApiWorkerScopes.prototype.clearScopesList = function() {
      return this.setScopesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ApiWorkerOptions.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ApiWorkerOptions.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ApiWorkerOptions.toObject = function(includeInstance, msg) {
        var f, obj = {
          securityMap: (f = msg.getSecurityMap()) ? f.toObject(includeInstance, proto.nitric.faas.v1.ApiWorkerScopes.toObject) : [],
          securityDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ApiWorkerOptions.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ApiWorkerOptions();
      return proto.nitric.faas.v1.ApiWorkerOptions.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ApiWorkerOptions.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getSecurityMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.faas.v1.ApiWorkerScopes.deserializeBinaryFromReader, "", new proto.nitric.faas.v1.ApiWorkerScopes());
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
    proto.nitric.faas.v1.ApiWorkerOptions.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ApiWorkerOptions.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ApiWorkerOptions.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecurityMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.faas.v1.ApiWorkerScopes.serializeBinaryToWriter);
      }
      f = message.getSecurityDisabled();
      if (f) {
        writer.writeBool(
          2,
          f
        );
      }
    };
    proto.nitric.faas.v1.ApiWorkerOptions.prototype.getSecurityMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.faas.v1.ApiWorkerScopes>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          proto.nitric.faas.v1.ApiWorkerScopes
        )
      );
    };
    proto.nitric.faas.v1.ApiWorkerOptions.prototype.clearSecurityMap = function() {
      this.getSecurityMap().clear();
      return this;
    };
    proto.nitric.faas.v1.ApiWorkerOptions.prototype.getSecurityDisabled = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 2, false)
      );
    };
    proto.nitric.faas.v1.ApiWorkerOptions.prototype.setSecurityDisabled = function(value) {
      return jspb.Message.setProto3BooleanField(this, 2, value);
    };
    proto.nitric.faas.v1.ApiWorker.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ApiWorker.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ApiWorker.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ApiWorker.toObject = function(includeInstance, msg) {
        var f, obj = {
          api: jspb.Message.getFieldWithDefault(msg, 1, ""),
          path: jspb.Message.getFieldWithDefault(msg, 2, ""),
          methodsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f,
          options: (f = msg.getOptions()) && proto.nitric.faas.v1.ApiWorkerOptions.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ApiWorker.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ApiWorker();
      return proto.nitric.faas.v1.ApiWorker.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ApiWorker.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = new proto.nitric.faas.v1.ApiWorkerOptions();
            reader.readMessage(value, proto.nitric.faas.v1.ApiWorkerOptions.deserializeBinaryFromReader);
            msg.setOptions(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.ApiWorker.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ApiWorker.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ApiWorker.serializeBinaryToWriter = function(message, writer) {
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
          proto.nitric.faas.v1.ApiWorkerOptions.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.ApiWorker.prototype.getApi = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.ApiWorker.prototype.setApi = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.getPath = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.faas.v1.ApiWorker.prototype.setPath = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.getMethodsList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 3)
      );
    };
    proto.nitric.faas.v1.ApiWorker.prototype.setMethodsList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.addMethods = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.clearMethodsList = function() {
      return this.setMethodsList([]);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.getOptions = function() {
      return (
        /** @type{?proto.nitric.faas.v1.ApiWorkerOptions} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.ApiWorkerOptions, 4)
      );
    };
    proto.nitric.faas.v1.ApiWorker.prototype.setOptions = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.clearOptions = function() {
      return this.setOptions(void 0);
    };
    proto.nitric.faas.v1.ApiWorker.prototype.hasOptions = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.SubscriptionWorker.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.SubscriptionWorker.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.SubscriptionWorker.toObject = function(includeInstance, msg) {
        var f, obj = {
          topic: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.SubscriptionWorker.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.SubscriptionWorker();
      return proto.nitric.faas.v1.SubscriptionWorker.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.SubscriptionWorker.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setTopic(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.SubscriptionWorker.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.SubscriptionWorker.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.SubscriptionWorker.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopic();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.SubscriptionWorker.prototype.getTopic = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.SubscriptionWorker.prototype.setTopic = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.ScheduleWorker.oneofGroups_ = [[10, 11]];
    proto.nitric.faas.v1.ScheduleWorker.CadenceCase = {
      CADENCE_NOT_SET: 0,
      RATE: 10,
      CRON: 11
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.getCadenceCase = function() {
      return (
        /** @type {proto.nitric.faas.v1.ScheduleWorker.CadenceCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.faas.v1.ScheduleWorker.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ScheduleWorker.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ScheduleWorker.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ScheduleWorker.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: jspb.Message.getFieldWithDefault(msg, 1, ""),
          rate: (f = msg.getRate()) && proto.nitric.faas.v1.ScheduleRate.toObject(includeInstance, f),
          cron: (f = msg.getCron()) && proto.nitric.faas.v1.ScheduleCron.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ScheduleWorker.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ScheduleWorker();
      return proto.nitric.faas.v1.ScheduleWorker.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ScheduleWorker.deserializeBinaryFromReader = function(msg, reader) {
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
          case 10:
            var value = new proto.nitric.faas.v1.ScheduleRate();
            reader.readMessage(value, proto.nitric.faas.v1.ScheduleRate.deserializeBinaryFromReader);
            msg.setRate(value);
            break;
          case 11:
            var value = new proto.nitric.faas.v1.ScheduleCron();
            reader.readMessage(value, proto.nitric.faas.v1.ScheduleCron.deserializeBinaryFromReader);
            msg.setCron(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ScheduleWorker.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ScheduleWorker.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRate();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.faas.v1.ScheduleRate.serializeBinaryToWriter
        );
      }
      f = message.getCron();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.faas.v1.ScheduleCron.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.getKey = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.getRate = function() {
      return (
        /** @type{?proto.nitric.faas.v1.ScheduleRate} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.ScheduleRate, 10)
      );
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.setRate = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.faas.v1.ScheduleWorker.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.clearRate = function() {
      return this.setRate(void 0);
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.hasRate = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.getCron = function() {
      return (
        /** @type{?proto.nitric.faas.v1.ScheduleCron} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.ScheduleCron, 11)
      );
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.setCron = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.faas.v1.ScheduleWorker.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.clearCron = function() {
      return this.setCron(void 0);
    };
    proto.nitric.faas.v1.ScheduleWorker.prototype.hasCron = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ScheduleRate.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ScheduleRate.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ScheduleRate.toObject = function(includeInstance, msg) {
        var f, obj = {
          rate: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ScheduleRate.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ScheduleRate();
      return proto.nitric.faas.v1.ScheduleRate.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ScheduleRate.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.ScheduleRate.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ScheduleRate.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ScheduleRate.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRate();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.ScheduleRate.prototype.getRate = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.ScheduleRate.prototype.setRate = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.ScheduleCron.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.ScheduleCron.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.ScheduleCron.toObject = function(includeInstance, msg) {
        var f, obj = {
          cron: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.ScheduleCron.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.ScheduleCron();
      return proto.nitric.faas.v1.ScheduleCron.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.ScheduleCron.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setCron(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.ScheduleCron.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.ScheduleCron.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.ScheduleCron.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getCron();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.ScheduleCron.prototype.getCron = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.ScheduleCron.prototype.setCron = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.BucketNotificationWorker.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.BucketNotificationWorker.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.BucketNotificationWorker.toObject = function(includeInstance, msg) {
        var f, obj = {
          bucket: jspb.Message.getFieldWithDefault(msg, 1, ""),
          config: (f = msg.getConfig()) && proto.nitric.faas.v1.BucketNotificationConfig.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.BucketNotificationWorker.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.BucketNotificationWorker();
      return proto.nitric.faas.v1.BucketNotificationWorker.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.BucketNotificationWorker.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setBucket(value);
            break;
          case 2:
            var value = new proto.nitric.faas.v1.BucketNotificationConfig();
            reader.readMessage(value, proto.nitric.faas.v1.BucketNotificationConfig.deserializeBinaryFromReader);
            msg.setConfig(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.BucketNotificationWorker.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.BucketNotificationWorker.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBucket();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getConfig();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.nitric.faas.v1.BucketNotificationConfig.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.getBucket = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.setBucket = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.getConfig = function() {
      return (
        /** @type{?proto.nitric.faas.v1.BucketNotificationConfig} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.BucketNotificationConfig, 2)
      );
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.setConfig = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.clearConfig = function() {
      return this.setConfig(void 0);
    };
    proto.nitric.faas.v1.BucketNotificationWorker.prototype.hasConfig = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.BucketNotificationConfig.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.BucketNotificationConfig.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.BucketNotificationConfig.toObject = function(includeInstance, msg) {
        var f, obj = {
          eventtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
          eventfilter: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.BucketNotificationConfig.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.BucketNotificationConfig();
      return proto.nitric.faas.v1.BucketNotificationConfig.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.BucketNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!proto.nitric.faas.v1.EventType} */
              reader.readEnum()
            );
            msg.setEventtype(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setEventfilter(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.BucketNotificationConfig.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.BucketNotificationConfig.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.BucketNotificationConfig.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getEventtype();
      if (f !== 0) {
        writer.writeEnum(
          1,
          f
        );
      }
      f = message.getEventfilter();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.nitric.faas.v1.BucketNotificationConfig.prototype.getEventtype = function() {
      return (
        /** @type {!proto.nitric.faas.v1.EventType} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.nitric.faas.v1.BucketNotificationConfig.prototype.setEventtype = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    proto.nitric.faas.v1.BucketNotificationConfig.prototype.getEventfilter = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.faas.v1.BucketNotificationConfig.prototype.setEventfilter = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.faas.v1.InitRequest.oneofGroups_ = [[10, 11, 12, 13]];
    proto.nitric.faas.v1.InitRequest.WorkerCase = {
      WORKER_NOT_SET: 0,
      API: 10,
      SUBSCRIPTION: 11,
      SCHEDULE: 12,
      BUCKETNOTIFICATION: 13
    };
    proto.nitric.faas.v1.InitRequest.prototype.getWorkerCase = function() {
      return (
        /** @type {proto.nitric.faas.v1.InitRequest.WorkerCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.faas.v1.InitRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.InitRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.InitRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.InitRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          api: (f = msg.getApi()) && proto.nitric.faas.v1.ApiWorker.toObject(includeInstance, f),
          subscription: (f = msg.getSubscription()) && proto.nitric.faas.v1.SubscriptionWorker.toObject(includeInstance, f),
          schedule: (f = msg.getSchedule()) && proto.nitric.faas.v1.ScheduleWorker.toObject(includeInstance, f),
          bucketnotification: (f = msg.getBucketnotification()) && proto.nitric.faas.v1.BucketNotificationWorker.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.InitRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.InitRequest();
      return proto.nitric.faas.v1.InitRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.InitRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 10:
            var value = new proto.nitric.faas.v1.ApiWorker();
            reader.readMessage(value, proto.nitric.faas.v1.ApiWorker.deserializeBinaryFromReader);
            msg.setApi(value);
            break;
          case 11:
            var value = new proto.nitric.faas.v1.SubscriptionWorker();
            reader.readMessage(value, proto.nitric.faas.v1.SubscriptionWorker.deserializeBinaryFromReader);
            msg.setSubscription(value);
            break;
          case 12:
            var value = new proto.nitric.faas.v1.ScheduleWorker();
            reader.readMessage(value, proto.nitric.faas.v1.ScheduleWorker.deserializeBinaryFromReader);
            msg.setSchedule(value);
            break;
          case 13:
            var value = new proto.nitric.faas.v1.BucketNotificationWorker();
            reader.readMessage(value, proto.nitric.faas.v1.BucketNotificationWorker.deserializeBinaryFromReader);
            msg.setBucketnotification(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.InitRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.InitRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.InitRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getApi();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.faas.v1.ApiWorker.serializeBinaryToWriter
        );
      }
      f = message.getSubscription();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.faas.v1.SubscriptionWorker.serializeBinaryToWriter
        );
      }
      f = message.getSchedule();
      if (f != null) {
        writer.writeMessage(
          12,
          f,
          proto.nitric.faas.v1.ScheduleWorker.serializeBinaryToWriter
        );
      }
      f = message.getBucketnotification();
      if (f != null) {
        writer.writeMessage(
          13,
          f,
          proto.nitric.faas.v1.BucketNotificationWorker.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.InitRequest.prototype.getApi = function() {
      return (
        /** @type{?proto.nitric.faas.v1.ApiWorker} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.ApiWorker, 10)
      );
    };
    proto.nitric.faas.v1.InitRequest.prototype.setApi = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.faas.v1.InitRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.InitRequest.prototype.clearApi = function() {
      return this.setApi(void 0);
    };
    proto.nitric.faas.v1.InitRequest.prototype.hasApi = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.faas.v1.InitRequest.prototype.getSubscription = function() {
      return (
        /** @type{?proto.nitric.faas.v1.SubscriptionWorker} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.SubscriptionWorker, 11)
      );
    };
    proto.nitric.faas.v1.InitRequest.prototype.setSubscription = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.faas.v1.InitRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.InitRequest.prototype.clearSubscription = function() {
      return this.setSubscription(void 0);
    };
    proto.nitric.faas.v1.InitRequest.prototype.hasSubscription = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.nitric.faas.v1.InitRequest.prototype.getSchedule = function() {
      return (
        /** @type{?proto.nitric.faas.v1.ScheduleWorker} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.ScheduleWorker, 12)
      );
    };
    proto.nitric.faas.v1.InitRequest.prototype.setSchedule = function(value) {
      return jspb.Message.setOneofWrapperField(this, 12, proto.nitric.faas.v1.InitRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.InitRequest.prototype.clearSchedule = function() {
      return this.setSchedule(void 0);
    };
    proto.nitric.faas.v1.InitRequest.prototype.hasSchedule = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.nitric.faas.v1.InitRequest.prototype.getBucketnotification = function() {
      return (
        /** @type{?proto.nitric.faas.v1.BucketNotificationWorker} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.BucketNotificationWorker, 13)
      );
    };
    proto.nitric.faas.v1.InitRequest.prototype.setBucketnotification = function(value) {
      return jspb.Message.setOneofWrapperField(this, 13, proto.nitric.faas.v1.InitRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.InitRequest.prototype.clearBucketnotification = function() {
      return this.setBucketnotification(void 0);
    };
    proto.nitric.faas.v1.InitRequest.prototype.hasBucketnotification = function() {
      return jspb.Message.getField(this, 13) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.InitResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.InitResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.InitResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.InitResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.InitResponse();
      return proto.nitric.faas.v1.InitResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.InitResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.InitResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.InitResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.InitResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.TraceContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.TraceContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.TraceContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, void 0) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.TraceContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.TraceContext();
      return proto.nitric.faas.v1.TraceContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.TraceContext.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getValuesMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.TraceContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.TraceContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.TraceContext.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValuesMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
    };
    proto.nitric.faas.v1.TraceContext.prototype.getValuesMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.faas.v1.TraceContext.prototype.clearValuesMap = function() {
      this.getValuesMap().clear();
      return this;
    };
    proto.nitric.faas.v1.TriggerRequest.oneofGroups_ = [[3, 4, 5]];
    proto.nitric.faas.v1.TriggerRequest.ContextCase = {
      CONTEXT_NOT_SET: 0,
      HTTP: 3,
      TOPIC: 4,
      NOTIFICATION: 5
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getContextCase = function() {
      return (
        /** @type {proto.nitric.faas.v1.TriggerRequest.ContextCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.faas.v1.TriggerRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.TriggerRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.TriggerRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.TriggerRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          data: msg.getData_asB64(),
          mimeType: jspb.Message.getFieldWithDefault(msg, 2, ""),
          traceContext: (f = msg.getTraceContext()) && proto.nitric.faas.v1.TraceContext.toObject(includeInstance, f),
          http: (f = msg.getHttp()) && proto.nitric.faas.v1.HttpTriggerContext.toObject(includeInstance, f),
          topic: (f = msg.getTopic()) && proto.nitric.faas.v1.TopicTriggerContext.toObject(includeInstance, f),
          notification: (f = msg.getNotification()) && proto.nitric.faas.v1.NotificationTriggerContext.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.TriggerRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.TriggerRequest();
      return proto.nitric.faas.v1.TriggerRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.TriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setData(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setMimeType(value);
            break;
          case 10:
            var value = new proto.nitric.faas.v1.TraceContext();
            reader.readMessage(value, proto.nitric.faas.v1.TraceContext.deserializeBinaryFromReader);
            msg.setTraceContext(value);
            break;
          case 3:
            var value = new proto.nitric.faas.v1.HttpTriggerContext();
            reader.readMessage(value, proto.nitric.faas.v1.HttpTriggerContext.deserializeBinaryFromReader);
            msg.setHttp(value);
            break;
          case 4:
            var value = new proto.nitric.faas.v1.TopicTriggerContext();
            reader.readMessage(value, proto.nitric.faas.v1.TopicTriggerContext.deserializeBinaryFromReader);
            msg.setTopic(value);
            break;
          case 5:
            var value = new proto.nitric.faas.v1.NotificationTriggerContext();
            reader.readMessage(value, proto.nitric.faas.v1.NotificationTriggerContext.deserializeBinaryFromReader);
            msg.setNotification(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.TriggerRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.TriggerRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getData_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          1,
          f
        );
      }
      f = message.getMimeType();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getTraceContext();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.faas.v1.TraceContext.serializeBinaryToWriter
        );
      }
      f = message.getHttp();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.nitric.faas.v1.HttpTriggerContext.serializeBinaryToWriter
        );
      }
      f = message.getTopic();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.nitric.faas.v1.TopicTriggerContext.serializeBinaryToWriter
        );
      }
      f = message.getNotification();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.nitric.faas.v1.NotificationTriggerContext.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getData = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getData_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getData()
        )
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getData_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getData()
        )
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.setData = function(value) {
      return jspb.Message.setProto3BytesField(this, 1, value);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getMimeType = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.setMimeType = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getTraceContext = function() {
      return (
        /** @type{?proto.nitric.faas.v1.TraceContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.TraceContext, 10)
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.setTraceContext = function(value) {
      return jspb.Message.setWrapperField(this, 10, value);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.clearTraceContext = function() {
      return this.setTraceContext(void 0);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.hasTraceContext = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getHttp = function() {
      return (
        /** @type{?proto.nitric.faas.v1.HttpTriggerContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.HttpTriggerContext, 3)
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.setHttp = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.faas.v1.TriggerRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.clearHttp = function() {
      return this.setHttp(void 0);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.hasHttp = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getTopic = function() {
      return (
        /** @type{?proto.nitric.faas.v1.TopicTriggerContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.TopicTriggerContext, 4)
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.setTopic = function(value) {
      return jspb.Message.setOneofWrapperField(this, 4, proto.nitric.faas.v1.TriggerRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.clearTopic = function() {
      return this.setTopic(void 0);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.hasTopic = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.getNotification = function() {
      return (
        /** @type{?proto.nitric.faas.v1.NotificationTriggerContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.NotificationTriggerContext, 5)
      );
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.setNotification = function(value) {
      return jspb.Message.setOneofWrapperField(this, 5, proto.nitric.faas.v1.TriggerRequest.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.clearNotification = function() {
      return this.setNotification(void 0);
    };
    proto.nitric.faas.v1.TriggerRequest.prototype.hasNotification = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.nitric.faas.v1.HeaderValue.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.HeaderValue.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.HeaderValue.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.HeaderValue.toObject = function(includeInstance, msg) {
        var f, obj = {
          valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.HeaderValue.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.HeaderValue();
      return proto.nitric.faas.v1.HeaderValue.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.HeaderValue.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.HeaderValue.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.HeaderValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.HeaderValue.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValueList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.HeaderValue.prototype.getValueList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.faas.v1.HeaderValue.prototype.setValueList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.faas.v1.HeaderValue.prototype.addValue = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.faas.v1.HeaderValue.prototype.clearValueList = function() {
      return this.setValueList([]);
    };
    proto.nitric.faas.v1.QueryValue.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.QueryValue.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.QueryValue.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.QueryValue.toObject = function(includeInstance, msg) {
        var f, obj = {
          valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.QueryValue.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.QueryValue();
      return proto.nitric.faas.v1.QueryValue.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.QueryValue.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.QueryValue.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.QueryValue.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.QueryValue.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getValueList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.QueryValue.prototype.getValueList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.faas.v1.QueryValue.prototype.setValueList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.faas.v1.QueryValue.prototype.addValue = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.faas.v1.QueryValue.prototype.clearValueList = function() {
      return this.setValueList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.HttpTriggerContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.HttpTriggerContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.HttpTriggerContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          method: jspb.Message.getFieldWithDefault(msg, 1, ""),
          path: jspb.Message.getFieldWithDefault(msg, 2, ""),
          headersOldMap: (f = msg.getHeadersOldMap()) ? f.toObject(includeInstance, void 0) : [],
          queryParamsOldMap: (f = msg.getQueryParamsOldMap()) ? f.toObject(includeInstance, void 0) : [],
          headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, proto.nitric.faas.v1.HeaderValue.toObject) : [],
          queryParamsMap: (f = msg.getQueryParamsMap()) ? f.toObject(includeInstance, proto.nitric.faas.v1.QueryValue.toObject) : [],
          pathParamsMap: (f = msg.getPathParamsMap()) ? f.toObject(includeInstance, void 0) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.HttpTriggerContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.HttpTriggerContext();
      return proto.nitric.faas.v1.HttpTriggerContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.HttpTriggerContext.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = msg.getHeadersOldMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          case 4:
            var value = msg.getQueryParamsOldMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          case 5:
            var value = msg.getHeadersMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.faas.v1.HeaderValue.deserializeBinaryFromReader, "", new proto.nitric.faas.v1.HeaderValue());
            });
            break;
          case 6:
            var value = msg.getQueryParamsMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.faas.v1.QueryValue.deserializeBinaryFromReader, "", new proto.nitric.faas.v1.QueryValue());
            });
            break;
          case 7:
            var value = msg.getPathParamsMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.HttpTriggerContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.HttpTriggerContext.serializeBinaryToWriter = function(message, writer) {
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
      f = message.getHeadersOldMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
      f = message.getQueryParamsOldMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
      f = message.getHeadersMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.faas.v1.HeaderValue.serializeBinaryToWriter);
      }
      f = message.getQueryParamsMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.faas.v1.QueryValue.serializeBinaryToWriter);
      }
      f = message.getPathParamsMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getMethod = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.setMethod = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getPath = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.setPath = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getHeadersOldMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          3,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.clearHeadersOldMap = function() {
      this.getHeadersOldMap().clear();
      return this;
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getQueryParamsOldMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          4,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.clearQueryParamsOldMap = function() {
      this.getQueryParamsOldMap().clear();
      return this;
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getHeadersMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.faas.v1.HeaderValue>} */
        jspb.Message.getMapField(
          this,
          5,
          opt_noLazyCreate,
          proto.nitric.faas.v1.HeaderValue
        )
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.clearHeadersMap = function() {
      this.getHeadersMap().clear();
      return this;
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getQueryParamsMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.faas.v1.QueryValue>} */
        jspb.Message.getMapField(
          this,
          6,
          opt_noLazyCreate,
          proto.nitric.faas.v1.QueryValue
        )
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.clearQueryParamsMap = function() {
      this.getQueryParamsMap().clear();
      return this;
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.getPathParamsMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          7,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.faas.v1.HttpTriggerContext.prototype.clearPathParamsMap = function() {
      this.getPathParamsMap().clear();
      return this;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.TopicTriggerContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.TopicTriggerContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.TopicTriggerContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          topic: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.TopicTriggerContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.TopicTriggerContext();
      return proto.nitric.faas.v1.TopicTriggerContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.TopicTriggerContext.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setTopic(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.TopicTriggerContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.TopicTriggerContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.TopicTriggerContext.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTopic();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.TopicTriggerContext.prototype.getTopic = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.TopicTriggerContext.prototype.setTopic = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.NotificationTriggerContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.NotificationTriggerContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.NotificationTriggerContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          type: jspb.Message.getFieldWithDefault(msg, 1, 0),
          resource: jspb.Message.getFieldWithDefault(msg, 2, ""),
          attributesMap: (f = msg.getAttributesMap()) ? f.toObject(includeInstance, void 0) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.NotificationTriggerContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.NotificationTriggerContext();
      return proto.nitric.faas.v1.NotificationTriggerContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.NotificationTriggerContext.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!proto.nitric.faas.v1.NotificationType} */
              reader.readEnum()
            );
            msg.setType(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setResource(value);
            break;
          case 3:
            var value = msg.getAttributesMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.NotificationTriggerContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.NotificationTriggerContext.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getType();
      if (f !== 0) {
        writer.writeEnum(
          1,
          f
        );
      }
      f = message.getResource();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getAttributesMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.getType = function() {
      return (
        /** @type {!proto.nitric.faas.v1.NotificationType} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.setType = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.getResource = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.setResource = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.getAttributesMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          3,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.faas.v1.NotificationTriggerContext.prototype.clearAttributesMap = function() {
      this.getAttributesMap().clear();
      return this;
    };
    proto.nitric.faas.v1.TriggerResponse.oneofGroups_ = [[10, 11, 12]];
    proto.nitric.faas.v1.TriggerResponse.ContextCase = {
      CONTEXT_NOT_SET: 0,
      HTTP: 10,
      TOPIC: 11,
      NOTIFICATION: 12
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getContextCase = function() {
      return (
        /** @type {proto.nitric.faas.v1.TriggerResponse.ContextCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.faas.v1.TriggerResponse.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.TriggerResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.TriggerResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.TriggerResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          data: msg.getData_asB64(),
          http: (f = msg.getHttp()) && proto.nitric.faas.v1.HttpResponseContext.toObject(includeInstance, f),
          topic: (f = msg.getTopic()) && proto.nitric.faas.v1.TopicResponseContext.toObject(includeInstance, f),
          notification: (f = msg.getNotification()) && proto.nitric.faas.v1.NotificationResponseContext.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.TriggerResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.TriggerResponse();
      return proto.nitric.faas.v1.TriggerResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.TriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setData(value);
            break;
          case 10:
            var value = new proto.nitric.faas.v1.HttpResponseContext();
            reader.readMessage(value, proto.nitric.faas.v1.HttpResponseContext.deserializeBinaryFromReader);
            msg.setHttp(value);
            break;
          case 11:
            var value = new proto.nitric.faas.v1.TopicResponseContext();
            reader.readMessage(value, proto.nitric.faas.v1.TopicResponseContext.deserializeBinaryFromReader);
            msg.setTopic(value);
            break;
          case 12:
            var value = new proto.nitric.faas.v1.NotificationResponseContext();
            reader.readMessage(value, proto.nitric.faas.v1.NotificationResponseContext.deserializeBinaryFromReader);
            msg.setNotification(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.TriggerResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.TriggerResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getData_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          1,
          f
        );
      }
      f = message.getHttp();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.faas.v1.HttpResponseContext.serializeBinaryToWriter
        );
      }
      f = message.getTopic();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.faas.v1.TopicResponseContext.serializeBinaryToWriter
        );
      }
      f = message.getNotification();
      if (f != null) {
        writer.writeMessage(
          12,
          f,
          proto.nitric.faas.v1.NotificationResponseContext.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getData = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getData_asB64 = function() {
      return (
        /** @type {string} */
        jspb.Message.bytesAsB64(
          this.getData()
        )
      );
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getData_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb.Message.bytesAsU8(
          this.getData()
        )
      );
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.setData = function(value) {
      return jspb.Message.setProto3BytesField(this, 1, value);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getHttp = function() {
      return (
        /** @type{?proto.nitric.faas.v1.HttpResponseContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.HttpResponseContext, 10)
      );
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.setHttp = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.faas.v1.TriggerResponse.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.clearHttp = function() {
      return this.setHttp(void 0);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.hasHttp = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getTopic = function() {
      return (
        /** @type{?proto.nitric.faas.v1.TopicResponseContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.TopicResponseContext, 11)
      );
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.setTopic = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.faas.v1.TriggerResponse.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.clearTopic = function() {
      return this.setTopic(void 0);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.hasTopic = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.getNotification = function() {
      return (
        /** @type{?proto.nitric.faas.v1.NotificationResponseContext} */
        jspb.Message.getWrapperField(this, proto.nitric.faas.v1.NotificationResponseContext, 12)
      );
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.setNotification = function(value) {
      return jspb.Message.setOneofWrapperField(this, 12, proto.nitric.faas.v1.TriggerResponse.oneofGroups_[0], value);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.clearNotification = function() {
      return this.setNotification(void 0);
    };
    proto.nitric.faas.v1.TriggerResponse.prototype.hasNotification = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.HttpResponseContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.HttpResponseContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.HttpResponseContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          headersOldMap: (f = msg.getHeadersOldMap()) ? f.toObject(includeInstance, void 0) : [],
          status: jspb.Message.getFieldWithDefault(msg, 2, 0),
          headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, proto.nitric.faas.v1.HeaderValue.toObject) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.HttpResponseContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.HttpResponseContext();
      return proto.nitric.faas.v1.HttpResponseContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.HttpResponseContext.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getHeadersOldMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setStatus(value);
            break;
          case 3:
            var value = msg.getHeadersMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.faas.v1.HeaderValue.deserializeBinaryFromReader, "", new proto.nitric.faas.v1.HeaderValue());
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.HttpResponseContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.HttpResponseContext.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getHeadersOldMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
      f = message.getStatus();
      if (f !== 0) {
        writer.writeInt32(
          2,
          f
        );
      }
      f = message.getHeadersMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.faas.v1.HeaderValue.serializeBinaryToWriter);
      }
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.getHeadersOldMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,string>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          null
        )
      );
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.clearHeadersOldMap = function() {
      this.getHeadersOldMap().clear();
      return this;
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.getStatus = function() {
      return (
        /** @type {number} */
        jspb.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.setStatus = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.getHeadersMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.faas.v1.HeaderValue>} */
        jspb.Message.getMapField(
          this,
          3,
          opt_noLazyCreate,
          proto.nitric.faas.v1.HeaderValue
        )
      );
    };
    proto.nitric.faas.v1.HttpResponseContext.prototype.clearHeadersMap = function() {
      this.getHeadersMap().clear();
      return this;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.TopicResponseContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.TopicResponseContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.TopicResponseContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.TopicResponseContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.TopicResponseContext();
      return proto.nitric.faas.v1.TopicResponseContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.TopicResponseContext.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.TopicResponseContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.TopicResponseContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.TopicResponseContext.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSuccess();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.TopicResponseContext.prototype.getSuccess = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.faas.v1.TopicResponseContext.prototype.setSuccess = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.faas.v1.NotificationResponseContext.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.faas.v1.NotificationResponseContext.toObject(opt_includeInstance, this);
      };
      proto.nitric.faas.v1.NotificationResponseContext.toObject = function(includeInstance, msg) {
        var f, obj = {
          success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.faas.v1.NotificationResponseContext.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.faas.v1.NotificationResponseContext();
      return proto.nitric.faas.v1.NotificationResponseContext.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.faas.v1.NotificationResponseContext.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.faas.v1.NotificationResponseContext.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.faas.v1.NotificationResponseContext.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.faas.v1.NotificationResponseContext.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSuccess();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.nitric.faas.v1.NotificationResponseContext.prototype.getSuccess = function() {
      return (
        /** @type {boolean} */
        jspb.Message.getBooleanFieldWithDefault(this, 1, false)
      );
    };
    proto.nitric.faas.v1.NotificationResponseContext.prototype.setSuccess = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    proto.nitric.faas.v1.EventType = {
      ALL: 0,
      CREATED: 1,
      DELETED: 2
    };
    proto.nitric.faas.v1.NotificationType = {
      BUCKET: 0
    };
    goog.object.extend(exports, proto.nitric.faas.v1);
  }
});

// src/gen/proto/faas/v1/faas_grpc_pb.js
var require_faas_grpc_pb = __commonJS({
  "src/gen/proto/faas/v1/faas_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_faas_v1_faas_pb = require_faas_pb();
    function serialize_nitric_faas_v1_ClientMessage(arg) {
      if (!(arg instanceof proto_faas_v1_faas_pb.ClientMessage)) {
        throw new Error("Expected argument of type nitric.faas.v1.ClientMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_faas_v1_ClientMessage(buffer_arg) {
      return proto_faas_v1_faas_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_faas_v1_ServerMessage(arg) {
      if (!(arg instanceof proto_faas_v1_faas_pb.ServerMessage)) {
        throw new Error("Expected argument of type nitric.faas.v1.ServerMessage");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_faas_v1_ServerMessage(buffer_arg) {
      return proto_faas_v1_faas_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var FaasServiceService = exports.FaasServiceService = {
      // Begin streaming triggers/response to/from the membrane
      triggerStream: {
        path: "/nitric.faas.v1.FaasService/TriggerStream",
        requestStream: true,
        responseStream: true,
        requestType: proto_faas_v1_faas_pb.ClientMessage,
        responseType: proto_faas_v1_faas_pb.ServerMessage,
        requestSerialize: serialize_nitric_faas_v1_ClientMessage,
        requestDeserialize: deserialize_nitric_faas_v1_ClientMessage,
        responseSerialize: serialize_nitric_faas_v1_ServerMessage,
        responseDeserialize: deserialize_nitric_faas_v1_ServerMessage
      }
    };
    exports.FaasServiceClient = grpc8.makeGenericClientConstructor(FaasServiceService);
  }
});

// src/gen/proto/resource/v1/resource_pb.js
var require_resource_pb = __commonJS({
  "src/gen/proto/resource/v1/resource_pb.js"(exports) {
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
    goog.exportSymbol("proto.nitric.resource.v1.Action", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ApiResource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ApiResourceDetails", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ApiScopes", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ApiSecurityDefinition", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ApiSecurityDefinition.DefinitionCase", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ApiSecurityDefinitionJwt", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.BucketResource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.CollectionResource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.PolicyResource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.QueueResource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.Resource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceDeclareRequest", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceDeclareRequest.ConfigCase", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceDeclareResponse", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceDetailsRequest", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceDetailsResponse", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceDetailsResponse.DetailsCase", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.ResourceType", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.SecretResource", null, global);
    goog.exportSymbol("proto.nitric.resource.v1.TopicResource", null, global);
    proto.nitric.resource.v1.PolicyResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.resource.v1.PolicyResource.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.resource.v1.PolicyResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.PolicyResource.displayName = "proto.nitric.resource.v1.PolicyResource";
    }
    proto.nitric.resource.v1.Resource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.Resource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.Resource.displayName = "proto.nitric.resource.v1.Resource";
    }
    proto.nitric.resource.v1.ResourceDeclareRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_);
    };
    goog.inherits(proto.nitric.resource.v1.ResourceDeclareRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ResourceDeclareRequest.displayName = "proto.nitric.resource.v1.ResourceDeclareRequest";
    }
    proto.nitric.resource.v1.BucketResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.BucketResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.BucketResource.displayName = "proto.nitric.resource.v1.BucketResource";
    }
    proto.nitric.resource.v1.QueueResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.QueueResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.QueueResource.displayName = "proto.nitric.resource.v1.QueueResource";
    }
    proto.nitric.resource.v1.TopicResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.TopicResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.TopicResource.displayName = "proto.nitric.resource.v1.TopicResource";
    }
    proto.nitric.resource.v1.CollectionResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.CollectionResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.CollectionResource.displayName = "proto.nitric.resource.v1.CollectionResource";
    }
    proto.nitric.resource.v1.SecretResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.SecretResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.SecretResource.displayName = "proto.nitric.resource.v1.SecretResource";
    }
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.resource.v1.ApiSecurityDefinitionJwt.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.resource.v1.ApiSecurityDefinitionJwt, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ApiSecurityDefinitionJwt.displayName = "proto.nitric.resource.v1.ApiSecurityDefinitionJwt";
    }
    proto.nitric.resource.v1.ApiSecurityDefinition = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.resource.v1.ApiSecurityDefinition.oneofGroups_);
    };
    goog.inherits(proto.nitric.resource.v1.ApiSecurityDefinition, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ApiSecurityDefinition.displayName = "proto.nitric.resource.v1.ApiSecurityDefinition";
    }
    proto.nitric.resource.v1.ApiScopes = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.resource.v1.ApiScopes.repeatedFields_, null);
    };
    goog.inherits(proto.nitric.resource.v1.ApiScopes, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ApiScopes.displayName = "proto.nitric.resource.v1.ApiScopes";
    }
    proto.nitric.resource.v1.ApiResource = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.ApiResource, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ApiResource.displayName = "proto.nitric.resource.v1.ApiResource";
    }
    proto.nitric.resource.v1.ResourceDeclareResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.ResourceDeclareResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ResourceDeclareResponse.displayName = "proto.nitric.resource.v1.ResourceDeclareResponse";
    }
    proto.nitric.resource.v1.ApiResourceDetails = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.ApiResourceDetails, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ApiResourceDetails.displayName = "proto.nitric.resource.v1.ApiResourceDetails";
    }
    proto.nitric.resource.v1.ResourceDetailsRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.nitric.resource.v1.ResourceDetailsRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ResourceDetailsRequest.displayName = "proto.nitric.resource.v1.ResourceDetailsRequest";
    }
    proto.nitric.resource.v1.ResourceDetailsResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.resource.v1.ResourceDetailsResponse.oneofGroups_);
    };
    goog.inherits(proto.nitric.resource.v1.ResourceDetailsResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.nitric.resource.v1.ResourceDetailsResponse.displayName = "proto.nitric.resource.v1.ResourceDetailsResponse";
    }
    proto.nitric.resource.v1.PolicyResource.repeatedFields_ = [1, 2, 3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.PolicyResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.PolicyResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.PolicyResource.toObject = function(includeInstance, msg) {
        var f, obj = {
          principalsList: jspb.Message.toObjectList(
            msg.getPrincipalsList(),
            proto.nitric.resource.v1.Resource.toObject,
            includeInstance
          ),
          actionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? void 0 : f,
          resourcesList: jspb.Message.toObjectList(
            msg.getResourcesList(),
            proto.nitric.resource.v1.Resource.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.PolicyResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.PolicyResource();
      return proto.nitric.resource.v1.PolicyResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.PolicyResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.resource.v1.Resource();
            reader.readMessage(value, proto.nitric.resource.v1.Resource.deserializeBinaryFromReader);
            msg.addPrincipals(value);
            break;
          case 2:
            var values = (
              /** @type {!Array<!proto.nitric.resource.v1.Action>} */
              reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
            );
            for (var i = 0; i < values.length; i++) {
              msg.addActions(values[i]);
            }
            break;
          case 3:
            var value = new proto.nitric.resource.v1.Resource();
            reader.readMessage(value, proto.nitric.resource.v1.Resource.deserializeBinaryFromReader);
            msg.addResources(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.resource.v1.PolicyResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.PolicyResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.PolicyResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getPrincipalsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.nitric.resource.v1.Resource.serializeBinaryToWriter
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
          proto.nitric.resource.v1.Resource.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.resource.v1.PolicyResource.prototype.getPrincipalsList = function() {
      return (
        /** @type{!Array<!proto.nitric.resource.v1.Resource>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.resource.v1.Resource, 1)
      );
    };
    proto.nitric.resource.v1.PolicyResource.prototype.setPrincipalsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.addPrincipals = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.resource.v1.Resource, opt_index);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.clearPrincipalsList = function() {
      return this.setPrincipalsList([]);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.getActionsList = function() {
      return (
        /** @type {!Array<!proto.nitric.resource.v1.Action>} */
        jspb.Message.getRepeatedField(this, 2)
      );
    };
    proto.nitric.resource.v1.PolicyResource.prototype.setActionsList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.addActions = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.clearActionsList = function() {
      return this.setActionsList([]);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.getResourcesList = function() {
      return (
        /** @type{!Array<!proto.nitric.resource.v1.Resource>} */
        jspb.Message.getRepeatedWrapperField(this, proto.nitric.resource.v1.Resource, 3)
      );
    };
    proto.nitric.resource.v1.PolicyResource.prototype.setResourcesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.addResources = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nitric.resource.v1.Resource, opt_index);
    };
    proto.nitric.resource.v1.PolicyResource.prototype.clearResourcesList = function() {
      return this.setResourcesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.Resource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.Resource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.Resource.toObject = function(includeInstance, msg) {
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
    proto.nitric.resource.v1.Resource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.Resource();
      return proto.nitric.resource.v1.Resource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.Resource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!proto.nitric.resource.v1.ResourceType} */
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
    proto.nitric.resource.v1.Resource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.Resource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.Resource.serializeBinaryToWriter = function(message, writer) {
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
    proto.nitric.resource.v1.Resource.prototype.getType = function() {
      return (
        /** @type {!proto.nitric.resource.v1.ResourceType} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.nitric.resource.v1.Resource.prototype.setType = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    proto.nitric.resource.v1.Resource.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.resource.v1.Resource.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_ = [[10, 11, 12, 13, 14, 15, 16]];
    proto.nitric.resource.v1.ResourceDeclareRequest.ConfigCase = {
      CONFIG_NOT_SET: 0,
      POLICY: 10,
      BUCKET: 11,
      QUEUE: 12,
      TOPIC: 13,
      COLLECTION: 14,
      SECRET: 15,
      API: 16
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getConfigCase = function() {
      return (
        /** @type {proto.nitric.resource.v1.ResourceDeclareRequest.ConfigCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ResourceDeclareRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ResourceDeclareRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ResourceDeclareRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          resource: (f = msg.getResource()) && proto.nitric.resource.v1.Resource.toObject(includeInstance, f),
          policy: (f = msg.getPolicy()) && proto.nitric.resource.v1.PolicyResource.toObject(includeInstance, f),
          bucket: (f = msg.getBucket()) && proto.nitric.resource.v1.BucketResource.toObject(includeInstance, f),
          queue: (f = msg.getQueue()) && proto.nitric.resource.v1.QueueResource.toObject(includeInstance, f),
          topic: (f = msg.getTopic()) && proto.nitric.resource.v1.TopicResource.toObject(includeInstance, f),
          collection: (f = msg.getCollection()) && proto.nitric.resource.v1.CollectionResource.toObject(includeInstance, f),
          secret: (f = msg.getSecret()) && proto.nitric.resource.v1.SecretResource.toObject(includeInstance, f),
          api: (f = msg.getApi()) && proto.nitric.resource.v1.ApiResource.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ResourceDeclareRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ResourceDeclareRequest();
      return proto.nitric.resource.v1.ResourceDeclareRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.resource.v1.Resource();
            reader.readMessage(value, proto.nitric.resource.v1.Resource.deserializeBinaryFromReader);
            msg.setResource(value);
            break;
          case 10:
            var value = new proto.nitric.resource.v1.PolicyResource();
            reader.readMessage(value, proto.nitric.resource.v1.PolicyResource.deserializeBinaryFromReader);
            msg.setPolicy(value);
            break;
          case 11:
            var value = new proto.nitric.resource.v1.BucketResource();
            reader.readMessage(value, proto.nitric.resource.v1.BucketResource.deserializeBinaryFromReader);
            msg.setBucket(value);
            break;
          case 12:
            var value = new proto.nitric.resource.v1.QueueResource();
            reader.readMessage(value, proto.nitric.resource.v1.QueueResource.deserializeBinaryFromReader);
            msg.setQueue(value);
            break;
          case 13:
            var value = new proto.nitric.resource.v1.TopicResource();
            reader.readMessage(value, proto.nitric.resource.v1.TopicResource.deserializeBinaryFromReader);
            msg.setTopic(value);
            break;
          case 14:
            var value = new proto.nitric.resource.v1.CollectionResource();
            reader.readMessage(value, proto.nitric.resource.v1.CollectionResource.deserializeBinaryFromReader);
            msg.setCollection(value);
            break;
          case 15:
            var value = new proto.nitric.resource.v1.SecretResource();
            reader.readMessage(value, proto.nitric.resource.v1.SecretResource.deserializeBinaryFromReader);
            msg.setSecret(value);
            break;
          case 16:
            var value = new proto.nitric.resource.v1.ApiResource();
            reader.readMessage(value, proto.nitric.resource.v1.ApiResource.deserializeBinaryFromReader);
            msg.setApi(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ResourceDeclareRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getResource();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.resource.v1.Resource.serializeBinaryToWriter
        );
      }
      f = message.getPolicy();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.resource.v1.PolicyResource.serializeBinaryToWriter
        );
      }
      f = message.getBucket();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.nitric.resource.v1.BucketResource.serializeBinaryToWriter
        );
      }
      f = message.getQueue();
      if (f != null) {
        writer.writeMessage(
          12,
          f,
          proto.nitric.resource.v1.QueueResource.serializeBinaryToWriter
        );
      }
      f = message.getTopic();
      if (f != null) {
        writer.writeMessage(
          13,
          f,
          proto.nitric.resource.v1.TopicResource.serializeBinaryToWriter
        );
      }
      f = message.getCollection();
      if (f != null) {
        writer.writeMessage(
          14,
          f,
          proto.nitric.resource.v1.CollectionResource.serializeBinaryToWriter
        );
      }
      f = message.getSecret();
      if (f != null) {
        writer.writeMessage(
          15,
          f,
          proto.nitric.resource.v1.SecretResource.serializeBinaryToWriter
        );
      }
      f = message.getApi();
      if (f != null) {
        writer.writeMessage(
          16,
          f,
          proto.nitric.resource.v1.ApiResource.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getResource = function() {
      return (
        /** @type{?proto.nitric.resource.v1.Resource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.Resource, 1)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setResource = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearResource = function() {
      return this.setResource(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasResource = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getPolicy = function() {
      return (
        /** @type{?proto.nitric.resource.v1.PolicyResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.PolicyResource, 10)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setPolicy = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearPolicy = function() {
      return this.setPolicy(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasPolicy = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getBucket = function() {
      return (
        /** @type{?proto.nitric.resource.v1.BucketResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.BucketResource, 11)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setBucket = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearBucket = function() {
      return this.setBucket(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasBucket = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getQueue = function() {
      return (
        /** @type{?proto.nitric.resource.v1.QueueResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.QueueResource, 12)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setQueue = function(value) {
      return jspb.Message.setOneofWrapperField(this, 12, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearQueue = function() {
      return this.setQueue(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasQueue = function() {
      return jspb.Message.getField(this, 12) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getTopic = function() {
      return (
        /** @type{?proto.nitric.resource.v1.TopicResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.TopicResource, 13)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setTopic = function(value) {
      return jspb.Message.setOneofWrapperField(this, 13, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearTopic = function() {
      return this.setTopic(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasTopic = function() {
      return jspb.Message.getField(this, 13) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getCollection = function() {
      return (
        /** @type{?proto.nitric.resource.v1.CollectionResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.CollectionResource, 14)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setCollection = function(value) {
      return jspb.Message.setOneofWrapperField(this, 14, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearCollection = function() {
      return this.setCollection(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasCollection = function() {
      return jspb.Message.getField(this, 14) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getSecret = function() {
      return (
        /** @type{?proto.nitric.resource.v1.SecretResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.SecretResource, 15)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setSecret = function(value) {
      return jspb.Message.setOneofWrapperField(this, 15, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearSecret = function() {
      return this.setSecret(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasSecret = function() {
      return jspb.Message.getField(this, 15) != null;
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.getApi = function() {
      return (
        /** @type{?proto.nitric.resource.v1.ApiResource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.ApiResource, 16)
      );
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.setApi = function(value) {
      return jspb.Message.setOneofWrapperField(this, 16, proto.nitric.resource.v1.ResourceDeclareRequest.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.clearApi = function() {
      return this.setApi(void 0);
    };
    proto.nitric.resource.v1.ResourceDeclareRequest.prototype.hasApi = function() {
      return jspb.Message.getField(this, 16) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.BucketResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.BucketResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.BucketResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.BucketResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.BucketResource();
      return proto.nitric.resource.v1.BucketResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.BucketResource.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.BucketResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.BucketResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.BucketResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.QueueResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.QueueResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.QueueResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.QueueResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.QueueResource();
      return proto.nitric.resource.v1.QueueResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.QueueResource.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.QueueResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.QueueResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.QueueResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.TopicResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.TopicResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.TopicResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.TopicResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.TopicResource();
      return proto.nitric.resource.v1.TopicResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.TopicResource.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.TopicResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.TopicResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.TopicResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.CollectionResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.CollectionResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.CollectionResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.CollectionResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.CollectionResource();
      return proto.nitric.resource.v1.CollectionResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.CollectionResource.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.CollectionResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.CollectionResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.CollectionResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.SecretResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.SecretResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.SecretResource.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.SecretResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.SecretResource();
      return proto.nitric.resource.v1.SecretResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.SecretResource.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.SecretResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.SecretResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.SecretResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ApiSecurityDefinitionJwt.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ApiSecurityDefinitionJwt.toObject = function(includeInstance, msg) {
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
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ApiSecurityDefinitionJwt();
      return proto.nitric.resource.v1.ApiSecurityDefinitionJwt.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ApiSecurityDefinitionJwt.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.serializeBinaryToWriter = function(message, writer) {
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
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.getIssuer = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.setIssuer = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.getAudiencesList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 2)
      );
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.setAudiencesList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.addAudiences = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.nitric.resource.v1.ApiSecurityDefinitionJwt.prototype.clearAudiencesList = function() {
      return this.setAudiencesList([]);
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.oneofGroups_ = [[1]];
    proto.nitric.resource.v1.ApiSecurityDefinition.DefinitionCase = {
      DEFINITION_NOT_SET: 0,
      JWT: 1
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.prototype.getDefinitionCase = function() {
      return (
        /** @type {proto.nitric.resource.v1.ApiSecurityDefinition.DefinitionCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.resource.v1.ApiSecurityDefinition.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ApiSecurityDefinition.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ApiSecurityDefinition.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ApiSecurityDefinition.toObject = function(includeInstance, msg) {
        var f, obj = {
          jwt: (f = msg.getJwt()) && proto.nitric.resource.v1.ApiSecurityDefinitionJwt.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ApiSecurityDefinition.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ApiSecurityDefinition();
      return proto.nitric.resource.v1.ApiSecurityDefinition.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.resource.v1.ApiSecurityDefinitionJwt();
            reader.readMessage(value, proto.nitric.resource.v1.ApiSecurityDefinitionJwt.deserializeBinaryFromReader);
            msg.setJwt(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ApiSecurityDefinition.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getJwt();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.resource.v1.ApiSecurityDefinitionJwt.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.prototype.getJwt = function() {
      return (
        /** @type{?proto.nitric.resource.v1.ApiSecurityDefinitionJwt} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.ApiSecurityDefinitionJwt, 1)
      );
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.prototype.setJwt = function(value) {
      return jspb.Message.setOneofWrapperField(this, 1, proto.nitric.resource.v1.ApiSecurityDefinition.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.prototype.clearJwt = function() {
      return this.setJwt(void 0);
    };
    proto.nitric.resource.v1.ApiSecurityDefinition.prototype.hasJwt = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.resource.v1.ApiScopes.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ApiScopes.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ApiScopes.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ApiScopes.toObject = function(includeInstance, msg) {
        var f, obj = {
          scopesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ApiScopes.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ApiScopes();
      return proto.nitric.resource.v1.ApiScopes.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ApiScopes.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.ApiScopes.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ApiScopes.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ApiScopes.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScopesList();
      if (f.length > 0) {
        writer.writeRepeatedString(
          1,
          f
        );
      }
    };
    proto.nitric.resource.v1.ApiScopes.prototype.getScopesList = function() {
      return (
        /** @type {!Array<string>} */
        jspb.Message.getRepeatedField(this, 1)
      );
    };
    proto.nitric.resource.v1.ApiScopes.prototype.setScopesList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.nitric.resource.v1.ApiScopes.prototype.addScopes = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.nitric.resource.v1.ApiScopes.prototype.clearScopesList = function() {
      return this.setScopesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ApiResource.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ApiResource.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ApiResource.toObject = function(includeInstance, msg) {
        var f, obj = {
          securityDefinitionsMap: (f = msg.getSecurityDefinitionsMap()) ? f.toObject(includeInstance, proto.nitric.resource.v1.ApiSecurityDefinition.toObject) : [],
          securityMap: (f = msg.getSecurityMap()) ? f.toObject(includeInstance, proto.nitric.resource.v1.ApiScopes.toObject) : []
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ApiResource.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ApiResource();
      return proto.nitric.resource.v1.ApiResource.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ApiResource.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = msg.getSecurityDefinitionsMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.resource.v1.ApiSecurityDefinition.deserializeBinaryFromReader, "", new proto.nitric.resource.v1.ApiSecurityDefinition());
            });
            break;
          case 2:
            var value = msg.getSecurityMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.nitric.resource.v1.ApiScopes.deserializeBinaryFromReader, "", new proto.nitric.resource.v1.ApiScopes());
            });
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.resource.v1.ApiResource.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ApiResource.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ApiResource.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSecurityDefinitionsMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.resource.v1.ApiSecurityDefinition.serializeBinaryToWriter);
      }
      f = message.getSecurityMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.nitric.resource.v1.ApiScopes.serializeBinaryToWriter);
      }
    };
    proto.nitric.resource.v1.ApiResource.prototype.getSecurityDefinitionsMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.resource.v1.ApiSecurityDefinition>} */
        jspb.Message.getMapField(
          this,
          1,
          opt_noLazyCreate,
          proto.nitric.resource.v1.ApiSecurityDefinition
        )
      );
    };
    proto.nitric.resource.v1.ApiResource.prototype.clearSecurityDefinitionsMap = function() {
      this.getSecurityDefinitionsMap().clear();
      return this;
    };
    proto.nitric.resource.v1.ApiResource.prototype.getSecurityMap = function(opt_noLazyCreate) {
      return (
        /** @type {!jspb.Map<string,!proto.nitric.resource.v1.ApiScopes>} */
        jspb.Message.getMapField(
          this,
          2,
          opt_noLazyCreate,
          proto.nitric.resource.v1.ApiScopes
        )
      );
    };
    proto.nitric.resource.v1.ApiResource.prototype.clearSecurityMap = function() {
      this.getSecurityMap().clear();
      return this;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ResourceDeclareResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ResourceDeclareResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ResourceDeclareResponse.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ResourceDeclareResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ResourceDeclareResponse();
      return proto.nitric.resource.v1.ResourceDeclareResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ResourceDeclareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.ResourceDeclareResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ResourceDeclareResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ResourceDeclareResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ApiResourceDetails.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ApiResourceDetails.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ApiResourceDetails.toObject = function(includeInstance, msg) {
        var f, obj = {
          url: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ApiResourceDetails.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ApiResourceDetails();
      return proto.nitric.resource.v1.ApiResourceDetails.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ApiResourceDetails.deserializeBinaryFromReader = function(msg, reader) {
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
    proto.nitric.resource.v1.ApiResourceDetails.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ApiResourceDetails.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ApiResourceDetails.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getUrl();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.nitric.resource.v1.ApiResourceDetails.prototype.getUrl = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.resource.v1.ApiResourceDetails.prototype.setUrl = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ResourceDetailsRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ResourceDetailsRequest.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ResourceDetailsRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          resource: (f = msg.getResource()) && proto.nitric.resource.v1.Resource.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ResourceDetailsRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ResourceDetailsRequest();
      return proto.nitric.resource.v1.ResourceDetailsRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.nitric.resource.v1.Resource();
            reader.readMessage(value, proto.nitric.resource.v1.Resource.deserializeBinaryFromReader);
            msg.setResource(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ResourceDetailsRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getResource();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.nitric.resource.v1.Resource.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.prototype.getResource = function() {
      return (
        /** @type{?proto.nitric.resource.v1.Resource} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.Resource, 1)
      );
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.prototype.setResource = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.prototype.clearResource = function() {
      return this.setResource(void 0);
    };
    proto.nitric.resource.v1.ResourceDetailsRequest.prototype.hasResource = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.oneofGroups_ = [[10]];
    proto.nitric.resource.v1.ResourceDetailsResponse.DetailsCase = {
      DETAILS_NOT_SET: 0,
      API: 10
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.getDetailsCase = function() {
      return (
        /** @type {proto.nitric.resource.v1.ResourceDetailsResponse.DetailsCase} */
        jspb.Message.computeOneofCase(this, proto.nitric.resource.v1.ResourceDetailsResponse.oneofGroups_[0])
      );
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.nitric.resource.v1.ResourceDetailsResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.nitric.resource.v1.ResourceDetailsResponse.toObject(opt_includeInstance, this);
      };
      proto.nitric.resource.v1.ResourceDetailsResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          provider: jspb.Message.getFieldWithDefault(msg, 2, ""),
          service: jspb.Message.getFieldWithDefault(msg, 3, ""),
          api: (f = msg.getApi()) && proto.nitric.resource.v1.ApiResourceDetails.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.nitric.resource.v1.ResourceDetailsResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.nitric.resource.v1.ResourceDetailsResponse();
      return proto.nitric.resource.v1.ResourceDetailsResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setProvider(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setService(value);
            break;
          case 10:
            var value = new proto.nitric.resource.v1.ApiResourceDetails();
            reader.readMessage(value, proto.nitric.resource.v1.ApiResourceDetails.deserializeBinaryFromReader);
            msg.setApi(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.nitric.resource.v1.ResourceDetailsResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getProvider();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getService();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = message.getApi();
      if (f != null) {
        writer.writeMessage(
          10,
          f,
          proto.nitric.resource.v1.ApiResourceDetails.serializeBinaryToWriter
        );
      }
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.getId = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.getProvider = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.setProvider = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.getService = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.setService = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.getApi = function() {
      return (
        /** @type{?proto.nitric.resource.v1.ApiResourceDetails} */
        jspb.Message.getWrapperField(this, proto.nitric.resource.v1.ApiResourceDetails, 10)
      );
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.setApi = function(value) {
      return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.resource.v1.ResourceDetailsResponse.oneofGroups_[0], value);
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.clearApi = function() {
      return this.setApi(void 0);
    };
    proto.nitric.resource.v1.ResourceDetailsResponse.prototype.hasApi = function() {
      return jspb.Message.getField(this, 10) != null;
    };
    proto.nitric.resource.v1.ResourceType = {
      API: 0,
      FUNCTION: 1,
      BUCKET: 2,
      QUEUE: 3,
      TOPIC: 4,
      SCHEDULE: 5,
      SUBSCRIPTION: 6,
      COLLECTION: 7,
      POLICY: 8,
      SECRET: 9,
      NOTIFICATION: 10
    };
    proto.nitric.resource.v1.Action = {
      BUCKETFILELIST: 0,
      BUCKETFILEGET: 1,
      BUCKETFILEPUT: 2,
      BUCKETFILEDELETE: 3,
      TOPICLIST: 200,
      TOPICDETAIL: 201,
      TOPICEVENTPUBLISH: 202,
      QUEUESEND: 300,
      QUEUERECEIVE: 301,
      QUEUELIST: 302,
      QUEUEDETAIL: 303,
      COLLECTIONDOCUMENTREAD: 400,
      COLLECTIONDOCUMENTWRITE: 401,
      COLLECTIONDOCUMENTDELETE: 402,
      COLLECTIONQUERY: 403,
      COLLECTIONLIST: 404,
      SECRETPUT: 500,
      SECRETACCESS: 501
    };
    goog.object.extend(exports, proto.nitric.resource.v1);
  }
});

// src/gen/proto/resource/v1/resource_grpc_pb.js
var require_resource_grpc_pb = __commonJS({
  "src/gen/proto/resource/v1/resource_grpc_pb.js"(exports) {
    "use strict";
    var grpc8 = require("@grpc/grpc-js");
    var proto_resource_v1_resource_pb = require_resource_pb();
    function serialize_nitric_resource_v1_ResourceDeclareRequest(arg) {
      if (!(arg instanceof proto_resource_v1_resource_pb.ResourceDeclareRequest)) {
        throw new Error("Expected argument of type nitric.resource.v1.ResourceDeclareRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_resource_v1_ResourceDeclareRequest(buffer_arg) {
      return proto_resource_v1_resource_pb.ResourceDeclareRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_resource_v1_ResourceDeclareResponse(arg) {
      if (!(arg instanceof proto_resource_v1_resource_pb.ResourceDeclareResponse)) {
        throw new Error("Expected argument of type nitric.resource.v1.ResourceDeclareResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_resource_v1_ResourceDeclareResponse(buffer_arg) {
      return proto_resource_v1_resource_pb.ResourceDeclareResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_resource_v1_ResourceDetailsRequest(arg) {
      if (!(arg instanceof proto_resource_v1_resource_pb.ResourceDetailsRequest)) {
        throw new Error("Expected argument of type nitric.resource.v1.ResourceDetailsRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_resource_v1_ResourceDetailsRequest(buffer_arg) {
      return proto_resource_v1_resource_pb.ResourceDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_nitric_resource_v1_ResourceDetailsResponse(arg) {
      if (!(arg instanceof proto_resource_v1_resource_pb.ResourceDetailsResponse)) {
        throw new Error("Expected argument of type nitric.resource.v1.ResourceDetailsResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_nitric_resource_v1_ResourceDetailsResponse(buffer_arg) {
      return proto_resource_v1_resource_pb.ResourceDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var ResourceServiceService = exports.ResourceServiceService = {
      // Declare a resource for the nitric application
      // At Deploy time this will create resources as part of the nitric stacks dependency graph
      // At runtime
      declare: {
        path: "/nitric.resource.v1.ResourceService/Declare",
        requestStream: false,
        responseStream: false,
        requestType: proto_resource_v1_resource_pb.ResourceDeclareRequest,
        responseType: proto_resource_v1_resource_pb.ResourceDeclareResponse,
        requestSerialize: serialize_nitric_resource_v1_ResourceDeclareRequest,
        requestDeserialize: deserialize_nitric_resource_v1_ResourceDeclareRequest,
        responseSerialize: serialize_nitric_resource_v1_ResourceDeclareResponse,
        responseDeserialize: deserialize_nitric_resource_v1_ResourceDeclareResponse
      },
      // Retrieve details about a resource at runtime
      details: {
        path: "/nitric.resource.v1.ResourceService/Details",
        requestStream: false,
        responseStream: false,
        requestType: proto_resource_v1_resource_pb.ResourceDetailsRequest,
        responseType: proto_resource_v1_resource_pb.ResourceDetailsResponse,
        requestSerialize: serialize_nitric_resource_v1_ResourceDetailsRequest,
        requestDeserialize: deserialize_nitric_resource_v1_ResourceDetailsRequest,
        responseSerialize: serialize_nitric_resource_v1_ResourceDetailsResponse,
        responseDeserialize: deserialize_nitric_resource_v1_ResourceDetailsResponse
      }
    };
    exports.ResourceServiceClient = grpc8.makeGenericClientConstructor(ResourceServiceService);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Api: () => Api,
  ApiWorkerOptions: () => ApiWorkerOptions,
  Bucket: () => Bucket,
  BucketNotificationWorkerOptions: () => BucketNotificationWorkerOptions,
  BucketResource: () => BucketResource,
  CollectionResource: () => CollectionResource,
  CronWorkerOptions: () => CronWorkerOptions,
  Documents: () => Documents,
  Eventing: () => Eventing,
  File: () => File,
  FileMode: () => FileMode,
  Queue: () => Queue,
  QueueResource: () => QueueResource,
  Queueing: () => Queueing,
  RateWorkerOptions: () => RateWorkerOptions,
  ReceivedTask: () => ReceivedTask,
  Route: () => Route,
  Secret: () => Secret,
  SecretResource: () => SecretResource,
  Secrets: () => Secrets,
  Storage: () => Storage,
  SubscriptionWorkerOptions: () => SubscriptionWorkerOptions,
  Topic: () => Topic,
  TopicResource: () => TopicResource,
  api: () => api2,
  bucket: () => bucket,
  collection: () => collection,
  documents: () => documents,
  events: () => events,
  faas: () => faas_exports,
  jwt: () => jwt,
  queue: () => queue,
  queues: () => queues,
  schedule: () => schedule,
  secret: () => secret,
  secrets: () => secrets,
  storage: () => storage,
  topic: () => topic
});
module.exports = __toCommonJS(src_exports);

// src/constants.ts
var SERVICE_BIND = process.env.SERVICE_ADDRESS || "127.0.0.1:50051";
var NITRIC_DEBUG = process.env.NITRIC_DEBUG === "true" || false;

// src/api/events/v0/events.ts
var import_event_grpc_pb = __toESM(require_event_grpc_pb());
var import_event_pb = __toESM(require_event_pb());
var import_struct_pb = require("google-protobuf/google/protobuf/struct_pb");
var grpc = __toESM(require("@grpc/grpc-js"));

// src/api/errors/index.ts
var import_grpc_js = require("@grpc/grpc-js");

// src/api/errors/aborted.ts
var AbortedError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, AbortedError.prototype);
  }
};

// src/api/errors/already-exists.ts
var AlreadyExistsError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, AlreadyExistsError.prototype);
  }
};

// src/api/errors/cancelled.ts
var CancelledError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, CancelledError.prototype);
  }
};

// src/api/errors/data-loss.ts
var DataLossError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, DataLossError.prototype);
  }
};

// src/api/errors/deadline-exceeded.ts
var DeadlineExceededError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, DeadlineExceededError.prototype);
  }
};

// src/api/errors/failed-precondition.ts
var FailedPreconditionError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, FailedPreconditionError.prototype);
  }
};

// src/api/errors/internal.ts
var InternalError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, InternalError.prototype);
  }
};

// src/api/errors/invalid-argument.ts
var InvalidArgumentError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, InvalidArgumentError.prototype);
  }
};

// src/api/errors/not-found.ts
var NotFoundError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
};

// src/api/errors/out-of-range.ts
var OutOfRangeError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, OutOfRangeError.prototype);
  }
};

// src/api/errors/permission-denied.ts
var PermissionDeniedError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, PermissionDeniedError.prototype);
  }
};

// src/api/errors/resource-exhausted.ts
var ResourceExhaustedError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, ResourceExhaustedError.prototype);
  }
};

// src/api/errors/unauthenticated.ts
var UnauthenticatedError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }
};

// src/api/errors/unavailable.ts
var UnavailableError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, UnavailableError.prototype);
  }
};

// src/api/errors/unimplemented.ts
var UnimplementedError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, UnimplementedError.prototype);
  }
};

// src/api/errors/unknown.ts
var UnknownError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, UnknownError.prototype);
  }
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
    return new construct(error.message);
  }
  return new UnknownError(error.message);
};

// src/api/events/v0/events.ts
function newEventServiceClients() {
  const channel = grpc.ChannelCredentials.createInsecure();
  return {
    event: new import_event_grpc_pb.EventServiceClient(SERVICE_BIND, channel),
    topic: new import_event_grpc_pb.TopicServiceClient(SERVICE_BIND, channel)
  };
}
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
    return __async(this, arguments, function* (event2, opts = DEFAULT_PUBLISH_OPTS) {
      const { id, payloadType = "none", payload } = event2;
      const publishOpts = __spreadValues(__spreadValues({}, DEFAULT_PUBLISH_OPTS), opts);
      const request = new import_event_pb.EventPublishRequest();
      const evt = new import_event_pb.NitricEvent();
      evt.setId(id);
      evt.setPayload(import_struct_pb.Struct.fromJavaScript(payload));
      evt.setPayloadType(payloadType);
      request.setTopic(this.name);
      request.setEvent(evt);
      request.setDelay(publishOpts.delay);
      return new Promise((resolve, reject) => {
        this.eventing.EventServiceClient.publish(request, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(__spreadProps(__spreadValues({}, event2), { id: response.getId() }));
          }
        });
      });
    });
  }
};
var Eventing = class {
  constructor() {
    this._clients = void 0;
  }
  get EventServiceClient() {
    if (!this._clients) {
      this._clients = newEventServiceClients();
    }
    return this._clients.event;
  }
  get TopicServiceClient() {
    if (!this._clients) {
      this._clients = newEventServiceClients();
    }
    return this._clients.topic;
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
      throw new InvalidArgumentError("A topic name is needed to use a Topic.");
    }
    return new Topic(this, name);
  }
  /**
   * Retrieve all available topic references by querying for available topics.
   *
   * @returns A promise containing the list of available nitric topics
   * @example
   * ```typescript
   * import { Eventing } from "@nitric/sdk";
   *
   * const eventing = new Eventing();
   *
   * const topics = await eventing.topics();
   * ```
   */
  topics() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.TopicServiceClient.list(null, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(
              response.getTopicsList().map((topic2) => this.topic(topic2.getName()))
            );
          }
        });
      });
    });
  }
};
var EVENTS = void 0;
var events = () => {
  if (!EVENTS) {
    EVENTS = new Eventing();
  }
  return EVENTS;
};

// src/api/documents/v0/documents.ts
var import_document_grpc_pb = __toESM(require_document_grpc_pb());
var grpc2 = __toESM(require("@grpc/grpc-js"));

// src/api/documents/v0/collection-ref.ts
var import_document_pb3 = __toESM(require_document_pb());

// src/api/documents/v0/query.ts
var import_stream = require("stream");
var import_document_pb2 = __toESM(require_document_pb());

// src/api/documents/v0/document-ref.ts
var import_struct_pb2 = require("google-protobuf/google/protobuf/struct_pb");
var import_document_pb = __toESM(require_document_pb());

// src/api/documents/v0/constants.ts
var MAX_COLLECTION_DEPTH = 1;

// src/api/documents/v0/document-ref.ts
var DocumentRef = class {
  constructor(documentClient, parent, id) {
    this.documentClient = documentClient;
    this.parent = parent;
    this.id = id;
  }
  /**
   * Return the collection document reference value.
   *
   * @returns the collection document reference value, or null if not found
   */
  get() {
    return __async(this, null, function* () {
      const request = new import_document_pb.DocumentGetRequest();
      request.setKey(this.toWire());
      return new Promise((resolve, reject) => {
        this.documentClient.get(
          request,
          (error, response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else if (response.hasDocument()) {
              const document = response.getDocument();
              const content = document.getContent().toJavaScript();
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
   * Set the document content for this document reference in the database. If the
   * document does not exist an new item will be created, otherwise an
   * existing document will be update with the new value.
   *
   * @param value content the document content to store (required)
   */
  set(value) {
    return __async(this, null, function* () {
      const request = new import_document_pb.DocumentSetRequest();
      request.setKey(this.toWire());
      request.setContent(import_struct_pb2.Struct.fromJavaScript(value));
      return new Promise((resolve, reject) => {
        this.documentClient.set(request, (error) => {
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
   * Delete this document reference from the database if it exists.
   */
  delete() {
    return __async(this, null, function* () {
      const request = new import_document_pb.DocumentDeleteRequest();
      request.setKey(this.toWire());
      return new Promise((resolve, reject) => {
        this.documentClient.delete(request, (error) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        });
      });
    });
  }
  toWire() {
    const key = new import_document_pb.Key();
    key.setCollection(this.parent["toWire"]());
    key.setId(this.id);
    return key;
  }
  depth() {
    const parent = this.parent.parent;
    if (parent) {
      return parent.depth() + 1;
    }
    return 0;
  }
  /**
   * Gets a Collection instance that refers to the collection at the specified path.
   *
   * @param name The name of the collection (required)
   * @returns The Collection instance
   */
  collection(name) {
    if (this.depth() >= MAX_COLLECTION_DEPTH) {
      throw new InvalidArgumentError(
        `Maximum collection depth ${MAX_COLLECTION_DEPTH} exceeded`
      );
    }
    return new CollectionRef(this.documentClient, name, this);
  }
};

// src/api/documents/v0/document-snapshot.ts
var DocumentSnapshot = class {
  constructor(ref, content) {
    this.ref = ref;
    this.content = content;
  }
  get id() {
    return this.ref.id;
  }
};

// src/api/documents/v0/query.ts
function protoMapToMap(protoMap) {
  const jsMap = /* @__PURE__ */ new Map();
  protoMap.forEach((value, key) => {
    jsMap.set(key, value);
  });
  return jsMap;
}
var Query = class {
  constructor(documentClient, collection2) {
    this.documentClient = documentClient;
    this.collection = collection2;
    this.expressions = [];
  }
  /**
   * Add a where expression to the query.
   *
   * @param field operand the left hand side expression operand
   * @param operator the query expression operator
   * @param value right hand side operand
   * @returns the Query operation
   */
  where(field, operator, value) {
    const expression = new import_document_pb2.Expression();
    const expressionValue = new import_document_pb2.ExpressionValue();
    expression.setOperand(field);
    expression.setOperator(operator);
    switch (typeof value) {
      case "string":
        expressionValue.setStringValue(value);
        break;
      case "number":
        if (Number.isInteger(value)) {
          expressionValue.setIntValue(value);
        } else {
          expressionValue.setDoubleValue(value);
        }
        break;
      case "boolean":
        expressionValue.setBoolValue(value);
        break;
    }
    expression.setValue(expressionValue);
    this.expressions.push(expression);
    return this;
  }
  /**
   * Set the query paging continuation token.
   *
   * @param pagingToken used to determine where to continue paging from.
   * @returns the Query operation
   */
  pagingFrom(pagingToken) {
    this.pagingToken = pagingToken;
    return this;
  }
  /**
   * Set the query fetch limit.
   *
   * @param limit the maximum number for results to return.
   * @returns the Query operation
   */
  limit(limit) {
    if (typeof limit !== "number" || limit < 0) {
      throw new InvalidArgumentError(
        "limit must be a positive integer or 0 for unlimited."
      );
    }
    this.fetchLimit = limit;
    return this;
  }
  fetch() {
    return __async(this, null, function* () {
      const request = new import_document_pb2.DocumentQueryRequest();
      request.setCollection(this.collection["toWire"]());
      request.setLimit(this.fetchLimit);
      if (this.expressions.length) {
        request.setExpressionsList(this.expressions);
      }
      if (this.pagingToken != null) {
        if (!(this.pagingToken instanceof Map)) {
          throw new InvalidArgumentError("Invalid paging token provided!");
        }
        const map = request.getPagingTokenMap();
        this.pagingToken.forEach((value, key) => {
          map.set(key, value);
        });
      }
      return new Promise((resolve, reject) => {
        this.documentClient.query(
          request,
          (error, response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              const pagingTokenMap = protoMapToMap(response.getPagingTokenMap());
              request.clearPagingTokenMap();
              const documents2 = response.getDocumentsList().map(
                (doc) => new DocumentSnapshot(
                  new DocumentRef(
                    this.documentClient,
                    this.collection,
                    doc.getKey().getId()
                  ),
                  doc.getContent().toJavaScript()
                )
              );
              resolve({
                documents: documents2,
                pagingToken: pagingTokenMap.size > 0 ? pagingTokenMap : null
              });
            }
          }
        );
      });
    });
  }
  getStreamRequest() {
    const request = new import_document_pb2.DocumentQueryStreamRequest();
    request.setCollection(this.collection["toWire"]());
    request.setLimit(this.fetchLimit);
    request.setExpressionsList(this.expressions);
    return request;
  }
  /**
   * Queries the collection and returns a readable stream.
   *
   * @returns all query results as a stream
   * @example
   * ```typescript
   * import { documents } from "@nitric/sdk";
   *
   * const docs = documents();
   *
   * async function getDocs() {
   *   const docs = [];
   *   const stream = docs
   *     .collection('customers')
   *     .query()
   *     .where('name', '==', 'david')
   *     .stream();
   *
   *   for await (const chunk of stream) {
   *     docs.push(chunk);
   *   }
   *
   *   return docs;
   * }
   * ```
   *
   */
  stream() {
    const responseStream = this.documentClient.queryStream(
      this.getStreamRequest()
    );
    const transform = new import_stream.Transform({
      objectMode: true,
      transform: (result, encoding, callback) => {
        const doc = result.getDocument();
        callback(
          void 0,
          new DocumentSnapshot(
            new DocumentRef(
              this.documentClient,
              this.collection,
              doc.getKey().getId()
            ),
            doc.getContent().toJavaScript()
          )
        );
      }
    });
    responseStream.on(
      "error",
      (e) => transform.destroy(fromGrpcError(e))
    );
    responseStream.pipe(transform);
    return transform;
  }
};

// src/api/documents/v0/collection-group-ref.ts
var NIL_DOC_ID = "";
var CollectionGroupRef = class {
  constructor(documentClient, name, parent) {
    this.documentClient = documentClient;
    this.name = name;
    this.parent = parent;
  }
  /**
   * Create a CollectionGroupRef referencing a sub-collection of this collection.
   *
   * @param name of the sub-collection
   * @returns a reference to the sub-collection
   */
  collection(name) {
    if (this.depth() >= MAX_COLLECTION_DEPTH) {
      throw new InvalidArgumentError(
        `Maximum collection depth ${MAX_COLLECTION_DEPTH} exceeded`
      );
    }
    return new CollectionGroupRef(this.documentClient, name, this);
  }
  /**
   * Create a new collection query object.
   *
   * @returns a new collection query object
   */
  query() {
    return new Query(this.documentClient, this.toCollectionRef());
  }
  depth() {
    if (this.parent) {
      return this.parent.depth() + 1;
    }
    return 0;
  }
  toCollectionRef() {
    if (this.parent) {
      return new CollectionRef(
        this.documentClient,
        this.name,
        new DocumentRef(
          this.documentClient,
          this.parent.toCollectionRef(),
          NIL_DOC_ID
        )
      );
    }
    return new CollectionRef(this.documentClient, this.name);
  }
  /**
   * Creates a collection group reference from a collection reference.
   *
   * @internal
   * @param ref a collection reference.
   * @param dc a document service client.
   * @returns a collection group reference.
   */
  static fromCollectionRef(ref, dc) {
    if (ref.parent) {
      return new CollectionGroupRef(
        dc,
        ref.name,
        CollectionGroupRef.fromCollectionRef(ref.parent.parent, dc)
      );
    }
    return new CollectionGroupRef(dc, ref.name);
  }
};

// src/api/documents/v0/collection-ref.ts
var CollectionRef = class {
  constructor(documentClient, name, parent) {
    this.documentClient = documentClient;
    this.name = name;
    this.parent = parent;
  }
  /**
   * Return a reference to a sub-collection within the documents of this collection.
   *
   * Useful when querying sub-collection documents across all/many parent documents. E.g. Querying landmarks from multiple cities.
   *
   * @param name the name of the collection
   * @returns a reference to all sub-collections matching the name provided.
   */
  collection(name) {
    return CollectionGroupRef.fromCollectionRef(
      this,
      this.documentClient
    ).collection(name);
  }
  /**
   * Return a reference to a document in the collection.
   *
   * @param id the unique id of the document
   * @returns new collection document reference
   */
  doc(id) {
    return new DocumentRef(this.documentClient, this, id);
  }
  /**
   * Create a new collection query object.
   *
   * @returns a new collection query object.
   */
  query() {
    return new Query(this.documentClient, this);
  }
  toWire() {
    const col = new import_document_pb3.Collection();
    col.setName(this.name);
    if (this.parent) {
      col.setParent(this.parent["toWire"]());
    }
    return col;
  }
};

// src/api/documents/v0/documents.ts
var Documents = class {
  constructor() {
    this.documentClient = new import_document_grpc_pb.DocumentServiceClient(
      SERVICE_BIND,
      grpc2.ChannelCredentials.createInsecure()
    );
  }
  /**
   * Gets a Collection instance that refers to the collection at the specified path.
   *
   * @param name The name of the collection (required)
   * @returns The Collection instance
   */
  collection(name) {
    return new CollectionRef(this.documentClient, name);
  }
};
var DOCUMENTS = void 0;
var documents = () => {
  if (!DOCUMENTS) {
    DOCUMENTS = new Documents();
  }
  return DOCUMENTS;
};

// src/api/queues/v0/queues.ts
var import_queue_grpc_pb = __toESM(require_queue_grpc_pb());
var import_queue_pb = __toESM(require_queue_pb());
var grpc3 = __toESM(require("@grpc/grpc-js"));
var import_struct_pb3 = require("google-protobuf/google/protobuf/struct_pb");
function taskToWire(task) {
  const wireTask = new import_queue_pb.NitricTask();
  wireTask.setId(task.id);
  wireTask.setPayloadType(task.payloadType);
  wireTask.setPayload(import_struct_pb3.Struct.fromJavaScript(task.payload));
  return wireTask;
}
function newQueueServiceClient() {
  return new import_queue_grpc_pb.QueueServiceClient(
    SERVICE_BIND,
    grpc3.ChannelCredentials.createInsecure()
  );
}
var Queueing = class {
  constructor() {
    this.queue = (name) => {
      if (!name) {
        throw new InvalidArgumentError("A queue name is needed to use a Queue.");
      }
      return new Queue(this, name);
    };
    this.QueueServiceClient = newQueueServiceClient();
  }
};
var Queue = class {
  constructor(queueing, name) {
    this.queueing = queueing;
    this.name = name;
  }
  send(tasks) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const request = new import_queue_pb.QueueSendBatchRequest();
        request.setTasksList(
          Array.isArray(tasks) ? tasks.map((task) => taskToWire(task)) : [taskToWire(tasks)]
        );
        request.setQueue(this.name);
        this.queueing.QueueServiceClient.sendBatch(request, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
            return;
          }
          const failedTasks = response.getFailedtasksList().map((m) => ({
            task: {
              id: m.getTask().getId(),
              payload: m.getTask().getPayload().toJavaScript(),
              payloadType: m.getTask().getPayloadType()
            },
            message: m.getMessage()
          }));
          if (!Array.isArray(tasks)) {
            if (failedTasks.length > 0) {
              reject(new InternalError(failedTasks[0].message));
            }
            resolve();
          } else {
            resolve(failedTasks);
          }
        });
      });
    });
  }
  /**
   * Pop 1 or more queue items from the specified queue up to the depth limit.
   *
   * Nitric Tasks are leased for a limited period of time, where they may be worked on.
   * Once complete or failed they must be acknowledged using request specified leaseId.
   *
   * If the lease on a queue item expires before it is acknowledged or the lease is extended the task will be returned to the queue for reprocessing.
   *
   * @param depth the maximum number of items to return. Default 1, Min 1.
   * @returns The list of received tasks
   *
   * Example:
   * ```typescript
   * import { Queueing } from "@nitric/sdk"
   *
   * const queueing = new Queueing();
   *
   * const [task] = await queueing.queue("my-queue").receive();
   *
   * // do something with task
   * ```
   */
  receive(depth) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const request = new import_queue_pb.QueueReceiveRequest();
        if (Number.isNaN(depth) || depth < 1) {
          depth = 1;
        }
        request.setQueue(this.name);
        request.setDepth(depth);
        this.queueing.QueueServiceClient.receive(request, (error, response) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(
              response.getTasksList().map((m) => {
                return new ReceivedTask({
                  id: m.getId(),
                  payload: m.getPayload().toJavaScript(),
                  payloadType: m.getPayloadType(),
                  leaseId: m.getLeaseId(),
                  queue: this
                });
              })
            );
          }
        });
      });
    });
  }
};
var ReceivedTask = class {
  constructor({
    id,
    leaseId,
    payload,
    payloadType,
    queue: queue2
  }) {
    this.id = id;
    this.leaseId = leaseId;
    this.payloadType = payloadType;
    this.payload = payload;
    this.queue = queue2;
  }
  /**
   * Marks a queue item as successfully completed and removes it from the queue.
   *
   * @returns A void promise
   *
   * Example:
   * ```typescript
   * import { Queueing } from "@nitric/sdk"
   *
   * const queueing = new Queueing();
   *
   * const [task] = await queueing.queue("my-queue").receive();
   *
   * // do something with task
   *
   * // complete the task
   * await task.complete();
   * ```
   */
  complete() {
    return __async(this, null, function* () {
      try {
        const request = new import_queue_pb.QueueCompleteRequest();
        request.setQueue(this.queue.name);
        request.setLeaseId(this.leaseId);
        return yield new Promise((resolve, reject) => {
          this.queue.queueing.QueueServiceClient.complete(request, (error) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve();
            }
          });
        });
      } catch (error) {
        throw error;
      }
    });
  }
};
var QUEUES = void 0;
var queues = () => {
  if (!QUEUES) {
    QUEUES = new Queueing();
  }
  return QUEUES;
};

// src/api/storage/v0/storage.ts
var import_storage_grpc_pb = __toESM(require_storage_grpc_pb());
var import_storage_pb = __toESM(require_storage_pb());
var grpc4 = __toESM(require("@grpc/grpc-js"));
var Storage = class {
  constructor() {
    this.StorageServiceClient = new import_storage_grpc_pb.StorageServiceClient(
      SERVICE_BIND,
      grpc4.ChannelCredentials.createInsecure()
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
      throw new InvalidArgumentError(
        "A bucket name is required to use a Bucket."
      );
    }
    return new Bucket(this, name);
  }
};
var Bucket = class {
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
      const request = new import_storage_pb.StorageListFilesRequest();
      request.setBucketName(this.name);
      return yield new Promise((res, rej) => {
        this.storage.StorageServiceClient.listFiles(request, (err, data) => {
          if (err) {
            rej(fromGrpcError(err));
          }
          res(
            data.getFilesList().map((f) => {
              return new File(this.storage, this, f.getKey());
            })
          );
        });
      });
    });
  }
  file(name) {
    if (!name) {
      throw new InvalidArgumentError(
        "A file name/path is required to use a File."
      );
    }
    return new File(this.storage, this, name);
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
   * @deprecated for simplicity we suggest using getUploadUrl or getDownloadUrl.
   */
  signUrl(_0) {
    return __async(this, arguments, function* (mode, opts = DEFAULT_SIGN_URL_OPTS) {
      const { expiry } = __spreadValues(__spreadValues({}, DEFAULT_SIGN_URL_OPTS), opts);
      const request = new import_storage_pb.StoragePreSignUrlRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      request.setOperation(mode);
      request.setExpiry(expiry);
      return new Promise((resolve, reject) => {
        this.storage.StorageServiceClient.preSignUrl(
          request,
          (error, response) => {
            if (error) {
              reject(fromGrpcError(error));
            } else {
              resolve(response.getUrl());
            }
          }
        );
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
      const request = new import_storage_pb.StorageWriteRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      if (typeof body === "string" || body instanceof String) {
        request.setBody(new TextEncoder().encode(body));
      } else {
        request.setBody(body);
      }
      return new Promise((resolve, reject) => {
        this.storage.StorageServiceClient.write(request, (error) => {
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
      const request = new import_storage_pb.StorageReadRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      return new Promise((resolve, reject) => {
        this.storage.StorageServiceClient.read(request, (error, response) => {
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
      const request = new import_storage_pb.StorageDeleteRequest();
      request.setBucketName(this.bucket.name);
      request.setKey(this.name);
      return new Promise((resolve, reject) => {
        this.storage.StorageServiceClient.delete(request, (error) => {
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
var STORAGE = void 0;
var storage = () => {
  if (!STORAGE) {
    STORAGE = new Storage();
  }
  return STORAGE;
};

// src/api/secrets/v0/secrets.ts
var import_secret_grpc_pb = __toESM(require_secret_grpc_pb());
var import_secret_pb = __toESM(require_secret_pb());
var grpc5 = __toESM(require("@grpc/grpc-js"));
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
        throw new InvalidArgumentError("A name is required to use a Secret.");
      }
      return new Secret(this, name);
    };
    this.SecretServiceClient = new import_secret_grpc_pb.SecretServiceClient(
      SERVICE_BIND,
      grpc5.ChannelCredentials.createInsecure()
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
        const request = new import_secret_pb.SecretPutRequest();
        request.setSecret(_Secret.toWire(this));
        request.setValue(secretBuff);
        this.secrets.SecretServiceClient.put(
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
      throw new InvalidArgumentError(
        "A version is required to create a version reference."
      );
    }
    return new SecretVersion(this.secrets, this, version);
  }
};
var Secret = _Secret;
Secret.toWire = (secret2) => {
  const wire = new import_secret_pb.Secret();
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
        const request = new import_secret_pb.SecretAccessRequest();
        request.setSecretVersion(_SecretVersion.toWire(this));
        this.secrets.SecretServiceClient.access(
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
  const wire = new import_secret_pb.SecretVersion();
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

// src/faas/index.ts
var faas_exports = {};
__export(faas_exports, {
  AbstractRequest: () => AbstractRequest,
  BucketNotificationContext: () => BucketNotificationContext,
  BucketNotificationRequest: () => BucketNotificationRequest,
  EventContext: () => EventContext,
  EventRequest: () => EventRequest,
  Faas: () => Faas,
  HttpContext: () => HttpContext,
  HttpRequest: () => HttpRequest,
  HttpResponse: () => HttpResponse,
  TriggerContext: () => TriggerContext,
  createHandler: () => createHandler,
  event: () => event,
  getTraceContext: () => getTraceContext,
  http: () => http,
  json: () => json,
  jsonResponse: () => jsonResponse,
  notification: () => notification,
  start: () => start
});

// src/faas/v0/handler.ts
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

// src/faas/v0/context.ts
var import_faas_pb = __toESM(require_faas_pb());
var api = __toESM(require("@opentelemetry/api"));

// src/faas/v0/json.ts
var decodeData = (data) => {
  if (typeof data !== "string") {
    return new TextDecoder("utf-8").decode(data);
  }
  return data;
};
var json = () => (ctx, next) => {
  ctx.req.body = JSON.parse(decodeData(ctx.req.data));
  return next(ctx);
};
var jsonResponse = (ctx) => (data) => {
  ctx.res.body = new TextEncoder().encode(JSON.stringify(data));
  ctx.res.headers["Content-Type"] = ["application/json"];
  return ctx;
};

// src/faas/v0/context.ts
var TriggerContext = class {
  /**
   * Noop base context http method.
   *
   * @returns undefined
   */
  get http() {
    return void 0;
  }
  /**
   * Noop base context event method.
   *
   * @returns undefined
   */
  get event() {
    return void 0;
  }
  /**
   * Noop base context noficiation method
   *
   * @returns undefined
   */
  get notification() {
    return void 0;
  }
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
  // Instantiate a concrete TriggerContext from the gRPC trigger model
  static fromGrpcTriggerRequest(trigger) {
    if (trigger.hasHttp()) {
      return HttpContext.fromGrpcTriggerRequest(trigger);
    } else if (trigger.hasTopic()) {
      return EventContext.fromGrpcTriggerRequest(trigger);
    } else if (trigger.hasNotification()) {
      return BucketNotificationContext.fromGrpcTriggerRequest(trigger);
    }
    throw new Error("Unsupported trigger request type");
  }
  static toGrpcTriggerResponse(ctx) {
    if (ctx.http) {
      return HttpContext.toGrpcTriggerResponse(ctx);
    } else if (ctx.event) {
      return EventContext.toGrpcTriggerResponse(ctx);
    } else if (ctx.notification) {
      return BucketNotificationContext.toGrpcTriggerResponse(ctx);
    }
    throw new Error("Unsupported trigger context type");
  }
};
var AbstractRequest = class {
  constructor(data, traceContext) {
    this.data = data;
    this.traceContext = traceContext;
  }
  text() {
    const stringPayload = typeof this.data === "string" ? this.data : new TextDecoder("utf-8").decode(this.data);
    return stringPayload;
  }
  json() {
    return this.text() ? JSON.parse(this.text()) : {};
  }
};
var getTraceContext = (traceContext) => {
  const traceContextObject = traceContext ? objectFromMap(traceContext.getValuesMap()) : {};
  return api.propagation.extract(api.context.active(), traceContextObject);
};
var objectFromMap = (map) => {
  return map ? map.toObject().reduce((prev, [k, v]) => {
    prev[k] = v;
    return prev;
  }, {}) : {};
};
var HttpContext = class extends TriggerContext {
  get http() {
    return this;
  }
  static fromGrpcTriggerRequest(trigger) {
    const http2 = trigger.getHttp();
    const ctx = new HttpContext();
    const headers = http2.getHeadersMap().getEntryList().reduce(
      (acc, [key, [val]]) => __spreadProps(__spreadValues({}, acc), {
        [key.toLowerCase()]: val.length === 1 ? val[0] : val
      }),
      {}
    );
    const query = http2.getQueryParamsMap().getEntryList().reduce(
      (acc, [key, [val]]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val.length === 1 ? val[0] : val
      }),
      {}
    );
    const params = http2.getPathParamsMap().getEntryList().reduce(
      (acc, [key, val]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val.length === 1 ? val[0] : val
      }),
      {}
    );
    const oldQuery = http2.getQueryParamsOldMap().toArray().reduce(
      (acc, [key, val]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val
      }),
      {}
    );
    const oldHeaders = http2.getHeadersOldMap().toArray().reduce(
      (acc, [key, val]) => __spreadProps(__spreadValues({}, acc), {
        [key]: val
      }),
      {}
    );
    ctx.request = new HttpRequest({
      data: trigger.getData(),
      path: http2.getPath(),
      params,
      // TODO: remove after 1.0
      // check for old query if new query is unpopulated. This is for backwards compatibility.
      query: Object.keys(query).length ? query : oldQuery,
      // TODO: remove after 1.0
      // check for old headers if new headers is unpopulated. This is for backwards compatibility.
      headers: Object.keys(headers).length ? headers : oldHeaders,
      method: http2.getMethod(),
      traceContext: getTraceContext(trigger.getTraceContext())
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
  static toGrpcTriggerResponse(ctx) {
    const httpCtx = ctx.http;
    const resp = new import_faas_pb.TriggerResponse();
    resp.setHttp(new import_faas_pb.HttpResponseContext());
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
    resp.setData(body);
    resp.getHttp().setStatus(httpCtx.response.status);
    Object.entries(httpCtx.response.headers).forEach(([k, v]) => {
      const headerVal = new import_faas_pb.HeaderValue();
      headerVal.setValueList(v);
      resp.getHttp().getHeadersMap().set(k.toLowerCase(), headerVal);
      resp.getHttp().getHeadersOldMap().set(k.toLowerCase(), v[0]);
    });
    const contentHeader = resp.getHttp().getHeadersMap().get("content-type");
    if (!contentHeader || contentHeader.getValueList().length === 0) {
      const headerVal = new import_faas_pb.HeaderValue();
      headerVal.setValueList([bodyContentType]);
      resp.getHttp().getHeadersMap().set("content-type", headerVal);
      resp.getHttp().getHeadersOldMap().set("content-type", bodyContentType);
    }
    return resp;
  }
};
var HttpRequest = class extends AbstractRequest {
  constructor({
    data,
    method,
    path: path2,
    params,
    query,
    headers,
    traceContext
  }) {
    super(data, traceContext);
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
var EventContext = class extends TriggerContext {
  get event() {
    return this;
  }
  static fromGrpcTriggerRequest(trigger) {
    const topic2 = trigger.getTopic();
    const ctx = new EventContext();
    ctx.request = new EventRequest(
      trigger.getData_asU8(),
      topic2.getTopic(),
      getTraceContext(trigger.getTraceContext())
    );
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toGrpcTriggerResponse(ctx) {
    const evtCtx = ctx.event;
    const triggerResponse = new import_faas_pb.TriggerResponse();
    const topicResponse = new import_faas_pb.TopicResponseContext();
    topicResponse.setSuccess(evtCtx.res.success);
    triggerResponse.setTopic(topicResponse);
    return triggerResponse;
  }
};
var EventRequest = class extends AbstractRequest {
  constructor(data, topic2, traceContext) {
    super(data, traceContext);
    this.topic = topic2;
  }
};
var BucketNotificationContext = class extends TriggerContext {
  get notification() {
    return this;
  }
  static fromGrpcTriggerRequest(trigger) {
    const notification2 = trigger.getNotification();
    const ctx = new BucketNotificationContext();
    const attributes = objectFromMap(notification2.getAttributesMap());
    ctx.request = new BucketNotificationRequest(
      trigger.getData_asU8(),
      getTraceContext(trigger.getTraceContext()),
      attributes
    );
    ctx.response = {
      success: true
    };
    return ctx;
  }
  static toGrpcTriggerResponse(ctx) {
    const notifyCtx = ctx.notification;
    const triggerResponse = new import_faas_pb.TriggerResponse();
    const notificationResponse = new import_faas_pb.NotificationResponseContext();
    notificationResponse.setSuccess(notifyCtx.res.success);
    triggerResponse.setNotification(notificationResponse);
    return triggerResponse;
  }
};
var BucketNotificationRequest = class extends AbstractRequest {
  constructor(data, traceContext, attributes) {
    super(data, traceContext);
    this.eventTypeToNotificationType = (eventType) => {
      switch (eventType) {
        case "created":
          return 0 /* Created */;
        case "deleted":
          return 1 /* Deleted */;
        default:
          throw new Error(`event type unsupported: ${eventType}`);
      }
    };
    this.key = attributes["key"];
    this.eventType = this.eventTypeToNotificationType(attributes["eventType"]);
  }
};

// src/faas/v0/start.ts
var import_faas_grpc_pb = __toESM(require_faas_grpc_pb());
var import_faas_pb2 = __toESM(require_faas_pb());

// src/faas/v0/traceProvider.ts
var import_sdk_trace_node = require("@opentelemetry/sdk-trace-node");
var import_exporter_trace_otlp_http = require("@opentelemetry/exporter-trace-otlp-http");
var import_resources = require("@opentelemetry/resources");
var import_instrumentation_http = require("@opentelemetry/instrumentation-http");
var import_instrumentation_grpc = require("@opentelemetry/instrumentation-grpc");
var import_instrumentation = require("@opentelemetry/instrumentation");
var import_semantic_conventions = require("@opentelemetry/semantic-conventions");
var import_sdk_trace_node2 = require("@opentelemetry/sdk-trace-node");
var newTracerProvider = () => {
  var _a, _b;
  const localRun = !process.env.OTELCOL_BIN;
  const samplePercentage = localRun ? 100 : Number.parseInt(process.env.NITRIC_TRACE_SAMPLE_PERCENT) || 0;
  const provider = new import_sdk_trace_node.NodeTracerProvider({
    resource: new import_resources.Resource({
      [import_semantic_conventions.SemanticResourceAttributes.SERVICE_NAME]: (_a = process.env.NITRIC_STACK) != null ? _a : "",
      [import_semantic_conventions.SemanticResourceAttributes.SERVICE_VERSION]: (_b = process.env.npm_package_version) != null ? _b : "0.0.1"
    }),
    sampler: new import_sdk_trace_node2.TraceIdRatioBasedSampler(samplePercentage)
  });
  (0, import_instrumentation.registerInstrumentations)({
    instrumentations: [new import_instrumentation_http.HttpInstrumentation(), new import_instrumentation_grpc.GrpcInstrumentation()],
    tracerProvider: provider
  });
  const traceExporter = localRun ? new import_sdk_trace_node.ConsoleSpanExporter() : new import_exporter_trace_otlp_http.OTLPTraceExporter({
    url: "http://localhost:4317"
  });
  const processor = new import_sdk_trace_node.BatchSpanProcessor(traceExporter);
  provider.addSpanProcessor(processor);
  provider.register();
  return provider;
};
var traceProvider_default = newTracerProvider;

// src/resources/api.ts
var import_resource_pb2 = __toESM(require_resource_pb());

// src/resources/client.ts
var import_resource_grpc_pb = __toESM(require_resource_grpc_pb());
var grpc6 = __toESM(require("@grpc/grpc-js"));
var resourceClient = new import_resource_grpc_pb.ResourceServiceClient(
  SERVICE_BIND,
  grpc6.ChannelCredentials.createInsecure()
);
var client_default = resourceClient;

// src/resources/common.ts
var import_resource_pb = __toESM(require_resource_pb());
var Resource2 = class {
  constructor(name) {
    this.name = name;
  }
  get registerPromise() {
    return this._registerPromise;
  }
  set registerPromise(promise) {
    this._registerPromise = promise;
  }
  /**
   * Returns details of this
   */
  details() {
    return __async(this, null, function* () {
      const req = new import_resource_pb.ResourceDetailsRequest();
      const res = new import_resource_pb.Resource();
      res.setName(this.name);
      res.setType(this.resourceType());
      req.setResource(res);
      return new Promise((resolve, reject) => {
        client_default.details(req, (err, resp) => {
          if (err) {
            reject(fromGrpcError(err));
          } else {
            resolve({
              id: resp.getId(),
              provider: resp.getProvider(),
              service: resp.getService(),
              details: this.unwrapDetails(resp)
            });
          }
        });
      });
    });
  }
};
var SecureResource = class extends Resource2 {
  registerPolicy(...perms) {
    const req = new import_resource_pb.ResourceDeclareRequest();
    const policyResource = new import_resource_pb.Resource();
    policyResource.setType(import_resource_pb.ResourceType.POLICY);
    const policy = new import_resource_pb.PolicyResource();
    const defaultPrincipal = new import_resource_pb.Resource();
    defaultPrincipal.setType(import_resource_pb.ResourceType.FUNCTION);
    policy.setPrincipalsList([defaultPrincipal]);
    const actions = this.permsToActions(...perms);
    policy.setActionsList(actions);
    req.setResource(policyResource);
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
        console.log(err);
      });
    }
    return cache[typename][name];
  };
};

// src/resources/api.ts
var import_path = __toESM(require("path"));
var ApiWorkerOptions = class {
  constructor(api3, route, methods, opts = {}) {
    this.api = api3;
    this.route = route;
    this.methods = methods;
    this.opts = opts;
  }
};
var Method = class {
  constructor(route, methods, opts, ...middleware) {
    this.route = route;
    this.methods = methods;
    this.faas = new Faas(
      new ApiWorkerOptions(route.api.name, route.path, methods, opts)
    );
    this.faas.http(...middleware);
  }
  start() {
    return __async(this, null, function* () {
      return this.faas.start();
    });
  }
};
var Route = class {
  constructor(api3, path2, opts = {}) {
    this.api = api3;
    this.path = path2;
    const { middleware = [] } = opts;
    this.middleware = composeMiddleware(middleware);
  }
  method(methods, opts, ...middleware) {
    return __async(this, null, function* () {
      const getHandler = new Method(
        this,
        methods,
        opts,
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
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  get(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(["GET"], opts, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for POST requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  post(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(["POST"], opts, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for PUT requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  put(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(["PUT"], opts, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for PATCH requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  patch(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(["PATCH"], opts, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for DELETE requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  delete(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(["DELETE"], opts, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for OPTIONS requests to this route
   *
   * @param middleware that should respond to any matching requests to this route and method
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  options(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(["OPTIONS"], opts, ...composeMiddleware(middleware));
    });
  }
  /**
   * Register a handler function for GET, POST, PATCH, PUT and DELETE requests to this route
   *
   * @param middleware that should respond to matching requests to this route and all HTTP methods
   * @param opts the options for this method, such as security definitions
   * @returns a Promise that resolves if the handler stops running
   */
  all(_0) {
    return __async(this, arguments, function* (middleware, opts = {}) {
      return this.method(
        ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        opts,
        ...composeMiddleware(middleware)
      );
    });
  }
};
var Api = class extends Resource2 {
  constructor(name, options = {}) {
    super(name);
    const {
      middleware,
      path: path2 = "/",
      securityDefinitions = null,
      security = {}
    } = options;
    this.path = path2.replace(/^\/?/, "/");
    this.middleware = composeMiddleware(middleware);
    this.securityDefinitions = securityDefinitions;
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
   * @param opts the options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  get(_0, _1) {
    return __async(this, arguments, function* (match, middleware, opts = {}) {
      return this.route(match).get(composeMiddleware(middleware), opts);
    });
  }
  /**
   * Registers a new route with a POST handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to POST
   * @param opts the options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  post(_0, _1) {
    return __async(this, arguments, function* (match, middleware, opts = {}) {
      return this.route(match).post(composeMiddleware(middleware), opts);
    });
  }
  /**
   * Registers a new route with a PUT handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PUT
   * @param opts the options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  put(_0, _1) {
    return __async(this, arguments, function* (match, middleware, opts = {}) {
      return this.route(match).put(composeMiddleware(middleware), opts);
    });
  }
  /**
   * Registers a new route with a PATCH handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to PATCH
   * @param opts the options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  patch(_0, _1) {
    return __async(this, arguments, function* (match, middleware, opts = {}) {
      return this.route(match).patch(composeMiddleware(middleware), opts);
    });
  }
  /**
   * Registers a new route with a DELETE handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @param opts the options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  delete(_0, _1) {
    return __async(this, arguments, function* (match, middleware, opts = {}) {
      return this.route(match).delete(composeMiddleware(middleware), opts);
    });
  }
  /**
   * Registers a new route with a OPTIONS handler in a single method.
   *
   * @param match the route path matcher e.g. '/home'. Supports path params via colon prefix e.g. '/customers/:customerId'
   * @param middleware the middleware/handler to register for calls to DELETE
   * @param opts the options for this method, such as security definitions
   * @returns A Promise that resolves when the handler terminates.
   */
  options(_0, _1) {
    return __async(this, arguments, function* (match, middleware, opts = {}) {
      return this.route(match).options(composeMiddleware(middleware), opts);
    });
  }
  /**
   * Retrieves the Invocation URL of this API at runtime.
   *
   * @returns Promise that returns the URL of this API
   */
  url() {
    return __async(this, null, function* () {
      const {
        details: { url }
      } = yield this.details();
      return url;
    });
  }
  resourceType() {
    return import_resource_pb2.ResourceType.API;
  }
  unwrapDetails(resp) {
    if (resp.hasApi()) {
      return {
        url: resp.getApi().getUrl()
      };
    }
    throw new Error("Unexpected details in response. Expected API details");
  }
  /**
   * Register this api as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resource_pb2.ResourceDeclareRequest();
      const resource = new import_resource_pb2.Resource();
      const apiResource = new import_resource_pb2.ApiResource();
      const { security, securityDefinitions } = this;
      if (security) {
        Object.keys(security).forEach((k) => {
          const scopes = new import_resource_pb2.ApiScopes();
          scopes.setScopesList(security[k]);
          apiResource.getSecurityMap().set(k, scopes);
        });
      }
      resource.setName(this.name);
      resource.setType(import_resource_pb2.ResourceType.API);
      if (securityDefinitions) {
        Object.keys(securityDefinitions).forEach((k) => {
          const def = securityDefinitions[k];
          const definition = new import_resource_pb2.ApiSecurityDefinition();
          if (def.kind === "jwt") {
            const secDef = new import_resource_pb2.ApiSecurityDefinitionJwt();
            secDef.setIssuer(def.issuer);
            secDef.setAudiencesList(def.audiences);
            definition.setJwt(secDef);
          }
          apiResource.getSecurityDefinitionsMap().set(k, definition);
        });
      }
      req.setApi(apiResource);
      req.setResource(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, response) => {
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
};
var api2 = make(Api);
var jwt = (opts) => {
  return { kind: "jwt", issuer: opts.issuer, audiences: opts.audiences };
};
var composeMiddleware = (middleware) => Array.isArray(middleware) ? middleware : middleware ? [middleware] : [];

// src/resources/topic.ts
var import_resource_pb3 = __toESM(require_resource_pb());
var SubscriptionWorkerOptions = class {
  constructor(topic2) {
    this.topic = topic2;
  }
};
var Subscription = class {
  constructor(name, ...mw) {
    this.faas = new Faas(new SubscriptionWorkerOptions(name));
    this.faas.event(...mw);
  }
  start() {
    return __async(this, null, function* () {
      return this.faas.start();
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
      const req = new import_resource_pb3.ResourceDeclareRequest();
      const resource = new import_resource_pb3.Resource();
      resource.setName(this.name);
      resource.setType(import_resource_pb3.ResourceType.TOPIC);
      req.setResource(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, response) => {
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
            import_resource_pb3.Action.TOPICEVENTPUBLISH,
            import_resource_pb3.Action.TOPICLIST,
            import_resource_pb3.Action.TOPICDETAIL
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
   * @param mw handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  subscribe(...mw) {
    const sub = new Subscription(this.name, ...mw);
    return sub["start"]();
  }
  resourceType() {
    return import_resource_pb3.ResourceType.TOPIC;
  }
  /**
   * Unwraps the response details.
   *
   * Not used for topics.
   *
   * @param resp {never}
   */
  unwrapDetails(resp) {
    throw new Error("details unimplemented for topic");
  }
  /**
   * Return a topic reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const updates = resources.topic('updates').for('publishing')
   *
   * @param perms the required permission set
   * @returns a usable topic reference
   */
  for(...perms) {
    this.registerPolicy(...perms);
    return events().topic(this.name);
  }
};
var topic = make(TopicResource);

// src/resources/queue.ts
var import_resource_pb4 = __toESM(require_resource_pb());
var QueueResource = class extends SecureResource {
  /**
   * Register this queue as a required resource for the calling function/container.
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resource_pb4.ResourceDeclareRequest();
      const resource = new import_resource_pb4.Resource();
      resource.setName(this.name);
      resource.setType(import_resource_pb4.ResourceType.QUEUE);
      req.setResource(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(req, (error) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        });
      });
    });
  }
  permsToActions(...perms) {
    let actions = perms.reduce((actions2, p) => {
      switch (p) {
        case "sending":
          return [...actions2, import_resource_pb4.Action.QUEUESEND];
        case "receiving":
          return [...actions2, import_resource_pb4.Action.QUEUERECEIVE];
        default:
          throw new Error(
            `unknown permission ${p}, supported permissions is publishing.}
            )}`
          );
      }
    }, []);
    if (actions.length > 0) {
      actions = [...actions, import_resource_pb4.Action.QUEUELIST, import_resource_pb4.Action.QUEUEDETAIL];
    }
    return actions;
  }
  resourceType() {
    return import_resource_pb4.ResourceType.QUEUE;
  }
  unwrapDetails(resp) {
    throw new Error("details unimplemented for queue");
  }
  /**
   * Return a queue reference and registers the permissions required by the currently scoped function for this resource.
   *
   * e.g. const taskQueue = resources.queue('work').for('sending')
   *
   * @param perms the access that the currently scoped function is requesting to this resource.
   * @returns a useable queue.
   */
  for(...perms) {
    this.registerPolicy(...perms);
    return queues().queue(this.name);
  }
};
var queue = make(QueueResource);

// src/resources/collection.ts
var import_resource_pb5 = __toESM(require_resource_pb());
var everything = ["reading", "writing", "deleting"];
var CollectionResource = class extends SecureResource {
  /**
   * Register this collection as a required resource for the calling function/container
   *
   * @returns a promise that resolves when the registration is complete
   */
  register() {
    return __async(this, null, function* () {
      const req = new import_resource_pb5.ResourceDeclareRequest();
      const resource = new import_resource_pb5.Resource();
      resource.setName(this.name);
      resource.setType(import_resource_pb5.ResourceType.COLLECTION);
      req.setResource(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, response) => {
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
    let actions = perms.reduce((actions2, perm) => {
      switch (perm) {
        case "reading":
          return [
            ...actions2,
            import_resource_pb5.Action.COLLECTIONDOCUMENTREAD,
            import_resource_pb5.Action.COLLECTIONQUERY
          ];
        case "writing":
          return [...actions2, import_resource_pb5.Action.COLLECTIONDOCUMENTWRITE];
        case "deleting":
          return [...actions2, import_resource_pb5.Action.COLLECTIONDOCUMENTDELETE];
        default:
          throw new Error(
            `unknown collection permission ${perm}, supported permissions are ${everything.join(
              ", "
            )}`
          );
      }
    }, []);
    if (actions.length > 0) {
      actions = [...actions, import_resource_pb5.Action.COLLECTIONLIST];
    }
    return actions;
  }
  resourceType() {
    return import_resource_pb5.ResourceType.COLLECTION;
  }
  unwrapDetails(resp) {
    throw new Error("details unimplemented for collection");
  }
  /**
   * Return a collection reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const customers = resources.collection('customers').for('reading', 'writing')
   *
   * @param perms the required permission set
   * @returns a usable collection reference
   */
  for(...perms) {
    this.registerPolicy(...perms);
    return documents().collection(this.name);
  }
};
var newCollection = make(CollectionResource);
function collection(name) {
  return newCollection(name);
}

// src/resources/bucket.ts
var import_resource_pb6 = __toESM(require_resource_pb());
var everything2 = ["reading", "writing", "deleting"];
var BucketNotificationWorkerOptions = class {
  constructor(resource, eventType, eventFilter) {
    this.bucket = resource;
    this.eventType = this.toGrpcEventType(eventType);
    this.eventFilter = eventFilter;
  }
  toGrpcEventType(eventType) {
    switch (eventType.toLowerCase()) {
      case "created":
        return 1;
      case "deleted":
        return 2;
    }
    throw Error(`Event Type ${eventType} is unsupported`);
  }
};
var BucketNotification = class {
  constructor(name, filter, ...mw) {
    const [eventType, fileFilter] = filter.split(":");
    this.faas = new Faas(
      new BucketNotificationWorkerOptions(name, eventType, fileFilter)
    );
    this.faas.bucketNotification(...mw);
  }
  start() {
    return __async(this, null, function* () {
      return this.faas.start();
    });
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
      const req = new import_resource_pb6.ResourceDeclareRequest();
      const resource = new import_resource_pb6.Resource();
      resource.setName(this.name);
      resource.setType(import_resource_pb6.ResourceType.BUCKET);
      req.setResource(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, response) => {
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
        case "reading":
          return [...actions, import_resource_pb6.Action.BUCKETFILEGET, import_resource_pb6.Action.BUCKETFILELIST];
        case "writing":
          return [...actions, import_resource_pb6.Action.BUCKETFILEPUT];
        case "deleting":
          return [...actions, import_resource_pb6.Action.BUCKETFILEDELETE];
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
    return import_resource_pb6.ResourceType.BUCKET;
  }
  /**
   * Register and start a bucket notification handler that will be called for all events from this topic.
   *
   * @param filter the event type and file filter in the form: "type:filter"
   * @param mw handler middleware which will be run for every incoming event
   * @returns Promise which resolves when the handler server terminates
   */
  on(filter, ...mw) {
    const notification2 = new BucketNotification(this.name, filter, ...mw);
    return notification2["start"]();
  }
  unwrapDetails(resp) {
    throw new Error("details unimplemented for bucket");
  }
  /**
   * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const imgs = resources.bucket('image').for('writing')
   *
   * @param perms the required permission set
   * @returns a usable bucket reference
   */
  for(...perms) {
    this.registerPolicy(...perms);
    return storage().bucket(this.name);
  }
};
var bucket = make(BucketResource);

// src/resources/schedule.ts
var FREQUENCIES = ["days", "hours", "minutes"];
var RateWorkerOptions = class {
  constructor(description, rate, freq) {
    this.description = description;
    this.rate = rate;
    this.frequency = freq;
  }
};
var CronWorkerOptions = class {
  constructor(description, cron) {
    this.description = description;
    this.cron = cron;
  }
};
var Rate = class {
  constructor(schedule2, rate, ...mw) {
    const [, frequency] = rate.split(" ");
    const normalizedFrequency = frequency.toLocaleLowerCase();
    const rateNum = parseInt(rate);
    if (isNaN(rateNum)) {
      throw new Error(
        "invalid rate expression, expression must begin with a number"
      );
    }
    if (!FREQUENCIES.includes(normalizedFrequency)) {
      throw new Error(
        `invalid rate expression, frequency must be one of ${FREQUENCIES}, received ${frequency}`
      );
    }
    this.schedule = schedule2;
    this.faas = new Faas(
      new RateWorkerOptions(
        schedule2["description"],
        rateNum,
        normalizedFrequency
      )
    );
    this.faas.event(...mw);
  }
  start() {
    return __async(this, null, function* () {
      return this.faas.start();
    });
  }
};
var Cron = class {
  constructor(schedule2, cron, ...mw) {
    this.schedule = schedule2;
    this.faas = new Faas(new CronWorkerOptions(schedule2["description"], cron));
    this.faas.event(...mw);
  }
  start() {
    return __async(this, null, function* () {
      return this.faas.start();
    });
  }
};
var Schedule = class {
  constructor(description) {
    /**
     * Run this schedule on the provided frequency.
     *
     * @param rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'days', 'hours' or 'minutes'.
     * @param mw the handler/middleware to run on a schedule
     * @returns A promise that resolves when the schedule worker stops running.
     */
    this.every = (rate, ...mw) => {
      if (FREQUENCIES.indexOf(`${rate}s`) !== -1) {
        rate = `1 ${rate}s`;
      }
      const r = new Rate(this, rate, ...mw);
      return r["start"]();
    };
    this.cron = (expression, ...mw) => {
      const r = new Cron(this, expression, ...mw);
      return r["start"]();
    };
    this.description = description;
  }
};
var schedule = (description) => {
  return new Schedule(description);
};

// src/resources/secret.ts
var import_resource_pb7 = __toESM(require_resource_pb());
var everything3 = ["put", "access"];
var SecretResource = class extends SecureResource {
  register() {
    return __async(this, null, function* () {
      const req = new import_resource_pb7.ResourceDeclareRequest();
      const resource = new import_resource_pb7.Resource();
      resource.setName(this.name);
      resource.setType(import_resource_pb7.ResourceType.SECRET);
      req.setResource(resource);
      return new Promise((resolve, reject) => {
        client_default.declare(
          req,
          (error, response) => {
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
        case "put":
          return [...actions, import_resource_pb7.Action.SECRETPUT];
        case "access":
          return [...actions, import_resource_pb7.Action.SECRETACCESS];
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
    return import_resource_pb7.ResourceType.SECRET;
  }
  unwrapDetails(resp) {
    throw new Error("details unimplemented for secret");
  }
  for(...perms) {
    this.registerPolicy(...perms);
    return secrets().secret(this.name);
  }
};
var secret = make(SecretResource);

// src/faas/v0/start.ts
var grpc7 = __toESM(require("@grpc/grpc-js"));
var FaasWorkerOptions = class {
};
var Faas = class {
  constructor(opts) {
    this.options = opts;
  }
  /**
   * Add an event handler to this Faas server
   *
   * @param handlers the functions to call to respond to events
   * @returns self
   */
  event(...handlers) {
    this.eventHandler = createHandler(...handlers);
    return this;
  }
  /**
   * Add an http handler to this Faas server
   *
   * @param handlers the functions to call to respond to http requests
   * @returns self
   */
  http(...handlers) {
    this.httpHandler = createHandler(...handlers);
    return this;
  }
  /**
   * Add a notification handler to this Faas server
   *
   * @param handlers the functions to call to respond to notification requests
   * @returns self
   */
  bucketNotification(...handlers) {
    this.bucketNotificationHandler = createHandler(...handlers);
    return this;
  }
  /**
   * Get http handler for this server
   *
   * @returns the registered HTTP handler for this server
   */
  getHttpHandler() {
    return this.httpHandler || this.anyHandler;
  }
  /**
   * Get event handler for this server
   *
   * @returns the registered event handler for this server
   */
  getEventHandler() {
    return this.eventHandler || this.anyHandler;
  }
  /**
   * Get notification handler for this server
   *
   * @returns the registered notification handler for this server
   */
  getBucketNotificationHandler() {
    return this.bucketNotificationHandler || this.anyHandler;
  }
  /**
   * Start the Faas server
   *
   * @param handlers to use as the default when no other handler is registered for the request type
   * @returns a promise that resolves when the server terminates
   */
  start(...handlers) {
    return __async(this, null, function* () {
      const provider = traceProvider_default();
      this.anyHandler = handlers.length && createHandler(...handlers);
      if (!this.httpHandler && !this.eventHandler && !this.bucketNotificationHandler && !this.anyHandler) {
        throw new Error("A handler function must be provided.");
      }
      const faasClient = new import_faas_grpc_pb.FaasServiceClient(
        SERVICE_BIND,
        grpc7.ChannelCredentials.createInsecure()
      );
      const faasStream = faasClient.triggerStream();
      faasStream.on("data", (message) => __async(this, null, function* () {
        if (message.hasInitResponse()) {
          console.log("Function connected with membrane");
        } else if (message.hasTriggerRequest()) {
          const triggerRequest = message.getTriggerRequest();
          const responseMessage = new import_faas_pb2.ClientMessage();
          responseMessage.setId(message.getId());
          try {
            const ctx = TriggerContext.fromGrpcTriggerRequest(triggerRequest);
            let handler = void 0;
            let triggerType = "Unknown";
            if (ctx.http) {
              triggerType = "HTTP";
              handler = this.getHttpHandler();
            } else if (ctx.event) {
              triggerType = "Event";
              handler = this.getEventHandler();
            } else if (ctx.notification) {
              triggerType = "Notification";
              handler = this.getBucketNotificationHandler();
            } else {
              console.error(
                `received an unexpected trigger type, are you using an outdated version of the SDK?`
              );
            }
            if (!handler) {
              console.error(`no handler defined for ${triggerType} triggers`);
              faasStream.cancel();
              return;
            }
            const result = (yield handler(ctx, (ctx2) => __async(this, null, function* () {
              return ctx2;
            }))) || ctx;
            responseMessage.setTriggerResponse(
              TriggerContext.toGrpcTriggerResponse(result)
            );
          } catch (e) {
            console.error(e);
            const triggerResponse = new import_faas_pb2.TriggerResponse();
            responseMessage.setTriggerResponse(triggerResponse);
            triggerResponse.setData(
              new TextEncoder().encode("Internal Server Error")
            );
            if (triggerRequest.hasHttp()) {
              const httpResponse = new import_faas_pb2.HttpResponseContext();
              triggerResponse.setHttp(httpResponse);
              httpResponse.setStatus(500);
              const headersOld = httpResponse.getHeadersOldMap();
              headersOld.set("Content-Type", "text/plain");
              const headers = httpResponse.getHeadersMap();
              const contentTypeHeader = new import_faas_pb2.HeaderValue();
              contentTypeHeader.addValue("text/plain");
              headers.set("Content-Type", contentTypeHeader);
            } else if (triggerRequest.hasTopic()) {
              const topicResponse = new import_faas_pb2.TopicResponseContext();
              topicResponse.setSuccess(false);
              triggerResponse.setTopic(topicResponse);
            } else if (triggerRequest.hasNotification()) {
              const notificationResponse = new import_faas_pb2.NotificationResponseContext();
              notificationResponse.setSuccess(false);
              triggerResponse.setNotification(notificationResponse);
            }
          }
          faasStream.write(responseMessage);
        }
      }));
      const initRequest = new import_faas_pb2.InitRequest();
      const initMessage = new import_faas_pb2.ClientMessage();
      if (this.options instanceof ApiWorkerOptions) {
        const apiWorker = new import_faas_pb2.ApiWorker();
        apiWorker.setApi(this.options.api);
        apiWorker.setMethodsList(this.options.methods);
        apiWorker.setPath(this.options.route);
        const opts = new import_faas_pb2.ApiWorkerOptions();
        if (this.options.opts && this.options.opts.security) {
          if (Object.keys(this.options.opts.security).length == 0) {
            opts.setSecurityDisabled(true);
          } else {
            const methodOpts = this.options.opts;
            Object.keys(methodOpts.security).forEach((k) => {
              const scopes = new import_faas_pb2.ApiWorkerScopes();
              scopes.setScopesList(methodOpts.security[k]);
              opts.getSecurityMap().set(k, scopes);
            });
          }
        }
        apiWorker.setOptions(opts);
        initRequest.setApi(apiWorker);
      } else if (this.options instanceof RateWorkerOptions) {
        const scheduleWorker = new import_faas_pb2.ScheduleWorker();
        scheduleWorker.setKey(this.options.description);
        const rate = new import_faas_pb2.ScheduleRate();
        rate.setRate(`${this.options.rate} ${this.options.frequency}`);
        scheduleWorker.setRate(rate);
        initRequest.setSchedule(scheduleWorker);
      } else if (this.options instanceof CronWorkerOptions) {
        const scheduleWorker = new import_faas_pb2.ScheduleWorker();
        scheduleWorker.setKey(this.options.description);
        const cron = new import_faas_pb2.ScheduleCron();
        cron.setCron(this.options.cron);
        scheduleWorker.setCron(cron);
        initRequest.setSchedule(scheduleWorker);
      } else if (this.options instanceof SubscriptionWorkerOptions) {
        const subscriptionWorker = new import_faas_pb2.SubscriptionWorker();
        subscriptionWorker.setTopic(this.options.topic);
        initRequest.setSubscription(subscriptionWorker);
      } else if (this.options instanceof BucketNotificationWorkerOptions) {
        const notificationWorker = new import_faas_pb2.BucketNotificationWorker();
        notificationWorker.setBucket(this.options.bucket);
        const config = new import_faas_pb2.BucketNotificationConfig();
        config.setEventfilter(this.options.eventFilter);
        config.setEventtype(this.options.eventType);
        notificationWorker.setConfig(config);
        initRequest.setBucketnotification(notificationWorker);
      }
      initMessage.setInitRequest(initRequest);
      faasStream.write(initMessage);
      yield new Promise((res) => {
        faasStream.on("end", () => {
          console.log("Membrane has terminated the trigger stream");
          res();
        });
      });
      yield provider == null ? void 0 : provider.shutdown();
    });
  }
};
var INSTANCE = void 0;
var getFaasInstance = () => {
  INSTANCE = INSTANCE || new Faas(new FaasWorkerOptions());
  return INSTANCE;
};
var http = (...handlers) => getFaasInstance().http(...handlers);
var event = (...handlers) => getFaasInstance().event(...handlers);
var notification = (...handlers) => getFaasInstance().bucketNotification(...handlers);
var start = (...handlers) => __async(void 0, null, function* () {
  return yield getFaasInstance().start(...handlers);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Api,
  ApiWorkerOptions,
  Bucket,
  BucketNotificationWorkerOptions,
  BucketResource,
  CollectionResource,
  CronWorkerOptions,
  Documents,
  Eventing,
  File,
  FileMode,
  Queue,
  QueueResource,
  Queueing,
  RateWorkerOptions,
  ReceivedTask,
  Route,
  Secret,
  SecretResource,
  Secrets,
  Storage,
  SubscriptionWorkerOptions,
  Topic,
  TopicResource,
  api,
  bucket,
  collection,
  documents,
  events,
  faas,
  jwt,
  queue,
  queues,
  schedule,
  secret,
  secrets,
  storage,
  topic
});
