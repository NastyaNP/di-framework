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
    }, t: { [134]: { LΦ: t => Object }, [133]: { RΦ: t => ({ TΦ: "F", r: __RΦ.a(23), p: [{ n: "target", t: () => __RΦ.a(134), b: void 0, v: null }], f: "" }) }, [23]: { RΦ: t => ({ TΦ: "V" }) } } };
import { ITMetadataProperties } from "../types";
import { reflect } from "typescript-rtti";
import { getType } from "tst-reflect";
export function Injectable() {
    return __RΦ.f(function (target) {
        const interfaceType = getType().interface;
        console.log("Injectable", {
            target,
            interfaceType,
            isClass: reflect(void 0, { TΦ: "c", t: void 0, p: [], r: void 0, tp: [__RΦ.a(134)] }).is("class"),
            className: target.name,
            implements: Reflect.getMetadata(ITMetadataProperties.IMPLEMENTS, target),
            metadataKeys: Reflect.getMetadataKeys(target),
        });
    }, [__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(134), b: void 0, v: null }]), __RΦ.m("rt:f", "M."), __RΦ.m("rt:t", () => __RΦ.a(23))], "");
}
__RΦ.m("rt:p", [])(Injectable);
__RΦ.m("rt:f", "F")(Injectable);
__RΦ.m("rt:t", () => __RΦ.a(133))(Injectable);
