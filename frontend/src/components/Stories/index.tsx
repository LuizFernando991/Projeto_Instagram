import { useState, useEffect } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { StoriesType } from '../../pages'
import { StorieItem } from '../StorieItem'
import * as Styled from './styles'

export function Stories({ stories }: StoriesType) {
    const [scrollX, setScrollX] = useState<number>(0)
    const [isLeftArrowOn, setIsLeftArrowOn] = useState<boolean>(false)
    const [isRightArrowOn, setIsRightArrowOn] = useState<boolean>(false)

    useEffect(() => {
        if (scrollX === 0) {
            setIsLeftArrowOn(false)
        } else {
            setIsLeftArrowOn(true)
        }
        if (stories.length * 70 + 15 > 500) {
            setIsRightArrowOn(true)
        } else {
            setIsRightArrowOn(false)
        }
    }, [scrollX, setIsLeftArrowOn, setIsRightArrowOn, stories.length])

    function handleLeftArrow(): void {
        if (scrollX === 0) {
            setScrollX((e) => e - 85)
        } else {
            setScrollX((e) => e - 70)
        }
    }

    function handleRightArrow(): void {
        if (scrollX === -85) {
            setScrollX((e) => e + 85)
        } else {
            setScrollX((e) => e + 70)
        }
    }

    return (
        <Styled.StoriesContainer isLeftArrowOn={isLeftArrowOn} isRightArrowOn={isRightArrowOn}>
            <BsFillArrowLeftCircleFill className="arrow leftArrow" onClick={handleLeftArrow} />
            <BsFillArrowRightCircleFill className="arrow rightArrow" onClick={handleRightArrow} />
            <Styled.Stories style={{ marginLeft: `${scrollX}px` }}>
                {stories.map((item, index: number) => (
                    <StorieItem key={index} storie={item} />
                ))}
            </Styled.Stories>
        </Styled.StoriesContainer>
    )
}
