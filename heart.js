function imageLazyLoading() { $(".js-lazy").lazy() }
() { BP.utils._animationedSections(), imageLazyLoading() }

function afterInfiniteScrollingCallback

function runWebsiteScripts() { if (BP.utils.burger(), $(".l-header").addClass("l-header--anim"), BP.utils.loadVideos(), BP.utils._animationedSections(), BP.readingTime(), BP.mobileViews.init(), BP.slideshow.init(), BP.clickableBlocks(), BP.utils.infiniteScroll(afterInfiniteScrollingCallback), BP.utils.hashAnchorClick(), BP.utils._openPopupOnClick(), BP.utils._magnific(), BP.utils.btnAttribute(), BP.logos(), imageLazyLoading(), $(".js-map").length) { new Waypoint({ element: $(".js-map")[0], handler: function(e) { "down" === e && BP.contact.loadScript() }, offset: "80%" }) } }

function trackPageGTM() {
    if (void 0 !== window.dataLayer) {
        var e = window.location.href;
        window.dataLayer.push({ event: "virtualPageView", virtualUrl: e })
    }
}! function(e, t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t() }(this, function() {
    var e, t = { duration: 1e3, delay: 0, loop: !1, autoplay: !0, direction: "normal", easing: "easeOutElastic", elasticity: 400, round: !1, begin: void 0, update: void 0, complete: void 0 },
        n = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
        i = { arr: function(e) { return Array.isArray(e) }, obj: function(e) { return -1 < Object.prototype.toString.call(e).indexOf("Object") }, svg: function(e) { return e instanceof SVGElement }, dom: function(e) { return e.nodeType || i.svg(e) }, num: function(e) { return !isNaN(parseInt(e)) }, str: function(e) { return "string" == typeof e }, fnc: function(e) { return "function" == typeof e }, und: function(e) { return "undefined" == typeof e }, nul: function(e) { return "null" == typeof e }, hex: function(e) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e) }, rgb: function(e) { return /^rgb/.test(e) }, hsl: function(e) { return /^hsl/.test(e) }, col: function(e) { return i.hex(e) || i.rgb(e) || i.hsl(e) } },
        r = function() {
            var e = {},
                t = {
                    Sine: function(e) { return 1 - Math.cos(e * Math.PI / 2) },
                    Circ: function(e) { return 1 - Math.sqrt(1 - e * e) },
                    Elastic: function(e, t) {
                        if (0 === e || 1 === e) return e;
                        var n = 1 - Math.min(t, 998) / 1e3,
                            i = e / 1 - 1;
                        return -(Math.pow(2, 10 * i) * Math.sin(2 * (i - n / (2 * Math.PI) * Math.asin(1)) * Math.PI / n))
                    },
                    Back: function(e) { return e * e * (3 * e - 2) },
                    Bounce: function(e) { for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;); return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2) }
                };
            return ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function(e, n) { t[e] = function(e) { return Math.pow(e, n + 2) } }), Object.keys(t).forEach(function(n) {
                var i = t[n];
                e["easeIn" + n] = i, e["easeOut" + n] = function(e, t) { return 1 - i(1 - e, t) }, e["easeInOut" + n] = function(e, t) { return .5 > e ? i(2 * e, t) / 2 : 1 - i(-2 * e + 2, t) / 2 }, e["easeOutIn" + n] = function(e, t) { return .5 > e ? (1 - i(1 - 2 * e, t)) / 2 : (i(2 * e - 1, t) + 1) / 2 }
            }), e.linear = function(e) { return e }, e
        }(),
        o = function(e) { return i.str(e) ? e : e + "" },
        s = function(e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() },
        a = function(e) { if (i.col(e)) return !1; try { return document.querySelectorAll(e) } catch (t) { return !1 } },
        l = function(e) { return e.reduce(function(e, t) { return e.concat(i.arr(t) ? l(t) : t) }, []) },
        c = function(e) { return i.arr(e) ? e : (i.str(e) && (e = a(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]) },
        u = function(e, t) { return e.some(function(e) { return e === t }) },
        d = function(e, t) {
            var n = {};
            return e.forEach(function(e) {
                var i = JSON.stringify(t.map(function(t) { return e[t] }));
                n[i] = n[i] || [], n[i].push(e)
            }), Object.keys(n).map(function(e) { return n[e] })
        },
        p = function(e) { return e.filter(function(e, t, n) { return n.indexOf(e) === t }) },
        h = function(e) { var t, n = {}; for (t in e) n[t] = e[t]; return n },
        f = function(e, t) { for (var n in t) e[n] = i.und(e[n]) ? t[n] : e[n]; return e },
        m = function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) { return t + t + n + n + i + i });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            e = parseInt(t[1], 16);
            var n = parseInt(t[2], 16),
                t = parseInt(t[3], 16);
            return "rgb(" + e + "," + n + "," + t + ")"
        },
        g = function(e) {
            e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e);
            var t = parseInt(e[1]) / 360,
                n = parseInt(e[2]) / 100,
                i = parseInt(e[3]) / 100;
            if (e = function(e, t, n) { return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e }, 0 == n) n = i = t = i;
            else var r = .5 > i ? i * (1 + n) : i + n - i * n,
                o = 2 * i - r,
                n = e(o, r, t + 1 / 3),
                i = e(o, r, t),
                t = e(o, r, t - 1 / 3);
            return "rgb(" + 255 * n + "," + 255 * i + "," + 255 * t + ")"
        },
        y = function(e) { return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(e)[2] },
        v = function(e, t, n) { return y(t) ? t : -1 < e.indexOf("translate") ? y(n) ? t + y(n) : t + "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? t + "deg" : t },
        w = function(e, t) { if (t in e.style) return getComputedStyle(e).getPropertyValue(s(t)) || "0" },
        b = function(e, t) {
            var n = -1 < t.indexOf("scale") ? 1 : 0,
                i = e.style.transform;
            if (!i) return n;
            for (var r = /(\w+)\((.+?)\)/g, o = [], s = [], a = []; o = r.exec(i);) s.push(o[1]), a.push(o[2]);
            return i = a.filter(function(e, n) { return s[n] === t }), i.length ? i[0] : n
        },
        x = function(e, t) { return i.dom(e) && u(n, t) ? "transform" : i.dom(e) && (e.getAttribute(t) || i.svg(e) && e[t]) ? "attribute" : i.dom(e) && "transform" !== t && w(e, t) ? "css" : i.nul(e[t]) || i.und(e[t]) ? void 0 : "object" },
        T = function(e, t) {
            switch (x(e, t)) {
                case "transform":
                    return b(e, t);
                case "css":
                    return w(e, t);
                case "attribute":
                    return e.getAttribute(t)
            }
            return e[t] || 0
        },
        C = function(e, t, n) { return i.col(t) ? t = i.rgb(t) ? t : i.hex(t) ? m(t) : i.hsl(t) ? g(t) : void 0 : y(t) ? t : (e = y(y(e.to) ? e.to : e.from), !e && n && (e = y(n)), e ? t + e : t) },
        _ = function(e) { var t = /-?\d*\.?\d+/g; return { original: e, numbers: o(e).match(t) ? o(e).match(t).map(Number) : [0], strings: o(e).split(t) } },
        E = function(e, t, n) { return t.reduce(function(t, i, r) { return i = i ? i : n[r - 1], t + e[r - 1] + i }) },
        S = function(e) { return e = e ? l(i.arr(e) ? e.map(c) : c(e)) : [], e.map(function(e, t) { return { target: e, id: t } }) },
        A = function(e, t, n, i) { return "transform" === n ? (n = e + "(" + v(e, t.from, t.to) + ")", t = e + "(" + v(e, t.to) + ")") : (e = "css" === n ? w(i, e) : void 0, n = C(t, t.from, e), t = C(t, t.to, e)), { from: _(n), to: _(t) } },
        k = function(e, t) {
            var n = [];
            return e.forEach(function(r, o) {
                var s = r.target;
                return t.forEach(function(t) {
                    var a = x(s, t.name);
                    if (a) {
                        var l;
                        l = t.name;
                        var u = t.value,
                            u = c(i.fnc(u) ? u(s, o) : u);
                        l = { from: 1 < u.length ? u[0] : T(s, l), to: 1 < u.length ? u[1] : u[0] }, u = h(t), u.animatables = r, u.type = a, u.from = A(t.name, l, u.type, s).from, u.to = A(t.name, l, u.type, s).to, u.round = i.col(l.from) || u.round ? 1 : 0, u.delay = (i.fnc(u.delay) ? u.delay(s, o, e.length) : u.delay) / z.speed, u.duration = (i.fnc(u.duration) ? u.duration(s, o, e.length) : u.duration) / z.speed, n.push(u)
                    }
                })
            }), n
        },
        L = function(e, t) { var n = k(e, t); return d(n, ["name", "from", "to", "delay", "duration"]).map(function(e) { var t = h(e[0]); return t.animatables = e.map(function(e) { return e.animatables }), t.totalDuration = t.delay + t.duration, t }) },
        I = function(e, t) {
            e.tweens.forEach(function(n) {
                var i = n.from,
                    r = e.duration - (n.delay + n.duration);
                n.from = n.to, n.to = i, t && (n.delay = r)
            }), e.reversed = !e.reversed
        },
        P = function(e) { if (e.length) return Math.max.apply(Math, e.map(function(e) { return e.totalDuration })) },
        O = function(e) {
            var t = [],
                n = [];
            return e.tweens.forEach(function(e) { "css" !== e.type && "transform" !== e.type || (t.push("css" === e.type ? s(e.name) : "transform"), e.animatables.forEach(function(e) { n.push(e.target) })) }), { properties: p(t).join(", "), elements: p(n) }
        },
        N = function(e) {
            var t = O(e);
            t.elements.forEach(function(e) { e.style.willChange = t.properties })
        },
        D = function(e) { O(e).elements.forEach(function(e) { e.style.removeProperty("will-change") }) },
        j = function(e, t) {
            var n = e.path,
                i = e.value * t,
                r = function(r) { return r = r || 0, n.getPointAtLength(1 < t ? e.value + r : i + r) },
                o = r(),
                s = r(-1),
                r = r(1);
            switch (e.name) {
                case "translateX":
                    return o.x;
                case "translateY":
                    return o.y;
                case "rotate":
                    return 180 * Math.atan2(r.y - s.y, r.x - s.x) / Math.PI
            }
        },
        R = function(e, t) {
            var n = Math.min(Math.max(t - e.delay, 0), e.duration) / e.duration,
                i = e.to.numbers.map(function(t, i) {
                    var o = e.from.numbers[i],
                        s = r[e.easing](n, e.elasticity),
                        o = e.path ? j(e, s) : o + s * (t - o);
                    return o = e.round ? Math.round(o * e.round) / e.round : o
                });
            return E(i, e.to.strings, e.from.strings)
        },
        M = function(t, n) {
            var i;
            t.currentTime = n, t.progress = n / t.duration * 100;
            for (var r = 0; r < t.tweens.length; r++) {
                var o = t.tweens[r];
                o.currentValue = R(o, n);
                for (var s = o.currentValue, a = 0; a < o.animatables.length; a++) {
                    var l = o.animatables[a],
                        c = l.id,
                        l = l.target,
                        u = o.name;
                    switch (o.type) {
                        case "css":
                            l.style[u] = s;
                            break;
                        case "attribute":
                            l.setAttribute(u, s);
                            break;
                        case "object":
                            l[u] = s;
                            break;
                        case "transform":
                            i || (i = {}), i[c] || (i[c] = []), i[c].push(s)
                    }
                }
            }
            if (i)
                for (r in e || (e = (w(document.body, "transform") ? "" : "-webkit-") + "transform"), i) t.animatables[r].target.style[e] = i[r].join(" ");
            t.settings.update && t.settings.update(t)
        },
        $ = function(e) {
            var n = {};
            n.animatables = S(e.targets), n.settings = f(e, t);
            var r, o = n.settings,
                s = [];
            for (r in e)
                if (!t.hasOwnProperty(r) && "targets" !== r) {
                    var a = i.obj(e[r]) ? h(e[r]) : { value: e[r] };
                    a.name = r, s.push(f(a, o))
                }
            return n.properties = s, n.tweens = L(n.animatables, n.properties), n.duration = P(n.tweens) || e.duration, n.currentTime = 0, n.progress = 0, n.ended = !1, n
        },
        F = [],
        B = 0,
        H = function() {
            var e = function() { B = requestAnimationFrame(t) },
                t = function(t) {
                    if (F.length) {
                        for (var n = 0; n < F.length; n++) F[n].tick(t);
                        e()
                    } else cancelAnimationFrame(B), B = 0
                };
            return e
        }(),
        z = function(e) {
            var t = $(e),
                n = {};
            return t.tick = function(e) {
                t.ended = !1, n.start || (n.start = e), n.current = Math.min(Math.max(n.last + e - n.start, 0), t.duration), M(t, n.current);
                var r = t.settings;
                r.begin && n.current >= r.delay && (r.begin(t), r.begin = void 0), n.current >= t.duration && (r.loop ? (n.start = e, "alternate" === r.direction && I(t, !0), i.num(r.loop) && r.loop--) : (t.ended = !0, t.pause(), r.complete && r.complete(t)), n.last = 0)
            }, t.seek = function(e) { M(t, e / 100 * t.duration) }, t.pause = function() { D(t); var e = F.indexOf(t); - 1 < e && F.splice(e, 1) }, t.play = function(e) { t.pause(), e && (t = f($(f(e, t.settings)), t)), n.start = 0, n.last = t.ended ? 0 : t.currentTime, e = t.settings, "reverse" === e.direction && I(t), "alternate" !== e.direction || e.loop || (e.loop = 1), N(t), F.push(t), B || H() }, t.restart = function() { t.reversed && I(t), t.pause(), t.seek(0), t.play() }, t.settings.autoplay && t.play(), t
        };
    return z.version = "1.1.1", z.speed = 1, z.list = F, z.remove = function(e) {
        e = l(i.arr(e) ? e.map(c) : c(e));
        for (var t = F.length - 1; 0 <= t; t--)
            for (var n = F[t], r = n.tweens, o = r.length - 1; 0 <= o; o--)
                for (var s = r[o].animatables, a = s.length - 1; 0 <= a; a--) u(e, s[a].target) && (s.splice(a, 1), s.length || r.splice(o, 1), r.length || n.pause())
    }, z.easings = r, z.getValue = T, z.path = function(e) { return e = i.str(e) ? a(e)[0] : e, { path: e, value: e.getTotalLength() } }, z.random = function(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e }, z
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e, t) { "use strict"; "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : void 0, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = me.type(e);
        return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

    function o(e, t, n) { return me.isFunction(t) ? me.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? me.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? me.grep(e, function(e) { return ae.call(t, e) > -1 !== n }) : Ee.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) { return ae.call(t, e) > -1 !== n && 1 === e.nodeType })) }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) { var t = {}; return me.each(e.match(Pe) || [], function(e, n) { t[n] = !0 }), t }

    function l(e) { return e }

    function c(e) { throw e }

    function u(e, t, n, i) { var r; try { e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }

    function d() { ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), me.ready() }

    function p() { this.expando = me.expando + p.uid++ }

    function h(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : $e.test(e) ? JSON.parse(e) : e) }

    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) { try { n = h(n) } catch (r) {} Me.set(e, t, n) } else n = void 0;
        return n
    }

    function m(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() { return i.cur() } : function() { return me.css(e, t, "") },
            l = a(),
            c = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            u = (me.cssNumber[t] || "px" !== c && +l) && He.exec(me.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do o = o || ".5", u /= o, me.style(e, t, u + c); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function g(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ue[i];
        return r ? r : (t = n.body.appendChild(n.createElement(i)), r = me.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ue[i] = r, r)
    }

    function y(e, t) { for (var n, i, r = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = Re.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && qe(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", Re.set(i, "display", n))); for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]); return e }

    function v(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? me.merge([e], n) : n }

    function w(e, t) { for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval")) }

    function b(e, t, n, i, r) {
        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if (o = e[h], o || 0 === o)
                if ("object" === me.type(o)) me.merge(p, o.nodeType ? [o] : o);
                else if (Qe.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Ve.exec(o) || ["", ""])[1].toLowerCase(), l = Xe[a] || Xe._default, s.innerHTML = l[1] + me.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            me.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = p[h++];)
            if (i && me.inArray(o, i) > -1) r && r.push(o);
            else if (c = me.contains(o.ownerDocument, o), s = v(d.appendChild(o), "script"), c && w(s), n)
            for (u = 0; o = s[u++];) Ye.test(o.type || "") && n.push(o);
        return d
    }

    function x() { return !0 }

    function T() { return !1 }

    function C() { try { return ne.activeElement } catch (e) {} }

    function _(e, t, n, i, r, o) {
        var s, a;
        if ("object" == ("undefined" == typeof t ? "undefined" : _typeof(t))) { "string" != typeof n && (i = i || n, n = void 0); for (a in t) _(e, a, n, i, t[a], o); return e }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = T;
        else if (!r) return e;
        return 1 === o && (s = r, r = function(e) { return me().off(e), s.apply(this, arguments) }, r.guid = s.guid || (s.guid = me.guid++)), e.each(function() { me.event.add(this, t, r, i, n) })
    }

    function E(e, t) { return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e }

    function S(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function A(e) { var t = rt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function k(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Re.hasData(e) && (o = Re.access(e), s = Re.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) me.event.add(t, r, c[r][n])
            }
            Me.hasData(e) && (a = Me.access(e), l = me.extend({}, a), Me.set(t, l))
        }
    }

    function L(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && Ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function I(e, t, i, r) {
        t = oe.apply([], t);
        var o, s, a, l, c, u, d = 0,
            p = e.length,
            h = p - 1,
            f = t[0],
            m = me.isFunction(f);
        if (m || p > 1 && "string" == typeof f && !he.checkClone && it.test(f)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = f.call(this, n, o.html())), I(o, t, i, r)
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (a = me.map(v(o, "script"), S), l = a.length; d < p; d++) c = o, d !== h && (c = me.clone(c, !0, !0), l && me.merge(a, v(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, me.map(a, A), d = 0; d < l; d++) c = a[d], Ye.test(c.type || "") && !Re.access(c, "globalEval") && me.contains(u, c) && (c.src ? me._evalUrl && me._evalUrl(c.src) : n(c.textContent.replace(ot, ""), u))
        }
        return e
    }

    function P(e, t, n) { for (var i, r = t ? me.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || me.cleanData(v(i)), i.parentNode && (n && me.contains(i.ownerDocument, i) && w(v(i, "script")), i.parentNode.removeChild(i)); return e }

    function O(e, t, n) { var i, r, o, s, a = e.style; return n = n || lt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || me.contains(e.ownerDocument, e) || (s = me.style(e, t)), !he.pixelMarginRight() && at.test(s) && st.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s }

    function N(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function D(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;)
            if (e = ht[n] + t, e in ft) return e
    }

    function j(e) { var t = me.cssProps[e]; return t || (t = me.cssProps[e] = D(e) || e), t }

    function R(e, t, n) { var i = He.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function M(e, t, n, i, r) { var o, s = 0; for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += me.css(e, n + ze[o], !0, r)), i ? ("content" === n && (s -= me.css(e, "padding" + ze[o], !0, r)), "margin" !== n && (s -= me.css(e, "border" + ze[o] + "Width", !0, r))) : (s += me.css(e, "padding" + ze[o], !0, r), "padding" !== n && (s += me.css(e, "border" + ze[o] + "Width", !0, r))); return s }

    function $(e, t, n) {
        var i, r = lt(e),
            o = O(e, t, r),
            s = "border-box" === me.css(e, "boxSizing", !1, r);
        return at.test(o) ? o : (i = s && (he.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), o = parseFloat(o) || 0, o + M(e, t, n || (s ? "border" : "content"), i, r) + "px")
    }

    function F(e, t, n, i, r) { return new F.prototype.init(e, t, n, i, r) }

    function B() { gt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, me.fx.interval), me.fx.tick()) }

    function H() { return e.setTimeout(function() { mt = void 0 }), mt = me.now() }

    function z(e, t) {
        var n, i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = ze[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function q(e, t, n) {
        for (var i, r = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function W(e, t, n) {
        var i, r, o, s, a, l, c, u, d = "width" in t || "height" in t,
            p = this,
            h = {},
            f = e.style,
            m = e.nodeType && qe(e),
            g = Re.get(e, "fxshow");
        n.queue || (s = me._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, p.always(function() { p.always(function() { s.unqueued--, me.queue(e, "fx").length || s.empty.fire() }) }));
        for (i in t)
            if (r = t[i], yt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                h[i] = g && g[i] || me.style(e, i)
            }
        if (l = !me.isEmptyObject(t), l || !me.isEmptyObject(h)) { d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = g && g.display, null == c && (c = Re.get(e, "display")), u = me.css(e, "display"), "none" === u && (c ? u = c : (y([e], !0), c = e.style.display || c, u = me.css(e, "display"), y([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === me.css(e, "float") && (l || (p.done(function() { f.display = c }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] })), l = !1; for (i in h) l || (g ? "hidden" in g && (m = g.hidden) : g = Re.access(e, "fxshow", { display: c }), o && (g.hidden = !m), m && y([e], !0), p.done(function() { m || y([e]), Re.remove(e, "fxshow"); for (i in h) me.style(e, i, h[i]) })), l = q(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0)) }
    }

    function U(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = me.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = me.cssHooks[i], s && "expand" in s) { o = s.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r
    }

    function G(e, t, n) {
        var i, r, o = 0,
            s = G.prefilters.length,
            a = me.Deferred().always(function() { delete l.elem }),
            l = function d() { if (r) return !1; for (var t = mt || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, d = c.tweens.length; s < d; s++) c.tweens[s].run(o); return a.notifyWith(e, [c, o, n]), o < 1 && d ? n : (d || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1) },
            c = a.promise({
                elem: e,
                props: me.extend({}, t),
                opts: me.extend(!0, { specialEasing: {}, easing: me.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mt || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var i = me.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (U(u, c.opts.specialEasing); o < s; o++)
            if (i = G.prefilters[o].call(c, e, u, c.opts)) return me.isFunction(i.stop) && (me._queueHooks(c.elem, c.opts.queue).stop = me.proxy(i.stop, i)), i;
        return me.map(u, q, c), me.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), me.fx.timer(me.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c
    }

    function V(e) { var t = e.match(Pe) || []; return t.join(" ") }

    function Y(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function X(e, t, n, i) {
        var r;
        if (Array.isArray(t)) me.each(t, function(t, r) { n || kt.test(e) ? i(e, r) : X(e + "[" + ("object" == ("undefined" == typeof r ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== me.type(t)) i(e, t);
        else
            for (r in t) X(e + "[" + r + "]", t[r], n, i)
    }

    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Pe) || [];
            if (me.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function K(e, t, n, i) {
        function r(a) { var l; return o[a] = !0, me.each(e[a] || [], function(e, a) { var c = a(t, n, i); return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1) }), l }
        var o = {},
            s = e === Bt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function Z(e, t) { var n, i, r = me.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && me.extend(!0, e, i), e }

    function J(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) { l.unshift(r); break }
        if (l[0] in n) o = l[0];
        else { for (r in n) { if (!l[0] || e.converters[r + " " + l[0]]) { o = r; break } s || (s = r) } o = o || s }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function ee(e, t, n, i) {
        var r, o, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = c[l + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) { s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1])); break }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try { t = s(t) } catch (d) { return { state: "parsererror", error: s ? d : "No conversion from " + l + " to " + o } }
        }
        return { state: "success", data: t }
    }
    var te = [],
        ne = e.document,
        ie = Object.getPrototypeOf,
        re = te.slice,
        oe = te.concat,
        se = te.push,
        ae = te.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        de = ue.toString,
        pe = de.call(Object),
        he = {},
        fe = "3.2.1",
        me = function Xt(e, t) { return new Xt.fn.init(e, t) },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ye = /^-ms-/,
        ve = /-([a-z])/g,
        we = function(e, t) { return t.toUpperCase() };
    me.fn = me.prototype = {
        jquery: fe,
        constructor: me,
        length: 0,
        toArray: function() { return re.call(this) },
        get: function(e) { return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = me.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return me.each(this, e) },
        map: function(e) { return this.pushStack(me.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(re.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, me.extend = me.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == ("undefined" == typeof s ? "undefined" : _typeof(s)) || me.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (me.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, s[t] = me.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, me.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === me.type(e) },
        isWindow: function(e) { return null != e && e === e.window },
        isNumeric: function(e) { var t = me.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) },
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== ce.call(e) || (t = ie(e)) && (n = ue.call(t, "constructor") && t.constructor, "function" != typeof n || de.call(n) !== pe)) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        type: function(e) { return null == e ? e + "" : "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? le[ce.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e) },
        globalEval: function(e) { n(e) },
        camelCase: function(e) { return e.replace(ye, "ms-").replace(ve, we) },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(ge, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : ae.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e },
        grep: function(e, t, n) { for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]); return r },
        map: function(e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) o = t(e[s], s, n), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, n), null != o && a.push(o);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) { var n, i, r; if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = re.call(arguments, 2), r = function() { return e.apply(t || this, i.concat(re.call(arguments))) }, r.guid = e.guid = e.guid || me.guid++, r },
        now: Date.now,
        support: he
    }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { le["[object " + t + "]"] = t.toLowerCase() });
    var be = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, c, u, p = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : H) !== N && O(t), t = t || N, j)) {
                if (11 !== f && (l = ye.exec(e)))
                    if (r = l[1]) { if (9 === f) { if (!(s = t.getElementById(r))) return n; if (s.id === r) return n.push(s), n } else if (p && (s = p.getElementById(r)) && F(t, s) && s.id === r) return n.push(s), n } else { if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n; if ((r = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n }
                if (T.qsa && !G[e + " "] && (!R || !R.test(e))) {
                    if (1 !== f) p = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, Te) : t.setAttribute("id", a = B), c = S(e), o = c.length; o--;) c[o] = "#" + a + " " + h(c[o]);
                        u = c.join(","), p = ve.test(e) && d(t.parentNode) || t
                    }
                    if (u) try { return Z.apply(n, p.querySelectorAll(u)), n } catch (m) {} finally { a === B && t.removeAttribute("id") }
                }
            }
            return k(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) { return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i }
            var t = [];
            return e
        }

        function i(e) { return e[B] = !0, e }

        function r(e) { var t = N.createElement("fieldset"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

        function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function c(e) { return function(t) { return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && _e(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function u(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r])) }) }) }

        function d(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

        function p() {}

        function h(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function f(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = q++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, d, p = [z, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (d = t[B] || (t[B] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else { if ((c = u[o]) && c[0] === z && c[1] === a) return p[2] = c[2]; if (u[o] = p, p[2] = e(t, n, l)) return !0 } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

        function y(e, t, n, i, r) { for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a))); return s }

        function v(e, t, n, r, o, s) {
            return r && !r[B] && (r = v(r)), o && !o[B] && (o = v(o, s)), i(function(i, s, a, l) {
                var c, u, d, p = [],
                    h = [],
                    f = s.length,
                    m = i || g(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? m : y(m, p, e, a, l),
                    w = n ? o || (i ? e : f || r) ? [] : s : v;
                if (n && n(v, w, a, l), r)
                    for (c = y(w, h), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[h[u]] = !(v[h[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(v[u] = d);
                            o(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else w = y(w === s ? w.splice(f, w.length) : w), o ? o(null, s, w, l) : Z.apply(s, w)
            })
        }

        function w(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = f(function(e) { return e === t }, s, !0), c = f(function(e) { return ee(t, e) > -1 }, s, !0), u = [function(e, n, i) { var r = !o && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i)); return t = null, r }]; a < r; a++)
                if (n = C.relative[e[a].type]) u = [f(m(u), n)];
                else { if (n = C.filter[e[a].type].apply(null, e[a].matches), n[B]) { for (i = ++a; i < r && !C.relative[e[i].type]; i++); return v(a > 1 && m(u), a > 1 && h(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, a < i && w(e.slice(a, i)), i < r && w(e = e.slice(i)), i < r && h(e)) } u.push(n) }
            return m(u)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, d, p, h = 0,
                        f = "0",
                        m = i && [],
                        g = [],
                        v = L,
                        w = i || o && C.find.TAG("*", c),
                        b = z += null == v ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (L = s === N || s || c); f !== x && null != (u = w[f]); f++) {
                        if (o && u) {
                            for (d = 0, s || u.ownerDocument === N || (O(u), a = !j); p = e[d++];)
                                if (p(u, s || N, a)) { l.push(u); break }
                            c && (z = b)
                        }
                        r && ((u = !p && u) && h--, i && m.push(u))
                    }
                    if (h += f, r && f !== h) {
                        for (d = 0; p = n[d++];) p(m, g, s, a);
                        if (i) {
                            if (h > 0)
                                for (; f--;) m[f] || g[f] || (g[f] = Q.call(l));
                            g = y(g)
                        }
                        Z.apply(l, g), c && !i && g.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (z = b, L = v), m
                };
            return r ? i(s) : s
        }
        var x, T, C, _, E, S, A, k, L, I, P, O, N, D, j, R, M, $, F, B = "sizzle" + 1 * new Date,
            H = e.document,
            z = 0,
            q = 0,
            W = n(),
            U = n(),
            G = n(),
            V = function(e, t) { return e === t && (P = !0), 0 },
            Y = {}.hasOwnProperty,
            X = [],
            Q = X.pop,
            K = X.push,
            Z = X.push,
            J = X.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) { return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            Ce = function() { O() },
            _e = f(function(e) { return e.disabled === !0 && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { Z.apply(X = J.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType } catch (Ee) {
            Z = {
                apply: X.length ? function(e, t) { K.apply(e, J.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, E = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, O = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : H;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, D = N.documentElement, j = !E(N), H !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), T.getElementsByTagName = r(function(e) { return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length }), T.getElementsByClassName = ge.test(N.getElementsByClassName), T.getById = r(function(e) { return D.appendChild(e).id = B, !N.getElementsByName || !N.getElementsByName(B).length }), T.getById ? (C.filter.ID = function(e) { var t = e.replace(we, be); return function(e) { return e.getAttribute("id") === t } }, C.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && j) { var n = t.getElementById(e); return n ? [n] : [] } }) : (C.filter.ID = function(e) { var t = e.replace(we, be); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && j) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = T.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && j) return t.getElementsByClassName(e) }, M = [], R = [], (T.qsa = ge.test(N.querySelectorAll)) && (r(function(e) { D.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || R.push(".#.+[+~]") }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
            })), (T.matchesSelector = ge.test($ = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) { T.disconnectedMatch = $.call(e, "*"), $.call(e, "[s!='']:x"), M.push("!=", oe) }), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(D.compareDocumentPosition), F = t || ge.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) { if (e === t) return P = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === H && F(H, e) ? -1 : t === N || t.ownerDocument === H && F(H, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return P = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === H ? -1 : l[i] === H ? 1 : 0
            }, N) : N
        }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== N && O(e), n = n.replace(ue, "='$1']"), T.matchesSelector && j && !G[n + " "] && (!M || !M.test(n)) && (!R || !R.test(n))) try { var i = $.call(e, n); if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (r) {}
            return t(n, N, null, [e]).length > 0
        }, t.contains = function(e, t) { return (e.ownerDocument || e) !== N && O(e), F(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && O(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
            return void 0 !== i ? i : T.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) { return (e + "").replace(xe, Te) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (P = !T.detectDuplicates, I = !T.sortStable && e.slice(0), e.sort(V), P) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
            return I = null, e
        }, _ = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += _(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                for (; t = e[i++];) n += _(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
            filter: {
                TAG: function(e) { var t = e.replace(we, be).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                CLASS: function(e) { var t = W[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, l) {
                        var c, u, d, p, h, f, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !l && !a,
                            w = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild], s && v) {
                                for (p = g, d = p[B] || (p[B] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === z && c[1], w = h && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (w = h = 0) || f.pop();)
                                    if (1 === p.nodeType && ++w && p === t) { u[e] = [z, h, w]; break }
                            } else if (v && (p = t, d = p[B] || (p[B] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === z && c[1], w = h), w === !1)
                                for (;
                                    (p = ++h && p && p[m] || (w = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++w || (v && (d = p[B] || (p[B] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [z, w]), p !== t)););
                            return w -= r, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) { var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[B] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s]) }) : function(e) { return o(e, 0, r) }) : o }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = A(e.replace(ae, "$1"));
                    return r[B] ? i(function(e, t, n, i) { for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                }),
                has: i(function(e) { return function(n) { return t(e, n).length > 0 } }),
                contains: i(function(e) {
                    return e = e.replace(we, be),
                        function(t) { return (t.textContent || t.innerText || _(t)).indexOf(e) > -1 }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === D },
                focus: function(e) { return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) { return !C.pseudos.empty(e) },
                header: function(e) { return me.test(e.nodeName) },
                input: function(e) { return fe.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: u(function() { return [0] }),
                last: u(function(e, t) { return [t - 1] }),
                eq: u(function(e, t, n) { return [n < 0 ? n + t : n] }),
                even: u(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                odd: u(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                lt: u(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }),
                gt: u(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[x] = a(x);
        for (x in { submit: !0, reset: !0 }) C.pseudos[x] = l(x);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, S = t.tokenize = function(e, n) { var i, r, o, s, a, l, c, u = U[e + " "]; if (u) return n ? 0 : u.slice(0); for (a = e, l = [], c = C.preFilter; a;) { i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(ae, " ") }), a = a.slice(i.length)); for (s in C.filter) !(r = he[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({ value: i, type: s, matches: r }), a = a.slice(i.length)); if (!i) break } return n ? a.length : a ? t.error(e) : U(e, l).slice(0) }, A = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = G[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = w(t[n]), o[B] ? i.push(o) : r.push(o);
                o = G(e, b(r, i)), o.selector = e
            }
            return o
        }, k = t.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                u = !i && S(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && j && C.relative[o[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(we, be), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(we, be), ve.test(o[0].type) && d(t.parentNode) || t))) { if (o.splice(r, 1), e = i.length && h(o), !e) return Z.apply(n, i), n; break }
            }
            return (c || A(e, u))(i, t, !j, n, !t || ve.test(e) && d(t.parentNode) || t), n
        }, T.sortStable = B.split("").sort(V).join("") === B, T.detectDuplicates = !!P, O(), T.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(N.createElement("fieldset")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), T.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var i; if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t
    }(e);
    me.find = be, me.expr = be.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = be.uniqueSort, me.text = be.getText, me.isXMLDoc = be.isXML, me.contains = be.contains, me.escapeSelector = be.escape;
    var xe = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && me(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        Te = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Ce = me.expr.match.needsContext,
        _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [i] : [] : me.find.matches(e, me.grep(t, function(e) { return 1 === e.nodeType })) }, me.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (me.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, r[t], n);
            return i > 1 ? me.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(o(this, e || [], !1)) },
        not: function(e) { return this.pushStack(o(this, e || [], !0)) },
        is: function(e) { return !!o(this, "string" == typeof e && Ce.test(e) ? me(e) : e || [], !1).length }
    });
    var Se, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        ke = me.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Se, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), _e.test(i[1]) && me.isPlainObject(t))
                        for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = ne.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
        };
    ke.prototype = me.fn, Se = me(ne);
    var Le = /^(?:parents|prev(?:Until|All))/,
        Ie = { children: !0, contents: !0, next: !0, prev: !0 };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (me.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && me(e);
            if (!Ce.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? ae.call(me(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), me.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return xe(e, "parentNode") }, parentsUntil: function(e, t, n) { return xe(e, "parentNode", n) }, next: function(e) { return s(e, "nextSibling") }, prev: function(e) { return s(e, "previousSibling") }, nextAll: function(e) { return xe(e, "nextSibling") }, prevAll: function(e) { return xe(e, "previousSibling") }, nextUntil: function(e, t, n) { return xe(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return xe(e, "previousSibling", n) }, siblings: function(e) { return Te((e.parentNode || {}).firstChild, e) }, children: function(e) { return Te(e.firstChild) }, contents: function(e) { return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), me.merge([], e.childNodes)) } }, function(e, t) { me.fn[e] = function(n, i) { var r = me.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = me.filter(i, r)), this.length > 1 && (Ie[e] || me.uniqueSort(r), Le.test(e) && r.reverse()), this.pushStack(r) } });
    var Pe = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : me.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            l = -1,
            c = function() {
                for (r = r || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function() { return o && (n && !t && (l = o.length - 1, s.push(n)), function i(t) { me.each(t, function(t, n) { me.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== me.type(n) && i(n) }) }(arguments), n && !t && c()), this },
                remove: function() {
                    return me.each(arguments, function(e, t) {
                        for (var n;
                            (n = me.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) { return e ? me.inArray(e, o) > -1 : o.length > 0 },
                empty: function() { return o && (o = []), this },
                disable: function() { return r = s = [], o = n = "", this },
                disabled: function() { return !o },
                lock: function() { return r = s = [], n || t || (o = n = ""), this },
                locked: function() { return !!r },
                fireWith: function(e, n) { return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this },
                fire: function() { return u.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return u
    }, me.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                    ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() { return i },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    "catch": function(e) { return r.then(null, e) },
                    pipe: function() {
                        var e = arguments;
                        return me.Deferred(function(t) {
                            me.each(n, function(n, i) {
                                var r = me.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    d = function h() {
                                        var e, h;
                                        if (!(t < s)) {
                                            if (e = i.apply(a, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            h = e && ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, me.isFunction(h) ? r ? h.call(e, o(s, n, l, r), o(s, n, c, r)) : (s++, h.call(e, o(s, n, l, r), o(s, n, c, r), o(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [e]), (r || n.resolveWith)(a, u))
                                        }
                                    },
                                    p = r ? d : function() { try { d() } catch (e) { me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, u = [e]), n.rejectWith(a, u)) } };
                                t ? p() : (me.Deferred.getStackHook && (p.stackTrace = me.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return me.Deferred(function(e) { n[0][3].add(o(0, e, me.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(o(0, e, me.isFunction(t) ? t : l)), n[2][3].add(o(0, e, me.isFunction(i) ? i : c)) }).promise()
                    },
                    promise: function(e) { return null != e ? me.extend(e, r) : r }
                },
                o = {};
            return me.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() { i = a }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = re.call(arguments),
                o = me.Deferred(),
                s = function(e) { return function(n) { i[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(i, r) } };
            if (t <= 1 && (u(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || me.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) u(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && Oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, me.readyException = function(t) { e.setTimeout(function() { throw t }) };
    var Ne = me.Deferred();
    me.fn.ready = function(e) { return Ne.then(e)["catch"](function(e) { me.readyException(e) }), this }, me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || Ne.resolveWith(ne, [me]))
        }
    }), me.ready.then = Ne.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var De = function Qt(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === me.type(n)) { r = !0; for (a in n) Qt(e, t, a, n[a], !0, o, s) } else if (void 0 !== i && (r = !0, me.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(me(e), n) })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        je = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    p.uid = 1, p.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[me.camelCase(t)] = n;
            else
                for (i in t) r[me.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [t] : t.match(Pe) || []), n = t.length; for (; n--;) delete i[t[n]] }(void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !me.isEmptyObject(t) }
    };
    var Re = new p,
        Me = new p,
        $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    me.extend({ hasData: function(e) { return Me.hasData(e) || Re.hasData(e) }, data: function(e, t, n) { return Me.access(e, t, n) }, removeData: function(e, t) { Me.remove(e, t) }, _data: function(e, t, n) { return Re.access(e, t, n) }, _removeData: function(e, t) { Re.remove(e, t) } }), me.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Me.get(o), 1 === o.nodeType && !Re.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = me.camelCase(i.slice(5)), f(o, i, r[i])));
                    Re.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? this.each(function() { Me.set(this, e) }) : De(this, function(t) { var n; if (o && void 0 === t) { if (n = Me.get(o, e), void 0 !== n) return n; if (n = f(o, e), void 0 !== n) return n } else this.each(function() { Me.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { Me.remove(this, e) }) }
    }), me.extend({
        queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || Array.isArray(n) ? i = Re.access(e, t, me.makeArray(n)) : i.push(n)), i || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = me.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = me._queueHooks(e, t),
                s = function() { me.dequeue(e, t) };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Re.get(e, n) || Re.access(e, n, { empty: me.Callbacks("once memory").add(function() { Re.remove(e, [t + "queue", n]) }) }) }
    }), me.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { me.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, i = 1,
                r = me.Deferred(),
                o = this,
                s = this.length,
                a = function() {--i || r.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Re.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        ze = ["Top", "Right", "Bottom", "Left"],
        qe = function(e, t) { return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display") },
        We = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Ue = {};
    me.fn.extend({ show: function() { return y(this, !0) }, hide: function() { return y(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { qe(this) ? me(this).show() : me(this).hide() }) } });
    var Ge = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ye = /^$|\/(?:java|ecma)script/i,
        Xe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Qe = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), he.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ke = ne.documentElement,
        Ze = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, p, h, f, m, g = Re.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && me.find.matchesSelector(Ke, r), n.guid || (n.guid = me.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) { return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0 }), t = (t || "").match(Pe) || [""], c = t.length; c--;) a = et.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h && (d = me.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = me.event.special[h] || {}, u = me.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && me.expr.match.needsContext.test(r), namespace: f.join(".") }, o), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, f, s) !== !1 || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), me.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, p, h, f, m, g = Re.hasData(e) && Re.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(Pe) || [""], c = t.length; c--;)
                    if (a = et.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = me.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || me.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) me.event.remove(e, h + t[c], n, i, !0);
                me.isEmptyObject(l) && Re.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = me.event.fix(e),
                l = new Array(arguments.length),
                c = (Re.get(this, "events") || {})[a.type] || [],
                u = me.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                for (s = me.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, i = ((me.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                        for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? me(r, this).index(c) > -1 : me.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({ elem: c, handlers: o })
                    }
            return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
        },
        addProp: function(e, t) { Object.defineProperty(me.Event.prototype, e, { enumerable: !0, configurable: !0, get: me.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[me.expando] ? e : new me.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== C() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === C() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1 }, _default: function(e) { return r(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, me.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, me.Event = function(e, t) { return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t) }, me.Event.prototype = {
        constructor: me.Event,
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
    }, me.each({
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
        which: function(e) { var t = e.button; return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which }
    }, me.event.addProp), me.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || me.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), me.fn.extend({ on: function(e, t, n, i) { return _(this, e, t, n, i) }, one: function(e, t, n, i) { return _(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e))) { for (r in e) this.off(r, t, e[r]); return this } return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function() { me.event.remove(this, e, n, t) }) } });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) { return e.replace(tt, "<$1></$2>") },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = me.contains(e.ownerDocument, e);
            if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (s = v(a), o = v(e), i = 0, r = o.length; i < r; i++) L(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), i = 0, r = o.length; i < r; i++) k(o[i], s[i]);
                else k(e, a);
            return s = v(a, "script"), s.length > 0 && w(s, !l && v(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (je(n)) {
                    if (t = n[Re.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                        n[Re.expando] = void 0
                    }
                    n[Me.expando] && (n[Me.expando] = void 0)
                }
        }
    }), me.fn.extend({
        detach: function(e) { return P(this, e, !0) },
        remove: function(e) { return P(this, e) },
        text: function(e) { return De(this, function(e) { return void 0 === e ? me.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return I(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return I(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(v(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return me.clone(this, e, t) }) },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Xe[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return I(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), me.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { me.fn[e] = function(e) { for (var n, i = [], r = me(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), me(r[s])[t](n), se.apply(i, n.get()); return this.pushStack(i) } });
    var st = /^margin/,
        at = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ke.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(s), a = null
            }
        }
        var n, i, r, o, s = ne.createElement("div"),
            a = ne.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), me.extend(he, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), i }, pixelMarginRight: function() { return t(), r }, reliableMarginLeft: function() { return t(), o } }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        dt = { position: "absolute", visibility: "hidden", display: "block" },
        pt = { letterSpacing: "0", fontWeight: "400" },
        ht = ["Webkit", "Moz", "ms"],
        ft = ne.createElement("div").style;
    me.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = O(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = me.camelCase(t),
                    l = ut.test(t),
                    c = e.style;
                return l || (t = j(a)), s = me.cssHooks[t] || me.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t] : (o = "undefined" == typeof n ? "undefined" : _typeof(n), "string" === o && (r = He.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (me.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = me.camelCase(t),
                l = ut.test(t);
            return l || (t = j(a)), s = me.cssHooks[t] || me.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = O(e, t, i)), "normal" === r && t in pt && (r = pt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, i) { if (n) return !ct.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, i) : We(e, dt, function() { return $(e, t, i) }) },
            set: function(e, n, i) {
                var r, o = i && lt(e),
                    s = i && M(e, t, i, "border-box" === me.css(e, "boxSizing", !1, o), o);
                return s && (r = He.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = me.css(e, t)), R(e, n, s)
            }
        }
    }), me.cssHooks.marginLeft = N(he.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), me.each({ margin: "", padding: "", border: "Width" }, function(e, t) { me.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ze[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, st.test(e) || (me.cssHooks[e + t].set = R) }), me.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) { for (i = lt(e), r = t.length; s < r; s++) o[t[s]] = me.css(e, t[s], !1, i); return o }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), me.Tween = F, F.prototype = { constructor: F, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (me.cssNumber[n] ? "" : "px") }, cur: function() { var e = F.propHooks[this.prop]; return e && e.get ? e.get(this) : F.propHooks._default.get(this) }, run: function(e) { var t, n = F.propHooks[this.prop]; return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this } }, F.prototype.init.prototype = F.prototype, F.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit) } } }, F.propHooks.scrollTop = F.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, me.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, me.fx = F.prototype.init, me.fx.step = {};
    var mt, gt, yt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    me.Animation = me.extend(G, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return m(n.elem, e, He.exec(t), n), n }] }, tweener: function(e, t) { me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Pe); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t) }, prefilters: [W], prefilter: function(e, t) { t ? G.prefilters.unshift(e) : G.prefilters.push(e) } }), me.speed = function(e, t, n) { var i = e && "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? me.extend({}, e) : { complete: n || !n && t || me.isFunction(e) && e, duration: e, easing: n && t || t && !me.isFunction(t) && t }; return me.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue) }, i }, me.fn.extend({
            fadeTo: function(e, t, n, i) { return this.filter(qe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
            animate: function(e, t, n, i) {
                var r = me.isEmptyObject(e),
                    o = me.speed(t, n, i),
                    s = function() {
                        var t = G(this, me.extend({}, e), o);
                        (r || Re.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = me.timers,
                        s = Re.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && vt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || me.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Re.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = me.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, me.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), me.each(["toggle", "show", "hide"], function(e, t) {
            var n = me.fn[t];
            me.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r) }
        }), me.each({ slideDown: z("show"), slideUp: z("hide"), slideToggle: z("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { me.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), me.timers = [], me.fx.tick = function() {
            var e, t = 0,
                n = me.timers;
            for (mt = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(), mt = void 0
        }, me.fx.timer = function(e) { me.timers.push(e), me.fx.start() }, me.fx.interval = 13, me.fx.start = function() { gt || (gt = !0, B()) }, me.fx.stop = function() { gt = null }, me.fx.speeds = { slow: 600, fast: 200, _default: 400 }, me.fn.delay = function(t, n) {
            return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(r) }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", he.radioValue = "t" === e.value
        }();
    var wt, bt = me.expr.attrHandle;
    me.fn.extend({ attr: function(e, t) { return De(this, me.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { me.removeAttr(this, e) }) } }), me.extend({
        attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (r = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? wt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = me.find.attr(e, t), null == i ? void 0 : i)) },
        attrHooks: { type: { set: function(e, t) { if (!he.radioValue && "radio" === t && r(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Pe);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), wt = { set: function(e, t, n) { return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n } }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = bt[t] || me.find.attr;
        bt[t] = function(e, t, i) { var r, o, s = t.toLowerCase(); return i || (o = bt[s], bt[s] = r, r = null != n(e, t, i) ? s : null, bt[s] = o), r }
    });
    var xt = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
    me.fn.extend({ prop: function(e, t) { return De(this, me.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[me.propFix[e] || e] }) } }), me.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, r = me.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = me.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : xt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), he.optSelected || (me.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { me.propFix[this.toLowerCase()] = this }), me.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (me.isFunction(e)) return this.each(function(t) { me(this).addClass(e.call(this, t, Y(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(Pe) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + V(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = V(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (me.isFunction(e)) return this.each(function(t) { me(this).removeClass(e.call(this, t, Y(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Pe) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && " " + V(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = V(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = "undefined" == typeof e ? "undefined" : _typeof(e);
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) { me(this).toggleClass(e.call(this, n, Y(this), t), t) }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = me(this), o = e.match(Pe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Y(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Re.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + V(Y(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = me.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, me(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = me.map(r, function(e) { return null == e ? "" : e + "" })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = me.valHooks[r.type] || me.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0
        }
    }), me.extend({
        valHooks: {
            option: { get: function(e) { var t = me.find.attr(e, "value"); return null != t ? t : V(me.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        c = a ? s + 1 : o.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (n = o[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), a) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) { for (var n, i, r = e.options, o = me.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = me.inArray(me.valHooks.option.get(i), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), me.each(["radio", "checkbox"], function() { me.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1 } }, he.checkOn || (me.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var _t = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, c, u, d, p = [i || ne],
                h = ue.call(t, "type") ? t.type : t,
                f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(h + me.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[me.expando] ? t : new me.Event(h, "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : me.makeArray(n, [t]), d = me.event.special[h] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !me.isWindow(i)) {
                    for (l = d.delegateType || h, _t.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || ne) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, u = (Re.get(s, "events") || {})[t.type] && Re.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && je(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !je(i) || c && me.isFunction(i[h]) && !me.isWindow(i) && (a = i[c], a && (i[c] = null), me.event.triggered = h, i[h](), me.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = me.extend(new me.Event, n, { type: e, isSimulated: !0 });
            me.event.trigger(i, null, t)
        }
    }), me.fn.extend({ trigger: function(e, t) { return this.each(function() { me.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return me.event.trigger(e, t, n, !0) } }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { me.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), me.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), he.focusin = "onfocusin" in e, he.focusin || me.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { me.event.simulate(t, e.target, me.event.fix(e)) };
        me.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Re.access(i, t);
                r || i.addEventListener(e, n, !0), Re.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Re.access(i, t) - 1;
                r ? Re.access(i, t, r) : (i.removeEventListener(e, n, !0), Re.remove(i, t))
            }
        }
    });
    var Et = e.location,
        St = me.now(),
        At = /\?/;
    me.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (i) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n };
    var kt = /\[\]$/,
        Lt = /\r?\n/g,
        It = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = me.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) X(n, e[n], t, r);
        return i.join("&")
    }, me.fn.extend({ serialize: function() { return me.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = me.prop(this, "elements"); return e ? me.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !me(this).is(":disabled") && Pt.test(this.nodeName) && !It.test(e) && (this.checked || !Ge.test(e)) }).map(function(e, t) { var n = me(this).val(); return null == n ? null : Array.isArray(n) ? me.map(n, function(e) { return { name: t.name, value: e.replace(Lt, "\r\n") } }) : { name: t.name, value: n.replace(Lt, "\r\n") } }).get() } });
    var Ot = /%20/g,
        Nt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Ft = {},
        Bt = {},
        Ht = "*/".concat("*"),
        zt = ne.createElement("a");
    zt.href = Et.href, me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Et.href, type: "GET", isLocal: Rt.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": me.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Z(Z(e, me.ajaxSettings), t) : Z(me.ajaxSettings, e) },
        ajaxPrefilter: Q(Ft),
        ajaxTransport: Q(Bt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, p, h, b, x, T = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = J(f, C, i)), b = ee(f, b, C, c), c ? (f.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (me.lastModified[o] = x), x = C.getResponseHeader("etag"), x && (me.etag[o] = x)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, h = b.error, c = !h)) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", c ? y.resolveWith(m, [p, T, C]) : y.rejectWith(m, [C, T, h]), C.statusCode(w), w = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : h]), v.fireWith(m, [C, T]), d && (g.trigger("ajaxComplete", [C, f]), --me.active || me.event.trigger("ajaxStop")))
            }
            "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, d, p, h, f = me.ajaxSetup({}, n),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                y = me.Deferred(),
                v = me.Callbacks("once memory"),
                w = f.statusCode || {},
                b = {},
                x = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = jt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return u ? s : null },
                    setRequestHeader: function(e, t) { return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this },
                    overrideMimeType: function(e) { return null == u && (f.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || T; return r && r.abort(t), i(0, t), this }
                };
            if (y.promise(C), f.url = ((t || f.url || Et.href) + "").replace($t, Et.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Pe) || [""], null == f.crossDomain) { c = ne.createElement("a"); try { c.href = f.url, c.href = c.href, f.crossDomain = zt.protocol + "//" + zt.host != c.protocol + "//" + c.host } catch (_) { f.crossDomain = !0 } }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = me.param(f.data, f.traditional)), K(Ft, f, n, C), u) return C;
            d = me.event && f.global, d && 0 === me.active++ && me.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), o = f.url.replace(Nt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ot, "+")) : (h = f.url.slice(o.length), f.data && (o += (At.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(Dt, "$1"), h = (At.test(o) ? "&" : "?") + "_=" + St++ + h), f.url = o + h), f.ifModified && (me.lastModified[o] && C.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && C.setRequestHeader("If-None-Match", me.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) C.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (f.beforeSend.call(m, C, f) === !1 || u)) return C.abort();
            if (T = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), r = K(Bt, f, n, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, f]), u) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() { C.abort("timeout") }, f.timeout));
                try { u = !1, r.send(b, i) } catch (_) {
                    if (u) throw _;
                    i(-1, _)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) { return me.get(e, t, n, "json") },
        getScript: function(e, t) { return me.get(e, void 0, t, "script") }
    }), me.each(["get", "post"], function(e, t) { me[t] = function(e, n, i, r) { return me.isFunction(n) && (r = r || i, i = n, n = void 0), me.ajax(me.extend({ url: e, type: t, dataType: r, data: n, success: i }, me.isPlainObject(e) && e)) } }), me._evalUrl = function(e) { return me.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, me.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) { me(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = me.isFunction(e); return this.each(function(n) { me(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { me(this).replaceWith(this.childNodes) }), this }
    }), me.expr.pseudos.hidden = function(e) { return !me.expr.pseudos.visible(e) }, me.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, me.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (t) {} };
    var qt = { 0: 200, 1223: 204 },
        Wt = me.ajaxSettings.xhr();
    he.cors = !!Wt && "withCredentials" in Wt, he.ajax = Wt = !!Wt, me.ajaxTransport(function(t) {
        var n, i;
        if (he.cors || Wt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) { return function() { n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort");
                try { a.send(t.hasContent && t.data || null) } catch (l) { if (n) throw l }
            },
            abort: function() { n && n() }
        }
    }), me.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), me.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return me.globalEval(e), e } } }), me.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), me.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, r) { t = me("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), ne.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
    var Ut = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Ut.pop() || me.expando + "_" + St++; return this[e] = !0, e } }), me.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, s, a = t.jsonp !== !1 && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data"); if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Gt, "$1" + r) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return s || me.error(r + " was not called"), s[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { s = arguments }, i.always(function() { void 0 === o ? me(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ut.push(r)), s && me.isFunction(o) && o(s[0]), s = o = void 0 }), "script" }), he.createHTMLDocument = function() { var e = ne.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), me.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, r, o; return t || (he.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), r = _e.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && me(o).remove(), me.merge([], r.childNodes)) }, me.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = V(e.slice(a)), e = e.slice(0, a)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (r = "POST"), s.length > 0 && me.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, s.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { me.fn[t] = function(e) { return this.on(t, e) } }), me.expr.pseudos.animated = function(e) { return me.grep(me.timers, function(t) { return e === t.elem }).length }, me.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c, u = me.css(e, "position"),
                d = me(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), o = me.css(e, "top"), l = me.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, me.fn.extend({
        offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { me.offset.setOffset(this, e, t) }); var t, n, i, r, o = this[0]; return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = { top: 0, left: 0 };
                return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + me.css(e[0], "borderTopWidth", !0), left: i.left + me.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - me.css(n, "marginTop", !0), left: t.left - i.left - me.css(n, "marginLeft", !0) }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }), me.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function(i) { return De(this, function(e, i, r) { var o; return me.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r) }, e, i, arguments.length) }
    }), me.each(["top", "left"], function(e, t) { me.cssHooks[t] = N(he.pixelPosition, function(e, n) { if (n) return n = O(e, t), at.test(n) ? me(e).position()[t] + "px" : n }) }), me.each({ Height: "height", Width: "width" }, function(e, t) {
        me.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) {
            me.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return De(this, function(t, n, r) { var o; return me.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? me.css(t, n, a) : me.style(t, n, r, a) }, t, s ? r : void 0, s)
            }
        })
    }), me.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), me.holdReady = function(e) { e ? me.readyWait++ : me.ready(!0) }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() { return me });
    var Vt = e.jQuery,
        Yt = e.$;
    return me.noConflict = function(t) { return e.$ === me && (e.$ = Yt), t && e.jQuery === me && (e.jQuery = Vt), me }, t || (e.jQuery = e.$ = me), me
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function() {
    "use strict";

    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
    }
    var t = 0,
        n = {};
    e.prototype.queueTrigger = function(e) { this.group.queueTrigger(this, e) }, e.prototype.trigger = function(e) { this.enabled && this.callback && this.callback.apply(this, e) }, e.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete n[this.key] }, e.prototype.disable = function() { return this.enabled = !1, this }, e.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, e.prototype.next = function() { return this.group.next(this) }, e.prototype.previous = function() { return this.group.previous(this) }, e.invokeAll = function(e) { var t = []; for (var i in n) t.push(n[i]); for (var r = 0, o = t.length; o > r; r++) t[r][e]() }, e.destroyAll = function() { e.invokeAll("destroy") }, e.disableAll = function() { e.invokeAll("disable") }, e.enableAll = function() { e.Context.refreshAll(); for (var t in n) n[t].enabled = !0; return this }, e.refreshAll = function() { e.Context.refreshAll() }, e.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, e.viewportWidth = function() { return document.documentElement.clientWidth }, e.adapters = [], e.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, e.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = e
}(),
function() {
    "use strict";

    function e(e) { window.setTimeout(e, 1e3 / 60) }

    function t(e) { this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, r.windowContext || (r.windowContext = !0, r.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
    var n = 0,
        i = {},
        r = window.Waypoint,
        o = window.onload;
    t.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, t.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical),
            n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function() {
        function e() { t.handleResize(), t.didResize = !1 }
        var t = this;
        this.adapter.on("resize.waypoints", function() { t.didResize || (t.didResize = !0, r.requestAnimationFrame(e)) })
    }, t.prototype.createThrottledScrollHandler = function() {
        function e() { t.handleScroll(), t.didScroll = !1 }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            (!t.didScroll || r.isTouch) && (t.didScroll = !0, r.requestAnimationFrame(e))
        })
    }, t.prototype.handleResize = function() { r.Context.refreshAll() }, t.prototype.handleScroll = function() {
        var e = {},
            t = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
        for (var n in t) {
            var i = t[n],
                r = i.newScroll > i.oldScroll,
                o = r ? i.forward : i.backward;
            for (var s in this.waypoints[n]) {
                var a = this.waypoints[n][s];
                if (null !== a.triggerPoint) {
                    var l = i.oldScroll < a.triggerPoint,
                        c = i.newScroll >= a.triggerPoint,
                        u = l && c,
                        d = !l && !c;
                    (u || d) && (a.queueTrigger(o), e[a.group.id] = a.group)
                }
            }
        }
        for (var p in e) e[p].flushTriggers();
        this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll }
    }, t.prototype.innerHeight = function() { return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight() }, t.prototype.remove = function(e) { delete this.waypoints[e.axis][e.key], this.checkEmpty() }, t.prototype.innerWidth = function() { return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth() }, t.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, r = e.length; r > i; i++) e[i].destroy()
    }, t.prototype.refresh = function() {
        var e, t = this.element == this.element.window,
            n = t ? void 0 : this.adapter.offset(),
            i = {};
        this.handleScroll(), e = { horizontal: { contextOffset: t ? 0 : n.left, contextScroll: t ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: t ? 0 : n.top, contextScroll: t ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
        for (var o in e) {
            var s = e[o];
            for (var a in this.waypoints[o]) {
                var l, c, u, d, p, h = this.waypoints[o][a],
                    f = h.options.offset,
                    m = h.triggerPoint,
                    g = 0,
                    y = null == m;
                h.element !== h.element.window && (g = h.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, h.triggerPoint = Math.floor(g + l - f), c = m < s.oldScroll, u = h.triggerPoint >= s.oldScroll, d = c && u, p = !c && !u, !y && d ? (h.queueTrigger(s.backward), i[h.group.id] = h.group) : !y && p ? (h.queueTrigger(s.forward), i[h.group.id] = h.group) : y && s.oldScroll >= h.triggerPoint && (h.queueTrigger(s.forward), i[h.group.id] = h.group)
            }
        }
        return r.requestAnimationFrame(function() { for (var e in i) i[e].flushTriggers() }), this
    }, t.findOrCreateByElement = function(e) { return t.findByElement(e) || new t(e) }, t.refreshAll = function() { for (var e in i) i[e].refresh() }, t.findByElement = function(e) { return i[e.waypointContextKey] }, window.onload = function() { o && o(), t.refreshAll() }, r.requestAnimationFrame = function(t) {
        var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
        n.call(window, t)
    }, r.Context = t
}(),
function() {
    "use strict";

    function e(e, t) { return e.triggerPoint - t.triggerPoint }

    function t(e, t) { return t.triggerPoint - e.triggerPoint }

    function n(e) { this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this }
    var i = { vertical: {}, horizontal: {} },
        r = window.Waypoint;
    n.prototype.add = function(e) { this.waypoints.push(e) }, n.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n],
                r = "up" === n || "left" === n;
            i.sort(r ? t : e);
            for (var o = 0, s = i.length; s > o; o += 1) {
                var a = i[o];
                (a.options.continuous || o === i.length - 1) && a.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints),
            i = n === this.waypoints.length - 1;
        return i ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function(t) { this.waypoints.sort(e); var n = r.Adapter.inArray(t, this.waypoints); return n ? this.waypoints[n - 1] : null }, n.prototype.queueTrigger = function(e, t) { this.triggerQueues[t].push(e) }, n.prototype.remove = function(e) {
        var t = r.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }, n.prototype.first = function() { return this.waypoints[0] }, n.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, n.findOrCreate = function(e) { return i[e.axis][e.name] || new n(e) }, r.Group = n
}(),
function() {
    "use strict";

    function e(e) { return e === e.window }

    function t(t) { return e(t) ? t : t.defaultView }

    function n(e) { this.element = e, this.handlers = {} }
    var i = window.Waypoint;
    n.prototype.innerHeight = function() { var t = e(this.element); return t ? this.element.innerHeight : this.element.clientHeight }, n.prototype.innerWidth = function() { var t = e(this.element); return t ? this.element.innerWidth : this.element.clientWidth }, n.prototype.off = function(e, t) {
        function n(e, t, n) {
            for (var i = 0, r = t.length - 1; r > i; i++) {
                var o = t[i];
                n && n !== o || e.removeEventListener(o)
            }
        }
        var i = e.split("."),
            r = i[0],
            o = i[1],
            s = this.element;
        if (o && this.handlers[o] && r) n(s, this.handlers[o][r], t), this.handlers[o][r] = [];
        else if (r)
            for (var a in this.handlers) n(s, this.handlers[a][r] || [], t), this.handlers[a][r] = [];
        else if (o && this.handlers[o]) {
            for (var l in this.handlers[o]) n(s, this.handlers[o][l], t);
            this.handlers[o] = {}
        }
    }, n.prototype.offset = function() {
        if (!this.element.ownerDocument) return null;
        var e = this.element.ownerDocument.documentElement,
            n = t(this.element.ownerDocument),
            i = { top: 0, left: 0 };
        return this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect()), { top: i.top + n.pageYOffset - e.clientTop, left: i.left + n.pageXOffset - e.clientLeft }
    }, n.prototype.on = function(e, t) {
        var n = e.split("."),
            i = n[0],
            r = n[1] || "__default",
            o = this.handlers[r] = this.handlers[r] || {},
            s = o[i] = o[i] || [];
        s.push(t), this.element.addEventListener(i, t)
    }, n.prototype.outerHeight = function(t) { var n, i = this.innerHeight(); return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginTop, 10), i += parseInt(n.marginBottom, 10)), i }, n.prototype.outerWidth = function(t) { var n, i = this.innerWidth(); return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginLeft, 10), i += parseInt(n.marginRight, 10)), i }, n.prototype.scrollLeft = function() { var e = t(this.element); return e ? e.pageXOffset : this.element.scrollLeft }, n.prototype.scrollTop = function() { var e = t(this.element); return e ? e.pageYOffset : this.element.scrollTop }, n.extend = function() {
        function e(e, t) {
            if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)))
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        for (var t = Array.prototype.slice.call(arguments), n = 1, i = t.length; i > n; n++) e(t[0], t[n]);
        return t[0]
    }, n.inArray = function(e, t, n) { return null == t ? -1 : t.indexOf(e, n) }, n.isEmptyObject = function(e) { for (var t in e) return !1; return !0 }, i.adapters.push({ name: "noframework", Adapter: n }), i.Adapter = n
}(), ! function() {
    "use strict";

    function e(i) { this.options = t.extend({}, e.defaults, i), this.container = this.options.element, "auto" !== this.options.container && (this.container = this.options.container), this.$container = t(this.container), this.$more = t(this.options.more), this.$more.length && (this.setupHandler(), this.waypoint = new n(this.options)) }
    var t = window.jQuery,
        n = window.Waypoint;
    e.prototype.setupHandler = function() {
        this.options.handler = t.proxy(function() {
            this.options.onBeforePageLoad(), this.destroy(), this.$container.addClass(this.options.loadingClass), t.get(t(this.options.more).attr("href"), t.proxy(function(e) {
                var i = t(t.parseHTML(e)),
                    r = i.find(this.options.more),
                    o = i.find(this.options.items);
                o.length || (o = i.filter(this.options.items)), this.$container.append(o), this.$container.removeClass(this.options.loadingClass), r.length || (r = i.filter(this.options.more)), r.length ? (this.$more.replaceWith(r), this.$more = r, this.waypoint = new n(this.options)) : this.$more.remove(), this.options.onAfterPageLoad(o)
            }, this))
        }, this)
    }, e.prototype.destroy = function() { this.waypoint && this.waypoint.destroy() }, e.defaults = { container: "auto", items: ".infinite-item", more: ".infinite-more-link", offset: "bottom-in-view", loadingClass: "infinite-loading", onBeforePageLoad: t.noop, onAfterPageLoad: t.noop }, n.Infinite = e
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto) }(function(e) {
    var t, n, i, r, o, s, a = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        u = "BeforeAppend",
        d = "MarkupParse",
        p = "Open",
        h = "Change",
        f = "mfp",
        m = "." + f,
        g = "mfp-ready",
        y = "mfp-removing",
        v = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        x = e(window),
        T = function(e, n) { t.ev.on(f + e + m, n) },
        C = function(t, n, i, r) { var o = document.createElement("div"); return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o },
        _ = function(n, i) { t.ev.triggerHandler(f + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i])) },
        E = function(n) { return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn },
        S = function() { e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t) },
        A = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = A(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, a = n.items;
                for (r = 0; r < a.length; r++)
                    if (s = a[r], s.parsed && (s = s.el[0]), s === n.el[0]) { t.index = r; break }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], o = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = C("bg").on("click" + m, function() { t.close() }), t.wrap = C("wrap").attr("tabindex", -1).on("click" + m, function(e) { t._checkIfClose(e.target) && t.close() }), t.container = C("container", t.wrap)), t.contentContainer = C("content"), t.st.preloader && (t.preloader = C("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (r = 0; r < l.length; r++) {
                var c = l[r];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            _("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (T(d, function(e, t, n, i) { n.close_replaceWith = E(i.type) }), o += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: x.scrollTop(), position: "absolute" }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup" + m, function(e) { 27 === e.keyCode && t.close() }), x.on("resize" + m, function() { t.updateSize() }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
            var u = t.wH = x.height(),
                h = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var f = t._getScrollbarSize();
                f && (h.marginRight = f)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
            var y = t.st.mainClass;
            return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), _("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() { t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), i.on("focusin" + m, t._onFocusIn) }, 16), t.isOpen = !0, t.updateSize(u), _(p), n
        },
        close: function() { t.isOpen && (_(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() { t._close() }, t.st.removalDelay)) : t._close()) },
        _close: function() {
            _(a);
            var n = y + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var r = { marginRight: "" };
                t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
            }
            i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, _(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || x.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), _("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (_("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = !!t.st[i] && t.st[i].markup;
                _("FirstMarkupParse", o), o ? t.currTemplate[i] = e(o) : t.currTemplate[i] = !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i), n.preloaded = !0, _(h, n), r = n.type, t.container.prepend(t.contentContainer), _("AfterChange")
        },
        appendContent: function(e, n) { t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", _(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content) },
        parseEl: function(n) {
            var i, r = t.items[n];
            if (r.tagName ? r = { el: e(r) } : (i = r.type, r = { data: r, src: r.src }), r.el) {
                for (var o = t.types, s = 0; s < o.length; s++)
                    if (r.el.hasClass("mfp-" + o[s])) { i = o[s]; break }
                r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
            }
            return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, _("ElementParse", r), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) { i.mfpEl = this, t._openClick(i, e, n) };
            n || (n = {});
            var r = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i)))
        },
        _openClick: function(n, i, r) {
            var o = void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick;
            if (o || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var s = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) { if (!s.call(t)) return !0 } else if (x.width() < s) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var r = { status: e, text: i };
                _("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) { e.stopImmediatePropagation() }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(v)) {
                var i = t.st.closeOnContentClick,
                    r = t.st.closeOnBgClick;
                if (i && r) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) { if (i) return !0 } else if (r && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) { t.bgOverlay.addClass(e), t.wrap.addClass(e) },
        _removeClassFromMFP: function(e) { this.bgOverlay.removeClass(e), t.wrap.removeClass(e) },
        _hasScrollBar: function(e) { return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || x.height()) },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) { if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1 },
        _parseMarkup: function(t, n, i) {
            var r;
            i.data && (n = e.extend(i.data, n)), _(d, [t, n, i]), e.each(n, function(n, i) { if (void 0 === i || i === !1) return !0; if (r = n.split("_"), r.length > 1) { var o = t.find(m + "-" + r[0]); if (o.length > 0) { var s = r[1]; "replaceWith" === s ? o[0] !== i[0] && o.replaceWith(i) : "img" === s ? o.is("img") ? o.attr("src", i) : o.replaceWith(e("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(r[1], i) } } else t.find(m + "-" + n).html(i) })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function(t, n) { return S(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t) }, close: function() { return e.magnificPopup.instance && e.magnificPopup.instance.close() }, registerModule: function(t, n) { n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function(n) {
        S();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var r, o = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                o.items ? r = o.items[s] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), t._openClick({ mfpEl: r }, i, o)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var k, L, I, P = "inline",
        O = function() { I && (L.after(I.addClass(k)).detach(), I = null) };
    e.magnificPopup.registerModule(P, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function() { t.types.push(P), T(a + "." + P, function() { O() }) },
            getInline: function(n, i) {
                if (O(), n.src) {
                    var r = t.st.inline,
                        o = e(n.src);
                    if (o.length) {
                        var s = o[0].parentNode;
                        s && s.tagName && (L || (k = r.hiddenClass, L = C(k), k = "mfp-" + k), I = o.after(L).detach().removeClass(k)), t.updateStatus("ready")
                    } else t.updateStatus("error", r.tNotFound), o = e("<div>");
                    return n.inlineElement = o, o
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var N, D = "ajax",
        j = function() { N && e(document.body).removeClass(N) },
        R = function() { j(), t.req && t.req.abort() };
    e.magnificPopup.registerModule(D, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function() { t.types.push(D), N = t.st.ajax.cursor, T(a + "." + D, R), T("BeforeChange." + D, R) },
            getAjax: function(n) {
                N && e(document.body).addClass(N), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(i, r, o) {
                        var s = { data: i, xhr: o };
                        _("ParseAjax", s), t.appendContent(e(s.data), D), n.finished = !0, j(), t._setFocus(), setTimeout(function() { t.wrap.addClass(g) }, 16), t.updateStatus("ready"), _("AjaxContentAdded")
                    },
                    error: function() { j(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src)) }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), ""
            }
        }
    });
    var M, $ = function(n) { if (n.data && void 0 !== n.data.title) return n.data.title; var i = t.st.image.titleSrc; if (i) { if (e.isFunction(i)) return i.call(t, n); if (n.el) return n.el.attr(i) || "" } return "" };
    e.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"), T(p + i, function() { "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor) }), T(a + i, function() { n.cursor && e(document.body).removeClass(n.cursor), x.off("resize" + m) }), T("Resize" + i, t.resizeImage), t.isLowIE && T("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) { e.img && (e.hasSize = !0, M && clearInterval(M), e.isCheckingImgSize = !1, _("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1)) },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    r = function o(r) { M && clearInterval(M), M = setInterval(function() { return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(M), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))) }, r) };
                r(1)
            },
            getImage: function(n, i) {
                var r = 0,
                    o = function u() { n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, _("ImageLoadComplete")) : (r++, r < 200 ? setTimeout(u, 100) : s())) },
                    s = function() { n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0) },
                    a = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", o).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, { title: $(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (M && clearInterval(M), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var F, B = function() { return void 0 === F && (F = void 0 !== document.createElement("p").style.MozTransform), F };
    e.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(e) { return e.is("img") ? e : e.find("img") } },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var r, o, s = n.duration,
                        c = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                r = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                o = "transition";
                            return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t
                        },
                        u = function() { t.content.css("visibility", "visible") };
                    T("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(r), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            o = c(e), o.css(t._getOffset()), t.wrap.append(o), r = setTimeout(function() { o.css(t._getOffset(!0)), r = setTimeout(function() { u(), setTimeout(function() { o.remove(), e = o = null, _("ZoomAnimationEnded") }, 16) }, s) }, 16)
                        }
                    }), T(l + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(r), t.st.removalDelay = s, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                o = c(e)
                            }
                            o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() { o.css(t._getOffset()) }, 16)
                        }
                    }), T(a + i, function() { t._allowZoom() && (u(), o && o.remove(), e = null) })
                }
            },
            _allowZoom: function() { return "image" === t.currItem.type },
            _getItemToZoom: function() { return !!t.currItem.hasSize && t.currItem.img },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var r = i.offset(),
                    o = parseInt(i.css("padding-top"), 10),
                    s = parseInt(i.css("padding-bottom"), 10);
                r.top -= e(window).scrollTop() - o;
                var a = { width: i.width(), height: (b ? i.innerHeight() : i[0].offsetHeight) - s - o };
                return B() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
            }
        }
    });
    var H = "iframe",
        z = "//about:blank",
        q = function(e) {
            if (t.currTemplate[H]) {
                var n = t.currTemplate[H].find("iframe");
                n.length && (e || (n[0].src = z), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(H, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
            initIframe: function() { t.types.push(H), T("BeforeChange", function(e, t, n) { t !== n && (t === H ? q() : n === H && q(!0)) }), T(a + "." + H, function() { q() }) },
            getIframe: function(n, i) {
                var r = n.src,
                    o = t.st.iframe;
                e.each(o.patterns, function() { if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1 });
                var s = {};
                return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
            }
        }
    });
    var W = function(e) { var n = t.items.length; return e > n - 1 ? e - n : e < 0 ? n + e : e },
        U = function(e, t, n) { return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n) };
    e.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    r = ".mfp-gallery";
                return t.direction = !0, !(!n || !n.enabled) && (o += " mfp-gallery", T(p + r, function() { n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() { if (t.items.length > 1) return t.next(), !1 }), i.on("keydown" + r, function(e) { 37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next() }) }), T("UpdateStatus" + r, function(e, n) { n.text && (n.text = U(n.text, t.currItem.index, t.items.length)) }), T(d + r, function(e, i, r, o) {
                    var s = t.items.length;
                    r.counter = s > 1 ? U(n.tCounter, o.index, s) : "";
                }), T("BuildControls" + r, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(v),
                            o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(v);
                        r.click(function() { t.prev() }), o.click(function() { t.next() }), t.container.append(r.add(o))
                    }
                }), T(h + r, function() { t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() { t.preloadNearbyImages(), t._preloadTimeout = null }, 16) }), void T(a + r, function() { i.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null }))
            },
            next: function() { t.direction = !0, t.index = W(t.index + 1), t.updateItemHTML() },
            prev: function() { t.direction = !1, t.index = W(t.index - 1), t.updateItemHTML() },
            goTo: function(e) { t.direction = e >= t.index, t.index = e, t.updateItemHTML() },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    r = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = W(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), _("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() { i.hasSize = !0 }).on("error.mfploader", function() { i.hasSize = !0, i.loadError = !0, _("LazyLoadError", i) }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var G = "retina";
    e.magnificPopup.registerModule(G, {
        options: { replaceSrc: function(e) { return e.src.replace(/\.\w+$/, function(e) { return "@2x" + e }) }, ratio: 1 },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (T("ImageHasSize." + G, function(e, t) { t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" }) }), T("ElementParse." + G, function(t, i) { i.src = e.replaceSrc(i, n) }))
                }
            }
        }
    }), S()
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e, t, n, i) {
    function r(t, n) { this.settings = null, this.options = e.extend({}, r.Defaults, n), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, n) { this._handlers[n] = e.proxy(this[n], this) }, this)), e.each(r.Plugins, e.proxy(function(e, t) { this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this) }, this)), e.each(r.Workers, e.proxy(function(t, n) { this._pipe.push({ filter: n.filter, run: e.proxy(n.run, this) }) }, this)), this.setup(), this.initialize() } r.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: t, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, r.Width = { Default: "default", Inner: "inner", Outer: "outer" }, r.Type = { Event: "event", State: "state" }, r.Plugins = {}, r.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(e) { e.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = { width: "auto", "margin-left": i ? t : "", "margin-right": i ? "" : t };
            !n && this.$stage.children().css(r), e.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                r = !this.settings.autoWidth,
                o = [];
            for (e.items = { merge: !1, width: t }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = n > 1 || e.items.merge, o[i] = r ? t * n : this._items[i].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                n = this._items,
                i = this.settings,
                r = Math.max(2 * i.items, 4),
                o = 2 * Math.ceil(n.length / 2),
                s = i.loop && n.length ? i.rewind ? r : Math.max(r, o) : 0,
                a = "",
                l = "";
            for (s /= 2; s--;) t.push(this.normalize(t.length / 2, !0)), a += n[t[t.length - 1]][0].outerHTML, t.push(this.normalize(n.length - 1 - (t.length - 1) / 2, !0)), l = n[t[t.length - 1]][0].outerHTML + l;
            this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < t;) i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * e);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                n = { width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e, "padding-left": e || "", "padding-right": e || "" };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, i.css(e.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(e) { e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var e, t, n, i, r = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + o,
                a = s + this.width() * r,
                l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + o * r, (this.op(e, "<=", s) && this.op(e, ">", a) || this.op(t, "<", s) && this.op(t, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], r.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, n, r;
            t = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, r = this.$element.children(n).width(), t.length && 0 >= r && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.setup = function() {
        var t = this.viewport(),
            n = this.options.responsive,
            i = -1,
            r = null;
        n ? (e.each(n, function(e) { t >= e && e > i && (i = Number(e)) }), r = e.extend({}, this.options, n[i]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = e.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: r } }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
    }, r.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, r.prototype.prepare = function(t) { var n = this.trigger("prepare", { content: t }); return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", { content: n.data }), n.data }, r.prototype.update = function() {
        for (var t = 0, n = this._pipe.length, i = e.proxy(function(e) { return this[e] }, this._invalidated), r = {}; n > t;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(r), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function(e) {
        switch (e = e || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, r.prototype.onThrottledResize = function() { t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, r.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, r.prototype.registerEventHandlers = function() { e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this))) }, r.prototype.onDragStart = function(t) {
        var i = null;
        3 !== t.which && (e.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = { x: i[16 === i.length ? 12 : 4], y: i[16 === i.length ? 13 : 5] }) : (i = this.$stage.position(), i = { x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left, y: i.top }), this.is("animating") && (e.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), e(n).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(n).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
            var i = this.difference(this._drag.pointer, this.pointer(t));
            e(n).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, r.prototype.onDragMove = function(e) {
        var t = null,
            n = null,
            i = null,
            r = this.difference(this._drag.pointer, this.pointer(e)),
            o = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, o.x = ((o.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, t + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
    }, r.prototype.onDragEnd = function(t) {
        var i = this.difference(this._drag.pointer, this.pointer(t)),
            r = this._drag.stage.current,
            o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function(t, n) {
        var i = -1,
            r = 30,
            o = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || e.each(s, e.proxy(function(e, a) { return "left" === n && t > a - r && a + r > t ? i = e : "right" === n && t > a - o - r && a - o + r > t ? i = e + 1 : this.op(t, "<", a) && this.op(t, ">", s[e + 1] || a - o) && (i = "left" === n ? e + 1 : e), -1 === i }, this)), this.settings.loop || (this.op(t, ">", s[this.minimum()]) ? i = t = this.minimum() : this.op(t, "<", s[this.maximum()]) && (i = t = this.maximum())), i
    }, r.prototype.animate = function(t) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : n ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: t + "px" })
    }, r.prototype.is = function(e) { return this._states.current[e] && this._states.current[e] > 0 }, r.prototype.current = function(e) {
        if (e === i) return this._current;
        if (0 === this._items.length) return i;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", { property: { name: "position", value: e } });
            t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, r.prototype.invalidate = function(t) { return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) { return t }) }, r.prototype.reset = function(e) { e = this.normalize(e), e !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"])) }, r.prototype.normalize = function(e, t) {
        var n = this._items.length,
            r = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || 1 > n ? e = i : (0 > e || e >= n + r) && (e = ((e - r / 2) % n + n) % n + r / 2), e
    }, r.prototype.relative = function(e) { return e -= this._clones.length / 2, this.normalize(e, !0) }, r.prototype.maximum = function(e) {
        var t, n, i, r = this.settings,
            o = this._coordinates.length;
        if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            for (t = this._items.length, n = this._items[--t].width(), i = this.$element.width(); t-- && (n += this._items[t].width() + this.settings.margin, !(n > i)););
            o = t + 1
        } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
        return e && (o -= this._clones.length / 2), Math.max(o, 0)
    }, r.prototype.minimum = function(e) { return e ? 0 : this._clones.length / 2 }, r.prototype.items = function(e) { return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e]) }, r.prototype.mergers = function(e) { return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e]) }, r.prototype.clones = function(t) {
        var n = this._clones.length / 2,
            r = n + this._items.length,
            o = function(e) { return e % 2 === 0 ? r + e / 2 : n - (e + 1) / 2 };
        return t === i ? e.map(this._clones, function(e, t) { return o(t) }) : e.map(this._clones, function(e, n) { return e === t ? o(n) : null })
    }, r.prototype.speed = function(e) { return e !== i && (this._speed = e), this._speed }, r.prototype.coordinates = function(t) {
        var n, r = 1,
            o = t - 1;
        return t === i ? e.map(this._coordinates, e.proxy(function(e, t) { return this.coordinates(t) }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = t + 1), n = this._coordinates[t], n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * r) : n = this._coordinates[o] || 0, n = Math.ceil(n))
    }, r.prototype.duration = function(e, t, n) { return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed) }, r.prototype.to = function(e, t) {
        var n = this.current(),
            i = null,
            r = e - this.relative(n),
            o = (r > 0) - (0 > r),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), e = n + r, i = ((e - a) % s + s) % s + a, i !== e && l >= i - r && i - r > 0 && (n = i - r, e = i, this.reset(n))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.$element.is(":visible") && this.update()
    }, r.prototype.next = function(e) { e = e || !1, this.to(this.relative(this.current()) + 1, e) }, r.prototype.prev = function(e) { e = e || !1, this.to(this.relative(this.current()) - 1, e) }, r.prototype.onTransitionEnd = function(e) { return (e === i || (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated")) }, r.prototype.viewport = function() {
        var i;
        if (this.options.responsiveBaseElement !== t) i = e(this.options.responsiveBaseElement).width();
        else if (t.innerWidth) i = t.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, r.prototype.replace = function(t) { this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() { return 1 === this.nodeType }).each(e.proxy(function(e, t) { t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, r.prototype.add = function(t, n) {
        var r = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", { content: t, position: n }), t = this.prepare(t), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[n - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(t), this._items.splice(n, 0, t), this._mergers.splice(n, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", { content: t, position: n })
    }, r.prototype.remove = function(e) { e = this.normalize(e, !0), e !== i && (this.trigger("remove", { content: this._items[e], position: e }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: e })) }, r.prototype.preloadAutoWidthImages = function(t) { t.each(e.proxy(function(t, n) { this.enter("pre-loading"), n = e(n), e(new Image).one("load", e.proxy(function(e) { n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")) }, this)) }, r.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(n).off(".owl.core"), this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? e > n : n > e;
            case ">":
                return i ? n > e : e > n;
            case ">=":
                return i ? n >= e : e >= n;
            case "<=":
                return i ? e >= n : n >= e
        }
    }, r.prototype.on = function(e, t, n, i) { e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n) }, r.prototype.off = function(e, t, n, i) { e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n) }, r.prototype.trigger = function(t, n, i, o, s) {
        var a = { item: { count: this._items.length, index: this.current() } },
            l = e.camelCase(e.grep(["on", t, i], function(e) { return e }).join("-").toLowerCase()),
            c = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({ relatedTarget: this }, a, n));
        return this._supress[t] || (e.each(this._plugins, function(e, t) { t.onTrigger && t.onTrigger(c) }), this.register({ type: r.Type.Event, name: t }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, r.prototype.enter = function(t) { e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) { this._states.current[t] === i && (this._states.current[t] = 0), this._states.current[t]++ }, this)) }, r.prototype.leave = function(t) { e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) { this._states.current[t]-- }, this)) }, r.prototype.register = function(t) {
        if (t.type === r.Type.Event) {
            if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                var n = e.event.special[t.name]._default;
                e.event.special[t.name]._default = function(e) { return !n || !n.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments) }, e.event.special[t.name].owl = !0
            }
        } else t.type === r.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(n, i) { return e.inArray(n, this._states.tags[t.name]) === i }, this)))
    }, r.prototype.suppress = function(t) { e.each(t, e.proxy(function(e, t) { this._supress[t] = !0 }, this)) }, r.prototype.release = function(t) { e.each(t, e.proxy(function(e, t) { delete this._supress[t] }, this)) }, r.prototype.pointer = function(e) { var n = { x: null, y: null }; return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (n.x = e.pageX, n.y = e.pageY) : (n.x = e.clientX, n.y = e.clientY), n }, r.prototype.isNumeric = function(e) { return !isNaN(parseFloat(e)) }, r.prototype.difference = function(e, t) { return { x: e.x - t.x, y: e.y - t.y } }, e.fn.owlCarousel = function(t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var i = e(this),
                o = i.data("owl.carousel");
            o || (o = new r(this, "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), i.data("owl.carousel", o), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, n) { o.register({ type: r.Type.Event, name: n }), o.$element.on(n + ".owl.carousel.core", e.proxy(function(e) { e.namespace && e.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n])) }, o)) })), "string" == typeof t && "_" !== t.charAt(0) && o[t].apply(o, n)
        })
    }, e.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function o(t) { this._core = t, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    r.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, r.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, r.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, r.prototype.destroy = function() {
        var e, n;
        t.clearInterval(this._interval);
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function o(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var n = this._core.settings, r = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * r || 0, s = (t.property && t.property.value !== i ? t.property.value : this._core.current()) + o, a = this._core.clones().length, l = e.proxy(function(e, t) { this.load(t) }, this); o++ < r;) this.load(a / 2 + this._core.relative(s)), a && e.each(this._core.clones(this._core.relative(s)), l), s++
            }, this)
        }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = { lazyLoad: !1 }, r.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            r = i && i.find(".owl-lazy");
        !r || e.inArray(i.get(0), this._loaded) > -1 || (r.each(e.proxy(function(n, i) {
            var r, o = e(i),
                s = t.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", { element: o, url: s }, "lazy"), o.is("img") ? o.one("load.owl.lazy", e.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: s }, "lazy") }, this)).attr("src", s) : (r = new Image, r.onload = e.proxy(function() { o.css({ "background-image": "url(" + s + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: s }, "lazy") }, this), r.src = s)
        }, this)), this._loaded.push(i.get(0)))
    }, r.prototype.destroy = function() { var e, t; for (e in this.handlers) this._core.$element.off(e, this.handlers[e]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) }, e.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function o(t) { this._core = t, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update() }, this), "loaded.owl.lazy": e.proxy(function(e) { e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    r.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, r.prototype.update = function() {
        var t = this._core._current,
            n = t + this._core.settings.items,
            i = this._core.$stage.children().toArray().slice(t, n),
            r = [],
            o = 0;
        e.each(i, function(t, n) { r.push(e(n).height()) }), o = Math.max.apply(null, r), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function() { var e, t; for (e in this._handlers) this._core.$element.off(e, this._handlers[e]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function o(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(e) { e.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault() }, this),
            "refreshed.owl.carousel": e.proxy(function(e) { e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": e.proxy(function(e) { e.namespace && "position" === e.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": e.proxy(function(t) {
                if (t.namespace) {
                    var n = e(t.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
                }
            }, this)
        }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) { this.play(e) }, this))
    };
    r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, r.prototype.fetch = function(e, t) {
        var n = function() { return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            r = e.attr("data-width") || this._core.settings.videoWidth,
            o = e.attr("data-height") || this._core.settings.videoHeight,
            s = e.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = { type: n, id: i, width: r, height: o }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
    }, r.prototype.thumbnail = function(t, n) {
        var i, r, o, s = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            a = t.find("img"),
            l = "src",
            c = "",
            u = this._core.settings,
            d = function(e) { r = '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(i), t.after(r) };
        return t.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", d(o)) : "vimeo" === n.type ? e.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(e) { o = e[0].thumbnail_large, d(o) } }) : "vzaar" === n.type && e.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(e) { o = e.framegrab_url, d(o) } }))
    }, r.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, r.prototype.play = function(t) {
        var n, i = e(t.target),
            r = i.closest("." + this._core.settings.itemClass),
            o = this._videos[r.attr("data-video")],
            s = o.width || "100%",
            a = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === o.type ? n = '<iframe width="' + s + '" height="' + a + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? n = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + s + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (n = '<iframe frameborder="0"height="' + a + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + n + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function() {
        var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return t && e(t).parent().hasClass("owl-video-frame");
    }, r.prototype.destroy = function() {
        var e, t;
        this._core.$element.off("click.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function o(t) { this.core = t, this.core.options = e.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = { "change.owl.carousel": e.proxy(function(e) { e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) { e.namespace && (this.swapping = "translated" == e.type) }, this), "translate.owl.carousel": e.proxy(function(e) { e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    r.Defaults = { animateOut: !1, animateIn: !1 }, r.prototype.swap = function() {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var t, n = e.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(e.support.animation.end, n).css({ left: t + "px" }).addClass("animated owl-animated-out").addClass(s)), o && r.one(e.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
        }
    }, r.prototype.clear = function(t) { e(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, r.prototype.destroy = function() { var e, t; for (e in this.handlers) this.core.$element.off(e, this.handlers[e]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function o(t) { this._core = t, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": e.proxy(function(e) { e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": e.proxy(function(e, t, n) { e.namespace && this.play(t, n) }, this), "stop.owl.autoplay": e.proxy(function(e) { e.namespace && this.stop() }, this), "mouseover.owl.autoplay": e.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": e.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": e.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": e.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, o.Defaults, this._core.options) };
    r.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, r.prototype.play = function(e, t) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, r.prototype._getNextTimeout = function(i, r) { return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(e.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(r || this._core.settings.autoplaySpeed) }, this), i || this._core.settings.autoplayTimeout) }, r.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, r.prototype.stop = function() { this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating")) }, r.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, r.prototype.destroy = function() {
        var e, t;
        this.stop();
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    var r = function o(t) { this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": e.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": e.proxy(function(e) { e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1) }, this), "changed.owl.carousel": e.proxy(function(e) { e.namespace && "position" == e.property.name && this.draw() }, this), "initialized.owl.carousel": e.proxy(function(e) { e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": e.proxy(function(e) { e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = e.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers) };
    r.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, r.prototype.initialize = function() {
        var t, n = this._core.settings;
        this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) { this.prev(n.navSpeed) }, this)), this._controls.$next = e("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) { this.next(n.navSpeed) }, this)), n.dotsData || (this._templates = [e("<div>").addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function(t) {
            var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
            t.preventDefault(), this.to(i, n.dotsSpeed)
        }, this));
        for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
    }, r.prototype.destroy = function() { var e, t, n, i; for (e in this._handlers) this.$element.off(e, this._handlers[e]); for (t in this._controls) this._controls[t].remove(); for (i in this.overides) this._core[i] = this._overrides[i]; for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, r.prototype.update = function() {
        var e, t, n, i = this._core.clones().length / 2,
            r = i + this._core.items().length,
            o = this._core.maximum(!0),
            s = this._core.settings,
            a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], e = i, t = 0, n = 0; r > e; e++) {
                if (t >= a || 0 === t) {
                    if (this._pages.push({ start: Math.min(o, e - i), end: e - i + a - 1 }), Math.min(o, e - i) === o) break;
                    t = 0, ++n
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, r.prototype.draw = function() {
        var t, n = this._core.settings,
            i = this._core.items().length <= n.items,
            r = this._core.relative(this._core.current()),
            o = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (t = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : 0 > t && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function(t) {
        var n = this._core.settings;
        t.page = { index: e.inArray(this.current(), this._pages), count: this._pages.length, size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items) }
    }, r.prototype.current = function() { var t = this._core.relative(this._core.current()); return e.grep(this._pages, e.proxy(function(e, n) { return e.start <= t && e.end >= t }, this)).pop() }, r.prototype.getPosition = function(t) { var n, i, r = this._core.settings; return "page" == r.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += r.slideBy : n -= r.slideBy), n }, r.prototype.next = function(t) { e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t) }, r.prototype.prev = function(t) { e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t) }, r.prototype.to = function(t, n, i) { var r;!i && this._pages.length ? (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, n)) : e.proxy(this._overrides.to, this._core)(t, n) }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    var r = function o(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(n) { n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": e.proxy(function(t) {
                if (t.namespace) {
                    var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = t.content
                }
            }, this),
            "changed.owl.carousel": e.proxy(function(n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        r = e.map(this._hashes, function(e, t) { return e === i ? t : null }).join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r
                }
            }, this)
        }, this._core.options = e.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
            var n = t.location.hash.substring(1),
                r = this._core.$stage.children(),
                o = this._hashes[n] && r.index(this._hashes[n]);
            o !== i && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    r.Defaults = { URLhashListener: !1 }, r.prototype.destroy = function() {
        var n, i;
        e(t).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    function r(t, n) {
        var r = !1,
            o = t.charAt(0).toUpperCase() + t.slice(1);
        return e.each((t + " " + a.join(o + " ") + o).split(" "), function(e, t) { return s[t] !== i ? (r = !n || t, !1) : void 0 }), r
    }

    function o(e) { return r(e, !0) }
    var s = e("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        c = { csstransforms: function() { return !!r("transform") }, csstransforms3d: function() { return !!r("perspective") }, csstransitions: function() { return !!r("transition") }, cssanimations: function() { return !!r("animation") } };
    c.csstransitions() && (e.support.transition = new String(o("transition")), e.support.transition.end = l.transition.end[e.support.transition]), c.cssanimations() && (e.support.animation = new String(o("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c.csstransforms() && (e.support.transform = new String(o("transform")), e.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function() {
    function e(e) {
        if ("undefined" == typeof e) throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (e.constructor === String && (e = document.getElementById(e), !e)) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(e instanceof window.SVGElement || e instanceof window.SVGGElement || /^svg$/i.test(e.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = e, this.scan(e)
    }

    function t(e, t, i) { n(), this.isReady = !1, this.setElement(e, t), this.setOptions(t), this.setCallback(i), this.isReady && this.init() } e.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], e.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], e.prototype.scan = function(e) { for (var t, n, i, r, o = e.querySelectorAll(this.TYPES.join(",")), s = 0; s < o.length; s++) n = o[s], t = this[n.tagName.toLowerCase() + "ToPath"], i = t(this.parseAttr(n.attributes)), r = this.pathMaker(n, i), n.parentNode.replaceChild(r, n) }, e.prototype.lineToPath = function(e) {
        var t = {},
            n = e.x1 || 0,
            i = e.y1 || 0,
            r = e.x2 || 0,
            o = e.y2 || 0;
        return t.d = "M" + n + "," + i + "L" + r + "," + o, t
    }, e.prototype.rectToPath = function(e) {
        var t = {},
            n = parseFloat(e.x) || 0,
            i = parseFloat(e.y) || 0,
            r = parseFloat(e.width) || 0,
            o = parseFloat(e.height) || 0;
        return t.d = "M" + n + " " + i + " ", t.d += "L" + (n + r) + " " + i + " ", t.d += "L" + (n + r) + " " + (i + o) + " ", t.d += "L" + n + " " + (i + o) + " Z", t
    }, e.prototype.polylineToPath = function(e) {
        var t, n, i = {},
            r = e.points.trim().split(" ");
        if (-1 === e.points.indexOf(",")) {
            var o = [];
            for (t = 0; t < r.length; t += 2) o.push(r[t] + "," + r[t + 1]);
            r = o
        }
        for (n = "M" + r[0], t = 1; t < r.length; t++) - 1 !== r[t].indexOf(",") && (n += "L" + r[t]);
        return i.d = n, i
    }, e.prototype.polygonToPath = function(t) { var n = e.prototype.polylineToPath(t); return n.d += "Z", n }, e.prototype.ellipseToPath = function(e) {
        var t = {},
            n = parseFloat(e.rx) || 0,
            i = parseFloat(e.ry) || 0,
            r = parseFloat(e.cx) || 0,
            o = parseFloat(e.cy) || 0,
            s = r - n,
            a = o,
            l = parseFloat(r) + parseFloat(n),
            c = o;
        return t.d = "M" + s + "," + a + "A" + n + "," + i + " 0,1,1 " + l + "," + c + "A" + n + "," + i + " 0,1,1 " + s + "," + c, t
    }, e.prototype.circleToPath = function(e) {
        var t = {},
            n = parseFloat(e.r) || 0,
            i = parseFloat(e.cx) || 0,
            r = parseFloat(e.cy) || 0,
            o = i - n,
            s = r,
            a = parseFloat(i) + parseFloat(n),
            l = r;
        return t.d = "M" + o + "," + s + "A" + n + "," + n + " 0,1,1 " + a + "," + l + "A" + n + "," + n + " 0,1,1 " + o + "," + l, t
    }, e.prototype.pathMaker = function(e, t) { var n, i, r = document.createElementNS("http://www.w3.org/2000/svg", "path"); for (n = 0; n < e.attributes.length; n++) i = e.attributes[n], -1 === this.ATTR_WATCH.indexOf(i.name) && r.setAttribute(i.name, i.value); for (n in t) r.setAttribute(n, t[n]); return r }, e.prototype.parseAttr = function(e) {
        for (var t, n = {}, i = 0; i < e.length; i++) {
            if (t = e[i], -1 !== this.ATTR_WATCH.indexOf(t.name) && -1 !== t.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
            n[t.name] = t.value
        }
        return n
    };
    var n, i, r, o;
    t.LINEAR = function(e) { return e }, t.EASE = function(e) { return -Math.cos(e * Math.PI) / 2 + .5 }, t.EASE_OUT = function(e) { return 1 - Math.pow(1 - e, 3) }, t.EASE_IN = function(e) { return Math.pow(e, 3) }, t.EASE_OUT_BOUNCE = function(e) {
        var t = -Math.cos(.5 * e * Math.PI) + 1,
            n = Math.pow(t, 1.5),
            i = Math.pow(1 - e, 2),
            r = -Math.abs(Math.cos(2.5 * n * Math.PI)) + 1;
        return 1 - i + r * i
    }, t.prototype.setElement = function(e, t) {
        if ("undefined" == typeof e) throw new Error('Vivus [constructor]: "element" parameter is required');
        if (e.constructor === String && (e = document.getElementById(e), !e)) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
        if (this.parentEl = e, t && t.file) {
            var n = document.createElement("object");
            n.setAttribute("type", "image/svg+xml"), n.setAttribute("data", t.file), n.setAttribute("built-by-vivus", "true"), e.appendChild(n), e = n
        }
        switch (e.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
            case window.SVGGElement:
                this.el = e, this.isReady = !0;
                break;
            case window.HTMLObjectElement:
                var i, r;
                r = this, i = function(t) { if (!r.isReady) { if (r.el = e.contentDocument && e.contentDocument.querySelector("svg"), !r.el && t) throw new Error("Vivus [constructor]: object loaded does not contain any SVG"); return r.el ? (e.getAttribute("built-by-vivus") && (r.parentEl.insertBefore(r.el, e), r.parentEl.removeChild(e), r.el.setAttribute("width", "100%"), r.el.setAttribute("height", "100%")), r.isReady = !0, r.init(), !0) : void 0 } }, i() || e.addEventListener("load", i);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    }, t.prototype.setOptions = function(e) {
        var n = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
            i = ["inViewport", "manual", "autostart"];
        if (void 0 !== e && e.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
        if (e = e || {}, e.type && -1 === n.indexOf(e.type)) throw new Error("Vivus [constructor]: " + e.type + " is not an existing animation `type`");
        if (this.type = e.type || n[0], e.start && -1 === i.indexOf(e.start)) throw new Error("Vivus [constructor]: " + e.start + " is not an existing `start` option");
        if (this.start = e.start || i[0], this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/"), this.duration = o(e.duration, 120), this.delay = o(e.delay, null), this.dashGap = o(e.dashGap, 1), this.forceRender = e.hasOwnProperty("forceRender") ? !!e.forceRender : this.isIE, this.reverseStack = !!e.reverseStack, this.selfDestroy = !!e.selfDestroy, this.onReady = e.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!e.hasOwnProperty("ignoreInvisible") && !!e.ignoreInvisible, this.animTimingFunction = e.animTimingFunction || t.LINEAR, this.pathTimingFunction = e.pathTimingFunction || t.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration")
    }, t.prototype.setCallback = function(e) {
        if (e && e.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = e || function() {}
    }, t.prototype.mapping = function() {
        var e, t, n, i, r, s, a, l;
        for (l = s = a = 0, t = this.el.querySelectorAll("path"), e = 0; e < t.length; e++) n = t[e], this.isInvisible(n) || (r = { el: n, length: Math.ceil(n.getTotalLength()) }, isNaN(r.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", n) : (this.map.push(r), n.style.strokeDasharray = r.length + " " + (r.length + 2 * this.dashGap), n.style.strokeDashoffset = r.length + this.dashGap, r.length += this.dashGap, s += r.length, this.renderPath(e)));
        for (s = 0 === s ? 1 : s, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (t.length > 1 ? t.length - 1 : 1), this.reverseStack && this.map.reverse(), e = 0; e < this.map.length; e++) {
            switch (r = this.map[e], this.type) {
                case "delayed":
                    r.startAt = this.delayUnit * e, r.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    r.startAt = a / s * this.duration, r.duration = r.length / s * this.duration;
                    break;
                case "sync":
                case "async":
                case "nsync":
                    r.startAt = 0, r.duration = this.duration;
                    break;
                case "scenario-sync":
                    n = r.el, i = this.parseAttr(n), r.startAt = l + (o(i["data-delay"], this.delayUnit) || 0), r.duration = o(i["data-duration"], this.duration), l = void 0 !== i["data-async"] ? r.startAt : r.startAt + r.duration, this.frameLength = Math.max(this.frameLength, r.startAt + r.duration);
                    break;
                case "scenario":
                    n = r.el, i = this.parseAttr(n), r.startAt = o(i["data-start"], this.delayUnit) || 0, r.duration = o(i["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, r.startAt + r.duration)
            }
            a += r.length, this.frameLength = this.frameLength || this.duration
        }
    }, t.prototype.drawer = function() {
        var e = this;
        if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();
        else {
            if (!(this.currentFrame >= this.frameLength)) return this.trace(), void(this.handle = i(function() { e.drawer() }));
            this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy()
        }
        this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null)
    }, t.prototype.trace = function() { var e, t, n, i; for (i = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, e = 0; e < this.map.length; e++) n = this.map[e], t = (i - n.startAt) / n.duration, t = this.pathTimingFunction(Math.max(0, Math.min(1, t))), n.progress !== t && (n.progress = t, n.el.style.strokeDashoffset = Math.floor(n.length * (1 - t)), this.renderPath(e)) }, t.prototype.renderPath = function(e) {
        if (this.forceRender && this.map && this.map[e]) {
            var t = this.map[e],
                n = t.el.cloneNode(!0);
            t.el.parentNode.replaceChild(n, t.el), t.el = n
        }
    }, t.prototype.init = function() { this.frameLength = 0, this.currentFrame = 0, this.map = [], new e(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this) }, t.prototype.starter = function() {
        switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var e = this,
                    t = function n() { e.isInViewport(e.parentEl, 1) && (e.play(), window.removeEventListener("scroll", n)) };
                window.addEventListener("scroll", t), t()
        }
    }, t.prototype.getStatus = function() { return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress" }, t.prototype.reset = function() { return this.setFrameProgress(0) }, t.prototype.finish = function() { return this.setFrameProgress(1) }, t.prototype.setFrameProgress = function(e) { return e = Math.min(1, Math.max(0, e)), this.currentFrame = Math.round(this.frameLength * e), this.trace(), this }, t.prototype.play = function(e, t) {
        if (this.instanceCallback = null, e && "function" == typeof e) this.instanceCallback = e, e = null;
        else if (e && "number" != typeof e) throw new Error("Vivus [play]: invalid speed");
        return t && "function" == typeof t && !this.instanceCallback && (this.instanceCallback = t), this.speed = e || 1, this.handle || this.drawer(), this
    }, t.prototype.stop = function() { return this.handle && (r(this.handle), this.handle = null), this }, t.prototype.destroy = function() { this.stop(); var e, t; for (e = 0; e < this.map.length; e++) t = this.map[e], t.el.style.strokeDashoffset = null, t.el.style.strokeDasharray = null, this.renderPath(e) }, t.prototype.isInvisible = function(e) { var t, n = e.getAttribute("data-ignore"); return null !== n ? "false" !== n : !!this.ignoreInvisible && (t = e.getBoundingClientRect(), !t.width && !t.height) }, t.prototype.parseAttr = function(e) {
        var t, n = {};
        if (e && e.attributes)
            for (var i = 0; i < e.attributes.length; i++) t = e.attributes[i], n[t.name] = t.value;
        return n
    }, t.prototype.isInViewport = function(e, t) {
        var n = this.scrollY(),
            i = n + this.getViewportH(),
            r = e.getBoundingClientRect(),
            o = r.height,
            s = n + r.top,
            a = s + o;
        return t = t || 0, i >= s + o * t && a >= n
    }, t.prototype.getViewportH = function() {
        var e = this.docElem.clientHeight,
            t = window.innerHeight;
        return t > e ? t : e
    }, t.prototype.scrollY = function() { return window.pageYOffset || this.docElem.scrollTop }, n = function() { t.prototype.docElem || (t.prototype.docElem = window.document.documentElement, i = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) } }(), r = function() { return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) { return window.clearTimeout(e) } }()) }, o = function(e, t) { var n = parseInt(e, 10); return n >= 0 ? n : t }, "function" == typeof define && define.amd ? define([], function() { return t }) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t : window.Vivus = t
}(), ! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Barba", [], t) : "object" == typeof exports ? exports.Barba = t() : e.Barba = t() }(this, function() {
    return function(e) {
        function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { exports: {}, id: i, loaded: !1 }; return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports }
        var n = {};
        return t.m = e, t.c = n, t.p = "http://localhost:8080/dist", t(0)
    }([function(e, t, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        var i = { version: "1.0.0", BaseTransition: n(4), BaseView: n(6), BaseCache: n(8), Dispatcher: n(7), HistoryManager: n(9), Pjax: n(10), Prefetch: n(13), Utils: n(5) };
        e.exports = i
    }, function(e, t, n) {
        (function(t) {
            ! function(n) {
                function i() {}

                function r(e, t) { return function() { e.apply(t, arguments) } }

                function o(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
                }

                function s(e, t) { for (; 3 === e._state;) e = e._value; return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void h(function() { var e = 1 === i._state ? t.onFulfilled : t.onRejected; if (null === e) return void(1 === i._state ? a : l)(t.promise, i._value); var n; try { n = e(i._value) } catch (i) { return void l(t.promise, i) } a(t.promise, n) })) }

                function a(e, t) { try { if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if (t instanceof o) return e._state = 3, e._value = t, void c(e); if ("function" == typeof n) return void d(r(n, t), e) } e._state = 1, e._value = t, c(e) } catch (t) { l(e, t) } }

                function l(e, t) { e._state = 2, e._value = t, c(e) }

                function c(e) {
                    2 === e._state && 0 === e._deferreds.length && h(function() { e._handled || f(e._value) });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function u(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

                function d(e, t) {
                    var n = !1;
                    try { e(function(e) { n || (n = !0, a(t, e)) }, function(e) { n || (n = !0, l(t, e)) }) } catch (e) {
                        if (n) return;
                        n = !0, l(t, e)
                    }
                }
                var p = setTimeout,
                    h = "function" == typeof t && t || function(e) { p(e, 0) },
                    f = function(e) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e) };
                o.prototype["catch"] = function(e) { return this.then(null, e) }, o.prototype.then = function(e, t) { var n = new this.constructor(i); return s(this, new u(e, t, n)), n }, o.all = function(e) {
                    var t = Array.prototype.slice.call(e);
                    return new o(function(e, n) {
                        function i(e, o) { try { if (o && ("object" == typeof o || "function" == typeof o)) { var s = o.then; if ("function" == typeof s) return void s.call(o, function(t) { i(e, t) }, n) } t[e] = o, 0 === --r && a(t) } catch (a) { n(a) } }
                        if (0 === t.length) return e([]);
                        for (var r = t.length, o = 0; o < t.length; o++) i(o, t[o])
                    })
                }, o.resolve = function(e) { return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) { t(e) }) }, o.reject = function(e) { return new o(function(t, n) { n(e) }) }, o.race = function(e) { return new o(function(t, n) { for (var i = 0, r = e.length; i < r; i++) e[i].then(t, n) }) }, o._setImmediateFn = function(e) { h = e }, o._setUnhandledRejectionFn = function(e) { f = e }, "undefined" != typeof e && e.exports ? e.exports = o : n.Promise || (n.Promise = o)
            }(this)
        }).call(t, n(2).setImmediate)
    }, function(e, t, n) {
        (function(e, i) {
            function r(e, t) { this._id = e, this._clearFn = t }
            var o = n(3).nextTick,
                s = Function.prototype.apply,
                a = Array.prototype.slice,
                l = {},
                c = 0;
            t.setTimeout = function() { return new r(s.call(setTimeout, window, arguments), clearTimeout) }, t.setInterval = function() { return new r(s.call(setInterval, window, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e.close() }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() { this._clearFn.call(window, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t))
            }, t.setImmediate = "function" == typeof e ? e : function(e) {
                var n = c++,
                    i = !(arguments.length < 2) && a.call(arguments, 1);
                return l[n] = !0, o(function() { l[n] && (i ? e.apply(null, i) : e.call(null), t.clearImmediate(n)) }), n
            }, t.clearImmediate = "function" == typeof i ? i : function(e) { delete l[e] }
        }).call(t, n(2).setImmediate, n(2).clearImmediate)
    }, function(e, t) {
        function n() { d && c && (d = !1, c.length ? u = c.concat(u) : p = -1, u.length && i()) }

        function i() {
            if (!d) {
                var e = s(n);
                d = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++p < t;) c && c[p].run();
                    p = -1, t = u.length
                }
                c = null, d = !1, a(e)
            }
        }

        function r(e, t) { this.fun = e, this.array = t }

        function o() {}
        var s, a, l = e.exports = {};
        ! function() { try { s = setTimeout } catch (e) { s = function() { throw new Error("setTimeout is not defined") } } try { a = clearTimeout } catch (e) { a = function() { throw new Error("clearTimeout is not defined") } } }();
        var c, u = [],
            d = !1,
            p = -1;
        l.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new r(e, t)), 1 !== u.length || d || s(i, 0)
        }, r.prototype.run = function() { this.fun.apply(null, this.array) }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = o, l.addListener = o, l.once = o, l.off = o, l.removeListener = o, l.removeAllListeners = o, l.emit = o, l.binding = function(e) { throw new Error("process.binding is not supported") }, l.cwd = function() { return "/" }, l.chdir = function(e) { throw new Error("process.chdir is not supported") }, l.umask = function() { return 0 }
    }, function(e, t, n) {
        var i = n(5),
            r = { oldContainer: void 0, newContainer: void 0, newContainerLoading: void 0, extend: function(e) { return i.extend(this, e) }, init: function(e, t) { var n = this; return this.oldContainer = e, this._newContainerPromise = t, this.deferred = i.deferred(), this.newContainerReady = i.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(e) { n.newContainer = e, n.newContainerReady.resolve() }), this.deferred.promise }, done: function() { this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve() }, start: function() {} };
        e.exports = r
    }, function(e, t) {
        var n = {
            getCurrentUrl: function() { return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search },
            cleanLink: function(e) { return e.replace(/#.*/, "") },
            xhrTimeout: 5e3,
            xhr: function(e) {
                var t = this.deferred(),
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function() { if (4 === n.readyState) return 200 === n.status ? t.resolve(n.responseText) : t.reject(new Error("xhr: HTTP code is not 200")) }, n.ontimeout = function() { return t.reject(new Error("xhr: Timeout exceeded")) }, n.open("GET", e), n.timeout = this.xhrTimeout, n.setRequestHeader("x-barba", "yes"), n.send(), t.promise
            },
            extend: function(e, t) { var n = Object.create(e); for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); return n },
            deferred: function() { return new function() { this.resolve = null, this.reject = null, this.promise = new Promise(function(e, t) { this.resolve = e, this.reject = t }.bind(this)) } },
            getPort: function(e) {
                var t = "undefined" != typeof e ? e : window.location.port,
                    n = window.location.protocol;
                return "" != t ? parseInt(t) : "http:" === n ? 80 : "https:" === n ? 443 : void 0
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(7),
            r = n(5),
            o = {
                namespace: null,
                extend: function(e) { return r.extend(this, e) },
                init: function() {
                    var e = this;
                    i.on("initStateChange", function(t, n) { n && n.namespace === e.namespace && e.onLeave() }), i.on("newPageReady", function(t, n, i) { e.container = i, t.namespace === e.namespace && e.onEnter() }), i.on("transitionCompleted", function(t, n) { t.namespace === e.namespace && e.onEnterCompleted(), n && n.namespace === e.namespace && e.onLeaveCompleted() })
                },
                onEnter: function() {},
                onEnterCompleted: function() {},
                onLeave: function() {},
                onLeaveCompleted: function() {}
            };
        e.exports = o
    }, function(e, t) {
        var n = {
            events: {},
            on: function(e, t) {
                this.events[e] = this.events[e] || [], this.events[e].push(t);
            },
            off: function(e, t) { e in this.events != 0 && this.events[e].splice(this.events[e].indexOf(t), 1) },
            trigger: function(e) {
                if (e in this.events != 0)
                    for (var t = 0; t < this.events[e].length; t++) this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            r = { data: {}, extend: function(e) { return i.extend(this, e) }, set: function(e, t) { this.data[e] = t }, get: function(e) { return this.data[e] }, reset: function() { this.data = {} } };
        e.exports = r
    }, function(e, t) {
        var n = { history: [], add: function(e, t) { t || (t = void 0), this.history.push({ url: e, namespace: t }) }, currentStatus: function() { return this.history[this.history.length - 1] }, prevStatus: function() { var e = this.history; return e.length < 2 ? null : e[e.length - 2] } };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            r = n(7),
            o = n(11),
            s = n(8),
            a = n(9),
            l = n(12),
            c = {
                Dom: l,
                History: a,
                Cache: s,
                cacheEnabled: !0,
                transitionProgress: !1,
                ignoreClassLink: "no-barba",
                start: function() { this.init() },
                init: function() {
                    var e = this.Dom.getContainer(),
                        t = this.Dom.getWrapper();
                    t.setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(e)), r.trigger("initStateChange", this.History.currentStatus()), r.trigger("newPageReady", this.History.currentStatus(), {}, e, this.Dom.currentHTML), r.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                },
                bindEvents: function() { document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this)) },
                getCurrentUrl: function() { return i.cleanLink(i.getCurrentUrl()) },
                goTo: function(e) { window.history.pushState(null, null, e), this.onStateChange() },
                forceGoTo: function(e) { window.location = e },
                load: function(e) {
                    var t, n = i.deferred(),
                        r = this;
                    return t = this.Cache.get(e), t || (t = i.xhr(e), this.Cache.set(e, t)), t.then(function(e) {
                        var t = r.Dom.parseResponse(e);
                        r.Dom.putContainer(t), r.cacheEnabled || r.Cache.reset(), n.resolve(t)
                    }, function() { r.forceGoTo(e), n.reject() }), n.promise
                },
                getHref: function(e) { if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0 },
                onLinkClick: function(e) {
                    for (var t = e.target; t && !this.getHref(t);) t = t.parentNode;
                    if (this.preventCheck(e, t)) {
                        e.stopPropagation(), e.preventDefault(), r.trigger("linkClicked", t, e);
                        var n = this.getHref(t);
                        this.goTo(n)
                    }
                },
                preventCheck: function(e, t) { if (!window.history.pushState) return !1; var n = this.getHref(t); return !(!t || !n || e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || t.target && "_blank" === t.target || window.location.protocol !== t.protocol || window.location.hostname !== t.hostname || i.getPort() !== i.getPort(t.port) || n.indexOf("#") > -1 || t.getAttribute && "string" == typeof t.getAttribute("download") || i.cleanLink(n) == i.cleanLink(location.href) || t.classList.contains(this.ignoreClassLink)) },
                getTransition: function() { return o },
                onStateChange: function() {
                    var e = this.getCurrentUrl();
                    if (this.transitionProgress && this.forceGoTo(e), this.History.currentStatus().url === e) return !1;
                    this.History.add(e);
                    var t = this.load(e),
                        n = Object.create(this.getTransition());
                    this.transitionProgress = !0, r.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                    var i = n.init(this.Dom.getContainer(), t);
                    t.then(this.onNewContainerLoaded.bind(this)), i.then(this.onTransitionEnd.bind(this))
                },
                onNewContainerLoaded: function(e) {
                    var t = this.History.currentStatus();
                    t.namespace = this.Dom.getNamespace(e), r.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), e, this.Dom.currentHTML)
                },
                onTransitionEnd: function() { this.transitionProgress = !1, r.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus()) }
            };
        e.exports = c
    }, function(e, t, n) {
        var i = n(4),
            r = i.extend({ start: function() { this.newContainerLoading.then(this.finish.bind(this)) }, finish: function() { document.body.scrollTop = 0, this.done() } });
        e.exports = r
    }, function(e, t) {
        var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function(e) {
                this.currentHTML = e;
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = t.querySelector("title");
                return n && (document.title = n.textContent), this.getContainer(t)
            },
            getWrapper: function() { var e = document.getElementById(this.wrapperId); if (!e) throw new Error("Barba.js: wrapper not found!"); return e },
            getContainer: function(e) { if (e || (e = document.body), !e) throw new Error("Barba.js: DOM not ready!"); var t = this.parseContainer(e); if (t && t.jquery && (t = t[0]), !t) throw new Error("Barba.js: no container found"); return t },
            getNamespace: function(e) { return e && e.dataset ? e.dataset[this.dataNamespace] : e ? e.getAttribute("data-" + this.dataNamespace) : null },
            putContainer: function(e) {
                e.style.visibility = "hidden";
                var t = this.getWrapper();
                t.appendChild(e)
            },
            parseContainer: function(e) { return e.querySelector("." + this.containerClass) }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            r = n(10),
            o = {
                ignoreClassLink: "no-barba-prefetch",
                init: function() { return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))) },
                onLinkEnter: function(e) {
                    for (var t = e.target; t && !r.getHref(t);) t = t.parentNode;
                    if (t && !t.classList.contains(this.ignoreClassLink)) {
                        var n = r.getHref(t);
                        if (r.preventCheck(e, t) && !r.Cache.get(n)) {
                            var o = i.xhr(n);
                            r.Cache.set(n, o)
                        }
                    }
                }
            };
        e.exports = o
    }])
}), ! function(e, t) {
    "use strict";

    function n(n, i, o, a, l) {
        function c() {
            _ = e.devicePixelRatio > 1, o = u(o), i.delay >= 0 && setTimeout(function() { d(!0) }, i.delay), (i.delay < 0 || i.combined) && (a.e = v(i.throttle, function(e) { "resize" === e.type && (T = C = -1), d(e.all) }), a.a = function(e) { e = u(e), o.push.apply(o, e) }, a.g = function() { return o = r(o).filter(function() { return !r(this).data(i.loadedName) }) }, a.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = o.filter(function() { return this === e[t] });
                    n.length && d(!1, n)
                }
            }, d(), r(i.appendScroll).on("scroll." + l + " resize." + l, a.e))
        }

        function u(e) {
            var o = i.defaultImage,
                s = i.placeholder,
                a = i.imageBase,
                l = i.srcsetAttribute,
                c = i.loaderAttribute,
                u = i._f || {};
            e = r(e).filter(function() {
                var e = r(this),
                    n = g(this);
                return !e.data(i.handledName) && (e.attr(i.attribute) || e.attr(l) || e.attr(c) || u[n] !== t)
            }).data("plugin_" + i.name, n);
            for (var d = 0, p = e.length; d < p; d++) {
                var h = r(e[d]),
                    f = g(e[d]),
                    m = h.attr(i.imageBaseAttribute) || a;
                f === k && m && h.attr(l) && h.attr(l, y(h.attr(l), m)), u[f] === t || h.attr(c) || h.attr(c, u[f]), f === k && o && !h.attr(L) ? h.attr(L, o) : f === k || !s || h.css(O) && "none" !== h.css(O) || h.css(O, "url('" + s + "')")
            }
            return e
        }

        function d(e, t) {
            if (!o.length) return void(i.autoDestroy && n.destroy());
            for (var s = t || o, a = !1, l = i.imageBase || "", c = i.srcsetAttribute, u = i.handledName, d = 0; d < s.length; d++)
                if (e || t || h(s[d])) {
                    var f = r(s[d]),
                        m = g(s[d]),
                        y = f.attr(i.attribute),
                        v = f.attr(i.imageBaseAttribute) || l,
                        w = f.attr(i.loaderAttribute);
                    f.data(u) || i.visibleOnly && !f.is(":visible") || !((y || f.attr(c)) && (m === k && (v + y !== f.attr(L) || f.attr(c) !== f.attr(I)) || m !== k && v + y !== f.css(O)) || w) || (a = !0, f.data(u, !0), p(f, m, v, w))
                }
            a && (o = r(o).filter(function() { return !r(this).data(u) }))
        }

        function p(e, t, n, o) {
            ++x;
            var s = function() { b("onError", e), w(), s = r.noop };
            b("beforeLoad", e);
            var a = i.attribute,
                l = i.srcsetAttribute,
                c = i.sizesAttribute,
                u = i.retinaAttribute,
                d = i.removeAttribute,
                p = i.loadedName,
                h = e.attr(u);
            if (o) {
                var f = function() { d && e.removeAttr(i.loaderAttribute), e.data(p, !0), b(E, e), setTimeout(w, 1), f = r.noop };
                e.off(A).one(A, s).one(S, f), b(o, e, function(t) { t ? (e.off(S), f()) : (e.off(A), s()) }) || e.trigger(A)
            } else {
                var m = r(new Image);
                m.one(A, s).one(S, function() { e.hide(), t === k ? e.attr(P, m.attr(P)).attr(I, m.attr(I)).attr(L, m.attr(L)) : e.css(O, "url('" + m.attr(L) + "')"), e[i.effect](i.effectTime), d && (e.removeAttr(a + " " + l + " " + u + " " + i.imageBaseAttribute), c !== P && e.removeAttr(c)), e.data(p, !0), b(E, e), m.remove(), w() });
                var g = (_ && h ? h : e.attr(a)) || "";
                m.attr(P, e.attr(c)).attr(I, e.attr(l)).attr(L, g ? n + g : null), m.complete && m.trigger(S)
            }
        }

        function h(e) {
            var t = e.getBoundingClientRect(),
                n = i.scrollDirection,
                r = i.threshold,
                o = m() + r > t.top && -r < t.bottom,
                s = f() + r > t.left && -r < t.right;
            return "vertical" === n ? o : "horizontal" === n ? s : o && s
        }

        function f() { return T >= 0 ? T : T = r(e).width() }

        function m() { return C >= 0 ? C : C = r(e).height() }

        function g(e) { return e.tagName.toLowerCase() }

        function y(e, t) {
            if (t) {
                var n = e.split(",");
                e = "";
                for (var i = 0, r = n.length; i < r; i++) e += t + n[i].trim() + (i !== r - 1 ? "," : "")
            }
            return e
        }

        function v(e, t) {
            var r, o = 0;
            return function(s, a) {
                function l() { o = +new Date, t.call(n, s) }
                var c = +new Date - o;
                r && clearTimeout(r), c > e || !i.enableThrottle || a ? l() : r = setTimeout(l, e - c)
            }
        }

        function w() {--x, o.length || x || b("onFinishedAll") }

        function b(e, t, r) { return !!(e = i[e]) && (e.apply(n, [].slice.call(arguments, 1)), !0) }
        var x = 0,
            T = -1,
            C = -1,
            _ = !1,
            E = "afterLoad",
            S = "load",
            A = "error",
            k = "img",
            L = "src",
            I = "srcset",
            P = "sizes",
            O = "background-image";
        "event" === i.bind || s ? c() : r(e).on(S + "." + l, c)
    }

    function i(i, s) {
        var a = this,
            l = r.extend({}, a.config, s),
            c = {},
            u = l.name + "-" + ++o;
        return a.config = function(e, n) { return n === t ? l[e] : (l[e] = n, a) }, a.addItems = function(e) { return c.a && c.a("string" === r.type(e) ? r(e) : e), a }, a.getItems = function() { return c.g ? c.g() : {} }, a.update = function(e) { return c.e && c.e({}, !e), a }, a.force = function(e) { return c.f && c.f("string" === r.type(e) ? r(e) : e), a }, a.loadAll = function() { return c.e && c.e({ all: !0 }, !0), a }, a.destroy = function() { return r(l.appendScroll).off("." + u, c.e), r(e).off("." + u), c = {}, t }, n(a, l, i, c, u), l.chainable ? i : a
    }
    var r = e.jQuery || e.Zepto,
        o = 0,
        s = !1;
    r.fn.Lazy = r.fn.lazy = function(e) { return new i(this, e) }, r.Lazy = r.lazy = function(e, n, o) { if (r.isFunction(n) && (o = n, n = []), r.isFunction(o)) { e = r.isArray(e) ? e : [e], n = r.isArray(n) ? n : [n]; for (var s = i.prototype.config, a = s._f || (s._f = {}), l = 0, c = e.length; l < c; l++)(s[e[l]] === t || r.isFunction(s[e[l]])) && (s[e[l]] = o); for (var u = 0, d = n.length; u < d; u++) a[n[u]] = e[0] } }, i.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: e, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: t, afterLoad: t, onError: t, onFinishedAll: t }, r(e).on("load", function() { s = !0 })
}(window);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            n = _self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                util: {
                    encode: function(e) { return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") },
                    type: function(e) { return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1] },
                    objId: function(e) { return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id },
                    clone: function(e) {
                        var t = n.util.type(e);
                        switch (t) {
                            case "Object":
                                var i = {};
                                for (var r in e) e.hasOwnProperty(r) && (i[r] = n.util.clone(e[r]));
                                return i;
                            case "Array":
                                return e.map(function(e) { return n.util.clone(e) })
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) { var i = n.util.clone(n.languages[e]); for (var r in t) i[r] = t[r]; return i },
                    insertBefore: function(e, t, i, r) {
                        r = r || n.languages;
                        var o = r[e];
                        if (2 == arguments.length) { i = arguments[1]; for (var s in i) i.hasOwnProperty(s) && (o[s] = i[s]); return o }
                        var a = {};
                        for (var l in o)
                            if (o.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var s in i) i.hasOwnProperty(s) && (a[s] = i[s]);
                                a[l] = o[l]
                            }
                        return n.languages.DFS(n.languages, function(t, n) { n === r[e] && t != e && (this[t] = a) }), r[e] = a
                    },
                    DFS: function(e, t, i, r) { r = r || {}; for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r))) }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    var i = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                    n.hooks.run("before-highlightall", i);
                    for (var r, o = i.elements || document.querySelectorAll(i.selector), s = 0; r = o[s++];) n.highlightElement(r, e === !0, i.callback)
                },
                highlightElement: function(t, i, r) {
                    for (var o, s, a = t; a && !e.test(a.className);) a = a.parentNode;
                    a && (o = (a.className.match(e) || [, ""])[1].toLowerCase(), s = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, a = t.parentNode, /pre/i.test(a.nodeName) && (a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var l = t.textContent,
                        c = { element: t, language: o, grammar: s, code: l };
                    if (n.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (n.hooks.run("before-highlight", c), c.element.textContent = c.code, n.hooks.run("after-highlight", c)), void n.hooks.run("complete", c);
                    if (n.hooks.run("before-highlight", c), i && _self.Worker) {
                        var u = new Worker(n.filename);
                        u.onmessage = function(e) { c.highlightedCode = e.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c) }, u.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 }))
                    } else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                },
                highlight: function(e, t, r) { var o = n.tokenize(e, t); return i.stringify(n.util.encode(o), r) },
                matchGrammar: function(e, t, i, r, o, s, a) {
                    var l = n.Token;
                    for (var c in i)
                        if (i.hasOwnProperty(c) && i[c]) {
                            if (c == a) return;
                            var u = i[c];
                            u = "Array" === n.util.type(u) ? u : [u];
                            for (var d = 0; d < u.length; ++d) {
                                var p = u[d],
                                    h = p.inside,
                                    f = !!p.lookbehind,
                                    m = !!p.greedy,
                                    g = 0,
                                    y = p.alias;
                                if (m && !p.pattern.global) {
                                    var v = p.pattern.toString().match(/[imuy]*$/)[0];
                                    p.pattern = RegExp(p.pattern.source, v + "g")
                                }
                                p = p.pattern || p;
                                for (var w = r, b = o; w < t.length; b += t[w].length, ++w) {
                                    var x = t[w];
                                    if (t.length > e.length) return;
                                    if (!(x instanceof l)) {
                                        p.lastIndex = 0;
                                        var T = p.exec(x),
                                            C = 1;
                                        if (!T && m && w != t.length - 1) {
                                            if (p.lastIndex = b, T = p.exec(e), !T) break;
                                            for (var _ = T.index + (f ? T[1].length : 0), E = T.index + T[0].length, S = w, A = b, k = t.length; k > S && (E > A || !t[S].type && !t[S - 1].greedy); ++S) A += t[S].length, _ >= A && (++w, b = A);
                                            if (t[w] instanceof l || t[S - 1].greedy) continue;
                                            C = S - w, x = e.slice(b, A), T.index -= b
                                        }
                                        if (T) {
                                            f && (g = T[1].length);
                                            var _ = T.index + g,
                                                T = T[0].slice(g),
                                                E = _ + T.length,
                                                L = x.slice(0, _),
                                                I = x.slice(E),
                                                P = [w, C];
                                            L && (++w, b += L.length, P.push(L));
                                            var O = new l(c, h ? n.tokenize(T, h) : T, y, T, m);
                                            if (P.push(O), I && P.push(I), Array.prototype.splice.apply(t, P), 1 != C && n.matchGrammar(e, t, i, w, b, !0, c), s) break
                                        } else if (s) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, t) {
                    var i = [e],
                        r = t.rest;
                    if (r) {
                        for (var o in r) t[o] = r[o];
                        delete t.rest
                    }
                    return n.matchGrammar(e, i, t, 0, 0, !1), i
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var i = n.hooks.all;
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    run: function(e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length)
                            for (var r, o = 0; r = i[o++];) r(t)
                    }
                }
            },
            i = n.Token = function(e, t, n, i, r) { this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!r };
        if (i.stringify = function(e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function(n) { return i.stringify(n, t, e) }).join("");
                var o = { type: e.type, content: i.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r };
                if (e.alias) {
                    var s = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, s)
                }
                n.hooks.run("wrap", o);
                var a = Object.keys(o.attributes).map(function(e) { return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"' }).join(" ");
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + o.content + "</" + o.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                i = t.language,
                r = t.code,
                o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) { "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&")) }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^{}\s][^{};]*?(?=\s*\{)/, string: { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag)), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(?:true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*\()/i, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)\s*=>))/i, alias: "function" } }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript, Prism.languages.php = Prism.languages.extend("clike", { keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i, constant: /\b[A-Z0-9_]{2,}\b/, comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), Prism.languages.insertBefore("php", "class-name", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), Prism.languages.insertBefore("php", "keyword", { delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: "important" }, variable: /\$\w+\b/i, "package": { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), Prism.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) { "php" === e.language && /(?:<\?php|<\?)/gi.test(e.code) && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi, function(t) { for (var n = e.tokenStack.length; - 1 !== e.backupCode.indexOf("___PHP" + n + "___");) ++n; return e.tokenStack[n] = t, "___PHP" + n + "___" }), e.grammar = Prism.languages.markup) }), Prism.hooks.add("before-insert", function(e) { "php" === e.language && e.backupCode && (e.code = e.backupCode, delete e.backupCode) }), Prism.hooks.add("after-highlight", function(e) {
        if ("php" === e.language && e.tokenStack) {
            e.grammar = Prism.languages.php;
            for (var t = 0, n = Object.keys(e.tokenStack); t < n.length; ++t) {
                var i = n[t],
                    r = e.tokenStack[i];
                e.highlightedCode = e.highlightedCode.replace("___PHP" + i + "___", '<span class="token php language-php">' + Prism.highlight(r, e.grammar, "php").replace(/\$/g, "$$$$") + "</span>")
            }
            e.element.innerHTML = e.highlightedCode
        }
    })), Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.scss.property = { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, "boolean": /\b(?:true|false)\b/, "null": /\bnull\b/, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss), Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/, greedy: !0, lookbehind: !0 }, variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i, "boolean": /\b(?:TRUE|FALSE|NULL)\b/i, number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, Prism.languages.typescript = Prism.languages.extend("javascript", { keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|false|true|module|declare|constructor|string|Function|any|number|boolean|Array|symbol|namespace|abstract|require|type)\b/ }), Prism.languages.ts = Prism.languages.typescript, ! function(e) {
        e.fn.readingTime = function(t) {
            var n = { readingTimeTarget: ".eta", wordCountTarget: null, wordsPerMinute: 270, round: !0, lang: "en", lessThanAMinuteString: "", prependTimeString: "", prependWordString: "", remotePath: null, remoteTarget: null, success: function() {}, error: function() {} },
                i = this,
                r = e(this);
            i.settings = e.extend({}, n, t);
            var o = i.settings;
            if (!this.length) return o.error.call(this), this;
            if ("it" == o.lang) var s = o.lessThanAMinuteString || "Meno di un minuto",
                a = "min";
            else if ("fr" == o.lang) var s = o.lessThanAMinuteString || "Moins d'une minute",
                a = "min";
            else if ("de" == o.lang) var s = o.lessThanAMinuteString || "Weniger als eine Minute",
                a = "min";
            else if ("es" == o.lang) var s = o.lessThanAMinuteString || "Menos de un minuto",
                a = "min";
            else if ("nl" == o.lang) var s = o.lessThanAMinuteString || "Minder dan een minuut",
                a = "min";
            else if ("sk" == o.lang) var s = o.lessThanAMinuteString || "Menej neÅ¾ minÃºtu",
                a = "min";
            else if ("cz" == o.lang) var s = o.lessThanAMinuteString || "MÃ©nÄ› neÅ¾ minutu",
                a = "min";
            else if ("hu" == o.lang) var s = o.lessThanAMinuteString || "Kevesebb mint egy perc",
                a = "perc";
            else var s = o.lessThanAMinuteString || "Less than a minute",
                a = "min";
            var l = function c(t) {
                if ("" !== t) {
                    var n = t.trim().split(/\s+/g).length,
                        i = o.wordsPerMinute / 60,
                        r = n / i;
                    if (o.round === !0) var c = Math.round(r / 60);
                    else var c = Math.floor(r / 60);
                    var l = Math.round(r - 60 * c);
                    if (o.round === !0) e(o.readingTimeTarget).text(c > 0 ? o.prependTimeString + c + " " + a : o.prependTimeString + s);
                    else {
                        var u = c + ":" + l;
                        e(o.readingTimeTarget).text(o.prependTimeString + u)
                    }
                    "" !== o.wordCountTarget && void 0 !== o.wordCountTarget && e(o.wordCountTarget).text(o.prependWordString + n), o.success.call(this)
                } else o.error.call(this, "The element is empty.")
            };
            r.each(function() { null != o.remotePath && null != o.remoteTarget ? e.get(o.remotePath, function(t) { l(e("<div>").html(t).find(o.remoteTarget).text()) }) : l(r.text()) })
        }
    }(jQuery),
    function() {
        "use strict";
        var e = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        "serviceWorker" in navigator && ("https:" === window.location.protocol || e) && navigator.serviceWorker.register("/service-worker.js").then(function(e) {
            e.onupdatefound = function() {
                if (navigator.serviceWorker.controller) {
                    var t = e.installing;
                    t.onstatechange = function() {
                        switch (t.state) {
                            case "installed":
                                break;
                            case "redundant":
                                throw new Error("The installing service worker became redundant.")
                        }
                    }
                }
            }
        })["catch"](function(e) { console.error("Error during service worker registration:", e) })
    }(),
    function(e) {
        "use strict";

        function t(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e }

        function n(e, t, n) { var i = document.createElement(e); return i.className = t || "", i.innerHTML = n || "", i }

        function i(e, n) { this.el = e, this.options = t({}, this.options), t(this.options, n), this._init() } i.prototype.options = { isContentHidden: !0, revealSettings: { direction: "lr", bgcolor: "#f0f0f0", duration: 500, easing: "easeInOutQuint", coverArea: 0, onCover: function(e, t) { return !1 }, onStart: function(e, t) { return !1 }, onComplete: function(e, t) { return !1 } } }, i.prototype._init = function() { this._layout() }, i.prototype._layout = function() { var e = getComputedStyle(this.el).position; "fixed" !== e && "absolute" !== e && "relative" !== e && (this.el.style.position = "relative"), this.content = n("div", "block-revealer__content", this.el.innerHTML), this.options.isContentHidden && (this.content.style.opacity = 0), this.revealer = n("div", "block-revealer__element"), this.el.classList.add("block-revealer"), this.el.innerHTML = "", this.el.appendChild(this.content), this.el.appendChild(this.revealer) }, i.prototype._getTransformSettings = function(e) {
            var t, n, i;
            switch (e) {
                case "lr":
                    t = "scale3d(0,1,1)", n = "0 50%", i = "100% 50%";
                    break;
                case "rl":
                    t = "scale3d(0,1,1)", n = "100% 50%", i = "0 50%";
                    break;
                case "tb":
                    t = "scale3d(1,0,1)", n = "50% 0", i = "50% 100%";
                    break;
                case "bt":
                    t = "scale3d(1,0,1)", n = "50% 100%", i = "50% 0";
                    break;
                default:
                    t = "scale3d(0,1,1)", n = "0 50%", i = "100% 50%"
            }
            return { val: t, origin: { initial: n, halfway: i } }
        }, i.prototype.reveal = function(e) {
            if (this.isAnimating) return !1;
            this.isAnimating = !0;
            var t = { duration: 500, easing: "easeInOutQuint", delay: 0, bgcolor: "#f0f0f0", direction: "lr", coverArea: 0 },
                e = e || this.options.revealSettings,
                n = e.direction || t.direction,
                i = this._getTransformSettings(n);
            this.revealer.style.WebkitTransform = this.revealer.style.transform = i.val, this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = i.origin.initial, this.revealer.style.backgroundColor = e.bgcolor || t.bgcolor, this.revealer.style.opacity = 1;
            var r = this,
                o = {
                    complete: function() {
                        r.isAnimating = !1, "function" == typeof e.onComplete && e.onComplete(r.content, r.revealer);
                    }
                },
                s = { delay: e.delay || t.delay, complete: function() { r.revealer.style.WebkitTransformOrigin = r.revealer.style.transformOrigin = i.origin.halfway, "function" == typeof e.onCover && e.onCover(r.content, r.revealer), anime(o) } };
            s.targets = o.targets = this.revealer, s.duration = o.duration = e.duration || t.duration, s.easing = o.easing = e.easing || t.easing;
            var a = e.coverArea || t.coverArea;
            "lr" === n || "rl" === n ? (s.scaleX = [0, 1], o.scaleX = [1, a / 100]) : (s.scaleY = [0, 1], o.scaleY = [1, a / 100]), "function" == typeof e.onStart && e.onStart(r.content, r.revealer), anime(s)
        }, e.RevealFx = i
    }(window);
