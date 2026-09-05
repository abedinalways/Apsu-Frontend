import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// Next.js + React rules (@next/next/*, react/*, react-hooks/*, jsx-a11y...)
const nextRules = [
  ...nextCoreWebVitals,
  {
    rules: {
      // react-hooks/set-state-in-effect is a new React Compiler–era rule
      // (eslint-plugin-react-hooks v6, shipped via eslint-config-next 16).
      // It flags long-standing patterns (e.g. hydrating state from sync
      // sources in a mount effect) that are safe in this codebase. Downgraded
      // to a warning so @next/next and core react rules still run as errors;
      // migrating these hooks is tracked as tech debt.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "public/**",
      ".yarn/**",
      "next-env.d.ts",
      "tsconfig.tsbuildinfo",
    ],
  },

  // Next.js + React rules (@next/next/*, react/*, react-hooks/*, jsx-a11y...)
  ...nextRules,

  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        IntersectionObserver: "readonly",
        Notification: "readonly",
        alert: "readonly",
        Buffer: "readonly",
        btoa: "readonly",
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        globalThis: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrors: "none",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
