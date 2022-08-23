import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { getAPIClient } from '../helpers/api-server'
import { Profile, ProfileProps } from '../pages-templates/Profile'

export type UserType = {
    _id: string
    name: string
    username: string
    imageProfile: string
    followers: Array<{
        _id: string
        name: string
        username: string
        imageProfile: string
    }>
    following: Array<{
        _id: string
        name: string
        username: string
        imageProfile: string
    }>
}

export type PostsType = {
    allPosts: Array<PostType>
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

export default function UserPage({ profileUser, userPosts }: ProfileProps) {
    return <Profile profileUser={profileUser} userPosts={userPosts} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const userId = ctx.params.username

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
    const userData = await api.get(`/user/${userId}`)
    const user: UserType = userData.data.user
    const userPostsData = await api.get(`/post/alluserposts`, { data: { userId: user._id } })
    const userPosts = userPostsData.data

    return {
        props: {
            profileUser: user,
            userPosts: userPosts,
        },
    }
}
