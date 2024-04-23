// source: nitric/proto/deployments/v1/deployments.proto
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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var nitric_proto_resources_v1_resources_pb = require('../../../../nitric/proto/resources/v1/resources_pb.js');
goog.object.extend(proto, nitric_proto_resources_v1_resources_pb);
var nitric_proto_storage_v1_storage_pb = require('../../../../nitric/proto/storage/v1/storage_pb.js');
goog.object.extend(proto, nitric_proto_storage_v1_storage_pb);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Api', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Api.DocumentCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Bucket', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.BucketListener', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.BucketListener.TargetCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DeploymentDownEvent', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DeploymentDownEvent.ContentCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DeploymentDownRequest', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DeploymentUpEvent', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DeploymentUpEvent.ContentCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DeploymentUpRequest', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.DownResult', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Http', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.HttpTarget', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.HttpTarget.TargetCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ImageSource', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.KeyValueStore', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Policy', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Queue', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Resource', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Resource.ConfigCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ResourceDeploymentAction', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ResourceDeploymentStatus', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ResourceUpdate', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Schedule', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Schedule.CadenceCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ScheduleCron', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ScheduleEvery', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ScheduleTarget', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.ScheduleTarget.TargetCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Secret', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Service', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Service.SourceCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Spec', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.SqlDatabase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.SubscriptionTarget', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.SubscriptionTarget.TargetCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Topic', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.TopicSubscription', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.UpResult', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.UpResult.ContentCase', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.Websocket', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.WebsocketTarget', null, global);
goog.exportSymbol('proto.nitric.proto.deployments.v1.WebsocketTarget.TargetCase', null, global);
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
proto.nitric.proto.deployments.v1.DeploymentUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.DeploymentUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.DeploymentUpRequest.displayName = 'proto.nitric.proto.deployments.v1.DeploymentUpRequest';
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
proto.nitric.proto.deployments.v1.DeploymentUpEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.DeploymentUpEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.DeploymentUpEvent.displayName = 'proto.nitric.proto.deployments.v1.DeploymentUpEvent';
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
proto.nitric.proto.deployments.v1.ResourceUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.ResourceUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.ResourceUpdate.displayName = 'proto.nitric.proto.deployments.v1.ResourceUpdate';
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
proto.nitric.proto.deployments.v1.UpResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.UpResult.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.UpResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.UpResult.displayName = 'proto.nitric.proto.deployments.v1.UpResult';
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
proto.nitric.proto.deployments.v1.DeploymentDownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.DeploymentDownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.DeploymentDownRequest.displayName = 'proto.nitric.proto.deployments.v1.DeploymentDownRequest';
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
proto.nitric.proto.deployments.v1.DeploymentDownEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.DeploymentDownEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.DeploymentDownEvent.displayName = 'proto.nitric.proto.deployments.v1.DeploymentDownEvent';
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
proto.nitric.proto.deployments.v1.DownResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.DownResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.DownResult.displayName = 'proto.nitric.proto.deployments.v1.DownResult';
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
proto.nitric.proto.deployments.v1.ImageSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.ImageSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.ImageSource.displayName = 'proto.nitric.proto.deployments.v1.ImageSource';
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
proto.nitric.proto.deployments.v1.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.Service.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Service.displayName = 'proto.nitric.proto.deployments.v1.Service';
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
proto.nitric.proto.deployments.v1.Bucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.deployments.v1.Bucket.repeatedFields_, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Bucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Bucket.displayName = 'proto.nitric.proto.deployments.v1.Bucket';
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
proto.nitric.proto.deployments.v1.BucketListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.BucketListener.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.BucketListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.BucketListener.displayName = 'proto.nitric.proto.deployments.v1.BucketListener';
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
proto.nitric.proto.deployments.v1.Topic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.deployments.v1.Topic.repeatedFields_, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Topic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Topic.displayName = 'proto.nitric.proto.deployments.v1.Topic';
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
proto.nitric.proto.deployments.v1.Queue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Queue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Queue.displayName = 'proto.nitric.proto.deployments.v1.Queue';
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
proto.nitric.proto.deployments.v1.KeyValueStore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.KeyValueStore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.KeyValueStore.displayName = 'proto.nitric.proto.deployments.v1.KeyValueStore';
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
proto.nitric.proto.deployments.v1.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Secret.displayName = 'proto.nitric.proto.deployments.v1.Secret';
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
proto.nitric.proto.deployments.v1.SubscriptionTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.SubscriptionTarget.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.SubscriptionTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.SubscriptionTarget.displayName = 'proto.nitric.proto.deployments.v1.SubscriptionTarget';
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
proto.nitric.proto.deployments.v1.TopicSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.TopicSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.TopicSubscription.displayName = 'proto.nitric.proto.deployments.v1.TopicSubscription';
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
proto.nitric.proto.deployments.v1.HttpTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.HttpTarget.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.HttpTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.HttpTarget.displayName = 'proto.nitric.proto.deployments.v1.HttpTarget';
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
proto.nitric.proto.deployments.v1.Http = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Http, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Http.displayName = 'proto.nitric.proto.deployments.v1.Http';
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
proto.nitric.proto.deployments.v1.Api = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.Api.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.Api, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Api.displayName = 'proto.nitric.proto.deployments.v1.Api';
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
proto.nitric.proto.deployments.v1.Websocket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Websocket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Websocket.displayName = 'proto.nitric.proto.deployments.v1.Websocket';
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
proto.nitric.proto.deployments.v1.WebsocketTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.WebsocketTarget.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.WebsocketTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.WebsocketTarget.displayName = 'proto.nitric.proto.deployments.v1.WebsocketTarget';
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
proto.nitric.proto.deployments.v1.ScheduleTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.ScheduleTarget.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.ScheduleTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.ScheduleTarget.displayName = 'proto.nitric.proto.deployments.v1.ScheduleTarget';
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
proto.nitric.proto.deployments.v1.Schedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.Schedule.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.Schedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Schedule.displayName = 'proto.nitric.proto.deployments.v1.Schedule';
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
proto.nitric.proto.deployments.v1.SqlDatabase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.SqlDatabase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.SqlDatabase.displayName = 'proto.nitric.proto.deployments.v1.SqlDatabase';
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
proto.nitric.proto.deployments.v1.ScheduleEvery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.ScheduleEvery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.ScheduleEvery.displayName = 'proto.nitric.proto.deployments.v1.ScheduleEvery';
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
proto.nitric.proto.deployments.v1.ScheduleCron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.ScheduleCron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.ScheduleCron.displayName = 'proto.nitric.proto.deployments.v1.ScheduleCron';
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
proto.nitric.proto.deployments.v1.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.nitric.proto.deployments.v1.Resource.oneofGroups_);
};
goog.inherits(proto.nitric.proto.deployments.v1.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Resource.displayName = 'proto.nitric.proto.deployments.v1.Resource';
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
proto.nitric.proto.deployments.v1.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.deployments.v1.Policy.repeatedFields_, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Policy.displayName = 'proto.nitric.proto.deployments.v1.Policy';
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
proto.nitric.proto.deployments.v1.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.proto.deployments.v1.Spec.repeatedFields_, null);
};
goog.inherits(proto.nitric.proto.deployments.v1.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.proto.deployments.v1.Spec.displayName = 'proto.nitric.proto.deployments.v1.Spec';
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
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.DeploymentUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && proto.nitric.proto.deployments.v1.Spec.toObject(includeInstance, f),
    attributes: (f = msg.getAttributes()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    interactive: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.DeploymentUpRequest;
  return proto.nitric.proto.deployments.v1.DeploymentUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.Spec;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setAttributes(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInteractive(value);
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
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.DeploymentUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.Spec.serializeBinaryToWriter
    );
  }
  f = message.getAttributes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getInteractive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Spec spec = 1;
 * @return {?proto.nitric.proto.deployments.v1.Spec}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.getSpec = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Spec} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Spec, 1));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Spec|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct attributes = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.getAttributes = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.setAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.clearAttributes = function() {
  return this.setAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.hasAttributes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool interactive = 3;
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.getInteractive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpRequest} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpRequest.prototype.setInteractive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.ContentCase = {
  CONTENT_NOT_SET: 0,
  MESSAGE: 1,
  UPDATE: 2,
  RESULT: 3
};

