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
    isAllVisualized: boolean
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

export type UserStoriesType = {
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
        createdAt: Date
    }>
}

export type StoriesType = {
    stories: Array<StorieType>
}

export type PostType = {
    _id: string
    description?: string
    images: Array<string>
    postedBy: {
        _id: string
        name: string
        username: string
        imageProfile: string
    }
    postLikes: Array<{
        name: string
        username: string
        imageProfile: string
    }>
    postComments: Array<{
        text: string
        _id: string
        postedBy: {
            _id: string
            name: string
            username: string
            imageProfile: string
        }
        createdAt: Date
    }>
    createdAt: Date
    updatedAt: Date
}

export type PostsType = {
    followingPosts: Array<PostType>
}

export default function Index({ followingStories, currentUserStories, posts }: HomeProps) {
    return <Home followingStories={followingStories} currentUserStories={currentUserStories} posts={posts} />
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
    const followingStoriesData = await api.get('/storie/followingstories')
    const followingStories = followingStoriesData.data
    const currentUserStoriesData = await api.get('/storie/currentUserStories')
    const currentUserStories = currentUserStoriesData.data
    const postsData = await api.get('/post/followingposts/?page=1')
    const posts = postsData.data
    return {
        props: { followingStories, currentUserStories, posts },
    }
}
