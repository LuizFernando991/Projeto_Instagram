import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'instagram-token': token } = parseCookies()

export const api = axios.create({
    baseURL: `http://localhost:5050`,
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}
