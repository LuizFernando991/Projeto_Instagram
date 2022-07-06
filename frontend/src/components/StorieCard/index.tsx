import { useEffect, useState } from 'react'
import Image from 'next/image'
import { StorieType } from '../../pages'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { VisualizeStories } from '../../pages-templates/Home'
import { StorieItem } from '../StorieItem'
import * as Styled from './styles'

interface StorieCardProps {
    storie: StorieType
    currentStorie: number
    storieIndex: number
    storiesLenght: number
    setCurrentStorie: (currentStorie) => void
    visualizeStories: (storieId: VisualizeStories) => void
}

export function StorieCard({
    storie,
    storieIndex,
    currentStorie,
    setCurrentStorie,
    storiesLenght,
    visualizeStories,
}: StorieCardProps) {
    const [currentStorieImage, setCurrentStorieImage] = useState<number>(0)
    const [isSelected, setIsSelected] = useState<boolean>(false)

    useEffect(() => {
        if (storieIndex === currentStorie) {
            setIsSelected(true)
            visualizeStories({
                storieId: storie.stories[currentStorieImage]._id,
            })
        } else {
            setIsSelected(false)
        }
    }, [storieIndex, currentStorie, visualizeStories, storie.stories, currentStorieImage])

    function handleLeftArrow() {
        if (currentStorieImage > 0) {
            setCurrentStorieImage((e) => e - 1)
        } else {
            if (currentStorie > 0) {
                setCurrentStorie((e: number) => e - 1)
            }
        }
    }
    function handleRightArrow() {
        if (currentStorieImage < storie.stories.length - 1) {
            setCurrentStorieImage((e) => e + 1)
        } else {
            if (currentStorie < storiesLenght - 1) {
                setCurrentStorie((e: number) => e + 1)
            }
        }
    }

    function handleOnCardClick() {
        setCurrentStorie(storieIndex)
    }

    return (
        <Styled.CardContainer
            isSelected={isSelected}
            style={{
                backgroundImage: `url(http://localhost:5050/images/storieImages/${storie.stories[currentStorieImage]?.image})`,
            }}
        >
            {isSelected ? (
                <Styled.InfoContainer>
                    {storie.postedBy.imageProfile ? (
                        <Image
                            width="35"
                            height="35"
                            src={`http://localhost:5050/images/profileImages/${storie.postedBy.imageProfile}`}
                        />
                    ) : (
                        <Image width="35" height="35" src="/assets/images/defaultImageProfile.jpg" />
                    )}
                    <p>{storie.postedBy.username}</p>
                </Styled.InfoContainer>
            ) : (
                ''
            )}
            <BsFillArrowLeftCircleFill className="arrow leftArrow" onClick={handleLeftArrow} />
            <BsFillArrowRightCircleFill className="arrow rightArrow" onClick={handleRightArrow} />
            <div onClick={handleOnCardClick} className="user-image">
                <StorieItem storie={storie} index={currentStorie} />
            </div>
        </Styled.CardContainer>
    )
}
