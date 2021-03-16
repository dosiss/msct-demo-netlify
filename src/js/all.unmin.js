! function(e, t) {
 "use strict";
 "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
  if (!e.document) throw new Error("jQuery requires a window with a document");
  return t(e)
 } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
 "use strict";

 function i(e, t) {
  var i = (t = t || te).createElement("script");
  i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
 }

 function n(e) {
  var t = !!e && "length" in e && e.length,
   i = he.type(e);
  return "function" !== i && !he.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
 }

 function o(e, t) {
  return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
 }

 function r(e, t, i) {
  return he.isFunction(t) ? he.grep(e, function(e, n) {
   return !!t.call(e, n, e) !== i
  }) : t.nodeType ? he.grep(e, function(e) {
   return e === t !== i
  }) : "string" != typeof t ? he.grep(e, function(e) {
   return se.call(t, e) > -1 !== i
  }) : ke.test(t) ? he.filter(t, e, i) : (t = he.filter(t, e), he.grep(e, function(e) {
   return se.call(t, e) > -1 !== i && 1 === e.nodeType
  }))
 }

 function s(e, t) {
  for (;
   (e = e[t]) && 1 !== e.nodeType;);
  return e
 }

 function a(e) {
  var t = {};
  return he.each(e.match(Le) || [], function(e, i) {
   t[i] = !0
  }), t
 }

 function l(e) {
  return e
 }

 function d(e) {
  throw e
 }

 function c(e, t, i, n) {
  var o;
  try {
   e && he.isFunction(o = e.promise) ? o.call(e).done(t).fail(i) : e && he.isFunction(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
  } catch (e) {
   i.apply(void 0, [e])
  }
 }

 function u() {
  te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
 }

 function p() {
  this.expando = he.expando + p.uid++
 }

 function f(e) {
  return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
 }

 function h(e, t, i) {
  var n;
  if (void 0 === i && 1 === e.nodeType)
   if (n = "data-" + t.replace(Pe, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
    try {
     i = f(i)
    } catch (e) {}
    Oe.set(e, t, i)
   } else i = void 0;
  return i
 }

 function g(e, t, i, n) {
  var o, r = 1,
   s = 20,
   a = n ? function() {
    return n.cur()
   } : function() {
    return he.css(e, t, "")
   },
   l = a(),
   d = i && i[3] || (he.cssNumber[t] ? "" : "px"),
   c = (he.cssNumber[t] || "px" !== d && +l) && ze.exec(he.css(e, t));
  if (c && c[3] !== d) {
   d = d || c[3], i = i || [], c = +l || 1;
   do {
    r = r || ".5", c /= r, he.style(e, t, c + d)
   } while (r !== (r = a() / l) && 1 !== r && --s)
  }
  return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = c, n.end = o)), o
 }

 function m(e) {
  var t, i = e.ownerDocument,
   n = e.nodeName,
   o = We[n];
  return o || (t = i.body.appendChild(i.createElement(n)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), We[n] = o, o)
 }

 function v(e, t) {
  for (var i, n, o = [], r = 0, s = e.length; r < s; r++)(n = e[r]).style && (i = n.style.display, t ? ("none" === i && (o[r] = He.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && Fe(n) && (o[r] = m(n))) : "none" !== i && (o[r] = "none", He.set(n, "display", i)));
  for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
  return e
 }

 function y(e, t) {
  var i;
  return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? he.merge([e], i) : i
 }

 function b(e, t) {
  for (var i = 0, n = e.length; i < n; i++) He.set(e[i], "globalEval", !t || He.get(t[i], "globalEval"))
 }

 function w(e, t, i, n, o) {
  for (var r, s, a, l, d, c, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
   if ((r = e[f]) || 0 === r)
    if ("object" === he.type(r)) he.merge(p, r.nodeType ? [r] : r);
    else if (Ye.test(r)) {
   for (s = s || u.appendChild(t.createElement("div")), a = (Ue.exec(r) || ["", ""])[1].toLowerCase(), l = Ve[a] || Ve._default, s.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
   he.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
  } else p.push(t.createTextNode(r));
  for (u.textContent = "", f = 0; r = p[f++];)
   if (n && he.inArray(r, n) > -1) o && o.push(r);
   else if (d = he.contains(r.ownerDocument, r), s = y(u.appendChild(r), "script"), d && b(s), i)
   for (c = 0; r = s[c++];) Xe.test(r.type || "") && i.push(r);
  return u
 }

 function x() {
  return !0
 }

 function T() {
  return !1
 }

 function C() {
  try {
   return te.activeElement
  } catch (e) {}
 }

 function k(e, t, i, n, o, r) {
  var s, a;
  if ("object" == typeof t) {
   "string" != typeof i && (n = n || i, i = void 0);
   for (a in t) k(e, a, i, n, t[a], r);
   return e
  }
  if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = T;
  else if (!o) return e;
  return 1 === r && (s = o, o = function(e) {
   return he().off(e), s.apply(this, arguments)
  }, o.guid = s.guid || (s.guid = he.guid++)), e.each(function() {
   he.event.add(this, t, o, n, i)
  })
 }

 function S(e, t) {
  return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
 }

 function A(e) {
  return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
 }

 function $(e) {
  var t = it.exec(e.type);
  return t ? e.type = t[1] : e.removeAttribute("type"), e
 }

 function E(e, t) {
  var i, n, o, r, s, a, l, d;
  if (1 === t.nodeType) {
   if (He.hasData(e) && (r = He.access(e), s = He.set(t, r), d = r.events)) {
    delete s.handle, s.events = {};
    for (o in d)
     for (i = 0, n = d[o].length; i < n; i++) he.event.add(t, o, d[o][i])
   }
   Oe.hasData(e) && (a = Oe.access(e), l = he.extend({}, a), Oe.set(t, l))
  }
 }

 function L(e, t) {
  var i = t.nodeName.toLowerCase();
  "input" === i && Be.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
 }

 function _(e, t, n, o) {
  t = oe.apply([], t);
  var r, s, a, l, d, c, u = 0,
   p = e.length,
   f = p - 1,
   h = t[0],
   g = he.isFunction(h);
  if (g || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function(i) {
   var r = e.eq(i);
   g && (t[0] = h.call(this, i, r.html())), _(r, t, n, o)
  });
  if (p && (r = w(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
   for (l = (a = he.map(y(r, "script"), A)).length; u < p; u++) d = r, u !== f && (d = he.clone(d, !0, !0), l && he.merge(a, y(d, "script"))), n.call(e[u], d, u);
   if (l)
    for (c = a[a.length - 1].ownerDocument, he.map(a, $), u = 0; u < l; u++) d = a[u], Xe.test(d.type || "") && !He.access(d, "globalEval") && he.contains(c, d) && (d.src ? he._evalUrl && he._evalUrl(d.src) : i(d.textContent.replace(nt, ""), c))
  }
  return e
 }

 function q(e, t, i) {
  for (var n, o = t ? he.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || he.cleanData(y(n)), n.parentNode && (i && he.contains(n.ownerDocument, n) && b(y(n, "script")), n.parentNode.removeChild(n));
  return e
 }

 function j(e, t, i) {
  var n, o, r, s, a = e.style;
  return (i = i || st(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !pe.pixelMarginRight() && rt.test(s) && ot.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
 }

 function D(e, t) {
  return {
   get: function() {
    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
   }
  }
 }

 function H(e) {
  if (e in pt) return e;
  for (var t = e[0].toUpperCase() + e.slice(1), i = ut.length; i--;)
   if ((e = ut[i] + t) in pt) return e
 }

 function O(e) {
  var t = he.cssProps[e];
  return t || (t = he.cssProps[e] = H(e) || e), t
 }

 function N(e, t, i) {
  var n = ze.exec(t);
  return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
 }

 function P(e, t, i, n, o) {
  var r, s = 0;
  for (r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === i && (s += he.css(e, i + Ie[r], !0, o)), n ? ("content" === i && (s -= he.css(e, "padding" + Ie[r], !0, o)), "margin" !== i && (s -= he.css(e, "border" + Ie[r] + "Width", !0, o))) : (s += he.css(e, "padding" + Ie[r], !0, o), "padding" !== i && (s += he.css(e, "border" + Ie[r] + "Width", !0, o)));
  return s
 }

 function M(e, t, i) {
  var n, o = st(e),
   r = j(e, t, o),
   s = "border-box" === he.css(e, "boxSizing", !1, o);
  return rt.test(r) ? r : (n = s && (pe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + P(e, t, i || (s ? "border" : "content"), n, o) + "px")
 }

 function z(e, t, i, n, o) {
  return new z.prototype.init(e, t, i, n, o)
 }

 function I() {
  ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(I) : e.setTimeout(I, he.fx.interval), he.fx.tick())
 }

 function F() {
  return e.setTimeout(function() {
   ft = void 0
  }), ft = he.now()
 }

 function R(e, t) {
  var i, n = 0,
   o = {
    height: e
   };
  for (t = t ? 1 : 0; n < 4; n += 2 - t) i = Ie[n], o["margin" + i] = o["padding" + i] = e;
  return t && (o.opacity = o.width = e), o
 }

 function W(e, t, i) {
  for (var n, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, s = o.length; r < s; r++)
   if (n = o[r].call(i, t, e)) return n
 }

 function B(e, t) {
  var i, n, o, r, s;
  for (i in e)
   if (n = he.camelCase(i), o = t[n], r = e[i], Array.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = he.cssHooks[n]) && "expand" in s) {
    r = s.expand(r), delete e[n];
    for (i in r) i in e || (e[i] = r[i], t[i] = o)
   } else t[n] = o
 }

 function U(e, t, i) {
  var n, o, r = 0,
   s = U.prefilters.length,
   a = he.Deferred().always(function() {
    delete l.elem
   }),
   l = function() {
    if (o) return !1;
    for (var t = ft || F(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), r = 0, s = d.tweens.length; r < s; r++) d.tweens[r].run(n);
    return a.notifyWith(e, [d, n, i]), n < 1 && s ? i : (s || a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d]), !1)
   },
   d = a.promise({
    elem: e,
    props: he.extend({}, t),
    opts: he.extend(!0, {
     specialEasing: {},
     easing: he.easing._default
    }, i),
    originalProperties: t,
    originalOptions: i,
    startTime: ft || F(),
    duration: i.duration,
    tweens: [],
    createTween: function(t, i) {
     var n = he.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
     return d.tweens.push(n), n
    },
    stop: function(t) {
     var i = 0,
      n = t ? d.tweens.length : 0;
     if (o) return this;
     for (o = !0; i < n; i++) d.tweens[i].run(1);
     return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this
    }
   }),
   c = d.props;
  for (B(c, d.opts.specialEasing); r < s; r++)
   if (n = U.prefilters[r].call(d, e, c, d.opts)) return he.isFunction(n.stop) && (he._queueHooks(d.elem, d.opts.queue).stop = he.proxy(n.stop, n)), n;
  return he.map(c, W, d), he.isFunction(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), he.fx.timer(he.extend(l, {
   elem: e,
   anim: d,
   queue: d.opts.queue
  })), d
 }

 function X(e) {
  return (e.match(Le) || []).join(" ")
 }

 function V(e) {
  return e.getAttribute && e.getAttribute("class") || ""
 }

 function Y(e, t, i, n) {
  var o;
  if (Array.isArray(t)) he.each(t, function(t, o) {
   i || At.test(e) ? n(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
  });
  else if (i || "object" !== he.type(t)) n(e, t);
  else
   for (o in t) Y(e + "[" + o + "]", t[o], i, n)
 }

 function G(e) {
  return function(t, i) {
   "string" != typeof t && (i = t, t = "*");
   var n, o = 0,
    r = t.toLowerCase().match(Le) || [];
   if (he.isFunction(i))
    for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
  }
 }

 function Q(e, t, i, n) {
  function o(a) {
   var l;
   return r[a] = !0, he.each(e[a] || [], function(e, a) {
    var d = a(t, i, n);
    return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
   }), l
  }
  var r = {},
   s = e === Mt;
  return o(t.dataTypes[0]) || !r["*"] && o("*")
 }

 function Z(e, t) {
  var i, n, o = he.ajaxSettings.flatOptions || {};
  for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
  return n && he.extend(!0, e, n), e
 }

 function K(e, t, i) {
  for (var n, o, r, s, a = e.contents, l = e.dataTypes;
   "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
  if (n)
   for (o in a)
    if (a[o] && a[o].test(n)) {
     l.unshift(o);
     break
    }
  if (l[0] in i) r = l[0];
  else {
   for (o in i) {
    if (!l[0] || e.converters[o + " " + l[0]]) {
     r = o;
     break
    }
    s || (s = o)
   }
   r = r || s
  }
  if (r) return r !== l[0] && l.unshift(r), i[r]
 }

 function J(e, t, i, n) {
  var o, r, s, a, l, d = {},
   c = e.dataTypes.slice();
  if (c[1])
   for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
  for (r = c.shift(); r;)
   if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
    if ("*" === r) r = l;
    else if ("*" !== l && l !== r) {
   if (!(s = d[l + " " + r] || d["* " + r]))
    for (o in d)
     if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
      !0 === s ? s = d[o] : !0 !== d[o] && (r = a[0], c.unshift(a[1]));
      break
     }
   if (!0 !== s)
    if (s && e.throws) t = s(t);
    else try {
     t = s(t)
    } catch (e) {
     return {
      state: "parsererror",
      error: s ? e : "No conversion from " + l + " to " + r
     }
    }
  }
  return {
   state: "success",
   data: t
  }
 }
 var ee = [],
  te = e.document,
  ie = Object.getPrototypeOf,
  ne = ee.slice,
  oe = ee.concat,
  re = ee.push,
  se = ee.indexOf,
  ae = {},
  le = ae.toString,
  de = ae.hasOwnProperty,
  ce = de.toString,
  ue = ce.call(Object),
  pe = {},
  fe = "3.2.1",
  he = function(e, t) {
   return new he.fn.init(e, t)
  },
  ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  me = /^-ms-/,
  ve = /-([a-z])/g,
  ye = function(e, t) {
   return t.toUpperCase()
  };
 he.fn = he.prototype = {
  jquery: fe,
  constructor: he,
  length: 0,
  toArray: function() {
   return ne.call(this)
  },
  get: function(e) {
   return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e]
  },
  pushStack: function(e) {
   var t = he.merge(this.constructor(), e);
   return t.prevObject = this, t
  },
  each: function(e) {
   return he.each(this, e)
  },
  map: function(e) {
   return this.pushStack(he.map(this, function(t, i) {
    return e.call(t, i, t)
   }))
  },
  slice: function() {
   return this.pushStack(ne.apply(this, arguments))
  },
  first: function() {
   return this.eq(0)
  },
  last: function() {
   return this.eq(-1)
  },
  eq: function(e) {
   var t = this.length,
    i = +e + (e < 0 ? t : 0);
   return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
  },
  end: function() {
   return this.prevObject || this.constructor()
  },
  push: re,
  sort: ee.sort,
  splice: ee.splice
 }, he.extend = he.fn.extend = function() {
  var e, t, i, n, o, r, s = arguments[0] || {},
   a = 1,
   l = arguments.length,
   d = !1;
  for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
   if (null != (e = arguments[a]))
    for (t in e) i = s[t], n = e[t], s !== n && (d && n && (he.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, r = i && Array.isArray(i) ? i : []) : r = i && he.isPlainObject(i) ? i : {}, s[t] = he.extend(d, r, n)) : void 0 !== n && (s[t] = n));
  return s
 }, he.extend({
  expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function(e) {
   throw new Error(e)
  },
  noop: function() {},
  isFunction: function(e) {
   return "function" === he.type(e)
  },
  isWindow: function(e) {
   return null != e && e === e.window
  },
  isNumeric: function(e) {
   var t = he.type(e);
   return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  },
  isPlainObject: function(e) {
   var t, i;
   return !(!e || "[object Object]" !== le.call(e) || (t = ie(e)) && ("function" != typeof(i = de.call(t, "constructor") && t.constructor) || ce.call(i) !== ue))
  },
  isEmptyObject: function(e) {
   var t;
   for (t in e) return !1;
   return !0
  },
  type: function(e) {
   return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
  },
  globalEval: function(e) {
   i(e)
  },
  camelCase: function(e) {
   return e.replace(me, "ms-").replace(ve, ye)
  },
  each: function(e, t) {
   var i, o = 0;
   if (n(e))
    for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++);
   else
    for (o in e)
     if (!1 === t.call(e[o], o, e[o])) break;
   return e
  },
  trim: function(e) {
   return null == e ? "" : (e + "").replace(ge, "")
  },
  makeArray: function(e, t) {
   var i = t || [];
   return null != e && (n(Object(e)) ? he.merge(i, "string" == typeof e ? [e] : e) : re.call(i, e)), i
  },
  inArray: function(e, t, i) {
   return null == t ? -1 : se.call(t, e, i)
  },
  merge: function(e, t) {
   for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
   return e.length = o, e
  },
  grep: function(e, t, i) {
   for (var n = [], o = 0, r = e.length, s = !i; o < r; o++) !t(e[o], o) !== s && n.push(e[o]);
   return n
  },
  map: function(e, t, i) {
   var o, r, s = 0,
    a = [];
   if (n(e))
    for (o = e.length; s < o; s++) null != (r = t(e[s], s, i)) && a.push(r);
   else
    for (s in e) null != (r = t(e[s], s, i)) && a.push(r);
   return oe.apply([], a)
  },
  guid: 1,
  proxy: function(e, t) {
   var i, n, o;
   if ("string" == typeof t && (i = e[t], t = e, e = i), he.isFunction(e)) return n = ne.call(arguments, 2), o = function() {
    return e.apply(t || this, n.concat(ne.call(arguments)))
   }, o.guid = e.guid = e.guid || he.guid++, o
  },
  now: Date.now,
  support: pe
 }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
  ae["[object " + t + "]"] = t.toLowerCase()
 });
 var be = function(e) {
  function t(e, t, i, n) {
   var o, r, s, a, l, c, p, f = t && t.ownerDocument,
    h = t ? t.nodeType : 9;
   if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
   if (!n && ((t ? t.ownerDocument || t : z) !== q && _(t), t = t || q, D)) {
    if (11 !== h && (l = ge.exec(e)))
     if (o = l[1]) {
      if (9 === h) {
       if (!(s = t.getElementById(o))) return i;
       if (s.id === o) return i.push(s), i
      } else if (f && (s = f.getElementById(o)) && P(t, s) && s.id === o) return i.push(s), i
     } else {
      if (l[2]) return Q.apply(i, t.getElementsByTagName(e)), i;
      if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(i, t.getElementsByClassName(o)), i
     }
    if (w.qsa && !B[e + " "] && (!H || !H.test(e))) {
     if (1 !== h) f = t, p = e;
     else if ("object" !== t.nodeName.toLowerCase()) {
      for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = M), r = (c = k(e)).length; r--;) c[r] = "#" + a + " " + u(c[r]);
      p = c.join(","), f = me.test(e) && d(t.parentNode) || t
     }
     if (p) try {
      return Q.apply(i, f.querySelectorAll(p)), i
     } catch (e) {} finally {
      a === M && t.removeAttribute("id")
     }
    }
   }
   return A(e.replace(re, "$1"), t, i, n)
  }

  function i() {
   function e(i, n) {
    return t.push(i + " ") > x.cacheLength && delete e[t.shift()], e[i + " "] = n
   }
   var t = [];
   return e
  }

  function n(e) {
   return e[M] = !0, e
  }

  function o(e) {
   var t = q.createElement("fieldset");
   try {
    return !!e(t)
   } catch (e) {
    return !1
   } finally {
    t.parentNode && t.parentNode.removeChild(t), t = null
   }
  }

  function r(e, t) {
   for (var i = e.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = t
  }

  function s(e, t) {
   var i = t && e,
    n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
   if (n) return n;
   if (i)
    for (; i = i.nextSibling;)
     if (i === t) return -1;
   return e ? 1 : -1
  }

  function a(e) {
   return function(t) {
    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
   }
  }

  function l(e) {
   return n(function(t) {
    return t = +t, n(function(i, n) {
     for (var o, r = e([], i.length, t), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
    })
   })
  }

  function d(e) {
   return e && void 0 !== e.getElementsByTagName && e
  }

  function c() {}

  function u(e) {
   for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
   return n
  }

  function p(e, t, i) {
   var n = t.dir,
    o = t.next,
    r = o || n,
    s = i && "parentNode" === r,
    a = F++;
   return t.first ? function(t, i, o) {
    for (; t = t[n];)
     if (1 === t.nodeType || s) return e(t, i, o);
    return !1
   } : function(t, i, l) {
    var d, c, u, p = [I, a];
    if (l) {
     for (; t = t[n];)
      if ((1 === t.nodeType || s) && e(t, i, l)) return !0
    } else
     for (; t = t[n];)
      if (1 === t.nodeType || s)
       if (u = t[M] || (t[M] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[n] || t;
       else {
        if ((d = c[r]) && d[0] === I && d[1] === a) return p[2] = d[2];
        if (c[r] = p, p[2] = e(t, i, l)) return !0
       } return !1
   }
  }

  function f(e) {
   return e.length > 1 ? function(t, i, n) {
    for (var o = e.length; o--;)
     if (!e[o](t, i, n)) return !1;
    return !0
   } : e[0]
  }

  function h(e, i, n) {
   for (var o = 0, r = i.length; o < r; o++) t(e, i[o], n);
   return n
  }

  function g(e, t, i, n, o) {
   for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), d && t.push(a)));
   return s
  }

  function m(e, t, i, o, r, s) {
   return o && !o[M] && (o = m(o)), r && !r[M] && (r = m(r, s)), n(function(n, s, a, l) {
    var d, c, u, p = [],
     f = [],
     m = s.length,
     v = n || h(t || "*", a.nodeType ? [a] : a, []),
     y = !e || !n && t ? v : g(v, p, e, a, l),
     b = i ? r || (n ? e : m || o) ? [] : s : y;
    if (i && i(y, b, a, l), o)
     for (d = g(b, f), o(d, [], a, l), c = d.length; c--;)(u = d[c]) && (b[f[c]] = !(y[f[c]] = u));
    if (n) {
     if (r || e) {
      if (r) {
       for (d = [], c = b.length; c--;)(u = b[c]) && d.push(y[c] = u);
       r(null, b = [], d, l)
      }
      for (c = b.length; c--;)(u = b[c]) && (d = r ? K(n, u) : p[c]) > -1 && (n[d] = !(s[d] = u))
     }
    } else b = g(b === s ? b.splice(m, b.length) : b), r ? r(null, s, b, l) : Q.apply(s, b)
   })
  }

  function v(e) {
   for (var t, i, n, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = p(function(e) {
     return e === t
    }, s, !0), d = p(function(e) {
     return K(t, e) > -1
    }, s, !0), c = [function(e, i, n) {
     var o = !r && (n || i !== $) || ((t = i).nodeType ? l(e, i, n) : d(e, i, n));
     return t = null, o
    }]; a < o; a++)
    if (i = x.relative[e[a].type]) c = [p(f(c), i)];
    else {
     if ((i = x.filter[e[a].type].apply(null, e[a].matches))[M]) {
      for (n = ++a; n < o && !x.relative[e[n].type]; n++);
      return m(a > 1 && f(c), a > 1 && u(e.slice(0, a - 1).concat({
       value: " " === e[a - 2].type ? "*" : ""
      })).replace(re, "$1"), i, a < n && v(e.slice(a, n)), n < o && v(e = e.slice(n)), n < o && u(e))
     }
     c.push(i)
    }
   return f(c)
  }

  function y(e, i) {
   var o = i.length > 0,
    r = e.length > 0,
    s = function(n, s, a, l, d) {
     var c, u, p, f = 0,
      h = "0",
      m = n && [],
      v = [],
      y = $,
      b = n || r && x.find.TAG("*", d),
      w = I += null == y ? 1 : Math.random() || .1,
      T = b.length;
     for (d && ($ = s === q || s || d); h !== T && null != (c = b[h]); h++) {
      if (r && c) {
       for (u = 0, s || c.ownerDocument === q || (_(c), a = !D); p = e[u++];)
        if (p(c, s || q, a)) {
         l.push(c);
         break
        }
       d && (I = w)
      }
      o && ((c = !p && c) && f--, n && m.push(c))
     }
     if (f += h, o && h !== f) {
      for (u = 0; p = i[u++];) p(m, v, s, a);
      if (n) {
       if (f > 0)
        for (; h--;) m[h] || v[h] || (v[h] = Y.call(l));
       v = g(v)
      }
      Q.apply(l, v), d && !n && v.length > 0 && f + i.length > 1 && t.uniqueSort(l)
     }
     return d && (I = w, $ = y), m
    };
   return o ? n(s) : s
  }
  var b, w, x, T, C, k, S, A, $, E, L, _, q, j, D, H, O, N, P, M = "sizzle" + 1 * new Date,
   z = e.document,
   I = 0,
   F = 0,
   R = i(),
   W = i(),
   B = i(),
   U = function(e, t) {
    return e === t && (L = !0), 0
   },
   X = {}.hasOwnProperty,
   V = [],
   Y = V.pop,
   G = V.push,
   Q = V.push,
   Z = V.slice,
   K = function(e, t) {
    for (var i = 0, n = e.length; i < n; i++)
     if (e[i] === t) return i;
    return -1
   },
   J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
   ee = "[\\x20\\t\\r\\n\\f]",
   te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
   ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
   ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
   oe = new RegExp(ee + "+", "g"),
   re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
   se = new RegExp("^" + ee + "*," + ee + "*"),
   ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
   le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
   de = new RegExp(ne),
   ce = new RegExp("^" + te + "$"),
   ue = {
    ID: new RegExp("^#(" + te + ")"),
    CLASS: new RegExp("^\\.(" + te + ")"),
    TAG: new RegExp("^(" + te + "|[*])"),
    ATTR: new RegExp("^" + ie),
    PSEUDO: new RegExp("^" + ne),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + J + ")$", "i"),
    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
   },
   pe = /^(?:input|select|textarea|button)$/i,
   fe = /^h\d$/i,
   he = /^[^{]+\{\s*\[native \w/,
   ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
   me = /[+~]/,
   ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
   ye = function(e, t, i) {
    var n = "0x" + t - 65536;
    return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
   },
   be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
   we = function(e, t) {
    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
   },
   xe = function() {
    _()
   },
   Te = p(function(e) {
    return !0 === e.disabled && ("form" in e || "label" in e)
   }, {
    dir: "parentNode",
    next: "legend"
   });
  try {
   Q.apply(V = Z.call(z.childNodes), z.childNodes), V[z.childNodes.length].nodeType
  } catch (e) {
   Q = {
    apply: V.length ? function(e, t) {
     G.apply(e, Z.call(t))
    } : function(e, t) {
     for (var i = e.length, n = 0; e[i++] = t[n++];);
     e.length = i - 1
    }
   }
  }
  w = t.support = {}, C = t.isXML = function(e) {
   var t = e && (e.ownerDocument || e).documentElement;
   return !!t && "HTML" !== t.nodeName
  }, _ = t.setDocument = function(e) {
   var t, i, n = e ? e.ownerDocument || e : z;
   return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, j = q.documentElement, D = !C(q), z !== q && (i = q.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)), w.attributes = o(function(e) {
    return e.className = "i", !e.getAttribute("className")
   }), w.getElementsByTagName = o(function(e) {
    return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
   }), w.getElementsByClassName = he.test(q.getElementsByClassName), w.getById = o(function(e) {
    return j.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length
   }), w.getById ? (x.filter.ID = function(e) {
    var t = e.replace(ve, ye);
    return function(e) {
     return e.getAttribute("id") === t
    }
   }, x.find.ID = function(e, t) {
    if (void 0 !== t.getElementById && D) {
     var i = t.getElementById(e);
     return i ? [i] : []
    }
   }) : (x.filter.ID = function(e) {
    var t = e.replace(ve, ye);
    return function(e) {
     var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
     return i && i.value === t
    }
   }, x.find.ID = function(e, t) {
    if (void 0 !== t.getElementById && D) {
     var i, n, o, r = t.getElementById(e);
     if (r) {
      if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
      for (o = t.getElementsByName(e), n = 0; r = o[n++];)
       if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
     }
     return []
    }
   }), x.find.TAG = w.getElementsByTagName ? function(e, t) {
    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
   } : function(e, t) {
    var i, n = [],
     o = 0,
     r = t.getElementsByTagName(e);
    if ("*" === e) {
     for (; i = r[o++];) 1 === i.nodeType && n.push(i);
     return n
    }
    return r
   }, x.find.CLASS = w.getElementsByClassName && function(e, t) {
    if (void 0 !== t.getElementsByClassName && D) return t.getElementsByClassName(e)
   }, O = [], H = [], (w.qsa = he.test(q.querySelectorAll)) && (o(function(e) {
    j.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]")
   }), o(function(e) {
    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
    var t = q.createElement("input");
    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), j.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
   })), (w.matchesSelector = he.test(N = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
    w.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), O.push("!=", ne)
   }), H = H.length && new RegExp(H.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(j.compareDocumentPosition), P = t || he.test(j.contains) ? function(e, t) {
    var i = 9 === e.nodeType ? e.documentElement : e,
     n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
   } : function(e, t) {
    if (t)
     for (; t = t.parentNode;)
      if (t === e) return !0;
    return !1
   }, U = t ? function(e, t) {
    if (e === t) return L = !0, 0;
    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === q || e.ownerDocument === z && P(z, e) ? -1 : t === q || t.ownerDocument === z && P(z, t) ? 1 : E ? K(E, e) - K(E, t) : 0 : 4 & i ? -1 : 1)
   } : function(e, t) {
    if (e === t) return L = !0, 0;
    var i, n = 0,
     o = e.parentNode,
     r = t.parentNode,
     a = [e],
     l = [t];
    if (!o || !r) return e === q ? -1 : t === q ? 1 : o ? -1 : r ? 1 : E ? K(E, e) - K(E, t) : 0;
    if (o === r) return s(e, t);
    for (i = e; i = i.parentNode;) a.unshift(i);
    for (i = t; i = i.parentNode;) l.unshift(i);
    for (; a[n] === l[n];) n++;
    return n ? s(a[n], l[n]) : a[n] === z ? -1 : l[n] === z ? 1 : 0
   }, q) : q
  }, t.matches = function(e, i) {
   return t(e, null, null, i)
  }, t.matchesSelector = function(e, i) {
   if ((e.ownerDocument || e) !== q && _(e), i = i.replace(le, "='$1']"), w.matchesSelector && D && !B[i + " "] && (!O || !O.test(i)) && (!H || !H.test(i))) try {
    var n = N.call(e, i);
    if (n || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
   } catch (e) {}
   return t(i, q, null, [e]).length > 0
  }, t.contains = function(e, t) {
   return (e.ownerDocument || e) !== q && _(e), P(e, t)
  }, t.attr = function(e, t) {
   (e.ownerDocument || e) !== q && _(e);
   var i = x.attrHandle[t.toLowerCase()],
    n = i && X.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !D) : void 0;
   return void 0 !== n ? n : w.attributes || !D ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
  }, t.escape = function(e) {
   return (e + "").replace(be, we)
  }, t.error = function(e) {
   throw new Error("Syntax error, unrecognized expression: " + e)
  }, t.uniqueSort = function(e) {
   var t, i = [],
    n = 0,
    o = 0;
   if (L = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(U), L) {
    for (; t = e[o++];) t === e[o] && (n = i.push(o));
    for (; n--;) e.splice(i[n], 1)
   }
   return E = null, e
  }, T = t.getText = function(e) {
   var t, i = "",
    n = 0,
    o = e.nodeType;
   if (o) {
    if (1 === o || 9 === o || 11 === o) {
     if ("string" == typeof e.textContent) return e.textContent;
     for (e = e.firstChild; e; e = e.nextSibling) i += T(e)
    } else if (3 === o || 4 === o) return e.nodeValue
   } else
    for (; t = e[n++];) i += T(t);
   return i
  }, (x = t.selectors = {
   cacheLength: 50,
   createPseudo: n,
   match: ue,
   attrHandle: {},
   find: {},
   relative: {
    ">": {
     dir: "parentNode",
     first: !0
    },
    " ": {
     dir: "parentNode"
    },
    "+": {
     dir: "previousSibling",
     first: !0
    },
    "~": {
     dir: "previousSibling"
    }
   },
   preFilter: {
    ATTR: function(e) {
     return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
    },
    CHILD: function(e) {
     return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
    },
    PSEUDO: function(e) {
     var t, i = !e[6] && e[2];
     return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && de.test(i) && (t = k(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
    }
   },
   filter: {
    TAG: function(e) {
     var t = e.replace(ve, ye).toLowerCase();
     return "*" === e ? function() {
      return !0
     } : function(e) {
      return e.nodeName && e.nodeName.toLowerCase() === t
     }
    },
    CLASS: function(e) {
     var t = R[e + " "];
     return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function(e) {
      return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
     })
    },
    ATTR: function(e, i, n) {
     return function(o) {
      var r = t.attr(o, e);
      return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(oe, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
     }
    },
    CHILD: function(e, t, i, n, o) {
     var r = "nth" !== e.slice(0, 3),
      s = "last" !== e.slice(-4),
      a = "of-type" === t;
     return 1 === n && 0 === o ? function(e) {
      return !!e.parentNode
     } : function(t, i, l) {
      var d, c, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
       m = t.parentNode,
       v = a && t.nodeName.toLowerCase(),
       y = !l && !a,
       b = !1;
      if (m) {
       if (r) {
        for (; g;) {
         for (p = t; p = p[g];)
          if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
         h = g = "only" === e && !h && "nextSibling"
        }
        return !0
       }
       if (h = [s ? m.firstChild : m.lastChild], s && y) {
        for (b = (f = (d = (c = (u = (p = m)[M] || (p[M] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === I && d[1]) && d[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
         if (1 === p.nodeType && ++b && p === t) {
          c[e] = [I, f, b];
          break
         }
       } else if (y && (p = t, u = p[M] || (p[M] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), d = c[e] || [], f = d[0] === I && d[1], b = f), !1 === b)
        for (;
         (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (u = p[M] || (p[M] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), c[e] = [I, b]), p !== t)););
       return (b -= o) === n || b % n == 0 && b / n >= 0
      }
     }
    },
    PSEUDO: function(e, i) {
     var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
     return r[M] ? r(i) : r.length > 1 ? (o = [e, e, "", i], x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
      for (var n, o = r(e, i), s = o.length; s--;) n = K(e, o[s]), e[n] = !(t[n] = o[s])
     }) : function(e) {
      return r(e, 0, o)
     }) : r
    }
   },
   pseudos: {
    not: n(function(e) {
     var t = [],
      i = [],
      o = S(e.replace(re, "$1"));
     return o[M] ? n(function(e, t, i, n) {
      for (var r, s = o(e, null, n, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
     }) : function(e, n, r) {
      return t[0] = e, o(t, null, r, i), t[0] = null, !i.pop()
     }
    }),
    has: n(function(e) {
     return function(i) {
      return t(e, i).length > 0
     }
    }),
    contains: n(function(e) {
     return e = e.replace(ve, ye),
      function(t) {
       return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
      }
    }),
    lang: n(function(e) {
     return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
      function(t) {
       var i;
       do {
        if (i = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
       } while ((t = t.parentNode) && 1 === t.nodeType);
       return !1
      }
    }),
    target: function(t) {
     var i = e.location && e.location.hash;
     return i && i.slice(1) === t.id
    },
    root: function(e) {
     return e === j
    },
    focus: function(e) {
     return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
    },
    enabled: a(!1),
    disabled: a(!0),
    checked: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && !!e.checked || "option" === t && !!e.selected
    },
    selected: function(e) {
     return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
    },
    empty: function(e) {
     for (e = e.firstChild; e; e = e.nextSibling)
      if (e.nodeType < 6) return !1;
     return !0
    },
    parent: function(e) {
     return !x.pseudos.empty(e)
    },
    header: function(e) {
     return fe.test(e.nodeName)
    },
    input: function(e) {
     return pe.test(e.nodeName)
    },
    button: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && "button" === e.type || "button" === t
    },
    text: function(e) {
     var t;
     return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
    },
    first: l(function() {
     return [0]
    }),
    last: l(function(e, t) {
     return [t - 1]
    }),
    eq: l(function(e, t, i) {
     return [i < 0 ? i + t : i]
    }),
    even: l(function(e, t) {
     for (var i = 0; i < t; i += 2) e.push(i);
     return e
    }),
    odd: l(function(e, t) {
     for (var i = 1; i < t; i += 2) e.push(i);
     return e
    }),
    lt: l(function(e, t, i) {
     for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
     return e
    }),
    gt: l(function(e, t, i) {
     for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
     return e
    })
   }
  }).pseudos.nth = x.pseudos.eq;
  for (b in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
   }) x.pseudos[b] = function(e) {
   return function(t) {
    return "input" === t.nodeName.toLowerCase() && t.type === e
   }
  }(b);
  for (b in {
    submit: !0,
    reset: !0
   }) x.pseudos[b] = function(e) {
   return function(t) {
    var i = t.nodeName.toLowerCase();
    return ("input" === i || "button" === i) && t.type === e
   }
  }(b);
  return c.prototype = x.filters = x.pseudos, x.setFilters = new c, k = t.tokenize = function(e, i) {
   var n, o, r, s, a, l, d, c = W[e + " "];
   if (c) return i ? 0 : c.slice(0);
   for (a = e, l = [], d = x.preFilter; a;) {
    n && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ae.exec(a)) && (n = o.shift(), r.push({
     value: n,
     type: o[0].replace(re, " ")
    }), a = a.slice(n.length));
    for (s in x.filter) !(o = ue[s].exec(a)) || d[s] && !(o = d[s](o)) || (n = o.shift(), r.push({
     value: n,
     type: s,
     matches: o
    }), a = a.slice(n.length));
    if (!n) break
   }
   return i ? a.length : a ? t.error(e) : W(e, l).slice(0)
  }, S = t.compile = function(e, t) {
   var i, n = [],
    o = [],
    r = B[e + " "];
   if (!r) {
    for (t || (t = k(e)), i = t.length; i--;)(r = v(t[i]))[M] ? n.push(r) : o.push(r);
    (r = B(e, y(o, n))).selector = e
   }
   return r
  }, A = t.select = function(e, t, i, n) {
   var o, r, s, a, l, c = "function" == typeof e && e,
    p = !n && k(e = c.selector || e);
   if (i = i || [], 1 === p.length) {
    if ((r = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && D && x.relative[r[1].type]) {
     if (!(t = (x.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return i;
     c && (t = t.parentNode), e = e.slice(r.shift().value.length)
    }
    for (o = ue.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
     if ((l = x.find[a]) && (n = l(s.matches[0].replace(ve, ye), me.test(r[0].type) && d(t.parentNode) || t))) {
      if (r.splice(o, 1), !(e = n.length && u(r))) return Q.apply(i, n), i;
      break
     }
   }
   return (c || S(e, p))(n, t, !D, i, !t || me.test(e) && d(t.parentNode) || t), i
  }, w.sortStable = M.split("").sort(U).join("") === M, w.detectDuplicates = !!L, _(), w.sortDetached = o(function(e) {
   return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
  }), o(function(e) {
   return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
  }) || r("type|href|height|width", function(e, t, i) {
   if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
  }), w.attributes && o(function(e) {
   return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
  }) || r("value", function(e, t, i) {
   if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
  }), o(function(e) {
   return null == e.getAttribute("disabled")
  }) || r(J, function(e, t, i) {
   var n;
   if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
  }), t
 }(e);
 he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
 var we = function(e, t, i) {
   for (var n = [], o = void 0 !== i;
    (e = e[t]) && 9 !== e.nodeType;)
    if (1 === e.nodeType) {
     if (o && he(e).is(i)) break;
     n.push(e)
    }
   return n
  },
  xe = function(e, t) {
   for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
   return i
  },
  Te = he.expr.match.needsContext,
  Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
  ke = /^.[^:#\[\.,]*$/;
 he.filter = function(e, t, i) {
  var n = t[0];
  return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? he.find.matchesSelector(n, e) ? [n] : [] : he.find.matches(e, he.grep(t, function(e) {
   return 1 === e.nodeType
  }))
 }, he.fn.extend({
  find: function(e) {
   var t, i, n = this.length,
    o = this;
   if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
    for (t = 0; t < n; t++)
     if (he.contains(o[t], this)) return !0
   }));
   for (i = this.pushStack([]), t = 0; t < n; t++) he.find(e, o[t], i);
   return n > 1 ? he.uniqueSort(i) : i
  },
  filter: function(e) {
   return this.pushStack(r(this, e || [], !1))
  },
  not: function(e) {
   return this.pushStack(r(this, e || [], !0))
  },
  is: function(e) {
   return !!r(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
  }
 });
 var Se, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
 (he.fn.init = function(e, t, i) {
  var n, o;
  if (!e) return this;
  if (i = i || Se, "string" == typeof e) {
   if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
   if (n[1]) {
    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(n[1]) && he.isPlainObject(t))
     for (n in t) he.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
    return this
   }
   return (o = te.getElementById(n[2])) && (this[0] = o, this.length = 1), this
  }
  return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(he) : he.makeArray(e, this)
 }).prototype = he.fn, Se = he(te);
 var $e = /^(?:parents|prev(?:Until|All))/,
  Ee = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };
 he.fn.extend({
  has: function(e) {
   var t = he(e, this),
    i = t.length;
   return this.filter(function() {
    for (var e = 0; e < i; e++)
     if (he.contains(this, t[e])) return !0
   })
  },
  closest: function(e, t) {
   var i, n = 0,
    o = this.length,
    r = [],
    s = "string" != typeof e && he(e);
   if (!Te.test(e))
    for (; n < o; n++)
     for (i = this[n]; i && i !== t; i = i.parentNode)
      if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && he.find.matchesSelector(i, e))) {
       r.push(i);
       break
      }
   return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
  },
  index: function(e) {
   return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  },
  add: function(e, t) {
   return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
  },
  addBack: function(e) {
   return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }
 }), he.each({
  parent: function(e) {
   var t = e.parentNode;
   return t && 11 !== t.nodeType ? t : null
  },
  parents: function(e) {
   return we(e, "parentNode")
  },
  parentsUntil: function(e, t, i) {
   return we(e, "parentNode", i)
  },
  next: function(e) {
   return s(e, "nextSibling")
  },
  prev: function(e) {
   return s(e, "previousSibling")
  },
  nextAll: function(e) {
   return we(e, "nextSibling")
  },
  prevAll: function(e) {
   return we(e, "previousSibling")
  },
  nextUntil: function(e, t, i) {
   return we(e, "nextSibling", i)
  },
  prevUntil: function(e, t, i) {
   return we(e, "previousSibling", i)
  },
  siblings: function(e) {
   return xe((e.parentNode || {}).firstChild, e)
  },
  children: function(e) {
   return xe(e.firstChild)
  },
  contents: function(e) {
   return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
  }
 }, function(e, t) {
  he.fn[e] = function(i, n) {
   var o = he.map(this, t, i);
   return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = he.filter(n, o)), this.length > 1 && (Ee[e] || he.uniqueSort(o), $e.test(e) && o.reverse()), this.pushStack(o)
  }
 });
 var Le = /[^\x20\t\r\n\f]+/g;
 he.Callbacks = function(e) {
  e = "string" == typeof e ? a(e) : he.extend({}, e);
  var t, i, n, o, r = [],
   s = [],
   l = -1,
   d = function() {
    for (o = o || e.once, n = t = !0; s.length; l = -1)
     for (i = s.shift(); ++l < r.length;) !1 === r[l].apply(i[0], i[1]) && e.stopOnFalse && (l = r.length, i = !1);
    e.memory || (i = !1), t = !1, o && (r = i ? [] : "")
   },
   c = {
    add: function() {
     return r && (i && !t && (l = r.length - 1, s.push(i)), function t(i) {
      he.each(i, function(i, n) {
       he.isFunction(n) ? e.unique && c.has(n) || r.push(n) : n && n.length && "string" !== he.type(n) && t(n)
      })
     }(arguments), i && !t && d()), this
    },
    remove: function() {
     return he.each(arguments, function(e, t) {
      for (var i;
       (i = he.inArray(t, r, i)) > -1;) r.splice(i, 1), i <= l && l--
     }), this
    },
    has: function(e) {
     return e ? he.inArray(e, r) > -1 : r.length > 0
    },
    empty: function() {
     return r && (r = []), this
    },
    disable: function() {
     return o = s = [], r = i = "", this
    },
    disabled: function() {
     return !r
    },
    lock: function() {
     return o = s = [], i || t || (r = i = ""), this
    },
    locked: function() {
     return !!o
    },
    fireWith: function(e, i) {
     return o || (i = i || [], i = [e, i.slice ? i.slice() : i], s.push(i), t || d()), this
    },
    fire: function() {
     return c.fireWith(this, arguments), this
    },
    fired: function() {
     return !!n
    }
   };
  return c
 }, he.extend({
  Deferred: function(t) {
   var i = [
     ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
     ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
     ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
    ],
    n = "pending",
    o = {
     state: function() {
      return n
     },
     always: function() {
      return r.done(arguments).fail(arguments), this
     },
     catch: function(e) {
      return o.then(null, e)
     },
     pipe: function() {
      var e = arguments;
      return he.Deferred(function(t) {
       he.each(i, function(i, n) {
        var o = he.isFunction(e[n[4]]) && e[n[4]];
        r[n[1]](function() {
         var e = o && o.apply(this, arguments);
         e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, o ? [e] : arguments)
        })
       }), e = null
      }).promise()
     },
     then: function(t, n, o) {
      function r(t, i, n, o) {
       return function() {
        var a = this,
         c = arguments,
         u = function() {
          var e, u;
          if (!(t < s)) {
           if ((e = n.apply(a, c)) === i.promise()) throw new TypeError("Thenable self-resolution");
           u = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(u) ? o ? u.call(e, r(s, i, l, o), r(s, i, d, o)) : (s++, u.call(e, r(s, i, l, o), r(s, i, d, o), r(s, i, l, i.notifyWith))) : (n !== l && (a = void 0, c = [e]), (o || i.resolveWith)(a, c))
          }
         },
         p = o ? u : function() {
          try {
           u()
          } catch (e) {
           he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (n !== d && (a = void 0, c = [e]), i.rejectWith(a, c))
          }
         };
        t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
       }
      }
      var s = 0;
      return he.Deferred(function(e) {
       i[0][3].add(r(0, e, he.isFunction(o) ? o : l, e.notifyWith)), i[1][3].add(r(0, e, he.isFunction(t) ? t : l)), i[2][3].add(r(0, e, he.isFunction(n) ? n : d))
      }).promise()
     },
     promise: function(e) {
      return null != e ? he.extend(e, o) : o
     }
    },
    r = {};
   return he.each(i, function(e, t) {
    var s = t[2],
     a = t[5];
    o[t[1]] = s.add, a && s.add(function() {
     n = a
    }, i[3 - e][2].disable, i[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
     return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
    }, r[t[0] + "With"] = s.fireWith
   }), o.promise(r), t && t.call(r, r), r
  },
  when: function(e) {
   var t = arguments.length,
    i = t,
    n = Array(i),
    o = ne.call(arguments),
    r = he.Deferred(),
    s = function(e) {
     return function(i) {
      n[e] = this, o[e] = arguments.length > 1 ? ne.call(arguments) : i, --t || r.resolveWith(n, o)
     }
    };
   if (t <= 1 && (c(e, r.done(s(i)).resolve, r.reject, !t), "pending" === r.state() || he.isFunction(o[i] && o[i].then))) return r.then();
   for (; i--;) c(o[i], s(i), r.reject);
   return r.promise()
  }
 });
 var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
 he.Deferred.exceptionHook = function(t, i) {
  e.console && e.console.warn && t && _e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
 }, he.readyException = function(t) {
  e.setTimeout(function() {
   throw t
  })
 };
 var qe = he.Deferred();
 he.fn.ready = function(e) {
  return qe.then(e).catch(function(e) {
   he.readyException(e)
  }), this
 }, he.extend({
  isReady: !1,
  readyWait: 1,
  ready: function(e) {
   (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
  }
 }), he.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
 var je = function(e, t, i, n, o, r, s) {
   var a = 0,
    l = e.length,
    d = null == i;
   if ("object" === he.type(i)) {
    o = !0;
    for (a in i) je(e, t, a, i[a], !0, r, s)
   } else if (void 0 !== n && (o = !0, he.isFunction(n) || (s = !0), d && (s ? (t.call(e, n), t = null) : (d = t, t = function(e, t, i) {
     return d.call(he(e), i)
    })), t))
    for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
   return o ? e : d ? t.call(e) : l ? t(e[0], i) : r
  },
  De = function(e) {
   return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
 p.uid = 1, p.prototype = {
  cache: function(e) {
   var t = e[this.expando];
   return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
    value: t,
    configurable: !0
   }))), t
  },
  set: function(e, t, i) {
   var n, o = this.cache(e);
   if ("string" == typeof t) o[he.camelCase(t)] = i;
   else
    for (n in t) o[he.camelCase(n)] = t[n];
   return o
  },
  get: function(e, t) {
   return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
  },
  access: function(e, t, i) {
   return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
  },
  remove: function(e, t) {
   var i, n = e[this.expando];
   if (void 0 !== n) {
    if (void 0 !== t) {
     Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in n ? [t] : t.match(Le) || []), i = t.length;
     for (; i--;) delete n[t[i]]
    }(void 0 === t || he.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
   }
  },
  hasData: function(e) {
   var t = e[this.expando];
   return void 0 !== t && !he.isEmptyObject(t)
  }
 };
 var He = new p,
  Oe = new p,
  Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Pe = /[A-Z]/g;
 he.extend({
  hasData: function(e) {
   return Oe.hasData(e) || He.hasData(e)
  },
  data: function(e, t, i) {
   return Oe.access(e, t, i)
  },
  removeData: function(e, t) {
   Oe.remove(e, t)
  },
  _data: function(e, t, i) {
   return He.access(e, t, i)
  },
  _removeData: function(e, t) {
   He.remove(e, t)
  }
 }), he.fn.extend({
  data: function(e, t) {
   var i, n, o, r = this[0],
    s = r && r.attributes;
   if (void 0 === e) {
    if (this.length && (o = Oe.get(r), 1 === r.nodeType && !He.get(r, "hasDataAttrs"))) {
     for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = he.camelCase(n.slice(5)), h(r, n, o[n]));
     He.set(r, "hasDataAttrs", !0)
    }
    return o
   }
   return "object" == typeof e ? this.each(function() {
    Oe.set(this, e)
   }) : je(this, function(t) {
    var i;
    if (r && void 0 === t) {
     if (void 0 !== (i = Oe.get(r, e))) return i;
     if (void 0 !== (i = h(r, e))) return i
    } else this.each(function() {
     Oe.set(this, e, t)
    })
   }, null, t, arguments.length > 1, null, !0)
  },
  removeData: function(e) {
   return this.each(function() {
    Oe.remove(this, e)
   })
  }
 }), he.extend({
  queue: function(e, t, i) {
   var n;
   if (e) return t = (t || "fx") + "queue", n = He.get(e, t), i && (!n || Array.isArray(i) ? n = He.access(e, t, he.makeArray(i)) : n.push(i)), n || []
  },
  dequeue: function(e, t) {
   t = t || "fx";
   var i = he.queue(e, t),
    n = i.length,
    o = i.shift(),
    r = he._queueHooks(e, t);
   "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, function() {
    he.dequeue(e, t)
   }, r)), !n && r && r.empty.fire()
  },
  _queueHooks: function(e, t) {
   var i = t + "queueHooks";
   return He.get(e, i) || He.access(e, i, {
    empty: he.Callbacks("once memory").add(function() {
     He.remove(e, [t + "queue", i])
    })
   })
  }
 }), he.fn.extend({
  queue: function(e, t) {
   var i = 2;
   return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
    var i = he.queue(this, e, t);
    he._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && he.dequeue(this, e)
   })
  },
  dequeue: function(e) {
   return this.each(function() {
    he.dequeue(this, e)
   })
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", [])
  },
  promise: function(e, t) {
   var i, n = 1,
    o = he.Deferred(),
    r = this,
    s = this.length,
    a = function() {
     --n || o.resolveWith(r, [r])
    };
   for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = He.get(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
   return a(), o.promise(t)
  }
 });
 var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  ze = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
  Ie = ["Top", "Right", "Bottom", "Left"],
  Fe = function(e, t) {
   return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
  },
  Re = function(e, t, i, n) {
   var o, r, s = {};
   for (r in t) s[r] = e.style[r], e.style[r] = t[r];
   o = i.apply(e, n || []);
   for (r in t) e.style[r] = s[r];
   return o
  },
  We = {};
 he.fn.extend({
  show: function() {
   return v(this, !0)
  },
  hide: function() {
   return v(this)
  },
  toggle: function(e) {
   return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
    Fe(this) ? he(this).show() : he(this).hide()
   })
  }
 });
 var Be = /^(?:checkbox|radio)$/i,
  Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
  Xe = /^$|\/(?:java|ecma)script/i,
  Ve = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   thead: [1, "<table>", "</table>"],
   col: [2, "<table><colgroup>", "</colgroup></table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: [0, "", ""]
  };
 Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
 var Ye = /<|&#?\w+;/;
 ! function() {
  var e = te.createDocumentFragment().appendChild(te.createElement("div")),
   t = te.createElement("input");
  t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
 }();
 var Ge = te.documentElement,
  Qe = /^key/,
  Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Ke = /^([^.]*)(?:\.(.+)|)/;
 he.event = {
  global: {},
  add: function(e, t, i, n, o) {
   var r, s, a, l, d, c, u, p, f, h, g, m = He.get(e);
   if (m)
    for (i.handler && (r = i, i = r.handler, o = r.selector), o && he.find.matchesSelector(Ge, o), i.guid || (i.guid = he.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
      return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
     }), d = (t = (t || "").match(Le) || [""]).length; d--;) a = Ke.exec(t[d]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (u = he.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = he.event.special[f] || {}, c = he.extend({
     type: f,
     origType: g,
     data: n,
     handler: i,
     guid: i.guid,
     selector: o,
     needsContext: o && he.expr.match.needsContext.test(o),
     namespace: h.join(".")
    }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[f] = !0)
  },
  remove: function(e, t, i, n, o) {
   var r, s, a, l, d, c, u, p, f, h, g, m = He.hasData(e) && He.get(e);
   if (m && (l = m.events)) {
    for (d = (t = (t || "").match(Le) || [""]).length; d--;)
     if (a = Ke.exec(t[d]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
      for (u = he.event.special[f] || {}, p = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
      s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || he.removeEvent(e, f, m.handle), delete l[f])
     } else
      for (f in l) he.event.remove(e, f + t[d], i, n, !0);
    he.isEmptyObject(l) && He.remove(e, "handle events")
   }
  },
  dispatch: function(e) {
   var t, i, n, o, r, s, a = he.event.fix(e),
    l = new Array(arguments.length),
    d = (He.get(this, "events") || {})[a.type] || [],
    c = he.event.special[a.type] || {};
   for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
   if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
    for (s = he.event.handlers.call(this, a, d), t = 0;
     (o = s[t++]) && !a.isPropagationStopped();)
     for (a.currentTarget = o.elem, i = 0;
      (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (n = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
    return c.postDispatch && c.postDispatch.call(this, a), a.result
   }
  },
  handlers: function(e, t) {
   var i, n, o, r, s, a = [],
    l = t.delegateCount,
    d = e.target;
   if (l && d.nodeType && !("click" === e.type && e.button >= 1))
    for (; d !== this; d = d.parentNode || this)
     if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
      for (r = [], s = {}, i = 0; i < l; i++) n = t[i], o = n.selector + " ", void 0 === s[o] && (s[o] = n.needsContext ? he(o, this).index(d) > -1 : he.find(o, this, null, [d]).length), s[o] && r.push(n);
      r.length && a.push({
       elem: d,
       handlers: r
      })
     }
   return d = this, l < t.length && a.push({
    elem: d,
    handlers: t.slice(l)
   }), a
  },
  addProp: function(e, t) {
   Object.defineProperty(he.Event.prototype, e, {
    enumerable: !0,
    configurable: !0,
    get: he.isFunction(t) ? function() {
     if (this.originalEvent) return t(this.originalEvent)
    } : function() {
     if (this.originalEvent) return this.originalEvent[e]
    },
    set: function(t) {
     Object.defineProperty(this, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
     })
    }
   })
  },
  fix: function(e) {
   return e[he.expando] ? e : new he.Event(e)
  },
  special: {
   load: {
    noBubble: !0
   },
   focus: {
    trigger: function() {
     if (this !== C() && this.focus) return this.focus(), !1
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function() {
     if (this === C() && this.blur) return this.blur(), !1
    },
    delegateType: "focusout"
   },
   click: {
    trigger: function() {
     if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
    },
    _default: function(e) {
     return o(e.target, "a")
    }
   },
   beforeunload: {
    postDispatch: function(e) {
     void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
    }
   }
  }
 }, he.removeEvent = function(e, t, i) {
  e.removeEventListener && e.removeEventListener(t, i)
 }, he.Event = function(e, t) {
  return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
 }, he.Event.prototype = {
  constructor: he.Event,
  isDefaultPrevented: T,
  isPropagationStopped: T,
  isImmediatePropagationStopped: T,
  isSimulated: !1,
  preventDefault: function() {
   var e = this.originalEvent;
   this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
  },
  stopPropagation: function() {
   var e = this.originalEvent;
   this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
  },
  stopImmediatePropagation: function() {
   var e = this.originalEvent;
   this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
  }
 }, he.each({
  altKey: !0,
  bubbles: !0,
  cancelable: !0,
  changedTouches: !0,
  ctrlKey: !0,
  detail: !0,
  eventPhase: !0,
  metaKey: !0,
  pageX: !0,
  pageY: !0,
  shiftKey: !0,
  view: !0,
  char: !0,
  charCode: !0,
  key: !0,
  keyCode: !0,
  button: !0,
  buttons: !0,
  clientX: !0,
  clientY: !0,
  offsetX: !0,
  offsetY: !0,
  pointerId: !0,
  pointerType: !0,
  screenX: !0,
  screenY: !0,
  targetTouches: !0,
  toElement: !0,
  touches: !0,
  which: function(e) {
   var t = e.button;
   return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
  }
 }, he.event.addProp), he.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, function(e, t) {
  he.event.special[e] = {
   delegateType: t,
   bindType: t,
   handle: function(e) {
    var i, n = this,
     o = e.relatedTarget,
     r = e.handleObj;
    return o && (o === n || he.contains(n, o)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
   }
  }
 }), he.fn.extend({
  on: function(e, t, i, n) {
   return k(this, e, t, i, n)
  },
  one: function(e, t, i, n) {
   return k(this, e, t, i, n, 1)
  },
  off: function(e, t, i) {
   var n, o;
   if (e && e.preventDefault && e.handleObj) return n = e.handleObj, he(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
   if ("object" == typeof e) {
    for (o in e) this.off(o, t, e[o]);
    return this
   }
   return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = T), this.each(function() {
    he.event.remove(this, e, i, t)
   })
  }
 });
 var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  et = /<script|<style|<link/i,
  tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
  it = /^true\/(.*)/,
  nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
 he.extend({
  htmlPrefilter: function(e) {
   return e.replace(Je, "<$1></$2>")
  },
  clone: function(e, t, i) {
   var n, o, r, s, a = e.cloneNode(!0),
    l = he.contains(e.ownerDocument, e);
   if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
    for (s = y(a), r = y(e), n = 0, o = r.length; n < o; n++) L(r[n], s[n]);
   if (t)
    if (i)
     for (r = r || y(e), s = s || y(a), n = 0, o = r.length; n < o; n++) E(r[n], s[n]);
    else E(e, a);
   return (s = y(a, "script")).length > 0 && b(s, !l && y(e, "script")), a
  },
  cleanData: function(e) {
   for (var t, i, n, o = he.event.special, r = 0; void 0 !== (i = e[r]); r++)
    if (De(i)) {
     if (t = i[He.expando]) {
      if (t.events)
       for (n in t.events) o[n] ? he.event.remove(i, n) : he.removeEvent(i, n, t.handle);
      i[He.expando] = void 0
     }
     i[Oe.expando] && (i[Oe.expando] = void 0)
    }
  }
 }), he.fn.extend({
  detach: function(e) {
   return q(this, e, !0)
  },
  remove: function(e) {
   return q(this, e)
  },
  text: function(e) {
   return je(this, function(e) {
    return void 0 === e ? he.text(this) : this.empty().each(function() {
     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
    })
   }, null, e, arguments.length)
  },
  append: function() {
   return _(this, arguments, function(e) {
    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e)
   })
  },
  prepend: function() {
   return _(this, arguments, function(e) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var t = S(this, e);
     t.insertBefore(e, t.firstChild)
    }
   })
  },
  before: function() {
   return _(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this)
   })
  },
  after: function() {
   return _(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
   })
  },
  empty: function() {
   for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
   return this
  },
  clone: function(e, t) {
   return e = null != e && e, t = null == t ? e : t, this.map(function() {
    return he.clone(this, e, t)
   })
  },
  html: function(e) {
   return je(this, function(e) {
    var t = this[0] || {},
     i = 0,
     n = this.length;
    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
    if ("string" == typeof e && !et.test(e) && !Ve[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
     e = he.htmlPrefilter(e);
     try {
      for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
      t = 0
     } catch (e) {}
    }
    t && this.empty().append(e)
   }, null, e, arguments.length)
  },
  replaceWith: function() {
   var e = [];
   return _(this, arguments, function(t) {
    var i = this.parentNode;
    he.inArray(this, e) < 0 && (he.cleanData(y(this)), i && i.replaceChild(t, this))
   }, e)
  }
 }), he.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(e, t) {
  he.fn[e] = function(e) {
   for (var i, n = [], o = he(e), r = o.length - 1, s = 0; s <= r; s++) i = s === r ? this : this.clone(!0), he(o[s])[t](i), re.apply(n, i.get());
   return this.pushStack(n)
  }
 });
 var ot = /^margin/,
  rt = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
  st = function(t) {
   var i = t.ownerDocument.defaultView;
   return i && i.opener || (i = e), i.getComputedStyle(t)
  };
 ! function() {
  function t() {
   if (a) {
    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ge.appendChild(s);
    var t = e.getComputedStyle(a);
    i = "1%" !== t.top, r = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ge.removeChild(s), a = null
   }
  }
  var i, n, o, r, s = te.createElement("div"),
   a = te.createElement("div");
  a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(pe, {
   pixelPosition: function() {
    return t(), i
   },
   boxSizingReliable: function() {
    return t(), n
   },
   pixelMarginRight: function() {
    return t(), o
   },
   reliableMarginLeft: function() {
    return t(), r
   }
  }))
 }();
 var at = /^(none|table(?!-c[ea]).+)/,
  lt = /^--/,
  dt = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  ct = {
   letterSpacing: "0",
   fontWeight: "400"
  },
  ut = ["Webkit", "Moz", "ms"],
  pt = te.createElement("div").style;
 he.extend({
  cssHooks: {
   opacity: {
    get: function(e, t) {
     if (t) {
      var i = j(e, "opacity");
      return "" === i ? "1" : i
     }
    }
   }
  },
  cssNumber: {
   animationIterationCount: !0,
   columnCount: !0,
   fillOpacity: !0,
   flexGrow: !0,
   flexShrink: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   order: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   float: "cssFloat"
  },
  style: function(e, t, i, n) {
   if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
    var o, r, s, a = he.camelCase(t),
     l = lt.test(t),
     d = e.style;
    return l || (t = O(a)), s = he.cssHooks[t] || he.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : d[t] : ("string" === (r = typeof i) && (o = ze.exec(i)) && o[1] && (i = g(e, t, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (he.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))))
   }
  },
  css: function(e, t, i, n) {
   var o, r, s, a = he.camelCase(t);
   return lt.test(t) || (t = O(a)), (s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = j(e, t, n)), "normal" === o && t in ct && (o = ct[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
  }
 }), he.each(["height", "width"], function(e, t) {
  he.cssHooks[t] = {
   get: function(e, i, n) {
    if (i) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, n) : Re(e, dt, function() {
     return M(e, t, n)
    })
   },
   set: function(e, i, n) {
    var o, r = n && st(e),
     s = n && P(e, t, n, "border-box" === he.css(e, "boxSizing", !1, r), r);
    return s && (o = ze.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = he.css(e, t)), N(0, i, s)
   }
  }
 }), he.cssHooks.marginLeft = D(pe.reliableMarginLeft, function(e, t) {
  if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
   marginLeft: 0
  }, function() {
   return e.getBoundingClientRect().left
  })) + "px"
 }), he.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(e, t) {
  he.cssHooks[e + t] = {
   expand: function(i) {
    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + Ie[n] + t] = r[n] || r[n - 2] || r[0];
    return o
   }
  }, ot.test(e) || (he.cssHooks[e + t].set = N)
 }), he.fn.extend({
  css: function(e, t) {
   return je(this, function(e, t, i) {
    var n, o, r = {},
     s = 0;
    if (Array.isArray(t)) {
     for (n = st(e), o = t.length; s < o; s++) r[t[s]] = he.css(e, t[s], !1, n);
     return r
    }
    return void 0 !== i ? he.style(e, t, i) : he.css(e, t)
   }, e, t, arguments.length > 1)
  }
 }), he.Tween = z, z.prototype = {
  constructor: z,
  init: function(e, t, i, n, o, r) {
   this.elem = e, this.prop = i, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (he.cssNumber[i] ? "" : "px")
  },
  cur: function() {
   var e = z.propHooks[this.prop];
   return e && e.get ? e.get(this) : z.propHooks._default.get(this)
  },
  run: function(e) {
   var t, i = z.propHooks[this.prop];
   return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this
  }
 }, z.prototype.init.prototype = z.prototype, z.propHooks = {
  _default: {
   get: function(e) {
    var t;
    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
   },
   set: function(e) {
    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
   }
  }
 }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
  }
 }, he.easing = {
  linear: function(e) {
   return e
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2
  },
  _default: "swing"
 }, he.fx = z.prototype.init, he.fx.step = {};
 var ft, ht, gt = /^(?:toggle|show|hide)$/,
  mt = /queueHooks$/;
 he.Animation = he.extend(U, {
   tweeners: {
    "*": [function(e, t) {
     var i = this.createTween(e, t);
     return g(i.elem, e, ze.exec(t), i), i
    }]
   },
   tweener: function(e, t) {
    he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
    for (var i, n = 0, o = e.length; n < o; n++) i = e[n], U.tweeners[i] = U.tweeners[i] || [], U.tweeners[i].unshift(t)
   },
   prefilters: [function(e, t, i) {
    var n, o, r, s, a, l, d, c, u = "width" in t || "height" in t,
     p = this,
     f = {},
     h = e.style,
     g = e.nodeType && Fe(e),
     m = He.get(e, "fxshow");
    i.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
     s.unqueued || a()
    }), s.unqueued++, p.always(function() {
     p.always(function() {
      s.unqueued--, he.queue(e, "fx").length || s.empty.fire()
     })
    }));
    for (n in t)
     if (o = t[n], gt.test(o)) {
      if (delete t[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
       if ("show" !== o || !m || void 0 === m[n]) continue;
       g = !0
      }
      f[n] = m && m[n] || he.style(e, n)
     }
    if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
     u && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = m && m.display) && (d = He.get(e, "display")), "none" === (c = he.css(e, "display")) && (d ? c = d : (v([e], !0), d = e.style.display || d, c = he.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === he.css(e, "float") && (l || (p.done(function() {
      h.display = d
     }), null == d && (c = h.display, d = "none" === c ? "" : c)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
      h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
     })), l = !1;
     for (n in f) l || (m ? "hidden" in m && (g = m.hidden) : m = He.access(e, "fxshow", {
      display: d
     }), r && (m.hidden = !g), g && v([e], !0), p.done(function() {
      g || v([e]), He.remove(e, "fxshow");
      for (n in f) he.style(e, n, f[n])
     })), l = W(g ? m[n] : 0, n, p), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
    }
   }],
   prefilter: function(e, t) {
    t ? U.prefilters.unshift(e) : U.prefilters.push(e)
   }
  }), he.speed = function(e, t, i) {
   var n = e && "object" == typeof e ? he.extend({}, e) : {
    complete: i || !i && t || he.isFunction(e) && e,
    duration: e,
    easing: i && t || t && !he.isFunction(t) && t
   };
   return he.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in he.fx.speeds ? n.duration = he.fx.speeds[n.duration] : n.duration = he.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
    he.isFunction(n.old) && n.old.call(this), n.queue && he.dequeue(this, n.queue)
   }, n
  }, he.fn.extend({
   fadeTo: function(e, t, i, n) {
    return this.filter(Fe).css("opacity", 0).show().end().animate({
     opacity: t
    }, e, i, n)
   },
   animate: function(e, t, i, n) {
    var o = he.isEmptyObject(e),
     r = he.speed(t, i, n),
     s = function() {
      var t = U(this, he.extend({}, e), r);
      (o || He.get(this, "finish")) && t.stop(!0)
     };
    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
   },
   stop: function(e, t, i) {
    var n = function(e) {
     var t = e.stop;
     delete e.stop, t(i)
    };
    return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
     var t = !0,
      o = null != e && e + "queueHooks",
      r = he.timers,
      s = He.get(this);
     if (o) s[o] && s[o].stop && n(s[o]);
     else
      for (o in s) s[o] && s[o].stop && mt.test(o) && n(s[o]);
     for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
     !t && i || he.dequeue(this, e)
    })
   },
   finish: function(e) {
    return !1 !== e && (e = e || "fx"), this.each(function() {
     var t, i = He.get(this),
      n = i[e + "queue"],
      o = i[e + "queueHooks"],
      r = he.timers,
      s = n ? n.length : 0;
     for (i.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
     for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
     delete i.finish
    })
   }
  }), he.each(["toggle", "show", "hide"], function(e, t) {
   var i = he.fn[t];
   he.fn[t] = function(e, n, o) {
    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(R(t, !0), e, n, o)
   }
  }), he.each({
   slideDown: R("show"),
   slideUp: R("hide"),
   slideToggle: R("toggle"),
   fadeIn: {
    opacity: "show"
   },
   fadeOut: {
    opacity: "hide"
   },
   fadeToggle: {
    opacity: "toggle"
   }
  }, function(e, t) {
   he.fn[e] = function(e, i, n) {
    return this.animate(t, e, i, n)
   }
  }), he.timers = [], he.fx.tick = function() {
   var e, t = 0,
    i = he.timers;
   for (ft = he.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
   i.length || he.fx.stop(), ft = void 0
  }, he.fx.timer = function(e) {
   he.timers.push(e), he.fx.start()
  }, he.fx.interval = 13, he.fx.start = function() {
   ht || (ht = !0, I())
  }, he.fx.stop = function() {
   ht = null
  }, he.fx.speeds = {
   slow: 600,
   fast: 200,
   _default: 400
  }, he.fn.delay = function(t, i) {
   return t = he.fx ? he.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
    var o = e.setTimeout(i, t);
    n.stop = function() {
     e.clearTimeout(o)
    }
   })
  },
  function() {
   var e = te.createElement("input"),
    t = te.createElement("select").appendChild(te.createElement("option"));
   e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
  }();
 var vt, yt = he.expr.attrHandle;
 he.fn.extend({
  attr: function(e, t) {
   return je(this, he.attr, e, t, arguments.length > 1)
  },
  removeAttr: function(e) {
   return this.each(function() {
    he.removeAttr(this, e)
   })
  }
 }), he.extend({
  attr: function(e, t, i) {
   var n, o, r = e.nodeType;
   if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, i) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), void 0 !== i ? null === i ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = he.find.attr(e, t)) ? void 0 : n)
  },
  attrHooks: {
   type: {
    set: function(e, t) {
     if (!pe.radioValue && "radio" === t && o(e, "input")) {
      var i = e.value;
      return e.setAttribute("type", t), i && (e.value = i), t
     }
    }
   }
  },
  removeAttr: function(e, t) {
   var i, n = 0,
    o = t && t.match(Le);
   if (o && 1 === e.nodeType)
    for (; i = o[n++];) e.removeAttribute(i)
  }
 }), vt = {
  set: function(e, t, i) {
   return !1 === t ? he.removeAttr(e, i) : e.setAttribute(i, i), i
  }
 }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
  var i = yt[t] || he.find.attr;
  yt[t] = function(e, t, n) {
   var o, r, s = t.toLowerCase();
   return n || (r = yt[s], yt[s] = o, o = null != i(e, t, n) ? s : null, yt[s] = r), o
  }
 });
 var bt = /^(?:input|select|textarea|button)$/i,
  wt = /^(?:a|area)$/i;
 he.fn.extend({
  prop: function(e, t) {
   return je(this, he.prop, e, t, arguments.length > 1)
  },
  removeProp: function(e) {
   return this.each(function() {
    delete this[he.propFix[e] || e]
   })
  }
 }), he.extend({
  prop: function(e, t, i) {
   var n, o, r = e.nodeType;
   if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var t = he.find.attr(e, "tabindex");
     return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
    }
   }
  },
  propFix: {
   for: "htmlFor",
   class: "className"
  }
 }), pe.optSelected || (he.propHooks.selected = {
  get: function(e) {
   var t = e.parentNode;
   return t && t.parentNode && t.parentNode.selectedIndex, null
  },
  set: function(e) {
   var t = e.parentNode;
   t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
  }
 }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
  he.propFix[this.toLowerCase()] = this
 }), he.fn.extend({
  addClass: function(e) {
   var t, i, n, o, r, s, a, l = 0;
   if (he.isFunction(e)) return this.each(function(t) {
    he(this).addClass(e.call(this, t, V(this)))
   });
   if ("string" == typeof e && e)
    for (t = e.match(Le) || []; i = this[l++];)
     if (o = V(i), n = 1 === i.nodeType && " " + X(o) + " ") {
      for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
      o !== (a = X(n)) && i.setAttribute("class", a)
     }
   return this
  },
  removeClass: function(e) {
   var t, i, n, o, r, s, a, l = 0;
   if (he.isFunction(e)) return this.each(function(t) {
    he(this).removeClass(e.call(this, t, V(this)))
   });
   if (!arguments.length) return this.attr("class", "");
   if ("string" == typeof e && e)
    for (t = e.match(Le) || []; i = this[l++];)
     if (o = V(i), n = 1 === i.nodeType && " " + X(o) + " ") {
      for (s = 0; r = t[s++];)
       for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
      o !== (a = X(n)) && i.setAttribute("class", a)
     }
   return this
  },
  toggleClass: function(e, t) {
   var i = typeof e;
   return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(i) {
    he(this).toggleClass(e.call(this, i, V(this), t), t)
   }) : this.each(function() {
    var t, n, o, r;
    if ("string" === i)
     for (n = 0, o = he(this), r = e.match(Le) || []; t = r[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
    else void 0 !== e && "boolean" !== i || ((t = V(this)) && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""))
   })
  },
  hasClass: function(e) {
   var t, i, n = 0;
   for (t = " " + e + " "; i = this[n++];)
    if (1 === i.nodeType && (" " + X(V(i)) + " ").indexOf(t) > -1) return !0;
   return !1
  }
 });
 var xt = /\r/g;
 he.fn.extend({
  val: function(e) {
   var t, i, n, o = this[0];
   return arguments.length ? (n = he.isFunction(e), this.each(function(i) {
    var o;
    1 === this.nodeType && (null == (o = n ? e.call(this, i, he(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = he.map(o, function(e) {
     return null == e ? "" : e + ""
    })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
   })) : o ? (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(xt, "") : null == i ? "" : i : void 0
  }
 }), he.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = he.find.attr(e, "value");
     return null != t ? t : X(he.text(e))
    }
   },
   select: {
    get: function(e) {
     var t, i, n, r = e.options,
      s = e.selectedIndex,
      a = "select-one" === e.type,
      l = a ? null : [],
      d = a ? s + 1 : r.length;
     for (n = s < 0 ? d : a ? s : 0; n < d; n++)
      if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !o(i.parentNode, "optgroup"))) {
       if (t = he(i).val(), a) return t;
       l.push(t)
      }
     return l
    },
    set: function(e, t) {
     for (var i, n, o = e.options, r = he.makeArray(t), s = o.length; s--;) n = o[s], (n.selected = he.inArray(he.valHooks.option.get(n), r) > -1) && (i = !0);
     return i || (e.selectedIndex = -1), r
    }
   }
  }
 }), he.each(["radio", "checkbox"], function() {
  he.valHooks[this] = {
   set: function(e, t) {
    if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
   }
  }, pe.checkOn || (he.valHooks[this].get = function(e) {
   return null === e.getAttribute("value") ? "on" : e.value
  })
 });
 var Tt = /^(?:focusinfocus|focusoutblur)$/;
 he.extend(he.event, {
  trigger: function(t, i, n, o) {
   var r, s, a, l, d, c, u, p = [n || te],
    f = de.call(t, "type") ? t.type : t,
    h = de.call(t, "namespace") ? t.namespace.split(".") : [];
   if (s = a = n = n || te, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), d = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : he.makeArray(i, [t]), u = he.event.special[f] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
    if (!o && !u.noBubble && !he.isWindow(n)) {
     for (l = u.delegateType || f, Tt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
     a === (n.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e)
    }
    for (r = 0;
     (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || f, (c = (He.get(s, "events") || {})[t.type] && He.get(s, "handle")) && c.apply(s, i), (c = d && s[d]) && c.apply && De(s) && (t.result = c.apply(s, i), !1 === t.result && t.preventDefault());
    return t.type = f, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !De(n) || d && he.isFunction(n[f]) && !he.isWindow(n) && ((a = n[d]) && (n[d] = null), he.event.triggered = f, n[f](), he.event.triggered = void 0, a && (n[d] = a)), t.result
   }
  },
  simulate: function(e, t, i) {
   var n = he.extend(new he.Event, i, {
    type: e,
    isSimulated: !0
   });
   he.event.trigger(n, null, t)
  }
 }), he.fn.extend({
  trigger: function(e, t) {
   return this.each(function() {
    he.event.trigger(e, t, this)
   })
  },
  triggerHandler: function(e, t) {
   var i = this[0];
   if (i) return he.event.trigger(e, t, i, !0)
  }
 }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
  he.fn[t] = function(e, i) {
   return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
  }
 }), he.fn.extend({
  hover: function(e, t) {
   return this.mouseenter(e).mouseleave(t || e)
  }
 }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
  focus: "focusin",
  blur: "focusout"
 }, function(e, t) {
  var i = function(e) {
   he.event.simulate(t, e.target, he.event.fix(e))
  };
  he.event.special[t] = {
   setup: function() {
    var n = this.ownerDocument || this,
     o = He.access(n, t);
    o || n.addEventListener(e, i, !0), He.access(n, t, (o || 0) + 1)
   },
   teardown: function() {
    var n = this.ownerDocument || this,
     o = He.access(n, t) - 1;
    o ? He.access(n, t, o) : (n.removeEventListener(e, i, !0), He.remove(n, t))
   }
  }
 });
 var Ct = e.location,
  kt = he.now(),
  St = /\?/;
 he.parseXML = function(t) {
  var i;
  if (!t || "string" != typeof t) return null;
  try {
   i = (new e.DOMParser).parseFromString(t, "text/xml")
  } catch (e) {
   i = void 0
  }
  return i && !i.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), i
 };
 var At = /\[\]$/,
  $t = /\r?\n/g,
  Et = /^(?:submit|button|image|reset|file)$/i,
  Lt = /^(?:input|select|textarea|keygen)/i;
 he.param = function(e, t) {
  var i, n = [],
   o = function(e, t) {
    var i = he.isFunction(t) ? t() : t;
    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
   };
  if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
   o(this.name, this.value)
  });
  else
   for (i in e) Y(i, e[i], t, o);
  return n.join("&")
 }, he.fn.extend({
  serialize: function() {
   return he.param(this.serializeArray())
  },
  serializeArray: function() {
   return this.map(function() {
    var e = he.prop(this, "elements");
    return e ? he.makeArray(e) : this
   }).filter(function() {
    var e = this.type;
    return this.name && !he(this).is(":disabled") && Lt.test(this.nodeName) && !Et.test(e) && (this.checked || !Be.test(e))
   }).map(function(e, t) {
    var i = he(this).val();
    return null == i ? null : Array.isArray(i) ? he.map(i, function(e) {
     return {
      name: t.name,
      value: e.replace($t, "\r\n")
     }
    }) : {
     name: t.name,
     value: i.replace($t, "\r\n")
    }
   }).get()
  }
 });
 var _t = /%20/g,
  qt = /#.*$/,
  jt = /([?&])_=[^&]*/,
  Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Ot = /^(?:GET|HEAD)$/,
  Nt = /^\/\//,
  Pt = {},
  Mt = {},
  zt = "*/".concat("*"),
  It = te.createElement("a");
 It.href = Ct.href, he.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: Ct.href,
   type: "GET",
   isLocal: Ht.test(Ct.protocol),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": zt,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /\bxml\b/,
    html: /\bhtml/,
    json: /\bjson\b/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
   },
   converters: {
    "* text": String,
    "text html": !0,
    "text json": JSON.parse,
    "text xml": he.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(e, t) {
   return t ? Z(Z(e, he.ajaxSettings), t) : Z(he.ajaxSettings, e)
  },
  ajaxPrefilter: G(Pt),
  ajaxTransport: G(Mt),
  ajax: function(t, i) {
   function n(t, i, n, a) {
    var d, p, f, w, x, T = i;
    c || (c = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, n && (w = K(h, C, n)), w = J(h, w, C, d), d ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (he.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (he.etag[r] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, f = w.error, d = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || T) + "", d ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, f]), C.statusCode(b), b = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [C, h, d ? p : f]), y.fireWith(g, [C, T]), u && (m.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
   }
   "object" == typeof t && (i = t, t = void 0), i = i || {};
   var o, r, s, a, l, d, c, u, p, f, h = he.ajaxSetup({}, i),
    g = h.context || h,
    m = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
    v = he.Deferred(),
    y = he.Callbacks("once memory"),
    b = h.statusCode || {},
    w = {},
    x = {},
    T = "canceled",
    C = {
     readyState: 0,
     getResponseHeader: function(e) {
      var t;
      if (c) {
       if (!a)
        for (a = {}; t = Dt.exec(s);) a[t[1].toLowerCase()] = t[2];
       t = a[e.toLowerCase()]
      }
      return null == t ? null : t
     },
     getAllResponseHeaders: function() {
      return c ? s : null
     },
     setRequestHeader: function(e, t) {
      return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
     },
     overrideMimeType: function(e) {
      return null == c && (h.mimeType = e), this
     },
     statusCode: function(e) {
      var t;
      if (e)
       if (c) C.always(e[C.status]);
       else
        for (t in e) b[t] = [b[t], e[t]];
      return this
     },
     abort: function(e) {
      var t = e || T;
      return o && o.abort(t), n(0, t), this
     }
    };
   if (v.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Nt, Ct.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Le) || [""], null == h.crossDomain) {
    d = te.createElement("a");
    try {
     d.href = h.url, d.href = d.href, h.crossDomain = It.protocol + "//" + It.host != d.protocol + "//" + d.host
    } catch (e) {
     h.crossDomain = !0
    }
   }
   if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(Pt, h, i, C), c) return C;
   (u = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), r = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(_t, "+")) : (f = h.url.slice(r.length), h.data && (r += (St.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(jt, "$1"), f = (St.test(r) ? "&" : "?") + "_=" + kt++ + f), h.url = r + f), h.ifModified && (he.lastModified[r] && C.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && C.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);
   for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
   if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
   if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = Q(Mt, h, i, C)) {
    if (C.readyState = 1, u && m.trigger("ajaxSend", [C, h]), c) return C;
    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
     C.abort("timeout")
    }, h.timeout));
    try {
     c = !1, o.send(w, n)
    } catch (e) {
     if (c) throw e;
     n(-1, e)
    }
   } else n(-1, "No Transport");
   return C
  },
  getJSON: function(e, t, i) {
   return he.get(e, t, i, "json")
  },
  getScript: function(e, t) {
   return he.get(e, void 0, t, "script")
  }
 }), he.each(["get", "post"], function(e, t) {
  he[t] = function(e, i, n, o) {
   return he.isFunction(i) && (o = o || n, n = i, i = void 0), he.ajax(he.extend({
    url: e,
    type: t,
    dataType: o,
    data: i,
    success: n
   }, he.isPlainObject(e) && e))
  }
 }), he._evalUrl = function(e) {
  return he.ajax({
   url: e,
   type: "GET",
   dataType: "script",
   cache: !0,
   async: !1,
   global: !1,
   throws: !0
  })
 }, he.fn.extend({
  wrapAll: function(e) {
   var t;
   return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
    return e
   }).append(this)), this
  },
  wrapInner: function(e) {
   return he.isFunction(e) ? this.each(function(t) {
    he(this).wrapInner(e.call(this, t))
   }) : this.each(function() {
    var t = he(this),
     i = t.contents();
    i.length ? i.wrapAll(e) : t.append(e)
   })
  },
  wrap: function(e) {
   var t = he.isFunction(e);
   return this.each(function(i) {
    he(this).wrapAll(t ? e.call(this, i) : e)
   })
  },
  unwrap: function(e) {
   return this.parent(e).not("body").each(function() {
    he(this).replaceWith(this.childNodes)
   }), this
  }
 }), he.expr.pseudos.hidden = function(e) {
  return !he.expr.pseudos.visible(e)
 }, he.expr.pseudos.visible = function(e) {
  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
 }, he.ajaxSettings.xhr = function() {
  try {
   return new e.XMLHttpRequest
  } catch (e) {}
 };
 var Ft = {
   0: 200,
   1223: 204
  },
  Rt = he.ajaxSettings.xhr();
 pe.cors = !!Rt && "withCredentials" in Rt, pe.ajax = Rt = !!Rt, he.ajaxTransport(function(t) {
  var i, n;
  if (pe.cors || Rt && !t.crossDomain) return {
   send: function(o, r) {
    var s, a = t.xhr();
    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
     for (s in t.xhrFields) a[s] = t.xhrFields[s];
    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
    for (s in o) a.setRequestHeader(s, o[s]);
    i = function(e) {
     return function() {
      i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
       binary: a.response
      } : {
       text: a.responseText
      }, a.getAllResponseHeaders()))
     }
    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
     4 === a.readyState && e.setTimeout(function() {
      i && n()
     })
    }, i = i("abort");
    try {
     a.send(t.hasContent && t.data || null)
    } catch (e) {
     if (i) throw e
    }
   },
   abort: function() {
    i && i()
   }
  }
 }), he.ajaxPrefilter(function(e) {
  e.crossDomain && (e.contents.script = !1)
 }), he.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function(e) {
    return he.globalEval(e), e
   }
  }
 }), he.ajaxPrefilter("script", function(e) {
  void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
 }), he.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var t, i;
   return {
    send: function(n, o) {
     t = he("<script>").prop({
      charset: e.scriptCharset,
      src: e.url
     }).on("load error", i = function(e) {
      t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
     }), te.head.appendChild(t[0])
    },
    abort: function() {
     i && i()
    }
   }
  }
 });
 var Wt = [],
  Bt = /(=)\?(?=&|$)|\?\?/;
 he.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var e = Wt.pop() || he.expando + "_" + kt++;
   return this[e] = !0, e
  }
 }), he.ajaxPrefilter("json jsonp", function(t, i, n) {
  var o, r, s, a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
  if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, "$1" + o) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
   return s || he.error(o + " was not called"), s[0]
  }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
   s = arguments
  }, n.always(function() {
   void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, Wt.push(o)), s && he.isFunction(r) && r(s[0]), s = r = void 0
  }), "script"
 }), pe.createHTMLDocument = function() {
  var e = te.implementation.createHTMLDocument("").body;
  return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
 }(), he.parseHTML = function(e, t, i) {
  if ("string" != typeof e) return [];
  "boolean" == typeof t && (i = t, t = !1);
  var n, o, r;
  return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), n = t.createElement("base"), n.href = te.location.href, t.head.appendChild(n)) : t = te), o = Ce.exec(e), r = !i && [], o ? [t.createElement(o[1])] : (o = w([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
 }, he.fn.load = function(e, t, i) {
  var n, o, r, s = this,
   a = e.indexOf(" ");
  return a > -1 && (n = X(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && he.ajax({
   url: e,
   type: o || "GET",
   dataType: "html",
   data: t
  }).done(function(e) {
   r = arguments, s.html(n ? he("<div>").append(he.parseHTML(e)).find(n) : e)
  }).always(i && function(e, t) {
   s.each(function() {
    i.apply(this, r || [e.responseText, t, e])
   })
  }), this
 }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
  he.fn[t] = function(e) {
   return this.on(t, e)
  }
 }), he.expr.pseudos.animated = function(e) {
  return he.grep(he.timers, function(t) {
   return e === t.elem
  }).length
 }, he.offset = {
  setOffset: function(e, t, i) {
   var n, o, r, s, a, l, d = he.css(e, "position"),
    c = he(e),
    u = {};
   "static" === d && (e.style.position = "relative"), a = c.offset(), r = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1 ? (n = c.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, i, he.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : c.css(u)
  }
 }, he.fn.extend({
  offset: function(e) {
   if (arguments.length) return void 0 === e ? this : this.each(function(t) {
    he.offset.setOffset(this, e, t)
   });
   var t, i, n, o, r = this[0];
   return r ? r.getClientRects().length ? (n = r.getBoundingClientRect(), t = r.ownerDocument, i = t.documentElement, o = t.defaultView, {
    top: n.top + o.pageYOffset - i.clientTop,
    left: n.left + o.pageXOffset - i.clientLeft
   }) : {
    top: 0,
    left: 0
   } : void 0
  },
  position: function() {
   if (this[0]) {
    var e, t, i = this[0],
     n = {
      top: 0,
      left: 0
     };
    return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (n = e.offset()), n = {
     top: n.top + he.css(e[0], "borderTopWidth", !0),
     left: n.left + he.css(e[0], "borderLeftWidth", !0)
    }), {
     top: t.top - n.top - he.css(i, "marginTop", !0),
     left: t.left - n.left - he.css(i, "marginLeft", !0)
    }
   }
  },
  offsetParent: function() {
   return this.map(function() {
    for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
    return e || Ge
   })
  }
 }), he.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(e, t) {
  var i = "pageYOffset" === t;
  he.fn[e] = function(n) {
   return je(this, function(e, n, o) {
    var r;
    return he.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o)
   }, e, n, arguments.length)
  }
 }), he.each(["top", "left"], function(e, t) {
  he.cssHooks[t] = D(pe.pixelPosition, function(e, i) {
   if (i) return i = j(e, t), rt.test(i) ? he(e).position()[t] + "px" : i
  })
 }), he.each({
  Height: "height",
  Width: "width"
 }, function(e, t) {
  he.each({
   padding: "inner" + e,
   content: t,
   "": "outer" + e
  }, function(i, n) {
   he.fn[n] = function(o, r) {
    var s = arguments.length && (i || "boolean" != typeof o),
     a = i || (!0 === o || !0 === r ? "margin" : "border");
    return je(this, function(t, i, o) {
     var r;
     return he.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, i, a) : he.style(t, i, o, a)
    }, t, s ? o : void 0, s)
   }
  })
 }), he.fn.extend({
  bind: function(e, t, i) {
   return this.on(e, null, t, i)
  },
  unbind: function(e, t) {
   return this.off(e, null, t)
  },
  delegate: function(e, t, i, n) {
   return this.on(t, e, i, n)
  },
  undelegate: function(e, t, i) {
   return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
  }
 }), he.holdReady = function(e) {
  e ? he.readyWait++ : he.ready(!0)
 }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() {
  return he
 });
 var Ut = e.jQuery,
  Xt = e.$;
 return he.noConflict = function(t) {
  return e.$ === he && (e.$ = Xt), t && e.jQuery === he && (e.jQuery = Ut), he
 }, t || (e.jQuery = e.$ = he), he
}),
function(e, t) {
 "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function(e) {
 "use strict";

 function t(t) {
  if (o.webkit && !t) return {
   height: 0,
   width: 0
  };
  if (!o.data.outer) {
   var i = {
    border: "none",
    "box-sizing": "content-box",
    height: "200px",
    margin: "0",
    padding: "0",
    width: "200px"
   };
   o.data.inner = e("<div>").css(e.extend({}, i)), o.data.outer = e("<div>").css(e.extend({
    left: "-1000px",
    overflow: "scroll",
    position: "absolute",
    top: "-1000px"
   }, i)).append(o.data.inner).appendTo("body")
  }
  return o.data.outer.scrollLeft(1e3).scrollTop(1e3), {
   height: Math.ceil(o.data.outer.offset().top - o.data.inner.offset().top || 0),
   width: Math.ceil(o.data.outer.offset().left - o.data.inner.offset().left || 0)
  }
 }

 function i() {
  var e = t(!0);
  return !(e.height || e.width)
 }

 function n(e) {
  var t = e.originalEvent;
  return (!t.axis || t.axis !== t.HORIZONTAL_AXIS) && !t.wheelDeltaX
 }
 var o = {
  data: {
   index: 0,
   name: "scrollbar"
  },
  macosx: /mac/i.test(navigator.platform),
  mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
  overlay: null,
  scroll: null,
  scrolls: [],
  webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
 };
 o.scrolls.add = function(e) {
  this.remove(e).push(e)
 }, o.scrolls.remove = function(t) {
  for (; e.inArray(t, this) >= 0;) this.splice(e.inArray(t, this), 1);
  return this
 };
 var r = {
   autoScrollSize: !0,
   autoUpdate: !0,
   debug: !1,
   disableBodyScroll: !1,
   duration: 200,
   ignoreMobile: !1,
   ignoreOverlay: !1,
   scrollStep: 30,
   showArrows: !1,
   stepScrolling: !0,
   scrollx: null,
   scrolly: null,
   onDestroy: null,
   onInit: null,
   onScroll: null,
   onUpdate: null
  },
  s = function(n) {
   o.scroll || (o.overlay = i(), o.scroll = t(), l(), e(window).resize(function() {
    var e = !1;
    if (o.scroll && (o.scroll.height || o.scroll.width)) {
     var i = t();
     (i.height !== o.scroll.height || i.width !== o.scroll.width) && (o.scroll = i, e = !0)
    }
    l(e)
   })), this.container = n, this.namespace = ".scrollbar_" + o.data.index++, this.options = e.extend({}, r, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, n.data(o.data.name, this), o.scrolls.add(this)
  };
 s.prototype = {
  destroy: function() {
   if (this.wrapper) {
    this.container.removeData(o.data.name), o.scrolls.remove(this);
    var t = this.container.scrollLeft(),
     i = this.container.scrollTop();
    this.container.insertBefore(this.wrapper).css({
     height: "",
     margin: "",
     "max-height": ""
    }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(i), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), e(document).add("body").off(this.namespace), e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
   }
  },
  init: function(t) {
   var i = this,
    r = this.container,
    s = this.containerWrapper || r,
    a = this.namespace,
    l = e.extend(this.options, t || {}),
    d = {
     x: this.scrollx,
     y: this.scrolly
    },
    c = this.wrapper,
    u = {
     scrollLeft: r.scrollLeft(),
     scrollTop: r.scrollTop()
    };
   if (o.mobile && l.ignoreMobile || o.overlay && l.ignoreOverlay || o.macosx && !o.webkit) return !1;
   if (c) s.css({
    height: "auto",
    "margin-bottom": -1 * o.scroll.height + "px",
    "margin-right": -1 * o.scroll.width + "px",
    "max-height": ""
   });
   else {
    if (this.wrapper = c = e("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position", "absolute" == r.css("position") ? "absolute" : "relative").insertBefore(r).append(r), r.is("textarea") && (this.containerWrapper = s = e("<div>").insertBefore(r).append(r), c.addClass("scroll-textarea")), s.addClass("scroll-content").css({
      height: "auto",
      "margin-bottom": -1 * o.scroll.height + "px",
      "margin-right": -1 * o.scroll.width + "px",
      "max-height": ""
     }), r.on("scroll" + a, function(t) {
      e.isFunction(l.onScroll) && l.onScroll.call(i, {
       maxScroll: d.y.maxScrollOffset,
       scroll: r.scrollTop(),
       size: d.y.size,
       visible: d.y.visible
      }, {
       maxScroll: d.x.maxScrollOffset,
       scroll: r.scrollLeft(),
       size: d.x.size,
       visible: d.x.visible
      }), d.x.isVisible && d.x.scroll.bar.css("left", r.scrollLeft() * d.x.kx + "px"), d.y.isVisible && d.y.scroll.bar.css("top", r.scrollTop() * d.y.kx + "px")
     }), c.on("scroll" + a, function() {
      c.scrollTop(0).scrollLeft(0)
     }), l.disableBodyScroll) {
     var p = function(e) {
      n(e) ? d.y.isVisible && d.y.mousewheel(e) : d.x.isVisible && d.x.mousewheel(e)
     };
     c.on("MozMousePixelScroll" + a, p), c.on("mousewheel" + a, p), o.mobile && c.on("touchstart" + a, function(t) {
      var i = t.originalEvent.touches && t.originalEvent.touches[0] || t,
       n = {
        pageX: i.pageX,
        pageY: i.pageY
       },
       o = {
        left: r.scrollLeft(),
        top: r.scrollTop()
       };
      e(document).on("touchmove" + a, function(e) {
       var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
       r.scrollLeft(o.left + n.pageX - t.pageX), r.scrollTop(o.top + n.pageY - t.pageY), e.preventDefault()
      }), e(document).on("touchend" + a, function() {
       e(document).off(a)
      })
     })
    }
    e.isFunction(l.onInit) && l.onInit.apply(this, [r])
   }
   e.each(d, function(t, o) {
    var s = null,
     c = 1,
     u = "x" === t ? "scrollLeft" : "scrollTop",
     p = l.scrollStep,
     f = function() {
      var e = r[u]();
      r[u](e + p), 1 == c && e + p >= h && (e = r[u]()), -1 == c && h >= e + p && (e = r[u]()), r[u]() == e && s && s()
     },
     h = 0;
    o.scroll || (o.scroll = i._getScroll(l["scroll" + t]).addClass("scroll-" + t), l.showArrows && o.scroll.addClass("scroll-element_arrows_visible"), o.mousewheel = function(e) {
     if (!o.isVisible || "x" === t && n(e)) return !0;
     if ("y" === t && !n(e)) return d.x.mousewheel(e), !0;
     var s = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail,
      a = o.size - o.visible - o.offset;
     return (s > 0 && a > h || 0 > s && h > 0) && (0 > (h += s) && (h = 0), h > a && (h = a), i.scrollTo = i.scrollTo || {}, i.scrollTo[u] = h, setTimeout(function() {
      i.scrollTo && (r.stop().animate(i.scrollTo, 240, "linear", function() {
       h = r[u]()
      }), i.scrollTo = null)
     }, 1)), e.preventDefault(), !1
    }, o.scroll.on("MozMousePixelScroll" + a, o.mousewheel).on("mousewheel" + a, o.mousewheel).on("mouseenter" + a, function() {
     h = r[u]()
    }), o.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + a, function(n) {
     if (1 != n.which) return !0;
     c = 1;
     var a = {
       eventOffset: n["x" === t ? "pageX" : "pageY"],
       maxScrollValue: o.size - o.visible - o.offset,
       scrollbarOffset: o.scroll.bar.offset()["x" === t ? "left" : "top"],
       scrollbarSize: o.scroll.bar["x" === t ? "outerWidth" : "outerHeight"]()
      },
      d = 0,
      g = 0;
     return e(this).hasClass("scroll-arrow") ? (c = e(this).hasClass("scroll-arrow_more") ? 1 : -1, p = l.scrollStep * c, h = c > 0 ? a.maxScrollValue : 0) : (c = a.eventOffset > a.scrollbarOffset + a.scrollbarSize ? 1 : a.eventOffset < a.scrollbarOffset ? -1 : 0, p = Math.round(.75 * o.visible) * c, h = a.eventOffset - a.scrollbarOffset - (l.stepScrolling ? 1 == c ? a.scrollbarSize : 0 : Math.round(a.scrollbarSize / 2)), h = r[u]() + h / o.kx), i.scrollTo = i.scrollTo || {}, i.scrollTo[u] = l.stepScrolling ? r[u]() + p : h, l.stepScrolling && (s = function() {
      h = r[u](), clearInterval(g), clearTimeout(d), d = 0, g = 0
     }, d = setTimeout(function() {
      g = setInterval(f, 40)
     }, l.duration + 100)), setTimeout(function() {
      i.scrollTo && (r.animate(i.scrollTo, l.duration), i.scrollTo = null)
     }, 1), i._handleMouseDown(s, n)
    }), o.scroll.bar.on("mousedown" + a, function(n) {
     if (1 != n.which) return !0;
     var s = n["x" === t ? "pageX" : "pageY"],
      l = r[u]();
     return o.scroll.addClass("scroll-draggable"), e(document).on("mousemove" + a, function(e) {
      var i = parseInt((e["x" === t ? "pageX" : "pageY"] - s) / o.kx, 10);
      r[u](l + i)
     }), i._handleMouseDown(function() {
      o.scroll.removeClass("scroll-draggable"), h = r[u]()
     }, n)
    }))
   }), e.each(d, function(e, t) {
    var i = "scroll-scroll" + e + "_visible",
     n = "x" == e ? d.y : d.x;
    t.scroll.removeClass(i), n.scroll.removeClass(i), s.removeClass(i)
   }), e.each(d, function(t, i) {
    e.extend(i, "x" == t ? {
     offset: parseInt(r.css("left"), 10) || 0,
     size: r.prop("scrollWidth"),
     visible: c.width()
    } : {
     offset: parseInt(r.css("top"), 10) || 0,
     size: r.prop("scrollHeight"),
     visible: c.height()
    })
   }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), e.isFunction(l.onUpdate) && l.onUpdate.apply(this, [r]), e.each(d, function(e, t) {
    var i = "x" === e ? "left" : "top",
     n = "x" === e ? "outerWidth" : "outerHeight",
     o = "x" === e ? "width" : "height",
     s = parseInt(r.css(i), 10) || 0,
     a = t.size,
     d = t.visible + s,
     c = t.scroll.size[n]() + (parseInt(t.scroll.size.css(i), 10) || 0);
    l.autoScrollSize && (t.scrollbarSize = parseInt(c * d / a, 10), t.scroll.bar.css(o, t.scrollbarSize + "px")), t.scrollbarSize = t.scroll.bar[n](), t.kx = (c - t.scrollbarSize) / (a - d) || 1, t.maxScrollOffset = a - d
   }), r.scrollLeft(u.scrollLeft).scrollTop(u.scrollTop).trigger("scroll")
  },
  _getScroll: function(t) {
   var i = {
    advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
    simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
   };
   return i[t] && (t = i[t]), t || (t = i.simple), t = "string" == typeof t ? e(t).appendTo(this.wrapper) : e(t), e.extend(t, {
    bar: t.find(".scroll-bar"),
    size: t.find(".scroll-element_size"),
    track: t.find(".scroll-element_track")
   }), t
  },
  _handleMouseDown: function(t, i) {
   var n = this.namespace;
   return e(document).on("blur" + n, function() {
    e(document).add("body").off(n), t && t()
   }), e(document).on("dragstart" + n, function(e) {
    return e.preventDefault(), !1
   }), e(document).on("mouseup" + n, function() {
    e(document).add("body").off(n), t && t()
   }), e("body").on("selectstart" + n, function(e) {
    return e.preventDefault(), !1
   }), i && i.preventDefault(), !1
  },
  _updateScroll: function(t, i) {
   var n = this.container,
    r = this.containerWrapper || n,
    s = "scroll-scroll" + t + "_visible",
    a = "x" === t ? this.scrolly : this.scrollx,
    l = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0,
    d = this.wrapper,
    c = i.size,
    u = i.visible + l;
   i.isVisible = c - u > 1, i.isVisible ? (i.scroll.addClass(s), a.scroll.addClass(s), r.addClass(s)) : (i.scroll.removeClass(s), a.scroll.removeClass(s), r.removeClass(s)), "y" === t && (n.is("textarea") || u > c ? r.css({
    height: u + o.scroll.height + "px",
    "max-height": "none"
   }) : r.css({
    "max-height": u + o.scroll.height + "px"
   })), (i.size != n.prop("scrollWidth") || a.size != n.prop("scrollHeight") || i.visible != d.width() || a.visible != d.height() || i.offset != (parseInt(n.css("left"), 10) || 0) || a.offset != (parseInt(n.css("top"), 10) || 0)) && (e.extend(this.scrollx, {
    offset: parseInt(n.css("left"), 10) || 0,
    size: n.prop("scrollWidth"),
    visible: d.width()
   }), e.extend(this.scrolly, {
    offset: parseInt(n.css("top"), 10) || 0,
    size: this.container.prop("scrollHeight"),
    visible: d.height()
   }), this._updateScroll("x" === t ? "y" : "x", a))
  }
 };
 var a = s;
 e.fn.scrollbar = function(t, i) {
  return "string" != typeof t && (i = t, t = "init"), void 0 === i && (i = []), e.isArray(i) || (i = [i]), this.not("body, .scroll-wrapper").each(function() {
   var n = e(this),
    r = n.data(o.data.name);
   (r || "init" === t) && (r || (r = new a(n)), r[t] && r[t].apply(r, i))
  }), this
 }, e.fn.scrollbar.options = r;
 var l = function() {
  var e = 0,
   t = 0;
  return function(i) {
   var n, r, s, a, d, c, u;
   for (n = 0; n < o.scrolls.length; n++) a = o.scrolls[n], r = a.container, s = a.options, d = a.wrapper, c = a.scrollx, u = a.scrolly, (i || s.autoUpdate && d && d.is(":visible") && (r.prop("scrollWidth") != c.size || r.prop("scrollHeight") != u.size || d.width() != c.visible || d.height() != u.visible)) && (a.init(), s.debug && (window.console && console.log({
    scrollHeight: r.prop("scrollHeight") + ":" + a.scrolly.size,
    scrollWidth: r.prop("scrollWidth") + ":" + a.scrollx.size,
    visibleHeight: d.height() + ":" + a.scrolly.visible,
    visibleWidth: d.width() + ":" + a.scrollx.visible
   }, !0), t++));
   clearTimeout(e), e = setTimeout(l, 300)
  }
 }();
 window.angular && function(e) {
  e.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
   var t = r;
   return {
    setOptions: function(i) {
     e.extend(t, i)
    },
    $get: function() {
     return {
      options: e.copy(t)
     }
    }
   }
  }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(e, t) {
   return {
    restrict: "AC",
    link: function(i, n, o) {
     var r = t(o.jqueryScrollbar)(i);
     n.scrollbar(r || e.options).on("$destroy", function() {
      n.scrollbar("destroy")
     })
    }
   }
  }])
 }(window.angular)
}),
function(e) {
 "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
 e.extend(e.fn, {
  validate: function(t) {
   if (this.length) {
    var i = e.data(this[0], "validator");
    return i || (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
     i.settings.submitHandler && (i.submitButton = t.target), e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
    }), this.on("submit.validate", function(t) {
     function n() {
      var n, o;
      return !i.settings.submitHandler || (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), o = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && n.remove(), void 0 !== o && o)
     }
     return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
    })), i)
   }
   t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
  },
  valid: function() {
   var t, i, n;
   return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function() {
    (t = i.element(this) && t) || (n = n.concat(i.errorList))
   }), i.errorList = n), t
  },
  rules: function(t, i) {
   var n, o, r, s, a, l, d = this[0];
   if (null != d && null != d.form) {
    if (t) switch (n = e.data(d.form, "validator").settings, o = n.rules, r = e.validator.staticRules(d), t) {
     case "add":
      e.extend(r, e.validator.normalizeRule(i)), delete r.messages, o[d.name] = r, i.messages && (n.messages[d.name] = e.extend(n.messages[d.name], i.messages));
      break;
     case "remove":
      return i ? (l = {}, e.each(i.split(/\s/), function(t, i) {
       l[i] = r[i], delete r[i], "required" === i && e(d).removeAttr("aria-required")
      }), l) : (delete o[d.name], r)
    }
    return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(d), e.validator.attributeRules(d), e.validator.dataRules(d), e.validator.staticRules(d)), d)).required && (a = s.required, delete s.required, s = e.extend({
     required: a
    }, s), e(d).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = e.extend(s, {
     remote: a
    })), s
   }
  }
 }), e.extend(e.expr.pseudos || e.expr[":"], {
  blank: function(t) {
   return !e.trim("" + e(t).val())
  },
  filled: function(t) {
   var i = e(t).val();
   return null !== i && !!e.trim("" + i)
  },
  unchecked: function(t) {
   return !e(t).prop("checked")
  }
 }), e.validator = function(t, i) {
  this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
 }, e.validator.format = function(t, i) {
  return 1 === arguments.length ? function() {
   var i = e.makeArray(arguments);
   return i.unshift(t), e.validator.format.apply(this, i)
  } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function(e, i) {
   t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
    return i
   })
  }), t)
 }, e.extend(e.validator, {
  defaults: {
   messages: {},
   groups: {},
   rules: {},
   errorClass: "error",
   pendingClass: "pending",
   validClass: "valid",
   errorElement: "label",
   focusCleanup: !1,
   focusInvalid: !0,
   errorContainer: e([]),
   errorLabelContainer: e([]),
   onsubmit: !0,
   ignore: ":hidden",
   ignoreTitle: !1,
   onfocusin: function(e) {
    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
   },
   onfocusout: function(e) {
    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
   },
   onkeyup: function(t, i) {
    var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
    9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, n) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
   },
   onclick: function(e) {
    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
   },
   highlight: function(t, i, n) {
    "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
   },
   unhighlight: function(t, i, n) {
    "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
   }
  },
  setDefaults: function(t) {
   e.extend(e.validator.defaults, t)
  },
  messages: {
   required: "This field is required.",
   remote: "Please fix this field.",
   email: "Please enter a valid email address.",
   url: "Please enter a valid URL.",
   date: "Please enter a valid date.",
   dateISO: "Please enter a valid date (ISO).",
   number: "Please enter a valid number.",
   digits: "Please enter only digits.",
   equalTo: "Please enter the same value again.",
   maxlength: e.validator.format("Please enter no more than {0} characters."),
   minlength: e.validator.format("Please enter at least {0} characters."),
   rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
   range: e.validator.format("Please enter a value between {0} and {1}."),
   max: e.validator.format("Please enter a value less than or equal to {0}."),
   min: e.validator.format("Please enter a value greater than or equal to {0}."),
   step: e.validator.format("Please enter a multiple of {0}.")
  },
  autoCreateRanges: !1,
  prototype: {
   init: function() {
    function t(t) {
     !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
     var i = e.data(this.form, "validator"),
      n = "on" + t.type.replace(/^validate/, ""),
      o = i.settings;
     o[n] && !e(this).is(o.ignore) && o[n].call(i, this, t)
    }
    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
    var i, n = this.groups = {};
    e.each(this.settings.groups, function(t, i) {
     "string" == typeof i && (i = i.split(/\s/)), e.each(i, function(e, i) {
      n[i] = t
     })
    }), i = this.settings.rules, e.each(i, function(t, n) {
     i[t] = e.validator.normalizeRule(n)
    }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
   },
   form: function() {
    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
   },
   checkForm: function() {
    this.prepareForm();
    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
    return this.valid()
   },
   element: function(t) {
    var i, n, o = this.clean(t),
     r = this.validationTargetFor(o),
     s = this,
     a = !0;
    return void 0 === r ? delete this.invalid[o.name] : (this.prepareElement(r), this.currentElements = e(r), (n = this.groups[r.name]) && e.each(this.groups, function(e, t) {
     t === n && e !== r.name && (o = s.validationTargetFor(s.clean(s.findByName(e)))) && o.name in s.invalid && (s.currentElements.push(o), a = s.check(o) && a)
    }), i = !1 !== this.check(r), a = a && i, this.invalid[r.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), a
   },
   showErrors: function(t) {
    if (t) {
     var i = this;
     e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
      return {
       message: e,
       element: i.findByName(t)[0]
      }
     }), this.successList = e.grep(this.successList, function(e) {
      return !(e.name in t)
     })
    }
    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
   },
   resetForm: function() {
    e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
    this.resetElements(t)
   },
   resetElements: function(e) {
    var t;
    if (this.settings.unhighlight)
     for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
    else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
   },
   numberOfInvalids: function() {
    return this.objectLength(this.invalid)
   },
   objectLength: function(e) {
    var t, i = 0;
    for (t in e) e[t] && i++;
    return i
   },
   hideErrors: function() {
    this.hideThese(this.toHide)
   },
   hideThese: function(e) {
    e.not(this.containers).text(""), this.addWrapper(e).hide()
   },
   valid: function() {
    return 0 === this.size()
   },
   size: function() {
    return this.errorList.length
   },
   focusInvalid: function() {
    if (this.settings.focusInvalid) try {
     e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
    } catch (e) {}
   },
   findLastActive: function() {
    var t = this.lastActive;
    return t && 1 === e.grep(this.errorList, function(e) {
     return e.element.name === t.name
    }).length && t
   },
   elements: function() {
    var t = this,
     i = {};
    return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
     var n = this.name || e(this).attr("name");
     return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), !(n in i || !t.objectLength(e(this).rules()) || (i[n] = !0, 0))
    })
   },
   clean: function(t) {
    return e(t)[0]
   },
   errors: function() {
    var t = this.settings.errorClass.split(" ").join(".");
    return e(this.settings.errorElement + "." + t, this.errorContext)
   },
   resetInternals: function() {
    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
   },
   reset: function() {
    this.resetInternals(), this.currentElements = e([])
   },
   prepareForm: function() {
    this.reset(), this.toHide = this.errors().add(this.containers)
   },
   prepareElement: function(e) {
    this.reset(), this.toHide = this.errorsFor(e)
   },
   elementValue: function(t) {
    var i, n, o = e(t),
     r = t.type;
    return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && void 0 !== t.validity ? t.validity.badInput ? "NaN" : o.val() : (i = t.hasAttribute("contenteditable") ? o.text() : o.val(), "file" === r ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
   },
   check: function(t) {
    t = this.validationTargetFor(this.clean(t));
    var i, n, o, r = e(t).rules(),
     s = e.map(r, function(e, t) {
      return t
     }).length,
     a = !1,
     l = this.elementValue(t);
    if ("function" == typeof r.normalizer) {
     if ("string" != typeof(l = r.normalizer.call(t, l))) throw new TypeError("The normalizer should return a string value.");
     delete r.normalizer
    }
    for (n in r) {
     o = {
      method: n,
      parameters: r[n]
     };
     try {
      if ("dependency-mismatch" === (i = e.validator.methods[n].call(this, l, t, o.parameters)) && 1 === s) {
       a = !0;
       continue
      }
      if (a = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
      if (!i) return this.formatAndAdd(t, o), !1
     } catch (e) {
      throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method."), e
     }
    }
    if (!a) return this.objectLength(r) && this.successList.push(t), !0
   },
   customDataMessage: function(t, i) {
    return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
   },
   customMessage: function(e, t) {
    var i = this.settings.messages[e];
    return i && (i.constructor === String ? i : i[t])
   },
   findDefined: function() {
    for (var e = 0; e < arguments.length; e++)
     if (void 0 !== arguments[e]) return arguments[e]
   },
   defaultMessage: function(t, i) {
    "string" == typeof i && (i = {
     method: i
    });
    var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
     o = /\$?\{(\d+)\}/g;
    return "function" == typeof n ? n = n.call(this, i.parameters, t) : o.test(n) && (n = e.validator.format(n.replace(o, "{$1}"), i.parameters)), n
   },
   formatAndAdd: function(e, t) {
    var i = this.defaultMessage(e, t);
    this.errorList.push({
     message: i,
     element: e,
     method: t.method
    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
   },
   addWrapper: function(e) {
    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
   },
   defaultShowErrors: function() {
    var e, t, i;
    for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
     for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
    if (this.settings.unhighlight)
     for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
   },
   validElements: function() {
    return this.currentElements.not(this.invalidElements())
   },
   invalidElements: function() {
    return e(this.errorList).map(function() {
     return this.element
    })
   },
   showLabel: function(t, i) {
    var n, o, r, s, a = this.errorsFor(t),
     l = this.idOrName(t),
     d = e(t).attr("aria-describedby");
    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), n = a, this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = a.attr("id"), d ? d.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (d += " " + r) : d = r, e(t).attr("aria-describedby", d), (o = this.groups[t.name]) && (s = this, e.each(s.groups, function(t, i) {
     i === o && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
    })))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
   },
   errorsFor: function(t) {
    var i = this.escapeCssMeta(this.idOrName(t)),
     n = e(t).attr("aria-describedby"),
     o = "label[for='" + i + "'], label[for='" + i + "'] *";
    return n && (o = o + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(o)
   },
   escapeCssMeta: function(e) {
    return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
   },
   idOrName: function(e) {
    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
   },
   validationTargetFor: function(t) {
    return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
   },
   checkable: function(e) {
    return /radio|checkbox/i.test(e.type)
   },
   findByName: function(t) {
    return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
   },
   getLength: function(t, i) {
    switch (i.nodeName.toLowerCase()) {
     case "select":
      return e("option:selected", i).length;
     case "input":
      if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
    }
    return t.length
   },
   depend: function(e, t) {
    return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
   },
   dependTypes: {
    boolean: function(e) {
     return e
    },
    string: function(t, i) {
     return !!e(t, i.form).length
    },
    function: function(e, t) {
     return e(t)
    }
   },
   optional: function(t) {
    var i = this.elementValue(t);
    return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
   },
   startRequest: function(t) {
    this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
   },
   stopRequest: function(t, i) {
    --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
   },
   previousValue: function(t, i) {
    return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
     old: null,
     valid: !0,
     message: this.defaultMessage(t, {
      method: i
     })
    })
   },
   destroy: function() {
    this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
   }
  },
  classRuleSettings: {
   required: {
    required: !0
   },
   email: {
    email: !0
   },
   url: {
    url: !0
   },
   date: {
    date: !0
   },
   dateISO: {
    dateISO: !0
   },
   number: {
    number: !0
   },
   digits: {
    digits: !0
   },
   creditcard: {
    creditcard: !0
   }
  },
  addClassRules: function(t, i) {
   t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
  },
  classRules: function(t) {
   var i = {},
    n = e(t).attr("class");
   return n && e.each(n.split(" "), function() {
    this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
   }), i
  },
  normalizeAttributeRule: function(e, t, i, n) {
   /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
  },
  attributeRules: function(t) {
   var i, n, o = {},
    r = e(t),
    s = t.getAttribute("type");
   for (i in e.validator.methods) "required" === i ? ("" === (n = t.getAttribute(i)) && (n = !0), n = !!n) : n = r.attr(i), this.normalizeAttributeRule(o, s, i, n);
   return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
  },
  dataRules: function(t) {
   var i, n, o = {},
    r = e(t),
    s = t.getAttribute("type");
   for (i in e.validator.methods) n = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(o, s, i, n);
   return o
  },
  staticRules: function(t) {
   var i = {},
    n = e.data(t.form, "validator");
   return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
  },
  normalizeRules: function(t, i) {
   return e.each(t, function(n, o) {
    if (!1 !== o) {
     if (o.param || o.depends) {
      var r = !0;
      switch (typeof o.depends) {
       case "string":
        r = !!e(o.depends, i.form).length;
        break;
       case "function":
        r = o.depends.call(i, i)
      }
      r ? t[n] = void 0 === o.param || o.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[n])
     }
    } else delete t[n]
   }), e.each(t, function(n, o) {
    t[n] = e.isFunction(o) && "normalizer" !== n ? o(i) : o
   }), e.each(["minlength", "maxlength"], function() {
    t[this] && (t[this] = Number(t[this]))
   }), e.each(["rangelength", "range"], function() {
    var i;
    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
   }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
  },
  normalizeRule: function(t) {
   if ("string" == typeof t) {
    var i = {};
    e.each(t.split(/\s/), function() {
     i[this] = !0
    }), t = i
   }
   return t
  },
  addMethod: function(t, i, n) {
   e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
  },
  methods: {
   required: function(t, i, n) {
    if (!this.depend(n, i)) return "dependency-mismatch";
    if ("select" === i.nodeName.toLowerCase()) {
     var o = e(i).val();
     return o && o.length > 0
    }
    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
   },
   email: function(e, t) {
    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
   },
   url: function(e, t) {
    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
   },
   date: function(e, t) {
    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
   },
   dateISO: function(e, t) {
    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
   },
   number: function(e, t) {
    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
   },
   digits: function(e, t) {
    return this.optional(t) || /^\d+$/.test(e)
   },
   minlength: function(t, i, n) {
    var o = e.isArray(t) ? t.length : this.getLength(t, i);
    return this.optional(i) || o >= n
   },
   maxlength: function(t, i, n) {
    var o = e.isArray(t) ? t.length : this.getLength(t, i);
    return this.optional(i) || o <= n
   },
   rangelength: function(t, i, n) {
    var o = e.isArray(t) ? t.length : this.getLength(t, i);
    return this.optional(i) || o >= n[0] && o <= n[1]
   },
   min: function(e, t, i) {
    return this.optional(t) || e >= i
   },
   max: function(e, t, i) {
    return this.optional(t) || e <= i
   },
   range: function(e, t, i) {
    return this.optional(t) || e >= i[0] && e <= i[1]
   },
   step: function(t, i, n) {
    var o, r = e(i).attr("type"),
     s = "Step attribute on input type " + r + " is not supported.",
     a = ["text", "number", "range"],
     l = new RegExp("\\b" + r + "\\b"),
     d = function(e) {
      var t = ("" + e).match(/(?:\.(\d+))?$/);
      return t && t[1] ? t[1].length : 0
     },
     c = function(e) {
      return Math.round(e * Math.pow(10, o))
     },
     u = !0;
    if (r && !l.test(a.join())) throw new Error(s);
    return o = d(n), (d(t) > o || c(t) % c(n) != 0) && (u = !1), this.optional(i) || u
   },
   equalTo: function(t, i, n) {
    var o = e(n);
    return this.settings.onfocusout && o.not(".validate-equalTo-blur").length && o.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
     e(i).valid()
    }), t === o.val()
   },
   remote: function(t, i, n, o) {
    if (this.optional(i)) return "dependency-mismatch";
    o = "string" == typeof o && o || "remote";
    var r, s, a, l = this.previousValue(i, o);
    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][o], this.settings.messages[i.name][o] = l.message, n = "string" == typeof n && {
     url: n
    } || n, a = e.param(e.extend({
     data: t
    }, n.data)), l.old === a ? l.valid : (l.old = a, r = this, this.startRequest(i), s = {}, s[i.name] = t, e.ajax(e.extend(!0, {
     mode: "abort",
     port: "validate" + i.name,
     dataType: "json",
     data: s,
     context: r.currentForm,
     success: function(e) {
      var n, s, a, d = !0 === e || "true" === e;
      r.settings.messages[i.name][o] = l.originalMessage, d ? (a = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(i), r.formSubmitted = a, r.successList.push(i), r.invalid[i.name] = !1, r.showErrors()) : (n = {}, s = e || r.defaultMessage(i, {
       method: o,
       parameters: t
      }), n[i.name] = l.message = s, r.invalid[i.name] = !0, r.showErrors(n)), l.valid = d, r.stopRequest(i, d)
     }
    }, n)), "pending")
   }
  }
 });
 var t, i = {};
 return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, n) {
  var o = e.port;
  "abort" === e.mode && (i[o] && i[o].abort(), i[o] = n)
 }) : (t = e.ajax, e.ajax = function(n) {
  var o = ("mode" in n ? n : e.ajaxSettings).mode,
   r = ("port" in n ? n : e.ajaxSettings).port;
  return "abort" === o ? (i[r] && i[r].abort(), i[r] = t.apply(this, arguments), i[r]) : t.apply(this, arguments)
 }), e
}),
function() {
 "use strict";

 function e(n) {
  if (!n) throw new Error("No options passed to Waypoint constructor");
  if (!n.element) throw new Error("No element option passed to Waypoint constructor");
  if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
  this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, n), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
   name: this.options.group,
   axis: this.axis
  }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, t += 1
 }
 var t = 0,
  i = {};
 e.prototype.queueTrigger = function(e) {
  this.group.queueTrigger(this, e)
 }, e.prototype.trigger = function(e) {
  this.enabled && this.callback && this.callback.apply(this, e)
 }, e.prototype.destroy = function() {
  this.context.remove(this), this.group.remove(this), delete i[this.key]
 }, e.prototype.disable = function() {
  return this.enabled = !1, this
 }, e.prototype.enable = function() {
  return this.context.refresh(), this.enabled = !0, this
 }, e.prototype.next = function() {
  return this.group.next(this)
 }, e.prototype.previous = function() {
  return this.group.previous(this)
 }, e.invokeAll = function(e) {
  var t = [];
  for (var n in i) t.push(i[n]);
  for (var o = 0, r = t.length; r > o; o++) t[o][e]()
 }, e.destroyAll = function() {
  e.invokeAll("destroy")
 }, e.disableAll = function() {
  e.invokeAll("disable")
 }, e.enableAll = function() {
  e.Context.refreshAll();
  for (var t in i) i[t].enabled = !0;
  return this
 }, e.refreshAll = function() {
  e.Context.refreshAll()
 }, e.viewportHeight = function() {
  return window.innerHeight || document.documentElement.clientHeight
 }, e.viewportWidth = function() {
  return document.documentElement.clientWidth
 }, e.adapters = [], e.defaults = {
  context: window,
  continuous: !0,
  enabled: !0,
  group: "default",
  horizontal: !1,
  offset: 0
 }, e.offsetAliases = {
  "bottom-in-view": function() {
   return this.context.innerHeight() - this.adapter.outerHeight()
  },
  "right-in-view": function() {
   return this.context.innerWidth() - this.adapter.outerWidth()
  }
 }, window.Waypoint = e
}(),
function() {
 "use strict";

 function e(e) {
  window.setTimeout(e, 1e3 / 60)
 }

 function t(e) {
  this.element = e, this.Adapter = o.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
   x: this.adapter.scrollLeft(),
   y: this.adapter.scrollTop()
  }, this.waypoints = {
   vertical: {},
   horizontal: {}
  }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
 }
 var i = 0,
  n = {},
  o = window.Waypoint,
  r = window.onload;
 t.prototype.add = function(e) {
  var t = e.options.horizontal ? "horizontal" : "vertical";
  this.waypoints[t][e.key] = e, this.refresh()
 }, t.prototype.checkEmpty = function() {
  var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
   t = this.Adapter.isEmptyObject(this.waypoints.vertical),
   i = this.element == this.element.window;
  e && t && !i && (this.adapter.off(".waypoints"), delete n[this.key])
 }, t.prototype.createThrottledResizeHandler = function() {
  function e() {
   t.handleResize(), t.didResize = !1
  }
  var t = this;
  this.adapter.on("resize.waypoints", function() {
   t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
  })
 }, t.prototype.createThrottledScrollHandler = function() {
  function e() {
   t.handleScroll(), t.didScroll = !1
  }
  var t = this;
  this.adapter.on("scroll.waypoints", function() {
   (!t.didScroll || o.isTouch) && (t.didScroll = !0, o.requestAnimationFrame(e))
  })
 }, t.prototype.handleResize = function() {
  o.Context.refreshAll()
 }, t.prototype.handleScroll = function() {
  var e = {},
   t = {
    horizontal: {
     newScroll: this.adapter.scrollLeft(),
     oldScroll: this.oldScroll.x,
     forward: "right",
     backward: "left"
    },
    vertical: {
     newScroll: this.adapter.scrollTop(),
     oldScroll: this.oldScroll.y,
     forward: "down",
     backward: "up"
    }
   };
  for (var i in t) {
   var n = t[i],
    o = n.newScroll > n.oldScroll ? n.forward : n.backward;
   for (var r in this.waypoints[i]) {
    var s = this.waypoints[i][r];
    if (null !== s.triggerPoint) {
     var a = n.oldScroll < s.triggerPoint,
      l = n.newScroll >= s.triggerPoint,
      d = a && l,
      c = !a && !l;
     (d || c) && (s.queueTrigger(o), e[s.group.id] = s.group)
    }
   }
  }
  for (var u in e) e[u].flushTriggers();
  this.oldScroll = {
   x: t.horizontal.newScroll,
   y: t.vertical.newScroll
  }
 }, t.prototype.innerHeight = function() {
  return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
 }, t.prototype.remove = function(e) {
  delete this.waypoints[e.axis][e.key], this.checkEmpty()
 }, t.prototype.innerWidth = function() {
  return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
 }, t.prototype.destroy = function() {
  var e = [];
  for (var t in this.waypoints)
   for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
  for (var n = 0, o = e.length; o > n; n++) e[n].destroy()
 }, t.prototype.refresh = function() {
  var e, t = this.element == this.element.window,
   i = t ? void 0 : this.adapter.offset(),
   n = {};
  this.handleScroll(), e = {
   horizontal: {
    contextOffset: t ? 0 : i.left,
    contextScroll: t ? 0 : this.oldScroll.x,
    contextDimension: this.innerWidth(),
    oldScroll: this.oldScroll.x,
    forward: "right",
    backward: "left",
    offsetProp: "left"
   },
   vertical: {
    contextOffset: t ? 0 : i.top,
    contextScroll: t ? 0 : this.oldScroll.y,
    contextDimension: this.innerHeight(),
    oldScroll: this.oldScroll.y,
    forward: "down",
    backward: "up",
    offsetProp: "top"
   }
  };
  for (var r in e) {
   var s = e[r];
   for (var a in this.waypoints[r]) {
    var l, d, c, u, p, f = this.waypoints[r][a],
     h = f.options.offset,
     g = f.triggerPoint,
     m = 0,
     v = null == g;
    f.element !== f.element.window && (m = f.adapter.offset()[s.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), f.options.offset.indexOf("%") > -1 && (h = Math.ceil(s.contextDimension * h / 100))), l = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(m + l - h), d = g < s.oldScroll, c = f.triggerPoint >= s.oldScroll, u = d && c, p = !d && !c, !v && u ? (f.queueTrigger(s.backward), n[f.group.id] = f.group) : !v && p ? (f.queueTrigger(s.forward), n[f.group.id] = f.group) : v && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), n[f.group.id] = f.group)
   }
  }
  return o.requestAnimationFrame(function() {
   for (var e in n) n[e].flushTriggers()
  }), this
 }, t.findOrCreateByElement = function(e) {
  return t.findByElement(e) || new t(e)
 }, t.refreshAll = function() {
  for (var e in n) n[e].refresh()
 }, t.findByElement = function(e) {
  return n[e.waypointContextKey]
 }, window.onload = function() {
  r && r(), t.refreshAll()
 }, o.requestAnimationFrame = function(t) {
  (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
 }, o.Context = t
}(),
function() {
 "use strict";

 function e(e, t) {
  return e.triggerPoint - t.triggerPoint
 }

 function t(e, t) {
  return t.triggerPoint - e.triggerPoint
 }

 function i(e) {
  this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
 }
 var n = {
   vertical: {},
   horizontal: {}
  },
  o = window.Waypoint;
 i.prototype.add = function(e) {
  this.waypoints.push(e)
 }, i.prototype.clearTriggerQueues = function() {
  this.triggerQueues = {
   up: [],
   down: [],
   left: [],
   right: []
  }
 }, i.prototype.flushTriggers = function() {
  for (var i in this.triggerQueues) {
   var n = this.triggerQueues[i],
    o = "up" === i || "left" === i;
   n.sort(o ? t : e);
   for (var r = 0, s = n.length; s > r; r += 1) {
    var a = n[r];
    (a.options.continuous || r === n.length - 1) && a.trigger([i])
   }
  }
  this.clearTriggerQueues()
 }, i.prototype.next = function(t) {
  this.waypoints.sort(e);
  var i = o.Adapter.inArray(t, this.waypoints);
  return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
 }, i.prototype.previous = function(t) {
  this.waypoints.sort(e);
  var i = o.Adapter.inArray(t, this.waypoints);
  return i ? this.waypoints[i - 1] : null
 }, i.prototype.queueTrigger = function(e, t) {
  this.triggerQueues[t].push(e)
 }, i.prototype.remove = function(e) {
  var t = o.Adapter.inArray(e, this.waypoints);
  t > -1 && this.waypoints.splice(t, 1)
 }, i.prototype.first = function() {
  return this.waypoints[0]
 }, i.prototype.last = function() {
  return this.waypoints[this.waypoints.length - 1]
 }, i.findOrCreate = function(e) {
  return n[e.axis][e.name] || new i(e)
 }, o.Group = i
}(),
function() {
 "use strict";

 function e(e) {
  this.$element = t(e)
 }
 var t = window.jQuery,
  i = window.Waypoint;
 t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
  e.prototype[i] = function() {
   var e = Array.prototype.slice.call(arguments);
   return this.$element[i].apply(this.$element, e)
  }
 }), t.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
  e[n] = t[n]
 }), i.adapters.push({
  name: "jquery",
  Adapter: e
 }), i.Adapter = e
}(),
function() {
 "use strict";

 function e(e) {
  return function() {
   var i = [],
    n = arguments[0];
   return e.isFunction(arguments[0]) && (n = e.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
    var o = e.extend({}, n, {
     element: this
    });
    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), i.push(new t(o))
   }), i
  }
 }
 var t = window.Waypoint;
 window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function(e) {
 if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
 else if ("function" == typeof define && define.amd) define([], e);
 else {
  ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Lightgallery = e()
 }
}(function() {
 return function e(t, i, n) {
  function o(s, a) {
   if (!i[s]) {
    if (!t[s]) {
     var l = "function" == typeof require && require;
     if (!a && l) return l(s, !0);
     if (r) return r(s, !0);
     var d = new Error("Cannot find module '" + s + "'");
     throw d.code = "MODULE_NOT_FOUND", d
    }
    var c = i[s] = {
     exports: {}
    };
    t[s][0].call(c.exports, function(e) {
     var i = t[s][1][e];
     return o(i || e)
    }, c, c.exports, e, t, i, n)
   }
   return i[s].exports
  }
  for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
  return o
 }({
  1: [function(e, t, i) {
   ! function(e, t) {
    if (void 0 !== i) t(i);
    else {
     var n = {
      exports: {}
     };
     t(n.exports), e.lgUtils = n.exports
    }
   }(this, function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
     value: !0
    }), window.getAttribute = function(e) {
     return window[e]
    }, window.setAttribute = function(e, t) {
     window[e] = t
    }, document.getAttribute = function(e) {
     return document[e]
    }, document.setAttribute = function(e, t) {
     document[e] = t
    };
    var t = {
     wrap: function(e, t) {
      if (e) {
       var i = document.createElement("div");
       i.className = t, e.parentNode.insertBefore(i, e), e.parentNode.removeChild(e), i.appendChild(e)
      }
     },
     addClass: function(e, t) {
      e && (e.classList ? e.classList.add(t) : e.className += " " + t)
     },
     removeClass: function(e, t) {
      e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
     },
     hasClass: function(e, t) {
      return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
     },
     setVendor: function(e, t, i) {
      e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = i, e.style["webkit" + t] = i, e.style["moz" + t] = i, e.style["ms" + t] = i, e.style["o" + t] = i)
     },
     trigger: function(e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if (e) {
       var n = new CustomEvent(t, {
        detail: i
       });
       e.dispatchEvent(n)
      }
     },
     Listener: {
      uid: 0
     },
     on: function(e, i, n) {
      e && i.split(" ").forEach(function(i) {
       var o = e.getAttribute("lg-event-uid") || "";
       t.Listener.uid++, o += "&" + t.Listener.uid, e.setAttribute("lg-event-uid", o), t.Listener[i + t.Listener.uid] = n, e.addEventListener(i.split(".")[0], n, !1)
      })
     },
     off: function(e, i) {
      if (e) {
       var n = e.getAttribute("lg-event-uid");
       if (n) {
        n = n.split("&");
        for (var o = 0; o < n.length; o++)
         if (n[o]) {
          var r = i + n[o];
          if ("." === r.substring(0, 1))
           for (var s in t.Listener) t.Listener.hasOwnProperty(s) && s.split(".").indexOf(r.split(".")[1]) > -1 && (e.removeEventListener(s.split(".")[0], t.Listener[s]), e.setAttribute("lg-event-uid", e.getAttribute("lg-event-uid").replace("&" + n[o], "")), delete t.Listener[s]);
          else e.removeEventListener(r.split(".")[0], t.Listener[r]), e.setAttribute("lg-event-uid", e.getAttribute("lg-event-uid").replace("&" + n[o], "")), delete t.Listener[r]
         }
       }
      }
     },
     param: function(e) {
      return Object.keys(e).map(function(t) {
       return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
      }).join("&")
     }
    };
    e.default = t
   })
  }, {}],
  2: [function(e, t, i) {
   ! function(t, n) {
    if (void 0 !== i) n(e("./lg-utils"));
    else {
     var o = {
      exports: {}
     };
     n(t.lgUtils), t.lightgallery = o.exports
    }
   }(this, function(e) {
    "use strict";

    function t(e, t) {
     if (this.el = e, this.s = n({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
     return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this
    }
    var i = function(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }(e),
     n = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
       var i = arguments[t];
       for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      }
      return e
     };
    ! function() {
     function e(e, t) {
      t = t || {
       bubbles: !1,
       cancelable: !1,
       detail: void 0
      };
      var i = document.createEvent("CustomEvent");
      return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
     }
     if ("function" == typeof window.CustomEvent) return !1;
     e.prototype = window.Event.prototype, window.CustomEvent = e
    }(), window.utils = i.default, window.lgData = {
     uid: 0
    }, window.lgModules = {};
    var o = {
     mode: "lg-slide",
     cssEasing: "ease",
     easing: "linear",
     speed: 600,
     height: "100%",
     width: "100%",
     addClass: "",
     startClass: "lg-start-zoom",
     backdropDuration: 150,
     hideBarsDelay: 6e3,
     useLeft: !1,
     closable: !0,
     loop: !0,
     escKey: !0,
     keyPress: !0,
     controls: !0,
     slideEndAnimatoin: !0,
     hideControlOnEnd: !1,
     mousewheel: !1,
     getCaptionFromTitleOrAlt: !0,
     appendSubHtmlTo: ".lg-sub-html",
     subHtmlSelectorRelative: !1,
     preload: 1,
     showAfterLoad: !0,
     selector: "",
     selectWithin: "",
     nextHtml: "",
     prevHtml: "",
     index: !1,
     iframeMaxWidth: "100%",
     download: !0,
     counter: !0,
     appendCounterTo: ".lg-toolbar",
     swipeThreshold: 50,
     enableSwipe: !0,
     enableDrag: !0,
     dynamic: !1,
     dynamicEl: [],
     galleryId: 1
    };
    t.prototype.init = function() {
     var e = this;
     e.s.preload > e.items.length && (e.s.preload = e.items.length);
     var t = window.location.hash;
     if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), i.default.addClass(document.body, "lg-from-hash"), i.default.hasClass(document.body, "lg-on") || (i.default.addClass(document.body, "lg-on"), setTimeout(function() {
       e.build(e.index)
      }))), e.s.dynamic) i.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, i.default.hasClass(document.body, "lg-on") || (i.default.addClass(document.body, "lg-on"), setTimeout(function() {
      e.build(e.index)
     }));
     else
      for (var n = 0; n < e.items.length; n++) ! function(t) {
       i.default.on(e.items[t], "click.lgcustom", function(n) {
        n.preventDefault(), i.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, i.default.hasClass(document.body, "lg-on") || (e.build(e.index), i.default.addClass(document.body, "lg-on"))
       })
      }(n)
    }, t.prototype.build = function(e) {
     var t = this;
     t.structure();
     for (var n in window.lgModules) t.modules[n] = new window.lgModules[n](t.el);
     t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout(function() {
      t.enableDrag(), t.enableSwipe()
     }, 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), i.default.trigger(t.el, "onAfterOpen"), i.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function() {
      i.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function() {
       i.default.addClass(t.outer, "lg-hide-items")
      }, t.s.hideBarsDelay)
     })
    }, t.prototype.structure = function() {
     var e, t = "",
      n = "",
      o = 0,
      r = "",
      s = this;
     for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), i.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), o = 0; o < this.items.length; o++) t += '<div class="lg-item"></div>';
     if (this.s.controls && this.items.length > 1 && (n = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (r = '<div class="lg-sub-html"></div>'), e = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + n + r + "</div></div>", document.body.insertAdjacentHTML("beforeend", e), this.outer = document.querySelector(".lg-outer"), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (i.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : i.default.addClass(this.outer, "lg-use-css3"), s.setTop(), i.default.on(window, "resize.lg orientationchange.lg", function() {
       setTimeout(function() {
        s.setTop()
       }, 100)
      }), i.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? i.default.addClass(this.outer, "lg-css3") : (i.default.addClass(this.outer, "lg-css"), this.s.speed = 0), i.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && i.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && i.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) {
      var a = this.outer.querySelector(".lg-inner");
      i.default.setVendor(a, "TransitionTimingFunction", this.s.cssEasing), i.default.setVendor(a, "TransitionDuration", this.s.speed + "ms")
     }
     setTimeout(function() {
      i.default.addClass(document.querySelector(".lg-backdrop"), "in")
     }), setTimeout(function() {
      i.default.addClass(s.outer, "lg-visible")
     }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop
    }, t.prototype.setTop = function() {
     if ("100%" !== this.s.height) {
      var e = window.innerHeight,
       t = (e - parseInt(this.s.height, 10)) / 2,
       i = this.outer.querySelector(".lg");
      e >= parseInt(this.s.height, 10) ? i.style.top = t + "px" : i.style.top = "0px"
     }
    }, t.prototype.doCss = function() {
     return !! function() {
      var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
       t = document.documentElement,
       i = 0;
      for (i = 0; i < e.length; i++)
       if (e[i] in t.style) return !0
     }()
    }, t.prototype.isVideo = function(e, t) {
     if (!e) throw new Error("Make sure that slide " + t + " has an image/video src");
     var i;
     if (i = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && i) return {
      html5: !0
     };
     var n = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
      o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
      r = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
      s = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
     return n ? {
      youtube: n
     } : o ? {
      vimeo: o
     } : r ? {
      dailymotion: r
     } : s ? {
      vk: s
     } : void 0
    }, t.prototype.counter = function() {
     this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>")
    }, t.prototype.addHtml = function(e) {
     var t, n = null;
     if (this.s.dynamic ? n = this.s.dynamicEl[e].subHtml : (n = (t = this.items[e]).getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !n && (n = t.getAttribute("title")) && t.querySelector("img") && (n = t.querySelector("img").getAttribute("alt"))), void 0 !== n && null !== n) {
      var o = n.substring(0, 1);
      "." !== o && "#" !== o || (n = this.s.subHtmlSelectorRelative && !this.s.dynamic ? t.querySelector(n).innerHTML : document.querySelector(n).innerHTML)
     } else n = "";
     ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = n : this.___slide[e].insertAdjacentHTML("beforeend", n), void 0 !== n && null !== n && ("" === n ? i.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : i.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), i.default.trigger(this.el, "onAfterAppendSubHtml", {
      index: e
     })
    }, t.prototype.preload = function(e) {
     var t = 1,
      i = 1;
     for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++) this.loadContent(e + t, !1, 0);
     for (i = 1; i <= this.s.preload && !(e - i < 0); i++) this.loadContent(e - i, !1, 0)
    }, t.prototype.loadContent = function(e, t, n) {
     var o, r, s, a, l, d, c = this,
      u = !1,
      p = function(e) {
       for (var t = [], i = [], n = 0; n < e.length; n++) {
        var o = e[n].split(" ");
        "" === o[0] && o.splice(0, 1), i.push(o[0]), t.push(o[1])
       }
       for (var s = window.innerWidth, a = 0; a < t.length; a++)
        if (parseInt(t[a], 10) > s) {
         r = i[a];
         break
        }
      };
     c.s.dynamic ? (c.s.dynamicEl[e].poster && (u = !0, s = c.s.dynamicEl[e].poster), d = c.s.dynamicEl[e].html, r = c.s.dynamicEl[e].src, c.s.dynamicEl[e].responsive && p(c.s.dynamicEl[e].responsive.split(",")), a = c.s.dynamicEl[e].srcset, l = c.s.dynamicEl[e].sizes) : (c.items[e].getAttribute("data-poster") && (u = !0, s = c.items[e].getAttribute("data-poster")), d = c.items[e].getAttribute("data-html"), r = c.items[e].getAttribute("href") || c.items[e].getAttribute("data-src"), c.items[e].getAttribute("data-responsive") && p(c.items[e].getAttribute("data-responsive").split(",")), a = c.items[e].getAttribute("data-srcset"), l = c.items[e].getAttribute("data-sizes"));
     var f = !1;
     c.s.dynamic ? c.s.dynamicEl[e].iframe && (f = !0) : "true" === c.items[e].getAttribute("data-iframe") && (f = !0);
     var h = c.isVideo(r, e);
     if (!i.default.hasClass(c.___slide[e], "lg-loaded")) {
      if (f) c.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + r + '"  allowfullscreen="true"></iframe></div></div>');
      else if (u) {
       var g = "";
       g = h && h.youtube ? "lg-has-youtube" : h && h.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + g + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + s + '" /></div></div>')
      } else h ? (c.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), i.default.trigger(c.el, "hasVideo", {
       index: e,
       src: r,
       html: d
      })) : c.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + r + '" /></div>');
      if (i.default.trigger(c.el, "onAferAppendSlide", {
        index: e
       }), o = c.___slide[e].querySelector(".lg-object"), l && o.setAttribute("sizes", l), a) {
       o.setAttribute("srcset", a);
       try {
        picturefill({
         elements: [o[0]]
        })
       } catch (e) {
        console.error("Make sure you have included Picturefill version 2")
       }
      }
      ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(e), i.default.addClass(c.___slide[e], "lg-loaded")
     }
     i.default.on(c.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function() {
      var t = 0;
      n && !i.default.hasClass(document.body, "lg-from-hash") && (t = n), setTimeout(function() {
       i.default.addClass(c.___slide[e], "lg-complete"), i.default.trigger(c.el, "onSlideItemLoad", {
        index: e,
        delay: n || 0
       })
      }, t)
     }), h && h.html5 && !u && i.default.addClass(c.___slide[e], "lg-complete"), !0 === t && (i.default.hasClass(c.___slide[e], "lg-complete") ? c.preload(e) : i.default.on(c.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function() {
      c.preload(e)
     }))
    }, t.prototype.slide = function(e, t, n) {
     for (var o = 0, r = 0; r < this.___slide.length; r++)
      if (i.default.hasClass(this.___slide[r], "lg-current")) {
       o = r;
       break
      }
     var s = this;
     if (!s.lGalleryOn || o !== e) {
      var a = this.___slide.length,
       l = s.lGalleryOn ? this.s.speed : 0,
       d = !1,
       c = !1;
      if (!s.lgBusy) {
       if (this.s.download) {
        var u;
        (u = s.s.dynamic ? !1 !== s.s.dynamicEl[e].downloadUrl && (s.s.dynamicEl[e].downloadUrl || s.s.dynamicEl[e].src) : "false" !== s.items[e].getAttribute("data-download-url") && (s.items[e].getAttribute("data-download-url") || s.items[e].getAttribute("href") || s.items[e].getAttribute("data-src"))) ? (document.getElementById("lg-download").setAttribute("href", u), i.default.removeClass(s.outer, "lg-hide-download")) : i.default.addClass(s.outer, "lg-hide-download")
       }
       if (i.default.trigger(s.el, "onBeforeSlide", {
         prevIndex: o,
         index: e,
         fromTouch: t,
         fromThumb: n
        }), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
         s.addHtml(e)
        }, l), this.arrowDisable(e), t) {
        var p = e - 1,
         f = e + 1;
        0 === e && o === a - 1 ? (f = 0, p = a - 1) : e === a - 1 && 0 === o && (f = 0, p = a - 1), i.default.removeClass(s.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), i.default.removeClass(s.outer.querySelector(".lg-current"), "lg-current"), i.default.removeClass(s.outer.querySelector(".lg-next-slide"), "lg-next-slide"), i.default.addClass(s.___slide[p], "lg-prev-slide"), i.default.addClass(s.___slide[f], "lg-next-slide"), i.default.addClass(s.___slide[e], "lg-current")
       } else {
        i.default.addClass(s.outer, "lg-no-trans");
        for (var h = 0; h < this.___slide.length; h++) i.default.removeClass(this.___slide[h], "lg-prev-slide"), i.default.removeClass(this.___slide[h], "lg-next-slide");
        e < o ? (c = !0, 0 !== e || o !== a - 1 || n || (c = !1, d = !0)) : e > o && (d = !0, e !== a - 1 || 0 !== o || n || (c = !0, d = !1)), c ? (i.default.addClass(this.___slide[e], "lg-prev-slide"), i.default.addClass(this.___slide[o], "lg-next-slide")) : d && (i.default.addClass(this.___slide[e], "lg-next-slide"), i.default.addClass(this.___slide[o], "lg-prev-slide")), setTimeout(function() {
         i.default.removeClass(s.outer.querySelector(".lg-current"), "lg-current"), i.default.addClass(s.___slide[e], "lg-current"), i.default.removeClass(s.outer, "lg-no-trans")
        }, 50)
       }
       s.lGalleryOn ? (setTimeout(function() {
        s.loadContent(e, !0, 0)
       }, this.s.speed + 50), setTimeout(function() {
        s.lgBusy = !1, i.default.trigger(s.el, "onAfterSlide", {
         prevIndex: o,
         index: e,
         fromTouch: t,
         fromThumb: n
        })
       }, this.s.speed)) : (s.loadContent(e, !0, s.s.backdropDuration), s.lgBusy = !1, i.default.trigger(s.el, "onAfterSlide", {
        prevIndex: o,
        index: e,
        fromTouch: t,
        fromThumb: n
       })), s.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1)
      }
     }
    }, t.prototype.goToNextSlide = function(e) {
     var t = this;
     t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, i.default.trigger(t.el, "onBeforeNextSlide", {
      index: t.index
     }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, i.default.trigger(t.el, "onBeforeNextSlide", {
      index: t.index
     }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (i.default.addClass(t.outer, "lg-right-end"), setTimeout(function() {
      i.default.removeClass(t.outer, "lg-right-end")
     }, 400)))
    }, t.prototype.goToPrevSlide = function(e) {
     var t = this;
     t.lgBusy || (t.index > 0 ? (t.index--, i.default.trigger(t.el, "onBeforePrevSlide", {
      index: t.index,
      fromTouch: e
     }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, i.default.trigger(t.el, "onBeforePrevSlide", {
      index: t.index,
      fromTouch: e
     }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (i.default.addClass(t.outer, "lg-left-end"), setTimeout(function() {
      i.default.removeClass(t.outer, "lg-left-end")
     }, 400)))
    }, t.prototype.keyPress = function() {
     var e = this;
     this.items.length > 1 && i.default.on(window, "keyup.lg", function(t) {
      e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
     }), i.default.on(window, "keydown.lg", function(t) {
      !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), i.default.hasClass(e.outer, "lg-thumb-open") ? i.default.removeClass(e.outer, "lg-thumb-open") : e.destroy())
     })
    }, t.prototype.arrow = function() {
     var e = this;
     i.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function() {
      e.goToPrevSlide()
     }), i.default.on(this.outer.querySelector(".lg-next"), "click.lg", function() {
      e.goToNextSlide()
     })
    }, t.prototype.arrowDisable = function(e) {
     if (!this.s.loop && this.s.hideControlOnEnd) {
      var t = this.outer.querySelector(".lg-next"),
       n = this.outer.querySelector(".lg-prev");
      e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), i.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), i.default.addClass(t, "disabled")), e > 0 ? (n.removeAttribute("disabled"), i.default.removeClass(n, "disabled")) : (t.setAttribute("disabled", "disabled"), i.default.addClass(t, "disabled"))
     }
    }, t.prototype.setTranslate = function(e, t, n) {
     this.s.useLeft ? e.style.left = t : i.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + n + "px, 0px)")
    }, t.prototype.touchMove = function(e, t) {
     var n = t - e;
     Math.abs(n) > 15 && (i.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], n, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + n, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + n, 0))
    }, t.prototype.touchEnd = function(e) {
     var t = this;
     "lg-slide" !== t.s.mode && i.default.addClass(t.outer, "lg-slide");
     for (var n = 0; n < this.___slide.length; n++) i.default.hasClass(this.___slide[n], "lg-current") || i.default.hasClass(this.___slide[n], "lg-prev-slide") || i.default.hasClass(this.___slide[n], "lg-next-slide") || (this.___slide[n].style.opacity = "0");
     setTimeout(function() {
      i.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && i.default.trigger(t.el, "onSlideClick");
      for (var n = 0; n < t.___slide.length; n++) t.___slide[n].removeAttribute("style")
     }), setTimeout(function() {
      i.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || i.default.removeClass(t.outer, "lg-slide")
     }, t.s.speed + 100)
    }, t.prototype.enableSwipe = function() {
     var e = this,
      t = 0,
      n = 0,
      o = !1;
     if (e.s.enableSwipe && e.isTouch && e.doCss()) {
      for (var r = 0; r < e.___slide.length; r++) i.default.on(e.___slide[r], "touchstart.lg", function(n) {
       i.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (n.preventDefault(), e.manageSwipeClass(), t = n.targetTouches[0].pageX)
      });
      for (var s = 0; s < e.___slide.length; s++) i.default.on(e.___slide[s], "touchmove.lg", function(r) {
       i.default.hasClass(e.outer, "lg-zoomed") || (r.preventDefault(), n = r.targetTouches[0].pageX, e.touchMove(t, n), o = !0)
      });
      for (var a = 0; a < e.___slide.length; a++) i.default.on(e.___slide[a], "touchend.lg", function() {
       i.default.hasClass(e.outer, "lg-zoomed") || (o ? (o = !1, e.touchEnd(n - t)) : i.default.trigger(e.el, "onSlideClick"))
      })
     }
    }, t.prototype.enableDrag = function() {
     var e = this,
      t = 0,
      n = 0,
      o = !1,
      r = !1;
     if (e.s.enableDrag && !e.isTouch && e.doCss()) {
      for (var s = 0; s < e.___slide.length; s++) i.default.on(e.___slide[s], "mousedown.lg", function(n) {
       i.default.hasClass(e.outer, "lg-zoomed") || (i.default.hasClass(n.target, "lg-object") || i.default.hasClass(n.target, "lg-video-play")) && (n.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = n.pageX, o = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, i.default.removeClass(e.outer, "lg-grab"), i.default.addClass(e.outer, "lg-grabbing"), i.default.trigger(e.el, "onDragstart")))
      });
      i.default.on(window, "mousemove.lg", function(s) {
       o && (r = !0, n = s.pageX, e.touchMove(t, n), i.default.trigger(e.el, "onDragmove"))
      }), i.default.on(window, "mouseup.lg", function(s) {
       r ? (r = !1, e.touchEnd(n - t), i.default.trigger(e.el, "onDragend")) : (i.default.hasClass(s.target, "lg-object") || i.default.hasClass(s.target, "lg-video-play")) && i.default.trigger(e.el, "onSlideClick"), o && (o = !1, i.default.removeClass(e.outer, "lg-grabbing"), i.default.addClass(e.outer, "lg-grab"))
      })
     }
    }, t.prototype.manageSwipeClass = function() {
     var e = this.index + 1,
      t = this.index - 1,
      n = this.___slide.length;
     this.s.loop && (0 === this.index ? t = n - 1 : this.index === n - 1 && (e = 0));
     for (var o = 0; o < this.___slide.length; o++) i.default.removeClass(this.___slide[o], "lg-next-slide"), i.default.removeClass(this.___slide[o], "lg-prev-slide");
     t > -1 && i.default.addClass(this.___slide[t], "lg-prev-slide"), i.default.addClass(this.___slide[e], "lg-next-slide")
    }, t.prototype.mousewheel = function() {
     var e = this;
     i.default.on(e.outer, "mousewheel.lg", function(t) {
      t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
     })
    }, t.prototype.closeGallery = function() {
     var e = this,
      t = !1;
     i.default.on(this.outer.querySelector(".lg-close"), "click.lg", function() {
      e.destroy()
     }), e.s.closable && (i.default.on(e.outer, "mousedown.lg", function(e) {
      t = !!(i.default.hasClass(e.target, "lg-outer") || i.default.hasClass(e.target, "lg-item") || i.default.hasClass(e.target, "lg-img-wrap"))
     }), i.default.on(e.outer, "mouseup.lg", function(n) {
      (i.default.hasClass(n.target, "lg-outer") || i.default.hasClass(n.target, "lg-item") || i.default.hasClass(n.target, "lg-img-wrap") && t) && (i.default.hasClass(e.outer, "lg-dragging") || e.destroy())
     }))
    }, t.prototype.destroy = function(e) {
     var t = this;
     if (e || i.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) {
      if (!t.s.dynamic)
       for (var n = 0; n < this.items.length; n++) i.default.off(this.items[n], ".lg"), i.default.off(this.items[n], ".lgcustom");
      var o = t.el.getAttribute("lg-uid");
      delete window.lgData[o], t.el.removeAttribute("lg-uid")
     }
     i.default.off(this.el, ".lgtm");
     for (var r in window.lgModules) t.modules[r] && t.modules[r].destroy();
     this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, i.default.off(window, ".lg"), i.default.removeClass(document.body, "lg-on"), i.default.removeClass(document.body, "lg-from-hash"), t.outer && i.default.removeClass(t.outer, "lg-visible"), i.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function() {
      try {
       t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || i.default.trigger(t.el, "onCloseAfter")
      } catch (e) {}
     }, t.s.backdropDuration + 50)
    }, window.lightGallery = function(e, i) {
     if (e) try {
      if (e.getAttribute("lg-uid")) try {
       window.lgData[e.getAttribute("lg-uid")].init()
      } catch (e) {
       console.error("lightGallery has not initiated properly")
      } else {
       var n = "lg" + window.lgData.uid++;
       window.lgData[n] = new t(e, i), e.setAttribute("lg-uid", n)
      }
     } catch (e) {
      console.error("lightGallery has not initiated properly")
     }
    }
   })
  }, {
   "./lg-utils": 1
  }]
 }, {}, [2])(2)
}),
function(e) {
 "use strict";
 "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
 "use strict";
 var t = window.Slick || {};
 (t = function() {
  var t = 0;
  return function(i, n) {
   var o, r = this;
   r.defaults = {
    accessibility: !0,
    adaptiveHeight: !1,
    appendArrows: e(i),
    appendDots: e(i),
    arrows: !0,
    asNavFor: null,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    autoplay: !1,
    autoplaySpeed: 3e3,
    centerMode: !1,
    centerPadding: "50px",
    cssEase: "ease",
    customPaging: function(t, i) {
     return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: .35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: "ondemand",
    mobileFirst: !1,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    pauseOnDotsHover: !1,
    respondTo: "window",
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "",
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: !0,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    verticalSwiping: !1,
    waitForAnimate: !0,
    zIndex: 1e3
   }, r.initials = {
    animating: !1,
    dragging: !1,
    autoPlayTimer: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    $dots: null,
    listWidth: null,
    listHeight: null,
    loadIndex: 0,
    $nextArrow: null,
    $prevArrow: null,
    slideCount: null,
    slideWidth: null,
    $slideTrack: null,
    $slides: null,
    sliding: !1,
    slideOffset: 0,
    swipeLeft: null,
    $list: null,
    touchObject: {},
    transformsEnabled: !1,
    unslicked: !1
   }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(i).data("slick") || {}, r.options = e.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
  }
 }()).prototype.activateADA = function() {
  this.$slideTrack.find(".slick-active").attr({
   "aria-hidden": "false"
  }).find("a, input, button, select").attr({
   tabindex: "0"
  })
 }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
  var o = this;
  if ("boolean" == typeof i) n = i, i = null;
  else if (0 > i || i >= o.slideCount) return !1;
  o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
   e(i).attr("data-slick-index", t)
  }), o.$slidesCache = o.$slides, o.reinit()
 }, t.prototype.animateHeight = function() {
  var e = this;
  if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
   var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
   e.$list.animate({
    height: t
   }, e.options.speed)
  }
 }, t.prototype.animateSlide = function(t, i) {
  var n = {},
   o = this;
  o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
   left: t
  }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
   top: t
  }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
   animStart: o.currentLeft
  }).animate({
   animStart: t
  }, {
   duration: o.options.speed,
   easing: o.options.easing,
   step: function(e) {
    e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
   },
   complete: function() {
    i && i.call()
   }
  })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
   o.disableTransition(), i.call()
  }, o.options.speed))
 }, t.prototype.getNavTarget = function() {
  var t = this,
   i = t.options.asNavFor;
  return i && null !== i && (i = e(i).not(t.$slider)), i
 }, t.prototype.asNavFor = function(t) {
  var i = this.getNavTarget();
  null !== i && "object" == typeof i && i.each(function() {
   var i = e(this).slick("getSlick");
   i.unslicked || i.slideHandler(t, !0)
  })
 }, t.prototype.applyTransition = function(e) {
  var t = this,
   i = {};
  !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
 }, t.prototype.autoPlay = function() {
  var e = this;
  e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
 }, t.prototype.autoPlayClear = function() {
  var e = this;
  e.autoPlayTimer && clearInterval(e.autoPlayTimer)
 }, t.prototype.autoPlayIterator = function() {
  var e = this,
   t = e.currentSlide + e.options.slidesToScroll;
  e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
 }, t.prototype.buildArrows = function() {
  var t = this;
  !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
   "aria-disabled": "true",
   tabindex: "-1"
  }))
 }, t.prototype.buildDots = function() {
  var t, i, n = this;
  if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
   for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
   n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
  }
 }, t.prototype.buildOut = function() {
  var t = this;
  t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
   e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
  }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
 }, t.prototype.buildRows = function() {
  var e, t, i, n, o, r, s, a = this;
  if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
   for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
    var l = document.createElement("div");
    for (t = 0; t < a.options.rows; t++) {
     var d = document.createElement("div");
     for (i = 0; i < a.options.slidesPerRow; i++) {
      var c = e * s + (t * a.options.slidesPerRow + i);
      r.get(c) && d.appendChild(r.get(c))
     }
     l.appendChild(d)
    }
    n.appendChild(l)
   }
   a.$slider.empty().append(n), a.$slider.children().children().children().css({
    width: 100 / a.options.slidesPerRow + "%",
    display: "inline-block"
   })
  }
 }, t.prototype.checkResponsive = function(t, i) {
  var n, o, r, s = this,
   a = !1,
   l = s.$slider.width(),
   d = window.innerWidth || e(window).width();
  if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
   o = null;
   for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
   null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
  }
 }, t.prototype.changeSlide = function(t, i) {
  var n, o, r, s = this,
   a = e(t.currentTarget);
  switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
   case "previous":
    o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
    break;
   case "next":
    o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
    break;
   case "index":
    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
    s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
    break;
   default:
    return
  }
 }, t.prototype.checkNavigable = function(e) {
  var t, i;
  if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
  else
   for (var n in t) {
    if (e < t[n]) {
     e = i;
     break
    }
    i = t[n]
   }
  return e
 }, t.prototype.cleanUpEvents = function() {
  var t = this;
  t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
 }, t.prototype.cleanUpSlideEvents = function() {
  var t = this;
  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
 }, t.prototype.cleanUpRows = function() {
  var e, t = this;
  t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
 }, t.prototype.clickHandler = function(e) {
  !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
 }, t.prototype.destroy = function(t) {
  var i = this;
  i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
   e(this).attr("style", e(this).data("originalStyling"))
  }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
 }, t.prototype.disableTransition = function(e) {
  var t = this,
   i = {};
  i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
 }, t.prototype.fadeSlide = function(e, t) {
  var i = this;
  !1 === i.cssTransitions ? (i.$slides.eq(e).css({
   zIndex: i.options.zIndex
  }), i.$slides.eq(e).animate({
   opacity: 1
  }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
   opacity: 1,
   zIndex: i.options.zIndex
  }), t && setTimeout(function() {
   i.disableTransition(e), t.call()
  }, i.options.speed))
 }, t.prototype.fadeSlideOut = function(e) {
  var t = this;
  !1 === t.cssTransitions ? t.$slides.eq(e).animate({
   opacity: 0,
   zIndex: t.options.zIndex - 2
  }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
   opacity: 0,
   zIndex: t.options.zIndex - 2
  }))
 }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
  var t = this;
  null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
 }, t.prototype.focusHandler = function() {
  var t = this;
  t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
   i.stopImmediatePropagation();
   var n = e(this);
   setTimeout(function() {
    t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
   }, 0)
  })
 }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
  return this.currentSlide
 }, t.prototype.getDotCount = function() {
  var e = this,
   t = 0,
   i = 0,
   n = 0;
  if (!0 === e.options.infinite)
   for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
  else if (!0 === e.options.centerMode) n = e.slideCount;
  else if (e.options.asNavFor)
   for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
  else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
  return n - 1
 }, t.prototype.getLeft = function(e) {
  var t, i, n, o = this,
   r = 0;
  return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
 }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
  return this.options[e]
 }, t.prototype.getNavigableIndexes = function() {
  var e, t = this,
   i = 0,
   n = 0,
   o = [];
  for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
  return o
 }, t.prototype.getSlick = function() {
  return this
 }, t.prototype.getSlideCount = function() {
  var t, i, n = this;
  return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
   return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft ? (t = r, !1) : void 0
  }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
 }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
  this.changeSlide({
   data: {
    message: "index",
    index: parseInt(e)
   }
  }, t)
 }, t.prototype.init = function(t) {
  var i = this;
  e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
 }, t.prototype.initADA = function() {
  var t = this;
  t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
   "aria-hidden": "true",
   tabindex: "-1"
  }).find("a, input, button, select").attr({
   tabindex: "-1"
  }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
   e(this).attr({
    role: "option",
    "aria-describedby": "slick-slide" + t.instanceUid + i
   })
  }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
   e(this).attr({
    role: "presentation",
    "aria-selected": "false",
    "aria-controls": "navigation" + t.instanceUid + i,
    id: "slick-slide" + t.instanceUid + i
   })
  }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
 }, t.prototype.initArrowEvents = function() {
  var e = this;
  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
   message: "previous"
  }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
   message: "next"
  }, e.changeSlide))
 }, t.prototype.initDotEvents = function() {
  var t = this;
  !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
   message: "index"
  }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
 }, t.prototype.initSlideEvents = function() {
  var t = this;
  t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
 }, t.prototype.initializeEvents = function() {
  var t = this;
  t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
   action: "start"
  }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
   action: "move"
  }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
   action: "end"
  }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
   action: "end"
  }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
 }, t.prototype.initUI = function() {
  var e = this;
  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
 }, t.prototype.keyHandler = function(e) {
  var t = this;
  e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
   data: {
    message: !0 === t.options.rtl ? "next" : "previous"
   }
  }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
   data: {
    message: !0 === t.options.rtl ? "previous" : "next"
   }
  }))
 }, t.prototype.lazyLoad = function() {
  function t(t) {
   e("img[data-lazy]", t).each(function() {
    var t = e(this),
     i = e(this).attr("data-lazy"),
     n = document.createElement("img");
    n.onload = function() {
     t.animate({
      opacity: 0
     }, 100, function() {
      t.attr("src", i).animate({
       opacity: 1
      }, 200, function() {
       t.removeAttr("data-lazy").removeClass("slick-loading")
      }), r.$slider.trigger("lazyLoaded", [r, t, i])
     })
    }, n.onerror = function() {
     t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
    }, n.src = i
   })
  }
  var i, n, o, r = this;
  !0 === r.options.centerMode ? !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1), o = n + r.options.slidesToShow + 2) : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, o <= r.slideCount && o++)), t(r.$slider.find(".slick-slide").slice(n, o)), r.slideCount <= r.options.slidesToShow ? (i = r.$slider.find(".slick-slide"), t(i)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (i = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(i)) : 0 === r.currentSlide && (i = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(i))
 }, t.prototype.loadSlider = function() {
  var e = this;
  e.setPosition(), e.$slideTrack.css({
   opacity: 1
  }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
 }, t.prototype.next = t.prototype.slickNext = function() {
  this.changeSlide({
   data: {
    message: "next"
   }
  })
 }, t.prototype.orientationChange = function() {
  var e = this;
  e.checkResponsive(), e.setPosition()
 }, t.prototype.pause = t.prototype.slickPause = function() {
  var e = this;
  e.autoPlayClear(), e.paused = !0
 }, t.prototype.play = t.prototype.slickPlay = function() {
  var e = this;
  e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
 }, t.prototype.postSlide = function(e) {
  var t = this;
  t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
 }, t.prototype.prev = t.prototype.slickPrev = function() {
  this.changeSlide({
   data: {
    message: "previous"
   }
  })
 }, t.prototype.preventDefault = function(e) {
  e.preventDefault()
 }, t.prototype.progressiveLazyLoad = function(t) {
  t = t || 1;
  var i, n, o, r = this,
   s = e("img[data-lazy]", r.$slider);
  s.length ? (i = s.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
   i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
  }, o.onerror = function() {
   3 > t ? setTimeout(function() {
    r.progressiveLazyLoad(t + 1)
   }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
  }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
 }, t.prototype.refresh = function(t) {
  var i, n, o = this;
  n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
   currentSlide: i
  }), o.init(), t || o.changeSlide({
   data: {
    message: "index",
    index: i
   }
  }, !1)
 }, t.prototype.registerBreakpoints = function() {
  var t, i, n, o = this,
   r = o.options.responsive || null;
  if ("array" === e.type(r) && r.length) {
   o.respondTo = o.options.respondTo || "window";
   for (t in r)
    if (n = o.breakpoints.length - 1, i = r[t].breakpoint, r.hasOwnProperty(t)) {
     for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
     o.breakpoints.push(i), o.breakpointSettings[i] = r[t].settings
    }
   o.breakpoints.sort(function(e, t) {
    return o.options.mobileFirst ? e - t : t - e
   })
  }
 }, t.prototype.reinit = function() {
  var t = this;
  t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
 }, t.prototype.resize = function() {
  var t = this;
  e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
   t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
  }, 50))
 }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
  var n = this;
  return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e, !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
 }, t.prototype.setCSS = function(e) {
  var t, i, n = this,
   o = {};
  !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
 }, t.prototype.setDimensions = function() {
  var e = this;
  !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
   padding: "0px " + e.options.centerPadding
  }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
   padding: e.options.centerPadding + " 0px"
  })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
  var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
  !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
 }, t.prototype.setFade = function() {
  var t, i = this;
  i.$slides.each(function(n, o) {
   t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
    position: "relative",
    right: t,
    top: 0,
    zIndex: i.options.zIndex - 2,
    opacity: 0
   }) : e(o).css({
    position: "relative",
    left: t,
    top: 0,
    zIndex: i.options.zIndex - 2,
    opacity: 0
   })
  }), i.$slides.eq(i.currentSlide).css({
   zIndex: i.options.zIndex - 1,
   opacity: 1
  })
 }, t.prototype.setHeight = function() {
  var e = this;
  if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
   var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
   e.$list.css("height", t)
  }
 }, t.prototype.setOption = t.prototype.slickSetOption = function() {
  var t, i, n, o, r, s = this,
   a = !1;
  if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
  else if ("multiple" === r) e.each(n, function(e, t) {
   s.options[e] = t
  });
  else if ("responsive" === r)
   for (i in o)
    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[i]];
    else {
     for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1), t--;
     s.options.responsive.push(o[i])
    }
  a && (s.unload(), s.reinit())
 }, t.prototype.setPosition = function() {
  var e = this;
  e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
 }, t.prototype.setProps = function() {
  var e = this,
   t = document.body.style;
  e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
 }, t.prototype.setSlideClasses = function(e) {
  var t, i, n, o, r = this;
  i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
 }, t.prototype.setupInfinite = function() {
  var t, i, n, o = this;
  if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
   for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
   for (t = 0; n > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
   o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
    e(this).attr("id", "")
   })
  }
 }, t.prototype.interrupt = function(e) {
  var t = this;
  e || t.autoPlay(), t.interrupted = e
 }, t.prototype.selectHandler = function(t) {
  var i = this,
   n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
   o = parseInt(n.attr("data-slick-index"));
  return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
 }, t.prototype.slideHandler = function(e, t, i) {
  var n, o, r, s, a, l = null,
   d = this;
  return t = t || !1, !0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (!1 === t && d.asNavFor(e), n = e, l = d.getLeft(n), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void(!1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(s, function() {
   d.postSlide(n)
  }) : d.postSlide(n))) : !1 === d.options.infinite && !0 === d.options.centerMode && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void(!1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(s, function() {
   d.postSlide(n)
  }) : d.postSlide(n))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = 0 > n ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = d.getNavTarget(), (a = a.slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), !0 === d.options.fade ? (!0 !== i ? (d.fadeSlideOut(r), d.fadeSlide(o, function() {
   d.postSlide(o)
  })) : d.postSlide(o), void d.animateHeight()) : void(!0 !== i ? d.animateSlide(l, function() {
   d.postSlide(o)
  }) : d.postSlide(o))))
 }, t.prototype.startLoad = function() {
  var e = this;
  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
 }, t.prototype.swipeDirection = function() {
  var e, t, i, n, o = this;
  return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
 }, t.prototype.swipeEnd = function(e) {
  var t, i, n = this;
  if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
  if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
   switch (i = n.swipeDirection()) {
    case "left":
    case "down":
     t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
     break;
    case "right":
    case "up":
     t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
   }
   "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
  } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
 }, t.prototype.swipeHandler = function(e) {
  var t = this;
  if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
   case "start":
    t.swipeStart(e);
    break;
   case "move":
    t.swipeMove(e);
    break;
   case "end":
    t.swipeEnd(e)
  }
 }, t.prototype.swipeMove = function(e) {
  var t, i, n, o, r, s = this;
  return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (i = s.swipeDirection()) ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + n * o : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
 }, t.prototype.swipeStart = function(e) {
  var t, i = this;
  return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
 }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
  var e = this;
  null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
 }, t.prototype.unload = function() {
  var t = this;
  e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
 }, t.prototype.unslick = function(e) {
  var t = this;
  t.$slider.trigger("unslick", [t, e]), t.destroy()
 }, t.prototype.updateArrows = function() {
  var e = this;
  Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
 }, t.prototype.updateDots = function() {
  var e = this;
  null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
 }, t.prototype.visibility = function() {
  var e = this;
  e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
 }, e.fn.slick = function() {
  var e, i, n = this,
   o = arguments[0],
   r = Array.prototype.slice.call(arguments, 1),
   s = n.length;
  for (e = 0; s > e; e++)
   if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, r), void 0 !== i) return i;
  return n
 }
}),
function(e) {
 e.fn.cardtable = function(t) {
  var i = this,
   n = {
    headIndex: 0
   },
   o = e.extend({}, n, t);
  return t && t.headIndex ? t.headIndex : 0, i.each(function() {
   var t = e(this);
   if (!t.hasClass("stacktable")) {
    var i = e(this).prop("class"),
     n = e("<div></div>");
    void 0 !== o.myClass && n.addClass(o.myClass);
    var r, s, a, l, d, c = "";
    t.addClass("stacktable large-only"), r = t.find(">caption").clone(), s = t.find(">thead>tr,>tbody>tr,>tfoot>tr,>tr").eq(0), t.siblings().filter(".small-only").remove(), t.find(">tbody>tr").each(function() {
     a = "", l = "", d = e(this).prop("class"), e(this).find(">td,>th").each(function(t) {
      "" !== e(this).html() && (l += '<tr class="' + d + '">', s.find(">td,>th").eq(t).html() ? l += '<td class="st-key">' + s.find(">td,>th").eq(t).html() + "</td>" : l += '<td class="st-key"></td>', l += '<td class="st-val ' + e(this).prop("class") + '">' + e(this).html() + "</td>", l += "</tr>")
     }), c += '<table class=" ' + i + ' stacktable small-only"><tbody>' + a + l + "</tbody></table>"
    }), t.find(">tfoot>tr>td").each(function(t, n) {
     "" !== e.trim(e(n).text()) && (c += '<table class="' + i + ' stacktable small-only"><tbody><tr><td>' + e(n).html() + "</td></tr></tbody></table>")
    }), n.prepend(r), n.append(e(c)), t.before(n)
   }
  })
 }, e.fn.stacktable = function(t) {
  var i, n = this,
   o = {
    headIndex: 0,
    displayHeader: !0
   },
   r = e.extend({}, o, t);
  return i = t && t.headIndex ? t.headIndex : 0, n.each(function() {
   var t = e(this).prop("class"),
    n = e('<table class="' + t + ' stacktable small-only"><tbody></tbody></table>');
   void 0 !== r.myClass && n.addClass(r.myClass);
   var o, s, a, l, d, c, u, p = "";
   (o = e(this)).addClass("stacktable large-only"), s = o.find(">caption").clone(), a = o.find(">thead>tr,>tbody>tr,>tfoot>tr").eq(0), u = void 0 === o.data("display-header") ? r.displayHeader : o.data("display-header"), o.find(">tbody>tr").each(function(t) {
    l = "", d = "", c = e(this).prop("class"), 0 === t ? u && (p += '<tr class=" ' + c + ' "><th class="st-head-row st-head-row-main" colspan="2">' + e(this).find(">th,>td").eq(i).html() + "</th></tr>") : (e(this).find(">td,>th").each(function(t) {
     t === i ? l = '<tr class="' + c + '"><th class="st-head-row" colspan="2">' + e(this).html() + "</th></tr>" : "" !== e(this).html() && (d += '<tr class="' + c + '">', a.find(">td,>th").eq(t).html() ? d += '<td class="st-key">' + a.find(">td,>th").eq(t).html() + "</td>" : d += '<td class="st-key"></td>', d += '<td class="st-val ' + e(this).prop("class") + '">' + e(this).html() + "</td>", d += "</tr>")
    }), p += l + d)
   }), n.prepend(s), n.append(e(p)), o.before(n)
  })
 }, e.fn.stackcolumns = function(t) {
  var i = this,
   n = {},
   o = e.extend({}, n, t);
  return i.each(function() {
   var t = e(this),
    i = t.find(">caption").clone(),
    n = t.find(">thead>tr,>tbody>tr,>tfoot>tr").eq(0).find(">td,>th").length;
   if (!(n < 3)) {
    var r = e('<table class="stacktable small-only"></table>');
    void 0 !== o.myClass && r.addClass(o.myClass), t.addClass("stacktable large-only");
    for (var s = e("<tbody></tbody>"), a = 1; a < n;) t.find(">thead>tr,>tbody>tr,>tfoot>tr").each(function(t) {
     var i = e("<tr></tr>");
     0 === t && i.addClass("st-head-row st-head-row-main");
     var n = e(this).find(">td,>th").eq(0).clone().addClass("st-key"),
      o = a;
     if (e(this).find("*[colspan]").length) {
      var r = 0;
      e(this).find(">td,>th").each(function() {
       var t = e(this).attr("colspan");
       if (t ? (t = parseInt(t, 10), o -= t - 1, r + t > a && (o += r + t - a - 1), r += t) : r++, r > a) return !1
      })
     }
     var l = e(this).find(">td,>th").eq(o).clone().addClass("st-val").removeAttr("colspan");
     i.append(n, l), s.append(i)
    }), ++a;
    r.append(e(s)), r.prepend(i), t.before(r)
   }
  })
 }
}(jQuery), $(function() {
 function e(e, t, i, n) {
  0 != e.length && e.slick({
   autoplay: !1,
   autoplaySpeed: 5e3,
   prevArrow: t,
   nextArrow: i,
   touchMove: !1,
   draggable: !1,
   verticalSwiping: !1,
   appendDots: n,
   dots: !0,
   swipe: !1,
   swipeToSlide: !1,
   responsive: [{
    breakpoint: 769,
    settings: {
     arrows: !1,
     autoplay: !1,
     draggable: !0,
     swipe: !0,
     touchMove: !0,
     swipeToSlide: !0
    }
   }]
  })
 }
 $.fn.customerPopup = function(e, t, i, n) {
   e.preventDefault(), t = t || "500", i = i || "400", strResize = n ? "yes" : "no";
   var o = void 0 !== this.attr("title") ? this.attr("title") : "Social Share",
    r = "width=" + t + ",height=" + i + ",resizable=" + strResize;
   window.open(this.attr("href"), o, r).focus()
  }, e($(".header-slider-wrapper"), $(".header-slider-prev"), $(".header-slider-next"), $(".header-slider-dots-wrapper")), e($(".games-slider"), $(".games-slider-prev"), $(".games-slider-next"), $(".games-slider-dots-wrapper")), $("body").on("click", ".burger-menu", function() {
   $(this).toggleClass("open"), $(".page-menu").toggleClass("open-menu"), $(".menu-overlay").toggleClass("open-menu-overlay")
  }), $("body").on("click", ".menu-overlay", function() {
   $(this).toggleClass("open-menu-overlay"), $(".burger-menu").toggleClass("open"), $(".page-menu").toggleClass("open-menu")
  }), $("body").on("click", ".open_popup", function(e) {
   var t = $(".popup_onclick").find(".popup-description-message");
   $(this).hasClass("game-popup") ? t.text("Leave your e-mail we'll send you access to demo as fast as possible") : t.text("Leave your e-mail we'll contact you as fast as possible"), e.preventDefault(), $(".popup_onclick").fadeIn(300)
  }), $(".popup-wrapper").click(function(e) {
   e.stopPropagation()
  }), $("body").on("click", ".popup-window", function(e) {
   e.stopPropagation(), $(".popup").fadeOut(300)
  }), $(".close-popup").on("click", function(e) {
   e.stopPropagation(), $(".popup").fadeOut(300)
  }), $(".single-blog-table").stacktable(), $(window).on("scroll", function() {
   window.pageYOffset > 100 ? $(".burger-menu").addClass("colored-overlay") : $(".burger-menu").removeClass("colored-overlay")
  }), lightGallery(document.getElementById("aniimated-thumbnials"), {
   thumbnail: !0
  }),
  function(e) {
   0 != $(e).length && $("body").on("click", e, function(e) {
    window.history.go(-1)
   })
  }(".go-back"),
  function() {
   var e = Math.floor(Math.random() * $(".menu-game-wrapper").length);
   $(".menu-game-wrapper").eq(e).css("display", "block"), $("body").on("click", ".menu-game-descr a", function() {
    location.reload(!0)
   })
  }(), $(".waypoints").length > 0 && $(".waypoints").each(function(e) {
   var t = $(this);
   t.waypoint(function(e) {
    t.addClass("animated fadeInUp")
   }, {
    offset: "70%"
   })
  }), $(".share-link").each(function(e) {
   var t = $(this).attr("href") + window.location.href;
   $(this).attr("href", t)
  }), $(".share-link").on("click", function(e) {
   $(this).customerPopup(e)
  })
});
var jsonrpcId = 0;
$(function() {
 function e(e, t) {
  var i = $(e),
   n = i.attr("action"),
   o = {};
  i.serializeArray().map(function(e) {
   o[e.name] = e.value
  }), $.ajax({
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
   },
   dataType: "json",
   type: "POST",
   url: n,
   data: JSON.stringify({
    id: jsonrpcId++,
    jsonrpc: "2.0",
    method: "Email.Send",
    params: o
   })
  }).always(function(e) {
   e.result && !e.error ? t(i) : alert(e.error.message)
  })
 }
 $("form.feedback").validate({
  messages: {
   Name: "Is required",
   Email: {
    required: "Is required",
    email: "E-mail is not valid"
   },
   Message: "Is required"
  },
  errorElement: "span",
  errorPlacement: function(e, t) {
   e.insertAfter(t)
  },
  submitHandler: function(t) {
   yaCounter48502577.reachGoal("user_submit_feedback_form"), e(t, function(e) {
    $(".popup_onclick").fadeOut(300), e.trigger("reset"), $(".ty-popup").find(".ty-text").text("Your message has been successfully sent. We'll contact you soon"), $(".ty-popup").fadeIn(300)
   })
  }
 }), $(".inline-feedback").validate({
  messages: {
   Name: "is required",
   Email: {
    required: "Is required",
    email: "E-mail is not valid"
   },
   Message: "Is required"
  },
  errorElement: "span",
  errorPlacement: function(e, t) {
   e.insertAfter(t)
  },
  submitHandler: function(t) {
   yaCounter48502577.reachGoal("user_submit_inline_feedback_form"), e(t, function(e) {
    e.trigger("reset"), $(".ty-popup").find(".ty-text").text("Your message has been successfully sent. We'll contact you soon"), $(".ty-popup").fadeIn(300)
   })
  }
 }), $("form.subscribe").validate({
  messages: {
   Email: {
    required: "Is required",
    email: "E-mail is not valid"
   }
  },
  errorElement: "span",
  errorPlacement: function(e, t) {
   e.insertAfter(t)
  },
  submitHandler: function(t) {
   yaCounter48502577.reachGoal("user_subscribe"), e(t, function(e) {
    $(".ty-popup").find(".ty-text").text("You have successfully signed up for a newsletter"), $(".ty-popup").fadeIn(300)
   })
  }
 })
});
$(function() {
  $('.header-slider').slick({
    dots: true,
    dotsClass: 'header-slick-dots',
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
$(function() {
  $('.slider-games').slick({
    dots: true,
    dotsClass: 'games-slick-dots',
    infinite: true,
    arrows: false,
    //prevArrow:"<button type='button' class='slick-prev'><img src='images/icn_arrow_previous.png' alt=''></button>",
    //nextArrow:"<button type='button' class='slick-next'><img src='images/icn_arrow_next.png' alt=''></button>"
  });
});
$(function() {
  $(".play-btn").parent().click(function () {
  if($(this).children(".video").get(0).paused){
    $(this).children(".video").get(0).play();
    $(this).children(".video").attr('controls', 'controls');
    $(this).children(".play-btn").fadeOut();
    $(this).addClass('no-after');
    $(window).innerWidth() > 769 && $('.slider-footer').fadeOut();
    }else{
      $(this).children(".video").get(0).pause();
      $(this).children(".video").removeAttr('controls');
      $(this).children(".play-btn").fadeIn();
      $('.slider-footer').fadeIn();
    }
  });
});

$(function() {
  $('.slider-games').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var currentSlide = $(this).slick('slickCurrentSlide');
  if (currentSlide == '0') {
    $('#coin_1, #coin_2').show().fadeIn(1000);
    $('#title-mobile').text("Riot");
    $('#info-icon-link').html('<a href="riot.html">i</a>')
  }
  if (currentSlide == '1') {
    $('#coin_1, #coin_2').hide().fadeOut(1000);
    $('#title-mobile').text("Purple Pills");
    $('#info-icon-link').html('<a href="purplepills.html">i</a>')

  }
  if (currentSlide == '2') {
    $('#coin_1, #coin_2').hide().fadeOut(1000);
    $('#title-mobile').text("HELL'SING");
    $('#info-icon-link').html('<a href="hellsing.html">i</a>')
  }
  if (currentSlide == '3') {
    $('#coin_1, #coin_2').hide().fadeOut(1000);
    $('#title-mobile').text("RE KILL");
    $('#info-icon-link').html('<a href="rekill.html">i</a>')
  }
  $(function () {
    if ($(".video").get(1).paused) {
      console.log('paused');
    } else {
      $(".video").get(1).pause();
      console.log('stopped');
    }
    return false;
    });
    $(function () {
      if ($(".video").get(2).paused) {
        console.log('paused');
      } else {
        $(".video").get(2).pause();
        console.log('stopped');
      }
      return false;
      });
      $(function () {
        if ($(".video").get(3).paused) {
          console.log('paused');
        } else {
          $(".video").get(3).pause();
          console.log('stopped');
        }
        return false;
        });
  });
});
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){
		selectedClass = $(this).attr("data-rel");
    $(this).addClass('active').siblings().removeClass('active');
    $("#portfolio").fadeTo(300, 0.01, function () {
      $(".comingsoon").css('order', '-1');
    });
		$("#portfolio .top-row-games .tile").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    $(window).innerWidth() > 1400 && $("."+selectedClass).removeClass('tile-big');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(700, 1);
    }, 400);
	});
});
$(function () {
  var thePath = 'https://play.mascot.games/';  //production:  https://play.mascot.games/  *****  test: http://demo-mascotgames.devlab.bar/
  $(".colored-btn").click(function() {
  var btnClassName = $(this).attr("class");
  if (btnClassName.indexOf('anks') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'anksunamun.html';
    });
  }
  if (btnClassName.indexOf('bmb') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'bamboo.html';
    });
  }
  if (btnClassName.indexOf('ccs') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'cancansaloon.html';
    });
  }
  if (btnClassName.indexOf('hsg') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'hellsing.html';
    });
  }
  if (btnClassName.indexOf('lpd') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'lionspride.html';
    });
  }
  if (btnClassName.indexOf('mrm') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'mermaid.html';
    });
  }
  if (btnClassName.indexOf('nht') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'northernheat.html';
    });
  }
  if (btnClassName.indexOf('rkl') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'rekill.html';
    });
  }
  if (btnClassName.indexOf('nht') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'northernheat.html';
    });
  }
  if (btnClassName.indexOf('rte') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'rite.html';
    });
  }
  if (btnClassName.indexOf('tmb') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'thetomb.html';
    });
  }
  if (btnClassName.indexOf('vnt') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'venetian.html';
    });
  }
  if (btnClassName.indexOf('frv') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'fruitvegas.html';
    });
  }
  if (btnClassName.indexOf('prp') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'purplepills.html';
    });
  }
  if (btnClassName.indexOf('mer') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'merlin.html';
    });
  }
  if (btnClassName.indexOf('wsp') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'wildspirit.html';
    });
  }
  if (btnClassName.indexOf('leg') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'legioner.html';
    });
  }
  if (btnClassName.indexOf('blk') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'blackjack.html';
    });
  }
  if (btnClassName.indexOf('grf') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'gryphon.html';
    });
  }
  if (btnClassName.indexOf('bny') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'benny.html';
    });
  }
  if (btnClassName.indexOf('bac') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'baccarat.html';
    });
  }
  if (btnClassName.indexOf('hol') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'holdem.html';
    });
  }
  if (btnClassName.indexOf('hor') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'horde.html';
    });
  }
  if (btnClassName.indexOf('gem') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'gemz.html';
    });
  }
  if (btnClassName.indexOf('ken') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'keno.html';
    });
  }
  if (btnClassName.indexOf('rio') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'riot.html';
    });
  }
  if (btnClassName.indexOf('rob') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'robin.html';
    });
  }
  if (btnClassName.indexOf('mac') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'fruit-macau.html';
    });
  }
  if (btnClassName.indexOf('mon') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'fruit-monaco.html';
    });
  }
  if (btnClassName.indexOf('qos') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'queen-of-spades.html';
    });
  }
  if (btnClassName.indexOf('cor') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'three-corsairs.html';
    });
  }
  if (btnClassName.indexOf('msc') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'merry-scary-christmas.html';
    });
  }
  if (btnClassName.indexOf('pri') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'prince-of-persia.html';
    });
  }
  if (btnClassName.indexOf('mth') >= 0) {
    $(this).attr('href', function() {
      return thePath + 'the-myth.html';
    });
  }
  });
});
$(function () {
  //$(".game-overlay a, .game-overlay__btn a").one("click", false, function(e){
  //   if ("ontouchstart" in document.documentElement) {
  //     e.preventDefault();
//     }
//  });
if ("ontouchstart" in document.documentElement) {
   $(".game-overlay a, .game-overlay__btn a").one("click", false, function(e){
     e.preventDefault();
   });
   $(".tile .game-overlay").click(function() {
     if ($(this).css("opacity") == 0) {
       $(this).css("opacity", "1");
       $(".tile .game-overlay").not(this).css("opacity", "0");
     } else {
       $(this).css("opacity", "0");
     }
   });
 }
});

