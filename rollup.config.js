import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

/**
 * Rollup configuration for building the src.
 * 
 * This config is an array of two objects:
 * 1. Builds the JavaScript output (CJS and ESM) with source maps.
 * 2. Generates TypeScript declaration files (.d.ts) for all modules.
 */
export default [
    {
        /** 
         * Input entry point for the src.
         * Rollup starts building dependency graph from here.
         */
        input: "src/index.ts",

        /**
         * Output configuration.
         * We generate two module formats: CommonJS and ES Module.
         */
        output: [
            {
                // --- CommonJS Output ---
                dir: "dist", // Output folder
                format: "cjs", // CommonJS module format
                sourcemap: true, // Generate source maps for debugging
                preserveModules: true, // Preserve original folder structure for each module
                preserveModulesRoot: "src", // Root to preserve structure from
                entryFileNames: "[name].js", // Name pattern for entry files
                chunkFileNames: "chunks/[name]-[hash].js", // Name pattern for code-split chunks
            },
            {
                // --- ES Module Output ---
                dir: "dist",
                format: "esm", // ES Module format
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: "[name].mjs", // Use .mjs extension for ESM
                chunkFileNames: "chunks/[name]-[hash].mjs",
            },
        ],

        /**
         * Plugins to transform and enhance the build.
         */
        plugins: [
            peerDepsExternal(), // Treat peer dependencies (like react) as external
            resolve(), // Resolve Node modules
            commonjs(), // Convert CommonJS modules to ES6
            typescript({
                tsconfig: "./tsconfig.json", // Path to TS config
                compilerOptions: { declaration: false }, // Disable declaration output; handled by dts plugin
            }),
            terser(), // Minify JS for smaller file size
        ],

        /**
         * External modules that should not be bundled.
         * Typically peer dependencies, like React.
         */
        external: ["react", "react-dom"],
    },
    {
        /**
         * Generate TypeScript declaration files (.d.ts).
         * 
         * We mirror the module structure in dist with .d.ts files for
         * type-safe imports when using TypeScript consumers.
         */
        input: "src/index.ts",
        output: [
            {
                dir: "dist",
                preserveModules: true, // Preserve folder structure
                preserveModulesRoot: "src", // Root folder to preserve
                entryFileNames: "[name].d.ts", // Output declaration files
            },
        ],
        plugins: [dts.default()], // Plugin that generates .d.ts files
    },
];
