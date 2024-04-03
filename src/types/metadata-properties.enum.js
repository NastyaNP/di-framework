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
    }, t: {} };
export var TypescriptMetadataProperties;
(function (TypescriptMetadataProperties) {
    TypescriptMetadataProperties["DESIGN_TYPE"] = "design:type";
    TypescriptMetadataProperties["DESIGN_RETURN_TYPE"] = "design:returntype";
    TypescriptMetadataProperties["DESIGN_PARAM_TYPES"] = "design:paramtypes";
})(TypescriptMetadataProperties || (TypescriptMetadataProperties = {}));
(t => __RΦ.t[130] = { TΦ: "e", e: t })(TypescriptMetadataProperties);
export var ITMetadataProperties;
(function (ITMetadataProperties) {
    ITMetadataProperties["IMPLEMENTS"] = "it::implements";
    ITMetadataProperties["INTERFACE_TYPE"] = "it::interface-type";
    ITMetadataProperties["INTERFACE_PARAMS"] = "it::interface-params";
})(ITMetadataProperties || (ITMetadataProperties = {}));
(t => __RΦ.t[232] = { TΦ: "e", e: t })(ITMetadataProperties);