//$(function () {
// $('a[href*="html"]').on('touchstart', function(event) {
//    event.stopPropagation();
//    console.log('to-demo');
//  });

//});

$(document).ready(function () {
    $(".clickarea").click(function () {
        window.open($("#ice-banner").find("a:first").attr("href"));
        return false;
    });

    $("#ice-banner").hover(function () {
        window.status = $(this).find("a:first").attr("href");
    }, function () {
        window.status = "www.igblive.com";
    });

    $(window).scroll(function(){
     if($(window).scrollTop()<200){
           $('.meet-us__wrap').stop(true,true).fadeIn(5000);
     } else {
           $('.meet-us__wrap').stop(true,true).fadeOut(5000);
     }
   });

   $('.meet-us__links a[href^="blog-sigma.html"]').click(function() {
     gtag('event', 'sigma-tab-click', { 'event_category': 'sigma-tab', 'event_label': 'sigma giveaway' });
   });
   $('.meet-us__links a[href^="blog-ice-london.html"]').click(function() {
     gtag('event', 'icelondon-tab-click', { 'event_category': 'icelondon-tab', 'event_label': 'icelondon giveaway' });
   });

   if(window.location.href.indexOf("riskandbuy") !== -1) {
    setTimeout(function() {
     $('[data-rel="riskandbuy"]').trigger("click");
     },1000);
    }
   if(window.location.href.indexOf("profitgames") !== -1) {
    setTimeout(function() {
     $('[data-rel="profitgames"]').trigger("click");
     },1000);
    }
    if(window.location.href.indexOf("trafficgames") !== -1) {
   setTimeout(function() {
     $('[data-rel="trafficgames"]').trigger("click");
     },1000);
   }
     if(window.location.href.indexOf("tablegames") !== -1) {
    setTimeout(function() {
      $('[data-rel="tablegames"]').trigger("click");
      },1000);
    }
    if(window.location.href.indexOf("lotteries") !== -1) {
    setTimeout(function() {
     $('[data-rel="lotteries"]').trigger("click");
     },1000);
    }
     if(window.location.href.indexOf("videoslots") !== -1) {
    setTimeout(function() {
      $('[data-rel="videoslots"]').trigger("click");
      },1000);
    }
    if(window.location.href.indexOf("topgames") !== -1) {
    setTimeout(function() {
     $('[data-rel="topgames"]').trigger("click");
     },1000);
    }

});
(function($){

	$.fn.cookieConsent = function(action) {

		var dropCookie = true;			// false disables the Cookie, allowing you to style the banner
		var cookieDuration = 365;		// Number of days before the cookie expires, and the banner reappears
		var cookieName = 'cc-cookie';	// Cookiename
		var cookieValue = '1';			// Value of cookie
		var act = action || 'init';

		function createDiv(){
			$('body').append($("<div>").attr('id','cookie-law').addClass('cc-bar').html('<a href="#null" class="cc-btn colored-btn">Agree and continue</a><p class="cc-msg">COOKIE POLICY</br>We use cookies to ensure that we give you the best experience on our website. By using the website you agree to our use of cookies. <a class="cc_more_info" href="privacypolicy.html" rel="nofollow" title="Privacy &amp; Cookies Policy">Read more</a></p>'));
			$('#cookie-law .cc-btn').on('click', function() {
				$(window).cookieConsent('accept');
			});
		}

		function createCookie(name,value,days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			 }
			 if(dropCookie) {
				  document.cookie = name+"="+value+expires+"; path=/";
			 }
		}

		function checkCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}

		function accept(){
			createCookie(cookieName, cookieValue, cookieDuration);
			$('#cookie-law').remove();
		}

		if (act == 'accept') {
			accept();
		} else {
			if(checkCookie(cookieName) !== cookieValue){
				createDiv();
			}
		}
	};
})(jQuery);

