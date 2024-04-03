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
    }, t: { [1574]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6InterfaceDeclaration") }, [23]: { RΦ: t => ({ TΦ: "V" }) }, [1580]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6ClassDeclaration") }, [2339]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6MethodDeclaration") }, [2344]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6PropertyDeclaration") }, [2345]: { LΦ: t => __RΦ.oe(LΦ_0, "I\u03A6SetAccessorDeclaration") } } };
import { Visit, VisitorBase } from "./visitor.base";
import ts from "typescript";
import { getImplementedInterfaces } from "../../implements.helper";
import * as LΦ_0 from "typescript";
export class InterfaceVisitor extends VisitorBase {
    interfaceDeclarationVisitor(node) {
    }
    classDeclarationVisitor(node) {
        console.log(node);
        const hasName = node.name && ts.isIdentifier(node.name);
        const className = hasName ? node.getText() : "";
        const implementedInterfaces = getImplementedInterfaces(node);
    }
    methodDeclarationVisitor(node) {
    }
    propertyDeclarationVisitor(node) {
    }
    setterVisitor(node) {
    }
}
__decorate([
    Visit(ts.SyntaxKind.InterfaceDeclaration),
    __RΦ.m("design:type", Function),
    __RΦ.m("design:returntype", void 0)
], InterfaceVisitor.prototype, "interfaceDeclarationVisitor", null);
__decorate([
    Visit(ts.SyntaxKind.ClassDeclaration),
    __RΦ.m("design:type", Function),
    __RΦ.m("design:returntype", void 0)
], InterfaceVisitor.prototype, "classDeclarationVisitor", null);
__decorate([
    Visit(ts.SyntaxKind.MethodDeclaration),
    __RΦ.m("design:type", Function),
    __RΦ.m("design:returntype", void 0)
], InterfaceVisitor.prototype, "methodDeclarationVisitor", null);
__decorate([
    Visit(ts.SyntaxKind.PropertyDeclaration),
    __RΦ.m("design:type", Function),
    __RΦ.m("design:returntype", void 0)
], InterfaceVisitor.prototype, "propertyDeclarationVisitor", null);
__decorate([
    Visit(ts.SyntaxKind.SetAccessor),
    __RΦ.m("design:type", Function),
    __RΦ.m("design:returntype", void 0)
], InterfaceVisitor.prototype, "setterVisitor", null);
(t => __RΦ.t[2324] = t)(InterfaceVisitor);
__RΦ.m("rt:SP", [])(InterfaceVisitor);
__RΦ.m("rt:P", [])(InterfaceVisitor);
__RΦ.m("rt:Sm", [])(InterfaceVisitor);
__RΦ.m("rt:m", ["interfaceDeclarationVisitor", "classDeclarationVisitor", "methodDeclarationVisitor", "propertyDeclarationVisitor", "setterVisitor"])(InterfaceVisitor);
__RΦ.m("rt:f", "Ce")(InterfaceVisitor);
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype["interfaceDeclarationVisitor"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(InterfaceVisitor.prototype, "interfaceDeclarationVisitor");
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(1574), b: void 0, v: null }])(InterfaceVisitor.prototype, "interfaceDeclarationVisitor");
__RΦ.m("design:paramtypes", [Object])(InterfaceVisitor.prototype, "interfaceDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype, "interfaceDeclarationVisitor");
__RΦ.m("rt:t", () => __RΦ.a(23))(InterfaceVisitor.prototype, "interfaceDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype["classDeclarationVisitor"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(InterfaceVisitor.prototype, "classDeclarationVisitor");
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(1580), b: void 0, v: null }])(InterfaceVisitor.prototype, "classDeclarationVisitor");
__RΦ.m("design:paramtypes", [Object])(InterfaceVisitor.prototype, "classDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype, "classDeclarationVisitor");
__RΦ.m("rt:t", () => __RΦ.a(23))(InterfaceVisitor.prototype, "classDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype["methodDeclarationVisitor"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(InterfaceVisitor.prototype, "methodDeclarationVisitor");
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(2339), b: void 0, v: null }])(InterfaceVisitor.prototype, "methodDeclarationVisitor");
__RΦ.m("design:paramtypes", [Object])(InterfaceVisitor.prototype, "methodDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype, "methodDeclarationVisitor");
__RΦ.m("rt:t", () => __RΦ.a(23))(InterfaceVisitor.prototype, "methodDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype["propertyDeclarationVisitor"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(InterfaceVisitor.prototype, "propertyDeclarationVisitor");
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(2344), b: void 0, v: null }])(InterfaceVisitor.prototype, "propertyDeclarationVisitor");
__RΦ.m("design:paramtypes", [Object])(InterfaceVisitor.prototype, "propertyDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype, "propertyDeclarationVisitor");
__RΦ.m("rt:t", () => __RΦ.a(23))(InterfaceVisitor.prototype, "propertyDeclarationVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype["setterVisitor"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(InterfaceVisitor.prototype, "setterVisitor");
__RΦ.m("rt:p", [{ n: "node", t: () => __RΦ.a(2345), b: void 0, v: null }])(InterfaceVisitor.prototype, "setterVisitor");
__RΦ.m("design:paramtypes", [Object])(InterfaceVisitor.prototype, "setterVisitor");
__RΦ.m("rt:f", "M$.")(InterfaceVisitor.prototype, "setterVisitor");
__RΦ.m("rt:t", () => __RΦ.a(23))(InterfaceVisitor.prototype, "setterVisitor");