/**
 * @return {proto.nitric.proto.deployments.v1.DeploymentUpEvent.ContentCase}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.getContentCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.DeploymentUpEvent.ContentCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.DeploymentUpEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    update: (f = msg.getUpdate()) && proto.nitric.proto.deployments.v1.ResourceUpdate.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.nitric.proto.deployments.v1.UpResult.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.DeploymentUpEvent;
  return proto.nitric.proto.deployments.v1.DeploymentUpEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new proto.nitric.proto.deployments.v1.ResourceUpdate;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.ResourceUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 3:
      var value = new proto.nitric.proto.deployments.v1.UpResult;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.UpResult.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.DeploymentUpEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nitric.proto.deployments.v1.ResourceUpdate.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nitric.proto.deployments.v1.UpResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.setMessage = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.clearMessage = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResourceUpdate update = 2;
 * @return {?proto.nitric.proto.deployments.v1.ResourceUpdate}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.getUpdate = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.ResourceUpdate} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.ResourceUpdate, 2));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.ResourceUpdate|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UpResult result = 3;
 * @return {?proto.nitric.proto.deployments.v1.UpResult}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.getResult = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.UpResult} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.UpResult, 3));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.UpResult|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.deployments.v1.DeploymentUpEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentUpEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentUpEvent.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.ResourceUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.ResourceUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && nitric_proto_resources_v1_resources_pb.ResourceIdentifier.toObject(includeInstance, f),
    action: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    subResource: jspb.Message.getFieldWithDefault(msg, 5, ""),
    message: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.ResourceUpdate;
  return proto.nitric.proto.deployments.v1.ResourceUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.ResourceUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new nitric_proto_resources_v1_resources_pb.ResourceIdentifier;
      reader.readMessage(value,nitric_proto_resources_v1_resources_pb.ResourceIdentifier.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {!proto.nitric.proto.deployments.v1.ResourceDeploymentAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {!proto.nitric.proto.deployments.v1.ResourceDeploymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubResource(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.ResourceUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.ResourceUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      nitric_proto_resources_v1_resources_pb.ResourceIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSubResource();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional nitric.proto.resources.v1.ResourceIdentifier id = 1;
 * @return {?proto.nitric.proto.resources.v1.ResourceIdentifier}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.getId = function() {
  return /** @type{?proto.nitric.proto.resources.v1.ResourceIdentifier} */ (
    jspb.Message.getWrapperField(this, nitric_proto_resources_v1_resources_pb.ResourceIdentifier, 1));
};


/**
 * @param {?proto.nitric.proto.resources.v1.ResourceIdentifier|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate} returns this
*/
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate} returns this
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResourceDeploymentAction action = 3;
 * @return {!proto.nitric.proto.deployments.v1.ResourceDeploymentAction}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.getAction = function() {
  return /** @type {!proto.nitric.proto.deployments.v1.ResourceDeploymentAction} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nitric.proto.deployments.v1.ResourceDeploymentAction} value
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate} returns this
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ResourceDeploymentStatus status = 4;
 * @return {!proto.nitric.proto.deployments.v1.ResourceDeploymentStatus}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.getStatus = function() {
  return /** @type {!proto.nitric.proto.deployments.v1.ResourceDeploymentStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nitric.proto.deployments.v1.ResourceDeploymentStatus} value
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate} returns this
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string sub_resource = 5;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.getSubResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate} returns this
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.setSubResource = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.ResourceUpdate} returns this
 */
proto.nitric.proto.deployments.v1.ResourceUpdate.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.UpResult.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.UpResult.ContentCase = {
  CONTENT_NOT_SET: 0,
  TEXT: 2
};

/**
 * @return {proto.nitric.proto.deployments.v1.UpResult.ContentCase}
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.getContentCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.UpResult.ContentCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.UpResult.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.UpResult.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.UpResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.UpResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.UpResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.nitric.proto.deployments.v1.UpResult}
 */
proto.nitric.proto.deployments.v1.UpResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.UpResult;
  return proto.nitric.proto.deployments.v1.UpResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.UpResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.UpResult}
 */
proto.nitric.proto.deployments.v1.UpResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.nitric.proto.deployments.v1.UpResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.UpResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.UpResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.UpResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nitric.proto.deployments.v1.UpResult} returns this
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.UpResult} returns this
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.nitric.proto.deployments.v1.UpResult.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.UpResult} returns this
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 2, proto.nitric.proto.deployments.v1.UpResult.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.UpResult.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.DeploymentDownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.DeploymentDownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attributes: (f = msg.getAttributes()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    interactive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownRequest}
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.DeploymentDownRequest;
  return proto.nitric.proto.deployments.v1.DeploymentDownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentDownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownRequest}
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setAttributes(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInteractive(value);
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
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.DeploymentDownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentDownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttributes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getInteractive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Struct attributes = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.getAttributes = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownRequest} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.setAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownRequest} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.clearAttributes = function() {
  return this.setAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.hasAttributes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool interactive = 2;
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.getInteractive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownRequest} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentDownRequest.prototype.setInteractive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.ContentCase = {
  CONTENT_NOT_SET: 0,
  MESSAGE: 1,
  RESULT: 2,
  UPDATE: 3
};

