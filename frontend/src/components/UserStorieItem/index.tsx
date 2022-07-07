import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { AiFillPlusCircle } from 'react-icons/ai'
import * as Styled from './styles'

export type UserStoriesItemProps = {
    haveStories: boolean
    setIsUserStoriesOpen: (isUserStoriesOpen: boolean) => void
}

export function UserStorieItem({ haveStories, setIsUserStoriesOpen }: UserStoriesItemProps) {
    const { user } = useContext(AuthContext)

    function handleOnClick() {
        if (haveStories) {
            setIsUserStoriesOpen(true)
        }
    }
    return (
        <Styled.UserStorieItem onClick={handleOnClick} haveStories={haveStories}>
            <div className="border">
                {user?.imageProfile ? (
                    <Image
                        width="62.3"
                        height="62.3"
                        src={`http://localhost:5050/images/profileImages/${user?.imageProfile}`}
                    />
                ) : (
                    <Image width="62.3" height="62.3" src="/assets/images/defaultImageProfile.jpg" />
                )}
            </div>
            {!haveStories ? <AiFillPlusCircle /> : ''}
        </Styled.UserStorieItem>
    )
}
