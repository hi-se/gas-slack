function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

(function (module) {

  var has = Object.prototype.hasOwnProperty,
    prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = [],
      events,
      name;
    if (this._eventsCount === 0) return names;
    for (name in events = this._events) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;
    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
        j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
    }
    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
})(eventemitter3);
var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

/*
Copyright (c) 2018 Slack Technologies, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

ref: ref: https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/methods.ts
*/
/**
 * Binds a certain `method` and its arguments and result types to the `apiCall` method in `WebClient`.
 */
function bindApiCall(self, method) {
  // We have to 'assert' that the bound method does indeed return the more specific `Result` type instead of just
  // `WebAPICallResult`
  return self.apiCall.bind(self, method);
}
function bindFilesUploadV2(self) {
  return self.filesUploadV2.bind(self);
}
/**
 * A class that defines all Web API methods, their arguments type, their response type, and binds those methods to the
 * `apiCall` class method.
 */
class Methods extends EventEmitter {
  constructor() {
    super();
    this.admin = {
      analytics: {
        /**
         * @description Retrieve analytics data for a given date, presented as a compressed JSON file.
         * @see {@link https://api.slack.com/methods/api.test `api.test` API reference}.
         */
        getFile: bindApiCall(this, "admin.analytics.getFile")
      },
      apps: {
        activities: {
          /**
           * @description Get logs for a specified team/org.
           * @see {@link https://api.slack.com/methods/admin.apps.activities.list `admin.apps.activities.list` API reference}.
           */
          list: bindApiCall(this, "admin.apps.activities.list")
        },
        /**
         * @description Approve an app for installation on a workspace.
         * @see {@link https://api.slack.com/methods/admin.apps.approve `admin.apps.approve` API reference}.
         */
        approve: bindApiCall(this, "admin.apps.approve"),
        approved: {
          /**
           * @description List approved apps for an org or workspace.
           * @see {@link https://api.slack.com/methods/admin.apps.approved.list `admin.apps.approved.list` API reference}.
           */
          list: bindApiCall(this, "admin.apps.approved.list")
        },
        /**
         * @description Clear an app resolution.
         * @see {@link https://api.slack.com/methods/admin.apps.clearResolution `admin.apps.clearResolution` API reference}.
         */
        clearResolution: bindApiCall(this, "admin.apps.clearResolution"),
        config: {
          /**
           * @description Look up the app config for connectors by their IDs.
           * @see {@link https://api.slack.com/methods/admin.apps.config.lookup `admin.apps.config.lookup` API reference}.
           */
          lookup: bindApiCall(this, "admin.apps.config.lookup"),
          /**
           * @description Set the app config for a connector.
           * @see {@link https://api.slack.com/methods/admin.apps.config.set `admin.apps.config.set` API reference}.
           */
          set: bindApiCall(this, "admin.apps.config.set")
        },
        requests: {
          /**
           * @description Cancel app request for team.
           * @see {@link https://api.slack.com/methods/admin.apps.requests.cancel `admin.apps.requests.cancel` API reference}.
           */
          cancel: bindApiCall(this, "admin.apps.requests.cancel"),
          /**
           * @description List app requests for a team/workspace.
           * @see {@link https://api.slack.com/methods/admin.apps.requests.list `admin.apps.requests.list` API reference}.
           */
          list: bindApiCall(this, "admin.apps.requests.list")
        },
        /**
         * @description Restrict an app for installation on a workspace.
         * @see {@link https://api.slack.com/methods/admin.apps.restrict `admin.apps.restrict` API reference}.
         */
        restrict: bindApiCall(this, "admin.apps.restrict"),
        restricted: {
          /**
           * @description List restricted apps for an org or workspace.
           * @see {@link https://api.slack.com/methods/admin.apps.restricted.list `admin.apps.restricted.list` API reference}.
           */
          list: bindApiCall(this, "admin.apps.restricted.list")
        },
        /**
         * @description Uninstall an app from one or many workspaces, or an entire enterprise organization.
         * @see {@link https://api.slack.com/methods/admin.apps.uninstall `admin.apps.uninstall` API reference}.
         */
        uninstall: bindApiCall(this, "admin.apps.uninstall")
      },
      auth: {
        policy: {
          /**
           * @description Assign entities to a particular authentication policy.
           * @see {@link https://api.slack.com/methods/admin.auth.policy.assignEntities `admin.auth.policy.assignEntities` API reference}.
           */
          assignEntities: bindApiCall(this, "admin.auth.policy.assignEntities"),
          /**
           * @description Fetch all the entities assigned to a particular authentication policy by name.
           * @see {@link https://api.slack.com/methods/admin.auth.policy.getEntities `admin.auth.policy.getEntities` API reference}.
           */
          getEntities: bindApiCall(this, "admin.auth.policy.getEntities"),
          /**
           * @description Remove specified entities from a specified authentication policy.
           * @see {@link https://api.slack.com/methods/admin.auth.policy.removeEntities `admin.auth.policy.removeEntities` API reference}.
           */
          removeEntities: bindApiCall(this, "admin.auth.policy.removeEntities")
        }
      },
      barriers: {
        /**
         * @description Create an Information Barrier.
         * @see {@link https://api.slack.com/methods/admin.barriers.create `admin.barriers.create` API reference}.
         */
        create: bindApiCall(this, "admin.barriers.create"),
        /**
         * @description Delete an existing Information Barrier.
         * @see {@link https://api.slack.com/methods/admin.barriers.delete `admin.barriers.delete` API reference}.
         */
        delete: bindApiCall(this, "admin.barriers.delete"),
        /**
         * @description Get all Information Barriers for your organization.
         * @see {@link https://api.slack.com/methods/admin.barriers.list `admin.barriers.list` API reference}.
         */
        list: bindApiCall(this, "admin.barriers.list"),
        /**
         * @description Update an existing Information Barrier.
         * @see {@link https://api.slack.com/methods/admin.barriers.update `admin.barriers.update` API reference}.
         */
        update: bindApiCall(this, "admin.barriers.update")
      },
      conversations: {
        /**
         * @description Archive a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.archive `admin.conversations.archive` API reference}.
         */
        archive: bindApiCall(this, "admin.conversations.archive"),
        /**
         * @description Archive public or private channels in bulk.
         * @see {@link https://api.slack.com/methods/admin.conversations.bulkArchive `admin.conversations.bulkArchive` API reference}.
         */
        bulkArchive: bindApiCall(this, "admin.conversations.bulkArchive"),
        /**
         * @description Delete public or private channels in bulk.
         * @see {@link https://api.slack.com/methods/admin.conversations.bulkDelet `admin.conversations.bulkDelete` API reference}.
         */
        bulkDelete: bindApiCall(this, "admin.conversations.bulkDelete"),
        /**
         * @description Move public or private channels in bulk.
         * @see {@link https://api.slack.com/methods/admin.conversations.bulkMove `admin.conversations.bulkMove` API reference}.
         */
        bulkMove: bindApiCall(this, "admin.conversations.bulkMove"),
        /**
         * @description Convert a public channel to a private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.convertToPrivate `admin.conversations.convertToPrivate` API reference}.
         */
        convertToPrivate: bindApiCall(this, "admin.conversations.convertToPrivate"),
        /**
         * @description Convert a private channel to a public channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.convertToPublic `admin.conversations.convertToPublic` API reference}.
         */
        convertToPublic: bindApiCall(this, "admin.conversations.convertToPublic"),
        /**
         * @description Create a public or private channel-based conversation.
         * @see {@link https://api.slack.com/methods/admin.conversations.create `admin.conversations.create` API reference}.
         */
        create: bindApiCall(this, "admin.conversations.create"),
        /**
         * @description Delete a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.delete `admin.conversations.delete` API reference}.
         */
        delete: bindApiCall(this, "admin.conversations.delete"),
        /**
         * @description Disconnect a connected channel from one or more workspaces.
         * @see {@link https://api.slack.com/methods/admin.conversations.disconnectShared `admin.conversations.disconnectShared` API reference}.
         */
        disconnectShared: bindApiCall(this, "admin.conversations.disconnectShared"),
        ekm: {
          /**
           * @description List all disconnected channels — i.e., channels that were once connected to other workspaces
           * and then disconnected — and the corresponding original channel IDs for key revocation with EKM.
           * @see {@link https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo `admin.conversations.ekm.listOriginalConnectedChannelInfo` API reference}.
           */
          listOriginalConnectedChannelInfo: bindApiCall(this, "admin.conversations.ekm.listOriginalConnectedChannelInfo")
        },
        /**
         * @description Get conversation preferences for a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.getConversationPrefs `admin.conversations.getConversationPrefs` API reference}.
         */
        getConversationPrefs: bindApiCall(this, "admin.conversations.getConversationPrefs"),
        /**
         * @description Get a conversation's retention policy.
         * @see {@link https://api.slack.com/methods/admin.conversations.getCustomRetention `admin.conversations.getCustomRetention` API reference}.
         */
        getCustomRetention: bindApiCall(this, "admin.conversations.getCustomRetention"),
        /**
         * @description Get all the workspaces a given public or private channel is connected to within
         * this Enterprise org.
         * @see {@link https://api.slack.com/methods/admin.conversations.getTeams `admin.conversations.getTeams` API reference}.
         */
        getTeams: bindApiCall(this, "admin.conversations.getTeams"),
        /**
         * @description Invite a user to a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.invite `admin.conversations.invite` API reference}.
         */
        invite: bindApiCall(this, "admin.conversations.invite"),
        /**
         * @description Returns channels on the given team using the filters.
         * @see {@link https://api.slack.com/methods/admin.conversations.lookup `admin.conversations.lookup` API reference}.
         */
        lookup: bindApiCall(this, "admin.conversations.lookup"),
        /**
         * @description Remove a conversation's retention policy.
         * @see {@link https://api.slack.com/methods/admin.conversations.removeCustomRetention `admin.conversations.removeCustomRetention` API reference}.
         */
        removeCustomRetention: bindApiCall(this, "admin.conversations.removeCustomRetention"),
        /**
         * @description Rename a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.rename `admin.conversations.rename` API reference}.
         */
        rename: bindApiCall(this, "admin.conversations.rename"),
        restrictAccess: {
          /**
           * @description Add an allowlist of IDP groups for accessing a channel.
           * @see {@link https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup `admin.conversations.restrictAccess.addGroup` API reference}.
           */
          addGroup: bindApiCall(this, "admin.conversations.restrictAccess.addGroup"),
          /**
           * @description List all IDP Groups linked to a channel.
           * @see {@link https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups `admin.conversations.restrictAccess.listGroups` API reference}.
           */
          listGroups: bindApiCall(this, "admin.conversations.restrictAccess.listGroups"),
          /**
           * @description Remove a linked IDP group linked from a private channel.
           * @see {@link https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup `admin.conversations.restrictAccess.removeGroup` API reference}.
           */
          removeGroup: bindApiCall(this, "admin.conversations.restrictAccess.removeGroup")
        },
        /**
         * @description Search for public or private channels in an Enterprise organization.
         * @see {@link https://api.slack.com/methods/admin.conversations.search `admin.conversations.search` API reference}.
         */
        search: bindApiCall(this, "admin.conversations.search"),
        /**
         * @description Set the posting permissions for a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.setConversationPrefs `admin.conversations.setConversationPrefs` API reference}.
         */
        setConversationPrefs: bindApiCall(this, "admin.conversations.setConversationPrefs"),
        /**
         * @description Set a conversation's retention policy.
         * @see {@link https://api.slack.com/methods/admin.conversations.setCustomRetention `admin.conversations.setCustomRetention` API reference}.
         */
        setCustomRetention: bindApiCall(this, "admin.conversations.setCustomRetention"),
        /**
         * @description Set the workspaces in an Enterprise grid org that connect to a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.setTeams `admin.conversations.setTeams` API reference}.
         */
        setTeams: bindApiCall(this, "admin.conversations.setTeams"),
        /**
         * @description Unarchive a public or private channel.
         * @see {@link https://api.slack.com/methods/admin.conversations.unarchive `admin.conversations.unarchive` API reference}.
         */
        unarchive: bindApiCall(this, "admin.conversations.unarchive")
      },
      emoji: {
        /**
         * @description Add an emoji.
         * @see {@link https://api.slack.com/methods/admin.emoji.add `admin.emoji.add` API reference}.
         */
        add: bindApiCall(this, "admin.emoji.add"),
        /**
         * @description Add an emoji alias.
         * @see {@link https://api.slack.com/methods/admin.emoji.addAlias `admin.emoji.addAlias` API reference}.
         */
        addAlias: bindApiCall(this, "admin.emoji.addAlias"),
        /**
         * @description List emoji for an Enterprise Grid organization.
         * @see {@link https://api.slack.com/methods/admin.emoji.list `admin.emoji.list` API reference}.
         */
        list: bindApiCall(this, "admin.emoji.list"),
        /**
         * @description Remove an emoji across an Enterprise Grid organization.
         * @see {@link https://api.slack.com/methods/admin.emoji.remove `admin.emoji.remove` API reference}.
         */
        remove: bindApiCall(this, "admin.emoji.remove"),
        /**
         * @description Rename an emoji.
         * @see {@link https://api.slack.com/methods/admin.emoji.rename `admin.emoji.rename` API reference}.
         */
        rename: bindApiCall(this, "admin.emoji.rename")
      },
      functions: {
        /**
         * @description Look up functions by a set of apps.
         * @see {@link https://api.slack.com/methods/admin.functions.list `admin.functions.list` API reference}.
         */
        list: bindApiCall(this, "admin.functions.list"),
        permissions: {
          /**
           * @description Lookup the visibility of multiple Slack functions and include the users if
           * it is limited to particular named entities.
           * @see {@link https://api.slack.com/methods/admin.functions.permissions.lookup `admin.functions.permissions.lookup` API reference}.
           */
          lookup: bindApiCall(this, "admin.functions.permissions.lookup"),
          /**
           * @description Set the visibility of a Slack function and define the users or workspaces if
           * it is set to named_entities.
           * @see {@link https://api.slack.com/methods/admin.functions.permissions.set `admin.functions.permissions.set` API reference}.
           */
          set: bindApiCall(this, "admin.functions.permissions.set")
        }
      },
      inviteRequests: {
        /**
         * @description Approve a workspace invite request.
         * @see {@link https://api.slack.com/methods/admin.inviteRequests.approve `admin.inviteRequests.approve` API reference}.
         */
        approve: bindApiCall(this, "admin.inviteRequests.approve"),
        approved: {
          /**
           * @description List all approved workspace invite requests.
           * @see {@link https://api.slack.com/methods/admin.inviteRequests.approved.list `admin.inviteRequests.approved.list` API reference}.
           */
          list: bindApiCall(this, "admin.inviteRequests.approved.list")
        },
        denied: {
          /**
           * @description List all denied workspace invite requests.
           * @see {@link https://api.slack.com/methods/admin.inviteRequests.denied.list `admin.inviteRequests.denied.list` API reference}.
           */
          list: bindApiCall(this, "admin.inviteRequests.denied.list")
        },
        /**
         * @description Deny a workspace invite request.
         * @see {@link https://api.slack.com/methods/admin.inviteRequests.deny `admin.inviteRequests.deny` API reference}.
         */
        deny: bindApiCall(this, "admin.inviteRequests.deny"),
        /**
         * @description List all pending workspace invite requests.
         * @see {@link https://api.slack.com/methods/admin.inviteRequests.list `admin.inviteRequests.list` API reference}.
         */
        list: bindApiCall(this, "admin.inviteRequests.list")
      },
      roles: {
        /**
         * @description Adds members to the specified role with the specified scopes.
         * @see {@link https://api.slack.com/methods/admin.roles.addAssignments `admin.roles.addAssignments` API reference}.
         */
        addAssignments: bindApiCall(this, "admin.roles.addAssignments"),
        /**
         * @description Lists assignments for all roles across entities.
         * Options to scope results by any combination of roles or entities.
         * @see {@link https://api.slack.com/methods/admin.roles.listAssignments `admin.roles.listAssignments` API reference}.
         */
        listAssignments: bindApiCall(this, "admin.roles.listAssignments"),
        /**
         * @description Removes a set of users from a role for the given scopes and entities.
         * @see {@link https://api.slack.com/methods/admin.roles.removeAssignments `admin.roles.removeAssignments` API reference}.
         */
        removeAssignments: bindApiCall(this, "admin.roles.removeAssignments")
      },
      teams: {
        admins: {
          /**
           * @description List all of the admins on a given workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.admins.list `admin.teams.admins.list` API reference}.
           */
          list: bindApiCall(this, "admin.teams.admins.list")
        },
        /**
         * @description Create an Enterprise team.
         * @see {@link https://api.slack.com/methods/admin.teams.create `admin.teams.create` API reference}.
         */
        create: bindApiCall(this, "admin.teams.create"),
        /**
         * @description List all teams on an Enterprise organization.
         * @see {@link https://api.slack.com/methods/admin.teams.list `admin.teams.list` API reference}.
         */
        list: bindApiCall(this, "admin.teams.list"),
        owners: {
          /**
           * @description List all of the owners on a given workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.owners.list `admin.teams.owners.list` API reference}.
           */
          list: bindApiCall(this, "admin.teams.owners.list")
        },
        settings: {
          /**
           * @description Fetch information about settings in a workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.owners.list `admin.teams.owners.list` API reference}.
           */
          info: bindApiCall(this, "admin.teams.settings.info"),
          /**
           * @description Set the default channels of a workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.settings.setDefaultChannels `admin.teams.settings.setDefaultChannels` API reference}.
           */
          setDefaultChannels: bindApiCall(this, "admin.teams.settings.setDefaultChannels"),
          /**
           * @description Set the description of a given workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.settings.setDescription `admin.teams.settings.setDescription` API reference}.
           */
          setDescription: bindApiCall(this, "admin.teams.settings.setDescription"),
          /**
           * @description Set the discoverability of a given workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.settings.setDiscoverability `admin.teams.settings.setDiscoverability` API reference}.
           */
          setDiscoverability: bindApiCall(this, "admin.teams.settings.setDiscoverability"),
          /**
           * @description Sets the icon of a workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.settings.setIcon `admin.teams.settings.setIcon` API reference}.
           */
          setIcon: bindApiCall(this, "admin.teams.settings.setIcon"),
          /**
           * @description Set the name of a given workspace.
           * @see {@link https://api.slack.com/methods/admin.teams.settings.setName `admin.teams.settings.setName` API reference}.
           */
          setName: bindApiCall(this, "admin.teams.settings.setName")
        }
      },
      usergroups: {
        /**
         * @description Add up to one hundred default channels to an IDP group.
         * @see {@link https://api.slack.com/methods/admin.usergroups.addChannels `admin.teams.usergroups.addChannels` API reference}.
         */
        addChannels: bindApiCall(this, "admin.usergroups.addChannels"),
        /**
         * @description Associate one or more default workspaces with an organization-wide IDP group.
         * @see {@link https://api.slack.com/methods/admin.usergroups.addTeams `admin.teams.usergroups.addTeams` API reference}.
         */
        addTeams: bindApiCall(this, "admin.usergroups.addTeams"),
        /**
         * @description List the channels linked to an org-level IDP group (user group).
         * @see {@link https://api.slack.com/methods/admin.usergroups.listChannels `admin.teams.usergroups.listChannels` API reference}.
         */
        listChannels: bindApiCall(this, "admin.usergroups.listChannels"),
        /**
         * @description Remove one or more default channels from an org-level IDP group (user group).
         * @see {@link https://api.slack.com/methods/admin.usergroups.removeChannels `admin.teams.usergroups.removeChannels` API reference}.
         */
        removeChannels: bindApiCall(this, "admin.usergroups.removeChannels")
      },
      users: {
        /**
         * @description Add an Enterprise user to a workspace.
         * @see {@link https://api.slack.com/methods/admin.users.assign `admin.users.assign` API reference}.
         */
        assign: bindApiCall(this, "admin.users.assign"),
        /**
         * @description Invite a user to a workspace.
         * @see {@link https://api.slack.com/methods/admin.users.invite `admin.users.invite` API reference}.
         */
        invite: bindApiCall(this, "admin.users.invite"),
        /**
         * @description List users on a workspace.
         * @see {@link https://api.slack.com/methods/admin.users.list `admin.users.list` API reference}.
         */
        list: bindApiCall(this, "admin.users.list"),
        /**
         * @description Remove a user from a workspace.
         * @see {@link https://api.slack.com/methods/admin.users.remove `admin.users.remove` API reference}.
         */
        remove: bindApiCall(this, "admin.users.remove"),
        session: {
          /**
           * @description Clear user-specific session settings—the session duration and what happens when the client
           * closes—for a list of users.
           * @see {@link https://api.slack.com/methods/admin.users.session.clearSettings `admin.users.session.clearSettings` API reference}.
           */
          clearSettings: bindApiCall(this, "admin.users.session.clearSettings"),
          /**
           * @description Get user-specific session settings—the session duration and what happens when the client
           * closes—given a list of users.
           * @see {@link https://api.slack.com/methods/admin.users.session.getSettings `admin.users.session.getSettings` API reference}.
           */
          getSettings: bindApiCall(this, "admin.users.session.getSettings"),
          /**
           * @description Revoke a single session for a user. The user will be forced to login to Slack.
           * @see {@link https://api.slack.com/methods/admin.users.session.invalidate `admin.users.session.invalidate` API reference}.
           */
          invalidate: bindApiCall(this, "admin.users.session.invalidate"),
          /**
           * @description List active user sessions for an organization.
           * @see {@link https://api.slack.com/methods/admin.users.session.list `admin.users.session.list` API reference}.
           */
          list: bindApiCall(this, "admin.users.session.list"),
          /**
           * @description Wipes all valid sessions on all devices for a given user.
           * @see {@link https://api.slack.com/methods/admin.users.session.reset `admin.users.session.reset` API reference}.
           */
          reset: bindApiCall(this, "admin.users.session.reset"),
          /**
           * @description Enqueues an asynchronous job to wipe all valid sessions on all devices for a given user list.
           * @see {@link https://api.slack.com/methods/admin.users.session.resetBulk `admin.users.session.resetBulk` API reference}.
           */
          resetBulk: bindApiCall(this, "admin.users.session.resetBulk"),
          /**
           * @description Configure the user-level session settings—the session duration and what happens when the client
           * closes—for one or more users.
           * @see {@link https://api.slack.com/methods/admin.users.session.setSettings `admin.users.session.setSettings` API reference}.
           */
          setSettings: bindApiCall(this, "admin.users.session.setSettings")
        },
        /**
         * @description Set an existing guest, regular user, or owner to be an admin user.
         * @see {@link https://api.slack.com/methods/admin.users.setAdmin `admin.users.setAdmin` API reference}.
         */
        setAdmin: bindApiCall(this, "admin.users.setAdmin"),
        /**
         * @description Set an expiration for a guest user.
         * @see {@link https://api.slack.com/methods/admin.users.setExpiration `admin.users.setExpiration` API reference}.
         */
        setExpiration: bindApiCall(this, "admin.users.setExpiration"),
        /**
         * @description Set an existing guest, regular user, or admin user to be a workspace owner.
         * @see {@link https://api.slack.com/methods/admin.users.setOwner `admin.users.setOwner` API reference}.
         */
        setOwner: bindApiCall(this, "admin.users.setOwner"),
        /**
         * @description Set an existing guest user, admin user, or owner to be a regular user.
         * @see {@link https://api.slack.com/methods/admin.users.setRegular `admin.users.setRegular` API reference}.
         */
        setRegular: bindApiCall(this, "admin.users.setRegular"),
        unsupportedVersions: {
          /**
           * @description Ask Slackbot to send you an export listing all workspace members using unsupported software,
           * presented as a zipped CSV file.
           * @see {@link https://api.slack.com/methods/admin.users.unsupportedVersions.export `admin.users.unsupportedVersions.export` API reference}.
           */
          export: bindApiCall(this, "admin.users.unsupportedVersions.export")
        }
      },
      workflows: {
        collaborators: {
          /**
           * @description Add collaborators to workflows within the team or enterprise.
           * @see {@link https://api.slack.com/methods/admin.workflows.collaborators.add `admin.workflows.collaborators.add` API reference}.
           */
          add: bindApiCall(this, "admin.workflows.collaborators.add"),
          /**
           * @description Remove collaborators from workflows within the team or enterprise.
           * @see {@link https://api.slack.com/methods/admin.workflows.collaborators.remove `admin.workflows.collaborators.remove` API reference}.
           */
          remove: bindApiCall(this, "admin.workflows.collaborators.remove")
        },
        permissions: {
          /**
           * @description Look up the permissions for a set of workflows.
           * @see {@link https://api.slack.com/methods/admin.workflows.permissions.lookup `admin.workflows.permissions.lookup` API reference}.
           */
          lookup: bindApiCall(this, "admin.workflows.permissions.lookup")
        },
        /**
         * @description Search workflows within the team or enterprise.
         * @see {@link https://api.slack.com/methods/admin.workflows.search `admin.workflows.search` API reference}.
         */
        search: bindApiCall(this, "admin.workflows.search"),
        /**
         * @description Unpublish workflows within the team or enterprise.
         * @see {@link https://api.slack.com/methods/admin.workflows.unpublish `admin.workflows.unpublish` API reference}.
         */
        unpublish: bindApiCall(this, "admin.workflows.unpublish")
      }
    };
    this.api = {
      /**
       * @description Checks API calling code.
       * @see {@link https://api.slack.com/methods/api.test `api.test` API reference}.
       */
      test: bindApiCall(this, "api.test")
    };
    this.apps = {
      connections: {
        /**
         * @description Generate a temporary Socket Mode WebSocket URL that your app can connect to in order to receive
         * events and interactive payloads over.
         * @see {@link https://api.slack.com/methods/apps.connections.open `apps.connections.open` API reference}.
         */
        open: bindApiCall(this, "apps.connections.open")
      },
      event: {
        authorizations: {
          /**
           * @description Get a list of authorizations for the given event context.
           * Each authorization represents an app installation that the event is visible to.
           * @see {@link https://api.slack.com/methods/apps.event.authorizations.list `apps.event.authorizations.list` API reference}.
           */
          list: bindApiCall(this, "apps.event.authorizations.list")
        }
      },
      manifest: {
        /**
         * @description Create an app from an app manifest.
         * @see {@link https://api.slack.com/methods/apps.manifest.create `apps.manifest.create` API reference}.
         */
        create: bindApiCall(this, "apps.manifest.create"),
        /**
         * @description Permanently deletes an app created through app manifests.
         * @see {@link https://api.slack.com/methods/apps.manifest.delete `apps.manifest.delete` API reference}.
         */
        delete: bindApiCall(this, "apps.manifest.delete"),
        /**
         * @description Export an app manifest from an existing app.
         * @see {@link https://api.slack.com/methods/apps.manifest.export `apps.manifest.export` API reference}.
         */
        export: bindApiCall(this, "apps.manifest.export"),
        /**
         * @description Update an app from an app manifest.
         * @see {@link https://api.slack.com/methods/apps.manifest.update `apps.manifest.update` API reference}.
         */
        update: bindApiCall(this, "apps.manifest.update"),
        /**
         * @description Validate an app manifest.
         * @see {@link https://api.slack.com/methods/apps.manifest.validate `apps.manifest.validate` API reference}.
         */
        validate: bindApiCall(this, "apps.manifest.validate")
      },
      /**
       * @description Uninstalls your app from a workspace.
       * @see {@link https://api.slack.com/methods/apps.uninstall `apps.uninstall` API reference}.
       */
      uninstall: bindApiCall(this, "apps.uninstall")
    };
    this.auth = {
      /**
       * @description Revokes a token.
       * @see {@link https://api.slack.com/methods/auth.revoke `auth.revoke` API reference}.
       */
      revoke: bindApiCall(this, "auth.revoke"),
      teams: {
        /**
         * @description Obtain a full list of workspaces your org-wide app has been approved for.
         * @see {@link https://api.slack.com/methods/auth.teams.list `auth.teams.list` API reference}.
         */
        list: bindApiCall(this, "auth.teams.list")
      },
      test: bindApiCall(this, "auth.test")
    };
    this.bookmarks = {
      /**
       * @description Add bookmark to a channel.
       * @see {@link https://api.slack.com/methods/bookmarks.add `bookmarks.add` API reference}.
       */
      add: bindApiCall(this, "bookmarks.add"),
      /**
       * @description Edit bookmark.
       * @see {@link https://api.slack.com/methods/bookmarks.edit `bookmarks.edit` API reference}.
       */
      edit: bindApiCall(this, "bookmarks.edit"),
      /**
       * @description List bookmarks for a channel.
       * @see {@link https://api.slack.com/methods/bookmarks.list `bookmarks.list` API reference}.
       */
      list: bindApiCall(this, "bookmarks.list"),
      /**
       * @description Remove bookmark from a channel.
       * @see {@link https://api.slack.com/methods/bookmarks.remove `bookmarks.remove` API reference}.
       */
      remove: bindApiCall(this, "bookmarks.remove")
    };
    this.bots = {
      /**
       * @description Gets information about a bot user.
       * @see {@link https://api.slack.com/methods/bots.info `bots.info` API reference}.
       */
      info: bindApiCall(this, "bots.info")
    };
    this.calls = {
      /**
       * @description Registers a new Call.
       * @see {@link https://api.slack.com/methods/calls.add `calls.add` API reference}.
       */
      add: bindApiCall(this, "calls.add"),
      /**
       * @description Ends a Call.
       * @see {@link https://api.slack.com/methods/calls.end `calls.end` API reference}.
       */
      end: bindApiCall(this, "calls.end"),
      /**
       * @description Returns information about a Call.
       * @see {@link https://api.slack.com/methods/calls.info `calls.info` API reference}.
       */
      info: bindApiCall(this, "calls.info"),
      /**
       * @description Updates information about a Call.
       * @see {@link https://api.slack.com/methods/calls.info `calls.info` API reference}.
       */
      update: bindApiCall(this, "calls.update"),
      participants: {
        /**
         * @description Registers new participants added to a Call.
         * @see {@link https://api.slack.com/methods/calls.participants.add `calls.participants.add` API reference}.
         */
        add: bindApiCall(this, "calls.participants.add"),
        remove: bindApiCall(this, "calls.participants.remove")
      }
    };
    this.chat = {
      /**
       * @description Deletes a message.
       * @see {@link https://api.slack.com/methods/chat.delete `chat.delete` API reference}.
       */
      delete: bindApiCall(this, "chat.delete"),
      /**
       * @description Deletes a pending scheduled message from the queue.
       * @see {@link https://api.slack.com/methods/chat.deleteScheduledMessage `chat.deleteScheduledMessage` API reference}.
       */
      deleteScheduledMessage: bindApiCall(this, "chat.deleteScheduledMessage"),
      /**
       * @description Retrieve a permalink URL for a specific extant message.
       * @see {@link https://api.slack.com/methods/chat.getPermalink `chat.getPermalink` API reference}.
       */
      getPermalink: bindApiCall(this, "chat.getPermalink"),
      /**
       * @description Share a me message into a channel.
       * @see {@link https://api.slack.com/methods/chat.meMessage `chat.meMessage` API reference}.
       */
      meMessage: bindApiCall(this, "chat.meMessage"),
      /**
       * @description Sends an ephemeral message to a user in a channel.
       * @see {@link https://api.slack.com/methods/chat.postEphemeral `chat.postEphemeral` API reference}.
       */
      postEphemeral: bindApiCall(this, "chat.postEphemeral"),
      /**
       * @description Sends a message to a channel.
       * @see {@link https://api.slack.com/methods/chat.postMessage `chat.postMessage` API reference}.
       */
      postMessage: bindApiCall(this, "chat.postMessage"),
      /**
       * @description Schedules a message to be sent to a channel.
       * @see {@link https://api.slack.com/methods/chat.scheduleMessage `chat.scheduleMessage` API reference}.
       */
      scheduleMessage: bindApiCall(this, "chat.scheduleMessage"),
      scheduledMessages: {
        /**
         * @description Returns a list of scheduled messages.
         * @see {@link https://api.slack.com/methods/chat.scheduledMessages.list `chat.scheduledMessages.list` API reference}.
         */
        list: bindApiCall(this, "chat.scheduledMessages.list")
      },
      /**
       * @description Provide custom unfurl behavior for user-posted URLs.
       * @see {@link https://api.slack.com/methods/chat.unfurl `chat.unfurl` API reference}.
       */
      unfurl: bindApiCall(this, "chat.unfurl"),
      /**
       * @description Updates a message.
       * @see {@link https://api.slack.com/methods/chat.update `chat.update` API reference}.
       */
      update: bindApiCall(this, "chat.update")
    };
    this.conversations = {
      /**
       * @description Accepts an invitation to a Slack Connect channel.
       * @see {@link https://api.slack.com/methods/conversations.acceptSharedInvite `conversations.acceptSharedInvite` API reference}.
       */
      acceptSharedInvite: bindApiCall(this, "conversations.acceptSharedInvite"),
      /**
       * @description Approves an invitation to a Slack Connect channel.
       * @see {@link https://api.slack.com/methods/conversations.approveSharedInvite `conversations.approveSharedInvite` API reference}.
       */
      approveSharedInvite: bindApiCall(this, "conversations.approveSharedInvite"),
      /**
       * @description Archives a conversation.
       * @see {@link https://api.slack.com/methods/conversations.archive `conversations.archive` API reference}.
       */
      archive: bindApiCall(this, "conversations.archive"),
      /**
       * @description Closes a direct message or multi-person direct message.
       * @see {@link https://api.slack.com/methods/conversations.close `conversations.close` API reference}.
       */
      close: bindApiCall(this, "conversations.close"),
      /**
       * @description Initiates a public or private channel-based conversation.
       * @see {@link https://api.slack.com/methods/conversations.create `conversations.create` API reference}.
       */
      create: bindApiCall(this, "conversations.create"),
      /**
       * @description Declines an invitation to a Slack Connect channel.
       * @see {@link https://api.slack.com/methods/conversations.declineSharedInvite `conversations.declineSharedInvite` API reference}.
       */
      declineSharedInvite: bindApiCall(this, "conversations.declineSharedInvite"),
      /**
       * @description Fetches a conversation's history of messages and events.
       * @see {@link https://api.slack.com/methods/conversations.history `conversations.history` API reference}.
       */
      history: bindApiCall(this, "conversations.history"),
      /**
       * @description Retrieve information about a conversation.
       * @see {@link https://api.slack.com/methods/conversations.info `conversations.info` API reference}.
       */
      info: bindApiCall(this, "conversations.info"),
      /**
       * @description Invites users to a channel.
       * @see {@link https://api.slack.com/methods/conversations.invite `conversations.invite` API reference}.
       */
      invite: bindApiCall(this, "conversations.invite"),
      /**
       * @description Sends an invitation to a Slack Connect channel.
       * @see {@link https://api.slack.com/methods/conversations.inviteShared `conversations.inviteShared` API reference}.
       */
      inviteShared: bindApiCall(this, "conversations.inviteShared"),
      /**
       * @description Joins an existing conversation.
       * @see {@link https://api.slack.com/methods/conversations.join `conversations.join` API reference}.
       */
      join: bindApiCall(this, "conversations.join"),
      /**
       * @description Removes a user from a conversation.
       * @see {@link https://api.slack.com/methods/conversations.kick `conversations.kick` API reference}.
       */
      kick: bindApiCall(this, "conversations.kick"),
      /**
       * @description Leaves a conversation.
       * @see {@link https://api.slack.com/methods/conversations.leave `conversations.leave` API reference}.
       */
      leave: bindApiCall(this, "conversations.leave"),
      /**
       * @description List all channels in a Slack team.
       * @see {@link https://api.slack.com/methods/conversations.list `conversations.list` API reference}.
       */
      list: bindApiCall(this, "conversations.list"),
      /**
       * @description Lists shared channel invites that have been generated or received but have not been approved by
       * all parties.
       * @see {@link https://api.slack.com/methods/conversations.listConnectInvites `conversations.listConnectInvites` API reference}.
       */
      listConnectInvites: bindApiCall(this, "conversations.listConnectInvites"),
      /**
       * @description Sets the read cursor in a channel.
       * @see {@link https://api.slack.com/methods/conversations.mark `conversations.mark` API reference}.
       */
      mark: bindApiCall(this, "conversations.mark"),
      /**
       * @description Retrieve members of a conversation.
       * @see {@link https://api.slack.com/methods/conversations.members `conversations.members` API reference}.
       */
      members: bindApiCall(this, "conversations.members"),
      /**
       * @description Opens or resumes a direct message or multi-person direct message.
       * @see {@link https://api.slack.com/methods/conversations.open `conversations.open` API reference}.
       */
      open: bindApiCall(this, "conversations.open"),
      /**
       * @description Renames a conversation.
       * @see {@link https://api.slack.com/methods/conversations.rename `conversations.rename` API reference}.
       */
      rename: bindApiCall(this, "conversations.rename"),
      /**
       * @description Retrieve a thread of messages posted to a conversation.
       * @see {@link https://api.slack.com/methods/conversations.replies `conversations.replies` API reference}.
       */
      replies: bindApiCall(this, "conversations.replies"),
      /**
       * @description Sets the purpose for a conversation.
       * @see {@link https://api.slack.com/methods/conversations.setPurpose `conversations.setPurpose` API reference}.
       */
      setPurpose: bindApiCall(this, "conversations.setPurpose"),
      /**
       * @description Sets the topic for a conversation.
       * @see {@link https://api.slack.com/methods/conversations.setTopic `conversations.setTopic` API reference}.
       */
      setTopic: bindApiCall(this, "conversations.setTopic"),
      /**
       * @description Reverses conversation archival.
       * @see {@link https://api.slack.com/methods/conversations.unarchive `conversations.unarchive` API reference}.
       */
      unarchive: bindApiCall(this, "conversations.unarchive")
    };
    this.dialog = {
      /**
       * @description Open a dialog with a user.
       * @see {@link https://api.slack.com/methods/dialog.open `dialog.open` API reference}.
       */
      open: bindApiCall(this, "dialog.open")
    };
    this.dnd = {
      /**
       * @description Ends the current user's Do Not Disturb session immediately.
       * @see {@link https://api.slack.com/methods/dnd.endDnd `dnd.endDnd` API reference}.
       */
      endDnd: bindApiCall(this, "dnd.endDnd"),
      /**
       * @description Ends the current user's snooze mode immediately.
       * @see {@link https://api.slack.com/methods/dnd.endSnooze `dnd.endSnooze` API reference}.
       */
      endSnooze: bindApiCall(this, "dnd.endSnooze"),
      /**
       * @description Retrieves a user's current Do Not Disturb status.
       * @see {@link https://api.slack.com/methods/dnd.info `dnd.info` API reference}.
       */
      info: bindApiCall(this, "dnd.info"),
      /**
       * @description Turns on Do Not Disturb mode for the current user, or changes its duration.
       * @see {@link https://api.slack.com/methods/dnd.setSnooze `dnd.setSnooze` API reference}.
       */
      setSnooze: bindApiCall(this, "dnd.setSnooze"),
      /**
       * @description Retrieves the Do Not Disturb status for up to 50 users on a team.
       * @see {@link https://api.slack.com/methods/dnd.teamInfo `dnd.teamInfo` API reference}.
       */
      teamInfo: bindApiCall(this, "dnd.teamInfo")
    };
    this.emoji = {
      /**
       * @description Lists custom emoji for a team.
       * @see {@link https://api.slack.com/methods/emoji.list `emoji.list` API reference}.
       */
      list: bindApiCall(this, "emoji.list")
    };
    this.files = {
      /**
       * @description Finishes an upload started with {@link https://api.slack.com/methods/files.getUploadURLExternal `files.getUploadURLExternal`}.
       * @see {@link https://api.slack.com/methods/files.completeUploadExternal `files.completeUploadExternal` API reference}.
       */
      completeUploadExternal: bindApiCall(this, "files.completeUploadExternal"),
      /**
       * @description Deletes a file.
       * @see {@link https://api.slack.com/methods/files.delete `files.delete` API reference}.
       */
      delete: bindApiCall(this, "files.delete"),
      /**
       * @description Gets a URL for an edge external file upload.
       * @see {@link https://api.slack.com/methods/files.getUploadURLExternal `files.getUploadURLExternal` API reference}.
       */
      getUploadURLExternal: bindApiCall(this, "files.getUploadURLExternal"),
      /**
       * @description Gets information about a file.
       * @see {@link https://api.slack.com/methods/files.info `files.info` API reference}.
       */
      info: bindApiCall(this, "files.info"),
      /**
       * @description List files for a team, in a channel, or from a user with applied filters.
       * @see {@link https://api.slack.com/methods/files.list `files.list` API reference}.
       */
      list: bindApiCall(this, "files.list"),
      /**
       * @description Revokes public/external sharing access for a file.
       * @see {@link https://api.slack.com/methods/files.revokePublicURL `files.revokePublicURL` API reference}.
       */
      revokePublicURL: bindApiCall(this, "files.revokePublicURL"),
      /**
       * @description Enables a file for public/external sharing.
       * @see {@link https://api.slack.com/methods/files.revokePublicURL `files.revokePublicURL` API reference}.
       */
      sharedPublicURL: bindApiCall(this, "files.sharedPublicURL"),
      /**
       * @description Uploads or creates a file.
       * @deprecated Use `uploadV2` instead. See {@link https://api.slack.com/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay our post on retiring `files.upload`}.
       * @see {@link https://api.slack.com/methods/files.upload `files.upload` API reference}.
       */
      upload: bindApiCall(this, "files.upload"),
      /**
       * @description Custom method to support a new way of uploading files to Slack.
       * Supports a single file upload
       * Supply:
       * - (required) single file or content
       * - (optional) channel, alt_text, snippet_type,
       * Supports multiple file uploads
       * Supply:
       * - multiple upload_files
       * Will try to honor both single file or content data supplied as well
       * as multiple file uploads property.
       * @see {@link https://slack.dev/node-slack-sdk/web-api#upload-a-file `@slack/web-api` Upload a file documentation}.
       */
      uploadV2: bindFilesUploadV2(this),
      comments: {
        /**
         * @description Deletes an existing comment on a file.
         * @see {@link https://api.slack.com/methods/files.comments.delete `files.comments.delete` API reference}.
         */
        delete: bindApiCall(this, "files.comments.delete")
      },
      remote: {
        /**
         * @description Adds a file from a remote service.
         * @see {@link https://api.slack.com/methods/files.remote.add `files.remote.add` API reference}.
         */
        add: bindApiCall(this, "files.remote.add"),
        /**
         * @description Retrieve information about a remote file added to Slack.
         * @see {@link https://api.slack.com/methods/files.remote.info `files.remote.info` API reference}.
         */
        info: bindApiCall(this, "files.remote.info"),
        /**
         * @description List remote files added to Slack.
         * @see {@link https://api.slack.com/methods/files.remote.list `files.remote.list` API reference}.
         */
        list: bindApiCall(this, "files.remote.list"),
        /**
         * @description Remove a remote file.
         * @see {@link https://api.slack.com/methods/files.remote.remove `files.remote.remove` API reference}.
         */
        remove: bindApiCall(this, "files.remote.remove"),
        /**
         * @description Share a remote file into a channel.
         * @see {@link https://api.slack.com/methods/files.remote.share `files.remote.share` API reference}.
         */
        share: bindApiCall(this, "files.remote.share"),
        /**
         * @description Updates an existing remote file.
         * @see {@link https://api.slack.com/methods/files.remote.update `files.remote.update` API reference}.
         */
        update: bindApiCall(this, "files.remote.update")
      }
    };
    this.functions = {
      /**
       * @description Signal the failure to execute a Custom Function.
       * @see {@link https://api.slack.com/methods/functions.completeError `functions.completeError` API reference}.
       */
      completeError: bindApiCall(this, "functions.completeError"),
      /**
       * @description Signal the successful completion of a Custom Function.
       * @see {@link https://api.slack.com/methods/functions.completeSuccess `functions.completeSuccess` API reference}.
       */
      completeSuccess: bindApiCall(this, "functions.completeSuccess")
    };
    this.migration = {
      /**
       * @description For Enterprise Grid workspaces, map local user IDs to global user IDs.
       * @see {@link https://api.slack.com/methods/migration.exchange `migration.exchange` API reference}.
       */
      exchange: bindApiCall(this, "migration.exchange")
    };
    this.oauth = {
      /**
       * @description Exchanges a temporary OAuth verifier code for an access token.
       * @deprecated This is a legacy method only used by classic Slack apps. Use `oauth.v2.access` for new Slack apps.
       * @see {@link https://api.slack.com/methods/oauth.access `oauth.access` API reference}.
       */
      access: bindApiCall(this, "oauth.access"),
      v2: {
        /**
         * @description Exchanges a temporary OAuth verifier code for an access token.
         * @see {@link https://api.slack.com/methods/oauth.v2.access `oauth.v2.access` API reference}.
         */
        access: bindApiCall(this, "oauth.v2.access"),
        /**
         * @description Exchanges a legacy access token for a new expiring access token and refresh token.
         * @see {@link https://api.slack.com/methods/oauth.v2.exchange `oauth.v2.exchange` API reference}.
         */
        exchange: bindApiCall(this, "oauth.v2.exchange")
      }
    };
    this.openid = {
      connect: {
        /**
         * @description Exchanges a temporary OAuth verifier code for an access token for {@link https://api.slack.com/authentication/sign-in-with-slack Sign in with Slack}.
         * @see {@link https://api.slack.com/methods/openid.connect.token `openid.connect.token` API reference}.
         */
        token: bindApiCall(this, "openid.connect.token"),
        /**
         * @description Get the identity of a user who has authorized {@link https://api.slack.com/authentication/sign-in-with-slack Sign in with Slack}.
         * @see {@link https://api.slack.com/methods/openid.connect.userInfo `openid.connect.userInfo` API reference}.
         */
        userInfo: bindApiCall(this, "openid.connect.userInfo")
      }
    };
    this.pins = {
      /**
       * @description Pins an item to a channel.
       * @see {@link https://api.slack.com/methods/pins.add `pins.add` API reference}.
       */
      add: bindApiCall(this, "pins.add"),
      /**
       * @description Lists items pinned to a channel.
       * @see {@link https://api.slack.com/methods/pins.list `pins.list` API reference}.
       */
      list: bindApiCall(this, "pins.list"),
      /**
       * @description Un-pins an item from a channel.
       * @see {@link https://api.slack.com/methods/pins.remove `pins.remove` API reference}.
       */
      remove: bindApiCall(this, "pins.remove")
    };
    this.reactions = {
      /**
       * @description Adds a reaction to an item.
       * @see {@link https://api.slack.com/methods/reactions.add `reactions.add` API reference}.
       */
      add: bindApiCall(this, "reactions.add"),
      /**
       * @description Gets reactions for an item.
       * @see {@link https://api.slack.com/methods/reactions.get `reactions.get` API reference}.
       */
      get: bindApiCall(this, "reactions.get"),
      /**
       * @description List reactions made by a user.
       * @see {@link https://api.slack.com/methods/reactions.list `reactions.list` API reference}.
       */
      list: bindApiCall(this, "reactions.list"),
      /**
       * @description Removes a reaction from an item.
       * @see {@link https://api.slack.com/methods/reactions.remove `reactions.remove` API reference}.
       */
      remove: bindApiCall(this, "reactions.remove")
    };
    // TODO: keep tabs on reminders APIs, may be deprecated once Later list APIs land
    // See: https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders
    this.reminders = {
      /**
       * @description Creates a reminder.
       * @see {@link https://api.slack.com/methods/reminders.add `reminders.add` API reference}.
       */
      add: bindApiCall(this, "reminders.add"),
      /**
       * @description Marks a reminder as complete.
       * @see {@link https://api.slack.com/methods/reminders.complete `reminders.complete` API reference}.
       */
      complete: bindApiCall(this, "reminders.complete"),
      /**
       * @description Deletes a reminder.
       * @see {@link https://api.slack.com/methods/reminders.delete `reminders.delete` API reference}.
       */
      delete: bindApiCall(this, "reminders.delete"),
      /**
       * @description Gets information about a reminder.
       * @see {@link https://api.slack.com/methods/reminders.info `reminders.info` API reference}.
       */
      info: bindApiCall(this, "reminders.info"),
      /**
       * @description Lists all reminders created by or for a given user.
       * @see {@link https://api.slack.com/methods/reminders.list `reminders.list` API reference}.
       */
      list: bindApiCall(this, "reminders.list")
    };
    this.rtm = {
      /**
       * @description Starts a Real Time Messaging session.
       * @see {@link https://api.slack.com/methods/rtm.connect `rtm.connect` API reference}.
       */
      connect: bindApiCall(this, "rtm.connect"),
      /**
       * @description Starts a Real Time Messaging session.
       * @deprecated Use `rtm.connect` instead. See {@link https://api.slack.com/changelog/2021-10-rtm-start-to-stop our post on retiring `rtm.start`}.
       * @see {@link https://api.slack.com/methods/rtm.start `rtm.start` API reference}.
       */
      start: bindApiCall(this, "rtm.start")
    };
    this.search = {
      /**
       * @description Searches for messages and files matching a query.
       * @see {@link https://api.slack.com/methods/search.all search.all` API reference}.
       */
      all: bindApiCall(this, "search.all"),
      /**
       * @description Searches for files matching a query.
       * @see {@link https://api.slack.com/methods/search.files search.files` API reference}.
       */
      files: bindApiCall(this, "search.files"),
      /**
       * @description Searches for messages matching a query.
       * @see {@link https://api.slack.com/methods/search.messages search.messages` API reference}.
       */
      messages: bindApiCall(this, "search.messages")
    };
    this.team = {
      /**
       * @description Gets the access logs for the current team.
       * @see {@link https://api.slack.com/methods/team.accessLogs `team.accessLogs` API reference}.
       */
      accessLogs: bindApiCall(this, "team.accessLogs"),
      /**
       * @description Gets billable users information for the current team.
       * @see {@link https://api.slack.com/methods/team.billableInfo `team.billableInfo` API reference}.
       */
      billableInfo: bindApiCall(this, "team.billableInfo"),
      billing: {
        /**
         * @description Reads a workspace's billing plan information.
         * @see {@link https://api.slack.com/methods/team.billing.info `team.billing.info` API reference}.
         */
        info: bindApiCall(this, "team.billing.info")
      },
      /**
       * @description Gets information about the current team.
       * @see {@link https://api.slack.com/methods/team.info `team.info` API reference}.
       */
      info: bindApiCall(this, "team.info"),
      /**
       * @description Gets the integration logs for the current team.
       * @see {@link https://api.slack.com/methods/team.integrationLogs `team.integrationLogs` API reference}.
       */
      integrationLogs: bindApiCall(this, "team.integrationLogs"),
      preferences: {
        /**
         * @description Retrieve a list of a workspace's team preferences.
         * @see {@link https://api.slack.com/methods/team.preferences.list `team.preferences.list` API reference}.
         */
        list: bindApiCall(this, "team.preferences.list")
      },
      profile: {
        /**
         * @description Retrieve a team's profile.
         * @see {@link https://api.slack.com/methods/team.profile.get `team.profile.get` API reference}.
         */
        get: bindApiCall(this, "team.profile.get")
      }
    };
    this.tooling = {
      tokens: {
        /**
         * @description Exchanges a refresh token for a new app configuration token.
         * @see {@link https://api.slack.com/methods/tooling.tokens.rotate `tooling.tokens.rotate` API reference}.
         */
        rotate: bindApiCall(this, "tooling.tokens.rotate")
      }
    };
    this.usergroups = {
      /**
       * @description Create a User Group.
       * @see {@link https://api.slack.com/methods/usergroups.create `usergroups.create` API reference}.
       */
      create: bindApiCall(this, "usergroups.create"),
      /**
       * @description Disable an existing User Group.
       * @see {@link https://api.slack.com/methods/usergroups.disable `usergroups.disable` API reference}.
       */
      disable: bindApiCall(this, "usergroups.disable"),
      /**
       * @description Enable an existing User Group.
       * @see {@link https://api.slack.com/methods/usergroups.enable `usergroups.enable` API reference}.
       */
      enable: bindApiCall(this, "usergroups.enable"),
      /**
       * @description List all User Groups for a team.
       * @see {@link https://api.slack.com/methods/usergroups.list `usergroups.list` API reference}.
       */
      list: bindApiCall(this, "usergroups.list"),
      /**
       * @description Update an existing User Group.
       * @see {@link https://api.slack.com/methods/usergroups.update `usergroups.update` API reference}.
       */
      update: bindApiCall(this, "usergroups.update"),
      users: {
        /**
         * @description List all users in a User Group.
         * @see {@link https://api.slack.com/methods/usergroups.users.list `usergroups.users.list` API reference}.
         */
        list: bindApiCall(this, "usergroups.users.list"),
        /**
         * @description Update the list of users in a User Group.
         * @see {@link https://api.slack.com/methods/usergroups.users.update `usergroups.users.update` API reference}.
         */
        update: bindApiCall(this, "usergroups.users.update")
      }
    };
    this.users = {
      /**
       * @description List conversations the calling user may access.
       * @see {@link https://api.slack.com/methods/users.conversations `users.conversations` API reference}.
       */
      conversations: bindApiCall(this, "users.conversations"),
      /**
       * @description Delete the user profile photo.
       * @see {@link https://api.slack.com/methods/users.deletePhoto `users.deletePhoto` API reference}.
       */
      deletePhoto: bindApiCall(this, "users.deletePhoto"),
      /**
       * @description Gets user presence information.
       * @see {@link https://api.slack.com/methods/users.getPresence `users.getPresence` API reference}.
       */
      getPresence: bindApiCall(this, "users.getPresence"),
      /**
       * @description Get a user's identity.
       * @see {@link https://api.slack.com/methods/users.identity `users.identity` API reference}.
       */
      identity: bindApiCall(this, "users.identity"),
      /**
       * @description Gets information about a user.
       * @see {@link https://api.slack.com/methods/users.info `users.info` API reference}.
       */
      info: bindApiCall(this, "users.info"),
      /**
       * @description Lists all users in a Slack team.
       * @see {@link https://api.slack.com/methods/users.list `users.list` API reference}.
       */
      list: bindApiCall(this, "users.list"),
      /**
       * @description Find a user with an email address.
       * @see {@link https://api.slack.com/methods/users.lookupByEmail `users.lookupByEmail` API reference}.
       */
      lookupByEmail: bindApiCall(this, "users.lookupByEmail"),
      /**
       * @description Set the user profile photo.
       * @see {@link https://api.slack.com/methods/users.setPhoto `users.setPhoto` API reference}.
       */
      setPhoto: bindApiCall(this, "users.setPhoto"),
      /**
       * @description Manually sets user presence.
       * @see {@link https://api.slack.com/methods/users.setPresence `users.setPresence` API reference}.
       */
      setPresence: bindApiCall(this, "users.setPresence"),
      profile: {
        /**
         * @description Retrieve a user's profile information, including their custom status.
         * @see {@link https://api.slack.com/methods/users.profile.get `users.profile.get` API reference}.
         */
        get: bindApiCall(this, "users.profile.get"),
        /**
         * @description Set a user's profile information, including custom status.
         * @see {@link https://api.slack.com/methods/users.profile.set `users.profile.set` API reference}.
         */
        set: bindApiCall(this, "users.profile.set")
      }
    };
    this.views = {
      /**
       * @description Open a view for a user.
       * @see {@link https://api.slack.com/methods/views.open `views.open` API reference}.
       */
      open: bindApiCall(this, "views.open"),
      /**
       * @description Publish a static view for a user.
       * @see {@link https://api.slack.com/methods/views.publish `views.publish` API reference}.
       */
      publish: bindApiCall(this, "views.publish"),
      /**
       * @description Push a view onto the stack of a root view.
       * @see {@link https://api.slack.com/methods/views.push `views.push` API reference}.
       */
      push: bindApiCall(this, "views.push"),
      /**
       * @description Update an existing view.
       * @see {@link https://api.slack.com/methods/views.update `views.update` API reference}.
       */
      update: bindApiCall(this, "views.update")
    };
    // ------------------
    // Deprecated methods
    // ------------------
    // TODO: breaking changes for future majors:
    // - stars.* methods are marked as deprecated; once Later has APIs, these will see an official sunsetting timeline
    // - workflows.* methods, Sep 12 2024: https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back
    this.stars = {
      /**
       * @description Save an item for later. Formerly known as adding a star.
       * @deprecated Stars can still be added but they can no longer be viewed or interacted with by end-users.
       * See {@link https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
       * @see {@link https://api.slack.com/methods/stars.add `stars.add` API reference}.
       */
      add: bindApiCall(this, "stars.add"),
      /**
       * @description List a user's saved items, formerly known as stars.
       * @deprecated Stars can still be listed but they can no longer be viewed or interacted with by end-users.
       * See {@link https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
       * @see {@link https://api.slack.com/methods/stars.list `stars.list` API reference}.
       */
      list: bindApiCall(this, "stars.list"),
      /**
       * @description Remove a saved item from a user's saved items, formerly known as stars.
       * @deprecated Stars can still be removed but they can no longer be viewed or interacted with by end-users.
       * See {@link https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
       * @see {@link https://api.slack.com/methods/stars.remove `stars.remove` API reference}.
       */
      remove: bindApiCall(this, "stars.remove")
    };
    this.workflows = {
      /**
       * @description Indicate that an app's step in a workflow completed execution.
       * @deprecated Steps from Apps is deprecated.
       * We're retiring all Slack app functionality around Steps from Apps in September 2024.
       * See {@link https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back our post on deprecating Steps from Apps}.
       * @see {@link https://api.slack.com/methods/workflows.stepCompleted `workflows.stepCompleted` API reference}.
       */
      stepCompleted: bindApiCall(this, "workflows.stepCompleted"),
      /**
       * @description Indicate that an app's step in a workflow failed to execute.
       * @deprecated Steps from Apps is deprecated.
       * We're retiring all Slack app functionality around Steps from Apps in September 2024.
       * See {@link https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back our post on deprecating Steps from Apps}.
       * @see {@link https://api.slack.com/methods/workflows.stepFailed `workflows.stepFailed` API reference}.
       */
      stepFailed: bindApiCall(this, "workflows.stepFailed"),
      /**
       * @description Update the configuration for a workflow step.
       * @deprecated Steps from Apps is deprecated.
       * We're retiring all Slack app functionality around Steps from Apps in September 2024.
       * See {@link https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back our post on deprecating Steps from Apps}.
       * @see {@link https://api.slack.com/methods/workflows.updateStep `workflows.updateStep` API reference}.
       */
      updateStep: bindApiCall(this, "workflows.updateStep")
    };
  }
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
class GasSlackClient extends Methods {
  filesUploadV2(_options) {
    throw new Error("Method not implemented.");
  }
  constructor(token) {
    var {
      slackApiUrl = "https://slack.com/api/"
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    this.API_ENDPOINT = "https://slack.com/api/";
    this.token = token;
    this.slackApiUrl = slackApiUrl;
  }
  apiCall(method, options) {
    var response = this.makeRequest(method, _objectSpread({
      token: this.token
    }, options));
    return response;
  }
  makeRequest(url, body) {
    var response = this._post(url, body);
    return JSON.parse(response.getContentText());
  }
  _get(api, args) {
    var _a;
    // https://github.com/requests/requests/blob/master/requests/models.py
    var encodedArgs = queryEncode(_objectSpread({
      token: (_a = this.token) !== null && _a !== void 0 ? _a : ""
    }, args));
    var url = "".concat(this.API_ENDPOINT).concat(api, "?").concat(encodedArgs);
    var params = {
      method: "get",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    };
    return this._fetch(url, params);
  }
  _post(api, args) {
    var payload = createPayload(_objectSpread({}, args));
    var url = "".concat(this.API_ENDPOINT).concat(api);
    var params = {
      headers: {
        Authorization: "Bearer ".concat(this.token)
      },
      method: "post",
      payload
    };
    return this._fetch(url, params);
  }
  _fetch(url, params) {
    return UrlFetchApp.fetch(url, params);
  }
}
var createPayload = params => {
  var payload = _objectSpread({}, params);
  for (var key in payload) {
    var param = payload[key];
    if (typeof param !== "string") payload[key] = JSON.stringify(param);
  }
  return payload;
};
var queryEncode = params => {
  var param_list = [];
  for (var key in params) {
    var param = params[key];
    if (Array.isArray(param)) param = param.join(",");else if (typeof param == "object") param = JSON.stringify(param);
    param_list.push("".concat(key, "=").concat(param));
  }
  return param_list.join("&");
};

export { GasSlackClient };
//# sourceMappingURL=index.js.map
