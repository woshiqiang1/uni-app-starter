module.exports = {
  env: {
    node: true,
    es6: true
  },
  globals: {
    uni: true,
    requirePlugin: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/comment-directive': 0,
    'no-unused-vars': 1
  }
}
