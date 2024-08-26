### project Guidelines

```bash
npm install
```

-   basically we will manage the project with npm and
    we will follow same structure as we have in the project.

.vscode and .eslintrc

-   we will use eslint for linting and prettier for formatting.

We need eslint and prettier extension in vscode.

-   Install Dev Dependencies for automatic class to className. And Other Hygiene factor

```bash
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

```json
    "devDependencies": {
        "eslint": "^8",
        "eslint-config-next": "14.1.0",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5"
    }
```

-   If You Prefer liniting (We Are Using AirBnb Linting Rules)
-   Create a `.eslintrc.cjs` file in the project root and enter the below contents:

```js
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off",
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": ["off", { allowConstantExport: true }],
    },
};
```
