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
    }, t: { [113]: { RΦ: t => ({ TΦ: "F", r: __RΦ.a(23), p: [{ n: "target", t: () => __RΦ.a(114), b: void 0, v: null }, { n: "property", t: () => __RΦ.a(115), b: void 0, v: null }], f: "" }) }, [23]: { RΦ: t => ({ TΦ: "V" }) }, [114]: { LΦ: t => Object }, [115]: { RΦ: t => ({ TΦ: "|", t: [__RΦ.a(14), __RΦ.a(22)] }) }, [14]: { LΦ: t => String }, [22]: { LΦ: t => Object } } };
import { TypescriptMetadataProperties } from "../types";
export function Autowired() {
    return __RΦ.f(function (target, property) {
        console.log("Autowired", {
            target,
            property,
            metadataKeys: Reflect.getMetadataKeys(target, property),
            type: Reflect.getMetadata(TypescriptMetadataProperties.DESIGN_TYPE, target, property)
        });
    }, [__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(114), b: void 0, v: null }, { n: "property", t: () => __RΦ.a(115), b: void 0, v: null }]), __RΦ.m("rt:f", "M."), __RΦ.m("rt:t", () => __RΦ.a(23))], "");
}
__RΦ.m("rt:p", [])(Autowired);
__RΦ.m("rt:f", "F")(Autowired);
__RΦ.m("rt:t", () => __RΦ.a(113))(Autowired);
