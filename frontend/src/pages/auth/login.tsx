import { Login } from '../../pages-templates/Login'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'

export default function Index() {
    return <Login />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //getAPIClient
    const { 'instagram-token': token } = parseCookies(ctx)
    if (token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}
