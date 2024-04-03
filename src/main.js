var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    }, t: { [15]: { LΦ: t => Number }, [132]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6ITest") }, [23]: { RΦ: t => ({ TΦ: "V" }) }, [238]: { TΦ: "5", name: "Test" } } };
import "./style.css";
import "reflect-metadata";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { Autowired, Injectable } from "./decorators";
import { ITMetadataProperties } from "./types";
import * as LΦ_0 from "./interfaces/test";
let Test = class Test {
    constructor(a) {
        Object.defineProperty(this, "a", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: a
        });
    }
    test() {
        throw new Error("Method not implemented.");
    }
    logger() {
        console.log(this.a);
    }
};
__decorate([
    Autowired(),
    __RΦ.m("design:type", Function),
    __RΦ.m("design:returntype", void 0)
], Test.prototype, "test", null);
Test = __decorate([
    Injectable(),
    Reflect.metadata(ITMetadataProperties.IMPLEMENTS, [Symbol("ITest")])
], Test);
(t => __RΦ.t[238] = t)(Test);
__RΦ.m("rt:SP", [])(Test);
__RΦ.m("rt:P", ["a"])(Test);
__RΦ.m("rt:Sm", [])(Test);
__RΦ.m("rt:m", ["test", "logger"])(Test);
__RΦ.m("rt:p", [{ n: "a", t: () => __RΦ.a(15), b: void 0, v: null, f: "#R" }])(Test);
__RΦ.m("design:paramtypes", [Number])(Test);
__RΦ.m("rt:i", [() => __RΦ.a(132)])(Test);
__RΦ.m("rt:f", "C")(Test);
__RΦ.m("rt:f", "M")(Test.prototype["test"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(Test.prototype, "test");
__RΦ.m("rt:p", [])(Test.prototype, "test");
__RΦ.m("design:paramtypes", [])(Test.prototype, "test");
__RΦ.m("rt:f", "M")(Test.prototype, "test");
__RΦ.m("rt:t", () => __RΦ.a(23))(Test.prototype, "test");
__RΦ.m("rt:f", "M.")(Test.prototype["logger"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(Test.prototype, "logger");
__RΦ.m("rt:p", [])(Test.prototype, "logger");
__RΦ.m("rt:f", "M.")(Test.prototype, "logger");
__RΦ.m("rt:t", () => __RΦ.a(23))(Test.prototype, "logger");
Reflect.defineMetadata(ITMetadataProperties.IMPLEMENTS, [Symbol("ITest")], Test.prototype, "test");
let TestDependencyInjection = class TestDependencyInjection {
    constructor() {
        Object.defineProperty(this, "property", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    logProperty() {
        console.log({ property: this.property });
    }
};
__decorate([
    Autowired(),
    __RΦ.m("design:type", Test)
], TestDependencyInjection.prototype, "property", void 0);
TestDependencyInjection = __decorate([
    Injectable()
], TestDependencyInjection);
(t => __RΦ.t[289] = t)(TestDependencyInjection);
__RΦ.m("rt:SP", [])(TestDependencyInjection);
__RΦ.m("rt:P", ["property"])(TestDependencyInjection);
__RΦ.m("rt:Sm", [])(TestDependencyInjection);
__RΦ.m("rt:m", ["logProperty"])(TestDependencyInjection);
__RΦ.m("rt:f", "C")(TestDependencyInjection);
__RΦ.m("rt:t", () => __RΦ.a(238))(TestDependencyInjection.prototype, "property");
__RΦ.m("rt:f", "P#R")(TestDependencyInjection.prototype, "property");
__RΦ.m("rt:f", "M.")(TestDependencyInjection.prototype["logProperty"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(TestDependencyInjection.prototype, "logProperty");
__RΦ.m("rt:p", [])(TestDependencyInjection.prototype, "logProperty");
__RΦ.m("rt:f", "M.")(TestDependencyInjection.prototype, "logProperty");
__RΦ.m("rt:t", () => __RΦ.a(23))(TestDependencyInjection.prototype, "logProperty");
const testDIObject = new TestDependencyInjection();
console.log({ testDIObject });
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`;
