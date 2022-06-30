import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { StorieType } from '../../pages'
import * as Styled from './styles'

export type StorieItemProps = {
    storie: StorieType
}

export function StorieItem({ storie }: StorieItemProps) {
    const { user } = useContext(AuthContext)
    const [isVisualizated, setIsVisualizated] = useState<boolean>(false)
    useEffect(() => {
        storie.stories.map((item) => {
            item.visualizedBy.map((i) => {
                if (i._id === user?._id) {
                    setIsVisualizated(true)
                }
            })
        })
    }, [setIsVisualizated, storie.stories, user?._id])
    return (
        <Styled.StorieItem isVisualizate={isVisualizated}>
            <div>
                {storie.postedBy.imageProfile ? (
                    <Image
                        width="62.3"
                        height="62.3"
                        src={`http://localhost:5050/images/profileImages/${storie.postedBy.imageProfile}`}
                    />
                ) : (
                    <Image width="56" height="65" src="/assets/images/defaultImageProfile.jpg" />
                )}
            </div>
            <p>{storie.postedBy.username}</p>
        </Styled.StorieItem>
    )
}
