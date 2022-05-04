import { useUserStore } from './store'

const api = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  jwt: string | null,
  updateJwt: (jwt: string) => void,
  payload?: any
) =>
  fetch(`/api${url}`, {
    method,
    body: payload ? JSON.stringify(payload) : undefined,
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwt ? `Bearer ${jwt}` : '',
    },
  }).then((response: Response) => {
    const newJwt = response.headers.get('jwt')

    if (newJwt) {
      updateJwt(newJwt)
    }

    return response
      .json()
      .then((payload) => (response.ok ? payload : Promise.reject(payload)))
  })

export const useApi = () => {
  const { jwt, setJwt } = useUserStore()

  return {
    get: (url: string) => api(url, 'GET', jwt, setJwt),
    post: (url: string, payload: any) => api(url, 'POST', jwt, setJwt, payload),
    put: (url: string, payload: any) => api(url, 'PUT', jwt, setJwt, payload),
    delete: (url: string) => api(url, 'DELETE', jwt, setJwt),
  }
}