/**
 * @return {proto.nitric.proto.deployments.v1.DeploymentDownEvent.ContentCase}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.getContentCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.DeploymentDownEvent.ContentCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.DeploymentDownEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: (f = msg.getResult()) && proto.nitric.proto.deployments.v1.DownResult.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.nitric.proto.deployments.v1.ResourceUpdate.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.DeploymentDownEvent;
  return proto.nitric.proto.deployments.v1.DeploymentDownEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new proto.nitric.proto.deployments.v1.DownResult;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.DownResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 3:
      var value = new proto.nitric.proto.deployments.v1.ResourceUpdate;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.ResourceUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
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
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.DeploymentDownEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nitric.proto.deployments.v1.DownResult.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nitric.proto.deployments.v1.ResourceUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.setMessage = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.clearMessage = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DownResult result = 2;
 * @return {?proto.nitric.proto.deployments.v1.DownResult}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.getResult = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.DownResult} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.DownResult, 2));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.DownResult|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceUpdate update = 3;
 * @return {?proto.nitric.proto.deployments.v1.ResourceUpdate}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.getUpdate = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.ResourceUpdate} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.ResourceUpdate, 3));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.ResourceUpdate|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} returns this
*/
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.nitric.proto.deployments.v1.DeploymentDownEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.DeploymentDownEvent} returns this
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.DeploymentDownEvent.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.nitric.proto.deployments.v1.DownResult.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.DownResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.DownResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DownResult.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.nitric.proto.deployments.v1.DownResult}
 */
proto.nitric.proto.deployments.v1.DownResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.DownResult;
  return proto.nitric.proto.deployments.v1.DownResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.DownResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.DownResult}
 */
proto.nitric.proto.deployments.v1.DownResult.deserializeBinaryFromReader = function(msg, reader) {
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


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.deployments.v1.DownResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.DownResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.DownResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.DownResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.nitric.proto.deployments.v1.ImageSource.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.ImageSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.ImageSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ImageSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.ImageSource}
 */
proto.nitric.proto.deployments.v1.ImageSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.ImageSource;
  return proto.nitric.proto.deployments.v1.ImageSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.ImageSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.ImageSource}
 */
proto.nitric.proto.deployments.v1.ImageSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
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
proto.nitric.proto.deployments.v1.ImageSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.ImageSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.ImageSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ImageSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.ImageSource.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.ImageSource} returns this
 */
proto.nitric.proto.deployments.v1.ImageSource.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.Service.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.Service.SourceCase = {
  SOURCE_NOT_SET: 0,
  IMAGE: 1
};

/**
 * @return {proto.nitric.proto.deployments.v1.Service.SourceCase}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getSourceCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.Service.SourceCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.Service.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = msg.getImage()) && proto.nitric.proto.deployments.v1.ImageSource.toObject(includeInstance, f),
    workers: jspb.Message.getFieldWithDefault(msg, 10, 0),
    timeout: jspb.Message.getFieldWithDefault(msg, 11, 0),
    memory: jspb.Message.getFieldWithDefault(msg, 12, 0),
    type: jspb.Message.getFieldWithDefault(msg, 13, ""),
    envMap: (f = msg.getEnvMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.nitric.proto.deployments.v1.Service}
 */
proto.nitric.proto.deployments.v1.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Service;
  return proto.nitric.proto.deployments.v1.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Service}
 */
proto.nitric.proto.deployments.v1.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.ImageSource;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.ImageSource.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorkers(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeout(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMemory(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 14:
      var value = msg.getEnvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.nitric.proto.deployments.v1.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.ImageSource.serializeBinaryToWriter
    );
  }
  f = message.getWorkers();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getMemory();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEnvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional ImageSource image = 1;
 * @return {?proto.nitric.proto.deployments.v1.ImageSource}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getImage = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.ImageSource} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.ImageSource, 1));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.ImageSource|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
*/
proto.nitric.proto.deployments.v1.Service.prototype.setImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.nitric.proto.deployments.v1.Service.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
 */
proto.nitric.proto.deployments.v1.Service.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Service.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 workers = 10;
 * @return {number}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getWorkers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
 */
proto.nitric.proto.deployments.v1.Service.prototype.setWorkers = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 timeout = 11;
 * @return {number}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
 */
proto.nitric.proto.deployments.v1.Service.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 memory = 12;
 * @return {number}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
 */
proto.nitric.proto.deployments.v1.Service.prototype.setMemory = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string type = 13;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
 */
proto.nitric.proto.deployments.v1.Service.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * map<string, string> env = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.nitric.proto.deployments.v1.Service.prototype.getEnvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.nitric.proto.deployments.v1.Service} returns this
 */
proto.nitric.proto.deployments.v1.Service.prototype.clearEnvMap = function() {
  this.getEnvMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nitric.proto.deployments.v1.Bucket.repeatedFields_ = [1];



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
proto.nitric.proto.deployments.v1.Bucket.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Bucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Bucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Bucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    listenersList: jspb.Message.toObjectList(msg.getListenersList(),
    proto.nitric.proto.deployments.v1.BucketListener.toObject, includeInstance)
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
 * @return {!proto.nitric.proto.deployments.v1.Bucket}
 */
proto.nitric.proto.deployments.v1.Bucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Bucket;
  return proto.nitric.proto.deployments.v1.Bucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Bucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Bucket}
 */
proto.nitric.proto.deployments.v1.Bucket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.BucketListener;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.BucketListener.deserializeBinaryFromReader);
      msg.addListeners(value);
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
proto.nitric.proto.deployments.v1.Bucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Bucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Bucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Bucket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListenersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.BucketListener.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BucketListener listeners = 1;
 * @return {!Array<!proto.nitric.proto.deployments.v1.BucketListener>}
 */
proto.nitric.proto.deployments.v1.Bucket.prototype.getListenersList = function() {
  return /** @type{!Array<!proto.nitric.proto.deployments.v1.BucketListener>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.deployments.v1.BucketListener, 1));
};


/**
 * @param {!Array<!proto.nitric.proto.deployments.v1.BucketListener>} value
 * @return {!proto.nitric.proto.deployments.v1.Bucket} returns this
*/
proto.nitric.proto.deployments.v1.Bucket.prototype.setListenersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nitric.proto.deployments.v1.BucketListener=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nitric.proto.deployments.v1.BucketListener}
 */
proto.nitric.proto.deployments.v1.Bucket.prototype.addListeners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.proto.deployments.v1.BucketListener, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.proto.deployments.v1.Bucket} returns this
 */
proto.nitric.proto.deployments.v1.Bucket.prototype.clearListenersList = function() {
  return this.setListenersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.BucketListener.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.BucketListener.TargetCase = {
  TARGET_NOT_SET: 0,
  SERVICE: 2
};

/**
 * @return {proto.nitric.proto.deployments.v1.BucketListener.TargetCase}
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.getTargetCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.BucketListener.TargetCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.BucketListener.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.BucketListener.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.BucketListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.BucketListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.BucketListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && nitric_proto_storage_v1_storage_pb.RegistrationRequest.toObject(includeInstance, f),
    service: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.nitric.proto.deployments.v1.BucketListener}
 */
proto.nitric.proto.deployments.v1.BucketListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.BucketListener;
  return proto.nitric.proto.deployments.v1.BucketListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.BucketListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.BucketListener}
 */
