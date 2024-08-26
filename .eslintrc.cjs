module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime", // Ensures compatibility with the new JSX Transform
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { tsx: true } },
    settings: { react: { version: "detect" } }, // Use "detect" to automatically detect React version
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off", // Disable prop-types rule as TypeScript is being used
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": ["off", { allowConstantExport: true }],
        "no-extra-boolean-cast": "error", // Ensure no unnecessary boolean casting
        "react/react-in-jsx-scope": "off",
    },
};
