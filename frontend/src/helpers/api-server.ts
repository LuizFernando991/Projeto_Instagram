import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { ParsedUrlQuery } from 'querystring'

export function getAPIClient(ctx?: GetServerSidePropsContext<ParsedUrlQuery>) {
    const { 'instagram-token': token } = parseCookies(ctx)

    const api = axios.create({
        baseURL: `http://localhost:5050`,
    })

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }
    return api
}
