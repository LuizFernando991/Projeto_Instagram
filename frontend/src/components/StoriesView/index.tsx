import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { StorieCard } from '../StorieCard'
import { StoriesType } from '../../pages'
import { VisualizeStories } from '../../pages-templates/Home'
import * as Styled from './styles'

interface StoriesViewProps extends StoriesType {
    isStorieViewOpen: boolean
    currentStorie: number
    setIsStorieViewOpen: (isStorieViewOpen: boolean) => void
    setCurrentStorie: (currentStorie: number) => void
    visualizeStories: (storieId: VisualizeStories) => void
}

export function StoriesView({
    stories,
    isStorieViewOpen,
    currentStorie,
    setIsStorieViewOpen,
    setCurrentStorie,
    visualizeStories,
}: StoriesViewProps) {
    const [margin, setMargin] = useState<number>(0)
    useEffect(() => {
        const marg = currentStorie * 400
        setMargin(marg)
    }, [currentStorie])

    return (
        <Styled.StoriesContainer isStorieViewOpen={isStorieViewOpen}>
            <Styled.StorieRow style={{ marginLeft: -margin }}>
                {stories.map((storie, index) => (
                    <StorieCard
                        setCurrentStorie={setCurrentStorie}
                        key={index}
                        storie={storie}
                        currentStorie={currentStorie}
                        storieIndex={index}
                        storiesLenght={stories?.length}
                        visualizeStories={visualizeStories}
                    />
                ))}
            </Styled.StorieRow>
            <RiCloseLine onClick={() => setIsStorieViewOpen(false)} />
            <div className="text-logo">
                <Image src="/assets/images/instagram-text-logo-white.png" width="120px" height="35px" alt="logo" />
            </div>
        </Styled.StoriesContainer>
    )
}