proto.nitric.proto.deployments.v1.BucketListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new nitric_proto_storage_v1_storage_pb.RegistrationRequest;
      reader.readMessage(value,nitric_proto_storage_v1_storage_pb.RegistrationRequest.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.nitric.proto.deployments.v1.BucketListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.BucketListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.BucketListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.BucketListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      nitric_proto_storage_v1_storage_pb.RegistrationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional nitric.proto.storage.v1.RegistrationRequest config = 1;
 * @return {?proto.nitric.proto.storage.v1.RegistrationRequest}
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.getConfig = function() {
  return /** @type{?proto.nitric.proto.storage.v1.RegistrationRequest} */ (
    jspb.Message.getWrapperField(this, nitric_proto_storage_v1_storage_pb.RegistrationRequest, 1));
};


/**
 * @param {?proto.nitric.proto.storage.v1.RegistrationRequest|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.BucketListener} returns this
*/
proto.nitric.proto.deployments.v1.BucketListener.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.BucketListener} returns this
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string service = 2;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.BucketListener} returns this
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.setService = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.nitric.proto.deployments.v1.BucketListener.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.BucketListener} returns this
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.clearService = function() {
  return jspb.Message.setOneofField(this, 2, proto.nitric.proto.deployments.v1.BucketListener.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.BucketListener.prototype.hasService = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nitric.proto.deployments.v1.Topic.repeatedFields_ = [1];



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
proto.nitric.proto.deployments.v1.Topic.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Topic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Topic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Topic.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriptionsList: jspb.Message.toObjectList(msg.getSubscriptionsList(),
    proto.nitric.proto.deployments.v1.SubscriptionTarget.toObject, includeInstance)
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
 * @return {!proto.nitric.proto.deployments.v1.Topic}
 */
proto.nitric.proto.deployments.v1.Topic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Topic;
  return proto.nitric.proto.deployments.v1.Topic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Topic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Topic}
 */
proto.nitric.proto.deployments.v1.Topic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.SubscriptionTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.SubscriptionTarget.deserializeBinaryFromReader);
      msg.addSubscriptions(value);
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
proto.nitric.proto.deployments.v1.Topic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Topic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Topic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Topic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.SubscriptionTarget.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SubscriptionTarget subscriptions = 1;
 * @return {!Array<!proto.nitric.proto.deployments.v1.SubscriptionTarget>}
 */
proto.nitric.proto.deployments.v1.Topic.prototype.getSubscriptionsList = function() {
  return /** @type{!Array<!proto.nitric.proto.deployments.v1.SubscriptionTarget>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.deployments.v1.SubscriptionTarget, 1));
};


/**
 * @param {!Array<!proto.nitric.proto.deployments.v1.SubscriptionTarget>} value
 * @return {!proto.nitric.proto.deployments.v1.Topic} returns this
*/
proto.nitric.proto.deployments.v1.Topic.prototype.setSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nitric.proto.deployments.v1.SubscriptionTarget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nitric.proto.deployments.v1.SubscriptionTarget}
 */
proto.nitric.proto.deployments.v1.Topic.prototype.addSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.proto.deployments.v1.SubscriptionTarget, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.proto.deployments.v1.Topic} returns this
 */
proto.nitric.proto.deployments.v1.Topic.prototype.clearSubscriptionsList = function() {
  return this.setSubscriptionsList([]);
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
proto.nitric.proto.deployments.v1.Queue.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Queue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Queue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Queue.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.nitric.proto.deployments.v1.Queue}
 */
proto.nitric.proto.deployments.v1.Queue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Queue;
  return proto.nitric.proto.deployments.v1.Queue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Queue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Queue}
 */
proto.nitric.proto.deployments.v1.Queue.deserializeBinaryFromReader = function(msg, reader) {
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


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.deployments.v1.Queue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Queue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Queue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Queue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.nitric.proto.deployments.v1.KeyValueStore.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.KeyValueStore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.KeyValueStore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.KeyValueStore.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.nitric.proto.deployments.v1.KeyValueStore}
 */
proto.nitric.proto.deployments.v1.KeyValueStore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.KeyValueStore;
  return proto.nitric.proto.deployments.v1.KeyValueStore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.KeyValueStore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.KeyValueStore}
 */
proto.nitric.proto.deployments.v1.KeyValueStore.deserializeBinaryFromReader = function(msg, reader) {
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


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.deployments.v1.KeyValueStore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.KeyValueStore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.KeyValueStore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.KeyValueStore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.nitric.proto.deployments.v1.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Secret.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.nitric.proto.deployments.v1.Secret}
 */
proto.nitric.proto.deployments.v1.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Secret;
  return proto.nitric.proto.deployments.v1.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Secret}
 */
proto.nitric.proto.deployments.v1.Secret.deserializeBinaryFromReader = function(msg, reader) {
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


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.deployments.v1.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Secret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.TargetCase = {
  TARGET_NOT_SET: 0,
  SERVICE: 1
};

/**
 * @return {proto.nitric.proto.deployments.v1.SubscriptionTarget.TargetCase}
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.getTargetCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.SubscriptionTarget.TargetCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.SubscriptionTarget.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.SubscriptionTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.SubscriptionTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.SubscriptionTarget}
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.SubscriptionTarget;
  return proto.nitric.proto.deployments.v1.SubscriptionTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.SubscriptionTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.SubscriptionTarget}
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.SubscriptionTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.SubscriptionTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.SubscriptionTarget} returns this
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.setService = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.SubscriptionTarget.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.SubscriptionTarget} returns this
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.clearService = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.SubscriptionTarget.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.SubscriptionTarget.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.nitric.proto.deployments.v1.TopicSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.TopicSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.TopicSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.TopicSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && proto.nitric.proto.deployments.v1.SubscriptionTarget.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.TopicSubscription}
 */
proto.nitric.proto.deployments.v1.TopicSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.TopicSubscription;
  return proto.nitric.proto.deployments.v1.TopicSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.TopicSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.TopicSubscription}
 */
proto.nitric.proto.deployments.v1.TopicSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.SubscriptionTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.SubscriptionTarget.deserializeBinaryFromReader);
      msg.setTarget(value);
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
proto.nitric.proto.deployments.v1.TopicSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.TopicSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.TopicSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.TopicSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.SubscriptionTarget.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubscriptionTarget target = 1;
 * @return {?proto.nitric.proto.deployments.v1.SubscriptionTarget}
 */
proto.nitric.proto.deployments.v1.TopicSubscription.prototype.getTarget = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.SubscriptionTarget} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.SubscriptionTarget, 1));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.SubscriptionTarget|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.TopicSubscription} returns this
*/
proto.nitric.proto.deployments.v1.TopicSubscription.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.TopicSubscription} returns this
 */
proto.nitric.proto.deployments.v1.TopicSubscription.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.TopicSubscription.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.HttpTarget.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.HttpTarget.TargetCase = {
  TARGET_NOT_SET: 0,
  SERVICE: 1
};

/**
 * @return {proto.nitric.proto.deployments.v1.HttpTarget.TargetCase}
 */
proto.nitric.proto.deployments.v1.HttpTarget.prototype.getTargetCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.HttpTarget.TargetCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.HttpTarget.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.HttpTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.HttpTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.HttpTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.HttpTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.HttpTarget}
 */
