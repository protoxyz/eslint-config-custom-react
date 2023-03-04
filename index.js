module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "turbo",
        "prettier",
    ],

    plugins: ["@typescript-eslint"],

    settings: {
        react: {
            version: "detect",
        },
    },
};
