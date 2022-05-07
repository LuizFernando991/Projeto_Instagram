import { Register } from '../../pages-templates/Register'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'

export default function Index() {
    return <Register />
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