proto.nitric.proto.deployments.v1.HttpTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.HttpTarget;
  return proto.nitric.proto.deployments.v1.HttpTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.HttpTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.HttpTarget}
 */
proto.nitric.proto.deployments.v1.HttpTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.nitric.proto.deployments.v1.HttpTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.HttpTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.HttpTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.HttpTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.HttpTarget.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.HttpTarget} returns this
 */
proto.nitric.proto.deployments.v1.HttpTarget.prototype.setService = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.HttpTarget.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.HttpTarget} returns this
 */
proto.nitric.proto.deployments.v1.HttpTarget.prototype.clearService = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.HttpTarget.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.HttpTarget.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.nitric.proto.deployments.v1.Http.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Http.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Http} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Http.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && proto.nitric.proto.deployments.v1.HttpTarget.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.Http}
 */
proto.nitric.proto.deployments.v1.Http.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Http;
  return proto.nitric.proto.deployments.v1.Http.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Http} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Http}
 */
proto.nitric.proto.deployments.v1.Http.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.HttpTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.HttpTarget.deserializeBinaryFromReader);
      msg.setTarget(value);
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
proto.nitric.proto.deployments.v1.Http.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Http.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Http} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Http.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.HttpTarget.serializeBinaryToWriter
    );
  }
};


/**
 * optional HttpTarget target = 1;
 * @return {?proto.nitric.proto.deployments.v1.HttpTarget}
 */
proto.nitric.proto.deployments.v1.Http.prototype.getTarget = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.HttpTarget} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.HttpTarget, 1));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.HttpTarget|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Http} returns this
*/
proto.nitric.proto.deployments.v1.Http.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Http} returns this
 */
proto.nitric.proto.deployments.v1.Http.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Http.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.Api.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.Api.DocumentCase = {
  DOCUMENT_NOT_SET: 0,
  OPENAPI: 1
};

/**
 * @return {proto.nitric.proto.deployments.v1.Api.DocumentCase}
 */
proto.nitric.proto.deployments.v1.Api.prototype.getDocumentCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.Api.DocumentCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.Api.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.Api.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Api.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Api} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Api.toObject = function(includeInstance, msg) {
  var f, obj = {
    openapi: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.Api}
 */
proto.nitric.proto.deployments.v1.Api.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Api;
  return proto.nitric.proto.deployments.v1.Api.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Api} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Api}
 */
proto.nitric.proto.deployments.v1.Api.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenapi(value);
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
proto.nitric.proto.deployments.v1.Api.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Api.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Api} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Api.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string openapi = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.Api.prototype.getOpenapi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.Api} returns this
 */
proto.nitric.proto.deployments.v1.Api.prototype.setOpenapi = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.Api.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Api} returns this
 */
proto.nitric.proto.deployments.v1.Api.prototype.clearOpenapi = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.Api.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Api.prototype.hasOpenapi = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.nitric.proto.deployments.v1.Websocket.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Websocket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Websocket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Websocket.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectTarget: (f = msg.getConnectTarget()) && proto.nitric.proto.deployments.v1.WebsocketTarget.toObject(includeInstance, f),
    disconnectTarget: (f = msg.getDisconnectTarget()) && proto.nitric.proto.deployments.v1.WebsocketTarget.toObject(includeInstance, f),
    messageTarget: (f = msg.getMessageTarget()) && proto.nitric.proto.deployments.v1.WebsocketTarget.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.Websocket}
 */
proto.nitric.proto.deployments.v1.Websocket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Websocket;
  return proto.nitric.proto.deployments.v1.Websocket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Websocket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Websocket}
 */
proto.nitric.proto.deployments.v1.Websocket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.WebsocketTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.WebsocketTarget.deserializeBinaryFromReader);
      msg.setConnectTarget(value);
      break;
    case 2:
      var value = new proto.nitric.proto.deployments.v1.WebsocketTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.WebsocketTarget.deserializeBinaryFromReader);
      msg.setDisconnectTarget(value);
      break;
    case 3:
      var value = new proto.nitric.proto.deployments.v1.WebsocketTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.WebsocketTarget.deserializeBinaryFromReader);
      msg.setMessageTarget(value);
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
proto.nitric.proto.deployments.v1.Websocket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Websocket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Websocket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Websocket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.WebsocketTarget.serializeBinaryToWriter
    );
  }
  f = message.getDisconnectTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nitric.proto.deployments.v1.WebsocketTarget.serializeBinaryToWriter
    );
  }
  f = message.getMessageTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nitric.proto.deployments.v1.WebsocketTarget.serializeBinaryToWriter
    );
  }
};


/**
 * optional WebsocketTarget connect_target = 1;
 * @return {?proto.nitric.proto.deployments.v1.WebsocketTarget}
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.getConnectTarget = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.WebsocketTarget} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.WebsocketTarget, 1));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.WebsocketTarget|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Websocket} returns this
*/
proto.nitric.proto.deployments.v1.Websocket.prototype.setConnectTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Websocket} returns this
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.clearConnectTarget = function() {
  return this.setConnectTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.hasConnectTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WebsocketTarget disconnect_target = 2;
 * @return {?proto.nitric.proto.deployments.v1.WebsocketTarget}
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.getDisconnectTarget = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.WebsocketTarget} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.WebsocketTarget, 2));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.WebsocketTarget|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Websocket} returns this
*/
proto.nitric.proto.deployments.v1.Websocket.prototype.setDisconnectTarget = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Websocket} returns this
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.clearDisconnectTarget = function() {
  return this.setDisconnectTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.hasDisconnectTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WebsocketTarget message_target = 3;
 * @return {?proto.nitric.proto.deployments.v1.WebsocketTarget}
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.getMessageTarget = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.WebsocketTarget} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.WebsocketTarget, 3));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.WebsocketTarget|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Websocket} returns this
*/
proto.nitric.proto.deployments.v1.Websocket.prototype.setMessageTarget = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Websocket} returns this
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.clearMessageTarget = function() {
  return this.setMessageTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Websocket.prototype.hasMessageTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.TargetCase = {
  TARGET_NOT_SET: 0,
  SERVICE: 1
};

/**
 * @return {proto.nitric.proto.deployments.v1.WebsocketTarget.TargetCase}
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.getTargetCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.WebsocketTarget.TargetCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.WebsocketTarget.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.WebsocketTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.WebsocketTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.WebsocketTarget}
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.WebsocketTarget;
  return proto.nitric.proto.deployments.v1.WebsocketTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.WebsocketTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.WebsocketTarget}
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.WebsocketTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.WebsocketTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.WebsocketTarget} returns this
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.setService = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.WebsocketTarget.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.WebsocketTarget} returns this
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.clearService = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.WebsocketTarget.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.WebsocketTarget.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.TargetCase = {
  TARGET_NOT_SET: 0,
  SERVICE: 1
};

/**
 * @return {proto.nitric.proto.deployments.v1.ScheduleTarget.TargetCase}
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.getTargetCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.ScheduleTarget.TargetCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.ScheduleTarget.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.ScheduleTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.ScheduleTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.ScheduleTarget}
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.ScheduleTarget;
  return proto.nitric.proto.deployments.v1.ScheduleTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.ScheduleTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.ScheduleTarget}
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.ScheduleTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.ScheduleTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.ScheduleTarget} returns this
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.setService = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.ScheduleTarget.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.ScheduleTarget} returns this
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.clearService = function() {
  return jspb.Message.setOneofField(this, 1, proto.nitric.proto.deployments.v1.ScheduleTarget.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.ScheduleTarget.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.Schedule.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.Schedule.CadenceCase = {
  CADENCE_NOT_SET: 0,
  EVERY: 10,
  CRON: 11
};

/**
 * @return {proto.nitric.proto.deployments.v1.Schedule.CadenceCase}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.getCadenceCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.Schedule.CadenceCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.Schedule.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.Schedule.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Schedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Schedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Schedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && proto.nitric.proto.deployments.v1.ScheduleTarget.toObject(includeInstance, f),
    every: (f = msg.getEvery()) && proto.nitric.proto.deployments.v1.ScheduleEvery.toObject(includeInstance, f),
    cron: (f = msg.getCron()) && proto.nitric.proto.deployments.v1.ScheduleCron.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.Schedule}
 */
proto.nitric.proto.deployments.v1.Schedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Schedule;
  return proto.nitric.proto.deployments.v1.Schedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Schedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Schedule}
 */
