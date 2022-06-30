import { Header } from '../../components/Header'
import { Stories } from '../../components/Stories'
import { StoriesType } from '../../pages'
import * as Styled from './styles'

export type HomeProps = {
    followingStories: StoriesType
}

export function Home({ followingStories }: HomeProps) {
    return (
        <>
            <Header />
            <Styled.Main>
                <Styled.Posts>
                    <Stories stories={followingStories.stories} />
                </Styled.Posts>
            </Styled.Main>
        </>
    )
}
