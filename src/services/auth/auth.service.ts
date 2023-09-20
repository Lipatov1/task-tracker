import { getAuthUrl } from '../../configs/api.config'
import { IAuthResponse } from '../../store/user/user.types'
import { TOKEN } from '../../api/api.constants'
import { $axios } from '../../api/api'
import Cookies from 'js-cookie'

export const AuthService = {
  async register(email: string, password: string) {
    const response = await $axios.post<IAuthResponse>(getAuthUrl('/register'), {
      email,
      password,
    })

    if (response.data.token) {
      Cookies.set(TOKEN, response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response
  },

  async login(email: string, password: string) {
    const response = await $axios.post<IAuthResponse>(getAuthUrl('/login'), {
      email,
      password,
    })

    if (response.data.token) {
      Cookies.set(TOKEN, response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response
  },

  logout() {
    Cookies.remove(TOKEN)
    localStorage.removeItem('user')
  },
}
