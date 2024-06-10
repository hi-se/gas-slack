import presetEnv from "@babel/preset-env";
import presetTypescript from "@babel/preset-typescript";
import transformRuntime from "@babel/plugin-transform-runtime";

export default {
  presets: [
    [
      presetEnv,
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    [presetTypescript],
  ],
  plugins: [transformRuntime],
};
