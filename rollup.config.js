import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import rollupPluginGas from "rollup-plugin-google-apps-script";

const extensions = [".ts", ".js"];

export default {
  input: "./src/index.ts",
  output: {
    dir: "build",
    format: "cjs",
  },
  onwarn(warning, warn) {
    if (warning.code === "THIS_IS_UNDEFINED") return;
    warn(warning);
  },
  plugins: [
    typescript(),
    babel({
      extensions,
      babelHelpers: "runtime",
    }),
    nodeResolve({
      extensions,
      mainFields: ["module", "main"],
    }),
    rollupPluginGas(),
  ],
};
