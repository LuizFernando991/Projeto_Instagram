import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Home } from '../pages-templates/Home'
import { HomeProps } from '../pages-templates/Home'
import { getAPIClient } from '../helpers/api-server'

export type StorieType = {
    postedBy: {
        _id: string
        name: string
        username: string
        imageProfile: string
    }
    stories: Array<{
        _id: string
        image: string
        postedBy: {
            _id: string
            name: string
            username: string
            imageProfile: string
        }
        visualizedBy: Array<{
            _id: string
            name: string
            username: string
            imageProfile: string
        }>
        expiredAt: Date
        updatedAt: Date
    }>
}

export type StoriesType = {
    stories: Array<StorieType>
}

export default function Index({ followingStories }: HomeProps) {
    return <Home followingStories={followingStories} />
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
    const api = getAPIClient(ctx)
    const data = await api.get('/storie/followingstories')
    const followingStories = data.data
    return {
        props: { followingStories },
    }
}
