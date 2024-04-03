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
    }, t: { [846]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6Node") }, [21]: { LΦ: t => Boolean }, [1580]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6ClassDeclaration") }, [1621]: { RΦ: t => ({ TΦ: "[", e: __RΦ.a(14) }) }, [14]: { LΦ: t => String } } };
import * as ts from "typescript";
import * as LΦ_0 from "typescript";
export function isImplementsClause(node) {
    return ts.isHeritageClause(node) && node.token === ts.SyntaxKind.ImplementsKeyword;
}
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(846), b: void 0, v: null }])(isImplementsClause);
__RΦ.m("rt:f", "F")(isImplementsClause);
__RΦ.m("rt:t", () => __RΦ.a(21))(isImplementsClause);
export function getImplementedInterfaces(node) {
    const implementsClause = node.heritageClauses?.find(__RΦ.f((node) => isImplementsClause(node), [__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(846), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(21))], ""));
    return implementsClause?.types.map(__RΦ.f((node) => node.getText(), [__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(846), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(14))], "")) ?? [];
}
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(1580), b: void 0, v: null }])(getImplementedInterfaces);
__RΦ.m("rt:f", "F")(getImplementedInterfaces);
__RΦ.m("rt:t", () => __RΦ.a(1621))(getImplementedInterfaces);