var UTILS = UTILS || {};
UTILS._screenSize = function() {
    var e = window,
        t = document,
        n = t.documentElement,
        i = t.getElementsByTagName("body")[0],
        r = e.innerWidth || n.clientWidth || i.clientWidth,
        o = e.innerHeight || n.clientHeight || i.clientHeight,
        s = { x: r, y: o };
    return s
};
var UTILS = UTILS || {};
UTILS.scrollToID = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html,body",
        n = (window.location.pathname, 0),
        i = UTILS._screenSize().x;
    i < 768 && (n = 40);
    var r = $(e).offset().top - n;
    $(t).animate({ scrollTop: r }, 400)
}, UTILS.hashAnchorClick = function() {
    return $('a[href*="#"]:not(.js-scroll-to)').on("click", function(e) {
        var t = this.hash,
            n = t.substr(t.indexOf("#"));
        return n.length && UTILS.scrollToID(n), !1
    }), !1
};
var UTILS = UTILS || {};
UTILS.btnAttribute = function() {
    if (document.querySelector(".btn")) {
        var e = document.querySelectorAll(".btn");
        [].forEach.call(e, function(e) { e.querySelector("span") && e.setAttribute("data-content", e.querySelector("span").innerHTML) })
    }
};
var UTILS = UTILS || {};
UTILS.infiniteScroll = function(e) {
    var t = void 0,
        n = "#js-infinity-wrapper";
    $(n).length && (t = new Waypoint.Infinite({ element: $(n)[0], onAfterPageLoad: function() { e && e() } }))
};
var UTILS = UTILS || {};
UTILS._animationedSections = function() {
    var e, t, n, i = {
            runAnimation: function(e, t) {
                var n = t.split("-");
                setTimeout(function() { e.classList.remove(t) }, 1200), e.classList.add("animated"), e.classList.add(n[1]), e.classList.add("active"), "caseStudy" === n[1] && e.querySelector(".layer-wrapper").classList.add("expand")
            }
        },
        r = "85%",
        o = ["animation-fadeInUp", "animation-fadeInDown", "animation-lineListAnim", "animation-fadeIn", "animation-caseStudy"],
        s = function() {
            var s = "." + o[n],
                a = o[n];
            document.querySelector(s) && (e = document.querySelectorAll(s), [].forEach.call(e, function(e) { t = new Waypoint({ element: e, handler: function(t) { "down" === t && (i.runAnimation(e, a), this.destroy()) }, offset: r }) }))
        };
    for (n = 0; n < o.length; n++) s();
    if (document.querySelector(".js-icon-animation")) {
        var a = document.querySelectorAll(".js-icon-animation");
        [].forEach.call(a, function(e) {
            var t = e.getAttribute("id");
            new Vivus(t, { type: "delayed", duration: 100 }, function() { e.classList.add("loaded") })
        })
    }
    var l, c, u, d;
    if (document.querySelector(".animation-reveal")) {
        var p = document.querySelectorAll(".animation-reveal");
        [].forEach.call(p, function(e) {
            new Waypoint({
                element: e,
                handler: function(t) {
                    if ("down" === t) {
                        u = $(e).find(".js-reveal-left").attr("id"), l = new RevealFx(e.querySelector("#" + $(e).find(".js-reveal-left").attr("id")), { revealSettings: { bgcolor: e.querySelector(".js-reveal-left").getAttribute("data-bg-color"), direction: "rl", onCover: function(e, t) { e.style.opacity = 1 } } }), d = e.querySelector(".js-reveal-right").getAttribute("id"), c = new RevealFx(e.querySelector(".js-reveal-right"), { revealSettings: { bgcolor: e.querySelector(".js-reveal-right").getAttribute("data-bg-color"), delay: 250, onCover: function(e, t) { e.style.opacity = 1 } } });
                        var n = e.querySelector("video").play();
                        void 0 !== n && n.then(function(e) {})["catch"](function(e) {}), l.reveal(), c.reveal(), e.classList.remove("animation-reveal"), this.destroy()
                    }
                },
                offset: "90%"
            })
        })
    }
};
var UTILS = UTILS || {};
UTILS._magnific = function() {
    $("a.js-popup, a.popup, a.js-video").on("click", function() {
        var e = $(this).attr("href"),
            t = e.substring(e.length - 4, e.length),
            n = $(this).attr("title");
        return t = ".jpg" === t || ".gif" === t || ".png" === t || ".jpeg" === t ? "image" : "iframe", $.magnificPopup.open({ items: { src: e }, type: t, image: { markup: '<div class="mfp-figure"><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div><p class="mfp-close"></p></div><p class="mfp-close"></p></div>', cursor: "mfp-zoom-out-cur", titleSrc: n, verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, iframe: { patterns: { youtube: { index: "youtube.com/", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0" } } }, mainClass: "mfp-fade", titleSrc: n, gallery: { enabled: !0, navigateByImgClick: !0 } }), !1
    })
}, UTILS._ajaxPopup = function() { $(".js-ajax-popup").on("click", function(e) { var t = this; return $.magnificPopup.open({ type: "ajax", items: { src: t.getAttribute("data-href") } }, 0), !1 }) }, UTILS._openPopupOnClick = function() {
    if (document.querySelector(".js-open-popup")) {
        var e = document.querySelectorAll(".js-open-popup");
        [].forEach.call(e, function(e) { e.addEventListener("click", function(e) { e.preventDefault(), e.currentTarget.href && window.open(e.currentTarget.href, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, width=500, height=400") }, !1) })
    }
};
var UTILS = UTILS || {};
UTILS._trackEvent = function() {
    $('a[data-type="trackEvent"]').on("click", function() {
        var e = window.ga || null;
        if (!e) return !0;
        var t = $(this),
            n = { hitType: "event", eventCategory: t.data("category") ? t.data("category") : "", eventAction: t.data("action") ? t.data("action") : "", eventLabel: t.data("label") ? t.data("label") : "" };
        return t.data("value") && (n.eventValue = t.data("value")), "_blank" === t.attr("target") || t.hasClass("js-video") || (n.hitCallback = function() { window.location = t.attr("href") }), (n.eventCategory || n.eventAction || n.eventLabel) && e("send", n), !n.hitCallback
    })
};
var UTILS = UTILS || {};
UTILS._form = function(e, t) {
    var n = $(e).serialize();
    return $(e).find(".loading").fadeIn(), $(e).find('button[type="submit"]').text("Sending..."), $.ajax({ url: t, method: "POST", data: n, dataType: "json" }).then(function(t) { $(e).find('button[type="submit"]').text("Submit"), $(e).find(".loading").fadeOut(), t.url ? window.location.href = t.url : ($(e).find(".loading").fadeOut(), 0 === $(e).find(".form__response--ok").length ? $(e).prepend('<div class="form__response form__response--ok"><p>' + t.message + "</p></div>") : $(".form__response--ok p").html(t.message)), $(e).find(".form__response--error").remove(), $(e)[0].reset(), $(e).find('input[type="tel"]').val("").change() }, function(t) {
        var n = "";
        if (422 == t.status)
            for (var i in t.responseJSON) t.responseJSON.hasOwnProperty(i) && (n += t.responseJSON[i].join("<br>") + "<br>");
        else 404 == t.status ? n = "Page not found - incorrect url." : t.responseJSON.message && (n = t.responseJSON.message);
        n && (0 === $(e).find(".form__response--error").length ? $(e).prepend('<div class="form__response form__response--error"><p>' + n + "</p></div>") : $(".form__response--error p").html(n)), $(e).find(".form__response--ok").remove(), $(e).find('button[type="submit"]').text("Submit"), $(e).find(".loading").fadeOut()
    }), !1
};
var UTILS = UTILS || {};
UTILS.isMobile = function() {
    return function(e) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && document.body.classList.add("is-mobile")
    }(navigator.userAgent || navigator.vendor || window.opera), document.body.classList.contains("is-mobile")
};
var UTILS = UTILS || {};
UTILS.loadVideos = function() {
    for (var e = document.querySelectorAll("video"), t = 0; t < e.length; t++) {
        var n = e[t].querySelectorAll("source");
        if (UTILS.isMobile() === !1) {
            for (var i = 0; i < n.length; i++) n[i].setAttribute("src", n[i].getAttribute("data-src"));
            e[t].load()
        } else {
            var r = e[t].getAttribute("data-poster");
            r && e[t].setAttribute("poster", r)
        }
    }
};
var UTILS = UTILS || {};
UTILS.videoFit = function() {
    var e, t = 0,
        n = 0,
        i = 0,
        r = 0,
        o = 2.4;
    $(".js-video-full").length && (e = $(".js-video-full"), e.each(function(e) {
        var s, a, l = $(this)[0];
        s = l.videoWidth, a = l.videoHeight, o = s / a, $(this).css("height", "auto").css("width", "auto"), t = $(this).parent().outerHeight(), n = $(this).parent().outerWidth(), r = o * t, i = (n / t).toFixed(3), i > o ? $(this).css("height", n / o).css("width", n).css("max-width", n) : $(this).css("height", t).css("max-width", r)
    }))
};
var BP = BP || {},
    UTILS = UTILS || {},
    googleMapLoaded = !1,
    staticFolder = "/images";
BP.utils = UTILS || {}, BP.utils.isTouchDevice = function() { return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 }, BP.utils.burger = function() {
    if (document.querySelector(".js-burger")) {
        var e = document.querySelector(".js-burger"),
            t = (document.querySelector(".page-holder"), document.querySelector("body")),
            n = (document.querySelector("html"), document.querySelector(".l-navbar__container")),
            i = window.pageYOffset;
        e.addEventListener("click", function(r) { r.preventDefault(), e.classList.contains("burger--open") ? e.classList.remove("burger--open") : e.classList.add("burger--open"), e.classList.contains("burger--open") ? (i = window.pageYOffset, t.style.top = -i + "px", t.classList.add("stop-scrolling"), setTimeout(function() { n.classList.add("is-scrollable") }, 1e3)) : (t.classList.remove("stop-scrolling"), $(window).scrollTop(i), n.classList.remove("is-scrollable")), e.classList.contains("burger--open") ? t.classList.add("nav-open") : t.classList.remove("nav-open") }, !1)
    }
    if (document.querySelector(".js-open-submenu")) {
        var r = document.querySelectorAll(".js-open-submenu"),
            o = "is-active";
        [].forEach.call(r, function(e) {
            e.addEventListener("click", function(t) {
                if (t.preventDefault(), e.classList.contains(o)) e.classList.remove(o);
                else {
                    e.classList.add(o);
                    var n = .05;
                    $(e).parent().find(".l-navbar__submenu-link").each(function(e) { $(this).css({ "transition-delay": n * (1 + e) + "s" }) })
                }
            })
        })
    }
}, BP.clickableBlocks = function() {
    if (document.querySelector(".js-activate-description")) {
        var e = document.querySelectorAll(".js-activate-description"),
            t = "is-active";
        [].forEach.call(e, function(e) { e.addEventListener("click", function() { e.classList.contains(t) ? e.classList.remove(t) : (document.querySelector(".js-activate-description.is-active") && document.querySelector(".js-activate-description.is-active").classList.remove("is-active"), e.classList.add(t)) }) })
    }
}, BP.position = $(window).scrollTop(), BP.utils.navbarPosition = function() {
    var e;
    document.querySelector(".js-navbar-scroll") && !document.querySelector("body").classList.contains("stop-scrolling") && (e = window.scrollY || window.pageYOffset || document.documentElement.scrollTop, document.querySelector(".js-navbar-scroll:not(.l-navbar--open)") && (e > BP.position && BP.position > -1 ? document.querySelector(".js-navbar-scroll").classList.add("l-navbar--hide") : document.querySelector(".js-navbar-scroll").classList.remove("l-navbar--hide"), e > 200 ? document.querySelector(".js-navbar-scroll").classList.add("l-navbar--white") : document.querySelector(".js-navbar-scroll").classList.remove("l-navbar--white")), BP.position = e)
}, BP.utils.opacityScroll = function() {
    var e = $(".bg-video__main--fixed"),
        t = BP.utils._screenSize().y / 2;
    window.addEventListener("scroll", function() {
        var n = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
            i = e.outerHeight(),
            r = i / 2,
            o = 1 - (n - r + t) / t;
        e.css({ opacity: o }), o > "1" ? e.css({ opacity: 1 }) : o < "0" && e.css({ opacity: 0 })
    })
}, BP.readingTime = function() {
    var e = ".js-count-read-time",
        t = document.querySelector(e);
    if (t) {
        var n = document.querySelector(e + " .js-reading-time-output");
        $(t).readingTime({ readingTimeTarget: n, lang: "en" })
    }
}, BP.caseStudies = function() {
    document.querySelector(".js-case-study") && $(".js-case-study").each(function() {
        var e = $(this),
            t = $(this).find(".js-case-study-layer"),
            n = $(window).width(),
            i = $(window).height();
        $(window).on("mousemove", function(r) {
            var o = .5 - r.pageX / n,
                s = .5 - r.pageY / i,
                a = e.data("offset"),
                l = "translateY(" + -o * a + "px) rotateX(" + -s * a + "deg) rotateY(" + o * (2 * a) + "deg)";
            e.css("transform", l), t.each(function() {
                var e = $(this),
                    t = e.data("offset") || 0,
                    n = "translateX(" + o * t + "px) translateY(" + s * t + "px)";
                e.css("transform", n)
            })
        })
    })
}, BP.slideshow = {
    macbook: function() {
        var e = { loop: !0, margin: 0, nav: !1, dots: !1, autoplay: !0, autoplayTimeout: 3e3, items: 1, animateOut: "fadeOut" };
        $(".js-macbook-slideshow").length && $(".js-macbook-slideshow").owlCarousel(e)
    },
    imac: function() {},
    init: function() { BP.slideshow.macbook() }
}, BP.mobileViews = {
    closeCoverOnMobileView: function(e) {
        var t = void 0;
        t = $(e).hasClass("mobile-view__cta") || $(e).hasClass("mobile-view__scroll") ? $(e).closest(".mobile-view--cover") : e, t.removeClass("mobile-view--disabled")
    },
    init: function() {
        if (document.querySelector(".js-mobile-views"))
            if (BP.utils.isTouchDevice()) $(".mobile-view").addClass("mobile-view--cover").addClass("mobile-view--disabled");
            else {
                var e = document.querySelectorAll(".js-cta-on-non-touch-device");
                [].forEach.call(e, function(e) { $(e).addClass("mobile-view--cover"), new Waypoint({ element: e, handler: function(t) { $(e).addClass("mobile-view--disabled"), "down" !== t || BP.utils.isTouchDevice() || setTimeout(function() { BP.mobileViews.closeCoverOnMobileView($(e)) }, 2e3) }, offset: "65%" }) })
            }
    }
}, BP.logos = function() {
    var e = { loop: !0, margin: 100, nav: !0, dots: !1, autoplay: !0, autoplayTimeout: 3e3, responsive: { 0: { items: 1 }, 568: { items: 2 }, 768: { items: 3 }, 1e3: { items: 4 }, 1500: { items: 5 } } };
    $(".js-logos").length && $(".js-logos").owlCarousel(e)
}, BP.contact = {
    loadScript: function() {
        if (googleMapLoaded) BP.contact.map();
        else {
            var e = document.createElement("script");
            e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBnTa3dLGKB-Qc7isrqN2O4xoqjw5-SuL0&callback=BP.contact.map", document.body.appendChild(e), googleMapLoaded = !0
        }
    },
    map: function() {
        function e() {
            var e;
            e = !BP.utils.isMobile();
            var t = document.querySelectorAll(".js-map");
            [].forEach.call(t, function(t) {
                var n = t.getAttribute("data-latitude"),
                    i = t.getAttribute("data-longitude"),
                    r = { zoom: 16, center: new google.maps.LatLng(n + 5, i), scrollwheel: !1, draggable: e, zoomControl: !0, zoomControlOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.RIGHT_TOP }, styles: [{ featureType: "all", elementType: "labels", stylers: [{ visibility: "on" }] }, { featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c4c4c4" }] }, { featureType: "administrative.neighborhood", elementType: "labels.text.fill", stylers: [{ color: "#707070" }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }, { visibility: "on" }] }, { featureType: "poi.business", elementType: "geometry", stylers: [{ visibility: "on" }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#be2026" }, { lightness: "0" }, { visibility: "on" }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ visibility: "off" }] }, { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ visibility: "off" }] }, { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ visibility: "off" }, { hue: "#ff000a" }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] }, { featureType: "road.arterial", elementType: "geometry.fill", stylers: [{ color: "#575757" }] }, { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] }, { featureType: "road.arterial", elementType: "labels.text.stroke", stylers: [{ color: "#2c2c2c" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] }, { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#999999" }] }, { featureType: "road.local", elementType: "labels.text.stroke", stylers: [{ saturation: "-52" }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] }] },
                    o = t,
                    s = new google.maps.Map(o, r),
                    a = staticFolder + "/map-marker.png";
                new google.maps.Marker({ position: s.getCenter(), icon: a, map: s, animation: google.maps.Animation.DROP, url: "http://maps.google.com/?q=" + n + "," + i });
                google.maps.event.addDomListener(window, "resize", function() {
                    var e = s.getCenter();
                    google.maps.event.trigger(s, "resize"), s.setCenter(e)
                })
            })
        }
        e()
    },
    switchMap: function(e, t) {
        var n = document.querySelectorAll(".map-switch__link");
        t ? document.querySelector(".map-wrapper").classList.add("map-wrapper--move") : document.querySelector(".map-wrapper").classList.remove("map-wrapper--move"), [].forEach.call(n, function(e) { e.classList.remove("map-switch__link--active") }), e.classList.add("map-switch__link--active")
    }
}, window.onload = function() { BP.utils.navbarPosition() };
var FadeTransition = Barba.BaseTransition.extend({
    start: function() { Promise.all([this.fadeOut(), this.newContainerLoading]).then(this.fadeIn.bind(this)) },
    fadeOut: function() {
        var e = this,
            t = new jQuery.Deferred,
            n = !1,
            i = 0;
        return document.querySelector(".js-burger").classList.contains("burger--open") && (document.querySelector(".js-burger").click(), n = !0), BP.utils._screenSize().x > 577 && n && (i = 500), setTimeout(function() { t.resolve() }, i), t.promise().then(function() { return $(e.oldContainer).animate({ opacity: 0 }, 400).promise() })
    },
    fadeIn: function() {
        function e() { $(".owl-loaded").length && ($(".owl-loaded").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"), $(".owl-loaded").find(".owl-stage-outer").children().unwrap()) } $(window).scrollTop(0), e();
        var t = this,
            n = $(this.newContainer);
        $(this.oldContainer).hide(), n.css({ visibility: "visible", opacity: 0 }), n.animate({ opacity: 1 }, 200, function() { t.done() })
    }
});
Barba.Pjax.getTransition = function() { return FadeTransition }, Barba.Dispatcher.on("transitionCompleted", function(e, t) { runWebsiteScripts() }), Barba.Dispatcher.on("newPageReady", function(e, t, n) { history.scrollRestoration = "manual", trackPageGTM() }), $(document).ready(function() { Barba.Pjax.start(), Barba.Pjax.getTransition(), Barba.Prefetch.init() }), window.addEventListener("scroll", function() { BP.utils.navbarPosition() }, !1), window.addEventListener("resize", function() { setTimeout(function() { BP.utils.videoFit(), Waypoint.refreshAll() }, 80) }, !1);
//# sourceMappingURL=main.min.js.map