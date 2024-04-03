/// <reference types="reflect-metadata" />
import type * as ts from "typescript";
import type { TransformerExtras, PluginConfig } from "ts-patch";

function transformer(program: ts.Program, pluginConfig: PluginConfig, { ts: typescript }: TransformerExtras): ts.TransformerFactory<ts.SourceFile> {
    let compilerOptions = program.getCompilerOptions();
    console.log("hello");
    // console.log(JSON.stringify(compilerOptions, undefined, 2));

    const interfaceTransformer: ts.TransformerFactory<ts.SourceFile> = (context: ts.TransformationContext) => {
        return (sourceFile: ts.SourceFile) => {
            // console.log("sourceFile", sourceFile.getText());
            // let showNextNodes = 0;

            const visitor = <T extends ts.Node>(node: T): T => {

                if (typescript.isClassDeclaration(node)) {

                }

                return typescript.visitEachChild(node, visitor, context);
            };

            return typescript.visitNode(sourceFile, visitor) as ts.SourceFile;
        };
    };


    return interfaceTransformer;
}

export default transformer;
