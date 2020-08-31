/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
	"use strict";
	var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {},
		o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		}, x = function (e) {
			return null != e && e === e.window
		}, c = {type: !0, src: !0, nonce: !0, noModule: !0};

	function b(e, t, n) {
		var r, i, o = (n = n || E).createElement("script");
		if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}

	var f = "3.4.1", k = function (e, t) {
		return new k.fn.init(e, t)
	}, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function d(e) {
		var t = !!e && "length" in e && e.length, n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}

	k.fn = k.prototype = {
		jquery: f, constructor: k, length: 0, toArray: function () {
			return s.call(this)
		}, get: function (e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		}, pushStack: function (e) {
			var t = k.merge(this.constructor(), e);
			return t.prevObject = this, t
		}, each: function (e) {
			return k.each(this, e)
		}, map: function (n) {
			return this.pushStack(k.map(this, function (e, t) {
				return n.call(e, t, e)
			}))
		}, slice: function () {
			return this.pushStack(s.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (e) {
			var t = this.length, n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		}, end: function () {
			return this.prevObject || this.constructor()
		}, push: u, sort: t.sort, splice: t.splice
	}, k.extend = k.fn.extend = function () {
		var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, k.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
			throw new Error(e)
		}, noop: function () {
		}, isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
		}, isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		}, globalEval: function (e, t) {
			b(e, {nonce: t && t.nonce})
		}, each: function (e, t) {
			var n, r = 0;
			if (d(e)) {
				for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
			} else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
			return e
		}, trim: function (e) {
			return null == e ? "" : (e + "").replace(p, "")
		}, makeArray: function (e, t) {
			var n = t || [];
			return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		}, inArray: function (e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		}, merge: function (e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		}, grep: function (e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		}, map: function (e, t, n) {
			var r, i, o = 0, a = [];
			if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g.apply([], a)
		}, guid: 1, support: y
	}), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var h = function (n) {
		var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0,
			r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function (e, t) {
				return e === t && (l = !0), 0
			}, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
				return -1
			},
			R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
			$ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
			F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			_ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + $),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			}, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
			te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) {
				var r = "0x" + t - 65536;
				return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			}, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			}, oe = function () {
				T()
			}, ae = be(function (e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {dir: "parentNode", next: "legend"});
		try {
			H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length ? function (e, t) {
					L.apply(e, O.call(t))
				} : function (e, t) {
					var n = e.length, r = 0;
					while (e[n++] = t[r++]) ;
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
					if (9 === p) {
						if (!(a = e.getElementById(i))) return n;
						if (a.id === i) return n.push(a), n
					} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
				} else {
					if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
					if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
				}
				if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && U.test(t)) {
						(s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;
						while (o--) l[o] = "#" + s + " " + xe(l[o]);
						c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						A(t, !0)
					} finally {
						s === k && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(B, "$1"), e, n, r)
		}

		function ue() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function le(e) {
			return e[k] = !0, e
		}

		function ce(e) {
			var t = C.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			var n = e.split("|"), r = n.length;
			while (r--) b.attrHandle[n[r]] = t
		}

		function pe(e, t) {
			var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n) while (n = n.nextSibling) if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function (e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function ve(a) {
			return le(function (o) {
				return o = +o, le(function (e, t) {
					var n, r = a([], e.length, o), i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		for (e in d = se.support = {}, i = se.isXML = function (e) {
			var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
			return !Y.test(t || n && n.nodeName || "HTML")
		}, T = se.setDocument = function (e) {
			var t, n, r = e ? e.ownerDocument || e : m;
			return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), d.getElementsByTagName = ce(function (e) {
				return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
			}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
				return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
			}), d.getById ? (b.filter.ID = function (e) {
				var t = e.replace(te, ne);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}, b.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && E) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (b.filter.ID = function (e) {
				var n = e.replace(te, ne);
				return function (e) {
					var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return t && t.value === n
				}
			}, b.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && E) {
					var n, r, i, o = t.getElementById(e);
					if (o) {
						if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
						i = t.getElementsByName(e), r = 0;
						while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
					}
					return []
				}
			}), b.find.TAG = d.getElementsByTagName ? function (e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var n, r = [], i = 0, o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, b.find.CLASS = d.getElementsByClassName && function (e, t) {
				if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
			}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
				a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
			}), ce(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = C.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
			})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
				d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
			}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function (e, t) {
				if (t) while (t = t.parentNode) if (t === e) return !0;
				return !1
			}, D = t ? function (e, t) {
				if (e === t) return l = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
			} : function (e, t) {
				if (e === t) return l = !0, 0;
				var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
				if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
				if (i === o) return pe(e, t);
				n = e;
				while (n = n.parentNode) a.unshift(n);
				n = t;
				while (n = n.parentNode) s.unshift(n);
				while (a[r] === s[r]) r++;
				return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
			}), C
		}, se.matches = function (e, t) {
			return se(e, null, null, t)
		}, se.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
				var n = c.call(e, t);
				if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch (e) {
				A(t, !0)
			}
			return 0 < se(t, C, null, [e]).length
		}, se.contains = function (e, t) {
			return (e.ownerDocument || e) !== C && T(e), y(e, t)
		}, se.attr = function (e, t) {
			(e.ownerDocument || e) !== C && T(e);
			var n = b.attrHandle[t.toLowerCase()],
				r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
			return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}, se.escape = function (e) {
			return (e + "").replace(re, ie)
		}, se.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, se.uniqueSort = function (e) {
			var t, n = [], r = 0, i = 0;
			if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
				while (t = e[i++]) t === e[i] && (r = n.push(i));
				while (r--) e.splice(n[r], 1)
			}
			return u = null, e
		}, o = se.getText = function (e) {
			var t, n = "", r = 0, i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else while (t = e[r++]) n += o(t);
			return n
		}, (b = se.selectors = {
			cacheLength: 50,
			createPseudo: le,
			match: G,
			attrHandle: {},
			find: {},
			relative: {
				">": {dir: "parentNode", first: !0},
				" ": {dir: "parentNode"},
				"+": {dir: "previousSibling", first: !0},
				"~": {dir: "previousSibling"}
			},
			preFilter: {
				ATTR: function (e) {
					return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				}, CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
				}, PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(te, ne).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				}, CLASS: function (e) {
					var t = p[e + " "];
					return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				}, ATTR: function (n, r, i) {
					return function (e) {
						var t = se.attr(e, n);
						return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
					}
				}, CHILD: function (h, e, t, g, v) {
					var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
					return 1 === g && 0 === v ? function (e) {
						return !!e.parentNode
					} : function (e, t, n) {
						var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
							f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
						if (c) {
							if (y) {
								while (l) {
									a = e;
									while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
									u = l = "only" === h && !u && "nextSibling"
								}
								return !0
							}
							if (u = [m ? c.firstChild : c.lastChild], m && p) {
								d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
								while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
									i[h] = [S, s, d];
									break
								}
							} else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
							return (d -= v) === g || d % g == 0 && 0 <= d / g
						}
					}
				}, PSEUDO: function (e, o) {
					var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
					return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
						var n, r = a(e, o), i = r.length;
						while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
					}) : function (e) {
						return a(e, 0, t)
					}) : a
				}
			},
			pseudos: {
				not: le(function (e) {
					var r = [], i = [], s = f(e.replace(B, "$1"));
					return s[k] ? le(function (e, t, n, r) {
						var i, o = s(e, null, r, []), a = e.length;
						while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
					}) : function (e, t, n) {
						return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
					}
				}), has: le(function (t) {
					return function (e) {
						return 0 < se(t, e).length
					}
				}), contains: le(function (t) {
					return t = t.replace(te, ne), function (e) {
						return -1 < (e.textContent || o(e)).indexOf(t)
					}
				}), lang: le(function (n) {
					return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
						var t;
						do {
							if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
						} while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				}), target: function (e) {
					var t = n.location && n.location.hash;
					return t && t.slice(1) === e.id
				}, root: function (e) {
					return e === a
				}, focus: function (e) {
					return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				}, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				}, selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				}, empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
					return !0
				}, parent: function (e) {
					return !b.pseudos.empty(e)
				}, header: function (e) {
					return J.test(e.nodeName)
				}, input: function (e) {
					return Q.test(e.nodeName)
				}, button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				}, text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				}, first: ve(function () {
					return [0]
				}), last: ve(function (e, t) {
					return [t - 1]
				}), eq: ve(function (e, t, n) {
					return [n < 0 ? n + t : n]
				}), even: ve(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}), odd: ve(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}), lt: ve(function (e, t, n) {
					for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
					return e
				}), gt: ve(function (e, t, n) {
					for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}).pseudos.nth = b.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) b.pseudos[e] = de(e);
		for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

		function me() {
		}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(s, e, t) {
			var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
			return e.first ? function (e, t, n) {
				while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
				return !1
			} : function (e, t, n) {
				var r, i, o, a = [S, p];
				if (n) {
					while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
				} else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
					if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
					if ((i[c] = a)[2] = s(e, t, n)) return !0
				}
				return !1
			}
		}

		function we(i) {
			return 1 < i.length ? function (e, t, n) {
				var r = i.length;
				while (r--) if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function Ce(d, h, g, v, y, e) {
			return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
				var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
					p = g ? y || (e ? d : l || v) ? [] : t : f;
				if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;
					while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;
							while (o--) (a = p[o]) && i.push(f[o] = a);
							y(null, p = [], i, r)
						}
						o = p.length;
						while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
			})
		}

		function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
				return e === i
			}, a, !0), l = be(function (e) {
				return -1 < P(i, e)
			}, a, !0), c = [function (e, t, n) {
				var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
				return i = null, r
			}]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
				if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
					for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
					return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
				}
				c.push(t)
			}
			return we(c)
		}

		return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
			var n, r, i, o, a, s, u, l = x[e + " "];
			if (l) return t ? 0 : l.slice(0);
			a = e, s = [], u = b.preFilter;
			while (a) {
				for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
					value: n,
					type: r[0].replace(B, " ")
				}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
		}, f = se.compile = function (e, t) {
			var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
			if (!a) {
				t || (t = h(e)), n = t.length;
				while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
				(a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
					var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
						h = S += null == p ? 1 : Math.random() || .1, g = d.length;
					for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument === C || (T(o), n = !E);
							while (s = v[a++]) if (s(o, t || C, n)) {
								r.push(o);
								break
							}
							i && (S = h)
						}
						m && ((o = !s && o) && u--, e && c.push(o))
					}
					if (u += l, m && l !== u) {
						a = 0;
						while (s = y[a++]) s(c, f, t, n);
						if (e) {
							if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
							f = Te(f)
						}
						H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
					}
					return i && (S = h, w = p), c
				}, m ? le(r) : r))).selector = e
			}
			return a
		}, g = se.select = function (e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				i = G.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;
					if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
						break
					}
				}
			}
			return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
		}, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
			return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
		}), ce(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || fe("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), d.attributes && ce(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || fe("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ce(function (e) {
			return null == e.getAttribute("disabled")
		}) || fe(R, function (e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), se
	}(C);
	k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
	var T = function (e, t, n) {
		var r = [], i = void 0 !== n;
		while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
			if (i && k(e).is(n)) break;
			r.push(e)
		}
		return r
	}, S = function (e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}, N = k.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}

	var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(e, n, r) {
		return m(n) ? k.grep(e, function (e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? k.grep(e, function (e) {
			return e === n !== r
		}) : "string" != typeof n ? k.grep(e, function (e) {
			return -1 < i.call(n, e) !== r
		}) : k.filter(n, e, r)
	}

	k.filter = function (e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, k.fn.extend({
		find: function (e) {
			var t, n, r = this.length, i = this;
			if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
				for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
			return 1 < r ? k.uniqueSort(n) : n
		}, filter: function (e) {
			return this.pushStack(j(this, e || [], !1))
		}, not: function (e) {
			return this.pushStack(j(this, e || [], !0))
		}, is: function (e) {
			return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
		}
	});
	var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(k.fn.init = function (e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || q, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
	}).prototype = k.fn, q = k(E);
	var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

	function P(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType) ;
		return e
	}

	k.fn.extend({
		has: function (e) {
			var t = k(e, this), n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
			})
		}, closest: function (e, t) {
			var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
			if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
				o.push(n);
				break
			}
			return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
		}, index: function (e) {
			return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (e, t) {
			return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
		}, addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), k.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		}, parents: function (e) {
			return T(e, "parentNode")
		}, parentsUntil: function (e, t, n) {
			return T(e, "parentNode", n)
		}, next: function (e) {
			return P(e, "nextSibling")
		}, prev: function (e) {
			return P(e, "previousSibling")
		}, nextAll: function (e) {
			return T(e, "nextSibling")
		}, prevAll: function (e) {
			return T(e, "previousSibling")
		}, nextUntil: function (e, t, n) {
			return T(e, "nextSibling", n)
		}, prevUntil: function (e, t, n) {
			return T(e, "previousSibling", n)
		}, siblings: function (e) {
			return S((e.parentNode || {}).firstChild, e)
		}, children: function (e) {
			return S(e.firstChild)
		}, contents: function (e) {
			return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
		}
	}, function (r, i) {
		k.fn[r] = function (e, t) {
			var n = k.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var R = /[^\x20\t\r\n\f]+/g;

	function M(e) {
		return e
	}

	function I(e) {
		throw e
	}

	function W(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}

	k.Callbacks = function (r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
			n[t] = !0
		}), n) : k.extend({}, r);
		var i, t, o, a, s = [], u = [], l = -1, c = function () {
			for (a = a || r.once, o = i = !0; u.length; l = -1) {
				t = u.shift();
				while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
			}
			r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
		}, f = {
			add: function () {
				return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
					k.each(e, function (e, t) {
						m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
					})
				}(arguments), t && !i && c()), this
			}, remove: function () {
				return k.each(arguments, function (e, t) {
					var n;
					while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
				}), this
			}, has: function (e) {
				return e ? -1 < k.inArray(e, s) : 0 < s.length
			}, empty: function () {
				return s && (s = []), this
			}, disable: function () {
				return a = u = [], s = t = "", this
			}, disabled: function () {
				return !s
			}, lock: function () {
				return a = u = [], t || i || (s = t = ""), this
			}, locked: function () {
				return !!a
			}, fireWith: function (e, t) {
				return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
			}, fire: function () {
				return f.fireWith(this, arguments), this
			}, fired: function () {
				return !!o
			}
		};
		return f
	}, k.extend({
		Deferred: function (e) {
			var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
				i = "pending", a = {
					state: function () {
						return i
					}, always: function () {
						return s.done(arguments).fail(arguments), this
					}, "catch": function (e) {
						return a.then(null, e)
					}, pipe: function () {
						var i = arguments;
						return k.Deferred(function (r) {
							k.each(o, function (e, t) {
								var n = m(i[t[4]]) && i[t[4]];
								s[t[1]](function () {
									var e = n && n.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					}, then: function (t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function () {
								var n = this, r = arguments, e = function () {
									var e, t;
									if (!(i < u)) {
										if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
										t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
									}
								}, t = s ? e : function () {
									try {
										e()
									} catch (e) {
										k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
									}
								};
								i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
							}
						}

						return k.Deferred(function (e) {
							o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
						}).promise()
					}, promise: function (e) {
						return null != e ? k.extend(e, a) : a
					}
				}, s = {};
			return k.each(o, function (e, t) {
				var n = t[2], r = t[5];
				a[t[1]] = n.add, r && n.add(function () {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		}, when: function (e) {
			var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) {
				return function (e) {
					r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
				}
			};
			if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
			while (t--) W(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	k.Deferred.exceptionHook = function (e, t) {
		C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, k.readyException = function (e) {
		C.setTimeout(function () {
			throw e
		})
	};
	var F = k.Deferred();

	function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
	}

	k.fn.ready = function (e) {
		return F.then(e)["catch"](function (e) {
			k.readyException(e)
		}), this
	}, k.extend({
		isReady: !1, readyWait: 1, ready: function (e) {
			(!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
		}
	}), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
	var _ = function (e, t, n, r, i, o, a) {
		var s = 0, u = e.length, l = null == n;
		if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
			return l.call(k(e), n)
		})), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
		return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
	}, z = /^-ms-/, U = /-([a-z])/g;

	function X(e, t) {
		return t.toUpperCase()
	}

	function V(e) {
		return e.replace(z, "ms-").replace(U, X)
	}

	var G = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function Y() {
		this.expando = k.expando + Y.uid++
	}

	Y.uid = 1, Y.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		}, set: function (e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r];
			return i
		}, get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
		}, access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		}, remove: function (e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
					while (n--) delete r[t[n]]
				}
				(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		}, hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !k.isEmptyObject(t)
		}
	};
	var Q = new Y, J = new Y, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

	function ee(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
			try {
				n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
			} catch (e) {
			}
			J.set(e, t, n)
		} else n = void 0;
		return n
	}

	k.extend({
		hasData: function (e) {
			return J.hasData(e) || Q.hasData(e)
		}, data: function (e, t, n) {
			return J.access(e, t, n)
		}, removeData: function (e, t) {
			J.remove(e, t)
		}, _data: function (e, t, n) {
			return Q.access(e, t, n)
		}, _removeData: function (e, t) {
			Q.remove(e, t)
		}
	}), k.fn.extend({
		data: function (n, e) {
			var t, r, i, o = this[0], a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
					Q.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function () {
				J.set(this, n)
			}) : _(this, function (e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
				this.each(function () {
					J.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		}, removeData: function (e) {
			return this.each(function () {
				J.remove(this, e)
			})
		}
	}), k.extend({
		queue: function (e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
		}, dequeue: function (e, t) {
			t = t || "fx";
			var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
				k.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		}, _queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return Q.get(e, n) || Q.access(e, n, {
				empty: k.Callbacks("once memory").add(function () {
					Q.remove(e, [t + "queue", n])
				})
			})
		}
	}), k.fn.extend({
		queue: function (t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
				var e = k.queue(this, t, n);
				k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
			})
		}, dequeue: function (e) {
			return this.each(function () {
				k.dequeue(this, e)
			})
		}, clearQueue: function (e) {
			return this.queue(e || "fx", [])
		}, promise: function (e, t) {
			var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
				--r || i.resolveWith(o, [o])
			};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
		re = ["Top", "Right", "Bottom", "Left"], ie = E.documentElement, oe = function (e) {
			return k.contains(e.ownerDocument, e)
		}, ae = {composed: !0};
	ie.getRootNode && (oe = function (e) {
		return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
	});
	var se = function (e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
	}, ue = function (e, t, n, r) {
		var i, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
		return i
	};

	function le(e, t, n, r) {
		var i, o, a = 20, s = r ? function () {
				return r.cur()
			} : function () {
				return k.css(e, t, "")
			}, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, k.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}

	var ce = {};

	function fe(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}

	k.fn.extend({
		show: function () {
			return fe(this, !0)
		}, hide: function () {
			return fe(this)
		}, toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				se(this) ? k(this).show() : k(this).hide()
			})
		}
	});
	var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
		ge = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ve(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
	}

	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
	}

	ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
	var me, xe, be = /<|&#?\w+;/;

	function we(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (be.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++]) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}

	me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
	var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/;

	function ke() {
		return !0
	}

	function Se() {
		return !1
	}

	function Ne(e, t) {
		return e === function () {
			try {
				return E.activeElement
			} catch (e) {
			}
		}() == ("focus" === t)
	}

	function Ae(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e;
		return 1 === o && (a = i, (i = function (e) {
			return k().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
			k.event.add(this, t, i, r, n)
		})
	}

	function De(e, i, o) {
		o ? (Q.set(e, i, !1), k.event.add(e, i, {
			namespace: !1, handler: function (e) {
				var t, n, r = Q.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
				} else r.length && (Q.set(this, i, {value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
			}
		})) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
	}

	k.event = {
		global: {}, add: function (t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
			if (v) {
				n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
					return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
				}), l = (e = (e || "").match(R) || [""]).length;
				while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && k.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
			}
		}, remove: function (e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "").match(R) || [""]).length;
				while (l--) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
					f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
					while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
					a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
				} else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
				k.isEmptyObject(u) && Q.remove(e, "handle events")
			}
		}, dispatch: function (e) {
			var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length),
				l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
			for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
			if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
				a = k.event.handlers.call(this, s, l), t = 0;
				while ((i = a[t++]) && !s.isPropagationStopped()) {
					s.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, s), s.result
			}
		}, handlers: function (e, t) {
			var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
				for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
				o.length && s.push({elem: l, handlers: o})
			}
			return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
		}, addProp: function (t, e) {
			Object.defineProperty(k.Event.prototype, t, {
				enumerable: !0, configurable: !0, get: m(e) ? function () {
					if (this.originalEvent) return e(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[t]
				}, set: function (e) {
					Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
				}
			})
		}, fix: function (e) {
			return e[k.expando] ? e : new k.Event(e)
		}, special: {
			load: {noBubble: !0}, click: {
				setup: function (e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
				}, trigger: function (e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
				}, _default: function (e) {
					var t = e.target;
					return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
				}
			}, beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, k.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, k.Event = function (e, t) {
		if (!(this instanceof k.Event)) return new k.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
	}, k.Event.prototype = {
		constructor: k.Event,
		isDefaultPrevented: Se,
		isPropagationStopped: Se,
		isImmediatePropagationStopped: Se,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, k.each({
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
		"char": !0,
		code: !0,
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
		which: function (e) {
			var t = e.button;
			return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, function (e, t) {
		k.event.special[e] = {
			setup: function () {
				return De(this, e, Ne), !1
			}, trigger: function () {
				return De(this, e), !0
			}, delegateType: t
		}
	}), k.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, i) {
		k.event.special[e] = {
			delegateType: i, bindType: i, handle: function (e) {
				var t, n = e.relatedTarget, r = e.handleObj;
				return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), k.fn.extend({
		on: function (e, t, n, r) {
			return Ae(this, e, t, n, r)
		}, one: function (e, t, n, r) {
			return Ae(this, e, t, n, r, 1)
		}, off: function (e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
				k.event.remove(this, e, n, t)
			})
		}
	});
	var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
		He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Oe(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
	}

	function Pe(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Re(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Me(e, t) {
		var n, r, i, o, a, s, u, l;
		if (1 === t.nodeType) {
			if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
			J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
		}
	}

	function Ie(n, r, i, o) {
		r = g.apply([], r);
		var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
		if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
		});
		if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
			if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}) : b(u.textContent.replace(He, ""), u, l))
		}
		return n
	}

	function We(e, t, n) {
		for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
		return e
	}

	k.extend({
		htmlPrefilter: function (e) {
			return e.replace(je, "<$1></$2>")
		}, clone: function (e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]); else Me(e, c);
			return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
		}, cleanData: function (e) {
			for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
				if (t = n[Q.expando]) {
					if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
					n[Q.expando] = void 0
				}
				n[J.expando] && (n[J.expando] = void 0)
			}
		}
	}), k.fn.extend({
		detach: function (e) {
			return We(this, e, !0)
		}, remove: function (e) {
			return We(this, e)
		}, text: function (e) {
			return _(this, function (e) {
				return void 0 === e ? k.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		}, append: function () {
			return Ie(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
			})
		}, prepend: function () {
			return Ie(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Oe(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		}, before: function () {
			return Ie(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		}, after: function () {
			return Ie(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		}, empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
			return this
		}, clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return k.clone(this, e, t)
			})
		}, html: function (e) {
			return _(this, function (e) {
				var t = this[0] || {}, n = 0, r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = k.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {
					}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		}, replaceWith: function () {
			var n = [];
			return Ie(this, arguments, function (e) {
				var t = this.parentNode;
				k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), k.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, a) {
		k.fn[e] = function (e) {
			for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function (e) {
		var t = e.ownerDocument.defaultView;
		return t && t.opener || (t = C), t.getComputedStyle(e)
	}, Be = new RegExp(re.join("|"), "i");

	function _e(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function ze(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}

	!function () {
		function e() {
			if (u) {
				s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
				var e = C.getComputedStyle(u);
				n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}

		var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
		u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
			boxSizingReliable: function () {
				return e(), r
			}, pixelBoxStyles: function () {
				return e(), o
			}, pixelPosition: function () {
				return e(), n
			}, reliableMarginLeft: function () {
				return e(), a
			}, scrollboxSize: function () {
				return e(), i
			}
		}))
	}();
	var Ue = ["Webkit", "Moz", "ms"], Xe = E.createElement("div").style, Ve = {};

	function Ge(e) {
		var t = k.cssProps[e] || Ve[e];
		return t || (e in Xe ? e : Ve[e] = function (e) {
			var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
			while (n--) if ((e = Ue[n] + t) in Xe) return e
		}(e) || e)
	}

	var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/,
		Je = {position: "absolute", visibility: "hidden", display: "block"},
		Ke = {letterSpacing: "0", fontWeight: "400"};

	function Ze(e, t, n) {
		var r = ne.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function et(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0, s = 0, u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function tt(e, t, n) {
		var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i,
			a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
		if ($e.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function nt(e, t, n, r, i) {
		return new nt.prototype.init(e, t, n, r, i)
	}

	k.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = _e(e, "opacity");
						return "" === n ? "1" : n
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
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
				if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function (e, t, n, r) {
			var i, o, a, s = V(t);
			return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), k.each(["height", "width"], function (e, u) {
		k.cssHooks[u] = {
			get: function (e, t, n) {
				if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
					return tt(e, u, n)
				})
			}, set: function (e, t, n) {
				var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
			}
		}
	}), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {marginLeft: 0}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), k.each({margin: "", padding: "", border: "Width"}, function (i, o) {
		k.cssHooks[i + o] = {
			expand: function (e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (k.cssHooks[i + o].set = Ze)
	}), k.fn.extend({
		css: function (e, t) {
			return _(this, function (e, t, n) {
				var r, i, o = {}, a = 0;
				if (Array.isArray(t)) {
					for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((k.Tween = nt).prototype = {
		constructor: nt, init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
		}, cur: function () {
			var e = nt.propHooks[this.prop];
			return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
		}, run: function (e) {
			var t, n = nt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
		}
	}).init.prototype = nt.prototype, (nt.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			}, set: function (e) {
				k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = nt.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, k.easing = {
		linear: function (e) {
			return e
		}, swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}, _default: "swing"
	}, k.fx = nt.prototype.init, k.fx.step = {};
	var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;

	function lt() {
		it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
	}

	function ct() {
		return C.setTimeout(function () {
			rt = void 0
		}), rt = Date.now()
	}

	function ft(e, t) {
		var n, r = 0, i = {height: e};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function pt(e, t, n) {
		for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
	}

	function dt(o, e, t) {
		var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () {
			delete u.elem
		}), u = function () {
			if (a) return !1;
			for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
			return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
		}, l = s.promise({
			elem: o,
			props: k.extend({}, e),
			opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
			originalProperties: e,
			originalOptions: t,
			startTime: rt || ct(),
			duration: t.duration,
			tweens: [],
			createTween: function (e, t) {
				var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
				return l.tweens.push(n), n
			},
			stop: function (e) {
				var t = 0, n = e ? l.tweens.length : 0;
				if (a) return this;
				for (a = !0; t < n; t++) l.tweens[t].run(1);
				return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
			}
		}), c = l.props;
		for (!function (e, t) {
			var n, r, i, o, a;
			for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
		}(c, l.opts.specialEasing); r < i; r++) if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
		return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}

	k.Animation = k.extend(dt, {
		tweeners: {
			"*": [function (e, t) {
				var n = this.createTween(e, t);
				return le(n.elem, e, ne.exec(t), n), n
			}]
		}, tweener: function (e, t) {
			m(e) ? (t = e, e = ["*"]) : e = e.match(R);
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
		}, prefilters: [function (e, t, n) {
			var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
				g = e.nodeType && se(e), v = Q.get(e, "fxshow");
			for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
				a.unqueued || s()
			}), a.unqueued++, p.always(function () {
				p.always(function () {
					a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
				})
			})), t) if (i = t[r], st.test(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
					if ("show" !== i || !v || void 0 === v[r]) continue;
					g = !0
				}
				d[r] = v && v[r] || k.style(e, r)
			}
			if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
				h.display = l
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
				for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
			})), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
		}], prefilter: function (e, t) {
			t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
		}
	}), k.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? k.extend({}, e) : {
			complete: n || !n && t || m(e) && e,
			duration: e,
			easing: n && t || t && !m(t) && t
		};
		return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
		}, r
	}, k.fn.extend({
		fadeTo: function (e, t, n, r) {
			return this.filter(se).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
		}, animate: function (t, e, n, r) {
			var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
				var e = dt(this, k.extend({}, t), o);
				(i || Q.get(this, "finish")) && e.stop(!0)
			};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		}, stop: function (i, e, o) {
			var a = function (e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
				var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this);
				if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || k.dequeue(this, i)
			})
		}, finish: function (a) {
			return !1 !== a && (a = a || "fx"), this.each(function () {
				var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
				for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), k.each(["toggle", "show", "hide"], function (e, r) {
		var i = k.fn[r];
		k.fn[r] = function (e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
		}
	}), k.each({
		slideDown: ft("show"),
		slideUp: ft("hide"),
		slideToggle: ft("toggle"),
		fadeIn: {opacity: "show"},
		fadeOut: {opacity: "hide"},
		fadeToggle: {opacity: "toggle"}
	}, function (e, r) {
		k.fn[e] = function (e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), k.timers = [], k.fx.tick = function () {
		var e, t = 0, n = k.timers;
		for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || k.fx.stop(), rt = void 0
	}, k.fx.timer = function (e) {
		k.timers.push(e), k.fx.start()
	}, k.fx.interval = 13, k.fx.start = function () {
		it || (it = !0, lt())
	}, k.fx.stop = function () {
		it = null
	}, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
		return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
			var n = C.setTimeout(e, r);
			t.stop = function () {
				C.clearTimeout(n)
			}
		})
	}, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
	var ht, gt = k.expr.attrHandle;
	k.fn.extend({
		attr: function (e, t) {
			return _(this, k.attr, e, t, 1 < arguments.length)
		}, removeAttr: function (e) {
			return this.each(function () {
				k.removeAttr(this, e)
			})
		}
	}), k.extend({
		attr: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
		}, attrHooks: {
			type: {
				set: function (e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}, removeAttr: function (e, t) {
			var n, r = 0, i = t && t.match(R);
			if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
		}
	}), ht = {
		set: function (e, t, n) {
			return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var a = gt[t] || k.find.attr;
		gt[t] = function (e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
		}
	});
	var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;

	function mt(e) {
		return (e.match(R) || []).join(" ")
	}

	function xt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function bt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
	}

	k.fn.extend({
		prop: function (e, t) {
			return _(this, k.prop, e, t, 1 < arguments.length)
		}, removeProp: function (e) {
			return this.each(function () {
				delete this[k.propFix[e] || e]
			})
		}
	}), k.extend({
		prop: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		}, propHooks: {
			tabIndex: {
				get: function (e) {
					var t = k.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}, propFix: {"for": "htmlFor", "class": "className"}
	}), y.optSelected || (k.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}, set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		k.propFix[this.toLowerCase()] = this
	}), k.fn.extend({
		addClass: function (t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function (e) {
				k(this).addClass(t.call(this, e, xt(this)))
			});
			if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
				a = 0;
				while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
				i !== (s = mt(r)) && n.setAttribute("class", s)
			}
			return this
		}, removeClass: function (t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function (e) {
				k(this).removeClass(t.call(this, e, xt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
				a = 0;
				while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
				i !== (s = mt(r)) && n.setAttribute("class", s)
			}
			return this
		}, toggleClass: function (i, t) {
			var o = typeof i, a = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
				k(this).toggleClass(i.call(this, e, xt(this), t), t)
			}) : this.each(function () {
				var e, t, n, r;
				if (a) {
					t = 0, n = k(this), r = bt(i);
					while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
				} else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
			})
		}, hasClass: function (e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var wt = /\r/g;
	k.fn.extend({
		val: function (n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = m(n), this.each(function (e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
					return null == e ? "" : e + ""
				})), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
		}
	}), k.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = k.find.attr(e, "value");
					return null != t ? t : mt(k.text(e))
				}
			}, select: {
				get: function (e) {
					var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
						if (t = k(n).val(), a) return t;
						s.push(t)
					}
					return s
				}, set: function (e, t) {
					var n, r, i = e.options, o = k.makeArray(t), a = i.length;
					while (a--) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), k.each(["radio", "checkbox"], function () {
		k.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
			}
		}, y.checkOn || (k.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in C;
	var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) {
		e.stopPropagation()
	};
	k.extend(k.event, {
		trigger: function (e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		}, simulate: function (e, t, n) {
			var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
			k.event.trigger(r, null, t)
		}
	}), k.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				k.event.trigger(e, t, this)
			})
		}, triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return k.event.trigger(e, t, n, !0)
		}
	}), y.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
		var i = function (e) {
			k.event.simulate(r, e.target, k.event.fix(e))
		};
		k.event.special[r] = {
			setup: function () {
				var e = this.ownerDocument || this, t = Q.access(e, r);
				t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
			}, teardown: function () {
				var e = this.ownerDocument || this, t = Q.access(e, r) - 1;
				t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
			}
		}
	});
	var Et = C.location, kt = Date.now(), St = /\?/;
	k.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new C.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
	};
	var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
		jt = /^(?:input|select|textarea|keygen)/i;

	function qt(n, e, r, i) {
		var t;
		if (Array.isArray(e)) k.each(e, function (e, t) {
			r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		}); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i)
	}

	k.param = function (e, t) {
		var n, r = [], i = function (e, t) {
			var n = m(t) ? t() : t;
			r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
		};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
			i(this.name, this.value)
		}); else for (n in e) qt(n, e[n], t, i);
		return r.join("&")
	}, k.fn.extend({
		serialize: function () {
			return k.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var e = k.prop(this, "elements");
				return e ? k.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
			}).map(function (e, t) {
				var n = k(this).val();
				return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
					return {name: t.name, value: e.replace(At, "\r\n")}
				}) : {name: t.name, value: n.replace(At, "\r\n")}
			}).get()
		}
	});
	var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/,
		Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a");

	function Bt(o) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0, i = e.toLowerCase().match(R) || [];
			if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function _t(t, i, o, a) {
		var s = {}, u = t === Wt;

		function l(e) {
			var r;
			return s[e] = !0, k.each(t[e] || [], function (e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}

		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function zt(e, t) {
		var n, r, i = k.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && k.extend(!0, e, r), e
	}

	Ft.href = Et.href, k.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Et.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": $t,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (e, t) {
			return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
		},
		ajaxPrefilter: Bt(It),
		ajaxTransport: Bt(Wt),
		ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(),
				b = k.Callbacks("once memory"),
				w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
					readyState: 0, getResponseHeader: function (e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					}, getAllResponseHeaders: function () {
						return h ? p : null
					}, setRequestHeader: function (e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					}, overrideMimeType: function (e) {
						return null == h && (v.mimeType = e), this
					}, statusCode: function (e) {
						var t;
						if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
						return this
					}, abort: function (e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
				r = E.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
			for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = C.setTimeout(function () {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
					var r, i, o, a, s = e.contents, u = e.dataTypes;
					while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r) for (i in s) if (s[i] && s[i].test(r)) {
						u.unshift(i);
						break
					}
					if (u[0] in n) o = u[0]; else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a || (a = i)
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(v, T, n)), s = function (e, t, n, r) {
					var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
					if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
							!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
							break
						}
						if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
							t = a(t)
						} catch (e) {
							return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
						}
					}
					return {state: "success", data: t}
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
			}

			return T
		},
		getJSON: function (e, t, n) {
			return k.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return k.get(e, void 0, t, "script")
		}
	}), k.each(["get", "post"], function (e, i) {
		k[i] = function (e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, k.isPlainObject(e) && e))
		}
	}), k._evalUrl = function (e, t) {
		return k.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function () {
				}
			},
			dataFilter: function (e) {
				k.globalEval(e, t)
			}
		})
	}, k.fn.extend({
		wrapAll: function (e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		}, wrapInner: function (n) {
			return m(n) ? this.each(function (e) {
				k(this).wrapInner(n.call(this, e))
			}) : this.each(function () {
				var e = k(this), t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		}, wrap: function (t) {
			var n = m(t);
			return this.each(function (e) {
				k(this).wrapAll(n ? t.call(this, e) : t)
			})
		}, unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				k(this).replaceWith(this.childNodes)
			}), this
		}
	}), k.expr.pseudos.hidden = function (e) {
		return !k.expr.pseudos.visible(e)
	}, k.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, k.ajaxSettings.xhr = function () {
		try {
			return new C.XMLHttpRequest
		} catch (e) {
		}
	};
	var Ut = {0: 200, 1223: 204}, Xt = k.ajaxSettings.xhr();
	y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
		var o, a;
		if (y.cors || Xt && !i.crossDomain) return {
			send: function (e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function (e) {
					return function () {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
					4 === r.readyState && C.setTimeout(function () {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			}, abort: function () {
				o && o()
			}
		}
	}), k.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), k.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
		contents: {script: /\b(?:java|ecma)script\b/},
		converters: {
			"text script": function (e) {
				return k.globalEval(e), e
			}
		}
	}), k.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), k.ajaxTransport("script", function (n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function (e, t) {
				r = k("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function (e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), E.head.appendChild(r[0])
			}, abort: function () {
				i && i()
			}
		}
	});
	var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
	k.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var e = Gt.pop() || k.expando + "_" + kt++;
			return this[e] = !0, e
		}
	}), k.ajaxPrefilter("json jsonp", function (e, t, n) {
		var r, i, o,
			a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
			return o || k.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
			o = arguments
		}, n.always(function () {
			void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
		}), "script"
	}), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
		var r, i, o
	}, k.fn.load = function (e, t, n) {
		var r, i, o, a = this, s = e.indexOf(" ");
		return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
		}).always(n && function (e, t) {
			a.each(function () {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		k.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), k.expr.pseudos.animated = function (t) {
		return k.grep(k.timers, function (e) {
			return t === e.elem
		}).length
	}, k.offset = {
		setOffset: function (e, t, n) {
			var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
		}
	}, k.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				k.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {top: 0, left: 0} : void 0
		}, position: function () {
			if (this[0]) {
				var e, t, n, r = this[0], i = {top: 0, left: 0};
				if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - k.css(r, "marginTop", !0),
					left: t.left - i.left - k.css(r, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent;
				while (e && "static" === k.css(e, "position")) e = e.offsetParent;
				return e || ie
			})
		}
	}), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
		var o = "pageYOffset" === i;
		k.fn[t] = function (e) {
			return _(this, function (e, t, n) {
				var r;
				if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), k.each(["top", "left"], function (e, n) {
		k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
			if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
		})
	}), k.each({Height: "height", Width: "width"}, function (a, s) {
		k.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
			k.fn[o] = function (e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return _(this, function (e, t, n) {
					var r;
					return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
		k.fn[n] = function (e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	}), k.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), k.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		}, unbind: function (e, t) {
			return this.off(e, null, t)
		}, delegate: function (e, t, n, r) {
			return this.on(t, e, n, r)
		}, undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), k.proxy = function (e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
			return e.apply(t || this, r.concat(s.call(arguments)))
		}).guid = e.guid = e.guid || k.guid++, i
	}, k.holdReady = function (e) {
		e ? k.readyWait++ : k.ready(!0)
	}, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
		var t = k.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return k
	});
	var Qt = C.jQuery, Jt = C.$;
	return k.noConflict = function (e) {
		return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
	}, e || (C.jQuery = C.$ = k), k
});
(function ($) {
	$.fn.menumaker = function (options) {
		var cssmenu = $(this), settings = $.extend({title: "", format: "dropdown", sticky: false}, options);
		return this.each(function () {
			cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
			$(this).find("#menu-button").on('click', function () {
				$(this).toggleClass('menu-opened');
				var mainmenu = $(this).next('ul');
				if (mainmenu.hasClass('open')) {
					mainmenu.hide().removeClass('open');
					if (!App.isHomePage) {
						$('header').addClass('header-in');
					}
					$('body').removeClass('overflow-y-hidden');
				} else {
					$('body').addClass('overflow-y-hidden');
					$('header').removeClass('header-in');
					mainmenu.show().addClass('open');
					if (settings.format === "dropdown") {
						mainmenu.find('ul').show();
					}
				}
			});
			cssmenu.find('li ul').parent().addClass('has-sub');
			multiTg = function () {
				cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
				cssmenu.find('.submenu-button').on('click', function () {
					$(this).toggleClass('submenu-opened');
					if ($(this).siblings('ul').hasClass('open')) {
						$(this).siblings('ul').removeClass('open').hide();
					} else {
						$(this).siblings('ul').addClass('open').show();
					}
				});
			};
			if (settings.format === 'multitoggle') multiTg(); else cssmenu.addClass('dropdown');
			if (settings.sticky === true) cssmenu.css('position', 'fixed');
			resizeFix = function () {
				if ($(window).width() > 768) {
					cssmenu.find('ul').show();
				}
				if ($(window).width() <= 1024) {
					cssmenu.find('ul').hide().removeClass('open');
				}
			};
			resizeFix();
			return $(window).on('resize', resizeFix);
		});
	};
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$("#primary-menu").menumaker({title: "", format: "multitoggle"});
	});
})(jQuery);
!function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {start: null, current: null},
			direction: null
		}, this._states = {
			current: {},
			tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function (b, c) {
			this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
		}, this)), this.setup(), this.initialize()
	}

	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"], run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"], run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"], run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"], run: function (a) {
			var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
				e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"], run: function (a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null,
				d = this._items.length,
				e = !this.settings.autoWidth, f = [];
			for (a.items = {
				merge: !1,
				width: b
			}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"], run: function () {
			var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
			for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"], run: function () {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"], run: function () {
			var a = this.settings.stagePadding, b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"], run: function (a) {
			var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
			if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"], run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"], run: function (a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"], run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"], run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], e.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var b, c, e;
			b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
		c ? (a.each(c, function (a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {content: b});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
			return this[a]
		}, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function () {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function (b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function (a) {
		var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function (b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function (b, c) {
		var d = -1, e = 30, f = this.width(), g = this.coordinates();
		return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
			return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
		}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
	}, e.prototype.animate = function (b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
	}, e.prototype.is = function (a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {property: {name: "position", value: a}});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
			return b
		})
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (a, b) {
		var c = this._items.length, e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function (a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = this.settings, f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
			for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) ;
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
			return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
		};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c, e = 1, f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function (a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (a, b) {
		var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length,
			h = this.minimum(), i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function (a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function () {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		b.each(a.proxy(function (b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case"<":
				return d ? a > c : a < c;
			case">":
				return d ? a < c : a > c;
			case">=":
				return d ? a <= c : a >= c;
			case"<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d, f, g) {
		var h = {item: {count: this._items.length, index: this.current()}},
			i = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function (b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function (a) {
					return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function (a) {
		var c = {x: null, y: null};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function (a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function (a, b) {
		return {x: a.x - b.x, y: a.y - b.y}
	}, a.fn.owlCarousel = function (b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var d = a(this), f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function () {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
					this.load(b)
				}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this), "changed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this), "loaded.owl.lazy": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
		var b = this._core._current, c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
		a.each(d, function (b, c) {
			e.push(a(c).height())
		}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
			}, this), "resize.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this), "refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this), "changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this), "prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
		var c = function () {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function (b) {
		var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%", h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function () {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this), "translate.owl.carousel": a.proxy(function (a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
		}
	}, e.prototype.clear = function (b) {
		a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this), "initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
				a.namespace && this.play(b, c)
			}, this), "stop.owl.autoplay": a.proxy(function (a) {
				a.namespace && this.stop()
			}, this), "mouseover.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this), "mouseleave.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this), "touchstart.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this), "touchend.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function (a, b) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, e.prototype._getNextTimeout = function (d, e) {
		return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
			this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), d || this._core.settings.autoplayTimeout)
	}, e.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout()
	}, e.prototype.stop = function () {
		this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, e.prototype.pause = function () {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function () {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	"use strict";
	var e = function (b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this), "added.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this), "remove.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this), "changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this), "initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this), "refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function () {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function () {
		var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0),
			g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
			if (b >= h || 0 === b) {
				if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f) break;
				b = 0, ++c
			}
			b += this._core.mergers(this._core.relative(a))
		}
	}, e.prototype.draw = function () {
		var b, c = this._core.settings, d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function (a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function (b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	"use strict";
	var e = function (c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this), "prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this), "changed.owl.carousel": a.proxy(function (c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function (a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
			var c = b.location.hash.substring(1), e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
	function e(b, c) {
		var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}

	var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
		transition: {
			end: {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd",
				transition: "transitionend"
			}
		},
		animation: {
			end: {
				WebkitAnimation: "webkitAnimationEnd",
				MozAnimation: "animationend",
				OAnimation: "oAnimationEnd",
				animation: "animationend"
			}
		}
	}, j = {
		csstransforms: function () {
			return !!e("transform")
		}, csstransforms3d: function () {
			return !!e("perspective")
		}, csstransitions: function () {
			return !!e("transition")
		}, cssanimations: function () {
			return !!e("animation")
		}
	};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
(function (a, c) {
	var b = (function () {
		var d = c(a.documentElement), f = c(a.body), e;
		if (d.scrollTop()) {
			return d
		} else {
			e = f.scrollTop();
			if (f.scrollTop(e + 1).scrollTop() == e) {
				return d
			} else {
				return f.scrollTop(e)
			}
		}
	}());
	c.fn.smoothScroll = function (d) {
		d = ~~d || 400;
		return this.find('a[href*="#"]').click(function (f) {
			var g = this.hash, e = c(g);
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				if (e.length) {
					f.preventDefault();
					b.stop().animate({scrollTop: e.offset().top}, d, function () {
						location.hash = g
					})
				}
			}
		}).end()
	}
}(document, jQuery));
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode(s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init(converter) {
		function api() {
		}

		function set(key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}
			attributes = extend({path: '/'}, api.defaults, attributes);
			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {
			}
			value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
			key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}
			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get(key, json) {
			if (typeof document === 'undefined') {
				return;
			}
			var jar = {};
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;
			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');
				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}
				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) || decode(cookie);
					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {
						}
					}
					jar[name] = cookie;
					if (key === name) {
						break;
					}
				} catch (e) {
				}
			}
			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false);
		};
		api.getJSON = function (key) {
			return get(key, true);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {expires: -1}));
		};
		api.defaults = {};
		api.withConverter = init;
		return api;
	}

	return init(function () {
	});
}));
!function (t, i) {
	"object" == typeof exports ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.Spinner = i()
}(this, function () {
	"use strict";

	function t(t, i) {
		var e, o = document.createElement(t || "div");
		for (e in i) o[e] = i[e];
		return o
	}

	function i(t) {
		for (var i = 1, e = arguments.length; i < e; i++) t.appendChild(arguments[i]);
		return t
	}

	function e(t, i, e, o) {
		var n = ["opacity", i, ~~(100 * t), e, o].join("-"), r = .01 + e / o * 100,
			s = Math.max(1 - (1 - t) / i * (100 - r), t), a = l.substring(0, l.indexOf("Animation")).toLowerCase(),
			c = a && "-" + a + "-" || "";
		return d[n] || (p.insertRule("@" + c + "keyframes " + n + "{0%{opacity:" + s + "}" + r + "%{opacity:" + t + "}" + (r + .01) + "%{opacity:1}" + (r + i) % 100 + "%{opacity:" + t + "}100%{opacity:" + s + "}}", p.cssRules.length), d[n] = 1), n
	}

	function o(t, i) {
		var e, o, n = t.style;
		for (i = i.charAt(0).toUpperCase() + i.slice(1), o = 0; o < c.length; o++) if (e = c[o] + i, void 0 !== n[e]) return e;
		if (void 0 !== n[i]) return i
	}

	function n(t, i) {
		for (var e in i) t.style[o(t, e) || e] = i[e];
		return t
	}

	function r(t) {
		for (var i = 1; i < arguments.length; i++) {
			var e = arguments[i];
			for (var o in e) void 0 === t[o] && (t[o] = e[o])
		}
		return t
	}

	function s(t, i) {
		return "string" == typeof t ? t : t[i % t.length]
	}

	function a(t) {
		this.opts = r(t || {}, a.defaults, u)
	}

	var l, c = ["webkit", "Moz", "ms", "O"], d = {}, p = function () {
		var e = t("style", {type: "text/css"});
		return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
	}(), u = {
		lines: 12,
		length: 7,
		width: 5,
		radius: 10,
		rotate: 0,
		corners: 1,
		color: "#000000",
		direction: 1,
		speed: 1,
		trail: 100,
		opacity: .25,
		fps: 20,
		zIndex: 2e9,
		className: "spinner",
		top: "50%",
		left: "50%",
		position: "absolute"
	};
	a.defaults = {}, r(a.prototype, {
		spin: function (i) {
			this.stop();
			var e = this, o = e.opts,
				r = e.el = n(t(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex});
			o.radius, o.length, o.width;
			if (n(r, {
				left: o.left,
				top: o.top
			}), i && i.insertBefore(r, i.firstChild || null), r.setAttribute("role", "progressbar"), e.lines(r, e.opts), !l) {
				var s, a = 0, c = (o.lines - 1) * (1 - o.direction) / 2, d = o.fps, p = d / o.speed,
					u = (1 - o.opacity) / (p * o.trail / 100), f = p / o.lines;
				!function t() {
					a++;
					for (var i = 0; i < o.lines; i++) s = Math.max(1 - (a + (o.lines - i) * f) % p * u, o.opacity), e.opacity(r, i * o.direction + c, s, o);
					e.timeout = e.el && setTimeout(t, ~~(1e3 / d))
				}()
			}
			return e
		}, stop: function () {
			var t = this.el;
			return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
		}, lines: function (o, r) {
			function a(i, e) {
				return n(t(), {
					position: "absolute",
					width: r.length + r.width + "px",
					height: r.width + "px",
					background: i,
					boxShadow: e,
					transformOrigin: "left",
					transform: "rotate(" + ~~(360 / r.lines * d + r.rotate) + "deg) translate(" + r.radius + "px,0)",
					borderRadius: (r.corners * r.width >> 1) + "px"
				})
			}

			for (var c, d = 0, p = (r.lines - 1) * (1 - r.direction) / 2; d < r.lines; d++) c = n(t(), {
				position: "absolute",
				top: 1 + ~(r.width / 2) + "px",
				transform: r.hwaccel ? "translate3d(0,0,0)" : "",
				opacity: r.opacity,
				animation: l && e(r.opacity, r.trail, p + d * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
			}), r.shadow && i(c, n(a("#000000", "0 0 4px #000"), {top: "2px"})), i(o, i(c, a(s(r.color, d), "0 0 1px rgba(0,0,0,.1)")));
			return o
		}, opacity: function (t, i, e) {
			i < t.childNodes.length && (t.childNodes[i].style.opacity = e)
		}
	});
	var f = n(t("group"), {behavior: "url(#default#VML)"});
	return !o(f, "transform") && f.adj ? function () {
		function e(i, e) {
			return t("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
		}

		p.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function (t, o) {
			function r() {
				return n(e("group", {coordsize: d + " " + d, coordorigin: -c + " " + -c}), {width: d, height: d})
			}

			function a(t, a, l) {
				i(u, i(n(r(), {
					rotation: 360 / o.lines * t + "deg",
					left: ~~a
				}), i(n(e("roundrect", {arcsize: o.corners}), {
					width: c,
					height: o.width,
					left: o.radius,
					top: -o.width >> 1,
					filter: l
				}), e("fill", {color: s(o.color, t), opacity: o.opacity}), e("stroke", {opacity: 0}))))
			}

			var l, c = o.length + o.width, d = 2 * c, p = 2 * -(o.width + o.length) + "px",
				u = n(r(), {position: "absolute", top: p, left: p});
			if (o.shadow) for (l = 1; l <= o.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
			for (l = 1; l <= o.lines; l++) a(l);
			return i(t, u)
		}, a.prototype.opacity = function (t, i, e, o) {
			var n = t.firstChild;
			o = o.shadow && o.lines || 0, n && i + o < n.childNodes.length && (n = (n = (n = n.childNodes[i + o]) && n.firstChild) && n.firstChild) && (n.opacity = e)
		}
	}() : l = o(f, "animation"), a
});
/*!
 * Ladda 1.0.6 (2018-02-04, 13:15)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */
!function (t, e) {
	"use strict";
	"object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
}(this, function (t) {
	"use strict";
	var e = [];

	function a(a) {
		if (void 0 !== a) {
			if (/ladda-button/i.test(a.className) || (a.className += " ladda-button"), a.hasAttribute("data-style") || a.setAttribute("data-style", "expand-right"), !a.querySelector(".ladda-label")) {
				var u = document.createElement("span");
				u.className = "ladda-label", n = a, i = u, (r = document.createRange()).selectNodeContents(n), r.surroundContents(i), n.appendChild(i)
			}
			var n, i, r, d, o, s = a.querySelector(".ladda-spinner");
			s || ((s = document.createElement("span")).className = "ladda-spinner"), a.appendChild(s);
			var F = {
				start: function () {
					return d || (d = function (e) {
						var a, u, n = e.offsetHeight;
						0 === n && (n = parseFloat(window.getComputedStyle(e).height));
						n > 32 && (n *= .8);
						e.hasAttribute("data-spinner-size") && (n = parseInt(e.getAttribute("data-spinner-size"), 10));
						e.hasAttribute("data-spinner-color") && (a = e.getAttribute("data-spinner-color"));
						e.hasAttribute("data-spinner-lines") && (u = parseInt(e.getAttribute("data-spinner-lines"), 10));
						var i = .2 * n;
						return new t({
							color: a || "#FFFFFF",
							lines: u || 12,
							radius: i,
							length: .6 * i,
							width: i < 7 ? 2 : 3,
							zIndex: "auto",
							top: "auto",
							left: "auto",
							className: ""
						})
					}(a)), a.disabled = !0, a.setAttribute("data-loading", ""), clearTimeout(o), d.spin(s), this.setProgress(0), this
				}, startAfter: function (t) {
					return clearTimeout(o), o = setTimeout(function () {
						F.start()
					}, t), this
				}, stop: function () {
					return F.isLoading() && (a.disabled = !1, a.removeAttribute("data-loading")), clearTimeout(o), d && (o = setTimeout(function () {
						d.stop()
					}, 1e3)), this
				}, toggle: function () {
					return this.isLoading() ? this.stop() : this.start()
				}, setProgress: function (t) {
					t = Math.max(Math.min(t, 1), 0);
					var e = a.querySelector(".ladda-progress");
					0 === t && e && e.parentNode ? e.parentNode.removeChild(e) : (e || ((e = document.createElement("div")).className = "ladda-progress", a.appendChild(e)), e.style.width = (t || 0) * a.offsetWidth + "px")
				}, enable: function () {
					return this.stop()
				}, disable: function () {
					return this.stop(), a.disabled = !0, this
				}, isLoading: function () {
					return a.hasAttribute("data-loading")
				}, remove: function () {
					clearTimeout(o), a.disabled = !1, a.removeAttribute("data-loading"), d && (d.stop(), d = null), e.splice(e.indexOf(F), 1)
				}
			};
			return e.push(F), F
		}
		console.warn("Ladda button target must be defined.")
	}

	function u(t, e) {
		if ("function" == typeof t.addEventListener) {
			var u = a(t), n = -1;
			t.addEventListener("click", function () {
				var a, i, r = !0, d = function (t, e) {
					for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
					return e === t.tagName ? t : void 0
				}(t, "FORM");
				if (void 0 !== d && !d.hasAttribute("novalidate")) if ("function" == typeof d.checkValidity) r = d.checkValidity(); else for (var o = (a = d, i = [], ["input", "textarea", "select"].forEach(function (t) {
					for (var e = a.getElementsByTagName(t), u = 0; u < e.length; u++) e[u].hasAttribute("required") && i.push(e[u])
				}), i), s = 0; s < o.length; s++) {
					var F = o[s], l = F.getAttribute("type");
					if ("" === F.value.replace(/^\s+|\s+$/g, "") && (r = !1), "checkbox" !== l && "radio" !== l || F.checked || (r = !1), "email" === l && (r = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(F.value)), "url" === l && (r = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(F.value)), !r) break
				}
				r && (u.startAfter(1), "number" == typeof e.timeout && (clearTimeout(n), n = setTimeout(u.stop, e.timeout)), "function" == typeof e.callback && e.callback.apply(null, [u]))
			}, !1)
		}
	}

	return {
		bind: function (t, e) {
			var a;
			if ("string" == typeof t) a = document.querySelectorAll(t); else {
				if ("object" != typeof t) throw new Error("target must be string or object");
				a = [t]
			}
			e = e || {};
			for (var n = 0; n < a.length; n++) u(a[n], e)
		}, create: a, stopAll: function () {
			for (var t = 0, a = e.length; t < a; t++) e[t].stop()
		}
	}
});
/*! WOW wow.js - v1.2.1 - 2016-09-05
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function (a, b) {
	if ("function" == typeof define && define.amd) define(["module", "exports"], b); else if ("undefined" != typeof exports) b(module, exports); else {
		var c = {exports: {}};
		b(c, c.exports), a.WOW = c.exports
	}
}(this, function (a, b) {
	"use strict";

	function c(a, b) {
		if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
	}

	function d(a, b) {
		return b.indexOf(a) >= 0
	}

	function e(a, b) {
		for (var c in b) if (null == a[c]) {
			var d = b[c];
			a[c] = d
		}
		return a
	}

	function f(a) {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
	}

	function g(a) {
		var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
			c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
			d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3], e = void 0;
		return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
	}

	function h(a, b) {
		null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
	}

	function i(a, b, c) {
		null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
	}

	function j(a, b, c) {
		null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
	}

	function k() {
		return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
	}

	Object.defineProperty(b, "__esModule", {value: !0});
	var l, m, n = function () {
			function a(a, b) {
				for (var c = 0; c < b.length; c++) {
					var d = b[c];
					d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
				}
			}

			return function (b, c, d) {
				return c && a(b.prototype, c), d && a(b, d), b
			}
		}(), o = window.WeakMap || window.MozWeakMap || function () {
			function a() {
				c(this, a), this.keys = [], this.values = []
			}

			return n(a, [{
				key: "get", value: function (a) {
					for (var b = 0; b < this.keys.length; b++) {
						var c = this.keys[b];
						if (c === a) return this.values[b]
					}
				}
			}, {
				key: "set", value: function (a, b) {
					for (var c = 0; c < this.keys.length; c++) {
						var d = this.keys[c];
						if (d === a) return this.values[c] = b, this
					}
					return this.keys.push(a), this.values.push(b), this
				}
			}]), a
		}(),
		p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function () {
			function a() {
				c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
			}

			return n(a, [{
				key: "observe", value: function () {
				}
			}]), a
		}(), l.notSupported = !0, m), q = window.getComputedStyle || function (a) {
			var b = /(\-([a-z]){1})/g;
			return {
				getPropertyValue: function (c) {
					"float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function (a, b) {
						return b.toUpperCase()
					});
					var d = a.currentStyle;
					return (null != d ? d[c] : void 0) || null
				}
			}
		}, r = function () {
			function a() {
				var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
				c(this, a), this.defaults = {
					boxClass: "wow",
					animateClass: "animated",
					offset: 0,
					mobile: !0,
					live: !0,
					callback: null,
					scrollContainer: null
				}, this.animate = function () {
					return "requestAnimationFrame" in window ? function (a) {
						return window.requestAnimationFrame(a)
					} : function (a) {
						return a()
					}
				}(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
			}

			return n(a, [{
				key: "init", value: function () {
					this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
				}
			}, {
				key: "start", value: function () {
					var a = this;
					if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (var b = 0; b < this.boxes.length; b++) {
						var c = this.boxes[b];
						this.applyStyle(c, !0)
					}
					if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
						var d = new p(function (b) {
							for (var c = 0; c < b.length; c++) for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
								var f = d.addedNodes[e];
								a.doSync(f)
							}
						});
						d.observe(document.body, {childList: !0, subtree: !0})
					}
				}
			}, {
				key: "stop", value: function () {
					this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
				}
			}, {
				key: "sync", value: function () {
					p.notSupported && this.doSync(this.element)
				}
			}, {
				key: "doSync", value: function (a) {
					if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
						a = a.parentNode || a;
						for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
							var e = b[c];
							d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
						}
					}
				}
			}, {
				key: "show", value: function (a) {
					return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation), a
				}
			}, {
				key: "applyStyle", value: function (a, b) {
					var c = this, d = a.getAttribute("data-wow-duration"), e = a.getAttribute("data-wow-delay"),
						f = a.getAttribute("data-wow-iteration");
					return this.animate(function () {
						return c.customStyle(a, b, d, e, f)
					})
				}
			}, {
				key: "resetStyle", value: function () {
					for (var a = 0; a < this.boxes.length; a++) {
						var b = this.boxes[a];
						b.style.visibility = "visible"
					}
				}
			}, {
				key: "resetAnimation", value: function (a) {
					if (a.type.toLowerCase().indexOf("animationend") >= 0) {
						var b = a.target || a.srcElement;
						b.className = b.className.replace(this.config.animateClass, "").trim()
					}
				}
			}, {
				key: "customStyle", value: function (a, b, c, d, e) {
					return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
				}
			}, {
				key: "vendorSet", value: function (a, b) {
					for (var c in b) if (b.hasOwnProperty(c)) {
						var d = b[c];
						a["" + c] = d;
						for (var e = 0; e < this.vendors.length; e++) {
							var f = this.vendors[e];
							a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
						}
					}
				}
			}, {
				key: "vendorCSS", value: function (a, b) {
					for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
						var f = this.vendors[e];
						d = d || c.getPropertyCSSValue("-" + f + "-" + b)
					}
					return d
				}
			}, {
				key: "animationName", value: function (a) {
					var b = void 0;
					try {
						b = this.vendorCSS(a, "animation-name").cssText
					} catch (c) {
						b = q(a).getPropertyValue("animation-name")
					}
					return "none" === b ? "" : b
				}
			}, {
				key: "cacheAnimationName", value: function (a) {
					return this.animationNameCache.set(a, this.animationName(a))
				}
			}, {
				key: "cachedAnimationName", value: function (a) {
					return this.animationNameCache.get(a)
				}
			}, {
				key: "scrollHandler", value: function () {
					this.scrolled = !0
				}
			}, {
				key: "scrollCallback", value: function () {
					if (this.scrolled) {
						this.scrolled = !1;
						for (var a = [], b = 0; b < this.boxes.length; b++) {
							var c = this.boxes[b];
							if (c) {
								if (this.isVisible(c)) {
									this.show(c);
									continue
								}
								a.push(c)
							}
						}
						this.boxes = a, this.boxes.length || this.config.live || this.stop()
					}
				}
			}, {
				key: "offsetTop", value: function (a) {
					for (; void 0 === a.offsetTop;) a = a.parentNode;
					for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;
					return b
				}
			}, {
				key: "isVisible", value: function (a) {
					var b = a.getAttribute("data-wow-offset") || this.config.offset,
						c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
						d = c + Math.min(this.element.clientHeight, k()) - b, e = this.offsetTop(a), f = e + a.clientHeight;
					return d >= e && f >= c
				}
			}, {
				key: "disabled", value: function () {
					return !this.config.mobile && f(navigator.userAgent)
				}
			}]), a
		}();
	b["default"] = r, a.exports = b["default"]
});
!function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.counterUp = e() : t.counterUp = e()
}(window, function () {
	return function (t) {
		var e = {};

		function n(r) {
			if (e[r]) return e[r].exports;
			var o = e[r] = {i: r, l: !1, exports: {}};
			return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}

		return n.m = t, n.c = e, n.d = function (t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
		}, n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
		}, n.t = function (t, e) {
			if (1 & e && (t = n(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
				return t[e]
			}.bind(null, o));
			return r
		}, n.n = function (t) {
			var e = t && t.__esModule ? function () {
				return t.default
			} : function () {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 0)
	}([function (t, e, n) {
		"use strict";
		n.r(e), n.d(e, "divideNumbers", function () {
			return o
		}), n.d(e, "hasComma", function () {
			return i
		}), n.d(e, "isFloat", function () {
			return u
		}), n.d(e, "decimalPlaces", function () {
			return l
		});
		e.default = function (t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.action,
				i = void 0 === n ? "start" : n, u = e.duration, l = void 0 === u ? 1e3 : u, a = e.delay,
				c = void 0 === a ? 16 : a, d = e.lang, f = void 0 === d ? void 0 : d;
			if ("stop" !== i) {
				if (r(t), /[0-9]/.test(t.innerHTML)) {
					var s = o(t.innerHTML, {
						duration: l || t.getAttribute("data-duration"),
						lang: f || document.querySelector("html").getAttribute("lang") || void 0,
						delay: c || t.getAttribute("data-delay")
					});
					t._countUpOrigInnerHTML = t.innerHTML, t.innerHTML = s[0], t.style.visibility = "visible", t.countUpTimeout = setTimeout(function e() {
						t.innerHTML = s.shift(), s.length ? (clearTimeout(t.countUpTimeout), t.countUpTimeout = setTimeout(e, c)) : t._countUpOrigInnerHTML = void 0
					}, c)
				}
			} else r(t)
		};
		var r = function (t) {
			clearTimeout(t.countUpTimeout), t._countUpOrigInnerHTML && (t.innerHTML = t._countUpOrigInnerHTML, t._countUpOrigInnerHTML = void 0), t.style.visibility = ""
		}, o = function (t) {
			for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.duration, r = void 0 === n ? 1e3 : n, o = e.delay, i = void 0 === o ? 16 : o, u = e.lang, l = void 0 === u ? void 0 : u, a = r / i, c = t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), d = [], f = 0; f < a; f++) d.push("");
			for (var s = 0; s < c.length; s++) if (/([0-9.][,.0-9]*[0-9]*)/.test(c[s]) && !/<[^>]+>/.test(c[s])) {
				var p = c[s], v = /[0-9]+,[0-9]+/.test(p);
				p = p.replace(/,/g, "");
				for (var g = /^[0-9]+\.[0-9]+$/.test(p), y = g ? (p.split(".")[1] || []).length : 0, b = d.length - 1, m = a; m >= 1; m--) {
					var T = parseInt(p / a * m, 10);
					g && (T = parseFloat(p / a * m).toFixed(y), T = parseFloat(T).toLocaleString(l)), v && (T = T.toLocaleString(l)), d[b--] += T
				}
			} else for (var M = 0; M < a; M++) d[M] += c[s];
			return d[d.length] = t.toString(), d
		}, i = function (t) {
			return /[0-9]+,[0-9]+/.test(t)
		}, u = function (t) {
			return /^[0-9]+\.[0-9]+$/.test(t)
		}, l = function (t) {
			return u(t) ? (t.split(".")[1] || []).length : 0
		}
	}])
});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
	"use strict";

	function t(o) {
		if (!o) throw new Error("No options passed to Waypoint constructor");
		if (!o.element) throw new Error("No element option passed to Waypoint constructor");
		if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
		this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
			name: this.options.group,
			axis: this.axis
		}), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
	}

	var e = 0, i = {};
	t.prototype.queueTrigger = function (t) {
		this.group.queueTrigger(this, t)
	}, t.prototype.trigger = function (t) {
		this.enabled && this.callback && this.callback.apply(this, t)
	}, t.prototype.destroy = function () {
		this.context.remove(this), this.group.remove(this), delete i[this.key]
	}, t.prototype.disable = function () {
		return this.enabled = !1, this
	}, t.prototype.enable = function () {
		return this.context.refresh(), this.enabled = !0, this
	}, t.prototype.next = function () {
		return this.group.next(this)
	}, t.prototype.previous = function () {
		return this.group.previous(this)
	}, t.invokeAll = function (t) {
		var e = [];
		for (var o in i) e.push(i[o]);
		for (var n = 0, r = e.length; r > n; n++) e[n][t]()
	}, t.destroyAll = function () {
		t.invokeAll("destroy")
	}, t.disableAll = function () {
		t.invokeAll("disable")
	}, t.enableAll = function () {
		t.Context.refreshAll();
		for (var e in i) i[e].enabled = !0;
		return this
	}, t.refreshAll = function () {
		t.Context.refreshAll()
	}, t.viewportHeight = function () {
		return window.innerHeight || document.documentElement.clientHeight
	}, t.viewportWidth = function () {
		return document.documentElement.clientWidth
	}, t.adapters = [], t.defaults = {
		context: window,
		continuous: !0,
		enabled: !0,
		group: "default",
		horizontal: !1,
		offset: 0
	}, t.offsetAliases = {
		"bottom-in-view": function () {
			return this.context.innerHeight() - this.adapter.outerHeight()
		}, "right-in-view": function () {
			return this.context.innerWidth() - this.adapter.outerWidth()
		}
	}, window.Waypoint = t
}(), function () {
	"use strict";

	function t(t) {
		window.setTimeout(t, 1e3 / 60)
	}

	function e(t) {
		this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
			x: this.adapter.scrollLeft(),
			y: this.adapter.scrollTop()
		}, this.waypoints = {
			vertical: {},
			horizontal: {}
		}, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
	}

	var i = 0, o = {}, n = window.Waypoint, r = window.onload;
	e.prototype.add = function (t) {
		var e = t.options.horizontal ? "horizontal" : "vertical";
		this.waypoints[e][t.key] = t, this.refresh()
	}, e.prototype.checkEmpty = function () {
		var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
			e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
		t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
	}, e.prototype.createThrottledResizeHandler = function () {
		function t() {
			e.handleResize(), e.didResize = !1
		}

		var e = this;
		this.adapter.on("resize.waypoints", function () {
			e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
		})
	}, e.prototype.createThrottledScrollHandler = function () {
		function t() {
			e.handleScroll(), e.didScroll = !1
		}

		var e = this;
		this.adapter.on("scroll.waypoints", function () {
			(!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
		})
	}, e.prototype.handleResize = function () {
		n.Context.refreshAll()
	}, e.prototype.handleScroll = function () {
		var t = {}, e = {
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
		for (var i in e) {
			var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward;
			for (var s in this.waypoints[i]) {
				var a = this.waypoints[i][s];
				if (null !== a.triggerPoint) {
					var l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint, p = l && h, u = !l && !h;
					(p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
				}
			}
		}
		for (var c in t) t[c].flushTriggers();
		this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
	}, e.prototype.innerHeight = function () {
		return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
	}, e.prototype.remove = function (t) {
		delete this.waypoints[t.axis][t.key], this.checkEmpty()
	}, e.prototype.innerWidth = function () {
		return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
	}, e.prototype.destroy = function () {
		var t = [];
		for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
		for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
	}, e.prototype.refresh = function () {
		var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
		this.handleScroll(), t = {
			horizontal: {
				contextOffset: e ? 0 : i.left,
				contextScroll: e ? 0 : this.oldScroll.x,
				contextDimension: this.innerWidth(),
				oldScroll: this.oldScroll.x,
				forward: "right",
				backward: "left",
				offsetProp: "left"
			},
			vertical: {
				contextOffset: e ? 0 : i.top,
				contextScroll: e ? 0 : this.oldScroll.y,
				contextDimension: this.innerHeight(),
				oldScroll: this.oldScroll.y,
				forward: "down",
				backward: "up",
				offsetProp: "top"
			}
		};
		for (var r in t) {
			var s = t[r];
			for (var a in this.waypoints[r]) {
				var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0,
					g = null == w;
				d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
			}
		}
		return n.requestAnimationFrame(function () {
			for (var t in o) o[t].flushTriggers()
		}), this
	}, e.findOrCreateByElement = function (t) {
		return e.findByElement(t) || new e(t)
	}, e.refreshAll = function () {
		for (var t in o) o[t].refresh()
	}, e.findByElement = function (t) {
		return o[t.waypointContextKey]
	}, window.onload = function () {
		r && r(), e.refreshAll()
	}, n.requestAnimationFrame = function (e) {
		var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
		i.call(window, e)
	}, n.Context = e
}(), function () {
	"use strict";

	function t(t, e) {
		return t.triggerPoint - e.triggerPoint
	}

	function e(t, e) {
		return e.triggerPoint - t.triggerPoint
	}

	function i(t) {
		this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
	}

	var o = {vertical: {}, horizontal: {}}, n = window.Waypoint;
	i.prototype.add = function (t) {
		this.waypoints.push(t)
	}, i.prototype.clearTriggerQueues = function () {
		this.triggerQueues = {up: [], down: [], left: [], right: []}
	}, i.prototype.flushTriggers = function () {
		for (var i in this.triggerQueues) {
			var o = this.triggerQueues[i], n = "up" === i || "left" === i;
			o.sort(n ? e : t);
			for (var r = 0, s = o.length; s > r; r += 1) {
				var a = o[r];
				(a.options.continuous || r === o.length - 1) && a.trigger([i])
			}
		}
		this.clearTriggerQueues()
	}, i.prototype.next = function (e) {
		this.waypoints.sort(t);
		var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1;
		return o ? null : this.waypoints[i + 1]
	}, i.prototype.previous = function (e) {
		this.waypoints.sort(t);
		var i = n.Adapter.inArray(e, this.waypoints);
		return i ? this.waypoints[i - 1] : null
	}, i.prototype.queueTrigger = function (t, e) {
		this.triggerQueues[e].push(t)
	}, i.prototype.remove = function (t) {
		var e = n.Adapter.inArray(t, this.waypoints);
		e > -1 && this.waypoints.splice(e, 1)
	}, i.prototype.first = function () {
		return this.waypoints[0]
	}, i.prototype.last = function () {
		return this.waypoints[this.waypoints.length - 1]
	}, i.findOrCreate = function (t) {
		return o[t.axis][t.name] || new i(t)
	}, n.Group = i
}(), function () {
	"use strict";

	function t(t) {
		this.$element = e(t)
	}

	var e = window.jQuery, i = window.Waypoint;
	e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
		t.prototype[i] = function () {
			var t = Array.prototype.slice.call(arguments);
			return this.$element[i].apply(this.$element, t)
		}
	}), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
		t[o] = e[o]
	}), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
	"use strict";

	function t(t) {
		return function () {
			var i = [], o = arguments[0];
			return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
				var n = t.extend({}, o, {element: this});
				"string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
			}), i
		}
	}

	var e = window.Waypoint;
	window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
// Generated by CoffeeScript 1.9.3
(function () {
	var e;
	e = function () {
		function e(e, t) {
			var n, r;
			this.options = {
				target: "instafeed",
				get: "popular",
				resolution: "thumbnail",
				sortBy: "none",
				links: !0,
				mock: !1,
				useHttp: !1
			};
			if (typeof e == "object") for (n in e) r = e[n], this.options[n] = r;
			this.context = t != null ? t : this, this.unique = this._genKey()
		}

		return e.prototype.hasNext = function () {
			return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
		}, e.prototype.next = function () {
			return this.hasNext() ? this.run(this.context.nextUrl) : !1
		}, e.prototype.run = function (t) {
			var n, r, i;
			if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
			if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
			return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
		}, e.prototype.parse = function (e) {
			var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
			if (typeof e != "object") {
				if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
				throw new Error("Invalid JSON response")
			}
			if (e.meta.code !== 200) {
				if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
				throw new Error("Error from Instagram: " + e.meta.error_message)
			}
			if (e.data.length === 0) {
				if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
				throw new Error("No images were returned from Instagram")
			}
			this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
			if (this.options.sortBy !== "none") {
				this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
				switch (M[1]) {
					case"random":
						e.data.sort(function () {
							return .5 - Math.random()
						});
						break;
					case"recent":
						e.data = this._sortBy(e.data, "created_time", O);
						break;
					case"liked":
						e.data = this._sortBy(e.data, "likes.count", O);
						break;
					case"commented":
						e.data = this._sortBy(e.data, "comments.count", O);
						break;
					default:
						throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
				}
			}
			if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
				m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
				if (this.options.template != null && typeof this.options.template == "string") {
					f = "", d = "", w = "", D = document.createElement("div");
					for (c = 0, N = m.length; c < N; c++) {
						h = m[c], p = h.images[this.options.resolution];
						if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
						E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
							model: h,
							id: h.id,
							link: h.link,
							type: h.type,
							image: v,
							width: E,
							height: y,
							orientation: b,
							caption: this._getObjectProperty(h, "caption.text"),
							likes: h.likes.count,
							comments: h.comments.count,
							location: this._getObjectProperty(h, "location.name")
						}), f += d
					}
					D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
					while (r < n) i.push(D.childNodes[r]), r += 1;
					for (x = 0, C = i.length; x < C; x++) L = i[x], u.appendChild(L)
				} else for (T = 0, k = m.length; T < k; T++) {
					h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
					if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
					v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
				}
				_ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
				if (_ == null) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
				_.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
				try {
					delete window[S]
				} catch (P) {
					s = P
				}
			}
			return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
		}, e.prototype._buildUrl = function () {
			var e, t, n;
			e = "https://api.instagram.com/v1";
			switch (this.options.get) {
				case"popular":
					t = "media/popular";
					break;
				case"tagged":
					if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
					t = "tags/" + this.options.tagName + "/media/recent";
					break;
				case"location":
					if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
					t = "locations/" + this.options.locationId + "/media/recent";
					break;
				case"user":
					if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
					t = "users/" + this.options.userId + "/media/recent";
					break;
				default:
					throw new Error("Invalid option for get: '" + this.options.get + "'.")
			}
			return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
		}, e.prototype._genKey = function () {
			var e;
			return e = function () {
				return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
			}, "" + e() + e() + e() + e()
		}, e.prototype._makeTemplate = function (e, t) {
			var n, r, i, s, o;
			r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
			while (r.test(n)) s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function () {
				return "" + o
			});
			return n
		}, e.prototype._getObjectProperty = function (e, t) {
			var n, r;
			t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
			while (r.length) {
				n = r.shift();
				if (!(e != null && n in e)) return null;
				e = e[n]
			}
			return e
		}, e.prototype._sortBy = function (e, t, n) {
			var r;
			return r = function (e, r) {
				var i, s;
				return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
			}, e.sort(r.bind(this)), e
		}, e.prototype._filter = function (e, t) {
			var n, r, i, s, o;
			n = [], r = function (e) {
				if (t(e)) return n.push(e)
			};
			for (i = 0, o = e.length; i < o; i++) s = e[i], r(s);
			return n
		}, e
	}(), function (e, t) {
		return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
	}(this, function () {
		return e
	})
}).call(this);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global = global || self, global.Shuffle = factory());
}(this, function () {
	'use strict';

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function");
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				writable: true,
				configurable: true
			}
		});
		if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
		_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		};
		return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};

		return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return self;
	}

	function _possibleConstructorReturn(self, call) {
		if (call && (typeof call === "object" || typeof call === "function")) {
			return call;
		}

		return _assertThisInitialized(self);
	}

	function E() {
		// Keep this empty so it's easier to inherit from
		// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
		on: function (name, callback, ctx) {
			var e = this.e || (this.e = {});

			(e[name] || (e[name] = [])).push({
				fn: callback,
				ctx: ctx
			});

			return this;
		},

		once: function (name, callback, ctx) {
			var self = this;

			function listener() {
				self.off(name, listener);
				callback.apply(ctx, arguments);
			}

			listener._ = callback;
			return this.on(name, listener, ctx);
		},

		emit: function (name) {
			var data = [].slice.call(arguments, 1);
			var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
			var i = 0;
			var len = evtArr.length;

			for (i; i < len; i++) {
				evtArr[i].fn.apply(evtArr[i].ctx, data);
			}

			return this;
		},

		off: function (name, callback) {
			var e = this.e || (this.e = {});
			var evts = e[name];
			var liveEvents = [];

			if (evts && callback) {
				for (var i = 0, len = evts.length; i < len; i++) {
					if (evts[i].fn !== callback && evts[i].fn._ !== callback)
						liveEvents.push(evts[i]);
				}
			}

			// Remove event from queue to prevent memory leak
			// Suggested by https://github.com/lazd
			// Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

			(liveEvents.length)
				? e[name] = liveEvents
				: delete e[name];

			return this;
		}
	};

	var tinyEmitter = E;
	var TinyEmitter = E;
	tinyEmitter.TinyEmitter = TinyEmitter;

	var proto = typeof Element !== 'undefined' ? Element.prototype : {};
	var vendor = proto.matches
		|| proto.matchesSelector
		|| proto.webkitMatchesSelector
		|| proto.mozMatchesSelector
		|| proto.msMatchesSelector
		|| proto.oMatchesSelector;

	var matchesSelector = match;

	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */

	function match(el, selector) {
		if (!el || el.nodeType !== 1) return false;
		if (vendor) return vendor.call(el, selector);
		var nodes = el.parentNode.querySelectorAll(selector);
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i] == el) return true;
		}
		return false;
	}

	var throttleit = throttle;

	/**
	 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
	 *
	 * @param {Function} func Function to wrap.
	 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
	 * @return {Function} A new function that wraps the `func` function passed in.
	 */

	function throttle(func, wait) {
		var ctx, args, rtn, timeoutID; // caching
		var last = 0;

		return function throttled() {
			ctx = this;
			args = arguments;
			var delta = new Date() - last;
			if (!timeoutID)
				if (delta >= wait) call();
				else timeoutID = setTimeout(call, wait - delta);
			return rtn;
		};

		function call() {
			timeoutID = 0;
			last = +new Date();
			rtn = func.apply(ctx, args);
			ctx = null;
			args = null;
		}
	}

	var arrayParallel = function parallel(fns, context, callback) {
		if (!callback) {
			if (typeof context === 'function') {
				callback = context;
				context = null;
			} else {
				callback = noop;
			}
		}

		var pending = fns && fns.length;
		if (!pending) return callback(null, []);

		var finished = false;
		var results = new Array(pending);

		fns.forEach(context ? function (fn, i) {
			fn.call(context, maybeDone(i));
		} : function (fn, i) {
			fn(maybeDone(i));
		});

		function maybeDone(i) {
			return function (err, result) {
				if (finished) return;

				if (err) {
					callback(err, results);
					finished = true;
					return
				}

				results[i] = result;

				if (!--pending) callback(null, results);
			}
		}
	};

	function noop() {
	}

	/**
	 * Always returns a numeric value, given a value. Logic from jQuery's `isNumeric`.
	 * @param {*} value Possibly numeric value.
	 * @return {number} `value` or zero if `value` isn't numeric.
	 */
	function getNumber(value) {
		return parseFloat(value) || 0;
	}

	var Point =
		/*#__PURE__*/
		function () {
			/**
			 * Represents a coordinate pair.
			 * @param {number} [x=0] X.
			 * @param {number} [y=0] Y.
			 */
			function Point(x, y) {
				_classCallCheck(this, Point);

				this.x = getNumber(x);
				this.y = getNumber(y);
			}

			/**
			 * Whether two points are equal.
			 * @param {Point} a Point A.
			 * @param {Point} b Point B.
			 * @return {boolean}
			 */


			_createClass(Point, null, [{
				key: "equals",
				value: function equals(a, b) {
					return a.x === b.x && a.y === b.y;
				}
			}]);

			return Point;
		}();

	var Rect =
		/*#__PURE__*/
		function () {
			/**
			 * Class for representing rectangular regions.
			 * https://github.com/google/closure-library/blob/master/closure/goog/math/rect.js
			 * @param {number} x Left.
			 * @param {number} y Top.
			 * @param {number} w Width.
			 * @param {number} h Height.
			 * @param {number} id Identifier
			 * @constructor
			 */
			function Rect(x, y, w, h, id) {
				_classCallCheck(this, Rect);

				this.id = id;
				/** @type {number} */

				this.left = x;
				/** @type {number} */

				this.top = y;
				/** @type {number} */

				this.width = w;
				/** @type {number} */

				this.height = h;
			}

			/**
			 * Returns whether two rectangles intersect.
			 * @param {Rect} a A Rectangle.
			 * @param {Rect} b A Rectangle.
			 * @return {boolean} Whether a and b intersect.
			 */


			_createClass(Rect, null, [{
				key: "intersects",
				value: function intersects(a, b) {
					return a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;
				}
			}]);

			return Rect;
		}();

	var Classes = {
		BASE: 'shuffle',
		SHUFFLE_ITEM: 'shuffle-item',
		VISIBLE: 'shuffle-item--visible',
		HIDDEN: 'shuffle-item--hidden'
	};

	var id = 0;

	var ShuffleItem =
		/*#__PURE__*/
		function () {
			function ShuffleItem(element) {
				_classCallCheck(this, ShuffleItem);

				id += 1;
				this.id = id;
				this.element = element;
				/**
				 * Used to separate items for layout and shrink.
				 */

				this.isVisible = true;
				/**
				 * Used to determine if a transition will happen. By the time the _layout
				 * and _shrink methods get the ShuffleItem instances, the `isVisible` value
				 * has already been changed by the separation methods, so this property is
				 * needed to know if the item was visible/hidden before the shrink/layout.
				 */

				this.isHidden = false;
			}

			_createClass(ShuffleItem, [{
				key: "show",
				value: function show() {
					this.isVisible = true;
					this.element.classList.remove(Classes.HIDDEN);
					this.element.classList.add(Classes.VISIBLE);
					this.element.removeAttribute('aria-hidden');
				}
			}, {
				key: "hide",
				value: function hide() {
					this.isVisible = false;
					this.element.classList.remove(Classes.VISIBLE);
					this.element.classList.add(Classes.HIDDEN);
					this.element.setAttribute('aria-hidden', true);
				}
			}, {
				key: "init",
				value: function init() {
					this.addClasses([Classes.SHUFFLE_ITEM, Classes.VISIBLE]);
					this.applyCss(ShuffleItem.Css.INITIAL);
					this.scale = ShuffleItem.Scale.VISIBLE;
					this.point = new Point();
				}
			}, {
				key: "addClasses",
				value: function addClasses(classes) {
					var _this = this;

					classes.forEach(function (className) {
						_this.element.classList.add(className);
					});
				}
			}, {
				key: "removeClasses",
				value: function removeClasses(classes) {
					var _this2 = this;

					classes.forEach(function (className) {
						_this2.element.classList.remove(className);
					});
				}
			}, {
				key: "applyCss",
				value: function applyCss(obj) {
					var _this3 = this;

					Object.keys(obj).forEach(function (key) {
						_this3.element.style[key] = obj[key];
					});
				}
			}, {
				key: "dispose",
				value: function dispose() {
					this.removeClasses([Classes.HIDDEN, Classes.VISIBLE, Classes.SHUFFLE_ITEM]);
					this.element.removeAttribute('style');
					this.element = null;
				}
			}]);

			return ShuffleItem;
		}();

	ShuffleItem.Css = {
		INITIAL: {
			position: 'absolute',
			top: 0,
			left: 0,
			visibility: 'visible',
			willChange: 'transform'
		},
		VISIBLE: {
			before: {
				opacity: 1,
				visibility: 'visible'
			},
			after: {
				transitionDelay: ''
			}
		},
		HIDDEN: {
			before: {
				opacity: 0
			},
			after: {
				visibility: 'hidden',
				transitionDelay: ''
			}
		}
	};
	ShuffleItem.Scale = {
		VISIBLE: 1,
		HIDDEN: 0.001
	};

	var value = null;
	var testComputedSize = (function () {
		if (value !== null) {
			return value;
		}

		var element = document.body || document.documentElement;
		var e = document.createElement('div');
		e.style.cssText = 'width:10px;padding:2px;box-sizing:border-box;';
		element.appendChild(e);
		value = window.getComputedStyle(e, null).width === '10px';
		element.removeChild(e);
		return value;
	});

	/**
	 * Retrieve the computed style for an element, parsed as a float.
	 * @param {Element} element Element to get style for.
	 * @param {string} style Style property.
	 * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to
	 *     use instead of asking for them again.
	 * @return {number} The parsed computed value or zero if that fails because IE
	 *     will return 'auto' when the element doesn't have margins instead of
	 *     the computed style.
	 */

	function getNumberStyle(element, style) {
		var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.getComputedStyle(element, null);
		var value = getNumber(styles[style]); // Support IE<=11 and W3C spec.

		if (!testComputedSize() && style === 'width') {
			value += getNumber(styles.paddingLeft) + getNumber(styles.paddingRight) + getNumber(styles.borderLeftWidth) + getNumber(styles.borderRightWidth);
		} else if (!testComputedSize() && style === 'height') {
			value += getNumber(styles.paddingTop) + getNumber(styles.paddingBottom) + getNumber(styles.borderTopWidth) + getNumber(styles.borderBottomWidth);
		}

		return value;
	}

	/**
	 * Fisher-Yates shuffle.
	 * http://stackoverflow.com/a/962890/373422
	 * https://bost.ocks.org/mike/shuffle/
	 * @param {Array} array Array to shuffle.
	 * @return {Array} Randomly sorted array.
	 */
	function randomize(array) {
		var n = array.length;

		while (n) {
			n -= 1;
			var i = Math.floor(Math.random() * (n + 1));
			var temp = array[i];
			array[i] = array[n];
			array[n] = temp;
		}

		return array;
	}

	var defaults = {
		// Use array.reverse() to reverse the results
		reverse: false,
		// Sorting function
		by: null,
		// Custom sort function
		compare: null,
		// If true, this will skip the sorting and return a randomized order in the array
		randomize: false,
		// Determines which property of each item in the array is passed to the
		// sorting method.
		key: 'element'
	};

	/**
	 * You can return `undefined` from the `by` function to revert to DOM order.
	 * @param {Array<T>} arr Array to sort.
	 * @param {SortOptions} options Sorting options.
	 * @return {Array<T>}
	 */

	function sorter(arr, options) {
		var opts = Object.assign({}, defaults, options);
		var original = Array.from(arr);
		var revert = false;

		if (!arr.length) {
			return [];
		}

		if (opts.randomize) {
			return randomize(arr);
		} // Sort the elements by the opts.by function.
		// If we don't have opts.by, default to DOM order


		if (typeof opts.by === 'function') {
			arr.sort(function (a, b) {
				// Exit early if we already know we want to revert
				if (revert) {
					return 0;
				}

				var valA = opts.by(a[opts.key]);
				var valB = opts.by(b[opts.key]); // If both values are undefined, use the DOM order

				if (valA === undefined && valB === undefined) {
					revert = true;
					return 0;
				}

				if (valA < valB || valA === 'sortFirst' || valB === 'sortLast') {
					return -1;
				}

				if (valA > valB || valA === 'sortLast' || valB === 'sortFirst') {
					return 1;
				}

				return 0;
			});
		} else if (typeof opts.compare === 'function') {
			arr.sort(opts.compare);
		} // Revert to the original array if necessary


		if (revert) {
			return original;
		}

		if (opts.reverse) {
			arr.reverse();
		}

		return arr;
	}

	var transitions = {};
	var eventName = 'transitionend';
	var count = 0;

	function uniqueId() {
		count += 1;
		return eventName + count;
	}

	function cancelTransitionEnd(id) {
		if (transitions[id]) {
			transitions[id].element.removeEventListener(eventName, transitions[id].listener);
			transitions[id] = null;
			return true;
		}

		return false;
	}

	function onTransitionEnd(element, callback) {
		var id = uniqueId();

		var listener = function listener(evt) {
			if (evt.currentTarget === evt.target) {
				cancelTransitionEnd(id);
				callback(evt);
			}
		};

		element.addEventListener(eventName, listener);
		transitions[id] = {
			element: element,
			listener: listener
		};
		return id;
	}

	function arrayMax(array) {
		return Math.max.apply(Math, array); // eslint-disable-line prefer-spread
	}

	function arrayMin(array) {
		return Math.min.apply(Math, array); // eslint-disable-line prefer-spread
	}

	/**
	 * Determine the number of columns an items spans.
	 * @param {number} itemWidth Width of the item.
	 * @param {number} columnWidth Width of the column (includes gutter).
	 * @param {number} columns Total number of columns
	 * @param {number} threshold A buffer value for the size of the column to fit.
	 * @return {number}
	 */

	function getColumnSpan(itemWidth, columnWidth, columns, threshold) {
		var columnSpan = itemWidth / columnWidth; // If the difference between the rounded column span number and the
		// calculated column span number is really small, round the number to
		// make it fit.

		if (Math.abs(Math.round(columnSpan) - columnSpan) < threshold) {
			// e.g. columnSpan = 4.0089945390298745
			columnSpan = Math.round(columnSpan);
		} // Ensure the column span is not more than the amount of columns in the whole layout.


		return Math.min(Math.ceil(columnSpan), columns);
	}

	/**
	 * Retrieves the column set to use for placement.
	 * @param {number} columnSpan The number of columns this current item spans.
	 * @param {number} columns The total columns in the grid.
	 * @return {Array.<number>} An array of numbers represeting the column set.
	 */

	function getAvailablePositions(positions, columnSpan, columns) {
		// The item spans only one column.
		if (columnSpan === 1) {
			return positions;
		} // The item spans more than one column, figure out how many different
		// places it could fit horizontally.
		// The group count is the number of places within the positions this block
		// could fit, ignoring the current positions of items.
		// Imagine a 2 column brick as the second item in a 4 column grid with
		// 10px height each. Find the places it would fit:
		// [20, 10, 10, 0]
		//  |   |   |
		//  *   *   *
		//
		// Then take the places which fit and get the bigger of the two:
		// max([20, 10]), max([10, 10]), max([10, 0]) = [20, 10, 10]
		//
		// Next, find the first smallest number (the short column).
		// [20, 10, 10]
		//      |
		//      *
		//
		// And that's where it should be placed!
		//
		// Another example where the second column's item extends past the first:
		// [10, 20, 10, 0] => [20, 20, 10] => 10


		var available = []; // For how many possible positions for this item there are.

		for (var i = 0; i <= columns - columnSpan; i++) {
			// Find the bigger value for each place it could fit.
			available.push(arrayMax(positions.slice(i, i + columnSpan)));
		}

		return available;
	}

	/**
	 * Find index of short column, the first from the left where this item will go.
	 *
	 * @param {Array.<number>} positions The array to search for the smallest number.
	 * @param {number} buffer Optional buffer which is very useful when the height
	 *     is a percentage of the width.
	 * @return {number} Index of the short column.
	 */

	function getShortColumn(positions, buffer) {
		var minPosition = arrayMin(positions);

		for (var i = 0, len = positions.length; i < len; i++) {
			if (positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer) {
				return i;
			}
		}

		return 0;
	}

	/**
	 * Determine the location of the next item, based on its size.
	 * @param {Object} itemSize Object with width and height.
	 * @param {Array.<number>} positions Positions of the other current items.
	 * @param {number} gridSize The column width or row height.
	 * @param {number} total The total number of columns or rows.
	 * @param {number} threshold Buffer value for the column to fit.
	 * @param {number} buffer Vertical buffer for the height of items.
	 * @return {Point}
	 */

	function getItemPosition(_ref) {
		var itemSize = _ref.itemSize,
			positions = _ref.positions,
			gridSize = _ref.gridSize,
			total = _ref.total,
			threshold = _ref.threshold,
			buffer = _ref.buffer;
		var span = getColumnSpan(itemSize.width, gridSize, total, threshold);
		var setY = getAvailablePositions(positions, span, total);
		var shortColumnIndex = getShortColumn(setY, buffer); // Position the item

		var point = new Point(gridSize * shortColumnIndex, setY[shortColumnIndex]); // Update the columns array with the new values for each column.
		// e.g. before the update the columns could be [250, 0, 0, 0] for an item
		// which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].

		var setHeight = setY[shortColumnIndex] + itemSize.height;

		for (var i = 0; i < span; i++) {
			positions[shortColumnIndex + i] = setHeight;
		}

		return point;
	}

	/**
	 * This method attempts to center items. This method could potentially be slow
	 * with a large number of items because it must place items, then check every
	 * previous item to ensure there is no overlap.
	 * @param {Array.<Rect>} itemRects Item data objects.
	 * @param {number} containerWidth Width of the containing element.
	 * @return {Array.<Point>}
	 */

	function getCenteredPositions(itemRects, containerWidth) {
		var rowMap = {}; // Populate rows by their offset because items could jump between rows like:
		// a   c
		//  bbb

		itemRects.forEach(function (itemRect) {
			if (rowMap[itemRect.top]) {
				// Push the point to the last row array.
				rowMap[itemRect.top].push(itemRect);
			} else {
				// Start of a new row.
				rowMap[itemRect.top] = [itemRect];
			}
		}); // For each row, find the end of the last item, then calculate
		// the remaining space by dividing it by 2. Then add that
		// offset to the x position of each point.

		var rects = [];
		var rows = [];
		var centeredRows = [];
		Object.keys(rowMap).forEach(function (key) {
			var itemRects = rowMap[key];
			rows.push(itemRects);
			var lastItem = itemRects[itemRects.length - 1];
			var end = lastItem.left + lastItem.width;
			var offset = Math.round((containerWidth - end) / 2);
			var finalRects = itemRects;
			var canMove = false;

			if (offset > 0) {
				var newRects = [];
				canMove = itemRects.every(function (r) {
					var newRect = new Rect(r.left + offset, r.top, r.width, r.height, r.id); // Check all current rects to make sure none overlap.

					var noOverlap = !rects.some(function (r) {
						return Rect.intersects(newRect, r);
					});
					newRects.push(newRect);
					return noOverlap;
				}); // If none of the rectangles overlapped, the whole group can be centered.

				if (canMove) {
					finalRects = newRects;
				}
			} // If the items are not going to be offset, ensure that the original
			// placement for this row will not overlap previous rows (row-spanning
			// elements could be in the way).


			if (!canMove) {
				var intersectingRect;
				var hasOverlap = itemRects.some(function (itemRect) {
					return rects.some(function (r) {
						var intersects = Rect.intersects(itemRect, r);

						if (intersects) {
							intersectingRect = r;
						}

						return intersects;
					});
				}); // If there is any overlap, replace the overlapping row with the original.

				if (hasOverlap) {
					var rowIndex = centeredRows.findIndex(function (items) {
						return items.includes(intersectingRect);
					});
					centeredRows.splice(rowIndex, 1, rows[rowIndex]);
				}
			}

			rects = rects.concat(finalRects);
			centeredRows.push(finalRects);
		}); // Reduce array of arrays to a single array of points.
		// https://stackoverflow.com/a/10865042/373422
		// Then reset sort back to how the items were passed to this method.
		// Remove the wrapper object with index, map to a Point.

		return [].concat.apply([], centeredRows) // eslint-disable-line prefer-spread
			.sort(function (a, b) {
				return a.id - b.id;
			}).map(function (itemRect) {
				return new Point(itemRect.left, itemRect.top);
			});
	}

	/**
	 * Hyphenates a javascript style string to a css one. For example:
	 * MozBoxSizing -> -moz-box-sizing.
	 * @param {string} str The string to hyphenate.
	 * @return {string} The hyphenated string.
	 */
	function hyphenate(str) {
		return str.replace(/([A-Z])/g, function (str, m1) {
			return "-".concat(m1.toLowerCase());
		});
	}

	function arrayUnique(x) {
		return Array.from(new Set(x));
	} // Used for unique instance variables


	var id$1 = 0;

	var Shuffle =
		/*#__PURE__*/
		function (_TinyEmitter) {
			_inherits(Shuffle, _TinyEmitter);

			/**
			 * Categorize, sort, and filter a responsive grid of items.
			 *
			 * @param {Element} element An element which is the parent container for the grid items.
			 * @param {Object} [options=Shuffle.options] Options object.
			 * @constructor
			 */
			function Shuffle(element) {
				var _this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				_classCallCheck(this, Shuffle);

				_this = _possibleConstructorReturn(this, _getPrototypeOf(Shuffle).call(this));
				_this.options = Object.assign({}, Shuffle.options, options); // Allow misspelling of delimiter since that's how it used to be.
				// Remove in v6.

				if (_this.options.delimeter) {
					_this.options.delimiter = _this.options.delimeter;
				}

				_this.lastSort = {};
				_this.group = Shuffle.ALL_ITEMS;
				_this.lastFilter = Shuffle.ALL_ITEMS;
				_this.isEnabled = true;
				_this.isDestroyed = false;
				_this.isInitialized = false;
				_this._transitions = [];
				_this.isTransitioning = false;
				_this._queue = [];

				var el = _this._getElementOption(element);

				if (!el) {
					throw new TypeError('Shuffle needs to be initialized with an element.');
				}

				_this.element = el;
				_this.id = 'shuffle_' + id$1;
				id$1 += 1;

				_this._init();

				_this.isInitialized = true;
				return _this;
			}

			_createClass(Shuffle, [{
				key: "_init",
				value: function _init() {
					this.items = this._getItems();
					this.options.sizer = this._getElementOption(this.options.sizer); // Add class and invalidate styles

					this.element.classList.add(Shuffle.Classes.BASE); // Set initial css for each item

					this._initItems(this.items); // Bind resize events


					this._onResize = this._getResizeFunction();
					window.addEventListener('resize', this._onResize); // If the page has not already emitted the `load` event, call layout on load.
					// This avoids layout issues caused by images and fonts loading after the
					// instance has been initialized.

					if (document.readyState !== 'complete') {
						var layout = this.layout.bind(this);
						window.addEventListener('load', function onLoad() {
							window.removeEventListener('load', onLoad);
							layout();
						});
					} // Get container css all in one request. Causes reflow


					var containerCss = window.getComputedStyle(this.element, null);
					var containerWidth = Shuffle.getSize(this.element).width; // Add styles to the container if it doesn't have them.

					this._validateStyles(containerCss); // We already got the container's width above, no need to cause another
					// reflow getting it again... Calculate the number of columns there will be


					this._setColumns(containerWidth); // Kick off!


					this.filter(this.options.group, this.options.initialSort); // The shuffle items haven't had transitions set on them yet so the user
					// doesn't see the first layout. Set them now that the first layout is done.
					// First, however, a synchronous layout must be caused for the previous
					// styles to be applied without transitions.

					this.element.offsetWidth; // eslint-disable-line no-unused-expressions

					this.setItemTransitions(this.items);
					this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing);
				}
				/**
				 * Returns a throttled and proxied function for the resize handler.
				 * @return {function}
				 * @private
				 */

			}, {
				key: "_getResizeFunction",
				value: function _getResizeFunction() {
					var resizeFunction = this._handleResize.bind(this);

					return this.options.throttle ? this.options.throttle(resizeFunction, this.options.throttleTime) : resizeFunction;
				}
				/**
				 * Retrieve an element from an option.
				 * @param {string|jQuery|Element} option The option to check.
				 * @return {?Element} The plain element or null.
				 * @private
				 */

			}, {
				key: "_getElementOption",
				value: function _getElementOption(option) {
					// If column width is a string, treat is as a selector and search for the
					// sizer element within the outermost container
					if (typeof option === 'string') {
						return this.element.querySelector(option);
					} // Check for an element


					if (option && option.nodeType && option.nodeType === 1) {
						return option;
					} // Check for jQuery object


					if (option && option.jquery) {
						return option[0];
					}

					return null;
				}
				/**
				 * Ensures the shuffle container has the css styles it needs applied to it.
				 * @param {Object} styles Key value pairs for position and overflow.
				 * @private
				 */

			}, {
				key: "_validateStyles",
				value: function _validateStyles(styles) {
					// Position cannot be static.
					if (styles.position === 'static') {
						this.element.style.position = 'relative';
					} // Overflow has to be hidden.


					if (styles.overflow !== 'hidden') {
						this.element.style.overflow = 'hidden';
					}
				}
				/**
				 * Filter the elements by a category.
				 * @param {string|string[]|function(Element):boolean} [category] Category to
				 *     filter by. If it's given, the last category will be used to filter the items.
				 * @param {Array} [collection] Optionally filter a collection. Defaults to
				 *     all the items.
				 * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}
				 * @private
				 */

			}, {
				key: "_filter",
				value: function _filter() {
					var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastFilter;
					var collection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.items;

					var set = this._getFilteredSets(category, collection); // Individually add/remove hidden/visible classes


					this._toggleFilterClasses(set); // Save the last filter in case elements are appended.


					this.lastFilter = category; // This is saved mainly because providing a filter function (like searching)
					// will overwrite the `lastFilter` property every time its called.

					if (typeof category === 'string') {
						this.group = category;
					}

					return set;
				}
				/**
				 * Returns an object containing the visible and hidden elements.
				 * @param {string|string[]|function(Element):boolean} category Category or function to filter by.
				 * @param {ShuffleItem[]} items A collection of items to filter.
				 * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}
				 * @private
				 */

			}, {
				key: "_getFilteredSets",
				value: function _getFilteredSets(category, items) {
					var _this2 = this;

					var visible = [];
					var hidden = []; // category === 'all', add visible class to everything

					if (category === Shuffle.ALL_ITEMS) {
						visible = items; // Loop through each item and use provided function to determine
						// whether to hide it or not.
					} else {
						items.forEach(function (item) {
							if (_this2._doesPassFilter(category, item.element)) {
								visible.push(item);
							} else {
								hidden.push(item);
							}
						});
					}

					return {
						visible: visible,
						hidden: hidden
					};
				}
				/**
				 * Test an item to see if it passes a category.
				 * @param {string|string[]|function():boolean} category Category or function to filter by.
				 * @param {Element} element An element to test.
				 * @return {boolean} Whether it passes the category/filter.
				 * @private
				 */

			}, {
				key: "_doesPassFilter",
				value: function _doesPassFilter(category, element) {
					if (typeof category === 'function') {
						return category.call(element, element, this);
					} // Check each element's data-groups attribute against the given category.


					var attr = element.getAttribute('data-' + Shuffle.FILTER_ATTRIBUTE_KEY);
					var keys = this.options.delimiter ? attr.split(this.options.delimiter) : JSON.parse(attr);

					function testCategory(category) {
						return keys.includes(category);
					}

					if (Array.isArray(category)) {
						if (this.options.filterMode === Shuffle.FilterMode.ANY) {
							return category.some(testCategory);
						}

						return category.every(testCategory);
					}

					return keys.includes(category);
				}
				/**
				 * Toggles the visible and hidden class names.
				 * @param {{visible, hidden}} Object with visible and hidden arrays.
				 * @private
				 */

			}, {
				key: "_toggleFilterClasses",
				value: function _toggleFilterClasses(_ref) {
					var visible = _ref.visible,
						hidden = _ref.hidden;
					visible.forEach(function (item) {
						item.show();
					});
					hidden.forEach(function (item) {
						item.hide();
					});
				}
				/**
				 * Set the initial css for each item
				 * @param {ShuffleItem[]} items Set to initialize.
				 * @private
				 */

			}, {
				key: "_initItems",
				value: function _initItems(items) {
					items.forEach(function (item) {
						item.init();
					});
				}
				/**
				 * Remove element reference and styles.
				 * @param {ShuffleItem[]} items Set to dispose.
				 * @private
				 */

			}, {
				key: "_disposeItems",
				value: function _disposeItems(items) {
					items.forEach(function (item) {
						item.dispose();
					});
				}
				/**
				 * Updates the visible item count.
				 * @private
				 */

			}, {
				key: "_updateItemCount",
				value: function _updateItemCount() {
					this.visibleItems = this._getFilteredItems().length;
				}
				/**
				 * Sets css transform transition on a group of elements. This is not executed
				 * at the same time as `item.init` so that transitions don't occur upon
				 * initialization of a new Shuffle instance.
				 * @param {ShuffleItem[]} items Shuffle items to set transitions on.
				 * @protected
				 */

			}, {
				key: "setItemTransitions",
				value: function setItemTransitions(items) {
					var _this$options = this.options,
						speed = _this$options.speed,
						easing = _this$options.easing;
					var positionProps = this.options.useTransforms ? ['transform'] : ['top', 'left']; // Allow users to transtion other properties if they exist in the `before`
					// css mapping of the shuffle item.

					var cssProps = Object.keys(ShuffleItem.Css.HIDDEN.before).map(function (k) {
						return hyphenate(k);
					});
					var properties = positionProps.concat(cssProps).join();
					items.forEach(function (item) {
						item.element.style.transitionDuration = speed + 'ms';
						item.element.style.transitionTimingFunction = easing;
						item.element.style.transitionProperty = properties;
					});
				}
			}, {
				key: "_getItems",
				value: function _getItems() {
					var _this3 = this;

					return Array.from(this.element.children).filter(function (el) {
						return matchesSelector(el, _this3.options.itemSelector);
					}).map(function (el) {
						return new ShuffleItem(el);
					});
				}
				/**
				 * Combine the current items array with a new one and sort it by DOM order.
				 * @param {ShuffleItem[]} items Items to track.
				 * @return {ShuffleItem[]}
				 */

			}, {
				key: "_mergeNewItems",
				value: function _mergeNewItems(items) {
					var children = Array.from(this.element.children);
					return sorter(this.items.concat(items), {
						by: function by(element) {
							return children.indexOf(element);
						}
					});
				}
			}, {
				key: "_getFilteredItems",
				value: function _getFilteredItems() {
					return this.items.filter(function (item) {
						return item.isVisible;
					});
				}
			}, {
				key: "_getConcealedItems",
				value: function _getConcealedItems() {
					return this.items.filter(function (item) {
						return !item.isVisible;
					});
				}
				/**
				 * Returns the column size, based on column width and sizer options.
				 * @param {number} containerWidth Size of the parent container.
				 * @param {number} gutterSize Size of the gutters.
				 * @return {number}
				 * @private
				 */

			}, {
				key: "_getColumnSize",
				value: function _getColumnSize(containerWidth, gutterSize) {
					var size; // If the columnWidth property is a function, then the grid is fluid

					if (typeof this.options.columnWidth === 'function') {
						size = this.options.columnWidth(containerWidth); // columnWidth option isn't a function, are they using a sizing element?
					} else if (this.options.sizer) {
						size = Shuffle.getSize(this.options.sizer).width; // if not, how about the explicitly set option?
					} else if (this.options.columnWidth) {
						size = this.options.columnWidth; // or use the size of the first item
					} else if (this.items.length > 0) {
						size = Shuffle.getSize(this.items[0].element, true).width; // if there's no items, use size of container
					} else {
						size = containerWidth;
					} // Don't let them set a column width of zero.


					if (size === 0) {
						size = containerWidth;
					}

					return size + gutterSize;
				}
				/**
				 * Returns the gutter size, based on gutter width and sizer options.
				 * @param {number} containerWidth Size of the parent container.
				 * @return {number}
				 * @private
				 */

			}, {
				key: "_getGutterSize",
				value: function _getGutterSize(containerWidth) {
					var size;

					if (typeof this.options.gutterWidth === 'function') {
						size = this.options.gutterWidth(containerWidth);
					} else if (this.options.sizer) {
						size = getNumberStyle(this.options.sizer, 'marginLeft');
					} else {
						size = this.options.gutterWidth;
					}

					return size;
				}
				/**
				 * Calculate the number of columns to be used. Gets css if using sizer element.
				 * @param {number} [containerWidth] Optionally specify a container width if
				 *    it's already available.
				 */

			}, {
				key: "_setColumns",
				value: function _setColumns() {
					var containerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Shuffle.getSize(this.element).width;

					var gutter = this._getGutterSize(containerWidth);

					var columnWidth = this._getColumnSize(containerWidth, gutter);

					var calculatedColumns = (containerWidth + gutter) / columnWidth; // Widths given from getStyles are not precise enough...

					if (Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.options.columnThreshold) {
						// e.g. calculatedColumns = 11.998876
						calculatedColumns = Math.round(calculatedColumns);
					}

					this.cols = Math.max(Math.floor(calculatedColumns || 0), 1);
					this.containerWidth = containerWidth;
					this.colWidth = columnWidth;
				}
				/**
				 * Adjust the height of the grid
				 */

			}, {
				key: "_setContainerSize",
				value: function _setContainerSize() {
					this.element.style.height = this._getContainerSize() + 'px';
				}
				/**
				 * Based on the column heights, it returns the biggest one.
				 * @return {number}
				 * @private
				 */

			}, {
				key: "_getContainerSize",
				value: function _getContainerSize() {
					return arrayMax(this.positions);
				}
				/**
				 * Get the clamped stagger amount.
				 * @param {number} index Index of the item to be staggered.
				 * @return {number}
				 */

			}, {
				key: "_getStaggerAmount",
				value: function _getStaggerAmount(index) {
					return Math.min(index * this.options.staggerAmount, this.options.staggerAmountMax);
				}
				/**
				 * Emit an event from this instance.
				 * @param {string} name Event name.
				 * @param {Object} [data={}] Optional object data.
				 */

			}, {
				key: "_dispatch",
				value: function _dispatch(name) {
					var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

					if (this.isDestroyed) {
						return;
					}

					data.shuffle = this;
					this.emit(name, data);
				}
				/**
				 * Zeros out the y columns array, which is used to determine item placement.
				 * @private
				 */

			}, {
				key: "_resetCols",
				value: function _resetCols() {
					var i = this.cols;
					this.positions = [];

					while (i) {
						i -= 1;
						this.positions.push(0);
					}
				}
				/**
				 * Loops through each item that should be shown and calculates the x, y position.
				 * @param {ShuffleItem[]} items Array of items that will be shown/layed
				 *     out in order in their array.
				 */

			}, {
				key: "_layout",
				value: function _layout(items) {
					var _this4 = this;

					var itemPositions = this._getNextPositions(items);

					var count = 0;
					items.forEach(function (item, i) {
						function callback() {
							item.applyCss(ShuffleItem.Css.VISIBLE.after);
						} // If the item will not change its position, do not add it to the render
						// queue. Transitions don't fire when setting a property to the same value.


						if (Point.equals(item.point, itemPositions[i]) && !item.isHidden) {
							item.applyCss(ShuffleItem.Css.VISIBLE.before);
							callback();
							return;
						}

						item.point = itemPositions[i];
						item.scale = ShuffleItem.Scale.VISIBLE;
						item.isHidden = false; // Clone the object so that the `before` object isn't modified when the
						// transition delay is added.

						var styles = _this4.getStylesForTransition(item, ShuffleItem.Css.VISIBLE.before);

						styles.transitionDelay = _this4._getStaggerAmount(count) + 'ms';

						_this4._queue.push({
							item: item,
							styles: styles,
							callback: callback
						});

						count += 1;
					});
				}
				/**
				 * Return an array of Point instances representing the future positions of
				 * each item.
				 * @param {ShuffleItem[]} items Array of sorted shuffle items.
				 * @return {Point[]}
				 * @private
				 */

			}, {
				key: "_getNextPositions",
				value: function _getNextPositions(items) {
					var _this5 = this;

					// If position data is going to be changed, add the item's size to the
					// transformer to allow for calculations.
					if (this.options.isCentered) {
						var itemsData = items.map(function (item, i) {
							var itemSize = Shuffle.getSize(item.element, true);

							var point = _this5._getItemPosition(itemSize);

							return new Rect(point.x, point.y, itemSize.width, itemSize.height, i);
						});
						return this.getTransformedPositions(itemsData, this.containerWidth);
					} // If no transforms are going to happen, simply return an array of the
					// future points of each item.


					return items.map(function (item) {
						return _this5._getItemPosition(Shuffle.getSize(item.element, true));
					});
				}
				/**
				 * Determine the location of the next item, based on its size.
				 * @param {{width: number, height: number}} itemSize Object with width and height.
				 * @return {Point}
				 * @private
				 */

			}, {
				key: "_getItemPosition",
				value: function _getItemPosition(itemSize) {
					return getItemPosition({
						itemSize: itemSize,
						positions: this.positions,
						gridSize: this.colWidth,
						total: this.cols,
						threshold: this.options.columnThreshold,
						buffer: this.options.buffer
					});
				}
				/**
				 * Mutate positions before they're applied.
				 * @param {Rect[]} itemRects Item data objects.
				 * @param {number} containerWidth Width of the containing element.
				 * @return {Point[]}
				 * @protected
				 */

			}, {
				key: "getTransformedPositions",
				value: function getTransformedPositions(itemRects, containerWidth) {
					return getCenteredPositions(itemRects, containerWidth);
				}
				/**
				 * Hides the elements that don't match our filter.
				 * @param {ShuffleItem[]} collection Collection to shrink.
				 * @private
				 */

			}, {
				key: "_shrink",
				value: function _shrink() {
					var _this6 = this;

					var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getConcealedItems();
					var count = 0;
					collection.forEach(function (item) {
						function callback() {
							item.applyCss(ShuffleItem.Css.HIDDEN.after);
						} // Continuing would add a transitionend event listener to the element, but
						// that listener would not execute because the transform and opacity would
						// stay the same.
						// The callback is executed here because it is not guaranteed to be called
						// after the transitionend event because the transitionend could be
						// canceled if another animation starts.


						if (item.isHidden) {
							item.applyCss(ShuffleItem.Css.HIDDEN.before);
							callback();
							return;
						}

						item.scale = ShuffleItem.Scale.HIDDEN;
						item.isHidden = true;

						var styles = _this6.getStylesForTransition(item, ShuffleItem.Css.HIDDEN.before);

						styles.transitionDelay = _this6._getStaggerAmount(count) + 'ms';

						_this6._queue.push({
							item: item,
							styles: styles,
							callback: callback
						});

						count += 1;
					});
				}
				/**
				 * Resize handler.
				 * @private
				 */

			}, {
				key: "_handleResize",
				value: function _handleResize() {
					// If shuffle is disabled, destroyed, don't do anything
					if (!this.isEnabled || this.isDestroyed) {
						return;
					}

					this.update();
				}
				/**
				 * Returns styles which will be applied to the an item for a transition.
				 * @param {ShuffleItem} item Item to get styles for. Should have updated
				 *   scale and point properties.
				 * @param {Object} styleObject Extra styles that will be used in the transition.
				 * @return {!Object} Transforms for transitions, left/top for animate.
				 * @protected
				 */

			}, {
				key: "getStylesForTransition",
				value: function getStylesForTransition(item, styleObject) {
					// Clone the object to avoid mutating the original.
					var styles = Object.assign({}, styleObject);

					if (this.options.useTransforms) {
						var x = this.options.roundTransforms ? Math.round(item.point.x) : item.point.x;
						var y = this.options.roundTransforms ? Math.round(item.point.y) : item.point.y;
						styles.transform = "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(item.scale, ")");
					} else {
						styles.left = item.point.x + 'px';
						styles.top = item.point.y + 'px';
					}

					return styles;
				}
				/**
				 * Listen for the transition end on an element and execute the itemCallback
				 * when it finishes.
				 * @param {Element} element Element to listen on.
				 * @param {function} itemCallback Callback for the item.
				 * @param {function} done Callback to notify `parallel` that this one is done.
				 */

			}, {
				key: "_whenTransitionDone",
				value: function _whenTransitionDone(element, itemCallback, done) {
					var id = onTransitionEnd(element, function (evt) {
						itemCallback();
						done(null, evt);
					});

					this._transitions.push(id);
				}
				/**
				 * Return a function which will set CSS styles and call the `done` function
				 * when (if) the transition finishes.
				 * @param {Object} opts Transition object.
				 * @return {function} A function to be called with a `done` function.
				 */

			}, {
				key: "_getTransitionFunction",
				value: function _getTransitionFunction(opts) {
					var _this7 = this;

					return function (done) {
						opts.item.applyCss(opts.styles);

						_this7._whenTransitionDone(opts.item.element, opts.callback, done);
					};
				}
				/**
				 * Execute the styles gathered in the style queue. This applies styles to elements,
				 * triggering transitions.
				 * @private
				 */

			}, {
				key: "_processQueue",
				value: function _processQueue() {
					if (this.isTransitioning) {
						this._cancelMovement();
					}

					var hasSpeed = this.options.speed > 0;
					var hasQueue = this._queue.length > 0;

					if (hasQueue && hasSpeed && this.isInitialized) {
						this._startTransitions(this._queue);
					} else if (hasQueue) {
						this._styleImmediately(this._queue);

						this._dispatch(Shuffle.EventType.LAYOUT); // A call to layout happened, but none of the newly visible items will
						// change position or the transition duration is zero, which will not trigger
						// the transitionend event.

					} else {
						this._dispatch(Shuffle.EventType.LAYOUT);
					} // Remove everything in the style queue


					this._queue.length = 0;
				}
				/**
				 * Wait for each transition to finish, the emit the layout event.
				 * @param {Object[]} transitions Array of transition objects.
				 */

			}, {
				key: "_startTransitions",
				value: function _startTransitions(transitions) {
					var _this8 = this;

					// Set flag that shuffle is currently in motion.
					this.isTransitioning = true; // Create an array of functions to be called.

					var callbacks = transitions.map(function (obj) {
						return _this8._getTransitionFunction(obj);
					});
					arrayParallel(callbacks, this._movementFinished.bind(this));
				}
			}, {
				key: "_cancelMovement",
				value: function _cancelMovement() {
					// Remove the transition end event for each listener.
					this._transitions.forEach(cancelTransitionEnd); // Reset the array.


					this._transitions.length = 0; // Show it's no longer active.

					this.isTransitioning = false;
				}
				/**
				 * Apply styles without a transition.
				 * @param {Object[]} objects Array of transition objects.
				 * @private
				 */

			}, {
				key: "_styleImmediately",
				value: function _styleImmediately(objects) {
					if (objects.length) {
						var elements = objects.map(function (obj) {
							return obj.item.element;
						});

						Shuffle._skipTransitions(elements, function () {
							objects.forEach(function (obj) {
								obj.item.applyCss(obj.styles);
								obj.callback();
							});
						});
					}
				}
			}, {
				key: "_movementFinished",
				value: function _movementFinished() {
					this._transitions.length = 0;
					this.isTransitioning = false;

					this._dispatch(Shuffle.EventType.LAYOUT);
				}
				/**
				 * The magic. This is what makes the plugin 'shuffle'
				 * @param {string|string[]|function(Element):boolean} [category] Category to filter by.
				 *     Can be a function, string, or array of strings.
				 * @param {SortOptions} [sortOptions] A sort object which can sort the visible set
				 */

			}, {
				key: "filter",
				value: function filter(category, sortOptions) {
					if (!this.isEnabled) {
						return;
					}

					if (!category || category && category.length === 0) {
						category = Shuffle.ALL_ITEMS; // eslint-disable-line no-param-reassign
					}

					this._filter(category); // Shrink each hidden item


					this._shrink(); // How many visible elements?


					this._updateItemCount(); // Update transforms on visible elements so they will animate to their new positions.


					this.sort(sortOptions);
				}
				/**
				 * Gets the visible elements, sorts them, and passes them to layout.
				 * @param {SortOptions} [sortOptions] The options object to pass to `sorter`.
				 */

			}, {
				key: "sort",
				value: function sort() {
					var sortOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastSort;

					if (!this.isEnabled) {
						return;
					}

					this._resetCols();

					var items = sorter(this._getFilteredItems(), sortOptions);

					this._layout(items); // `_layout` always happens after `_shrink`, so it's safe to process the style
					// queue here with styles from the shrink method.


					this._processQueue(); // Adjust the height of the container.


					this._setContainerSize();

					this.lastSort = sortOptions;
				}
				/**
				 * Reposition everything.
				 * @param {boolean} [isOnlyLayout=false] If true, column and gutter widths won't be recalculated.
				 */

			}, {
				key: "update",
				value: function update() {
					var isOnlyLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

					if (this.isEnabled) {
						if (!isOnlyLayout) {
							// Get updated colCount
							this._setColumns();
						} // Layout items


						this.sort();
					}
				}
				/**
				 * Use this instead of `update()` if you don't need the columns and gutters updated
				 * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
				 * could be off.
				 */

			}, {
				key: "layout",
				value: function layout() {
					this.update(true);
				}
				/**
				 * New items have been appended to shuffle. Mix them in with the current
				 * filter or sort status.
				 * @param {Element[]} newItems Collection of new items.
				 */

			}, {
				key: "add",
				value: function add(newItems) {
					var _this9 = this;

					var items = arrayUnique(newItems).map(function (el) {
						return new ShuffleItem(el);
					}); // Add classes and set initial positions.

					this._initItems(items); // Determine which items will go with the current filter.


					this._resetCols();

					var allItems = this._mergeNewItems(items);

					var sortedItems = sorter(allItems, this.lastSort);

					var allSortedItemsSet = this._filter(this.lastFilter, sortedItems);

					var isNewItem = function isNewItem(item) {
						return items.includes(item);
					};

					var applyHiddenState = function applyHiddenState(item) {
						item.scale = ShuffleItem.Scale.HIDDEN;
						item.isHidden = true;
						item.applyCss(ShuffleItem.Css.HIDDEN.before);
						item.applyCss(ShuffleItem.Css.HIDDEN.after);
					}; // Layout all items again so that new items get positions.
					// Synchonously apply positions.


					var itemPositions = this._getNextPositions(allSortedItemsSet.visible);

					allSortedItemsSet.visible.forEach(function (item, i) {
						if (isNewItem(item)) {
							item.point = itemPositions[i];
							applyHiddenState(item);
							item.applyCss(_this9.getStylesForTransition(item, {}));
						}
					});
					allSortedItemsSet.hidden.forEach(function (item) {
						if (isNewItem(item)) {
							applyHiddenState(item);
						}
					}); // Cause layout so that the styles above are applied.

					this.element.offsetWidth; // eslint-disable-line no-unused-expressions
					// Add transition to each item.

					this.setItemTransitions(items); // Update the list of items.

					this.items = this._mergeNewItems(items); // Update layout/visibility of new and old items.

					this.filter(this.lastFilter);
				}
				/**
				 * Disables shuffle from updating dimensions and layout on resize
				 */

			}, {
				key: "disable",
				value: function disable() {
					this.isEnabled = false;
				}
				/**
				 * Enables shuffle again
				 * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters
				 */

			}, {
				key: "enable",
				value: function enable() {
					var isUpdateLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
					this.isEnabled = true;

					if (isUpdateLayout) {
						this.update();
					}
				}
				/**
				 * Remove 1 or more shuffle items.
				 * @param {Element[]} elements An array containing one or more
				 *     elements in shuffle
				 * @return {Shuffle} The shuffle instance.
				 */

			}, {
				key: "remove",
				value: function remove(elements) {
					var _this10 = this;

					if (!elements.length) {
						return;
					}

					var collection = arrayUnique(elements);
					var oldItems = collection.map(function (element) {
						return _this10.getItemByElement(element);
					}).filter(function (item) {
						return !!item;
					});

					var handleLayout = function handleLayout() {
						_this10._disposeItems(oldItems); // Remove the collection in the callback


						collection.forEach(function (element) {
							element.parentNode.removeChild(element);
						});

						_this10._dispatch(Shuffle.EventType.REMOVED, {
							collection: collection
						});
					}; // Hide collection first.


					this._toggleFilterClasses({
						visible: [],
						hidden: oldItems
					});

					this._shrink(oldItems);

					this.sort(); // Update the list of items here because `remove` could be called again
					// with an item that is in the process of being removed.

					this.items = this.items.filter(function (item) {
						return !oldItems.includes(item);
					});

					this._updateItemCount();

					this.once(Shuffle.EventType.LAYOUT, handleLayout);
				}
				/**
				 * Retrieve a shuffle item by its element.
				 * @param {Element} element Element to look for.
				 * @return {?ShuffleItem} A shuffle item or undefined if it's not found.
				 */

			}, {
				key: "getItemByElement",
				value: function getItemByElement(element) {
					return this.items.find(function (item) {
						return item.element === element;
					});
				}
				/**
				 * Dump the elements currently stored and reinitialize all child elements which
				 * match the `itemSelector`.
				 */

			}, {
				key: "resetItems",
				value: function resetItems() {
					var _this11 = this;

					// Remove refs to current items.
					this._disposeItems(this.items);

					this.isInitialized = false; // Find new items in the DOM.

					this.items = this._getItems(); // Set initial styles on the new items.

					this._initItems(this.items);

					this.once(Shuffle.EventType.LAYOUT, function () {
						// Add transition to each item.
						_this11.setItemTransitions(_this11.items);

						_this11.isInitialized = true;
					}); // Lay out all items.

					this.filter(this.lastFilter);
				}
				/**
				 * Destroys shuffle, removes events, styles, and classes
				 */

			}, {
				key: "destroy",
				value: function destroy() {
					this._cancelMovement();

					window.removeEventListener('resize', this._onResize); // Reset container styles

					this.element.classList.remove('shuffle');
					this.element.removeAttribute('style'); // Reset individual item styles

					this._disposeItems(this.items);

					this.items.length = 0;
					this._transitions.length = 0; // Null DOM references

					this.options.sizer = null;
					this.element = null; // Set a flag so if a debounced resize has been triggered,
					// it can first check if it is actually isDestroyed and not doing anything

					this.isDestroyed = true;
					this.isEnabled = false;
				}
				/**
				 * Returns the outer width of an element, optionally including its margins.
				 *
				 * There are a few different methods for getting the width of an element, none of
				 * which work perfectly for all Shuffle's use cases.
				 *
				 * 1. getBoundingClientRect() `left` and `right` properties.
				 *   - Accounts for transform scaled elements, making it useless for Shuffle
				 *   elements which have shrunk.
				 * 2. The `offsetWidth` property.
				 *   - This value stays the same regardless of the elements transform property,
				 *   however, it does not return subpixel values.
				 * 3. getComputedStyle()
				 *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
				 *   padding and border when box-sizing: border-box is set, requiring a feature
				 *   test and extra work to add the padding back for IE and other browsers which
				 *   follow the W3C spec here.
				 *
				 * @param {Element} element The element.
				 * @param {boolean} [includeMargins=false] Whether to include margins.
				 * @return {{width: number, height: number}} The width and height.
				 */

			}], [{
				key: "getSize",
				value: function getSize(element) {
					var includeMargins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
					// Store the styles so that they can be used by others without asking for it again.
					var styles = window.getComputedStyle(element, null);
					var width = getNumberStyle(element, 'width', styles);
					var height = getNumberStyle(element, 'height', styles);

					if (includeMargins) {
						var marginLeft = getNumberStyle(element, 'marginLeft', styles);
						var marginRight = getNumberStyle(element, 'marginRight', styles);
						var marginTop = getNumberStyle(element, 'marginTop', styles);
						var marginBottom = getNumberStyle(element, 'marginBottom', styles);
						width += marginLeft + marginRight;
						height += marginTop + marginBottom;
					}

					return {
						width: width,
						height: height
					};
				}
				/**
				 * Change a property or execute a function which will not have a transition
				 * @param {Element[]} elements DOM elements that won't be transitioned.
				 * @param {function} callback A function which will be called while transition
				 *     is set to 0ms.
				 * @private
				 */

			}, {
				key: "_skipTransitions",
				value: function _skipTransitions(elements, callback) {
					var zero = '0ms'; // Save current duration and delay.

					var data = elements.map(function (element) {
						var style = element.style;
						var duration = style.transitionDuration;
						var delay = style.transitionDelay; // Set the duration to zero so it happens immediately

						style.transitionDuration = zero;
						style.transitionDelay = zero;
						return {
							duration: duration,
							delay: delay
						};
					});
					callback(); // Cause forced synchronous layout.

					elements[0].offsetWidth; // eslint-disable-line no-unused-expressions
					// Put the duration back

					elements.forEach(function (element, i) {
						element.style.transitionDuration = data[i].duration;
						element.style.transitionDelay = data[i].delay;
					});
				}
			}]);

			return Shuffle;
		}(tinyEmitter);

	Shuffle.ShuffleItem = ShuffleItem;
	Shuffle.ALL_ITEMS = 'all';
	Shuffle.FILTER_ATTRIBUTE_KEY = 'groups';
	/** @enum {string} */

	Shuffle.EventType = {
		LAYOUT: 'shuffle:layout',
		REMOVED: 'shuffle:removed'
	};
	/** @enum {string} */

	Shuffle.Classes = Classes;
	/** @enum {string} */

	Shuffle.FilterMode = {
		ANY: 'any',
		ALL: 'all'
	}; // Overrideable options

	Shuffle.options = {
		// Initial filter group.
		group: Shuffle.ALL_ITEMS,
		// Transition/animation speed (milliseconds).
		speed: 250,
		// CSS easing function to use.
		easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
		// e.g. '.picture-item'.
		itemSelector: '*',
		// Element or selector string. Use an element to determine the size of columns
		// and gutters.
		sizer: null,
		// A static number or function that tells the plugin how wide the gutters
		// between columns are (in pixels).
		gutterWidth: 0,
		// A static number or function that returns a number which tells the plugin
		// how wide the columns are (in pixels).
		columnWidth: 0,
		// If your group is not json, and is comma delimeted, you could set delimiter
		// to ','.
		delimiter: null,
		// Useful for percentage based heights when they might not always be exactly
		// the same (in pixels).
		buffer: 0,
		// Reading the width of elements isn't precise enough and can cause columns to
		// jump between values.
		columnThreshold: 0.01,
		// Shuffle can be isInitialized with a sort object. It is the same object
		// given to the sort method.
		initialSort: null,
		// By default, shuffle will throttle resize events. This can be changed or
		// removed.
		throttle: throttleit,
		// How often shuffle can be called on resize (in milliseconds).
		throttleTime: 300,
		// Transition delay offset for each item in milliseconds.
		staggerAmount: 15,
		// Maximum stagger delay in milliseconds.
		staggerAmountMax: 150,
		// Whether to use transforms or absolute positioning.
		useTransforms: true,
		// Affects using an array with filter. e.g. `filter(['one','two'])`. With "any",
		// the element passes the test if any of its groups are in the array. With "all",
		// the element only passes if all groups are in the array.
		filterMode: Shuffle.FilterMode.ANY,
		// Attempt to center grid items in each row.
		isCentered: false,
		// Whether to round pixel values used in translate(x, y). This usually avoids
		// blurriness.
		roundTransforms: true
	};
	Shuffle.Point = Point;
	Shuffle.Rect = Rect; // Expose for testing. Hack at your own risk.

	Shuffle.__sorter = sorter;
	Shuffle.__getColumnSpan = getColumnSpan;
	Shuffle.__getAvailablePositions = getAvailablePositions;
	Shuffle.__getShortColumn = getShortColumn;
	Shuffle.__getCenteredPositions = getCenteredPositions;

	return Shuffle;

}));
//# sourceMappingURL=shuffle.js.map

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(window.jQuery || window.Zepto);
	}
}(function ($) {

	/*>>core*/
	/**
	 *
	 * Magnific Popup Core JS file
	 *
	 */


	/**
	 * Private static constants
	 */
	var CLOSE_EVENT = 'Close',
		BEFORE_CLOSE_EVENT = 'BeforeClose',
		AFTER_CLOSE_EVENT = 'AfterClose',
		BEFORE_APPEND_EVENT = 'BeforeAppend',
		MARKUP_PARSE_EVENT = 'MarkupParse',
		OPEN_EVENT = 'Open',
		CHANGE_EVENT = 'Change',
		NS = 'mfp',
		EVENT_NS = '.' + NS,
		READY_CLASS = 'mfp-ready',
		REMOVING_CLASS = 'mfp-removing',
		PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


	/**
	 * Private vars
	 */
	/*jshint -W079 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
		MagnificPopup = function () {
		},
		_isJQ = !!(window.jQuery),
		_prevStatus,
		_window = $(window),
		_document,
		_prevContentType,
		_wrapClasses,
		_currPopupType;


	/**
	 * Private functions
	 */
	var _mfpOn = function (name, f) {
			mfp.ev.on(NS + name + EVENT_NS, f);
		},
		_getEl = function (className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-' + className;
			if (html) {
				el.innerHTML = html;
			}
			if (!raw) {
				el = $(el);
				if (appendTo) {
					el.appendTo(appendTo);
				}
			} else if (appendTo) {
				appendTo.appendChild(el);
			}
			return el;
		},
		_mfpTrigger = function (e, data) {
			mfp.ev.triggerHandler(NS + e, data);

			if (mfp.st.callbacks) {
				// converts "mfpEventName" to "eventName" callback and triggers it if it's present
				e = e.charAt(0).toLowerCase() + e.slice(1);
				if (mfp.st.callbacks[e]) {
					mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
				}
			}
		},
		_getCloseBtn = function (type) {
			if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
				mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
				_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
		},
		// Initialize Magnific Popup only when called at least once
		_checkInstance = function () {
			if (!$.magnificPopup.instance) {
				/*jshint -W020 */
				mfp = new MagnificPopup();
				mfp.init();
				$.magnificPopup.instance = mfp;
			}
		},
		// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
		supportsTransitions = function () {
			var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
				v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

			if (s['transition'] !== undefined) {
				return true;
			}

			while (v.length) {
				if (v.pop() + 'Transition' in s) {
					return true;
				}
			}

			return false;
		};


	/**
	 * Public functions
	 */
	MagnificPopup.prototype = {

		constructor: MagnificPopup,

		/**
		 * Initializes Magnific Popup plugin.
		 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
		 */
		init: function () {
			var appVersion = navigator.appVersion;
			mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
			mfp.isAndroid = (/android/gi).test(appVersion);
			mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
			mfp.supportsTransition = supportsTransitions();

			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
			_document = $(document);

			mfp.popupsCache = {};
		},

		/**
		 * Opens popup
		 * @param  data [description]
		 */
		open: function (data) {

			var i;

			if (data.isObj === false) {
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();

				mfp.index = 0;
				var items = data.items,
					item;
				for (i = 0; i < items.length; i++) {
					item = items[i];
					if (item.parsed) {
						item = item.el[0];
					}
					if (item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = $.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}

			// if popup is already opened - we just update the content
			if (mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}

			mfp.types = [];
			_wrapClasses = '';
			if (data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}

			if (data.key) {
				if (!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}


			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

			if (mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}


			// Building markup
			// main containers are created only once
			if (!mfp.bgOverlay) {

				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
					mfp.close();
				});

				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
					if (mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});

				mfp.container = _getEl('container', mfp.wrap);
			}

			mfp.contentContainer = _getEl('content');
			if (mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}


			// Initializing modules
			var modules = $.magnificPopup.modules;
			for (i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init' + n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');


			if (mfp.st.showCloseBtn) {
				// Close button
				if (!mfp.st.closeBtnInside) {
					mfp.wrap.append(_getCloseBtn());
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}

			if (mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}


			if (mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}


			if (mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function (e) {
					if (e.keyCode === 27) {
						mfp.close();
					}
				});
			}

			_window.on('resize' + EVENT_NS, function () {
				mfp.updateSize();
			});


			if (!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}

			if (_wrapClasses)
				mfp.wrap.addClass(_wrapClasses);


			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();


			var windowStyles = {};

			if (mfp.fixedContentPos) {
				if (mfp._hasScrollBar(windowHeight)) {
					var s = mfp._getScrollbarSize();
					if (s) {
						windowStyles.marginRight = s;
					}
				}
			}

			if (mfp.fixedContentPos) {
				if (!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}


			var classesToadd = mfp.st.mainClass;
			if (mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if (classesToadd) {
				mfp._addClassToMFP(classesToadd);
			}

			// add content
			mfp.updateItemHTML();

			_mfpTrigger('BuildControls');

			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);

			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));

			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;

			// Wait for next cycle to allow CSS transition
			setTimeout(function () {

				if (mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}

				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

			}, 16);

			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);

			return data;
		},

		/**
		 * Closes the popup
		 */
		close: function () {
			if (!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);

			mfp.isOpen = false;
			// for CSS3 animation
			if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function () {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},

		/**
		 * Helper for close() function
		 */
		_close: function () {
			_mfpTrigger(CLOSE_EVENT);

			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();

			if (mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}

			mfp._removeClassFromMFP(classesToRemove);

			if (mfp.fixedContentPos) {
				var windowStyles = {marginRight: ''};
				if (mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}

			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);

			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');

			// remove close button from target element
			if (mfp.st.showCloseBtn &&
				(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if (mfp.currTemplate.closeBtn)
					mfp.currTemplate.closeBtn.detach();
			}


			if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).focus(); // put tab focus back
			}
			mfp.currItem = null;
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;

			_mfpTrigger(AFTER_CLOSE_EVENT);
		},

		updateSize: function (winHeight) {

			if (mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if (!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}

			_mfpTrigger('Resize');

		},

		/**
		 * Set content of popup based on current index
		 */
		updateItemHTML: function () {
			var item = mfp.items[mfp.index];

			// Detach and perform modifications
			mfp.contentContainer.detach();

			if (mfp.content)
				mfp.content.detach();

			if (!item.parsed) {
				item = mfp.parseEl(mfp.index);
			}

			var type = item.type;

			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });

			mfp.currItem = item;

			if (!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;

				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);

				if (markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}

			if (_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
			}

			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);

			item.preloaded = true;

			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;

			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);

			_mfpTrigger('AfterChange');
		},


		/**
		 * Set HTML content of popup
		 */
		appendContent: function (newContent, type) {
			mfp.content = newContent;

			if (newContent) {
				if (mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
					mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if (!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}

			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-' + type + '-holder');

			mfp.contentContainer.append(mfp.content);
		},


		/**
		 * Creates Magnific Popup data object based on given data
		 * @param  {int} index Index of item to parse
		 */
		parseEl: function (index) {
			var item = mfp.items[index],
				type;

			if (item.tagName) {
				item = {el: $(item)};
			} else {
				type = item.type;
				item = {data: item, src: item.src};
			}

			if (item.el) {
				var types = mfp.types;

				// check for 'mfp-TYPE' class
				for (var i = 0; i < types.length; i++) {
					if (item.el.hasClass('mfp-' + types[i])) {
						type = types[i];
						break;
					}
				}

				item.src = item.el.attr('data-mfp-src');
				if (!item.src) {
					item.src = item.el.attr('href');
				}
			}

			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);

			return mfp.items[index];
		},


		/**
		 * Initializes single popup or a group of popups
		 */
		addGroup: function (el, options) {
			var eHandler = function (e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};

			if (!options) {
				options = {};
			}

			var eName = 'click.magnificPopup';
			options.mainEl = el;

			if (options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if (options.delegate) {
					el.off(eName).on(eName, options.delegate, eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function (e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


			if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
				return;
			}

			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if (disableOn) {
				if ($.isFunction(disableOn)) {
					if (!disableOn.call(mfp)) {
						return true;
					}
				} else { // else it's number
					if (_window.width() < disableOn) {
						return true;
					}
				}
			}

			if (e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if (mfp.isOpen) {
					e.stopPropagation();
				}
			}

			options.el = $(e.mfpEl);
			if (options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},


		/**
		 * Updates text on preloader
		 */
		updateStatus: function (status, text) {

			if (mfp.preloader) {
				if (_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-' + _prevStatus);
				}

				if (!text && status === 'loading') {
					text = mfp.st.tLoading;
				}

				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);

				status = data.status;
				text = data.text;

				mfp.preloader.html(text);

				mfp.preloader.find('a').on('click', function (e) {
					e.stopImmediatePropagation();
				});

				mfp.container.addClass('mfp-s-' + status);
				_prevStatus = status;
			}
		},


		/*
  "Private" helpers that aren't private at all
  */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function (target) {

			if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
				return;
			}

			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;

			if (closeOnContent && closeOnBg) {
				return true;
			} else {

				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
					return true;
				}

				// if click is outside the content
				if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
					if (closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if ($.contains(document, target)) {
							return true;
						}
					}
				} else if (closeOnContent) {
					return true;
				}

			}
			return false;
		},
		_addClassToMFP: function (cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function (cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function (winHeight) {
			return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
		},
		_setFocus: function () {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
		},
		_onFocusIn: function (e) {
			if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function (template, values, item) {
			var arr;
			if (item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

			$.each(values, function (key, value) {
				if (value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if (arr.length > 1) {
					var el = template.find(EVENT_NS + '-' + arr[0]);

					if (el.length > 0) {
						var attr = arr[1];
						if (attr === 'replaceWith') {
							if (el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if (attr === 'img') {
							if (el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
							}
						} else {
							el.attr(arr[1], value);
						}
					}

				} else {
					template.find(EVENT_NS + '-' + key).html(value);
				}
			});
		},

		_getScrollbarSize: function () {
			// thx David
			if (mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}

	}; /* MagnificPopup core prototype end */


	/**
	 * Public static functions
	 */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],

		open: function (options, index) {
			_checkInstance();

			if (!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}

			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},

		close: function () {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},

		registerModule: function (name, module) {
			if (module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);
			this.modules.push(name);
		},

		defaults: {

			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

			disableOn: 0,

			key: null,

			midClick: false,

			mainClass: '',

			preloader: true,

			focus: '', // CSS selector of input to focus after popup is opened

			closeOnContentClick: false,

			closeOnBgClick: true,

			closeBtnInside: true,

			showCloseBtn: true,

			enableEscapeKey: true,

			modal: false,

			alignTop: false,

			removalDelay: 0,

			prependTo: null,

			fixedContentPos: 'auto',

			fixedBgPos: 'auto',

			overflowY: 'auto',

			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

			tClose: 'Close (Esc)',

			tLoading: 'Loading...',

			autoFocusLast: true

		}
	};


	$.fn.magnificPopup = function (options) {
		_checkInstance();

		var jqEl = $(this);

		// We call some API method of first param is a string
		if (typeof options === "string") {

			if (options === 'open') {
				var items,
					itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
					index = parseInt(arguments[1], 10) || 0;

				if (itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if (itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq(index);
				}
				mfp._openClick({mfpEl: items}, jqEl, itemOpts);
			} else {
				if (mfp.isOpen)
					mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}

		} else {
			// clone options obj
			options = $.extend(true, {}, options);

			/*
   * As Zepto doesn't support .data() method for objects
   * and it works only in normal browsers
   * we assign "options" object directly to the DOM element. FTW!
   */
			if (_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}

			mfp.addGroup(jqEl, options);

		}
		return jqEl;
	};

	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline',
		_hiddenClass,
		_inlinePlaceholder,
		_lastInlineElement,
		_putInlineElementsBack = function () {
			if (_lastInlineElement) {
				_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
				_lastInlineElement = null;
			}
		};

	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {

			initInline: function () {
				mfp.types.push(INLINE_NS);

				_mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
					_putInlineElementsBack();
				});
			},

			getInline: function (item, template) {

				_putInlineElementsBack();

				if (item.src) {
					var inlineSt = mfp.st.inline,
						el = $(item.src);

					if (el.length) {

						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if (parent && parent.tagName) {
							if (!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-' + _hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}

						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}

					item.inlineElement = el;
					return el;
				}

				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax',
		_ajaxCur,
		_removeAjaxCursor = function () {
			if (_ajaxCur) {
				$(document.body).removeClass(_ajaxCur);
			}
		},
		_destroyAjaxRequest = function () {
			_removeAjaxCursor();
			if (mfp.req) {
				mfp.req.abort();
			}
		};

	$.magnificPopup.registerModule(AJAX_NS, {

		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},

		proto: {
			initAjax: function () {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;

				_mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function (item) {

				if (_ajaxCur) {
					$(document.body).addClass(_ajaxCur);
				}

				mfp.updateStatus('loading');

				var opts = $.extend({
					url: item.src,
					success: function (data, textStatus, jqXHR) {
						var temp = {
							data: data,
							xhr: jqXHR
						};

						_mfpTrigger('ParseAjax', temp);

						mfp.appendContent($(temp.data), AJAX_NS);

						item.finished = true;

						_removeAjaxCursor();

						mfp._setFocus();

						setTimeout(function () {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);

						mfp.updateStatus('ready');

						_mfpTrigger('AjaxContentAdded');
					},
					error: function () {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);

				mfp.req = $.ajax(opts);

				return '';
			}
		}
	});

	/*>>ajax*/

	/*>>image*/
	var _imgInterval,
		_getTitle = function (item) {
			if (item.data && item.data.title !== undefined)
				return item.data.title;

			var src = mfp.st.image.titleSrc;

			if (src) {
				if ($.isFunction(src)) {
					return src.call(mfp, item);
				} else if (item.el) {
					return item.el.attr(src) || '';
				}
			}
			return '';
		};

	$.magnificPopup.registerModule('image', {

		options: {
			markup: '<div class="mfp-figure">' +
				'<div class="mfp-close"></div>' +
				'<figure>' +
				'<div class="mfp-img"></div>' +
				'<figcaption>' +
				'<div class="mfp-bottom-bar">' +
				'<div class="mfp-title"></div>' +
				'<div class="mfp-counter"></div>' +
				'</div>' +
				'</figcaption>' +
				'</figure>' +
				'</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},

		proto: {
			initImage: function () {
				var imgSt = mfp.st.image,
					ns = '.image';

				mfp.types.push('image');

				_mfpOn(OPEN_EVENT + ns, function () {
					if (mfp.currItem.type === 'image' && imgSt.cursor) {
						$(document.body).addClass(imgSt.cursor);
					}
				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (imgSt.cursor) {
						$(document.body).removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});

				_mfpOn('Resize' + ns, mfp.resizeImage);
				if (mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function () {
				var item = mfp.currItem;
				if (!item || !item.img) return;

				if (mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if (mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
					}
					item.img.css('max-height', mfp.wH - decr);
				}
			},
			_onImageHasSize: function (item) {
				if (item.img) {

					item.hasSize = true;

					if (_imgInterval) {
						clearInterval(_imgInterval);
					}

					item.isCheckingImgSize = false;

					_mfpTrigger('ImageHasSize', item);

					if (item.imgHidden) {
						if (mfp.content)
							mfp.content.removeClass('mfp-loading');

						item.imgHidden = false;
					}

				}
			},

			/**
			 * Function that loops until the image has size to display elements that rely on it asap
			 */
			findImageSize: function (item) {

				var counter = 0,
					img = item.img[0],
					mfpSetInterval = function (delay) {

						if (_imgInterval) {
							clearInterval(_imgInterval);
						}
						// decelerating interval that checks for size of an image
						_imgInterval = setInterval(function () {
							if (img.naturalWidth > 0) {
								mfp._onImageHasSize(item);
								return;
							}

							if (counter > 200) {
								clearInterval(_imgInterval);
							}

							counter++;
							if (counter === 3) {
								mfpSetInterval(10);
							} else if (counter === 40) {
								mfpSetInterval(50);
							} else if (counter === 100) {
								mfpSetInterval(500);
							}
						}, delay);
					};

				mfpSetInterval(1);
			},

			getImage: function (item, template) {

				var guard = 0,

					// image load complete handler
					onLoadComplete = function () {
						if (item) {
							if (item.img[0].complete) {
								item.img.off('.mfploader');

								if (item === mfp.currItem) {
									mfp._onImageHasSize(item);

									mfp.updateStatus('ready');
								}

								item.hasSize = true;
								item.loaded = true;

								_mfpTrigger('ImageLoadComplete');

							} else {
								// if image complete check fails 200 times (20 sec), we assume that there was an error.
								guard++;
								if (guard < 200) {
									setTimeout(onLoadComplete, 100);
								} else {
									onLoadError();
								}
							}
						}
					},

					// image error handler
					onLoadError = function () {
						if (item) {
							item.img.off('.mfploader');
							if (item === mfp.currItem) {
								mfp._onImageHasSize(item);
								mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
							}

							item.hasSize = true;
							item.loaded = true;
							item.loadError = true;
						}
					},
					imgSt = mfp.st.image;


				var el = template.find('.mfp-img');
				if (el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					if (item.el && item.el.find('img').length) {
						img.alt = item.el.find('img').attr('alt');
					}
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;

					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if (el.is('img')) {
						item.img = item.img.clone();
					}

					img = item.img[0];
					if (img.naturalWidth > 0) {
						item.hasSize = true;
					} else if (!img.width) {
						item.hasSize = false;
					}
				}

				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);

				mfp.resizeImage();

				if (item.hasSize) {
					if (_imgInterval) clearInterval(_imgInterval);

					if (item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}

				mfp.updateStatus('loading');
				item.loading = true;

				if (!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				}

				return template;
			}
		}
	});

	/*>>image*/

	/*>>zoom*/
	var hasMozTransform,
		getHasMozTransform = function () {
			if (hasMozTransform === undefined) {
				hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;
		};

	$.magnificPopup.registerModule('zoom', {

		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function (element) {
				return element.is('img') ? element : element.find('img');
			}
		},

		proto: {

			initZoom: function () {
				var zoomSt = mfp.st.zoom,
					ns = '.zoom',
					image;

				if (!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}

				var duration = zoomSt.duration,
					getElToAnimate = function (image) {
						var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
							transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
							cssObj = {
								position: 'fixed',
								zIndex: 9999,
								left: 0,
								top: 0,
								'-webkit-backface-visibility': 'hidden'
							},
							t = 'transition';

						cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

						newImg.css(cssObj);
						return newImg;
					},
					showMainContent = function () {
						mfp.content.css('visibility', 'visible');
					},
					openTimeout,
					animatedImg;

				_mfpOn('BuildControls' + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');

						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

						image = mfp._getItemToZoom();

						if (!image) {
							showMainContent();
							return;
						}

						animatedImg = getElToAnimate(image);

						animatedImg.css(mfp._getOffset());

						mfp.wrap.append(animatedImg);

						openTimeout = setTimeout(function () {
							animatedImg.css(mfp._getOffset(true));
							openTimeout = setTimeout(function () {

								showMainContent();

								setTimeout(function () {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images

							}, duration); // this timeout equals animation duration

						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);

						mfp.st.removalDelay = duration;

						if (!image) {
							image = mfp._getItemToZoom();
							if (!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}

						animatedImg.css(mfp._getOffset(true));
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');

						setTimeout(function () {
							animatedImg.css(mfp._getOffset());
						}, 16);
					}

				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {
						showMainContent();
						if (animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}
				});
			},

			_allowZoom: function () {
				return mfp.currItem.type === 'image';
			},

			_getItemToZoom: function () {
				if (mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},

			// Get element postion relative to viewport
			_getOffset: function (isLarge) {
				var el;
				if (isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}

				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'), 10);
				var paddingBottom = parseInt(el.css('padding-bottom'), 10);
				offset.top -= ($(window).scrollTop() - paddingTop);


				/*

   Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

    */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};

				// I hate to do this, but there is no another option
				if (getHasMozTransform()) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}

		}
	});


	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe',
		_emptyPage = '//about:blank',

		_fixIframeBugs = function (isShowing) {
			if (mfp.currTemplate[IFRAME_NS]) {
				var el = mfp.currTemplate[IFRAME_NS].find('iframe');
				if (el.length) {
					// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
					if (!isShowing) {
						el[0].src = _emptyPage;
					}

					// IE8 black screen bug fix
					if (mfp.isIE8) {
						el.css('display', isShowing ? 'block' : 'none');
					}
				}
			}
		};

	$.magnificPopup.registerModule(IFRAME_NS, {

		options: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
				'</div>',

			srcAction: 'iframe_src',

			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},

		proto: {
			initIframe: function () {
				mfp.types.push(IFRAME_NS);

				_mfpOn('BeforeChange', function (e, prevType, newType) {
					if (prevType !== newType) {
						if (prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if (newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						}
					}// else {
				     // iframe source is switched, don't do anything
					//}
				});

				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
					_fixIframeBugs();
				});
			},

			getIframe: function (item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;

				$.each(iframeSt.patterns, function () {
					if (embedSrc.indexOf(this.index) > -1) {
						if (this.id) {
							if (typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call(this, embedSrc);
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc);
						return false; // break;
					}
				});

				var dataObj = {};
				if (iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}
				mfp._parseMarkup(template, dataObj, item);

				mfp.updateStatus('ready');

				return template;
			}
		}
	});


	/*>>iframe*/

	/*>>gallery*/
	/**
	 * Get looped index depending on number of slides
	 */
	var _getLoopedId = function (index) {
			var numSlides = mfp.items.length;
			if (index > numSlides - 1) {
				return index - numSlides;
			} else if (index < 0) {
				return numSlides + index;
			}
			return index;
		},
		_replaceCurrTotal = function (text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
		};

	$.magnificPopup.registerModule('gallery', {

		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: true,
			arrows: true,

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%'
		},

		proto: {
			initGallery: function () {

				var gSt = mfp.st.gallery,
					ns = '.mfp-gallery';

				mfp.direction = true; // true - next, false - prev

				if (!gSt || !gSt.enabled) return false;

				_wrapClasses += ' mfp-gallery';

				_mfpOn(OPEN_EVENT + ns, function () {

					if (gSt.navigateByImgClick) {
						mfp.wrap.on('click' + ns, '.mfp-img', function () {
							if (mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}

					_document.on('keydown' + ns, function (e) {
						if (e.keyCode === 37) {
							mfp.prev();
						} else if (e.keyCode === 39) {
							mfp.next();
						}
					});
				});

				_mfpOn('UpdateStatus' + ns, function (e, data) {
					if (data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});

				_mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});

				_mfpOn('BuildControls' + ns, function () {
					if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
						var markup = gSt.arrowMarkup,
							arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
							arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

						arrowLeft.click(function () {
							mfp.prev();
						});
						arrowRight.click(function () {
							mfp.next();
						});

						mfp.container.append(arrowLeft.add(arrowRight));
					}
				});

				_mfpOn(CHANGE_EVENT + ns, function () {
					if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

					mfp._preloadTimeout = setTimeout(function () {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);
				});


				_mfpOn(CLOSE_EVENT + ns, function () {
					_document.off(ns);
					mfp.wrap.off('click' + ns);
					mfp.arrowRight = mfp.arrowLeft = null;
				});

			},
			next: function () {
				mfp.direction = true;
				mfp.index = _getLoopedId(mfp.index + 1);
				mfp.updateItemHTML();
			},
			prev: function () {
				mfp.direction = false;
				mfp.index = _getLoopedId(mfp.index - 1);
				mfp.updateItemHTML();
			},
			goTo: function (newIndex) {
				mfp.direction = (newIndex >= mfp.index);
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function () {
				var p = mfp.st.gallery.preload,
					preloadBefore = Math.min(p[0], mfp.items.length),
					preloadAfter = Math.min(p[1], mfp.items.length),
					i;

				for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index + i);
				}
				for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index - i);
				}
			},
			_preloadItem: function (index) {
				index = _getLoopedId(index);

				if (mfp.items[index].preloaded) {
					return;
				}

				var item = mfp.items[index];
				if (!item.parsed) {
					item = mfp.parseEl(index);
				}

				_mfpTrigger('LazyLoad', item);

				if (item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
						item.hasSize = true;
					}).on('error.mfploader', function () {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}


				item.preloaded = true;
			}
		}
	});

	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function (item) {
				return item.src.replace(/\.\w+$/, function (m) {
					return '@2x' + m;
				});
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {

					var st = mfp.st.retina,
						ratio = st.ratio;

					ratio = !isNaN(ratio) ? ratio : ratio();

					if (ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}

			}
		}
	});

	/*>>retina*/
	_checkInstance();
}));

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
	// universal module definition
	/* jshint strict: false */ /* globals define, module, window */
	if (typeof define == 'function' && define.amd) {
		// AMD - RequireJS
		define('ev-emitter/ev-emitter', factory);
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS - Browserify, Webpack
		module.exports = factory();
	} else {
		// Browser globals
		global.EvEmitter = factory();
	}

}(typeof window != 'undefined' ? window : this, function () {


	function EvEmitter() {
	}

	var proto = EvEmitter.prototype;

	proto.on = function (eventName, listener) {
		if (!eventName || !listener) {
			return;
		}
		// set events hash
		var events = this._events = this._events || {};
		// set listeners array
		var listeners = events[eventName] = events[eventName] || [];
		// only add once
		if (listeners.indexOf(listener) == -1) {
			listeners.push(listener);
		}

		return this;
	};

	proto.once = function (eventName, listener) {
		if (!eventName || !listener) {
			return;
		}
		// add event
		this.on(eventName, listener);
		// set once flag
		// set onceEvents hash
		var onceEvents = this._onceEvents = this._onceEvents || {};
		// set onceListeners object
		var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
		// set flag
		onceListeners[listener] = true;

		return this;
	};

	proto.off = function (eventName, listener) {
		var listeners = this._events && this._events[eventName];
		if (!listeners || !listeners.length) {
			return;
		}
		var index = listeners.indexOf(listener);
		if (index != -1) {
			listeners.splice(index, 1);
		}

		return this;
	};

	proto.emitEvent = function (eventName, args) {
		var listeners = this._events && this._events[eventName];
		if (!listeners || !listeners.length) {
			return;
		}
		// copy over to avoid interference if .off() in listener
		listeners = listeners.slice(0);
		args = args || [];
		// once stuff
		var onceListeners = this._onceEvents && this._onceEvents[eventName];

		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i]
			var isOnce = onceListeners && onceListeners[listener];
			if (isOnce) {
				// remove listener
				// remove before trigger to prevent recursion
				this.off(eventName, listener);
				// unset once flag
				delete onceListeners[listener];
			}
			// trigger listener
			listener.apply(this, args);
		}

		return this;
	};

	proto.allOff = function () {
		delete this._events;
		delete this._onceEvents;
	};

	return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function (window, factory) {
	'use strict';
	// universal module definition

	/*global define: false, module: false, require: false */

	if (typeof define == 'function' && define.amd) {
		// AMD
		define([
			'ev-emitter/ev-emitter'
		], function (EvEmitter) {
			return factory(window, EvEmitter);
		});
	} else if (typeof module == 'object' && module.exports) {
		// CommonJS
		module.exports = factory(
			window,
			require('ev-emitter')
		);
	} else {
		// browser global
		window.imagesLoaded = factory(
			window,
			window.EvEmitter
		);
	}

})(typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

	function factory(window, EvEmitter) {


		var $ = window.jQuery;
		var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
		function extend(a, b) {
			for (var prop in b) {
				a[prop] = b[prop];
			}
			return a;
		}

		var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
		function makeArray(obj) {
			if (Array.isArray(obj)) {
				// use object if already an array
				return obj;
			}

			var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
			if (isArrayLike) {
				// convert nodeList to array
				return arraySlice.call(obj);
			}

			// array of single index
			return [obj];
		}

// -------------------------- imagesLoaded -------------------------- //

		/**
		 * @param {Array, Element, NodeList, String} elem
		 * @param {Object or Function} options - if function, use as callback
		 * @param {Function} onAlways - callback function
		 */
		function ImagesLoaded(elem, options, onAlways) {
			// coerce ImagesLoaded() without new, to be new ImagesLoaded()
			if (!(this instanceof ImagesLoaded)) {
				return new ImagesLoaded(elem, options, onAlways);
			}
			// use elem as selector string
			var queryElem = elem;
			if (typeof elem == 'string') {
				queryElem = document.querySelectorAll(elem);
			}
			// bail if bad element
			if (!queryElem) {
				console.error('Bad element for imagesLoaded ' + (queryElem || elem));
				return;
			}

			this.elements = makeArray(queryElem);
			this.options = extend({}, this.options);
			// shift arguments if no options set
			if (typeof options == 'function') {
				onAlways = options;
			} else {
				extend(this.options, options);
			}

			if (onAlways) {
				this.on('always', onAlways);
			}

			this.getImages();

			if ($) {
				// add jQuery Deferred object
				this.jqDeferred = new $.Deferred();
			}

			// HACK check async to allow time to bind listeners
			setTimeout(this.check.bind(this));
		}

		ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

		ImagesLoaded.prototype.options = {};

		ImagesLoaded.prototype.getImages = function () {
			this.images = [];

			// filter & find items if we have an item selector
			this.elements.forEach(this.addElementImages, this);
		};

		/**
		 * @param {Node} element
		 */
		ImagesLoaded.prototype.addElementImages = function (elem) {
			// filter siblings
			if (elem.nodeName == 'IMG') {
				this.addImage(elem);
			}
			// get background image on element
			if (this.options.background === true) {
				this.addElementBackgroundImages(elem);
			}

			// find children
			// no non-element nodes, #143
			var nodeType = elem.nodeType;
			if (!nodeType || !elementNodeTypes[nodeType]) {
				return;
			}
			var childImgs = elem.querySelectorAll('img');
			// concat childElems to filterFound array
			for (var i = 0; i < childImgs.length; i++) {
				var img = childImgs[i];
				this.addImage(img);
			}

			// get child background images
			if (typeof this.options.background == 'string') {
				var children = elem.querySelectorAll(this.options.background);
				for (i = 0; i < children.length; i++) {
					var child = children[i];
					this.addElementBackgroundImages(child);
				}
			}
		};

		var elementNodeTypes = {
			1: true,
			9: true,
			11: true
		};

		ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
			var style = getComputedStyle(elem);
			if (!style) {
				// Firefox returns null if in a hidden iframe https://bugzil.la/548397
				return;
			}
			// get url inside url("...")
			var reURL = /url\((['"])?(.*?)\1\)/gi;
			var matches = reURL.exec(style.backgroundImage);
			while (matches !== null) {
				var url = matches && matches[2];
				if (url) {
					this.addBackground(url, elem);
				}
				matches = reURL.exec(style.backgroundImage);
			}
		};

		/**
		 * @param {Image} img
		 */
		ImagesLoaded.prototype.addImage = function (img) {
			var loadingImage = new LoadingImage(img);
			this.images.push(loadingImage);
		};

		ImagesLoaded.prototype.addBackground = function (url, elem) {
			var background = new Background(url, elem);
			this.images.push(background);
		};

		ImagesLoaded.prototype.check = function () {
			var _this = this;
			this.progressedCount = 0;
			this.hasAnyBroken = false;
			// complete if no images
			if (!this.images.length) {
				this.complete();
				return;
			}

			function onProgress(image, elem, message) {
				// HACK - Chrome triggers event before object properties have changed. #83
				setTimeout(function () {
					_this.progress(image, elem, message);
				});
			}

			this.images.forEach(function (loadingImage) {
				loadingImage.once('progress', onProgress);
				loadingImage.check();
			});
		};

		ImagesLoaded.prototype.progress = function (image, elem, message) {
			this.progressedCount++;
			this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
			// progress event
			this.emitEvent('progress', [this, image, elem]);
			if (this.jqDeferred && this.jqDeferred.notify) {
				this.jqDeferred.notify(this, image);
			}
			// check if completed
			if (this.progressedCount == this.images.length) {
				this.complete();
			}

			if (this.options.debug && console) {
				console.log('progress: ' + message, image, elem);
			}
		};

		ImagesLoaded.prototype.complete = function () {
			var eventName = this.hasAnyBroken ? 'fail' : 'done';
			this.isComplete = true;
			this.emitEvent(eventName, [this]);
			this.emitEvent('always', [this]);
			if (this.jqDeferred) {
				var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
				this.jqDeferred[jqMethod](this);
			}
		};

// --------------------------  -------------------------- //

		function LoadingImage(img) {
			this.img = img;
		}

		LoadingImage.prototype = Object.create(EvEmitter.prototype);

		LoadingImage.prototype.check = function () {
			// If complete is true and browser supports natural sizes,
			// try to check for image status manually.
			var isComplete = this.getIsImageComplete();
			if (isComplete) {
				// report based on naturalWidth
				this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
				return;
			}

			// If none of the checks above matched, simulate loading on detached element.
			this.proxyImage = new Image();
			this.proxyImage.addEventListener('load', this);
			this.proxyImage.addEventListener('error', this);
			// bind to image as well for Firefox. #191
			this.img.addEventListener('load', this);
			this.img.addEventListener('error', this);
			this.proxyImage.src = this.img.src;
		};

		LoadingImage.prototype.getIsImageComplete = function () {
			// check for non-zero, non-undefined naturalWidth
			// fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
			return this.img.complete && this.img.naturalWidth;
		};

		LoadingImage.prototype.confirm = function (isLoaded, message) {
			this.isLoaded = isLoaded;
			this.emitEvent('progress', [this, this.img, message]);
		};

// ----- events ----- //

// trigger specified handler for event type
		LoadingImage.prototype.handleEvent = function (event) {
			var method = 'on' + event.type;
			if (this[method]) {
				this[method](event);
			}
		};

		LoadingImage.prototype.onload = function () {
			this.confirm(true, 'onload');
			this.unbindEvents();
		};

		LoadingImage.prototype.onerror = function () {
			this.confirm(false, 'onerror');
			this.unbindEvents();
		};

		LoadingImage.prototype.unbindEvents = function () {
			this.proxyImage.removeEventListener('load', this);
			this.proxyImage.removeEventListener('error', this);
			this.img.removeEventListener('load', this);
			this.img.removeEventListener('error', this);
		};

// -------------------------- Background -------------------------- //

		function Background(url, element) {
			this.url = url;
			this.element = element;
			this.img = new Image();
		}

// inherit LoadingImage prototype
		Background.prototype = Object.create(LoadingImage.prototype);

		Background.prototype.check = function () {
			this.img.addEventListener('load', this);
			this.img.addEventListener('error', this);
			this.img.src = this.url;
			// check if image is already complete
			var isComplete = this.getIsImageComplete();
			if (isComplete) {
				this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
				this.unbindEvents();
			}
		};

		Background.prototype.unbindEvents = function () {
			this.img.removeEventListener('load', this);
			this.img.removeEventListener('error', this);
		};

		Background.prototype.confirm = function (isLoaded, message) {
			this.isLoaded = isLoaded;
			this.emitEvent('progress', [this, this.element, message]);
		};

// -------------------------- jQuery -------------------------- //

		ImagesLoaded.makeJQueryPlugin = function (jQuery) {
			jQuery = jQuery || window.jQuery;
			if (!jQuery) {
				return;
			}
			// set local variable
			$ = jQuery;
			// $().imagesLoaded()
			$.fn.imagesLoaded = function (options, callback) {
				var instance = new ImagesLoaded(this, options, callback);
				return instance.jqDeferred.promise($(this));
			};
		};
// try making plugin
		ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

		return ImagesLoaded;

	});


/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, o) {
			var n, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, o);
				n = void 0 === n ? l : n
			}), void 0 !== n ? n : t
		}

		function h(t, e) {
			t.each(function (t, o) {
				var n = a.data(o, i);
				n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
			})
		}

		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, o(a))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}

	var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () {
	} : function (t) {
		s.error(t)
	};
	return o(e || t.jQuery), i
}), function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {
	}

	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {}, o = i[t] = i[t] || [];
			return o.indexOf(e) == -1 && o.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
			return o[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var o = i.indexOf(e);
			return o != -1 && i.splice(o, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n], r = o && o[s];
				r && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function () {
		delete this._events, delete this._onceEvents
	}, t
}), function (t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {
	}

	function i() {
		for (var t = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function o(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
	}

	function n() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var n = o(e);
			r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
		}
	}

	function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = o(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l], c = s[f], m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth,
				z = a.borderTopWidth + a.borderBottomWidth, I = d && r, x = t(s.width);
			x !== !1 && (a.width = x + (I ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}

	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length, d = !1;
	return s
}), function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i], n = o + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}), function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	};
	var o = Array.prototype.slice;
	i.makeArray = function (t) {
		if (Array.isArray(t)) return t;
		if (null === t || void 0 === t) return [];
		var e = "object" == typeof t && "number" == typeof t.length;
		return e ? o.call(t) : [t]
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, o) {
		t = i.makeArray(t);
		var n = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);
				e(t, o) && n.push(t);
				for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
			}
		}), n
	}, i.debounceMethod = function (t, e, i) {
		i = i || 100;
		var o = t.prototype[e], n = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[n];
			clearTimeout(t);
			var e = arguments, s = this;
			this[n] = setTimeout(function () {
				o.apply(s, e), delete s[n]
			}, i)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var n = t.console;
	return i.htmlInit = function (e, o) {
		i.docReady(function () {
			var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, o, u)
			})
		})
	}, i
}), function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
	}

	function n(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}

	var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		}, d = o.prototype = Object.create(t.prototype);
	d.constructor = o, d._create = function () {
		this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var o = h[i] || i;
			e[o] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"],
			s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
		o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
	}, d.layoutPosition = function () {
		var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left",
			a = this.position.x + t[n];
		e[s] = this.getXValue(a), e[r] = "";
		var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
		if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
		var s = t - i, r = e - o, a = {};
		a.transform = this.getTranslate(s, r), this.transition({
			to: a,
			onTransitionEnd: {transform: this.layoutPosition},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
		return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var o = this.element.offsetHeight;
			o = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + n(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {"-webkit-transform": "transform"};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn, o = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];
				n.call(this), delete e.onEnd[o]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
	return d.removeTransitionStyles = function () {
		this.css(c)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({display: ""});
		var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({display: ""});
		var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
	}, o
}), function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
		return e(t, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
	"use strict";

	function s(t, e) {
		var i = o.getQueryElement(t);
		if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
		var n = ++l;
		this.element.outlayerGUID = n, f[n] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}

		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var n = m[o] || 1;
		return i * n
	}

	var u = t.console, h = t.jQuery, d = function () {
	}, l = 0, f = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
		containerStyle: {position: "relative"},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
		visibleStyle: {opacity: 1, transform: "scale(1)"}
	};
	var c = s.prototype;
	o.extend(c, e.prototype), c.option = function (t) {
		o.extend(this.options, t)
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n], r = new i(s, this);
			o.push(r)
		}
		return o
	}, c._filterFindItemElements = function (t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize()
	}, c.getSize = function () {
		this.size = i(this.element)
	}, c._getMeasurement = function (t, e) {
		var o, n = this.options[t];
		n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var o = this._getItemLayoutPosition(t);
				o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function () {
		return {x: 0, y: 0}
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function (t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function () {
		this.resizeContainer()
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e])
		}

		function o() {
			r++, r == s && i()
		}

		var n = this, s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, o)
		})
	}, c.dispatchEvent = function (t, e, i) {
		var o = e ? [e].concat(i) : i;
		if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
			var n = h.Event(e);
			n.type = t, this.$element.trigger(n, i)
		} else this.$element.trigger(t, i)
	}, c.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(), e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = {
			left: e.left - o.left - n.marginLeft,
			top: e.top - o.top - n.marginTop,
			right: o.right - e.right - n.marginRight,
			bottom: o.bottom - e.bottom - n.marginBottom
		};
		return s
	}, c.handleEvent = o.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function () {
		this.resize()
	}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function () {
		var t = i(this.element), e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function (t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = o.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {ms: 1, s: 1e3};
	return s.Item = n, s
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}

	var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData, e = this.layout._sorters;
			for (var i in t) {
				var o = e[i];
				this.sortData[i] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function () {
		n.apply(this, arguments), this.css({display: ""})
	}, e
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}

	var o = i.prototype,
		n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return n.forEach(function (t) {
		o[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), o.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element), i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, o._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, o.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, o.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, o.getSegmentSize = function (t, e) {
		var i = t + e, o = "outer" + e;
		if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();
			this[i] = n && n[o] || this.isotope.size["inner" + e]
		}
	}, o.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, o.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, o.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function n() {
			i.apply(this, arguments)
		}

		return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
	}, i
}), function (t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var o = i.prototype;
	return o._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, o.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0], i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, o.getContainerWidth = function () {
		var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
		this.containerWidth = o && o.innerWidth
	}, o._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil",
			o = Math[i](t.size.outerWidth / this.columnWidth);
		o = Math.min(o, this.cols);
		for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
			x: this.columnWidth * s.col,
			y: s.y
		}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
		return r
	}, o._getTopColPosition = function (t) {
		var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
		return {col: e.indexOf(i), y: i}
	}, o._getTopColGroup = function (t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, o._getColGroupY = function (t, e) {
		if (e < 2) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, o._getHorizontalColPosition = function (t, e) {
		var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
		i = o ? 0 : i;
		var n = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
	}, o._manageStamp = function (t) {
		var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right,
			r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, o._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {height: this.maxY};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, o._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, o.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"), o = i.prototype, n = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
	for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
	var r = o.measureColumns;
	o.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = o._getOption;
	return o._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"), i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var o = {x: this.x, y: this.y};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
	}, i._getContainerSize = function () {
		return {height: this.maxY}
	}, e
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
		return this.y += t.size.outerHeight, {x: e, y: i}
	}, i._getContainerSize = function () {
		return {height: this.y}
	}, e
}), function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
	function a(t, e) {
		return function (i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n], r = i.sortData[s], a = o.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}

	var u = t.jQuery, h = String.prototype.trim ? function (t) {
		return t.trim()
	} : function (t) {
		return t.replace(/^\s+|\s+$/g, "")
	}, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];
			o.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t], i = this.options[t] || {};
		this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}

		var e, i, o, n = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			o = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
			}
		}
		return {matches: i, needReveal: o, needHide: n}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t);
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return o(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];
			o.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}

		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		}, parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function () {
		var t = this.options.layoutMode, e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, o, n = e.length;
			for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
			var s = this._filter(e).matches;
			for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function (t) {
		t = n.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];
			n.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var o = t.apply(this, e);
		return this.options.transitionDuration = i, o
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});

