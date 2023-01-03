/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-key": "off",
  },
};
