import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTransition } from 'react-spring'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import { FaRegEye } from 'react-icons/fa'
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
    const [currentStorie, setCurrentStorie] = useState<number>(0)
    const [isArrowShow, setIsArrowShow] = useState<boolean>(false)
    const [isVisualizationsshow, setIsVisualizationsshow] = useState<boolean>(false)
    const transition = useTransition(isVisualizationsshow, {
        from: { height: 0, opacity: 0 },
        enter: { height: 340, opacity: 1 },
        leave: { height: 0, opacity: 0 },
    })
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
        setIsVisualizationsshow(false)
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
                {user?.imageProfile ? (
                    <Image
                        width="35"
                        height="35"
                        src={`http://localhost:5050/images/profileImages/${user?.imageProfile}`}
                    />
                ) : (
                    <Image width="35" height="35" src="/assets/images/defaultImageProfile.jpg" />
                )}
                <p>{user?.username}</p>
            </Styled.UserInfoContainer>

            <BsFillArrowLeftCircleFill className="arrow leftArrow" onClick={handleLeftArrow} />
            <BsFillArrowRightCircleFill className="arrow rightArrow" onClick={handleRightArrow} />
            <FiMoreVertical className="more" onClick={() => setIsVisualizationsshow(true)} />
            {transition((style, item) =>
                item ? (
                    <Styled.VisualizatedList style={style} isVisualizationsshow={isVisualizationsshow}>
                        <div className="header">
                            <FaRegEye className="eye-icon" />
                            <p>{allCurrentUserStories.stories[currentStorie].visualizedBy.length}</p>
                            <RiCloseLine
                                className="close-buttom-visualizations"
                                onClick={() => setIsVisualizationsshow(false)}
                            />
                            <FaTrash className="delete-buttom" onClick={handleOnDeleteClick} />
                        </div>
                        {allCurrentUserStories.stories.length ? (
                            <Styled.Ul style={style} isVisualizationsshow={isVisualizationsshow}>
                                {allCurrentUserStories.stories[currentStorie].visualizedBy.map((item, index) => (
                                    <li key={index}>
                                        <div className="image-visualizated">
                                            {item.imageProfile ? (
                                                <Image
                                                    width="35"
                                                    height="35"
                                                    src={`http://localhost:5050/images/profileImages/${item.imageProfile}`}
                                                />
                                            ) : (
                                                <Image
                                                    width="35"
                                                    height="35"
                                                    src="/assets/images/defaultImageProfile.jpg"
                                                />
                                            )}
                                        </div>
                                        <div className="info">
                                            <h4>{item.username}</h4>
                                            <p>{item.name}</p>
                                        </div>
                                    </li>
                                ))}
                            </Styled.Ul>
                        ) : (
                            'Não tem stories'
                        )}
                    </Styled.VisualizatedList>
                ) : (
                    ''
                ),
            )}
            {isVisualizationsshow ? (
                <Styled.VisualizatedContainer onClick={() => setIsVisualizationsshow(false)} />
            ) : (
                ''
            )}
        </Styled.UserCardContainer>
    )
}