App.url = function (url) {
	var u = App.baseUrl + url;

	if (u.slice(0, 1) !== '/') {
		u = '/' + u;
	}

	return u;
};

App.initialize = function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
		}
		if ($(this).scrollTop() > 100) {
			$('#scrollup').fadeIn();
		} else {
			$('#scrollup').fadeOut();
		}
	});

	$('#scrollup').on('click', function () {
		$('html, body').animate({scrollTop: 0}, 600);

		return false;
	});

	// $('.menu-button').on('click', function () {
	//     $('.main-sub-menu').slideToggle('fast');
	// });

	$('#lang-box-container').click(function () {
		$('#lang-box').animate({
			opacity: 'toggle',
		});
	});

	//$('html').smoothScroll(500);

	if (window.location.hash.length > 0) {
		window.scrollTo(0, $(window.location.hash).offset().top);
	}

	$('.load-more a', '#load-more').on('click', function () {
		$('.load-container', '#load-more').slideDown();
		$('.load-more', '#load-more').hide();
		$('.load-less', '#load-more').show();

		return false;
	});
	$('.load-less a', '#load-more').on('click', function () {
		$('.load-container', '#load-more').slideUp(function () {
			$('.load-more', '#load-more').show();
			$('.load-less', '#load-more').hide();

			$('html, body').animate({
				scrollTop: $('#load-more').offset().top - 200
			}, 500);
		});

		return false;
	});

	new WOW().init();
}

