import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style: any
}

export type PropsButton = {
    isActived: boolean
}

export type PropsDot = {
    isSelected: boolean
}

export type ImagesContainerProps = {
    isArrowShow: boolean
}

export type OptionsPostMenuProps = {
    showMenu: boolean
}

export const PostContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.6);

    .close-button {
        color: white;
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 30px;
        cursor: pointer;
    }
`
export const Post = styled(animated.div)<Props>`
    width: 1400px;
    height: 900px;
    background-color: white;
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
`
export const ImagesContainer = styled.div<ImagesContainerProps>`
    width: 900px;
    height: 100%;
    overflow: hidden;
    position: relative;

    .post-slider {
        display: flex;
        overflow: hidden;
        transition: all ease-in 0.2s;
    }
    .post-arrow {
        position: absolute;
        color: ${({ theme }) => theme.colors.softGrey};
        top: calc(50% - 15px);
        font-size: 25px;
        transition: all ease 0.4s;
        cursor: pointer;
        ${({ isArrowShow }) => css`
            ${isArrowShow ? '' : 'display: none;'}
        `}
        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    .post-leftArrow {
        left: 5px;
    }

    .post-rightArrow {
        right: 5px;
    }
`
export const Points = styled.div`
    width: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: calc(100% - 20px);
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`

export const Dot = styled.div<PropsDot>`
    width: 6px;
    height: 6px;
    border-radius: 9px;
    background-color: #a8a8a8;
    ${({ isSelected }) => css`
        ${isSelected ? 'background-color: #fff;' : ''}
    `}

    &:not(:last-child) {
        margin-right: 2px;
    }
`
export const PostInfoContainer = styled.div`
    width: calc(100% - 900px);
    position: relative;
`

export const PostHeader = styled.div`
    width: auto;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};
    position: relative;

    span {
        font-weight: 600;
        font-size: 14px;
        color: rgba(38, 38, 38, 1);
        margin-left: 10px;
    }

    .dot {
        width: 3px;
        height: 3px;
        background-color: black;
        border-radius: 10px;
        margin-left: 10px;
    }

    button {
        border: none;
        color: #0095f6;
        background-color: transparent;
        margin-left: 10px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }
`

export const DescriptionCommentsContainer = styled.div`
    max-height: 80%;
    overflow: auto;
`

export const OptionsPostMenu = styled.div<OptionsPostMenuProps>`
    font-size: 16px;
    position: absolute;
    right: 10px;
    cursor: pointer;

    .dropdown {
        width: 90px;
        height: 20px;
        font-size: 12px;
        position: absolute;
        border: 1px solid ${({ theme }) => theme.borderColor.default};
        right: calc(100% - 20px);
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        transition: all ease 0.2s;
        ${({ showMenu }) => css`
            ${!showMenu ? 'visibility: hidden;' : ''}
        `}

        &:hover {
            background-color: ${({ theme }) => theme.colors.softGrey};
            color: white;
        }
    }
`
export const Description = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10px;
    padding-left: 20px;
    color: rgba(38, 38, 38, 1);
    font-size: 14px;
    word-break: break-all;

    .description-text {
        width: calc(100% - 60px);
    }

    .description-text p {
        margin-left: 10px;
    }

    .description-text span {
        font-weight: 600;
    }

    .description-text .date {
        font-size: 12px;
        color: rgba(142, 142, 142);
    }
`
export const CommentsContainer = styled.ul`
    margin-top: 10px;

    li {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 10px;
        padding-left: 20px;
        color: rgba(38, 38, 38, 1);
        font-size: 14px;
        word-break: break-all;

        .description-text {
            width: calc(100% - 60px);
        }

        .description-text p {
            margin-left: 10px;
        }

        .description-text span {
            font-weight: 600;
        }

        .description-text .date {
            font-size: 12px;
            margin-top: 2px;
            color: rgba(142, 142, 142);
        }
    }
`
export const PostCommentContainer = styled.div`
    width: 100%;
    height: 15%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.borderColor.default};

    .likes-number {
        margin-left: 20px;
        margin-top: 5px;
    }
`

export const Options = styled.div`
    width: 100%;
    .buttons {
        width: 80px;
        font-size: 25px;
        margin-left: 20px;
        margin-top: 10px;

        svg {
            margin-right: 10px;
            cursor: pointer;
        }
    }
`
export const CommentBar = styled.div<PropsButton>`
    width: 100%;
    position: absolute;
    bottom: 0;
    min-height: 40px;
    border-top: 1px solid ${({ theme }) => theme.borderColor.default};
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
        width: 80%;
        max-height: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        line-height: 18px;
        &::placeholder {
            color: #8e8e8e;
        }
    }

    button {
        border: none;
        background-color: transparent;
        color: #0094f6;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;

        ${({ isActived }) => css`
            ${isActived ? '' : 'opacity: 0.3; cursor: default;'}
        `}
    }
`
