import { useState } from 'react'
import { Header } from '../../components/Header'
import { HomeAside } from '../../components/HomeAside'
import { Stories } from '../../components/Stories'
import { CreatePostComponent } from '../../components/CreatePostComponent'
import { StoriesType, UserStoriesType, StorieType } from '../../pages'
import { StoriesView } from '../../components/StoriesView'
import { UserStoriesView } from '../../components/UserStoriesView'
import { api } from '../../helpers/api'
import * as Styled from './styles'

export type HomeProps = {
    followingStories: StoriesType
    currentUserStories: UserStoriesType
}

export type VisualizeStories = {
    storieId: string
}

export function Home({ followingStories, currentUserStories }: HomeProps) {
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

    return (
        <>
            <Header setIsCreatePostOpen={setIsCreatePostOpen} isCreatePostOpen={isCreatePostOpen} />
            <Styled.Main>
                <Styled.Posts>
                    <Stories onStorieClick={onStorieClick} stories={allFollowingStories} />
                </Styled.Posts>
                <HomeAside
                    haveStories={currentUserStories.stories.length ? true : false}
                    setIsUserStoriesOpen={setIsUserStoriesOpen}
                />
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
        </>
    )
}
