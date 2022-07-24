import styled, { css } from 'styled-components'

export type Props = {
    isArrowShow: boolean
}

export type PropsDot = {
    isSelected: boolean
}

export type PropsButton = {
    isActived: boolean
}

export const CardContainer = styled.div`
    width: 500px;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    border: 1px solid ${({ theme }) => theme.borderColor.default};
    border-radius: 5px;
    margin-bottom: 15px;
`
export const UserInfo = styled.div`
    width: 100%;
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};
    display: flex;
    align-items: center;

    .user-name {
        margin-left: 10px;

        p {
            font-weight: 300;
            font-size: 1.1em;
            color: ${({ theme }) => theme.colors.softGrey};
        }
    }
`
export const ImagesContainer = styled.div<Props>`
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;

    .slider {
        display: flex;
        overflow: hidden;
        transition: all ease-in 0.2s;
    }
    .arrow {
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

    .leftArrow {
        left: 2px;
    }

    .rightArrow {
        right: 2px;
    }
`

export const Options = styled.div`
    width: 100%;
    position: relative;
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

export const Points = styled.div`
    width: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 0;
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
        ${isSelected ? 'background-color: #0094f6;' : ''}
    `}

    &:not(:last-child) {
        margin-right: 2px;
    }
`
export const PostInfoContainer = styled.div`
    padding: 10px;

    h4 {
        font-size: 14px;
        font-weight: 600;
        color: #262626;
        margin-bottom: 5px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        margin-top: 3px;
        span {
            font-size: 14px;
            font-weight: 600;
            color: #262626;
        }
    }

    button {
        margin-top: 5px;
        border: none;
        font-size: 14px;
        color: #8e8e8e;
        font-weight: 400;
        background-color: transparent;
        cursor: pointer;
    }
`
export const CommentBar = styled.div<PropsButton>`
    width: 100%;
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
