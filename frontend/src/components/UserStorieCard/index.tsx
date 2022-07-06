import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'
import { AuthContext } from '../../contexts/AuthContext'
import { UserStoriesType } from '../../pages'
import * as Styled from './styles'
import { api } from '../../helpers/api'

export type UserStorieCardProps = {
    allCurrentUserStories: UserStoriesType
    setIsUserStoriesOpen: (isUserStoriesOpen: boolean) => void
}

export function UserStorieCard({ allCurrentUserStories, setIsUserStoriesOpen }: UserStorieCardProps) {
    const { user } = useContext(AuthContext)
    const [image, setImage] = useState('')
    const [currentStorie, setCurrentStorie] = useState<number>(0)
    const [isArrowShow, setIsArrowShow] = useState<boolean>(false)
    const [isDeleteDropDown, setIsDeleteDropDown] = useState<boolean>(false)
    useEffect(() => {
        if (user) {
            setImage(user.imageProfile)
        }
    }, [user])
    useEffect(() => {
        if (allCurrentUserStories.stories.length) {
            setIsArrowShow(true)
        }
    }, [allCurrentUserStories.stories])

    function handleLeftArrow() {
        if (currentStorie > 0) {
            setCurrentStorie((e) => e - 1)
        }
    }
    function handleRightArrow() {
        if (currentStorie < allCurrentUserStories.stories.length - 1) {
            setCurrentStorie((e) => e + 1)
        }
    }
    async function handleOnDeleteClick() {
        const id = allCurrentUserStories.stories[currentStorie]?._id
        const storieId = {
            storieId: id,
        }
        api.delete('/storie/deletestorie', { data: storieId })
        allCurrentUserStories.stories.splice(currentStorie, 1)
        setIsUserStoriesOpen(false)
    }
    return (
        <Styled.UserCardContainer
            style={{
                backgroundImage: `url(http://localhost:5050/images/storieImages/${allCurrentUserStories.stories[currentStorie]?.image})`,
            }}
            isArrowShow={isArrowShow}
        >
            <Styled.UserInfoContainer>
                {image ? (
                    <Image width="35" height="35" src={`http://localhost:5050/images/profileImages/${image}`} />
                ) : (
                    <Image width="35" height="35" src="/assets/images/defaultImageProfile.jpg" />
                )}
                <p>{user?.username}</p>
            </Styled.UserInfoContainer>

            <BsFillArrowLeftCircleFill className="arrow leftArrow" onClick={handleLeftArrow} />
            <BsFillArrowRightCircleFill className="arrow rightArrow" onClick={handleRightArrow} />
            <FiMoreVertical className="more" onClick={() => setIsDeleteDropDown(true)} />
            {isDeleteDropDown ? (
                <Styled.DeleteDropDown>
                    <RiCloseLine onClick={() => setIsDeleteDropDown(false)} className="close-buttom" />
                    <li>
                        <p onClick={handleOnDeleteClick}>Delete Story</p>
                    </li>
                </Styled.DeleteDropDown>
            ) : (
                ''
            )}
        </Styled.UserCardContainer>
    )
}
