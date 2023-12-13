"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
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

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/typewriter-effect@2.21.0_react-dom@18.2.0_react@18.2.0/node_modules/typewriter-effect/dist/core.js
  var require_core = __commonJS({
    "node_modules/.pnpm/typewriter-effect@2.21.0_react-dom@18.2.0_react@18.2.0/node_modules/typewriter-effect/dist/core.js"(exports, module) {
      init_live_reload();
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Typewriter", [], t) : "object" == typeof exports ? exports.Typewriter = t() : e.Typewriter = t();
      }("undefined" != typeof self ? self : exports, () => (() => {
        var e = { 75: function(e2) {
          (function() {
            var t2, n2, r2, o, a, i;
            "undefined" != typeof performance && null !== performance && performance.now ? e2.exports = function() {
              return performance.now();
            } : "undefined" != typeof process && null !== process && process.hrtime ? (e2.exports = function() {
              return (t2() - a) / 1e6;
            }, n2 = process.hrtime, o = (t2 = function() {
              var e3;
              return 1e9 * (e3 = n2())[0] + e3[1];
            })(), i = 1e9 * process.uptime(), a = o - i) : Date.now ? (e2.exports = function() {
              return Date.now() - r2;
            }, r2 = Date.now()) : (e2.exports = function() {
              return (/* @__PURE__ */ new Date()).getTime() - r2;
            }, r2 = (/* @__PURE__ */ new Date()).getTime());
          }).call(this);
        }, 4087: (e2, t2, n2) => {
          for (var r2 = n2(75), o = "undefined" == typeof window ? n2.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], l = 0; !s && l < a.length; l++)
            s = o[a[l] + "Request" + i], u = o[a[l] + "Cancel" + i] || o[a[l] + "CancelRequest" + i];
          if (!s || !u) {
            var c = 0, p = 0, d = [];
            s = function(e3) {
              if (0 === d.length) {
                var t3 = r2(), n3 = Math.max(0, 16.666666666666668 - (t3 - c));
                c = n3 + t3, setTimeout(function() {
                  var e4 = d.slice(0);
                  d.length = 0;
                  for (var t4 = 0; t4 < e4.length; t4++)
                    if (!e4[t4].cancelled)
                      try {
                        e4[t4].callback(c);
                      } catch (e5) {
                        setTimeout(function() {
                          throw e5;
                        }, 0);
                      }
                }, Math.round(n3));
              }
              return d.push({ handle: ++p, callback: e3, cancelled: false }), p;
            }, u = function(e3) {
              for (var t3 = 0; t3 < d.length; t3++)
                d[t3].handle === e3 && (d[t3].cancelled = true);
            };
          }
          e2.exports = function(e3) {
            return s.call(o, e3);
          }, e2.exports.cancel = function() {
            u.apply(o, arguments);
          }, e2.exports.polyfill = function(e3) {
            e3 || (e3 = o), e3.requestAnimationFrame = s, e3.cancelAnimationFrame = u;
          };
        } }, t = {};
        function n(r2) {
          var o = t[r2];
          if (void 0 !== o)
            return o.exports;
          var a = t[r2] = { exports: {} };
          return e[r2].call(a.exports, a, a.exports, n), a.exports;
        }
        n.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return n.d(t2, { a: t2 }), t2;
        }, n.d = (e2, t2) => {
          for (var r2 in t2)
            n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
        }, n.g = function() {
          if ("object" == typeof globalThis)
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window)
              return window;
          }
        }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
        var r = {};
        return (() => {
          "use strict";
          n.d(r, { default: () => C });
          var e2 = n(4087), t2 = n.n(e2);
          const o = function(e3) {
            return new RegExp(/<[a-z][\s\S]*>/i).test(e3);
          }, a = function(e3, t3) {
            return Math.floor(Math.random() * (t3 - e3 + 1)) + e3;
          };
          var i = "TYPE_CHARACTER", s = "REMOVE_CHARACTER", u = "REMOVE_ALL", l = "REMOVE_LAST_VISIBLE_NODE", c = "PAUSE_FOR", p = "CALL_FUNCTION", d = "ADD_HTML_TAG_ELEMENT", f = "CHANGE_DELETE_SPEED", v = "CHANGE_DELAY", h = "CHANGE_CURSOR", m = "PASTE_STRING", y = "HTML_TAG";
          function g(e3) {
            return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, g(e3);
          }
          function E(e3, t3) {
            var n2 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(e3);
              t3 && (r2 = r2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function w(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? E(Object(n2), true).forEach(function(t4) {
                A(e3, t4, n2[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : E(Object(n2)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
              });
            }
            return e3;
          }
          function b(e3) {
            return function(e4) {
              if (Array.isArray(e4))
                return T(e4);
            }(e3) || function(e4) {
              if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
                return Array.from(e4);
            }(e3) || function(e4, t3) {
              if (e4) {
                if ("string" == typeof e4)
                  return T(e4, t3);
                var n2 = Object.prototype.toString.call(e4).slice(8, -1);
                return "Object" === n2 && e4.constructor && (n2 = e4.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e4) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? T(e4, t3) : void 0;
              }
            }(e3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function T(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++)
              r2[n2] = e3[n2];
            return r2;
          }
          function S(e3, t3) {
            for (var n2 = 0; n2 < t3.length; n2++) {
              var r2 = t3[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, N(r2.key), r2);
            }
          }
          function A(e3, t3, n2) {
            return (t3 = N(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          function N(e3) {
            var t3 = function(e4, t4) {
              if ("object" !== g(e4) || null === e4)
                return e4;
              var n2 = e4[Symbol.toPrimitive];
              if (void 0 !== n2) {
                var r2 = n2.call(e4, "string");
                if ("object" !== g(r2))
                  return r2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(e3);
            return "symbol" === g(t3) ? t3 : String(t3);
          }
          const C = function() {
            function n2(r3, g3) {
              var E2 = this;
              if (function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, n2), A(this, "state", { cursorAnimation: null, lastFrameTime: null, pauseUntil: null, eventQueue: [], eventLoop: null, eventLoopPaused: false, reverseCalledEvents: [], calledEvents: [], visibleNodes: [], initialOptions: null, elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") } }), A(this, "options", { strings: null, cursor: "|", delay: "natural", pauseFor: 1500, deleteSpeed: "natural", loop: false, autoStart: false, devMode: false, skipAddStyles: false, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor", stringSplitter: null, onCreateTextNode: null, onRemoveNode: null }), A(this, "setupWrapperElement", function() {
                E2.state.elements.container && (E2.state.elements.wrapper.className = E2.options.wrapperClassName, E2.state.elements.cursor.className = E2.options.cursorClassName, E2.state.elements.cursor.innerHTML = E2.options.cursor, E2.state.elements.container.innerHTML = "", E2.state.elements.container.appendChild(E2.state.elements.wrapper), E2.state.elements.container.appendChild(E2.state.elements.cursor));
              }), A(this, "start", function() {
                return E2.state.eventLoopPaused = false, E2.runEventLoop(), E2;
              }), A(this, "pause", function() {
                return E2.state.eventLoopPaused = true, E2;
              }), A(this, "stop", function() {
                return E2.state.eventLoop && ((0, e2.cancel)(E2.state.eventLoop), E2.state.eventLoop = null), E2;
              }), A(this, "pauseFor", function(e3) {
                return E2.addEventToQueue(c, { ms: e3 }), E2;
              }), A(this, "typeOutAllStrings", function() {
                return "string" == typeof E2.options.strings ? (E2.typeString(E2.options.strings).pauseFor(E2.options.pauseFor), E2) : (E2.options.strings.forEach(function(e3) {
                  E2.typeString(e3).pauseFor(E2.options.pauseFor).deleteAll(E2.options.deleteSpeed);
                }), E2);
              }), A(this, "typeString", function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (o(e3))
                  return E2.typeOutHTMLString(e3, t3);
                if (e3) {
                  var n3 = (E2.options || {}).stringSplitter, r4 = "function" == typeof n3 ? n3(e3) : e3.split("");
                  E2.typeCharacters(r4, t3);
                }
                return E2;
              }), A(this, "pasteString", function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return o(e3) ? E2.typeOutHTMLString(e3, t3, true) : (e3 && E2.addEventToQueue(m, { character: e3, node: t3 }), E2);
              }), A(this, "typeOutHTMLString", function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n3 = arguments.length > 2 ? arguments[2] : void 0, r4 = function(e4) {
                  var t4 = document.createElement("div");
                  return t4.innerHTML = e4, t4.childNodes;
                }(e3);
                if (r4.length > 0)
                  for (var o2 = 0; o2 < r4.length; o2++) {
                    var a2 = r4[o2], i2 = a2.innerHTML;
                    a2 && 3 !== a2.nodeType ? (a2.innerHTML = "", E2.addEventToQueue(d, { node: a2, parentNode: t3 }), n3 ? E2.pasteString(i2, a2) : E2.typeString(i2, a2)) : a2.textContent && (n3 ? E2.pasteString(a2.textContent, t3) : E2.typeString(a2.textContent, t3));
                  }
                return E2;
              }), A(this, "deleteAll", function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                return E2.addEventToQueue(u, { speed: e3 }), E2;
              }), A(this, "changeDeleteSpeed", function(e3) {
                if (!e3)
                  throw new Error("Must provide new delete speed");
                return E2.addEventToQueue(f, { speed: e3 }), E2;
              }), A(this, "changeDelay", function(e3) {
                if (!e3)
                  throw new Error("Must provide new delay");
                return E2.addEventToQueue(v, { delay: e3 }), E2;
              }), A(this, "changeCursor", function(e3) {
                if (!e3)
                  throw new Error("Must provide new cursor");
                return E2.addEventToQueue(h, { cursor: e3 }), E2;
              }), A(this, "deleteChars", function(e3) {
                if (!e3)
                  throw new Error("Must provide amount of characters to delete");
                for (var t3 = 0; t3 < e3; t3++)
                  E2.addEventToQueue(s);
                return E2;
              }), A(this, "callFunction", function(e3, t3) {
                if (!e3 || "function" != typeof e3)
                  throw new Error("Callback must be a function");
                return E2.addEventToQueue(p, { cb: e3, thisArg: t3 }), E2;
              }), A(this, "typeCharacters", function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!e3 || !Array.isArray(e3))
                  throw new Error("Characters must be an array");
                return e3.forEach(function(e4) {
                  E2.addEventToQueue(i, { character: e4, node: t3 });
                }), E2;
              }), A(this, "removeCharacters", function(e3) {
                if (!e3 || !Array.isArray(e3))
                  throw new Error("Characters must be an array");
                return e3.forEach(function() {
                  E2.addEventToQueue(s);
                }), E2;
              }), A(this, "addEventToQueue", function(e3, t3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return E2.addEventToStateProperty(e3, t3, n3, "eventQueue");
              }), A(this, "addReverseCalledEvent", function(e3, t3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return E2.options.loop ? E2.addEventToStateProperty(e3, t3, n3, "reverseCalledEvents") : E2;
              }), A(this, "addEventToStateProperty", function(e3, t3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r4 = arguments.length > 3 ? arguments[3] : void 0, o2 = { eventName: e3, eventArgs: t3 || {} };
                return E2.state[r4] = n3 ? [o2].concat(b(E2.state[r4])) : [].concat(b(E2.state[r4]), [o2]), E2;
              }), A(this, "runEventLoop", function() {
                E2.state.lastFrameTime || (E2.state.lastFrameTime = Date.now());
                var e3 = Date.now(), n3 = e3 - E2.state.lastFrameTime;
                if (!E2.state.eventQueue.length) {
                  if (!E2.options.loop)
                    return;
                  E2.state.eventQueue = b(E2.state.calledEvents), E2.state.calledEvents = [], E2.options = w({}, E2.state.initialOptions);
                }
                if (E2.state.eventLoop = t2()(E2.runEventLoop), !E2.state.eventLoopPaused) {
                  if (E2.state.pauseUntil) {
                    if (e3 < E2.state.pauseUntil)
                      return;
                    E2.state.pauseUntil = null;
                  }
                  var r4, o2 = b(E2.state.eventQueue), g4 = o2.shift();
                  if (!(n3 <= (r4 = g4.eventName === l || g4.eventName === s ? "natural" === E2.options.deleteSpeed ? a(40, 80) : E2.options.deleteSpeed : "natural" === E2.options.delay ? a(120, 160) : E2.options.delay))) {
                    var T3 = g4.eventName, S2 = g4.eventArgs;
                    switch (E2.logInDevMode({ currentEvent: g4, state: E2.state, delay: r4 }), T3) {
                      case m:
                      case i:
                        var A2 = S2.character, N2 = S2.node, C2 = document.createTextNode(A2), _ = C2;
                        E2.options.onCreateTextNode && "function" == typeof E2.options.onCreateTextNode && (_ = E2.options.onCreateTextNode(A2, C2)), _ && (N2 ? N2.appendChild(_) : E2.state.elements.wrapper.appendChild(_)), E2.state.visibleNodes = [].concat(b(E2.state.visibleNodes), [{ type: "TEXT_NODE", character: A2, node: _ }]);
                        break;
                      case s:
                        o2.unshift({ eventName: l, eventArgs: { removingCharacterNode: true } });
                        break;
                      case c:
                        var O = g4.eventArgs.ms;
                        E2.state.pauseUntil = Date.now() + parseInt(O);
                        break;
                      case p:
                        var L = g4.eventArgs, D = L.cb, M = L.thisArg;
                        D.call(M, { elements: E2.state.elements });
                        break;
                      case d:
                        var x = g4.eventArgs, P = x.node, j = x.parentNode;
                        j ? j.appendChild(P) : E2.state.elements.wrapper.appendChild(P), E2.state.visibleNodes = [].concat(b(E2.state.visibleNodes), [{ type: y, node: P, parentNode: j || E2.state.elements.wrapper }]);
                        break;
                      case u:
                        var R = E2.state.visibleNodes, k = S2.speed, Q = [];
                        k && Q.push({ eventName: f, eventArgs: { speed: k, temp: true } });
                        for (var F = 0, H = R.length; F < H; F++)
                          Q.push({ eventName: l, eventArgs: { removingCharacterNode: false } });
                        k && Q.push({ eventName: f, eventArgs: { speed: E2.options.deleteSpeed, temp: true } }), o2.unshift.apply(o2, Q);
                        break;
                      case l:
                        var I = g4.eventArgs.removingCharacterNode;
                        if (E2.state.visibleNodes.length) {
                          var U = E2.state.visibleNodes.pop(), q = U.type, G = U.node, Y = U.character;
                          E2.options.onRemoveNode && "function" == typeof E2.options.onRemoveNode && E2.options.onRemoveNode({ node: G, character: Y }), G && G.parentNode.removeChild(G), q === y && I && o2.unshift({ eventName: l, eventArgs: {} });
                        }
                        break;
                      case f:
                        E2.options.deleteSpeed = g4.eventArgs.speed;
                        break;
                      case v:
                        E2.options.delay = g4.eventArgs.delay;
                        break;
                      case h:
                        E2.options.cursor = g4.eventArgs.cursor, E2.state.elements.cursor.innerHTML = g4.eventArgs.cursor;
                    }
                    E2.options.loop && (g4.eventName === l || g4.eventArgs && g4.eventArgs.temp || (E2.state.calledEvents = [].concat(b(E2.state.calledEvents), [g4]))), E2.state.eventQueue = o2, E2.state.lastFrameTime = e3;
                  }
                }
              }), r3)
                if ("string" == typeof r3) {
                  var T2 = document.querySelector(r3);
                  if (!T2)
                    throw new Error("Could not find container element");
                  this.state.elements.container = T2;
                } else
                  this.state.elements.container = r3;
              g3 && (this.options = w(w({}, this.options), g3)), this.state.initialOptions = w({}, this.options), this.init();
            }
            var r2, g2;
            return r2 = n2, (g2 = [{ key: "init", value: function() {
              var e3, t3;
              this.setupWrapperElement(), this.addEventToQueue(h, { cursor: this.options.cursor }, true), this.addEventToQueue(u, null, true), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e3 = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t3 = document.createElement("style")).appendChild(document.createTextNode(e3)), document.head.appendChild(t3), window.___TYPEWRITER_JS_STYLES_ADDED___ = true), true === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
            } }, { key: "logInDevMode", value: function(e3) {
              this.options.devMode && console.log(e3);
            } }]) && S(r2.prototype, g2), Object.defineProperty(r2, "prototype", { writable: false }), n2;
          }();
        })(), r.default;
      })());
    }
  });

  // node_modules/.pnpm/sister@3.0.2/node_modules/sister/src/sister.js
  var require_sister = __commonJS({
    "node_modules/.pnpm/sister@3.0.2/node_modules/sister/src/sister.js"(exports, module) {
      "use strict";
      init_live_reload();
      var Sister;
      Sister = function() {
        var sister = {}, events2 = {};
        sister.on = function(name, handler) {
          var listener = { name, handler };
          events2[name] = events2[name] || [];
          events2[name].unshift(listener);
          return listener;
        };
        sister.off = function(listener) {
          var index = events2[listener.name].indexOf(listener);
          if (index !== -1) {
            events2[listener.name].splice(index, 1);
          }
        };
        sister.trigger = function(name, data) {
          var listeners = events2[name], i;
          if (listeners) {
            i = listeners.length;
            while (i--) {
              listeners[i].handler(data);
            }
          }
        };
        return sister;
      };
      module.exports = Sister;
    }
  });

  // node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports, module) {
      init_live_reload();
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse2(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse2(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }
    }
  });

  // node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js
  var require_common = __commonJS({
    "node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js"(exports, module) {
      init_live_reload();
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash = 0;
          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug(...args) {
            if (!debug.enabled) {
              return;
            }
            const self2 = debug;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              if (match === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format];
              if (typeof formatter === "function") {
                const val = args[index];
                match = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            createDebug.formatArgs.call(self2, args);
            const logFn = self2.log || createDebug.log;
            logFn.apply(self2, args);
          }
          debug.namespace = namespace;
          debug.useColors = createDebug.useColors();
          debug.color = createDebug.selectColor(namespace);
          debug.extend = extend4;
          debug.destroy = createDebug.destroy;
          Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            },
            set: (v) => {
              enableOverride = v;
            }
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }
          return debug;
        }
        function extend4(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          let i;
          const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
          const len = split.length;
          for (i = 0; i < len; i++) {
            if (!split[i]) {
              continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
              createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
              createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
          }
        }
        function disable() {
          const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        function enabled(name) {
          if (name[name.length - 1] === "*") {
            return true;
          }
          let i;
          let len;
          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }
          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }
          return false;
        }
        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      module.exports = setup;
    }
  });

  // node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"(exports, module) {
      init_live_reload();
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error) {
        }
      }
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug");
        } catch (error) {
        }
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }
        return r;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error) {
        }
      }
      module.exports = require_common()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/constants/PlayerStates.js
  var require_PlayerStates = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/constants/PlayerStates.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = {
        BUFFERING: 3,
        ENDED: 0,
        PAUSED: 2,
        PLAYING: 1,
        UNSTARTED: -1,
        VIDEO_CUED: 5
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/FunctionStateMap.js
  var require_FunctionStateMap = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/FunctionStateMap.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _PlayerStates = require_PlayerStates();
      var _PlayerStates2 = _interopRequireDefault(_PlayerStates);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = {
        pauseVideo: {
          acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
          stateChangeRequired: false
        },
        playVideo: {
          acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
          stateChangeRequired: false
        },
        seekTo: {
          acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
          stateChangeRequired: true,
          // TRICKY: `seekTo` may not cause a state change if no buffering is
          // required.
          // eslint-disable-next-line unicorn/numeric-separators-style
          timeout: 3e3
        }
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/eventNames.js
  var require_eventNames = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/eventNames.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
      module.exports = exports["default"];
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/functionNames.js
  var require_functionNames = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/functionNames.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe", "getSphericalProperties", "setSphericalProperties"];
      module.exports = exports["default"];
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/YouTubePlayer.js
  var require_YouTubePlayer = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/YouTubePlayer.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _debug = require_browser();
      var _debug2 = _interopRequireDefault(_debug);
      var _FunctionStateMap = require_FunctionStateMap();
      var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);
      var _eventNames = require_eventNames();
      var _eventNames2 = _interopRequireDefault(_eventNames);
      var _functionNames = require_functionNames();
      var _functionNames2 = _interopRequireDefault(_functionNames);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var debug = (0, _debug2.default)("youtube-player");
      var YouTubePlayer2 = {};
      YouTubePlayer2.proxyEvents = (emitter) => {
        const events2 = {};
        for (const eventName of _eventNames2.default) {
          const onEventName = "on" + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);
          events2[onEventName] = (event2) => {
            debug('event "%s"', onEventName, event2);
            emitter.trigger(eventName, event2);
          };
        }
        return events2;
      };
      YouTubePlayer2.promisifyPlayer = (playerAPIReady, strictState = false) => {
        const functions = {};
        for (const functionName of _functionNames2.default) {
          if (strictState && _FunctionStateMap2.default[functionName]) {
            functions[functionName] = (...args) => {
              return playerAPIReady.then((player) => {
                const stateInfo = _FunctionStateMap2.default[functionName];
                const playerState = player.getPlayerState();
                const value = player[functionName].apply(player, args);
                if (stateInfo.stateChangeRequired || // eslint-disable-next-line no-extra-parens
                Array.isArray(stateInfo.acceptableStates) && !stateInfo.acceptableStates.includes(playerState)) {
                  return new Promise((resolve) => {
                    const onPlayerStateChange = () => {
                      const playerStateAfterChange = player.getPlayerState();
                      let timeout;
                      if (typeof stateInfo.timeout === "number") {
                        timeout = setTimeout(() => {
                          player.removeEventListener("onStateChange", onPlayerStateChange);
                          resolve();
                        }, stateInfo.timeout);
                      }
                      if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.includes(playerStateAfterChange)) {
                        player.removeEventListener("onStateChange", onPlayerStateChange);
                        clearTimeout(timeout);
                        resolve();
                      }
                    };
                    player.addEventListener("onStateChange", onPlayerStateChange);
                  }).then(() => {
                    return value;
                  });
                }
                return value;
              });
            };
          } else {
            functions[functionName] = (...args) => {
              return playerAPIReady.then((player) => {
                return player[functionName].apply(player, args);
              });
            };
          }
        }
        return functions;
      };
      exports.default = YouTubePlayer2;
      module.exports = exports["default"];
    }
  });

  // node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js
  var require_load_script = __commonJS({
    "node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js"(exports, module) {
      init_live_reload();
      module.exports = function load(src, opts, cb) {
        var head = document.head || document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        if (typeof opts === "function") {
          cb = opts;
          opts = {};
        }
        opts = opts || {};
        cb = cb || function() {
        };
        script.type = opts.type || "text/javascript";
        script.charset = opts.charset || "utf8";
        script.async = "async" in opts ? !!opts.async : true;
        script.src = src;
        if (opts.attrs) {
          setAttributes(script, opts.attrs);
        }
        if (opts.text) {
          script.text = "" + opts.text;
        }
        var onend = "onload" in script ? stdOnEnd : ieOnEnd;
        onend(script, cb);
        if (!script.onload) {
          stdOnEnd(script, cb);
        }
        head.appendChild(script);
      };
      function setAttributes(script, attrs) {
        for (var attr in attrs) {
          script.setAttribute(attr, attrs[attr]);
        }
      }
      function stdOnEnd(script, cb) {
        script.onload = function() {
          this.onerror = this.onload = null;
          cb(null, script);
        };
        script.onerror = function() {
          this.onerror = this.onload = null;
          cb(new Error("Failed to load " + this.src), script);
        };
      }
      function ieOnEnd(script, cb) {
        script.onreadystatechange = function() {
          if (this.readyState != "complete" && this.readyState != "loaded")
            return;
          this.onreadystatechange = null;
          cb(null, script);
        };
      }
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/loadYouTubeIframeApi.js
  var require_loadYouTubeIframeApi = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/loadYouTubeIframeApi.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _loadScript = require_load_script();
      var _loadScript2 = _interopRequireDefault(_loadScript);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = (emitter) => {
        const iframeAPIReady = new Promise((resolve) => {
          if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
            resolve(window.YT);
            return;
          } else {
            const protocol = window.location.protocol === "http:" ? "http:" : "https:";
            (0, _loadScript2.default)(protocol + "//www.youtube.com/iframe_api", (error) => {
              if (error) {
                emitter.trigger("error", error);
              }
            });
          }
          const previous = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = () => {
            if (previous) {
              previous();
            }
            resolve(window.YT);
          };
        });
        return iframeAPIReady;
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/index.js"(exports, module) {
      "use strict";
      init_live_reload();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _sister = require_sister();
      var _sister2 = _interopRequireDefault(_sister);
      var _YouTubePlayer = require_YouTubePlayer();
      var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
      var _loadYouTubeIframeApi = require_loadYouTubeIframeApi();
      var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var youtubeIframeAPI;
      exports.default = (maybeElementId, options = {}, strictState = false) => {
        const emitter = (0, _sister2.default)();
        if (!youtubeIframeAPI) {
          youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
        }
        if (options.events) {
          throw new Error("Event handlers cannot be overwritten.");
        }
        if (typeof maybeElementId === "string" && !document.getElementById(maybeElementId)) {
          throw new Error('Element "' + maybeElementId + '" does not exist.');
        }
        options.events = _YouTubePlayer2.default.proxyEvents(emitter);
        const playerAPIReady = new Promise((resolve) => {
          if (typeof maybeElementId === "object" && maybeElementId.playVideo instanceof Function) {
            const player = maybeElementId;
            resolve(player);
          } else {
            youtubeIframeAPI.then((YT) => {
              const player = new YT.Player(maybeElementId, options);
              emitter.on("ready", () => {
                resolve(player);
              });
              return null;
            });
          }
        });
        const playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
        playerApi.on = emitter.on;
        playerApi.off = emitter.off;
        return playerApi;
      };
      module.exports = exports["default"];
    }
  });

  // src/index.ts
  init_live_reload();

  // src/utils/companyNavbar/index.ts
  init_live_reload();

  // src/utils/API/getCurrentCompany.ts
  init_live_reload();

  // src/utils/API/airtableVariables.ts
  init_live_reload();
  var accessToken = "patigzZAGP03Ip8bE.3d2af9b6d1d80c11aae62d98d8a2284a962def7253d80f0882741db6e03410b8";
  var sellerTableId = "tblLobGaWFZlsHJ7F";
  var companyTableId = "tbl8NqM9jEa6bGp7e";

  // src/utils/API/createAxiosInstance.ts
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/index.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/axios.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/utils.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/bind.js
  init_live_reload();
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define2 = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/Axios.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/buildURL.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/toFormData.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/AxiosError.js
  init_live_reload();
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/null.js
  init_live_reload();
  var null_default = null;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token2, i) {
      token2 = removeBrackets(token2);
      return !dots && i ? "[" + token2 + "]" : token2;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/InterceptorManager.js
  init_live_reload();
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/dispatchRequest.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/transformData.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/defaults/index.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/defaults/transitional.js
  init_live_reload();
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/toURLEncodedForm.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/platform/index.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/platform/browser/index.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  init_live_reload();
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/platform/browser/classes/FormData.js
  init_live_reload();
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/platform/browser/classes/Blob.js
  init_live_reload();
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/platform/browser/index.js
  var isStandardBrowserEnv = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  var isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (browser_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/formDataToJSON.js
  init_live_reload();
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: browser_default.classes.FormData,
      Blob: browser_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/AxiosHeaders.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/parseHeaders.js
  init_live_reload();
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/cancel/isCancel.js
  init_live_reload();
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/cancel/CanceledError.js
  init_live_reload();
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/adapters/adapters.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/adapters/xhr.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/settle.js
  init_live_reload();
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/cookies.js
  init_live_reload();
  var cookies_default = browser_default.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils_default.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils_default.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils_default.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/buildFullPath.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/isAbsoluteURL.js
  init_live_reload();
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/combineURLs.js
  init_live_reload();
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/isURLSameOrigin.js
  init_live_reload();
  var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv2() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv2() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/parseProtocol.js
  init_live_reload();
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/speedometer.js
  init_live_reload();
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now2 = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now2;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now2;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now2 - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now2 - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      let contentType;
      if (utils_default.isFormData(requestData)) {
        if (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else if (!requestHeaders.getContentType(/^\s*multipart\/form-data/)) {
          requestHeaders.setContentType("multipart/form-data");
        } else if (utils_default.isString(contentType = requestHeaders.getContentType())) {
          requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, "$1"));
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (browser_default.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/mergeConfig.js
  init_live_reload();
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/validator.js
  init_live_reload();

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/env/data.js
  init_live_reload();
  var VERSION = "1.5.1";

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/cancel/CancelToken.js
  init_live_reload();
  var CancelToken = class {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token2 = this;
      this.promise.then((cancel) => {
        if (!token2._listeners)
          return;
        let i = token2._listeners.length;
        while (i-- > 0) {
          token2._listeners[i](cancel);
        }
        token2._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token2.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token2.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token2.reason) {
          return;
        }
        token2.reason = new CanceledError_default(message, config, request);
        resolvePromise(token2.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token2 = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token2,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/spread.js
  init_live_reload();
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/isAxiosError.js
  init_live_reload();
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/helpers/HttpStatusCode.js
  init_live_reload();
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/.pnpm/axios@1.5.1/node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // src/utils/API/createAxiosInstance.ts
  function createAxiosInstance(tableId) {
    return axios_default.create({
      baseURL: "https://api.airtable.com/v0/appuSumhbA3GKjDq1/" + tableId,
      timeout: 1e4,
      headers: { accept: "application/json", Authorization: `Bearer ${accessToken}` }
    });
  }

  // src/utils/API/getCurrentCompany.ts
  var getCurrentCompany = async (currentRecordId) => {
    let companyRecordId = String(currentRecordId);
    const axiosInstance = createAxiosInstance(companyTableId);
    const companyNavbarComponentWrapper = document.querySelector(
      '[company-navbar-el="component-wrapper"]'
    );
    const currentCompanyId = companyNavbarComponentWrapper?.getAttribute("current-company-id");
    if (currentRecordId) {
      companyRecordId = String(currentRecordId);
    } else if (currentCompanyId) {
      companyRecordId = currentCompanyId;
    }
    if (!companyRecordId || companyRecordId === "undefined")
      return;
    const currentCompanyResponse = await axiosInstance.get("/" + companyRecordId).then((resp) => resp.data.fields).catch((err) => err.response);
    if (currentCompanyResponse) {
      return currentCompanyResponse;
    }
    console.error("Fehler beim Abrufen der Daten", currentCompanyResponse);
    return void 0;
  };

  // src/utils/globalUtilityFunctions/addQueryParamToLink.ts
  init_live_reload();
  var addQueryParamToLink = (attribute) => {
    const queryParamElements = document.querySelectorAll(
      `[${attribute}]`
    );
    queryParamElements.forEach((el) => {
      if (el.tagName === "A") {
        const attributeValue = el.getAttribute(attribute);
        if (el.href.includes("?")) {
          el.href += `&${attribute}=${attributeValue}`;
        }
      }
    });
  };

  // src/utils/companyNavbar/index.ts
  var initCompanyNavbar = async (currentRecordId) => {
    const company = await getCurrentCompany(currentRecordId);
    if (!company)
      return;
    loadNavbarContentFromAirtable(company);
    renderCompanyNameIfStateCompanySpecific(company);
  };
  var renderCompanyNameIfStateCompanySpecific = (company) => {
    const companySpecificItem = document.querySelector(
      '[switch-state="company-specific"]'
    );
    const companyNameEl = document.querySelector('[navbar-el="current-company-name"]');
    if (!companySpecificItem || !companyNameEl)
      return;
    const visibility = companySpecificItem.style.display;
    if (visibility !== "none") {
      companyNameEl.innerText = company.Name;
    }
  };
  var loadNavbarContentFromAirtable = (currentCompany) => {
    if (typeof currentCompany === "number")
      return;
    const brandEl = document.querySelector('[company-navbar-el="brand"]');
    const rechtstexteEl = document.querySelector(
      '[company-navbar-el="legal-text"]'
    );
    const rechtstexteWrapperEl = document.querySelector(
      '[company-navbar-el="legal-text-wrapper"]'
    );
    const nachrichtenPortalEl = document.querySelector(
      '[company-navbar-el="nachrichten-portal"]'
    );
    const messenEventsEl = document.querySelector(
      '[company-navbar-el="messen-events"]'
    );
    const vertriebsnetzwerkEl = document.querySelector(
      '[company-navbar-el="vertriebsnetzwerk"]'
    );
    const anleitungenEl = document.querySelector(
      '[company-navbar-el="anleitungen"]'
    );
    const katalogeEl = document.querySelector(
      '[company-navbar-el="kataloge"]'
    );
    const uberUnsEl = document.querySelector(
      '[company-navbar-el="uber-uns"]'
    );
    const onlineshopEl = document.querySelector(
      '[company-navbar-el="onlineshop"]'
    );
    const anfragenBeratungEl = document.querySelector(
      '[company-navbar-el="anfragen-beratung"]'
    );
    if (!brandEl || !rechtstexteEl || !nachrichtenPortalEl || !messenEventsEl || !vertriebsnetzwerkEl || !anleitungenEl || !katalogeEl || !uberUnsEl || !onlineshopEl || !anfragenBeratungEl || !rechtstexteWrapperEl)
      return;
    const companylogoEl = brandEl.querySelector("img");
    if (!companylogoEl)
      return;
    const rechtstexte = JSON.parse(currentCompany["Slugs - Rechtstexte"]);
    brandEl.href = "/unternehmen/" + currentCompany.Slug;
    companylogoEl.src = currentCompany.Unternehmenslogo[0].url;
    nachrichtenPortalEl.href = currentCompany["Nachrichten Portal"];
    messenEventsEl.href = currentCompany["Messen & Events"];
    vertriebsnetzwerkEl.href = currentCompany.Vertriebsnetzwerk;
    anleitungenEl.href = currentCompany.Anleitungen;
    katalogeEl.href = currentCompany.Kataloge;
    uberUnsEl.href = currentCompany["\xDCber Uns"];
    onlineshopEl.href = `/category/alle-produkte?unternehmen=${currentCompany.Name}`;
    anfragenBeratungEl.href = currentCompany["Anfragen & Beratung"];
    rechtstexteWrapperEl.innerHTML = "";
    for (const [key, value] of Object.entries(rechtstexte)) {
      rechtstexteEl.href = value;
      rechtstexteEl.innerText = key;
      rechtstexteWrapperEl.innerHTML += rechtstexteEl.outerHTML;
    }
    const addQueryParamToSwitchpageLinks = () => {
      const SwitchPageAttributeName = "switch-pages-type";
      const switchPageLinks = document.querySelectorAll(
        `[${SwitchPageAttributeName}]`
      );
      switchPageLinks.forEach((el) => {
        let attributeConnector = "?";
        const getSwitchPageAttribute = el.getAttribute(SwitchPageAttributeName);
        if (getSwitchPageAttribute) {
          if (el.href.includes("?")) {
            attributeConnector = "&";
          }
          if (el.href.includes("company"))
            return;
          if (getSwitchPageAttribute === "global") {
            el.href += `${attributeConnector}company=global`;
          } else if (getSwitchPageAttribute === "company-specific") {
            const getRecordIdEl = document.querySelector("[current-company-id]");
            const getRecordId = getRecordIdEl?.getAttribute("current-company-id");
            if (!getRecordId)
              return;
            el.href += `${attributeConnector}company=${getRecordId}`;
          }
        }
      });
    };
    addQueryParamToSwitchpageLinks();
    addQueryParamToLink("unternehmen");
  };

  // src/utils/currentCompanyState/index.ts
  init_live_reload();

  // src/utils/currentCompanyState/currenCompanyClass.ts
  init_live_reload();

  // node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs
  init_live_reload();
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  var defaultConverter = {
    read: function(value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    }
  };
  function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
      if (typeof document === "undefined") {
        return;
      }
      attributes = assign({}, defaultAttributes, attributes);
      if (typeof attributes.expires === "number") {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }
      name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var stringifiedAttributes = "";
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += "; " + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }
        stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
      }
      return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
      if (typeof document === "undefined" || arguments.length && !name) {
        return;
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var value = parts.slice(1).join("=");
        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);
          if (name === found) {
            break;
          }
        } catch (e) {
        }
      }
      return name ? jar[name] : jar;
    }
    return Object.create(
      {
        set,
        get,
        remove: function(name, attributes) {
          set(
            name,
            "",
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function(attributes) {
          return init(this.converter, assign({}, this.attributes, attributes));
        },
        withConverter: function(converter2) {
          return init(assign({}, this.converter, converter2), this.attributes);
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    );
  }
  var api = init(defaultConverter, { path: "/" });

  // src/utils/globalUtilityFunctions/createCookieFromQueryParam.ts
  init_live_reload();

  // src/utils/globalUtilityFunctions/getQueryParamByName.ts
  init_live_reload();

  // node_modules/.pnpm/query-string@8.1.0/node_modules/query-string/index.js
  init_live_reload();

  // node_modules/.pnpm/query-string@8.1.0/node_modules/query-string/base.js
  var base_exports = {};
  __export(base_exports, {
    exclude: () => exclude,
    extract: () => extract,
    parse: () => parse,
    parseUrl: () => parseUrl,
    pick: () => pick,
    stringify: () => stringify,
    stringifyUrl: () => stringifyUrl
  });
  init_live_reload();

  // node_modules/.pnpm/decode-uri-component@0.4.1/node_modules/decode-uri-component/index.js
  init_live_reload();
  var token = "%[a-f0-9]{2}";
  var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
  var multiMatcher = new RegExp("(" + token + ")+", "gi");
  function decodeComponents(components, split) {
    try {
      return [decodeURIComponent(components.join(""))];
    } catch {
    }
    if (components.length === 1) {
      return components;
    }
    split = split || 1;
    const left = components.slice(0, split);
    const right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
  }
  function decode(input) {
    try {
      return decodeURIComponent(input);
    } catch {
      let tokens = input.match(singleMatcher) || [];
      for (let i = 1; i < tokens.length; i++) {
        input = decodeComponents(tokens, i).join("");
        tokens = input.match(singleMatcher) || [];
      }
      return input;
    }
  }
  function customDecodeURIComponent(input) {
    const replaceMap = {
      "%FE%FF": "\uFFFD\uFFFD",
      "%FF%FE": "\uFFFD\uFFFD"
    };
    let match = multiMatcher.exec(input);
    while (match) {
      try {
        replaceMap[match[0]] = decodeURIComponent(match[0]);
      } catch {
        const result = decode(match[0]);
        if (result !== match[0]) {
          replaceMap[match[0]] = result;
        }
      }
      match = multiMatcher.exec(input);
    }
    replaceMap["%C2"] = "\uFFFD";
    const entries = Object.keys(replaceMap);
    for (const key of entries) {
      input = input.replace(new RegExp(key, "g"), replaceMap[key]);
    }
    return input;
  }
  function decodeUriComponent(encodedURI) {
    if (typeof encodedURI !== "string") {
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
    }
    try {
      return decodeURIComponent(encodedURI);
    } catch {
      return customDecodeURIComponent(encodedURI);
    }
  }

  // node_modules/.pnpm/split-on-first@3.0.0/node_modules/split-on-first/index.js
  init_live_reload();
  function splitOnFirst(string, separator) {
    if (!(typeof string === "string" && typeof separator === "string")) {
      throw new TypeError("Expected the arguments to be of type `string`");
    }
    if (string === "" || separator === "") {
      return [];
    }
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) {
      return [];
    }
    return [
      string.slice(0, separatorIndex),
      string.slice(separatorIndex + separator.length)
    ];
  }

  // node_modules/.pnpm/filter-obj@5.1.0/node_modules/filter-obj/index.js
  init_live_reload();
  function includeKeys(object, predicate) {
    const result = {};
    if (Array.isArray(predicate)) {
      for (const key of predicate) {
        const descriptor = Object.getOwnPropertyDescriptor(object, key);
        if (descriptor?.enumerable) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    } else {
      for (const key of Reflect.ownKeys(object)) {
        const descriptor = Object.getOwnPropertyDescriptor(object, key);
        if (descriptor.enumerable) {
          const value = object[key];
          if (predicate(key, value, object)) {
            Object.defineProperty(result, key, descriptor);
          }
        }
      }
    }
    return result;
  }

  // node_modules/.pnpm/query-string@8.1.0/node_modules/query-string/base.js
  var isNullOrUndefined = (value) => value === null || value === void 0;
  var strictUriEncode = (string) => encodeURIComponent(string).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
  var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index": {
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              [encode3(key, options), "[", index, "]"].join("")
            ];
          }
          return [
            ...result,
            [encode3(key, options), "[", encode3(index, options), "]=", encode3(value, options)].join("")
          ];
        };
      }
      case "bracket": {
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              [encode3(key, options), "[]"].join("")
            ];
          }
          return [
            ...result,
            [encode3(key, options), "[]=", encode3(value, options)].join("")
          ];
        };
      }
      case "colon-list-separator": {
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              [encode3(key, options), ":list="].join("")
            ];
          }
          return [
            ...result,
            [encode3(key, options), ":list=", encode3(value, options)].join("")
          ];
        };
      }
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode3(key, options), keyValueSep, encode3(value, options)].join("")];
          }
          return [[result, encode3(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default: {
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [
              ...result,
              encode3(key, options)
            ];
          }
          return [
            ...result,
            [encode3(key, options), "=", encode3(value, options)].join("")
          ];
        };
      }
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index": {
        return (key, value, accumulator) => {
          result = /\[(\d*)]$/.exec(key);
          key = key.replace(/\[\d*]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      }
      case "bracket": {
        return (key, value, accumulator) => {
          result = /(\[])$/.exec(key);
          key = key.replace(/\[]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [...accumulator[key], value];
        };
      }
      case "colon-list-separator": {
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [...accumulator[key], value];
        };
      }
      case "comma":
      case "separator": {
        return (key, value, accumulator) => {
          const isArray2 = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray2 && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray2 || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      }
      case "bracket-separator": {
        return (key, value, accumulator) => {
          const isArray2 = /(\[])$/.test(key);
          key = key.replace(/\[]$/, "");
          if (!isArray2) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [...accumulator[key], ...arrayValue];
        };
      }
      default: {
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [...[accumulator[key]].flat(), value];
        };
      }
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode3(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeUriComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash = url.slice(hashStart);
    }
    return hash;
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parse(query, options) {
    options = {
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false,
      ...options
    };
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const returnValue = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return returnValue;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return returnValue;
    }
    for (const parameter of query.split("&")) {
      if (parameter === "") {
        continue;
      }
      const parameter_ = options.decode ? parameter.replace(/\+/g, " ") : parameter;
      let [key, value] = splitOnFirst(parameter_, "=");
      if (key === void 0) {
        key = parameter_;
      }
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, returnValue);
    }
    for (const [key, value] of Object.entries(returnValue)) {
      if (typeof value === "object" && value !== null) {
        for (const [key2, value2] of Object.entries(value)) {
          value[key2] = parseValue(value2, options);
        }
      } else {
        returnValue[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return returnValue;
    }
    return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
      const value = returnValue[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  function stringify(object, options) {
    if (!object) {
      return "";
    }
    options = {
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...options
    };
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const [key, value] of Object.entries(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = value;
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode3(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode3(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode3(key, options) + "=" + encode3(value, options);
    }).filter((x) => x.length > 0).join("&");
  }
  function parseUrl(url, options) {
    options = {
      decode: true,
      ...options
    };
    let [url_, hash] = splitOnFirst(url, "#");
    if (url_ === void 0) {
      url_ = url;
    }
    return {
      url: url_?.split("?")?.[0] ?? "",
      query: parse(extract(url), options),
      ...options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode2(hash, options) } : {}
    };
  }
  function stringifyUrl(object, options) {
    options = {
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true,
      ...options
    };
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = extract(object.url);
    const query = {
      ...parse(queryFromUrl, { sort: false }),
      ...object.query
    };
    let queryString = stringify(query, options);
    if (queryString) {
      queryString = `?${queryString}`;
    }
    let hash = getHash(object.url);
    if (object.fragmentIdentifier) {
      const urlObjectForFragmentEncode = new URL(url);
      urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
      hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
    }
    return `${url}${queryString}${hash}`;
  }
  function pick(input, filter2, options) {
    options = {
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false,
      ...options
    };
    const { url, query, fragmentIdentifier } = parseUrl(input, options);
    return stringifyUrl({
      url,
      query: includeKeys(query, filter2),
      fragmentIdentifier
    }, options);
  }
  function exclude(input, filter2, options) {
    const exclusionFilter = Array.isArray(filter2) ? (key) => !filter2.includes(key) : (key, value) => !filter2(key, value);
    return pick(input, exclusionFilter, options);
  }

  // node_modules/.pnpm/query-string@8.1.0/node_modules/query-string/index.js
  var query_string_default = base_exports;

  // src/utils/globalUtilityFunctions/getQueryParamByName.ts
  var getQueryParamByName = (queryParamName) => {
    const parsed = query_string_default.parse(location.search);
    return parsed[queryParamName];
  };

  // src/utils/globalUtilityFunctions/createCookieFromQueryParam.ts
  var createCookieFromQueryParam = (queryParamName, expires, secure) => {
    const sellerQueryParam = getQueryParamByName(queryParamName);
    const value = String(sellerQueryParam);
    if (value !== "undefined") {
      api.set(queryParamName, value, { expires, sameSite: "Strict", secure });
    }
  };

  // src/utils/currentCompanyState/currenCompanyClass.ts
  var CurrrentCompany = class {
    _queryParamName;
    _cookieValue;
    _cookieName;
    _cookieLifeTime;
    _isSecure;
    _switchPageAtrributeName;
    _switchPageAttributeRecordIdName;
    _queryParamValue;
    constructor(queryParamName, cookieLifeTime, isSecure) {
      this._queryParamName = queryParamName;
      this._cookieName = this._queryParamName;
      this._cookieLifeTime = cookieLifeTime;
      this._isSecure = isSecure;
      this._cookieValue = api.get(this._cookieName);
      this._switchPageAtrributeName = "switch-pages-type";
      this._switchPageAttributeRecordIdName = "current-company-id";
      this._queryParamValue = getQueryParamByName(this._queryParamName);
      this.initCurrentCompanyState();
      this.changeVisibilityOfSwitchStateItems();
      this.setLinkswitchPageQueryParam();
    }
    get switchPagesElements() {
      const getSwitchPages = document.querySelectorAll(
        `[${this._switchPageAtrributeName}]`
      );
      return getSwitchPages;
    }
    get cookieValue() {
      return this._cookieValue;
    }
    get currentRecordId() {
      const switchPageAttributeRecordIdEl = document.querySelector("[current-company-id]");
      if (this._queryParamValue) {
        if (this._queryParamValue !== "global")
          return this._queryParamValue;
        if (this._queryParamValue === "global")
          return;
      }
      if (this.cookieValue) {
        if (this.cookieValue === "global")
          return;
        return this._cookieValue;
      }
      if (switchPageAttributeRecordIdEl) {
        const switchAttributeRecordId = switchPageAttributeRecordIdEl.getAttribute(
          this._switchPageAttributeRecordIdName
        );
        if (typeof switchAttributeRecordId === "string")
          return switchAttributeRecordId;
      }
    }
    setLinkswitchPageQueryParam() {
      this.switchPagesElements.forEach((el) => {
        const switchPageLinkType = el.getAttribute(this._switchPageAtrributeName);
        let attributeConnector = "?";
        if (el.href.includes("?")) {
          attributeConnector = "&";
        }
        if (el.href.includes(this._queryParamName))
          return;
        if (switchPageLinkType === "company-specific") {
          el.href += `${attributeConnector}${this._queryParamName}=${this.currentRecordId}`;
        } else {
          el.href += `${attributeConnector}${this._queryParamName}=global`;
        }
      });
    }
    initCurrentCompanyState() {
      createCookieFromQueryParam(this._queryParamName, this._cookieLifeTime, this._isSecure);
    }
    changeVisibilityOfSwitchStateItems() {
      const getAllGlobalElements = document.querySelectorAll('[switch-state="global"]');
      const getAllCompanySpecificElements = document.querySelectorAll(
        '[switch-state="company-specific"]'
      );
      if (getAllCompanySpecificElements.length !== 0 && getAllGlobalElements.length !== 0) {
        const hideAllElementsOfNotCurrentState = (elements) => {
          elements.forEach((el) => {
            el.style.display = "none";
          });
        };
        if (this.currentRecordId) {
          hideAllElementsOfNotCurrentState(getAllGlobalElements);
        } else {
          hideAllElementsOfNotCurrentState(getAllCompanySpecificElements);
        }
      }
    }
  };

  // src/utils/currentCompanyState/index.ts
  var initCurrentCompanyState = () => {
    const currrentCompany = new CurrrentCompany("company", 30, true);
    return currrentCompany.currentRecordId;
  };

  // src/utils/DynamicPages/articlePages.ts
  init_live_reload();

  // src/utils/globalUtilityFunctions/onClickCopyCurrentLinkToClipBoard.ts
  init_live_reload();

  // src/utils/globalUtilityFunctions/sleep.ts
  init_live_reload();
  var sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // src/utils/globalUtilityFunctions/onClickCopyCurrentLinkToClipBoard.ts
  var onClickCopyCurrentLinkToClipBoard = (querySelector) => {
    const buttonElements = document.querySelectorAll(querySelector);
    const currentLink = window.location.href;
    buttonElements.forEach((el) => {
      const tooltip = el.querySelector('[tooltip-el="wrapper"]');
      const toolTipTextEl = el.querySelector('[tooltip-el="text"]');
      el.addEventListener("click", async (event2) => {
        event2.preventDefault();
        const finishedText = tooltip?.getAttribute("tooltip-finished-text");
        await navigator.clipboard.writeText(currentLink);
        modifyToolTipText(toolTipTextEl, finishedText);
      });
    });
  };
  var modifyToolTipText = (toolTipTextEl, finishedText) => {
    if (toolTipTextEl && finishedText) {
      const initialText = toolTipTextEl.innerText;
      if (finishedText)
        toolTipTextEl.innerText = finishedText;
      else
        toolTipTextEl.innerText = "Copied!";
      sleep(1e3).then(() => {
        toolTipTextEl.innerText = initialText;
      });
    }
  };

  // src/utils/DynamicPages/articlePages.ts
  var initArticlePages = () => {
    onClickCopyCurrentLinkToClipBoard('[copy-el="current-link"]');
  };

  // src/utils/DynamicPages/collectionsPages.ts
  init_live_reload();

  // src/utils/globalUtilityFunctions/CreateFitlerableMaterialienList.ts
  init_live_reload();
  var createFilterableList = (listWrapperQuerySelector, listQuerySelector, htmlTag) => {
    const filterAttribute = "list-filter-field";
    const ListWrapperEl = document.querySelectorAll(listWrapperQuerySelector);
    ListWrapperEl.forEach((el) => {
      const materialienItemEl = el.querySelector(listQuerySelector);
      const fsCmsfilterFieldEl = el.querySelector(`[${filterAttribute}]`);
      if (!materialienItemEl || !fsCmsfilterFieldEl)
        return;
      const fsCmsfilterFieldAttribute = fsCmsfilterFieldEl.getAttribute(filterAttribute);
      const materialienList = materialienItemEl.innerText;
      const materialienArray = materialienList.split(", ");
      el.innerHTML = "";
      materialienArray.forEach((item) => {
        if (!htmlTag) {
          el.innerHTML += `<div class="${materialienItemEl.classList}" fs-cmsfilter-field=${fsCmsfilterFieldAttribute}>${item}</div>`;
        } else {
          el.innerHTML += `<${htmlTag} class="${materialienItemEl.classList}" fs-cmsfilter-field=${fsCmsfilterFieldAttribute}>${item}</${htmlTag}>`;
        }
      });
    });
  };

  // src/utils/globalUtilityFunctions/toggleOutlineSearchBar.ts
  init_live_reload();
  function toggleOutlineSearchBar(target, searchField, form) {
    if (!searchField || !form || !target)
      return;
    if (searchField.contains(target)) {
      form.style.outline = "3px solid var(--swatch--light-black)";
    } else {
      form.style.outline = "0px solid var(--swatch--light-black)";
    }
  }

  // src/utils/DynamicPages/collectionsPages.ts
  var initCollectionPages = () => {
    const toggleOutlineSearchBarOnClick = () => {
      const collectionPagesSection = document.querySelectorAll(
        '[section="company-cms-list"]'
      );
      collectionPagesSection.forEach((el) => {
        const searchField = el.querySelector('[collection-search-el="search_field"]');
        const form = el.querySelector('[collection-search-el="form"]');
        el.addEventListener("click", (e) => {
          const target = e.target;
          toggleOutlineSearchBar(target, searchField, form);
        });
      });
    };
    toggleOutlineSearchBarOnClick();
    createFilterableList('[filter-el="search-tags-wrapper"]', '[filter-el="search-tags"]');
  };

  // src/utils/DynamicPages/ueberUnsTemplate.ts
  init_live_reload();
  var initUeberUnsTemplate = () => {
    initTimeline();
  };
  var initTimeline = () => {
    const wrapperEl = document.querySelector('[timeline-el="wrapper"]');
    const dataEl = document.querySelector('[timeline-el="data"]');
    const SectionEl = document.querySelector('[timeline-el="section"]');
    const componentEl = document.querySelector('[timeline-el="component"]');
    if (!wrapperEl || !dataEl || !componentEl) {
      if (!SectionEl)
        return;
      SectionEl.classList.add("hide");
      return;
    }
    const data = JSON.parse(dataEl.innerText);
    const dateEl = wrapperEl.querySelector('[timeline-el="date"]');
    const imageEL = wrapperEl.querySelector('[timeline-el="image"]');
    const descriptionEl = wrapperEl.querySelector('[timeline-el="description"]');
    wrapperEl.remove();
    data.forEach((item) => {
      if (!dateEl || !imageEL || !descriptionEl)
        return;
      dateEl.innerText = item.jahr;
      imageEL.src = item.image;
      imageEL.alt = item.alt;
      descriptionEl.innerText = item.description;
      componentEl.innerHTML += wrapperEl.outerHTML;
    });
  };

  // src/utils/globalSearch/index.ts
  init_live_reload();
  var import_core = __toESM(require_core(), 1);

  // src/utils/globalUtilityFunctions/jsMediaQueries.ts
  init_live_reload();
  function matchSmallMobile() {
    return window.matchMedia(`(max-width: 320px)`).matches;
  }
  function matchMediumMobile() {
    return window.matchMedia(`(max-width: 375px)`).matches;
  }
  function matchBigMobile() {
    return window.matchMedia(`(max-width: 479px)`).matches;
  }
  function matchTablet() {
    return window.matchMedia(`(min-width: 768px) and (max-width: 992px`).matches;
  }
  function matchDesktop() {
    return window.matchMedia(`(min-width: 992px)`).matches;
  }

  // src/utils/globalSearch/index.ts
  var initGlobalSearch = () => {
    initGloabalSearchUtilityFunctions();
    createFilterableList(
      '[filter-el="current-company-list-wrapper"]',
      '[filter-el="current-company-list"]'
    );
    selectCurrentCompanyFilter();
  };
  var selectCurrentCompanyFilter = () => {
    const companyNameEl = document.querySelector('[navbar-el="current-company-name"]');
    const currentCompanyFilters = document.querySelectorAll(
      '[filter-el="current-company"]'
    );
    if (!companyNameEl || !currentCompanyFilters)
      return;
    const mutationCallback = (mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "characterData") {
          currentCompanyFilters.forEach((el) => {
            if (companyNameEl.innerText === el.innerText) {
              el.click();
              const selectField = document.querySelector('[global-search-el="select"]');
              if (!selectField)
                return;
              const unternehmenOptionEl = selectField.querySelector('[value="Unternehmen"]');
              if (!unternehmenOptionEl)
                return;
              unternehmenOptionEl.style.display = "none";
            }
          });
        }
      });
    };
    const observer = new MutationObserver(mutationCallback);
    const config = { characterData: false, attributes: false, childList: true, subtree: false };
    observer.observe(companyNameEl, config);
  };
  var initGloabalSearchUtilityFunctions = () => {
    const globalOpenBtn = document.querySelectorAll(
      '[global-search-el="open_button"]'
    );
    const globalCloseBtn = document.querySelectorAll(
      '[global-search-el="close_button"]'
    );
    const companyOpenBtn = document.querySelectorAll(
      '[company-search-el="open_button"]'
    );
    const companyCloseBtn = document.querySelectorAll(
      '[company-search-el="close_button"]'
    );
    const typewriterTextEl = document.querySelectorAll(
      '[global-search-el="typewriter_text"]'
    );
    const materialItems = document.querySelectorAll(
      '[global-search-el="material-item"]'
    );
    const [globalMobileOpenBtn, globaldesktopOpenBtn] = globalOpenBtn;
    const [globalMobileCloseBtn, globalDesktopCloseBtn] = globalCloseBtn;
    const [companyMobileOpenBtn, companydesktopOpenBtn] = companyOpenBtn;
    const [companyMobileCloseBtn, companyDesktopCloseBtn] = companyCloseBtn;
    const componentHolder = document.querySelector(
      '[global-search-el="component_holder"]'
    );
    const globalNavbarButtonWrapper = document.querySelector(
      '[global-navbar-el="button_wrapper"]'
    );
    const companyNavbarButtonWrapper = document.querySelector(
      '[company-navbar-el="button_wrapper"]'
    );
    const form = document.querySelector('[global-search-el="form"]');
    const searchField = document.querySelector(
      '[global-search-el="search_field"]'
    );
    const toggleSearchVisibility = () => {
      const emptySearchfieldOnClose = () => {
        if (!searchField)
          return;
        searchField.value = "";
      };
      const autoFocusSearchField = () => {
        if (!searchField)
          return;
        if (componentHolder?.classList.contains("hide"))
          return;
        searchField.focus();
        toggleOutlineSearchBar(searchField, searchField, form);
      };
      const toggleHideClassOnClick = (el) => {
        el.addEventListener("click", () => {
          componentHolder?.classList.toggle("hide");
          if (el.isEqualNode(globaldesktopOpenBtn)) {
            console.log("globaldesktopOpenBtn");
            companyMobileCloseBtn?.classList.remove("hide");
            globaldesktopOpenBtn.classList.add("hide");
          } else if (el.isEqualNode(globalDesktopCloseBtn)) {
            console.log("globalDesktopCloseBtn");
            globaldesktopOpenBtn.classList.remove("hide");
          } else if (el.isEqualNode(globalMobileCloseBtn)) {
            console.log("globalMobileCloseBtn");
            globalMobileCloseBtn.style.display = "none";
            globalNavbarButtonWrapper?.classList.remove("hide");
          } else if (el.isEqualNode(globalMobileOpenBtn)) {
            console.log("globalMobileOpenBtn");
            globalMobileCloseBtn.style.display = "block";
            globalNavbarButtonWrapper?.classList.add("hide");
          } else if (el.isEqualNode(companydesktopOpenBtn)) {
            console.log("companydesktopOpenBtn");
            companyMobileCloseBtn?.classList.remove("hide");
            companydesktopOpenBtn.classList.add("hide");
          } else if (el.isEqualNode(companyDesktopCloseBtn)) {
            console.log("companyDesktopCloseBtn");
            if (matchBigMobile()) {
              if (companyDesktopCloseBtn) {
                companyDesktopCloseBtn.style.display = "none";
              }
              companyNavbarButtonWrapper?.classList.remove("hide");
            }
            companydesktopOpenBtn.classList.remove("hide");
          } else if (el.isEqualNode(companyMobileCloseBtn)) {
            console.log("companyMobileCloseBtn");
            companyMobileCloseBtn.classList.add("hide");
            companydesktopOpenBtn?.classList.remove("hide");
            globaldesktopOpenBtn?.classList.remove("hide");
            companyNavbarButtonWrapper?.classList.remove("hide");
          } else if (el.isEqualNode(companyMobileOpenBtn)) {
            console.log("companyMobileOpenBtn");
            companyMobileCloseBtn.classList.remove("hide");
            if (matchBigMobile()) {
              if (companyDesktopCloseBtn) {
                companyDesktopCloseBtn.style.display = "block";
              }
            }
            companyNavbarButtonWrapper?.classList.add("hide");
          }
          emptySearchfieldOnClose();
          autoFocusSearchField();
        });
      };
      if (globalMobileOpenBtn)
        toggleHideClassOnClick(globalMobileOpenBtn);
      if (globaldesktopOpenBtn)
        toggleHideClassOnClick(globaldesktopOpenBtn);
      if (globalMobileCloseBtn)
        toggleHideClassOnClick(globalMobileCloseBtn);
      if (globalDesktopCloseBtn)
        toggleHideClassOnClick(globalDesktopCloseBtn);
      if (companyMobileOpenBtn)
        toggleHideClassOnClick(companyMobileOpenBtn);
      if (companydesktopOpenBtn)
        toggleHideClassOnClick(companydesktopOpenBtn);
      if (companyMobileCloseBtn)
        toggleHideClassOnClick(companyMobileCloseBtn);
      if (companyDesktopCloseBtn)
        toggleHideClassOnClick(companyDesktopCloseBtn);
    };
    const toggleSearchbarFocussedState = () => {
      if (!componentHolder || !searchField || !form)
        return;
      componentHolder.addEventListener("click", (e) => {
        const target = e.target;
        toggleOutlineSearchBar(target, searchField, form);
      });
    };
    const typeAnimation = (el) => {
      const customNodeCreator = (character) => {
        if (!searchField)
          return;
        searchField.placeholder = searchField.placeholder + character;
        return null;
      };
      const onRemoveNode = () => {
        if (!searchField)
          return;
        if (searchField.placeholder) {
          searchField.placeholder = searchField.placeholder.slice(0, -1);
        }
      };
      const typewriter = new import_core.default(el, {
        loop: true,
        delay: 75,
        deleteSpeed: 75,
        onCreateTextNode: el.isEqualNode(searchField) ? customNodeCreator : void 0,
        onRemoveNode: el.isEqualNode(searchField) ? onRemoveNode : void 0
      });
      typewriter.typeString("Suche nach einem Produkt").pauseFor(1e3).deleteChars(7).typeString("Artikel").pauseFor(1e3).deleteChars(7).typeString("Event").pauseFor(1e3).deleteChars(7).typeString("r Anleitung").pauseFor(1e3).deleteChars(11).typeString("m Material").pauseFor(1e3).pauseFor(1e3).start();
    };
    const loadDynamicLinkForMaterialItems = () => {
      materialItems.forEach((materialItem) => {
        const linkEl = materialItem.querySelector("a");
        const materialNameEl = materialItem.querySelector('[fs-cmsfilter-field="name"]');
        if (!linkEl || !materialNameEl)
          return;
        const materialName = materialNameEl.innerText;
        linkEl.href = `/category/alle-produkte?materialien=${materialName}`;
      });
    };
    loadDynamicLinkForMaterialItems();
    const mountTypeWriterAnimation = () => {
      if (searchField)
        typeAnimation(searchField);
      typewriterTextEl.forEach((el) => {
        typeAnimation(el);
      });
    };
    mountTypeWriterAnimation();
    toggleSearchVisibility();
    toggleSearchbarFocussedState();
  };

  // src/utils/globalUtilityFunctions/loadDynamicLinkForMaterialien.ts
  init_live_reload();
  var initLoadDynamicLinkForMaterialItems = () => {
    const materialItems = document.querySelectorAll(
      '[use-case-el="material"]'
    );
    materialItems.forEach((materialItem) => {
      const linkEl = materialItem.querySelector("a");
      const materialNameEl = materialItem.querySelector('[use-case-el="name"]');
      if (!linkEl || !materialNameEl)
        return;
      const materialName = materialNameEl.innerText;
      let attributeConnector = "?";
      if (linkEl.href.includes("?")) {
        attributeConnector = "&";
      }
      linkEl.href += `${attributeConnector}materialien=${materialName}`;
    });
  };

  // src/utils/globalUtilityFunctions/removeHoverScaleAnimationOnMobileDevices.ts
  init_live_reload();

  // src/utils/globalUtilityFunctions/overrRideWindow.ts
  init_live_reload();
  window.mobileAndTabletCheck = window.mobileAndTabletCheck || {};
  window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      ))
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  window.detectMobile = window.detectMobile || {};
  window.detectMobile = function() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];
    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  };

  // src/utils/globalUtilityFunctions/matchStringWithRegex.ts
  init_live_reload();
  function matchStringWithRegex(inputString, regex) {
    const match = inputString.match(regex);
    return match ? match : null;
  }

  // src/utils/globalUtilityFunctions/removeHoverScaleAnimationOnMobileDevices.ts
  function removeHoverScaleAnimationOnMobileDevices() {
    const regex = /\/\*\s*remove hover start\s*\*\/([\s\S]*?)\/\*\s*remove hover end\s*\*\//;
    if (window.mobileAndTabletCheck() || window.detectMobile()) {
      const globalStyles = document.querySelector(".global-styles");
      if (!globalStyles)
        return;
      const styleTag = globalStyles.querySelector("style");
      if (!styleTag)
        return;
      const stylesToApply = matchStringWithRegex(styleTag.innerText, regex);
      if (stylesToApply) {
        styleTag.innerText += stylesToApply[1];
      }
    }
  }

  // src/utils/onlineshop/Categories/index.ts
  init_live_reload();

  // src/utils/globalUtilityFunctions/ElementWatcher.ts
  init_live_reload();
  var ElementWatcher = class {
    wrapperQuerySelector;
    observer;
    constructor(wrapperQuerySelector) {
      this.wrapperQuerySelector = document.querySelector(wrapperQuerySelector);
      if (!this.wrapperQuerySelector) {
        console.error("Wrapper element not found.");
        return;
      }
      this.initObserver();
    }
    initObserver() {
      this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((addedNode) => {
              if (addedNode instanceof HTMLElement) {
                const addedNodeTextEL = addedNode.querySelector(
                  '[fs-cmsfilter-element="tag-text"]'
                );
                if (!addedNodeTextEL) {
                  console.error(
                    'Text Element of added node with attribute [fs-cmsfilter-element="tag-text"] was not found'
                  );
                  return;
                }
                const addedNodeText = addedNodeTextEL.innerText;
                if (addedNodeText.includes("unternehmen:")) {
                  addedNode.style.display = "none";
                }
              } else {
                console.error(addedNode + "is not type of HTMLElement");
              }
            });
          }
        });
      });
      const config = { childList: true };
      if (this.wrapperQuerySelector) {
        this.observer.observe(this.wrapperQuerySelector, config);
      }
    }
    disconnectObserver() {
      if (this.observer) {
        this.observer.disconnect();
        console.log("Observer disconnected.");
      }
    }
  };

  // src/utils/onlineshop/Categories/index.ts
  var initCategories = () => {
    const ecommerceItems = document.querySelectorAll('[filter-el="wrapper"]');
    addAvailabilityFilterFunctionality(ecommerceItems);
    setPriceAsValidNumber(ecommerceItems);
    createFilterableList('[filter-el="materialien-list-wrapper"]', '[filter-el="materialien-list"]');
  };
  var addAvailabilityFilterFunctionality = (ItemWrapper) => {
    ItemWrapper.forEach((item) => {
      const quantityNumberEl = item.querySelector(
        '[filter-el="quantity-number"]'
      );
      const quantityBooleanEl = item.querySelector(
        '[filter-el="quantity-boolean"]'
      );
      if (!quantityBooleanEl || !quantityNumberEl)
        return;
      const quantityNumber = Number(quantityNumberEl.innerText);
      if (quantityNumber <= 0) {
        quantityBooleanEl.innerText = "false";
      } else {
        quantityBooleanEl.innerText = "true";
      }
    });
  };
  var hideCompanyFilter = () => {
    const elementToWatch = document.querySelector('[fs-cmsfilter-element="tag-wrapper"]');
    if (!elementToWatch)
      return;
    new ElementWatcher('[fs-cmsfilter-element="tag-wrapper"]');
  };
  hideCompanyFilter();
  var setPriceAsValidNumber = (ItemWrapper) => {
    ItemWrapper.forEach((item) => {
      const priceEl = item.querySelector('[filter-el="price"]');
      const priceAsNumberEl = item.querySelector('[fs-cmsfilter-field="price"]');
      let currentPrice = "priceEl.innerText";
      if (priceEl) {
        currentPrice = priceEl.innerText;
      }
      let priceAsNumber = currentPrice.split(/(\s+)/);
      priceAsNumber = priceAsNumber[2].replace(",", ".");
      if (!priceAsNumberEl)
        return;
      priceAsNumberEl.innerText = priceAsNumber;
    });
  };

  // src/utils/onlineshop/faq/index.ts
  init_live_reload();

  // src/utils/onlineshop/Accordions/index.ts
  init_live_reload();
  var initAccordionFunctionality = (wrapperEl, attributes) => {
    if (wrapperEl.length === 0)
      return;
    wrapperEl.forEach((wrapper) => {
      const accordionHead = wrapper.querySelector(attributes.head);
      const accordionChevron = wrapper.querySelector(attributes.chevron);
      const accordionBody = wrapper.querySelector(attributes.body);
      if (!accordionHead || !accordionChevron || !accordionBody)
        return;
      accordionHead.addEventListener("click", () => {
        accordionHead.classList.toggle("is-opened");
        accordionBody.classList.toggle("is-opened");
        wrapper.classList.toggle("is-opened");
        accordionChevron.classList.toggle("is-opened");
      });
    });
    const initTogglePostQuestionPopup = () => {
      const openPopupBtn = document.querySelector('[faq-el="open-post-question-popup"]');
      const closePopupBtn = document.querySelector('[faq-el="close-post-question-popup"]');
      const popup = document.querySelector('[faq-el="post-question-popup"]');
      if (!closePopupBtn || !openPopupBtn || !popup)
        return;
      const toggleVisibilityOnClick = (btn) => {
        btn.addEventListener("click", () => {
          openPopupBtn.classList.toggle("hide");
          popup.classList.toggle("hide");
        });
      };
      toggleVisibilityOnClick(closePopupBtn);
      toggleVisibilityOnClick(openPopupBtn);
    };
    initTogglePostQuestionPopup();
  };

  // src/utils/onlineshop/faq/index.ts
  var initFaq = () => {
    const faqWrapper = document.querySelectorAll('[faq-el="wrapper"]');
    const atrributes = {
      head: '[faq-el="question"]',
      chevron: '[faq-el="chevron"]',
      body: '[faq-el="answer"]'
    };
    initAccordionFunctionality(faqWrapper, atrributes);
  };

  // src/utils/onlineshop/mehrErfahren/index.ts
  init_live_reload();
  var initMehrErfahren = () => {
    const loadUniqueSellingPoints = () => {
      const uspWrappers = document.querySelectorAll(
        '[mehr-erfahren-el="usp_wrapper"]'
      );
      const mehrErfahrenSection = document.querySelector('[mehr-erfahren-el="section"]');
      const jsonDataEl = document.querySelector('[mehr-erfahren-el="data"]');
      if (!jsonDataEl) {
        if (mehrErfahrenSection)
          mehrErfahrenSection.classList.add("hide");
        return;
      }
      const jsonDataString = jsonDataEl.innerText;
      const data = JSON.parse(jsonDataString);
      uspWrappers.forEach((uspWrapper, index) => {
        const currentUniqueSellingPoint = data[index];
        const image = uspWrapper.querySelector(
          '[mehr-erfahren-el="usp_image"]'
        );
        const title = uspWrapper.querySelector('[mehr-erfahren-el="usp_title"]');
        const description = uspWrapper.querySelector(
          '[mehr-erfahren-el="usp_description"]'
        );
        if (!image || !title || !description)
          return;
        image.setAttribute("src", currentUniqueSellingPoint.image);
        title.innerText = currentUniqueSellingPoint.title;
        description.innerText = currentUniqueSellingPoint.description;
      });
    };
    const loadMainImageInMaterialien = () => {
      const mainImage = document.querySelector('[mehr-erfahren-el="main-image"]');
      const materialienList = document.querySelector(
        '[mehr-erfahren-el="materialien-list"]'
      );
      if (!mainImage || !materialienList)
        return;
      const clonedMainImage = mainImage.cloneNode();
      const numberOfColumns = materialienList.childElementCount;
      const spanNumber = numberOfColumns % 2 === 0 ? numberOfColumns / 2 : numberOfColumns / 2 + 1;
      const imageWrapper = document.createElement("div");
      const outerWrapper = document.createElement("div");
      outerWrapper.appendChild(imageWrapper);
      imageWrapper.appendChild(clonedMainImage);
      imageWrapper.classList.add("mehr-erfahren_main-image-wrapper");
      imageWrapper.style.gridRow = `1/span ${spanNumber}`;
      materialienList.innerHTML += outerWrapper.innerHTML;
    };
    loadMainImageInMaterialien();
    loadUniqueSellingPoints();
  };

  // src/utils/onlineshop/productBar/index.ts
  init_live_reload();
  var initinfoBar = () => {
    const infoBarTrigger = document.querySelector('[info-bar-el="visibility-trigger"]');
    const infoBarEl = document.querySelector('[info-bar-el="info-bar-el"]');
    const navBarEl = document.querySelector('[info-bar-el="nav-wrapper"]');
    const sellerEl = document.querySelector('[seller-el="component_el"]');
    const cartWrapperEl = document.querySelectorAll(
      '[data-node-type="commerce-cart-container-wrapper"]'
    );
    if (!infoBarTrigger || !navBarEl || !infoBarEl)
      return;
    if (cartWrapperEl) {
      cartWrapperEl[1].style.visibility = "visible";
    }
    const adjustInfoPageStyling = () => {
      const positionDocument = window.scrollY;
      const productBarPosition = infoBarTrigger.offsetTop;
      navBarEl.style.transition = "visibility 0s";
      if (productBarPosition >= positionDocument) {
        if (matchTablet()) {
          if (sellerEl)
            sellerEl.style.bottom = "1rem";
          navBarEl.style.visibility = "visible";
        } else {
          navBarEl.style.visibility = "visible";
        }
        infoBarEl.style.visibility = "hidden";
      } else {
        if (matchTablet()) {
          if (sellerEl)
            sellerEl.style.bottom = "5rem";
          navBarEl.style.visibility = "visible";
        } else {
          navBarEl.style.zIndex = "-1";
          navBarEl.style.visibility = "hidden";
          sleep(200).then(() => {
            navBarEl.style.zIndex = "";
          });
        }
        infoBarEl.style.visibility = "visible";
      }
    };
    adjustInfoPageStyling();
    document.addEventListener("scroll", adjustInfoPageStyling, { passive: true });
  };

  // src/utils/onlineshop/Products/index.ts
  init_live_reload();

  // src/utils/onlineshop/Products/dynamicProductSpecificationsTable.ts
  init_live_reload();
  var generateDynamicProductSpecificationsTable = () => {
    const tableBodyEl = document.querySelector('[spezifikationen-el="table_body"]');
    if (!tableBodyEl)
      return;
    const tableRowEl = tableBodyEl.querySelector('[spezifikationen-el="table_row"]');
    tableBodyEl.innerHTML = "";
    const tableValue = document.querySelector(
      '[spezifikationen-el="dynamic-data"]'
    );
    let data = {};
    if (!tableValue) {
      data = {};
    } else {
      data = JSON.parse(tableValue.innerText);
    }
    for (const [key, value] of Object.entries(data)) {
      if (!tableRowEl)
        return;
      const tableRowNode = tableRowEl;
      const cellTitle = tableRowNode.querySelector('[spezifikationen-el="cell-title"]');
      const cellValue = tableRowNode.querySelectorAll(
        '[spezifikationen-el="cell-value"]'
      );
      if (cellTitle && cellValue) {
        cellTitle.innerText = key;
        cellValue[0].innerText = value;
        cellValue[1].innerText = value;
        tableBodyEl.innerHTML += tableRowNode.innerHTML;
      }
    }
  };

  // src/utils/onlineshop/Products/hideEmptyProductSections.ts
  init_live_reload();
  var hideEmptyProductSections = () => {
    const emptyProductSections = document.querySelectorAll("section ");
    emptyProductSections.forEach((section) => {
      const emptyEl = section.querySelectorAll("section .w-dyn-empty");
      emptyEl.forEach(() => {
        const sectionAttribute = section.getAttribute("id");
        const productAnchorLink = document.querySelector(`[href ="#${sectionAttribute}"]`);
        if (!productAnchorLink)
          return;
        productAnchorLink.style.display = "none";
        section.style.display = "none";
      });
    });
  };

  // src/utils/onlineshop/Products/mobileProductSectionsAccordions.ts
  init_live_reload();
  var mountMobileProductSectionsAccordions = () => {
    const productSectionAccordionWrapper = document.querySelectorAll(
      '[product-section-el="wrapper"]'
    );
    const productSectionAtrributes = {
      head: '[product-section-el="head"]',
      chevron: '[product-section-el="chevron"]',
      body: '[product-section-el="body"]'
    };
    initAccordionFunctionality(productSectionAccordionWrapper, productSectionAtrributes);
  };

  // src/utils/onlineshop/Products/mobileTableOfContentsAccordion.ts
  init_live_reload();
  var mountMobileTableOfContentsAccordion = () => {
    const TOCAccordionWrapper = document.querySelectorAll(
      '[toc-section-el="wrapper"]'
    );
    const TOCSectionAtrributes = {
      head: '[toc-section-el="head"]',
      chevron: '[toc-section-el="chevron"]',
      body: '[toc-section-el="body"]'
    };
    initAccordionFunctionality(TOCAccordionWrapper, TOCSectionAtrributes);
  };

  // src/utils/onlineshop/Products/setsFunctionality.ts
  init_live_reload();
  var mountSetsFunctionality = () => {
    const productItemEl = document.querySelectorAll('[sets-el="item"]');
    const totalPriceEl = document.querySelector('[sets-el="total-price"]');
    const atcAllItemsButtonEl = document.querySelector('[sets-el="atc_all_btn"]');
    let orderIsInitiated = false;
    const orderIsInitiatedFunction = () => {
      orderIsInitiated = true;
    };
    const onElementAdded = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement) {
              orderIsInitiatedFunction();
            }
          }
        }
      }
    };
    const observedElement = document.querySelector(".w-commerce-commercecartlist");
    const observer = new MutationObserver(onElementAdded);
    if (observedElement) {
      observer.observe(observedElement, { childList: true, subtree: true });
    }
    const addSelectedProducts = () => {
      productItemEl.forEach((product, index) => {
        const atcButton = product.querySelector('[sets-el="atc_btn"]');
        if (!atcButton)
          return;
        const adjustAddToCoartIfOrderIsInitated = () => {
          if (!orderIsInitiated && index === 0) {
            atcButton.click();
          }
          if (!orderIsInitiated && index !== 0) {
            sleep(20).then(() => {
              adjustAddToCoartIfOrderIsInitated();
            });
          } else if (orderIsInitiated && index !== 0) {
            atcButton.click();
          } else if (orderIsInitiated && index === 0) {
            atcButton.click();
          }
        };
        if (atcButton.getAttribute("disabled-atc") === "true") {
          return;
        }
        adjustAddToCoartIfOrderIsInitated();
      });
    };
    const disableNotSelectedProducts = () => {
      const totalSumArray = [];
      const loadTotalSum = () => {
        let totalSum = 0;
        totalSumArray.forEach((sum) => {
          let numberofPrice;
          if (!sum)
            return;
          if (typeof sum === "string") {
            numberofPrice = sum.split(/(\s+)/)[2];
          }
          if (numberofPrice) {
            numberofPrice = Number(numberofPrice.replace(",", "."));
            totalSum = totalSum + numberofPrice;
          }
        });
        let totalSumString = String(totalSum);
        totalSumString = totalSumString.replace(".", ",");
        totalSumString = `\u20AC ${totalSumString} EUR`;
        if (!totalPriceEl)
          return;
        totalPriceEl.innerText = totalSumString;
      };
      productItemEl.forEach((product, index) => {
        const atcButton = product.querySelector('[sets-el="atc_btn"]');
        const checkboxEl = product.querySelector(".custom-checkbox input");
        const outOfStockEl = product.querySelector('[sets-el="out_of_stock_message"]');
        const priceEl = product.querySelector('[sets-el="product-price"]');
        if (!atcButton || !outOfStockEl || !checkboxEl)
          return;
        const disableOutOfStockItems = () => {
          if (!outOfStockEl.classList.contains("w-condition-invisible")) {
            checkboxEl.click();
            product.style.opacity = "0.3";
            product.style.pointerEvents = "none";
          }
        };
        const updateItems = () => {
          const checkedCheckBoxEl = product.querySelector(".custom-checkbox input:checked");
          if (!checkedCheckBoxEl) {
            product.style.opacity = "0.3";
            atcButton.setAttribute("disabled-atc", "true");
            totalSumArray[index] = void 0;
          } else {
            product.style.opacity = "1";
            atcButton.setAttribute("disabled-atc", "false");
            if (!priceEl)
              return;
            totalSumArray[index] = priceEl.innerText;
          }
          loadTotalSum();
          const loadAllAtcButtonDynamically = () => {
            if (!atcAllItemsButtonEl)
              return;
            const activeItems = document.querySelectorAll('[disabled-atc="false"]');
            const numberOfActiveItems = activeItems.length;
            if (numberOfActiveItems === 0) {
              atcAllItemsButtonEl.style.opacity = "0.3";
              atcAllItemsButtonEl.style.pointerEvents = "none";
              atcAllItemsButtonEl.innerText = `Alle 0 in den Einkaufswagen`;
            } else {
              atcAllItemsButtonEl.style.opacity = "1";
              atcAllItemsButtonEl.style.pointerEvents = "auto";
              atcAllItemsButtonEl.innerText = `Alle ${numberOfActiveItems} in den Einkaufswagen`;
            }
          };
          loadAllAtcButtonDynamically();
        };
        const upddatePriceOnVariantChange = () => {
          const getVariantSelectors = product.querySelectorAll("select");
          getVariantSelectors.forEach((select) => {
            select.addEventListener("change", () => {
              updateItems();
            });
          });
        };
        const emmitClickOnItemToCheckbox = () => {
          product.addEventListener("click", (event2) => {
            const checkbox = product.querySelector('[sets-el="atc_checkbox"]');
            if (!checkbox)
              return;
            const targetEl = event2.target;
            if (targetEl && targetEl.tagName !== "SELECT" && targetEl.tagName !== "INPUT") {
              checkbox.click();
            }
          });
        };
        emmitClickOnItemToCheckbox();
        upddatePriceOnVariantChange();
        disableOutOfStockItems();
        updateItems();
        checkboxEl.addEventListener("change", () => {
          updateItems();
        });
      });
    };
    const initAddAllFunctionality = () => {
      if (!atcAllItemsButtonEl)
        return;
      atcAllItemsButtonEl.addEventListener("click", () => {
        addSelectedProducts();
      });
      disableNotSelectedProducts();
    };
    initAddAllFunctionality();
  };

  // src/utils/onlineshop/Products/index.ts
  var initProductPage = () => {
    mountMobileProductSectionsAccordions();
    mountMobileTableOfContentsAccordion();
    hideEmptyProductSections();
    generateDynamicProductSpecificationsTable();
    mountSetsFunctionality();
  };

  // src/utils/onlineshop/Ratings/index.ts
  init_live_reload();
  var initRatingsFunctionality = () => {
    const dynamicNumberOfStars = () => {
      const starsWrapper = document.querySelectorAll(
        ".online-shop-categories-template_testimonial_rating-wrapper"
      );
      starsWrapper.forEach((wrapper) => {
        const numberOfStarsEl = wrapper.querySelector(".hide");
        if (!numberOfStarsEl)
          return;
        const numberOfStars = Number(numberOfStarsEl.innerText);
        const stars = wrapper.querySelectorAll(
          ".online-shop-categories-template_testimonial_rating-icon"
        );
        stars.forEach((star, index) => {
          const IndexStartingFromOne = index + 1;
          if (numberOfStars >= IndexStartingFromOne) {
            return;
          }
          star.classList.add("hide");
        });
      });
    };
    dynamicNumberOfStars();
  };

  // src/utils/onlineshop/swiper/slider.ts
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/swiper.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/swiper-core.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/ssr-window.esm.mjs
  init_live_reload();
  function isObject2(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend2(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject2(src[key]) && isObject2(target[key]) && Object.keys(src[key]).length > 0) {
        extend2(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend2(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend2(win, ssrWindow);
    return win;
  }

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/utils.mjs
  init_live_reload();
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject3(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend3() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject3(to[nextKey]) && isObject3(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend3(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject3(to[nextKey]) && isObject3(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend3(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    return [...element.children].filter((el) => el.matches(selector));
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector))
          prevEls.push(prev);
      } else
        prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector))
          nextEls.push(next);
      } else
        nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector))
          parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    return {
      isSafari: needPerspectiveFix || isSafari(),
      needPerspectiveFix,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__)
          return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init2 = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init2);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2])
          self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsAnyListeners)
        return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i])
        slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl)
      offsetCenter = translate2;
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides[i].classList.add(params.slideVisibleClass);
      }
      if (isFullyVisible) {
        slides[i].classList.add(params.slideFullyVisibleClass);
      }
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded)
        progress = 0;
      if (isEndRounded)
        progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1)
        progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length)
          slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      activeSlide.classList.add(params.slideActiveClass);
      if (gridEnabled) {
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      } else {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
    }
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl)
                lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl)
        lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index])
      return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
      imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0)
      return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column))
          unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled)
      return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled)
      return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop)
      return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend)
              prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index)
              appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop)
            c.loopFix({
              ...loopParams,
              slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
            });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!swiper.wrapperEl.contains(targetEl))
        return;
    }
    if ("which" in e && e.which === 3)
      return;
    if ("button" in e && e.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler))
        return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && event2.pointerType === "mouse")
      return;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null)
        return;
      const id = e.pointerId;
      if (id !== data.pointerId)
        return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null)
        return;
      if (e.pointerId !== data.pointerId)
        return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded)
      return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
      return;
    const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined")
        return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend3(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults2 = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend3(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend3(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend3(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend3({}, params);
      if (el && !params.el)
        params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend3({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend3({}, defaults2, allModulesParams);
      swiper.params = extend3({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend3({}, swiper.params);
      swiper.passedParams = extend3({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number")
        return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        el.removeAttribute("style");
        wrapperEl.removeAttribute("style");
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.el.swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend3(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults2;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__)
        Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/index.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/virtual.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/keyboard.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/mousewheel.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/create-element-if-not-defined.mjs
  init_live_reload();
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el);
        if (res)
          return res;
      }
      if (el) {
        if (typeof el === "string")
          res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        }
      }
      if (el && !res)
        return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON")
            subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init2() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl))
        return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init2();
        update2();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on("click", (_s, e) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
          return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init2();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init: init2,
      destroy
    });
  }

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/pagination.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/classes-to-selector.mjs
  init_live_reload();
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl)
        return;
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index)
          return;
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0)
            emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0)
            emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init2() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el)
        return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0)
        return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.filter((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el)
              return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1)
        el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets)
        swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el)
        return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init2();
        render();
        update2();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on("snapIndexChange", () => {
      update2();
    });
    on("snapGridLengthChange", () => {
      render();
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on("lock unlock", () => {
      update2();
    });
    on("click", (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
          return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init2();
      render();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init: init2,
      destroy
    });
  }

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/scrollbar.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/parallax.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/zoom.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/controller.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/a11y.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/history.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/hash-navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/autoplay.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/thumbs.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/free-mode.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/grid.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/manipulation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/effect-fade.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/effect-init.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/effect-target.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/effect-virtual-transition-end.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/effect-cube.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/effect-flip.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/shared/create-shadow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/effect-coverflow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/effect-creative.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.3/node_modules/swiper/modules/effect-cards.mjs
  init_live_reload();

  // src/utils/onlineshop/swiper/returnAttributes.ts
  init_live_reload();

  // src/utils/onlineshop/swiper/utilityFunctions.ts
  init_live_reload();
  var getNumberValueByAttribute = (elementAtrribute) => {
    if (!elementAtrribute) {
      elementAtrribute = void 0;
    } else if (typeof elementAtrribute === "string") {
      if (Number(elementAtrribute)) {
        elementAtrribute = Number(elementAtrribute);
      } else {
        elementAtrribute = void 0;
      }
    }
    return elementAtrribute;
  };
  var getStringValueByAttribute = (elementAtrribute) => {
    if (!elementAtrribute) {
      elementAtrribute = void 0;
    }
    return elementAtrribute;
  };
  var getBooleanValueByAttribute = (boolValue) => {
    if (boolValue) {
      if (boolValue === "true")
        boolValue = true;
      else
        boolValue = false;
    } else {
      boolValue = void 0;
    }
    return boolValue;
  };

  // src/utils/onlineshop/swiper/returnAttributes.ts
  function returnSlidesperViewByAttribute(el, attributeName) {
    const slidesPerViewLargeDesktopValue = el.getAttribute(attributeName);
    return getNumberValueByAttribute(slidesPerViewLargeDesktopValue);
  }
  function returnSpaceBetweenByAtrtribute(el, attributeName) {
    const spaceBetweenDesktopValue = el.getAttribute(attributeName);
    return getStringValueByAttribute(spaceBetweenDesktopValue);
  }
  function returnBooleanValueByAttribute(el, attributeName) {
    const touchMoveDesktop = el.getAttribute(attributeName);
    return getBooleanValueByAttribute(touchMoveDesktop);
  }
  function assignAttributeValues(iterateObject, assignObject, el, returnValueByAttribute) {
    for (const [key, value] of Object.entries(iterateObject)) {
      assignObject[key] = returnValueByAttribute(el, value);
    }
  }
  function getAllSwiperAtributeValues(el, attributesList) {
    if (!el)
      return;
    const attributeValues = {};
    const { booleanValues, spaceBetweenValues, slidesPerViewValues } = attributesList;
    function assignObjectEntriesToNewObject(iterateObject, assignObject, variableType) {
      switch (variableType) {
        case "string":
          assignAttributeValues(iterateObject, assignObject, el, returnSpaceBetweenByAtrtribute);
          break;
        case "number":
          assignAttributeValues(iterateObject, assignObject, el, returnSlidesperViewByAttribute);
          break;
        case "boolean":
          assignAttributeValues(iterateObject, assignObject, el, returnBooleanValueByAttribute);
          break;
      }
    }
    assignObjectEntriesToNewObject(booleanValues, attributeValues, "boolean");
    assignObjectEntriesToNewObject(spaceBetweenValues, attributeValues, "string");
    assignObjectEntriesToNewObject(slidesPerViewValues, attributeValues, "number");
    return attributeValues;
  }

  // src/utils/onlineshop/swiper/slider.ts
  var initSliders = () => {
    mountSliders();
  };
  var mountSliders = () => {
    const sliders = [];
    const sliderWrapperEl = document.querySelectorAll(
      ".slider-main_component"
    );
    sliderWrapperEl.forEach((el) => {
      const paginationBulletWrapper = el.querySelector(
        '[swiper-el="bullet-wrapper"]'
      );
      const btnNext = el.querySelector('[swiper-el="btn_next"]');
      const btnPrev = el.querySelector('[swiper-el="btn_prev"]');
      const attributesList = {
        booleanValues: {
          freemodeValue: "freemode",
          loopValue: "loop-mode",
          isAlternate: "alternate",
          touchMoveDesktop: "allow-touch-desktop"
        },
        spaceBetweenValues: {
          spaceBetweenBaseValue: "space-between-base",
          spaceBetweenMobileValue: "space-between-mobile",
          spaceBetweenTabletValue: "space-between-tablet",
          spaceBetweenDesktopValue: "space-between-desktop",
          spaceBetweenLargeDesktopValue: "space-between-large-desktop"
        },
        slidesPerViewValues: {
          slidesPerViewBaseValue: "slides-per-view-base-value",
          slidesPerViewMobileValue: "slides-per-view-mobile-value",
          slidesPerViewTabletValue: "slides-per-view-tablet-value",
          slidesPerViewDesktopValue: "slides-per-view-desktop-value",
          slidesPerViewLargeDesktopValue: "slides-per-view-large-desktop-value"
        }
      };
      const sliderConfigEl = el.querySelector('[swiper-el="config"] div');
      if (!sliderConfigEl)
        return;
      const attributeValues = getAllSwiperAtributeValues(sliderConfigEl, attributesList);
      if (!attributeValues)
        return;
      const {
        freemodeValue,
        isAlternate,
        loopValue,
        slidesPerViewBaseValue,
        slidesPerViewDesktopValue,
        slidesPerViewLargeDesktopValue,
        slidesPerViewMobileValue,
        slidesPerViewTabletValue,
        spaceBetweenBaseValue,
        spaceBetweenDesktopValue,
        spaceBetweenLargeDesktopValue,
        spaceBetweenMobileValue,
        spaceBetweenTabletValue,
        touchMoveDesktop
      } = attributeValues;
      const swiperEl = el.querySelector(".swiper");
      if (!swiperEl)
        return;
      const emptyListEl = el.querySelector(".w-dyn-empty");
      if (emptyListEl && paginationBulletWrapper && btnNext && btnPrev) {
        paginationBulletWrapper.style.display = "none";
        btnNext.style.display = "none";
        btnPrev.style.display = "none";
        return;
      }
      const swiper = new Swiper(swiperEl, {
        modules: [Navigation, Pagination],
        slidesPerView: slidesPerViewBaseValue ? slidesPerViewBaseValue : "auto",
        speed: 700,
        loop: loopValue,
        mousewheel: {
          forceToAxis: true
        },
        freeMode: freemodeValue,
        spaceBetween: spaceBetweenBaseValue,
        breakpoints: {
          480: {
            slidesPerView: slidesPerViewMobileValue ? slidesPerViewMobileValue : "auto",
            spaceBetween: spaceBetweenMobileValue
          },
          768: {
            slidesPerView: slidesPerViewTabletValue ? slidesPerViewTabletValue : "auto",
            spaceBetween: spaceBetweenTabletValue
          },
          992: {
            slidesPerView: slidesPerViewDesktopValue ? slidesPerViewDesktopValue : "auto",
            spaceBetween: spaceBetweenDesktopValue,
            allowTouchMove: touchMoveDesktop
          },
          1440: {
            slidesPerView: slidesPerViewLargeDesktopValue ? slidesPerViewLargeDesktopValue : slidesPerViewDesktopValue,
            spaceBetween: spaceBetweenLargeDesktopValue ? spaceBetweenLargeDesktopValue : spaceBetweenDesktopValue,
            allowTouchMove: touchMoveDesktop
          }
        },
        pagination: {
          el: paginationBulletWrapper,
          bulletClass: isAlternate ? "swiper-bullet-alternate" : "swiper-bullet",
          bulletActiveClass: "is-active",
          bulletElement: "button",
          clickable: true
        },
        navigation: {
          nextEl: btnNext,
          prevEl: btnPrev,
          disabledClass: "is-disabled"
        }
      });
      if (btnNext?.classList.contains("swiper-button-lock") && paginationBulletWrapper) {
        paginationBulletWrapper.style.display = "none";
      }
      sliders.push(swiper);
    });
    return sliders;
  };

  // src/utils/seller/index.ts
  init_live_reload();

  // src/utils/API/getSeller.ts
  init_live_reload();
  var getCurrentSeller = async (sellerCookie, sellerQueryParam) => {
    let sellerRecordId = "";
    const axiosInstance = createAxiosInstance(sellerTableId);
    if (sellerCookie === void 0 && sellerQueryParam === void 0)
      return;
    if (sellerQueryParam !== void 0) {
      sellerRecordId = sellerQueryParam;
    } else if (sellerCookie !== void 0) {
      sellerRecordId = sellerCookie;
    }
    const currentSellerResponse = await axiosInstance.get("/" + sellerRecordId).then((resp) => resp.data).catch((err) => err.response.status);
    return currentSellerResponse;
  };

  // src/utils/seller/loadSellerCmsItem.ts
  init_live_reload();

  // src/utils/seller/loadSellerContent.ts
  init_live_reload();
  var import_youtube_player = __toESM(require_dist(), 1);

  // src/utils/globalUtilityFunctions/getQueryParamByNameCustomLocation.ts
  init_live_reload();
  var getQueryParamByNameCustomLocation = (queryParamName, link) => {
    const url = new URL(link);
    const parsed = query_string_default.parse(url.search);
    return parsed[queryParamName];
  };

  // src/utils/seller/loadSellerContent.ts
  var loadSellerContent = async (seller) => {
    const sellerData = seller.fields;
    const currentCompanyId = sellerData.Unternehmen[0];
    const currentCompany = await getCurrentCompany(currentCompanyId);
    if (currentCompany === void 0 || typeof currentCompany === "number")
      return;
    const sellerOpenBtn = document.querySelector('[seller-el="button_open"]');
    const profilePictureEl = document.querySelector('[seller-el="profilbild"]');
    const anzeigeNameEl = document.querySelector('[seller-el="anzeige_name"]');
    const companyRoleEl = document.querySelector('[seller-el="company_role"]');
    const companyLogoEl = document.querySelector('[seller-el="company_logo"]');
    const companyBannerEl = document.querySelector('[seller-el="top_banner"]');
    const companyLinkPhoneTextEl = document.querySelector(
      '[seller-el="link_phone"] .text-weight-light'
    );
    const companyLinkPhoneEl = document.querySelector('[seller-el="link_phone"]');
    const companyLinkEmaiTextlEl = document.querySelector(
      '[seller-el="link_email"] .text-weight-light'
    );
    const companyLinkEmaiEl = document.querySelector('[seller-el="link_email"]');
    const companyLinkAdressTextEl = document.querySelector(
      '[seller-el="link_adress"] .text-weight-light'
    );
    const companyLinkAdressEl = document.querySelector('[seller-el="link_adress"]');
    const erfahrungEl = document.querySelector('[seller-el="intro"]');
    const reachabilityEl = document.querySelector('[seller-el="reachability"]');
    const servicesEl = document.querySelector('[seller-el="services"]');
    const introVideoEl = document.querySelector('[seller-el="intro_video"]');
    const companyBannerImage = currentCompany["Vertriebspartner Banner"][0].url;
    const companyLogo = currentCompany.Unternehmenslogo[0].url;
    const profilePicture = sellerData.Profilbild[0].url;
    if (!sellerOpenBtn || !profilePictureEl || !anzeigeNameEl || !companyRoleEl || !companyLogoEl || !companyBannerEl || !companyLinkPhoneTextEl || !companyLinkPhoneEl || !companyLinkEmaiTextlEl || !companyLinkEmaiEl || !companyLinkAdressTextEl || !companyLinkAdressEl || !erfahrungEl || !reachabilityEl || !servicesEl || !introVideoEl)
      return;
    sellerOpenBtn.style.backgroundImage = `url(${profilePicture})`;
    profilePictureEl.setAttribute("src", profilePicture);
    anzeigeNameEl.innerText = sellerData["Anzeige Name"];
    companyRoleEl.innerText = `${currentCompany.Name} - ${sellerData.Rolle}`;
    companyLogoEl.setAttribute("src", companyLogo);
    companyBannerEl.style.backgroundImage = `url(${companyBannerImage})`;
    companyLinkPhoneTextEl.innerText = sellerData.Telefon;
    companyLinkPhoneEl.setAttribute("href", `tel:${sellerData.Telefon}`);
    companyLinkEmaiTextlEl.innerText = sellerData.Email;
    companyLinkEmaiEl.setAttribute("href", `mailto:${sellerData.Email}`);
    companyLinkAdressTextEl.innerText = sellerData.Adresse;
    companyLinkAdressEl.setAttribute(
      "href",
      `https://www.google.com/maps/place/${sellerData.Adresse}`
    );
    erfahrungEl.innerText = sellerData.Intro;
    reachabilityEl.innerText = sellerData.Erreichbarkeit;
    servicesEl.innerText = sellerData.Services;
    const youtubePlayer = (0, import_youtube_player.default)(introVideoEl);
    const videoId = getQueryParamByNameCustomLocation("v", sellerData.Vorstellungsvideo);
    youtubePlayer.loadVideoById(videoId);
    youtubePlayer.stopVideo();
  };

  // src/utils/seller/loadSellerCmsItem.ts
  var loadSellerCmsItem = (seller) => {
    const sellerComponentWrapper = document.querySelector(
      '[seller-el="component_wrapper"]'
    );
    if (!sellerComponentWrapper)
      return;
    const sellerOpenBtn = document.querySelector('[seller-el="button_open"]');
    const sellerPopupExpanded = document.querySelector('[seller-el="popup_expanded"]');
    const overlay = document.querySelector("[seller-el=overlay]");
    const changeSellerPopupVisibilityOnBtnClick = (atrribute) => {
      const actionBtn = document.querySelector(`[seller-el=${atrribute}]`);
      actionBtn.addEventListener("click", () => {
        toggleSellerPopupFunction(atrribute);
      });
    };
    const toggleSellerPopupFunction = (atrribute) => {
      if (atrribute === "button_open") {
        overlay.style.backgroundColor = "var(--color--overlay-light)";
        sellerOpenBtn.classList.add("hide");
        sellerPopupExpanded.classList.remove("hide");
      } else {
        overlay.style.backgroundColor = "transparent";
        sellerOpenBtn.classList.remove("hide");
        sellerPopupExpanded.classList.add("hide");
      }
    };
    const showMoreBtnFunctionality = () => {
      const showMoreBtn = document.querySelector('[seller-el="show_more_button"]');
      const showMoreBtnText = document.querySelector(
        '[seller-el="show_more_button"] div'
      );
      const showMoreBtnChevron = document.querySelector(
        '[seller-el="show_more_button"] .w-embed'
      );
      const showMoreContainer = document.querySelector(
        '[seller-el="show_more_container"]'
      );
      showMoreBtn.addEventListener("click", () => {
        const containerClassList = showMoreContainer.classList;
        containerClassList.toggle("hide");
        if (!containerClassList.contains("hide")) {
          showMoreBtnText.innerText = "Weniger anzeigen";
          showMoreBtnChevron.style.transform = "rotate(180deg)";
        } else {
          showMoreBtnText.innerText = "Mehr anzeigen";
          showMoreBtnChevron.style.transform = "rotate(0deg)";
        }
      });
    };
    const closeSellerPopupOnClickOutside = () => {
      document.body.addEventListener("click", (e) => {
        const target = e.target;
        if (!sellerComponentWrapper.contains(target)) {
          toggleSellerPopupFunction("button_close");
        }
      });
    };
    loadSellerContent(seller);
    closeSellerPopupOnClickOutside();
    showMoreBtnFunctionality();
    changeSellerPopupVisibilityOnBtnClick("button_close");
    changeSellerPopupVisibilityOnBtnClick("button_open");
  };

  // src/utils/seller/sellerItemCmsPage.ts
  init_live_reload();
  var mountSellerItemPageFunctionality = async () => {
    const currentSubpage = getcurrentSubpage();
    if (!currentSubpage.includes("/vertriebsnetzwerk"))
      return;
    setSellerBtnQueryParam();
  };
  var setSellerBtnQueryParam = () => {
    const sellerBtn = document.querySelector('[seller-el="add_seller_btn"]');
    const sellerBtnRecordId = sellerBtn?.getAttribute("seller-airtable-record-id");
    sellerBtn?.setAttribute("href", `?seller=${sellerBtnRecordId}`);
    const disableSellerBtnIfSellerIsCurrentSeller = () => {
      const currentSellerCookie = api.get("seller");
      const currentSellerQueryParam = query_string_default.parse(location.search).seller;
      if (sellerBtnRecordId === currentSellerCookie || sellerBtnRecordId === currentSellerQueryParam) {
        sellerBtn.setAttribute("href", "javascript: void(0)");
        sellerBtn.style.cursor = "not-allowed";
        sellerBtn.style.opacity = "0.2";
        sellerBtn.innerText = "Ist bereits dein Klebstoffexperte";
      }
    };
    disableSellerBtnIfSellerIsCurrentSeller();
  };

  // src/utils/seller/index.ts
  var mountSellerFunctionality = async () => {
    const currentSeller = await sellerUtilityFunction();
    const sellerWrapperEl = document.querySelector("[seller-el='component_el']");
    const currentSubpage = getcurrentSubpage();
    const setSellerVisibility = () => {
      const sellerComponentWrapper = document.querySelector(
        '[seller-el="component_wrapper"]'
      );
      if (!sellerComponentWrapper)
        return;
      sellerComponentWrapper.classList.remove("hide");
      sleep(500).then(() => {
        sellerWrapperEl?.classList.remove("is-vertreter-hidden");
      });
    };
    const addSellerToOrder = () => {
      const sellerCookie = getSellerCookie();
      const sellerField = document.querySelector('[name="Seller"]');
      if (!sellerCookie)
        return;
      sellerField.value = sellerCookie;
    };
    if (currentSeller !== void 0 && typeof currentSeller !== "number") {
      setSellerVisibility();
      loadSellerCmsItem(currentSeller);
      if (currentSubpage.includes("/checkout")) {
        addSellerToOrder();
      }
    }
    mountSellerItemPageFunctionality();
  };
  var sellerUtilityFunction = async () => {
    const sellerCookie = getSellerCookie();
    const sellerQueryParam = getQueryParamByName("seller");
    const currentSeller = await getCurrentSeller(sellerCookie, sellerQueryParam);
    createCookieFromQueryParam("seller", 30, true);
    return currentSeller;
  };
  var getSellerCookie = () => {
    const getSellerCookie2 = api.get("seller");
    return getSellerCookie2;
  };
  var getcurrentSubpage = () => {
    const subPage = window.location.pathname;
    return subPage;
  };

  // src/utils/staticPages/home.ts
  init_live_reload();
  var initHome = () => {
    const layoutItemEl = document.querySelectorAll(
      '[home-hero-el="layout-item"]'
    );
    const layoutWrapper = document.querySelector('[home-hero-el="layout-wrapper"]');
    const showSecondSlideOnHover = () => {
      layoutItemEl.forEach((el) => {
        const secondSlide = el.querySelector('[home-hero-el="second-slide"]');
        const addClass = () => {
          secondSlide?.classList.add("on-hover");
        };
        const removeClass = () => {
          secondSlide?.classList.remove("on-hover");
        };
        console.log(
          "desktop: " + (matchDesktop() && !(window.detectMobile() || window.mobileAndTabletCheck()))
        );
        console.log("mobile: " + (window.detectMobile() || window.mobileAndTabletCheck()));
        if (matchDesktop() && !(window.detectMobile() || window.mobileAndTabletCheck())) {
          removeClass();
          el.addEventListener("mouseenter", () => {
            addClass();
          });
          el.addEventListener("mouseleave", () => {
            removeClass();
          });
        } else if (window.detectMobile() || window.mobileAndTabletCheck()) {
          addClass();
        } else {
          addClass();
        }
      });
    };
    const animateScroll = () => {
      if (layoutWrapper) {
        if (matchSmallMobile())
          layoutWrapper.style.animationName = "moveupmobilesmall";
        if (matchMediumMobile())
          layoutWrapper.style.animationName = "moveupmobilemedium";
        if (matchBigMobile())
          layoutWrapper.style.animationName = "moveupmobilebig";
        if (matchTablet())
          layoutWrapper.style.animationName = "moveuptablet";
        if (matchDesktop()) {
          layoutWrapper.style.animationName = "moveupdesktop";
          layoutWrapper?.addEventListener("mouseenter", stopAnimation);
          layoutWrapper?.addEventListener("mouseleave", startAnimation);
        }
      }
      function startAnimation() {
        if (!layoutWrapper)
          return;
        layoutWrapper.style.animationPlayState = "running";
      }
      function stopAnimation() {
        if (!layoutWrapper)
          return;
        layoutWrapper.style.animationPlayState = "paused";
      }
      startAnimation();
    };
    animateScroll();
    showSecondSlideOnHover();
  };

  // src/utils/staticPages/unternehmensListe.ts
  init_live_reload();
  var initUnternehmensListPage = () => {
    createFilterableList('[filter-el="unternehmen-list-wrapper"]', '[filter-el="unternehmen-list"]');
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    mountSellerFunctionality();
    const currentRecordId = initCurrentCompanyState();
    initCompanyNavbar(currentRecordId);
    initSliders();
    initFaq();
    initRatingsFunctionality();
    initGlobalSearch();
    initLoadDynamicLinkForMaterialItems();
    initinfoBar();
    initHome();
    initCategories();
    initProductPage();
    initMehrErfahren();
    initUnternehmensListPage();
    initCollectionPages();
    initArticlePages();
    initUeberUnsTemplate();
    removeHoverScaleAnimationOnMobileDevices();
  });
})();
/*! Bundled license information:

sister/src/sister.js:
  (**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  *)

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
//# sourceMappingURL=index.js.map
