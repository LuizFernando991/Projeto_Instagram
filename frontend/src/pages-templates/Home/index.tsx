import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { HomeAside } from '../../components/HomeAside'
import { Stories } from '../../components/Stories'
import { PostCard } from '../../components/PostCard'
import { CreatePostComponent } from '../../components/CreatePostComponent'
import { StoriesType, UserStoriesType, StorieType, PostsType, PostType } from '../../pages'
import { StoriesView } from '../../components/StoriesView'
import { UserStoriesView } from '../../components/UserStoriesView'
import { api } from '../../helpers/api'
import * as Styled from './styles'
import { PostComponent } from '../../components/PostComponent'

export type HomeProps = {
    followingStories: StoriesType
    currentUserStories: UserStoriesType
    posts: PostsType
}

export type VisualizeStories = {
    storieId: string
}

export function Home({ followingStories, currentUserStories, posts }: HomeProps) {
    const [isStorieViewOpen, setIsStorieViewOpen] = useState<boolean>(false)
    const [isUserStoriesOpen, setIsUserStoriesOpen] = useState<boolean>(false)
    const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false)
    const [currentStorie, setCurrentStorie] = useState<number>(0)
    const [allFollowingStories] = useState<Array<StorieType>>(
        (followingStories.stories = followingStories.stories.sort(
            (a, b) => Number(a.isAllVisualized) - Number(b.isAllVisualized),
        )),
    )
    const [allCurrentUserStories, setAllCurrentUserStories] = useState<UserStoriesType>(currentUserStories)
    const [haveStories, setHaveStories] = useState<boolean>(false)
    const [currentPosts] = useState<Array<PostType>>(posts.followingPosts)
    const [selectedPost, setSelectedPost] = useState<null | PostType>(null)
    const [isPostOpen, setIsPostOpen] = useState<boolean>(false)
    const [overflow, setOverFlow] = useState<boolean>(true)

    useEffect(() => {
        if (allCurrentUserStories.stories.length) {
            setHaveStories(true)
        } else {
            setHaveStories(false)
        }
    }, [allCurrentUserStories.stories.length])

    useEffect(() => {
        if (isStorieViewOpen || isUserStoriesOpen || isCreatePostOpen || isPostOpen) {
            setOverFlow(false)
        } else {
            setOverFlow(true)
        }
    }, [isCreatePostOpen, isPostOpen, isStorieViewOpen, isUserStoriesOpen])

    async function visualizeStories(storieId: VisualizeStories) {
        api.put('/storie/visualizestorie', storieId)
        const newStorie = { ...allFollowingStories[currentStorie], isAllVisualized: true }
        allFollowingStories[currentStorie] = newStorie
    }

    function onStorieClick(index: number): void {
        setIsStorieViewOpen(true)
        setCurrentStorie(index)
        return
    }

    function onCommentButtonClick(post: PostType) {
        setIsPostOpen(true)
        setSelectedPost(post)
    }

    return (
        <Styled.HomeContainer overflow={overflow}>
            <Header setIsCreatePostOpen={setIsCreatePostOpen} isCreatePostOpen={isCreatePostOpen} />
            <Styled.Main>
                <Styled.Posts>
                    <Stories onStorieClick={onStorieClick} stories={allFollowingStories} />
                    <Styled.PostsColl>
                        {currentPosts.length
                            ? currentPosts.map((post) => (
                                  <PostCard key={post._id} post={post} onCommentButtonClick={onCommentButtonClick} />
                              ))
                            : ''}
                    </Styled.PostsColl>
                </Styled.Posts>
                <HomeAside haveStories={haveStories} setIsUserStoriesOpen={setIsUserStoriesOpen} />
            </Styled.Main>
            {isStorieViewOpen ? (
                <StoriesView
                    stories={followingStories.stories}
                    isStorieViewOpen={isStorieViewOpen}
                    currentStorie={currentStorie}
                    setIsStorieViewOpen={setIsStorieViewOpen}
                    setCurrentStorie={setCurrentStorie}
                    visualizeStories={visualizeStories}
                />
            ) : (
                ''
            )}
            {isUserStoriesOpen ? (
                <UserStoriesView
                    setIsUserStoriesOpen={setIsUserStoriesOpen}
                    allCurrentUserStories={allCurrentUserStories}
                />
            ) : (
                ''
            )}
            {isCreatePostOpen ? (
                <CreatePostComponent
                    isCreatePostOpen={isCreatePostOpen}
                    setIsCreatePostOpen={setIsCreatePostOpen}
                    setAllCurrentUserStories={setAllCurrentUserStories}
                />
            ) : (
                ''
            )}
            {isPostOpen ? (
                <PostComponent post={selectedPost} setIsPostOpen={setIsPostOpen} isPostOpen={isPostOpen} />
            ) : (
                ''
            )}
        </Styled.HomeContainer>
    )
}
