module.exports = {
  env: {
    node: true
  },
  globals: {
    uni: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/comment-directive': 0,
    'no-unused-vars': 1
  }
}