proto.nitric.proto.deployments.v1.Schedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.ScheduleTarget;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.ScheduleTarget.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 10:
      var value = new proto.nitric.proto.deployments.v1.ScheduleEvery;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.ScheduleEvery.deserializeBinaryFromReader);
      msg.setEvery(value);
      break;
    case 11:
      var value = new proto.nitric.proto.deployments.v1.ScheduleCron;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.ScheduleCron.deserializeBinaryFromReader);
      msg.setCron(value);
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
proto.nitric.proto.deployments.v1.Schedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Schedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Schedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Schedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.ScheduleTarget.serializeBinaryToWriter
    );
  }
  f = message.getEvery();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.nitric.proto.deployments.v1.ScheduleEvery.serializeBinaryToWriter
    );
  }
  f = message.getCron();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.nitric.proto.deployments.v1.ScheduleCron.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScheduleTarget target = 1;
 * @return {?proto.nitric.proto.deployments.v1.ScheduleTarget}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.getTarget = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.ScheduleTarget} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.ScheduleTarget, 1));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.ScheduleTarget|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Schedule} returns this
*/
proto.nitric.proto.deployments.v1.Schedule.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Schedule} returns this
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ScheduleEvery every = 10;
 * @return {?proto.nitric.proto.deployments.v1.ScheduleEvery}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.getEvery = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.ScheduleEvery} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.ScheduleEvery, 10));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.ScheduleEvery|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Schedule} returns this
*/
proto.nitric.proto.deployments.v1.Schedule.prototype.setEvery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.deployments.v1.Schedule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Schedule} returns this
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.clearEvery = function() {
  return this.setEvery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.hasEvery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ScheduleCron cron = 11;
 * @return {?proto.nitric.proto.deployments.v1.ScheduleCron}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.getCron = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.ScheduleCron} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.ScheduleCron, 11));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.ScheduleCron|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Schedule} returns this
*/
proto.nitric.proto.deployments.v1.Schedule.prototype.setCron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.proto.deployments.v1.Schedule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Schedule} returns this
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.clearCron = function() {
  return this.setCron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Schedule.prototype.hasCron = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.nitric.proto.deployments.v1.SqlDatabase.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.SqlDatabase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.SqlDatabase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.SqlDatabase.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.nitric.proto.deployments.v1.SqlDatabase}
 */
proto.nitric.proto.deployments.v1.SqlDatabase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.SqlDatabase;
  return proto.nitric.proto.deployments.v1.SqlDatabase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.SqlDatabase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.SqlDatabase}
 */
proto.nitric.proto.deployments.v1.SqlDatabase.deserializeBinaryFromReader = function(msg, reader) {
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


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.proto.deployments.v1.SqlDatabase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.SqlDatabase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.SqlDatabase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.SqlDatabase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.nitric.proto.deployments.v1.ScheduleEvery.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.ScheduleEvery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.ScheduleEvery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ScheduleEvery.toObject = function(includeInstance, msg) {
  var f, obj = {
    rate: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.ScheduleEvery}
 */
proto.nitric.proto.deployments.v1.ScheduleEvery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.ScheduleEvery;
  return proto.nitric.proto.deployments.v1.ScheduleEvery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.ScheduleEvery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.ScheduleEvery}
 */
proto.nitric.proto.deployments.v1.ScheduleEvery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRate(value);
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
proto.nitric.proto.deployments.v1.ScheduleEvery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.ScheduleEvery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.ScheduleEvery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ScheduleEvery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rate = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.ScheduleEvery.prototype.getRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.ScheduleEvery} returns this
 */
proto.nitric.proto.deployments.v1.ScheduleEvery.prototype.setRate = function(value) {
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
proto.nitric.proto.deployments.v1.ScheduleCron.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.ScheduleCron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.ScheduleCron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ScheduleCron.toObject = function(includeInstance, msg) {
  var f, obj = {
    expression: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.nitric.proto.deployments.v1.ScheduleCron}
 */
proto.nitric.proto.deployments.v1.ScheduleCron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.ScheduleCron;
  return proto.nitric.proto.deployments.v1.ScheduleCron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.ScheduleCron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.ScheduleCron}
 */
proto.nitric.proto.deployments.v1.ScheduleCron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpression(value);
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
proto.nitric.proto.deployments.v1.ScheduleCron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.ScheduleCron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.ScheduleCron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.ScheduleCron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpression();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string expression = 1;
 * @return {string}
 */
proto.nitric.proto.deployments.v1.ScheduleCron.prototype.getExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.proto.deployments.v1.ScheduleCron} returns this
 */
proto.nitric.proto.deployments.v1.ScheduleCron.prototype.setExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.nitric.proto.deployments.v1.Resource.oneofGroups_ = [[10,11,12,13,14,15,16,17,18,19,20,21]];

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.Resource.ConfigCase = {
  CONFIG_NOT_SET: 0,
  SERVICE: 10,
  BUCKET: 11,
  TOPIC: 12,
  API: 13,
  POLICY: 14,
  SCHEDULE: 15,
  KEY_VALUE_STORE: 16,
  SECRET: 17,
  WEBSOCKET: 18,
  HTTP: 19,
  QUEUE: 20,
  SQL_DATABASE: 21
};

