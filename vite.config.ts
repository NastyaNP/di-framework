import ts from "typescript";
import { vitePluginTypescriptTransform } from "vite-plugin-typescript-transform";
import { defineConfig } from "vite";
import tsPatchCompiler from "ts-patch/compiler";
import typescriptRtti from "typescript-rtti/dist/transformer"
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    build: {
        rollupOptions: {
            plugins: [
                typescript({
                    tsconfig: "./tsconfig.json",
                    typescript: tsPatchCompiler,
                    transformers: {
                        before: [
                            // {
                            //     type: 'program',
                            //     factory: (program) => interfaceTransformer(program)
                            // },
                            // {
                            //     type: 'program',
                            //     factory: (program) => typescriptRtti(program)
                            // },
                        ],
                        after: [

                        ]
                    }
                }),
            ]
        }
    },
    plugins: [
        vitePluginTypescriptTransform({
            enforce: 'pre',
            filter: {
                files: {
                    include: /\.ts$/,
                },
            },
            tsconfig: {
                override: {
                    target: ts.ScriptTarget.ESNext,
                },
            },
        }),
    ],
});
