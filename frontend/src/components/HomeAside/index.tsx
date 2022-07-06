import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import * as Styled from './styles'
import { UserStorieItem } from '../UserStorieItem'

export type HomeAsideProps = {
    haveStories: boolean
    setIsUserStoriesOpen: (isUserStoriesOpen: boolean) => void
}

export function HomeAside({ haveStories, setIsUserStoriesOpen }: HomeAsideProps) {
    const { user } = useContext(AuthContext)
    return (
        <Styled.AsideContainer>
            <UserStorieItem haveStories={haveStories} setIsUserStoriesOpen={setIsUserStoriesOpen} />
            <Styled.InfoContainer>
                <h4>{user?.username}</h4>
                <p>{user?.name}</p>
            </Styled.InfoContainer>
        </Styled.AsideContainer>
    )
}
