! function(e) {
  function t(t) {
    for (var r, u, i = t[0], l = t[1], c = t[2], f = 0, s = []; f < i.length; f++) u = i[f], o[u] && s.push(o[u][0]), o[u] = 0;
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (d && d(t); s.length;) s.shift()();
    return a.push.apply(a, c || []), n()
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== o[l] && (r = !1)
      }
      r && (a.splice(t--, 1), e = u(u.s = n[0]))
    }
    return e
  }
  var r = {},
    o = {
      11: 0
    },
    a = [];

  function u(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports
  }
  u.m = e, u.c = r, u.d = function(e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, u.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, u.t = function(e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) u.d(n, r, function(t) {
        return e[t]
      }.bind(null, r));
    return n
  }, u.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return u.d(t, "a", t), t
  }, u.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, u.p = "/";
  var i = window.webpackJsonp = window.webpackJsonp || [],
    l = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var c = 0; c < i.length; c++) t(i[c]);
  var d = l;
  a.push([478, 0, 1]), n()
}({
  26: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(2);
    t.default = function(e) {
      var t = e.map(function(e) {
        return r.latLng(e.latitude, e.longitude)
      });
      return r.latLngBounds(t)
    }
  },
  28: function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
      return (r = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
      }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(2);
    t.defaultIconOpts = {
      iconAnchor: [22, 55],
      iconSize: [45, 75],
      popupAnchor: [0, -37]
    }, t.default = function(e, n) {
      var a = null !== n && n ? {
        iconAnchor: n.icon_anchor || t.defaultIconOpts.iconAnchor,
        iconSize: n.icon_size || t.defaultIconOpts.iconSize,
        popupAnchor: n.popup_anchor || t.defaultIconOpts.popupAnchor
      } : t.defaultIconOpts;
      return null === e ? void 0 : new o.Icon(r({}, a, {
        iconUrl: "/images/icon-" + e + ".svg",
        iconRetinaUrl: "/images/icon-" + e + ".svg"
      }))
    }
  },
  31: function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }).apply(this, arguments)
      },
      o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = o(n(0)),
      u = o(n(52));
    t.defaultZoomOpts = {
      maxZoom: 18,
      minZoom: 9,
      scrollWheelZoom: !1,
      style: {
        touchAction: "none"
      }
    };
    t.default = a.default.memo(function(e) {
      var o = e.bounds,
        u = e.boundsByMarkers,
        i = e.mapData,
        l = i.default_center,
        c = i.markers,
        d = i.polylines,
        f = i.tile_server_url,
        s = i.zoom;
      if ("undefined" != typeof window && "" !== f) {
        var p = n(58),
          m = n(28).default;
        n(90);
        var v = n(77),
          h = n(26).default,
          _ = p.Map,
          y = p.Marker,
          g = p.Polyline,
          b = p.Popup,
          O = p.TileLayer,
          M = o || u && h(c),
          E = function(e, t) {
            var n = t.latitude,
              r = t.longitude;
            return 1 === e.length ? [e[0].latitude, e[0].longitude] : [n, r]
          }(c, l),
          k = null === s ? void 0 : s;
        return a.default.createElement(_, r({
          bounds: M,
          center: E,
          zoom: k
        }, t.defaultZoomOpts), a.default.createElement(O, {
          attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: f + "/osm_tiles/{z}/{x}/{y}.png"
        }), d.map(function(e) {
          return a.default.createElement(g, {
            key: e.id || "polyline-" + Math.floor(1e3 * Math.random()),
            positions: e.positions,
            color: e.color,
            weight: e.weight,
            dashArray: e["dotted?"] ? "4px 8px" : "none",
            lineCap: e["dotted?"] ? "butt" : "round",
            lineJoin: e["dotted?"] ? "miter" : "round"
          })
        }), c.map(function(e) {
          return a.default.createElement(y, {
            icon: m(e.icon, e.icon_opts),
            key: e.id || "marker-" + Math.floor(1e3 * Math.random()),
            position: [e.latitude, e.longitude],
            ref: function(t) {
              return t && (n = t.leafletElement, r = e.rotation_angle, void n.setRotationAngle(r));
              var n, r
            },
            zIndexOffset: e.z_index,
            keyboard: !1
          }, e.tooltip && a.default.createElement(b, {
            minWidth: 320,
            maxHeight: 175
          }, e.tooltip))
        }), a.default.createElement(v, null))
      }
      return null
    }, u.default)
  },
  478: function(e, t, n) {
    e.exports = n(479)
  },
  479: function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r(n(480)).default()
  },
  480: function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(n(0)),
      a = r(n(46)),
      u = r(n(481));
    t.onLoad = function() {
      ! function() {
        var e = document.getElementById("js-trip-planner-map-data");
        if (e) {
          var t = JSON.parse(e.innerHTML);
          a.default.render(o.default.createElement(u.default, {
            mapData: t
          }), document.getElementById("react-root"))
        }
      }()
    }, t.default = t.onLoad
  },
  481: function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }).apply(this, arguments)
      },
      o = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      },
      a = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = o(n(0)),
      i = a(n(31)),
      l = a(n(26));
    t.onRemove = function(e, t) {
      t({
        type: "REMOVE_MARKER",
        payload: {
          id: e.detail.label
        }
      })
    }, t.onUpdate = function(e, t) {
      var n = e.detail;
      t({
        type: "UPDATE_MARKER",
        payload: {
          marker: {
            icon: "map-pin-" + n.label.toLowerCase(),
            id: n.label,
            latitude: n.latitude,
            longitude: n.longitude,
            rotation_angle: 0,
            tooltip: u.default.createElement("div", null, n.title)
          }
        }
      })
    };
    var c = function(e, t) {
      return e.reduce(function(e, n) {
        return n.id === t ? e : e.concat(n)
      }, [])
    };
    t.reducer = function(e, t) {
      switch (t.type) {
        case "UPDATE_MARKER":
          return {
            markers: c(e.markers, t.payload.marker.id).concat(t.payload.marker)
          };
        case "REMOVE_MARKER":
          return {
            markers: c(e.markers, t.payload.id)
          };
        default:
          throw new Error("unexpected action type: " + t.type)
      }
    };
    t.default = function(e) {
      var n = e.mapData,
        o = u.useReducer(t.reducer, {
          markers: n.markers
        }),
        a = o[0],
        c = o[1];
      u.useEffect(function() {
        var e = function(e) {
            return t.onRemove(e, c)
          },
          n = function(e) {
            return t.onUpdate(e, c)
          };
        return document.addEventListener("trip-plan:remove-marker", e), document.addEventListener("trip-plan:update-marker", n),
          function() {
            document.removeEventListener("trip-plan:remove-marker", e), document.removeEventListener("trip-plan:update-marker", n)
          }
      });
      var d = a.markers.length ? l.default(a.markers) : void 0;
      return u.default.createElement(i.default, {
        bounds: d,
        mapData: r({}, n, {
          markers: a.markers
        })
      })
    }
  }
});
