import { API_URL } from '../configs/api.config'
import { TOKEN } from './api.constants'
import Cookies from 'js-cookie'
import axios from 'axios'

export const $axios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : '',
  },
})
