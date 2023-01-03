module.exports = {
  root: true,
  /**
   * https://stackoverflow.com/a/70421220
   */
  extends: ["next/babel", "custom-next"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
