import { useState, useEffect, useContext, useRef } from 'react'
import Image from 'next/image'
import { CalcDate } from '../../helpers/date-calc'
import { api } from '../../helpers/api'
import { AuthContext } from '../../contexts/AuthContext'
import { useTransition } from 'react-spring'
import { RiCloseLine } from 'react-icons/ri'
import { PostType } from '../../pages'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import * as Styled from './styles'

export type PostComponentProps = {
    post: PostType
    isPostOpen: boolean
    setIsPostOpen: (isPostOpen: boolean) => void
}

export function PostComponent({ post, isPostOpen, setIsPostOpen }: PostComponentProps) {
    const { user } = useContext(AuthContext)
    const [isArrowShow, setIsArrowShow] = useState<boolean>(false)
    const [currentSliderImage, setCurrentSliderImage] = useState<number>(0)
    const [numberOfLikes, setNumberOfLikes] = useState<number>(post.postLikes.length)
    const [postAllComments, setPostAllComments] = useState(post.postComments)
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isFollowing, setIsFollowing] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [inputComment, setInputComment] = useState<string | null>(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (post.images.length) {
            setIsArrowShow(true)
        }
    }, [post.images.length])

    useEffect(() => {
        post.postLikes.map((like) => {
            if (like.username === user?.username) {
                setIsLiked(true)
            }
        })
    }, [post.postLikes, user])

    useEffect(() => {
        user.following.map((follow) => {
            if (post.postedBy.username === follow.username) {
                setIsFollowing(true)
            }
        })
    }, [post.postedBy.username, user.following])

    const transition = useTransition(isPostOpen, {
        from: { transform: 'scale(1.2)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 },
        leave: { transform: 'scale(1.2)', opacity: 0 },
        delay: 100,
    })

    function handleLeftArrowClick() {
        if (currentSliderImage > 0) {
            setCurrentSliderImage((e) => e - 1)
        }
    }

    function handleRightArrowClick() {
        if (currentSliderImage < post.images.length - 1) {
            setCurrentSliderImage((e) => e + 1)
        }
    }

    function handleOnDeleteClick() {
        const config = {
            data: {
                postId: post._id,
            },
        }
        api.delete('/post/delete', config)
        setIsPostOpen(false)
    }

    function handleOnLikeButtonClick() {
        if (isLiked) {
            api.put('/post/unlike', { postId: post._id })
            setNumberOfLikes((e) => e - 1)
            setIsLiked(false)
        } else {
            api.put('/post/like', { postId: post._id })
            setNumberOfLikes((e) => e + 1)
            setIsLiked(true)
        }
    }

    function handleOnCommentInputChange(event: { target: HTMLInputElement }) {
        setInputComment(event.target.value)
    }

    function handleOnCommentButtonClick() {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    function handleOnPostButtonClick() {
        if (inputComment) {
            const data = {
                postId: post._id,
                text: inputComment,
            }
            api.put('/post/comment', data)
            setInputComment('')
            setPostAllComments((e) => [
                {
                    text: inputComment,
                    postedBy: {
                        _id: user._id,
                        name: user.name,
                        username: user.username,
                        imageProfile: user.imageProfile,
                    },
                    createdAt: new Date(),
                    _id: `${new Date()}`,
                },
                ...e,
            ])
        }
    }

    return (
        <>
            <Styled.PostContainer onClick={() => setIsPostOpen(false)}>
                <RiCloseLine className="close-button" />
            </Styled.PostContainer>
            {transition((style, item) =>
                item ? (
                    <Styled.Post style={style}>
                        <Styled.ImagesContainer isArrowShow={isArrowShow}>
                            <div className="post-slider" style={{ marginLeft: -(currentSliderImage * 900) }}>
                                {post.images.map((image, index) => (
                                    <img
                                        key={index}
                                        width="900px"
                                        height="900px"
                                        src={`http://localhost:5050/images/postImages/${image}`}
                                    />
                                ))}
                            </div>
                            <BsFillArrowLeftCircleFill
                                className="post-arrow post-leftArrow"
                                onClick={handleLeftArrowClick}
                            />
                            <BsFillArrowRightCircleFill
                                className="post-arrow post-rightArrow"
                                onClick={handleRightArrowClick}
                            />
                            <Styled.Points>
                                {post.images.map((post, index) => (
                                    <Styled.Dot
                                        isSelected={index === currentSliderImage ? true : false}
                                        key={index}
                                    ></Styled.Dot>
                                ))}
                            </Styled.Points>
                        </Styled.ImagesContainer>
                        <Styled.PostInfoContainer>
                            <Styled.PostHeader>
                                {post.postedBy.imageProfile ? (
                                    <Image
                                        width="35"
                                        height="35"
                                        src={`http://localhost:5050/images/profileImages/${post.postedBy.imageProfile}`}
                                    />
                                ) : (
                                    <Image width="35" height="35" src="/assets/images/defaultImageProfile.jpg" />
                                )}
                                <span>{post.postedBy.username}</span>
                                <div className="dot"></div>
                                {isFollowing ? <span>Following</span> : <button>Follow</button>}
                                {user?.username === post.postedBy.username ? (
                                    <Styled.OptionsPostMenu showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
                                        <FiMoreHorizontal />
                                        <div className="dropdown" onClick={handleOnDeleteClick}>
                                            Delete Post
                                        </div>
                                    </Styled.OptionsPostMenu>
                                ) : (
                                    ''
                                )}
                            </Styled.PostHeader>
                            <Styled.DescriptionCommentsContainer>
                                {post.description ? (
                                    <Styled.Description>
                                        {post.postedBy.imageProfile ? (
                                            <Image
                                                width="35"
                                                height="35"
                                                src={`http://localhost:5050/images/profileImages/${post.postedBy.imageProfile}`}
                                            />
                                        ) : (
                                            <Image
                                                width="35"
                                                height="35"
                                                src="/assets/images/defaultImageProfile.jpg"
                                            />
                                        )}
                                        <div className="description-text">
                                            <p>
                                                <span>{post.postedBy.username}</span> {post.description}
                                            </p>
                                            <p className="date">{CalcDate(post.createdAt)}</p>
                                        </div>
                                    </Styled.Description>
                                ) : (
                                    ''
                                )}
                                <Styled.CommentsContainer>
                                    {postAllComments.map((comment) => (
                                        <li key={comment._id}>
                                            {comment.postedBy.imageProfile ? (
                                                <Image
                                                    width="35"
                                                    height="35"
                                                    src={`http://localhost:5050/images/profileImages/${comment.postedBy.imageProfile}`}
                                                />
                                            ) : (
                                                <Image
                                                    width="35"
                                                    height="35"
                                                    src="/assets/images/defaultImageProfile.jpg"
                                                />
                                            )}
                                            <div className="description-text">
                                                <p>
                                                    <span>{comment.postedBy.username}</span> {comment.text}
                                                </p>
                                                <p className="date">{CalcDate(comment.createdAt)}</p>
                                            </div>
                                        </li>
                                    ))}
                                </Styled.CommentsContainer>
                            </Styled.DescriptionCommentsContainer>
                            <Styled.PostCommentContainer>
                                <Styled.Options>
                                    <div className="buttons">
                                        {!isLiked ? (
                                            <svg
                                                onClick={handleOnLikeButtonClick}
                                                aria-label="Curtir"
                                                color="#262626"
                                                fill="#262626"
                                                height="24"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                onClick={handleOnLikeButtonClick}
                                                aria-label="Descurtir"
                                                color="#ed4956"
                                                fill="#ed4956"
                                                height="24"
                                                role="img"
                                                viewBox="0 0 48 48"
                                                width="24"
                                            >
                                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                            </svg>
                                        )}
                                        <svg
                                            onClick={handleOnCommentButtonClick}
                                            aria-label="Comentar"
                                            color="#262626"
                                            fill="#262626"
                                            height="24"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path
                                                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                                                fill="none"
                                                stroke="currentColor"
                                                // eslint-disable-next-line react/no-unknown-property
                                                stroke-linejoin="round"
                                                // eslint-disable-next-line react/no-unknown-property
                                                stroke-width="2"
                                            ></path>
                                        </svg>
                                    </div>
                                </Styled.Options>
                                <div className="likes-number">
                                    <h3>{numberOfLikes ? numberOfLikes : 0} likes</h3>
                                </div>
                                <Styled.CommentBar isActived={inputComment ? true : false}>
                                    <input
                                        ref={inputRef}
                                        value={inputComment ? inputComment : ''}
                                        type="text"
                                        placeholder="Add a comment"
                                        onChange={handleOnCommentInputChange}
                                    />
                                    <button onClick={handleOnPostButtonClick}>Post</button>
                                </Styled.CommentBar>
                            </Styled.PostCommentContainer>
                        </Styled.PostInfoContainer>
                    </Styled.Post>
                ) : (
                    ''
                ),
            )}
        </>
    )
}