/**
 * @return {proto.nitric.proto.deployments.v1.Resource.ConfigCase}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getConfigCase = function() {
  return /** @type {proto.nitric.proto.deployments.v1.Resource.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0]));
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
proto.nitric.proto.deployments.v1.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && nitric_proto_resources_v1_resources_pb.ResourceIdentifier.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto.nitric.proto.deployments.v1.Service.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && proto.nitric.proto.deployments.v1.Bucket.toObject(includeInstance, f),
    topic: (f = msg.getTopic()) && proto.nitric.proto.deployments.v1.Topic.toObject(includeInstance, f),
    api: (f = msg.getApi()) && proto.nitric.proto.deployments.v1.Api.toObject(includeInstance, f),
    policy: (f = msg.getPolicy()) && proto.nitric.proto.deployments.v1.Policy.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && proto.nitric.proto.deployments.v1.Schedule.toObject(includeInstance, f),
    keyValueStore: (f = msg.getKeyValueStore()) && proto.nitric.proto.deployments.v1.KeyValueStore.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && proto.nitric.proto.deployments.v1.Secret.toObject(includeInstance, f),
    websocket: (f = msg.getWebsocket()) && proto.nitric.proto.deployments.v1.Websocket.toObject(includeInstance, f),
    http: (f = msg.getHttp()) && proto.nitric.proto.deployments.v1.Http.toObject(includeInstance, f),
    queue: (f = msg.getQueue()) && proto.nitric.proto.deployments.v1.Queue.toObject(includeInstance, f),
    sqlDatabase: (f = msg.getSqlDatabase()) && proto.nitric.proto.deployments.v1.SqlDatabase.toObject(includeInstance, f)
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
 * @return {!proto.nitric.proto.deployments.v1.Resource}
 */
proto.nitric.proto.deployments.v1.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Resource;
  return proto.nitric.proto.deployments.v1.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Resource}
 */
proto.nitric.proto.deployments.v1.Resource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new nitric_proto_resources_v1_resources_pb.ResourceIdentifier;
      reader.readMessage(value,nitric_proto_resources_v1_resources_pb.ResourceIdentifier.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 10:
      var value = new proto.nitric.proto.deployments.v1.Service;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 11:
      var value = new proto.nitric.proto.deployments.v1.Bucket;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Bucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 12:
      var value = new proto.nitric.proto.deployments.v1.Topic;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Topic.deserializeBinaryFromReader);
      msg.setTopic(value);
      break;
    case 13:
      var value = new proto.nitric.proto.deployments.v1.Api;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Api.deserializeBinaryFromReader);
      msg.setApi(value);
      break;
    case 14:
      var value = new proto.nitric.proto.deployments.v1.Policy;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    case 15:
      var value = new proto.nitric.proto.deployments.v1.Schedule;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 16:
      var value = new proto.nitric.proto.deployments.v1.KeyValueStore;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.KeyValueStore.deserializeBinaryFromReader);
      msg.setKeyValueStore(value);
      break;
    case 17:
      var value = new proto.nitric.proto.deployments.v1.Secret;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 18:
      var value = new proto.nitric.proto.deployments.v1.Websocket;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Websocket.deserializeBinaryFromReader);
      msg.setWebsocket(value);
      break;
    case 19:
      var value = new proto.nitric.proto.deployments.v1.Http;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Http.deserializeBinaryFromReader);
      msg.setHttp(value);
      break;
    case 20:
      var value = new proto.nitric.proto.deployments.v1.Queue;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Queue.deserializeBinaryFromReader);
      msg.setQueue(value);
      break;
    case 21:
      var value = new proto.nitric.proto.deployments.v1.SqlDatabase;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.SqlDatabase.deserializeBinaryFromReader);
      msg.setSqlDatabase(value);
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
proto.nitric.proto.deployments.v1.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      nitric_proto_resources_v1_resources_pb.ResourceIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.nitric.proto.deployments.v1.Service.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.nitric.proto.deployments.v1.Bucket.serializeBinaryToWriter
    );
  }
  f = message.getTopic();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.nitric.proto.deployments.v1.Topic.serializeBinaryToWriter
    );
  }
  f = message.getApi();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.nitric.proto.deployments.v1.Api.serializeBinaryToWriter
    );
  }
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.nitric.proto.deployments.v1.Policy.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.nitric.proto.deployments.v1.Schedule.serializeBinaryToWriter
    );
  }
  f = message.getKeyValueStore();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.nitric.proto.deployments.v1.KeyValueStore.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.nitric.proto.deployments.v1.Secret.serializeBinaryToWriter
    );
  }
  f = message.getWebsocket();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.nitric.proto.deployments.v1.Websocket.serializeBinaryToWriter
    );
  }
  f = message.getHttp();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.nitric.proto.deployments.v1.Http.serializeBinaryToWriter
    );
  }
  f = message.getQueue();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.nitric.proto.deployments.v1.Queue.serializeBinaryToWriter
    );
  }
  f = message.getSqlDatabase();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.nitric.proto.deployments.v1.SqlDatabase.serializeBinaryToWriter
    );
  }
};


/**
 * optional nitric.proto.resources.v1.ResourceIdentifier id = 1;
 * @return {?proto.nitric.proto.resources.v1.ResourceIdentifier}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getId = function() {
  return /** @type{?proto.nitric.proto.resources.v1.ResourceIdentifier} */ (
    jspb.Message.getWrapperField(this, nitric_proto_resources_v1_resources_pb.ResourceIdentifier, 1));
};


/**
 * @param {?proto.nitric.proto.resources.v1.ResourceIdentifier|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Service service = 10;
 * @return {?proto.nitric.proto.deployments.v1.Service}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getService = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Service} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Service, 10));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Service|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setService = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasService = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Bucket bucket = 11;
 * @return {?proto.nitric.proto.deployments.v1.Bucket}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getBucket = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Bucket} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Bucket, 11));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Bucket|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setBucket = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Topic topic = 12;
 * @return {?proto.nitric.proto.deployments.v1.Topic}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getTopic = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Topic} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Topic, 12));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Topic|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setTopic = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearTopic = function() {
  return this.setTopic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Api api = 13;
 * @return {?proto.nitric.proto.deployments.v1.Api}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getApi = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Api} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Api, 13));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Api|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setApi = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearApi = function() {
  return this.setApi(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasApi = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Policy policy = 14;
 * @return {?proto.nitric.proto.deployments.v1.Policy}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getPolicy = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Policy} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Policy, 14));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Policy|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setPolicy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Schedule schedule = 15;
 * @return {?proto.nitric.proto.deployments.v1.Schedule}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getSchedule = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Schedule} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Schedule, 15));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Schedule|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setSchedule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional KeyValueStore key_value_store = 16;
 * @return {?proto.nitric.proto.deployments.v1.KeyValueStore}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getKeyValueStore = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.KeyValueStore} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.KeyValueStore, 16));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.KeyValueStore|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setKeyValueStore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearKeyValueStore = function() {
  return this.setKeyValueStore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasKeyValueStore = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Secret secret = 17;
 * @return {?proto.nitric.proto.deployments.v1.Secret}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getSecret = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Secret} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Secret, 17));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Secret|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setSecret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Websocket websocket = 18;
 * @return {?proto.nitric.proto.deployments.v1.Websocket}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getWebsocket = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Websocket} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Websocket, 18));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Websocket|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setWebsocket = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearWebsocket = function() {
  return this.setWebsocket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasWebsocket = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Http http = 19;
 * @return {?proto.nitric.proto.deployments.v1.Http}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getHttp = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Http} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Http, 19));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Http|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setHttp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearHttp = function() {
  return this.setHttp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasHttp = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Queue queue = 20;
 * @return {?proto.nitric.proto.deployments.v1.Queue}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getQueue = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.Queue} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.Queue, 20));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.Queue|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setQueue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearQueue = function() {
  return this.setQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasQueue = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional SqlDatabase sql_database = 21;
 * @return {?proto.nitric.proto.deployments.v1.SqlDatabase}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.getSqlDatabase = function() {
  return /** @type{?proto.nitric.proto.deployments.v1.SqlDatabase} */ (
    jspb.Message.getWrapperField(this, proto.nitric.proto.deployments.v1.SqlDatabase, 21));
};


