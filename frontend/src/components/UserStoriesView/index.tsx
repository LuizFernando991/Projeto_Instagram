import Image from 'next/image'
import { UserStorieCard } from '../UserStorieCard'
import { RiCloseLine } from 'react-icons/ri'
import { UserStoriesType } from '../../pages'
import * as Styled from './styles'

export type UserStoriesViewProps = {
    setIsUserStoriesOpen: (isUserStoriesOpen: boolean) => void
    allCurrentUserStories: UserStoriesType
}

export function UserStoriesView({ setIsUserStoriesOpen, allCurrentUserStories }: UserStoriesViewProps) {
    return (
        <Styled.UserStoriesContainer>
            <RiCloseLine onClick={() => setIsUserStoriesOpen(false)} />
            <div className="text-logo">
                <Image src="/assets/images/instagram-text-logo-white.png" width="120px" height="35px" alt="logo" />
            </div>
            <UserStorieCard allCurrentUserStories={allCurrentUserStories} setIsUserStoriesOpen={setIsUserStoriesOpen} />
        </Styled.UserStoriesContainer>
    )
}
