/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-25 14:23:49
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-26 12:12:11
 */
// import typescript from "@rollup/plugin-typescript";
import typescript from "rollup-plugin-typescript2";
import resolveNode from "@rollup/plugin-node-resolve";
import { resolve } from "path";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
const globals = require("rollup-plugin-node-globals");
export default {
  input: resolve() + "/index.ts",
  output: {
    name: "Api",
    file: `dist/js/ajax.iife.js`,
    format: "iife"
  },
  plugins: [
    resolveNode({ mainFields: ["module", "main", "browser"] }),
    commonjs({
      browser: true
    }),
    babel({
      exclude: ["node_modules/**"],
      runtimeHelpers: true
    }),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require("typescript"),
      clean: true,
      check: false, // 是否检查代码
      verbosity: 0
    })
  ],
  onwarn: function(warning) {
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }
    // console.error(warning.message);
  }
};