/**
 * @param {?proto.nitric.proto.deployments.v1.SqlDatabase|undefined} value
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
*/
proto.nitric.proto.deployments.v1.Resource.prototype.setSqlDatabase = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.nitric.proto.deployments.v1.Resource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.proto.deployments.v1.Resource} returns this
 */
proto.nitric.proto.deployments.v1.Resource.prototype.clearSqlDatabase = function() {
  return this.setSqlDatabase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.proto.deployments.v1.Resource.prototype.hasSqlDatabase = function() {
  return jspb.Message.getField(this, 21) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nitric.proto.deployments.v1.Policy.repeatedFields_ = [1,2,3];



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
proto.nitric.proto.deployments.v1.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    principalsList: jspb.Message.toObjectList(msg.getPrincipalsList(),
    proto.nitric.proto.deployments.v1.Resource.toObject, includeInstance),
    actionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.nitric.proto.deployments.v1.Resource.toObject, includeInstance)
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
 * @return {!proto.nitric.proto.deployments.v1.Policy}
 */
proto.nitric.proto.deployments.v1.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Policy;
  return proto.nitric.proto.deployments.v1.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Policy}
 */
proto.nitric.proto.deployments.v1.Policy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.Resource;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Resource.deserializeBinaryFromReader);
      msg.addPrincipals(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.nitric.proto.resources.v1.Action>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addActions(values[i]);
      }
      break;
    case 3:
      var value = new proto.nitric.proto.deployments.v1.Resource;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
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
proto.nitric.proto.deployments.v1.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrincipalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.Resource.serializeBinaryToWriter
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
      proto.nitric.proto.deployments.v1.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Resource principals = 1;
 * @return {!Array<!proto.nitric.proto.deployments.v1.Resource>}
 */
proto.nitric.proto.deployments.v1.Policy.prototype.getPrincipalsList = function() {
  return /** @type{!Array<!proto.nitric.proto.deployments.v1.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.deployments.v1.Resource, 1));
};


/**
 * @param {!Array<!proto.nitric.proto.deployments.v1.Resource>} value
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
*/
proto.nitric.proto.deployments.v1.Policy.prototype.setPrincipalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nitric.proto.deployments.v1.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nitric.proto.deployments.v1.Resource}
 */
proto.nitric.proto.deployments.v1.Policy.prototype.addPrincipals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.proto.deployments.v1.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
 */
proto.nitric.proto.deployments.v1.Policy.prototype.clearPrincipalsList = function() {
  return this.setPrincipalsList([]);
};


/**
 * repeated nitric.proto.resources.v1.Action actions = 2;
 * @return {!Array<!proto.nitric.proto.resources.v1.Action>}
 */
proto.nitric.proto.deployments.v1.Policy.prototype.getActionsList = function() {
  return /** @type {!Array<!proto.nitric.proto.resources.v1.Action>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.nitric.proto.resources.v1.Action>} value
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
 */
proto.nitric.proto.deployments.v1.Policy.prototype.setActionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.nitric.proto.resources.v1.Action} value
 * @param {number=} opt_index
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
 */
proto.nitric.proto.deployments.v1.Policy.prototype.addActions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
 */
proto.nitric.proto.deployments.v1.Policy.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * repeated Resource resources = 3;
 * @return {!Array<!proto.nitric.proto.deployments.v1.Resource>}
 */
proto.nitric.proto.deployments.v1.Policy.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.nitric.proto.deployments.v1.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.deployments.v1.Resource, 3));
};


/**
 * @param {!Array<!proto.nitric.proto.deployments.v1.Resource>} value
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
*/
proto.nitric.proto.deployments.v1.Policy.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.nitric.proto.deployments.v1.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nitric.proto.deployments.v1.Resource}
 */
proto.nitric.proto.deployments.v1.Policy.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nitric.proto.deployments.v1.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.proto.deployments.v1.Policy} returns this
 */
proto.nitric.proto.deployments.v1.Policy.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nitric.proto.deployments.v1.Spec.repeatedFields_ = [1];



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
proto.nitric.proto.deployments.v1.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.proto.deployments.v1.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.proto.deployments.v1.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.nitric.proto.deployments.v1.Resource.toObject, includeInstance)
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
 * @return {!proto.nitric.proto.deployments.v1.Spec}
 */
proto.nitric.proto.deployments.v1.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.proto.deployments.v1.Spec;
  return proto.nitric.proto.deployments.v1.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.proto.deployments.v1.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.proto.deployments.v1.Spec}
 */
proto.nitric.proto.deployments.v1.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.proto.deployments.v1.Resource;
      reader.readMessage(value,proto.nitric.proto.deployments.v1.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
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
proto.nitric.proto.deployments.v1.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.proto.deployments.v1.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.proto.deployments.v1.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.proto.deployments.v1.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nitric.proto.deployments.v1.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Resource resources = 1;
 * @return {!Array<!proto.nitric.proto.deployments.v1.Resource>}
 */
proto.nitric.proto.deployments.v1.Spec.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.nitric.proto.deployments.v1.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nitric.proto.deployments.v1.Resource, 1));
};


/**
 * @param {!Array<!proto.nitric.proto.deployments.v1.Resource>} value
 * @return {!proto.nitric.proto.deployments.v1.Spec} returns this
*/
proto.nitric.proto.deployments.v1.Spec.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nitric.proto.deployments.v1.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nitric.proto.deployments.v1.Resource}
 */
proto.nitric.proto.deployments.v1.Spec.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.proto.deployments.v1.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.proto.deployments.v1.Spec} returns this
 */
proto.nitric.proto.deployments.v1.Spec.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.ResourceDeploymentAction = {
  CREATE: 0,
  UPDATE: 1,
  REPLACE: 2,
  SAME: 3,
  DELETE: 4
};

/**
 * @enum {number}
 */
proto.nitric.proto.deployments.v1.ResourceDeploymentStatus = {
  PENDING: 0,
  IN_PROGRESS: 1,
  SUCCESS: 2,
  FAILED: 3
};

goog.object.extend(exports, proto.nitric.proto.deployments.v1);
