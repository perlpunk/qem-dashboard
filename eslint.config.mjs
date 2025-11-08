import globals from "globals";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      sourceType: "module",
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  eslintPluginVue.configs["flat/strongly-recommended"],
  {
    rules: {
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
    },
  },
];