App.homePage = function () {
	App.slider('#about-slider', {
		autoplay: true
	});

	App.mainSlider();
	$(window).resize(function () {
		// do something here
		App.mainSlider();
	});

	var owl = $('#content-slider');
	owl.owlCarousel({
		margin: 0,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	App.counter();
}

App.mainSlider = function () {
	var carousel = $('#home-slider');
	if ($(window).width() <= 768) {
		var carousel = $('#home-slider');
		carousel.addClass('owl-carousel owl-theme');
		var owlCarousel = App.slider(carousel, {
			autoplay: false,
			loop: true,
			nav: false,
			responsive: {
				0: {
					items: 1,
					loop: true,
					autoplay: true,
					nav: true,
				},
				600: {
					items: 1,
					loop: true,
					autoplay: true,
					nav: true,
				},
				1024: {
					items: 5,
					loop: false,
					mouseDrag: false,
					nav: false,
				}
			}
		});

		owlCarousel.trigger('refresh.owl.carousel');
	} else {
		carousel.trigger('destroy.owl.carousel');
	}
}

App.commonView = function (options) {
	var sliderOptions = {};
	if (options['showHpVideo'] === 'true') {
		sliderOptions = {
			autoplayTimeout: 30000
		};
	}

	App.slider('#inner-slider', sliderOptions);

	$('.player', '#inner-slider, #page-banner').each(function () {
		$(this).vimeo_player({
			containment: $(this).parent()
		});
	});
}

App.view = function () {
	$('.dec-logo', '#client-images').on('mouseover', function () {
		var clientImg2 = $(this).find('.client-img2');

		if (clientImg2.length === 1) {
			$(this).find('.client-img1').hide();
			clientImg2.show();
		}
	});

	$('#client-images .dec-logo').on('mouseleave', function () {
		var clientImg2 = $(this).find('.client-img2');

		if (clientImg2.length === 1) {
			clientImg2.hide();
			$(this).find('.client-img1').show();
		}
	});
}

App.jobsIndex = function () {
	$('select', '#jobs-filter').on('change', function () {
		$('#jobs-filter').submit();
	});
}

App.homepageBlocks = function (defaultImgUrl) {
	$('.offers-icon', '#homepage-blocks').on('mouseover', function () {
		var id = '#hp-block-bg-' + $(this).data('id');
		if ($(this).data('id') !== 2) {
			$('#hp-block-bg-2').css('opacity', 0);
			$(id).css('opacity', 1);
		}
	});

	$('#homepage-blocks .offers-icon').on('mouseleave', function () {
		var id = '#hp-block-bg-' + $(this).data('id');
		if ($(this).data('id') !== 2) {
			$(id).css('opacity', 0);
			$('#hp-block-bg-2').css('opacity', 1);
		}
	});
}


App.slider = function (selector, settings = {}) {
	var owl = $(selector);
	var owlDefaultSettings = {
		margin: 0,
		nav: true,
		loop: true,
		autoplay: true,
		//autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	};

	owlDefaultSettings = Object.assign(owlDefaultSettings, settings);
	return owl.owlCarousel(owlDefaultSettings);
}

App.galleryImages = function (selector, filterSelector) {
	$(selector).isotope();

	$(selector).imagesLoaded().progress(function (instance, image) {
		$(image.img).parent().parent().parent().removeClass('transparent');

		$(selector).isotope('layout');
	});

	$(filterSelector).on('click', 'button', function () {
		var activeGroup = $(this).data('group');

		$('button', filterSelector).removeClass('active');
		App.magnificPopup(selector + ' .gallery-item[data-groups*="' + activeGroup + '"]');

		$(this).addClass('active');

		$(selector).isotope({
			filter: function () {
				var groups = $(this).data('groups');

				return $.inArray(activeGroup, groups) > -1;
			}
		});
	});

	if ($(filterSelector).get(0)) {
		App.magnificPopup(selector + ' .gallery-item[data-groups*="all"]');
	} else {
		App.magnificPopup(selector);
	}
}

App.magnificPopup = function (selector) {
	var magnificOptions = {
		delegate: 'a.zoom-img',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			markup: '<div class="mfp-figure">' +
				'<div class="mfp-close"></div>' +
				'<figure>' +
				'<div class="mfp-img"></div>' +
				'</figure>' +
				'<figcaption>' +
				'<div class="mfp-bottom-bar">' +
				'<div class="mfp-title"></div>' +
				'</div>' +
				'</figcaption>' +
				'</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
		},
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>' +
				'<div class="mfp-bottom-bar">' +
				'<div class="mfp-title"></div>' +
				'</div>' +
				'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
			patterns: {
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1&loop=1&muted=1'
				},
			},
		},
		callbacks: {
			open: function () {
				var mfp = this;

				if ($('#gallery-images').children().length > 1) {
					$('.mfp-container').append(
						'<div id="floating-arrow-left" class="floating-arrows left"></div>' +
						'<div id="floating-arrow-right" class="floating-arrows right"></div>'
					);

					$('#floating-arrow-left').on('click', function () {
						mfp.prev();

						return false;
					});
					$('#floating-arrow-right').on('click', function () {
						mfp.next();

						return false;
					});
				}
			},
			markupParse: function (template, values, item) {
				values.title = item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		},

	};

	$(selector).magnificPopup(magnificOptions);
}

// App.laddaButtons = function (selector) {
//   Ladda.bind(selector + ' button.submit');
// }

App.counter = function () {
	var counterUp = window.counterUp['default']; // import counterUp from "counterup2"

	/* Start counting, do this on DOM ready or with Waypoints. */
	$('.count').each(function (ignore, counter) {
		new Waypoint({
			element: $(this),
			handler: function () {
				counterUp(counter, {
					duration: 3000,
					delay: 10
				});
				this.destroy();
			},
			offset: 'bottom-in-view',
		});
	});
}

App.instafeed = function () {
	var userFeed = new Instafeed({
		get: 'user',
		userId: 'self',
		accessToken: '7706142686.2c6359a.5cd48ad1cf384be4979dec4df5609967',
		template: '<div class="col-4"><a href="{{link}}" class="zoom-img" target="_blank"><img src="{{image}}" /></a></div>',
		resolution: 'standard_resolution',
		limit: 6
	});
	userFeed.run();
}

App.initialize();