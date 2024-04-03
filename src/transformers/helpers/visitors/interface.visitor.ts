import { Visit, VisitorBase } from "./visitor.base";
import ts from "typescript";
import { getImplementedInterfaces } from "../../implements.helper";
import { ITMetadataProperties } from "../../../types";

export class InterfaceVisitor extends VisitorBase {

    @Visit(ts.SyntaxKind.InterfaceDeclaration)
    public interfaceDeclarationVisitor(node: ts.InterfaceDeclaration) {

    }

    @Visit(ts.SyntaxKind.ClassDeclaration)
    public classDeclarationVisitor(node: ts.ClassDeclaration) {
        const hasName = node.name && ts.isIdentifier(node.name);
        const className = hasName ? node.getText() : "";
        const implementedInterfaces = getImplementedInterfaces(node);
    }

    @Visit(ts.SyntaxKind.MethodDeclaration)
    public methodDeclarationVisitor(node: ts.MethodDeclaration) {

    }

    @Visit(ts.SyntaxKind.PropertyDeclaration)
    public propertyDeclarationVisitor(node: ts.PropertyDeclaration) {

    }

    @Visit(ts.SyntaxKind.SetAccessor)
    public setterVisitor(node: ts.SetAccessorDeclaration) {

    }


}
