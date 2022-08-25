import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { StorieType } from '../../pages'
import * as Styled from './styles'

export type StorieItemProps = {
    storie: StorieType
    index: number
    onStorieClick?: (index: number) => void
}

export function StorieItem({ storie, index, onStorieClick }: StorieItemProps) {
    const [isVisualizated, setIsVisualizated] = useState<boolean>(false)

    useEffect(() => {
        setIsVisualizated(storie.isAllVisualized)
    }, [storie.isAllVisualized])

    function handleOnImageClick() {
        if (onStorieClick) {
            onStorieClick(index)
        } else {
            return
        }
    }
    return (
        <Styled.StorieItem onClick={handleOnImageClick} isVisualizate={isVisualizated}>
            <div>
                {storie.postedBy.imageProfile ? (
                    <img
                        width="62.3"
                        height="62.3"
                        src={`http://localhost:5050/images/profileImages/${storie.postedBy.imageProfile}`}
                    />
                ) : (
                    <img width="62.3" height="62.3" src="/assets/images/defaultImageProfile.jpg" />
                )}
            </div>
            <p>{storie.postedBy.username}</p>
        </Styled.StorieItem>
    )
}
