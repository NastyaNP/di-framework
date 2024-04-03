import ts from "typescript";
import { isObject } from "../../../types/guards";


export function Visit(kind: ts.SyntaxKind);
export function Visit(kinds: ts.SyntaxKind[]);
export function Visit(kinds: ts.SyntaxKind | ts.SyntaxKind[]) {
    if (!Array.isArray(kinds)) {
        kinds = [kinds];
    }

    return <T extends object>(target: T, propertyKey: PropertyKey) => {
        if (isObject(target[propertyKey])) {
            target[propertyKey].kinds = kinds;
        }
    };
}


export class VisitorBase {
    constructor(
        protected readonly context: ts.TransformationContext,
    ) {

    }

    private readonly visitationMap = this.createVisitationMap();


    public visitNode<T extends ts.Node>(node: T): T | undefined {
        const visitor = this.createVisitor<T>();
        return ts.visitNode(node, visitor, (newNode): newNode is T => newNode.kind === node.kind);
    }

    public visitEachChild<T extends ts.Node>(node: T): T {
        const visitor = this.createVisitor<ts.Node>();
        return ts.visitEachChild(node, visitor, this.context);
    }

    private createVisitationMap(): Map<ts.SyntaxKind, Array<<T extends ts.Node>(node: T) => T>> {
        const visitationMap = new Map<ts.SyntaxKind, Array<<T extends ts.Node>(node: T) => T>>();
        const methodNames: string[] = Object.getOwnPropertyNames(this.constructor.prototype)
            .filter((propertyName: string) => typeof this.constructor.prototype[propertyName] === "function");

        for (const methodName of methodNames) {
            const kinds = this.constructor.prototype[methodName].kinds ?? [];
            for (const kind of kinds) {
                const receivers = visitationMap.get(kind) ?? [];
                receivers.push(this.constructor.prototype[methodName]);
                visitationMap.set(kind, receivers);
            }
        }

        return visitationMap;
    }

    private createVisitor<T extends ts.Node, R extends ts.Node = T>(): ts.Visitor<T, R | undefined> {
        const visitor = <T extends ts.Node>(node: T | undefined) => {
            if (!node) {
                return node;
            }

            const kindReceivers = this.visitationMap.get(node.kind) ?? [];
            const tokenReceivers = this.visitationMap.get(node["token"]) ?? [];
            const receivers = [...kindReceivers, ...tokenReceivers];

            return receivers.length === 0
                ? ts.visitEachChild(node, visitor, this.context)
                : receivers.reduce((node: T, receiver: (node: T) => T) => receiver(node), node);
        };

        return visitor;
    }

}
