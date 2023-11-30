import { API_URL } from './env'

class Http {
  async baseRequest(obj) {
    const [_, res] = await uni.request(obj)
    const { statusCode, data } = res
    const code = data.code // 后端返回的 code
    if(statusCode === 200) {
      return data
    } else {

    }
  }

  get(url, params, config={}) {
    return this.baseRequest({
      url: `${API_URL}${url}`,
      data: params,
      method: 'GET',
      ...config
    })
  }

  post(url, data, config={}) {
    return this.baseRequest({
      url: `${API_URL}${url}`,
      data,
      method: 'POST',
      ...config
    })
  }

  put(url, data, config={}) {
    return this.baseRequest({
      url: `${API_URL}${url}`,
      data,
      method: 'PUT',
      ...config
    })
  }

  delete(url, data, config={}) {
    return this.baseRequest({
      url: `${API_URL}${url}`,
      data,
      method: 'DELETE',
      ...config
    })
  }
}

export const http = new Http()
