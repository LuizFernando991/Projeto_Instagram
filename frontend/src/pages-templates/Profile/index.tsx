import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { PostsType, PostType, UserType } from '../../pages/[username]'
import { Header } from '../../components/Header'
import { CreatePostComponent } from '../../components/CreatePostComponent'
import { MdOutlineNoPhotography } from 'react-icons/md'
import { SeparateLine } from '../../components/SeparateLine'
import { AuthContext } from '../../contexts/AuthContext'
import { ProfilePostImage } from '../../components/ProfilePostImage'
import { PostComponent } from '../../components/PostComponent'
import { FollowersList } from '../../components/FollowersList'
import { api } from '../../helpers/api'
import * as Styled from './styles'

export type ProfileProps = {
    profileUser: UserType
    userPosts: PostsType
}

export function Profile({ profileUser, userPosts }: ProfileProps) {
    const { user } = useContext(AuthContext)
    const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false)
    const [isPostOpen, setIsPostOpen] = useState<boolean>(false)
    const [userFollow, setUserFollow] = useState<boolean>(false)
    const [selectedPost, setSelectedPost] = useState<PostType | null>(null)
    const [isFollowingListOpen, setIsFollowingListOpen] = useState<boolean>(false)
    const [isFollowersListOpen, setIsFollowersListOpen] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        profileUser?.followers.map((follow) => {
            if (follow.username === user?.username) {
                setUserFollow(true)
            }
        })
    }, [profileUser, user])

    function handleOnFollowingButtonClick() {
        setUserFollow(false)
        api.put('http://localhost:5050/user/unfollow', { userId: profileUser._id })
    }

    function handleOnFollowButtonClick() {
        setUserFollow(true)
        api.put('http://localhost:5050/user/follow', { userId: profileUser._id })
    }

    function handleOnPreviewImageClick(postIndex) {
        setSelectedPost(userPosts.allPosts[postIndex])
        setIsPostOpen(true)
    }

    function handleOnEditButtonClick() {
        router.push('/edit')
    }

    return (
        <Styled.ProfileContainer>
            <Header setIsCreatePostOpen={setIsCreatePostOpen} isCreatePostOpen={isCreatePostOpen} />
            {isCreatePostOpen ? (
                <CreatePostComponent isCreatePostOpen={isCreatePostOpen} setIsCreatePostOpen={setIsCreatePostOpen} />
            ) : (
                ''
            )}
            <Styled.Main>
                <Styled.UserInfoContainer>
                    <Styled.ProfileImage>
                        {profileUser?.imageProfile ? (
                            <Image
                                width="150"
                                height="150"
                                src={`http://localhost:5050/images/profileImages/${profileUser?.imageProfile}`}
                            />
                        ) : (
                            <Image width="150" height="150" src="/assets/images/defaultImageProfile.jpg" />
                        )}
                    </Styled.ProfileImage>
                    <Styled.Info>
                        <Styled.InfoHeader>
                            <h2>{profileUser?.username}</h2>
                            {user?._id === profileUser?._id ? (
                                <button className="editButton" onClick={handleOnEditButtonClick}>
                                    Edit Profile
                                </button>
                            ) : userFollow ? (
                                <button className="followingButton" onClick={handleOnFollowingButtonClick}>
                                    Following
                                </button>
                            ) : (
                                <button className="followButton" onClick={handleOnFollowButtonClick}>
                                    Follow
                                </button>
                            )}
                        </Styled.InfoHeader>
                        <Styled.Follows>
                            <p>
                                <span>{userPosts.allPosts.length}</span>Posts
                            </p>
                            <p onClick={() => setIsFollowersListOpen(true)}>
                                <span>{profileUser?.followers.length}</span>followers
                            </p>
                            <p onClick={() => setIsFollowingListOpen(true)}>
                                <span>{profileUser?.following.length}</span>following
                            </p>
                        </Styled.Follows>
                        <Styled.Name>
                            <p>{profileUser?.name}</p>
                        </Styled.Name>
                    </Styled.Info>
                </Styled.UserInfoContainer>
                <SeparateLine />
                <Styled.PostsContainer>
                    {userPosts.allPosts.length > 0 ? (
                        <ul>
                            {userPosts.allPosts.map((post, index) => (
                                <li key={index}>
                                    <ProfilePostImage
                                        post={post}
                                        handleOnPreviewImageClick={handleOnPreviewImageClick}
                                        index={index}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Styled.NoPostContainer>
                            <MdOutlineNoPhotography />
                            <h1>No Posts Yet</h1>
                        </Styled.NoPostContainer>
                    )}
                </Styled.PostsContainer>
            </Styled.Main>
            {isPostOpen ? (
                <PostComponent post={selectedPost} setIsPostOpen={setIsPostOpen} isPostOpen={isPostOpen} />
            ) : (
                ''
            )}
            {isFollowingListOpen ? (
                <FollowersList
                    isOpen={isFollowingListOpen}
                    setIsOpen={setIsFollowingListOpen}
                    header="Following"
                    users={profileUser.following}
                />
            ) : (
                ''
            )}
            {isFollowersListOpen ? (
                <FollowersList
                    isOpen={isFollowersListOpen}
                    setIsOpen={setIsFollowersListOpen}
                    header="Followers"
                    users={profileUser.followers}
                />
            ) : (
                ''
            )}
        </Styled.ProfileContainer>
    )
}