$(document).ready(function () {
	$(window).cookieConsent();
});

function detect(type) {
    const userAgent = window.navigator.userAgent
    return userAgent.includes(type)
  }

  const iOS = detect('iPhone') || detect('iPad') || detect('iPod')
  const android = detect('Android')

  const phone = detect('iPhone') || (detect('Mobile') && detect('Android'))
  const tablet = detect('iPad') || (!detect('Mobile') && detect('Android'))


if (( phone === true || tablet === true) && $(window).innerWidth() < 1025 )
{
  document.addEventListener("DOMContentLoaded", function(event) {
  var videoSrc = document.getElementById('video-src');
  videoSrc.setAttribute("src", "");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".regular-partners__wrap, #media .regular-partners__wrap");
     const preventClick = (e) => {
       e.preventDefault();
       e.stopImmediatePropagation();
     }
     let isDown = false;
     let isDragged = false;
     let startX;
     let scrollLeft;

     slider.addEventListener("mousedown", e => {
       isDown = true;
       slider.classList.add("active");
       startX = e.pageX - slider.offsetLeft;
       scrollLeft = slider.scrollLeft;
     });
     slider.addEventListener("mouseleave", () => {
       isDown = false;
       slider.classList.remove("active");
     });
     slider.addEventListener("mouseup", (e) => {
       isDown = false;
       const elements = document.querySelectorAll("a");
       if(isDragged){
           for(let i = 0; i<elements.length; i++){
                 elements[i].addEventListener("click", preventClick);
           }
       }
       else{
           for(let i = 0; i<elements.length; i++){
                 elements[i].removeEventListener("click", preventClick);
           }
       }
       slider.classList.remove("active");
       isDragged =  false;
     });
     slider.addEventListener("mousemove", e => {
       if (!isDown) return;
       isDragged =  true;
       e.preventDefault();
       const x = e.pageX - slider.offsetLeft;
       const walk = (x - startX) * 2;
       slider.scrollLeft = scrollLeft - walk;
       console.log(walk);
     });
});

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector("#media .regular-partners__wrap");
     const preventClick = (e) => {
       e.preventDefault();
       e.stopImmediatePropagation();
     }
     let isDown = false;
     let isDragged = false;
     let startX;
     let scrollLeft;

     slider.addEventListener("mousedown", e => {
       isDown = true;
       slider.classList.add("active");
       startX = e.pageX - slider.offsetLeft;
       scrollLeft = slider.scrollLeft;
     });
     slider.addEventListener("mouseleave", () => {
       isDown = false;
       slider.classList.remove("active");
     });
     slider.addEventListener("mouseup", (e) => {
       isDown = false;
       const elements = document.querySelectorAll("a");
       if(isDragged){
           for(let i = 0; i<elements.length; i++){
                 elements[i].addEventListener("click", preventClick);
           }
       }
       else{
           for(let i = 0; i<elements.length; i++){
                 elements[i].removeEventListener("click", preventClick);
           }
       }
       slider.classList.remove("active");
       isDragged =  false;
     });
     slider.addEventListener("mousemove", e => {
       if (!isDown) return;
       isDragged =  true;
       e.preventDefault();
       const x = e.pageX - slider.offsetLeft;
       const walk = (x - startX) * 2;
       slider.scrollLeft = scrollLeft - walk;
       console.log(walk);
     });
});
