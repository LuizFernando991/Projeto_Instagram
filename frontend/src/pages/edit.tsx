import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { EditPage } from '../pages-templates/Edit'

export default function Edit() {
    return <EditPage />
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
