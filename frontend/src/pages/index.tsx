import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Home } from '../pages-templates/Home'
export default function Index() {
    return <Home />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //getAPIClient
    const { 'instagram-token': token } = parseCookies(ctx)
    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}
