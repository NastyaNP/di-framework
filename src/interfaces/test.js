const __RΦ = { m: (k, v) => (t, ...a) => t && Reflect.metadata ? Reflect.metadata(k, v)(t, ...a) : void 0, f: (f, d, n) => (d.forEach(d => d(f)), Object.defineProperty(f, "name", { value: n, writable: false }), f), c: (c, d, dp, dsp, n) => (d.forEach(d => d(c)), dp.forEach(([p, d]) => d(c.prototype, p)), dsp.forEach(([p, d]) => d(c, p)), n ? Object.defineProperty(c, "name", { value: n, writable: false }) : undefined, c), r: (o, a) => (Object.assign(o, a)), a: id => {
        let t = __RΦ.t[id];
        if (t === void 0)
            return void 0;
        if (t.RΦ) {
            let r = t.RΦ;
            delete t.RΦ;
            __RΦ.r(t, r(t));
        }
        else if (t.LΦ) {
            let l = t.LΦ();
            delete t.LΦ;
            __RΦ.t[id] = t = l;
        }
        return t;
    }, oe: (o, k) => {
        try {
            return o[k];
        }
        catch (e) {
            return undefined;
        }
    }, t: { [23]: { RΦ: t => ({ TΦ: "V" }) } } };
var IΦITest = { name: "ITest", prototype: {}, identity: Symbol("ITest (interface)") };
export { IΦITest };
(t => __RΦ.t[132] = t)(IΦITest);
__RΦ.m("rt:P", [])(IΦITest);
__RΦ.m("rt:m", ["test"])(IΦITest);
__RΦ.m("rt:f", "Ie")(IΦITest);
__RΦ.m("rt:p", [])(IΦITest.prototype, "test");
__RΦ.m("rt:f", "M")(IΦITest.prototype, "test");
__RΦ.m("rt:t", () => __RΦ.a(23))(IΦITest.prototype, "test");