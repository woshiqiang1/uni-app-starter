import { http } from '../index'

export function getTestParams(data) {
  return http.post('/app/query123', data)
}
