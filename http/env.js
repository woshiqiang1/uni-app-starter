const ENV_CONFIG = {
  dev: {
    API_URL: 'https://test.com'
  },

  test: {
    API_URL: ''
  },

  pre: {
    API_URL: ''
  },

  prod: {
    API_URL: ''
  }
}

const ENV = 'dev'

export const API_URL = ENV_CONFIG[ENV].API_URL
