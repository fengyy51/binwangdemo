function Vmap(t, e, n, o) {
    function l(t, e, n, l) {
        if (a(vt), Z || (o && o.publicColor ? r(null, o.publicColor) : r(), o && o.fontColor ? i(vt, o.fontColor) : i(vt)), !ft) {
            if (o && o.movex && o.movey) {
                var c = G / K * vt;
                o.movex *= c, o.movey *= c, nt = rt - o.movex, ot = at - o.movey }
            x(), ft = !0 }
        F(vt), J = !0 }

    function i(t, e) { Yt.font = "500 15px Arial,Helvetica,'黑体'", Yt.textAlign = "left", Yt.textBaseline = "top", null !== e && "" !== e ? Yt.fillStyle = e : Yt.fillStyle = "#3E3030";
        var n = null,
            o = null;
        m(), p();
        for (var l in Ct) "1" == Ct[l].show && (n = Ct[l].coord_x * G / K * t, o = Ct[l].coord_y * G / K * t, Yt.save(), Yt.translate(n, o), Yt.rotate(1 * -Math.PI / 180 * pt), Yt.fillText(Ct[l].name, -Ct[l].length / 2, -15), Yt.restore()) }

    function r(t, e, n, o) {
        var l = o || vt,
            i = et,
            r = Q;
        if (t && (kt = t), null === kt && (kt = "all"), "none" !== kt) { e && (i = e), n && (r = n), r *= vt, Yt.font = "normal small-caps lighter " + r + "px VMapPublic", Yt.textBaseline = "top", Yt.lineWidth = .2, Yt.fillStyle = i, Yt.strokeStyle = i;
            for (var a in wt) "all" !== kt && kt !== wt[a].unit_type_eng || wt[a].floor_id !== R || (Yt.fillText(wt[a].font, wt[a].coord_x * G / K * l - Yt.measureText(wt[a].font).width / 2 - 1, wt[a].coord_y * G / K * l - Yt.measureText(wt[a].font).width / 2 - 1), Yt.strokeText(wt[a].font, wt[a].coord_x * G / K * l - Yt.measureText(wt[a].font).width / 2 - 1, wt[a].coord_y * G / K * l - Yt.measureText(wt[a].font).width / 2 - 1)) } }

    function a(e) { Yt.clearRect(0, 0, St.width, St.height), St.width = Pt.width * e, St.height = Pt.height * e, Et.style.width = St.width + "px", Et.style.height = St.height + "px", t.style.height = St.height + "px", t.style.width = St.width + "px", lt = St.width / 2, it = St.height / 2, Yt.drawImage(Pt, 0, 0, Pt.width * e, Pt.height * e) }

    function c(t) {
        if (h(e, t, null), U === !1) return !1;
        if (U = !1, null === t) return !1; "number" == typeof t && (t = q[t].floor_id), J = !1;
        var n = "";
        n = "http://" + N + "/beacon/test!jsonPng?client=824&vkey=FFE58998-B203-B44E-A95B-8CA2D6CBCD65&place=" + e + "&floor=" + t + "&jsoncallback=?", $.getJSON(n, function(e) {
            if (!0 === e.success) {
                for (var n = 0; n < q.length; n++)
                    if (q[n].floor_id == t) { K = q[n].scale;
                        break }
                R = t, Pt.src = e.data, U = !0, null != Ft.onFloorChange && Ft.onFloorChange(), V = !0 } else alert("图片获取失败"), U = !0 }) }

    function s(t, n) { e = t, n || (n = null);
        var o = "";
        o = "http://" + N + "/beacon/place!all_in_one?client=824&&vkey=FFE58998-B203-B44E-A95B-8CA2D6CBCD65&place=" + e + "&jsoncallback=?", $.getJSON(o, function(e) {
            if (!0 === e.success) { L = e.place[0].name;
                var o = null,
                    l = 0;
                for (o in e.map) e.map[o].map_path.indexOf("png-1_1") > -1 && (q[l++] = e.map[o], null === n && ("Floor1" === e.map[o].floor_id ? n = "Floor1" : "Floor0" === e.map[o].floor_id && (n = "Floor0")));
                f(t, "", function() { c(n) }) } else alert("获取楼层数据失败") }) }

    function f(t, e, n) {
        var o = "http://" + N + "/beacon/place!facilities?client=824&vkey=FFE58998-B203-B44E-A95B-8CA2D6CBCD65&place=" + t;
        e && (o += "&floor=" + e), o += "&jsoncallback=?", $.getJSON(o, function(t) {
            return t.success ? (wt = t.rows, void(n && n())) : void alert("公共设施字体获取失败") }) }

    function h(t, e, n) {
        var o = "http://" + N + "/beacon/place!all_spot?place=" + t + "&floor=" + e + "&jsoncallback=?";
        $.getJSON(o, function(t) {
            if (!t.success) return void alert("UnitFont获取失败");
            var e = t.place,
                o = {};
            Ct = [];
            for (var l in e) o = {}, o.name = e[l].name, Yt.font = tt * vt + "px Arial,Helvetica,SimSun,sans-serif", o.length = Yt.measureText(e[l].name).width, o.coord_x = e[l].coord_x, o.coord_y = e[l].coord_y, o.show = 1, Ct.push(o);
            n && n() }) }

    function d(t, e, n, o) {
        var l = G / K * vt,
            i = "http://" + N + "/beacon/position!pos2add?client=824&vkey=FFE58998-B203-B44E-A95B-8CA2D6CBCD65&x=" + n / l + "&y=" + o / l + "&floor=" + e + "&place=" + t + "&jsoncallback=?";
        $.getJSON(i, function(t) {
            var e = {};
            t.success ? (e = t.rows[0], e.message = !0, e.x = n, e.y = o, e.scale = vt) : (e.message = !1, e.x = n, e.y = o, e.scale = vt), unBlockUI(), null != Ft.onMapTap && Ft.onMapTap(e) }) }

    function u() {
        var t = 0;
        return document.documentElement && document.documentElement.scrollTop ? t = document.documentElement.scrollTop : document.body && (t = document.body.scrollTop), t }

    function m() {
        for (var t in Ct) Ct[t].minX = Ct[t].coord_x * G / K * vt - Ct[t].length / 2, Ct[t].maxX = Ct[t].coord_x * G / K * vt + Ct[t].length / 2, Ct[t].minY = Ct[t].coord_y * G / K * vt - tt / 2, Ct[t].maxY = Ct[t].coord_y * G / K * vt + tt / 2 }

    function p() {
        for (var t = Ct.length - 1; t >= 0; t--) { Ct[t].show = 1;
            for (var e = !0, n = t - 1; n >= 0 && (Ct[t].minX >= Ct[n].minX && Ct[t].minX <= Ct[n].maxX && Ct[t].minY >= Ct[n].minY && Ct[t].minY <= Ct[n].maxY && (e = !1, Ct[t].show = 0), Ct[t].minX >= Ct[n].minX && Ct[t].minX <= Ct[n].maxX && Ct[t].maxY >= Ct[n].minY && Ct[t].maxY <= Ct[n].maxY && (e = !1, Ct[t].show = 0), Ct[t].maxX >= Ct[n].minX && Ct[t].maxX <= Ct[n].maxX && Ct[t].minY >= Ct[n].minY && Ct[t].minY <= Ct[n].maxY && (e = !1, Ct[t].show = 0), Ct[t].maxX >= Ct[n].minX && Ct[t].maxX <= Ct[n].maxX && Ct[t].maxY >= Ct[n].minY && Ct[t].maxY <= Ct[n].maxY && (e = !1, Ct[t].show = 0), e); n--); } }

    function x() {
        function t(t) { B.translate = { x: nt + t.deltaX, y: ot + t.deltaY }, y() }

        function n(t) { st = !0, "pinchstart" == t.type ? (ut = vt || 1, a(1), o && o.publicColor ? r(null, o.publicColor, null, 1) : r(null, null, null, 1), o && o.fontColor ? i(1, o.fontColor) : i(1), F(1), null != Ft.onMapPinchEnd && Ft.onMapPinchEnd({ scale: 1, angle: pt }), nt += Et.offsetWidth / 2 * vt - Et.offsetWidth / 2, ot += Et.offsetHeight / 2 * vt - Et.offsetHeight / 2, B = { translate: { x: nt, y: ot }, scale: vt, angle: pt, rx: 0, ry: 0, rz: 1 }) : ut * t.scale > 2.8 ? (B.scale = 2.8, vt = 2.8) : ut * t.scale < .7 ? (B.scale = .7, vt = .7) : (B.scale = ut * t.scale, vt = ut * t.scale), W(), y() }

        function c(t) { blockUI('<h4><img src="./img/busy.gif" /> 正在查询位置信息...</h4>');
            var n = t.center.x - nt,
                o = t.center.y - ot + u(),
                l = Math.PI / 180 * pt,
                i = (n - lt) * Math.cos(l) + (o - it) * Math.sin(l) + lt,
                r = (o - it) * Math.cos(l) - (n - lt) * Math.sin(l) + it;
            dt && D(i, r), d(e, R, i, r) }
        Wt = new Hammer.Manager(St), Wt.add(new Hammer.Pan({ threshold: 0, pointers: 0 })), Wt.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(Wt.get("pan")), Wt.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([Wt.get("pan"), Wt.get("rotate")]), Wt.add(new Hammer.Tap), Wt.on("panstart panmove", t), Wt.on("rotatestart rotatemove", b), Wt.on("pinchstart pinchmove", n), Wt.on("tap", c), Wt.on("hammer.input", function(t) { t.isFirst, t.isFinal && (st ? (st = !1, nt = nt + t.deltaX - (Et.offsetWidth / 2 * vt - Et.offsetWidth / 2), ot = ot + t.deltaY - (Et.offsetHeight / 2 * vt - Et.offsetHeight / 2), B = { translate: { x: nt, y: ot }, scale: 1, angle: pt, rx: 0, ry: 0, rz: 1 }, y(), l(), null != Ft.onMapPinchEnd && Ft.onMapPinchEnd({ scale: vt, angle: pt })) : (nt += t.deltaX, ot += t.deltaY)) }), v() }

    function v() { pt = 0, vt = 1, B = { translate: { x: nt, y: ot }, scale: 1, angle: 0, rx: 0, ry: 0, rz: 0 }, y() }

    function g() {
        var t = ["translate3d(" + B.translate.x + "px, " + B.translate.y + "px, 0)", "scale(" + B.scale + ", " + B.scale + ")", "rotate3d(" + B.rx + "," + B.ry + "," + B.rz + "," + B.angle + "deg)"];
        t = t.join(" "), Et.style.webkitTransform = t, Et.style.mozTransform = t, Et.style.transform = t, ct = !1 }

    function y() { g() }

    function b(t) { "rotatestart" == t.type && (mt = pt || 0), B.rz = 1, B.angle = mt + t.rotation, pt = mt + t.rotation, y() }

    function w() {
        var t = vt;
        return 0 == J ? !1 : (vt += gt, vt > bt ? (vt = t, alert("已经达到默认最大缩放等级"), !1) : (W(), l(), event.preventDefault(), !1)) }

    function C() {
        var t = vt;
        return vt -= gt, yt > vt ? (vt = t, alert("已经达到默认最小缩放等级"), !1) : (W(), l(), event.preventDefault(), !1) }

    function k(t) { Math.abs(t.alpha - xt) > 5 && (xt = t.alpha, B.rz = 1, B.angle = Math.round(t.alpha), pt = Math.round(t.alpha), y(), l()) }

    function M() { window.addEventListener("deviceorientation", k, !1), Wt.off("rotatestart rotatemove") }

    function _() { window.removeEventListener("deviceorientation", k, !1), Wt.on("rotatestart rotatemove", b) }

    function T() {
        return Et.removeChild(St), t.removeChild(Et), !1 }

    function I(t) {
        var e = G / K * vt;
        if ("marker" === t.type()) { Mt[Mt.length] = t;
            var n = t.point();
            $(t.dom).css({ left: n.x * e + "px", top: n.y * e + "px" }), t.floorIndex() !== R && t.hide(), Et.appendChild(t.dom) }
        if ("line" === t.type()) { _t[_t.length] = t;
            var o = t.points();
            if (J === !0) { Yt.beginPath();
                var l = o.length,
                    i = t.color(),
                    r = t.width();
                Yt.lineCap = "round", Yt.lineWidth = r, Yt.strokeStyle = i;
                for (var a = 0; l - 2 >= a; a++) o[a].floorIndex === R && o[a + 1].floorIndex === R && (Yt.moveTo(o[a].x * e, o[a].y * e), Yt.lineTo(o[a + 1].x * e, o[a + 1].y * e));
                Yt.stroke() } }
        if ("circle" === t.type()) { Tt[Tt.length] = t;
            var n = t.point(),
                c = t.radius();
            if (J === !0) { Yt.beginPath();
                var i = t.color(),
                    r = t.width();
                Yt.lineCap = "round", Yt.lineWidth = r, Yt.strokeStyle = i, n.floorIndex === R && (Yt.arc(n.x * e, n.y * e, c * e, 0, 2 * Math.PI), Yt.stroke()) } }
        if ("text" === t.type()) { It[It.length] = t;
            var n = t.point();
            if (J === !0) {
                var s = t.content(),
                    i = t.color(),
                    r = t.lineWidth();
                Yt.lineWidth = r, Yt.fillStyle = i, Yt.textAlign = "center", Yt.textBaseline = "bottom", Yt.font = "italic bold 12px arial", n.floorIndex === R && Yt.fillText(s, n.x * e, n.y * e) } } }

    function F(t) {
        for (var e = G / K * t, n = 0; n < Mt.length; n++) {
            var o = Mt[n],
                l = o.point();
            $(o.dom).css({ left: l.x * e + "px", top: l.y * e + "px" }), o.floorIndex() !== R ? o.hide() : o.show() }
        for (var n = 0; n < _t.length; n++) {
            var i = _t[n].points();
            if (J === !0) { Yt.beginPath();
                var r = i.length,
                    a = _t[n].color(),
                    c = _t[n].width();
                Yt.lineCap = "round", Yt.lineWidth = c, Yt.strokeStyle = a;
                for (var s = 0; r - 2 >= s; s++) i[s].floorIndex === R && i[s + 1].floorIndex === R && (Yt.moveTo(i[s].x * e, i[s].y * e), Yt.lineTo(i[s + 1].x * e, i[s + 1].y * e));
                Yt.stroke() } }
        for (var n = 0; n < Tt.length; n++) {
            var f = Tt[n].point(),
                h = Tt[n].radius();
            if (J === !0) { Yt.beginPath();
                var a = Tt[n].color(),
                    c = Tt[n].width();
                Yt.lineCap = "round", Yt.lineWidth = c, Yt.strokeStyle = a, f.floorIndex === R && (Yt.arc(f.x * e, f.y * e, h * e, 0, 2 * Math.PI), Yt.stroke()) } }
        for (var n = 0; n < It.length; n++) {
            var f = It[n].point();
            if (J === !0) {
                var a = It[n].color(),
                    c = It[n].lineWidth(),
                    d = It[n].content();
                Yt.lineWidth = c, Yt.fillStyle = a, Yt.textAlign = "center", Yt.textBaseline = "bottom", Yt.font = "italic bold 12px arial", f.floorIndex === R && Yt.fillText(d, f.x * e, f.y * e) } } }

    function E() {
        for (var t = 0; t < Mt.length; t++) $(Mt[t].dom).remove();
        Mt = [], _t = [], Tt = [], It = [], Yt.clearRect(0, 0, St.width, St.height), l() }

    function S(t) {
        var e = G / K * vt;
        return { x: t.x / e, y: t.y / e, floorIndex: t.floorIndex } }

    function B(t) {
        var e = G / K * vt;
        return { x: t.x * e, y: t.y * e, floorIndex: t.floorIndex } }

    function X(t) { l(null, t) }

    function Y() {
        return ht = !0, Xt.innerHTML = Math.round(100 / this.getDelta()) + "米", Bt }

    function P() { ht = !1, $("body").find(Bt).remove() }

    function W() { ht && (Xt.innerHTML = Math.round(100 / (G / K * vt)) + "米") }

    function H() {
        for (var t in Mt) Mt[t].enableMarkerClick(e) }

    function A() {
        for (var t in Mt) Mt[t].unableMarkerClick() }

    function D(t, e) { nt = rt - t, ot = at - e, v() }

    function z() { dt = !0 }

    function O() { dt = !1 }

    function j(t) {
        return .03 > t ? (alert("设置的缩放级别过小"), !1) : t > 2.8 ? (alert("设置的缩放级别过大"), !1) : (vt = t, W(), void l()) }
    if (!t || !e || !n || "[object String]" !== Object.prototype.toString.call(e) || "[object String]" !== Object.prototype.toString.call(n)) return void alert("初始化地图构造器参数错误");
    var B, t = t,
        e = e,
        L = null,
        R = null,
        N = "123.57.46.160:8080",
        J = !1,
        U = !0,
        V = !1,
        Z = !1,
        q = [],
        G = 15e4 / 25.4,
        K = null,
        Q = 25,
        tt = 20,
        et = "#372F2C",
        nt = 0,
        ot = 0,
        lt = 0,
        it = 0,
        rt = document.documentElement.clientWidth / 2,
        at = document.documentElement.clientHeight / 2,
        ct = !1,
        st = !1,
        ft = !1,
        ht = !1,
        dt = !1,
        ut = 1,
        mt = 0,
        pt = 0,
        xt = 0,
        vt = 1,
        gt = .03,
        yt = .5,
        bt = 2.8,
        wt = [],
        Ct = [],
        kt = null,
        Mt = [],
        _t = [],
        Tt = [],
        It = [],
        Ft = this;
    t.style.position = "absolute";
    var Et = document.createElement("div");
    Et.style.position = "absolute", Et.id = "floorDiv", Et.style.left = 0, Et.style.top = 0;
    var St = document.createElement("canvas");
    St.style.position = "absolute", St.style.left = "0", St.style.top = "0", St.id = "floorCanvas", t.appendChild(Et), Et.appendChild(St);
    var Bt = document.createElement("div"),
        Xt = document.createElement("div");
    Bt.style.position = "absolute", Bt.style.bottom = "10px", Bt.style.left = "10px", Bt.style.zIndex = "10", Bt.style.top = "auto", Bt.style.right = "auto", Bt.style.width = "100px", Bt.style.height = "4px", Bt.style.textAlign = "center", Bt.style.lineHeight = "18px", Bt.style.borderBottom = "3px solid black", Bt.style.borderLeft = "4px solid black", Bt.style.borderRight = "4px solid black", Xt.style.position = "absolute", Xt.style.bottom = "5px", Xt.style.width = "100%", Bt.appendChild(Xt);
    var Yt = St.getContext("2d"),
        Pt = new Image;
    Pt.onload = l, s(e, n);
    var Wt = null;
    (function() {
        return window[Hammer.prefixed(window, "requestAnimationFrame")] || function(t) { window.setTimeout(t, 1e3 / 60) } })();
    this.prevFloor = function() {
        for (var t = null, e = 0; e < q.length; e++)
            if (q[e].floor_id === R) {
                if (0 === e) return !1;
                t = q[e - 1].floor_id;
                break }
        c(t), v() }, this.nextFloor = function() {
        for (var t = null, e = 0; e < q.length; e++)
            if (q[e].floor_id === R) {
                if (e === q.length - 1) return !1;
                t = q[e + 1].floor_id;
                break }
        c(t), v() }, this.onMapTap = null, this.onMapPinchEnd = null, this.onFloorChange = null, this.zoomIn = w, this.zoomOut = C, this.addOverlay = I, this.clearOverlays = E, this.refreshOverLay = F, this.changeFloor = c, this.changeBuild = s, this.changePublicType = X, this.transform = B, this.getRealPoint = S, this.destory = T, this.enableRotate = M, this.disableRotate = _, this.getScaleCtrl = Y, this.removeScaleCtrl = P, this.enableMarkerClick = H, this.unableMarkerClick = A, this.enableMoveWithTap = z, this.unableMoveWithTap = O, this.setZoomScale = j, this.isLoaded = function() {
        return V }, this.getMallId = function() {
        return e }, this.getMallName = function() {
        return L }, this.getCurrentFloorId = function() {
        return R }, this.getFloors = function() {
        return q }, this.getMaxFloorId = function() {
        return q[q.length - 1].floor_id }, this.getZoomScale = function() {
        return vt }, this.getMapWidth = function() {
        return Pt.width * vt }, this.getDelta = function() {
        return G / K * vt }, this.getFacilities = function() {
        for (var t = [], e = 0; e < wt.length; e++) wt[e].floor_id === R && t.push(wt[e]);
        return t }, this.getDivId = function() {
        return Et.id }, this.getMarkers = function() {
        return Mt } }
