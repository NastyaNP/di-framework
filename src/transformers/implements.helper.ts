import * as ts from "typescript";


export function isImplementsClause(node: ts.Node): node is ts.HeritageClause {
    return ts.isHeritageClause(node) && node.token === ts.SyntaxKind.ImplementsKeyword;
}

export function getImplementedInterfaces(node: ts.ClassDeclaration): string[] {
    const implementsClause = node.heritageClauses?.find((node: ts.Node) => isImplementsClause(node));
    return implementsClause?.types.map((node: ts.Node) => node.getText()) ?? [];
}
