import styled, { css } from 'styled-components'

export type Props = {
    isLeftArrowOn: boolean
    isRightArrowOn: boolean
}

export const StoriesContainer = styled.div<Props>`
    width: 100%;
    height: 10rem;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    border: 1px solid ${({ theme }) => theme.borderColor.default};
    border-radius: 6px;
    overflow-x: hidden;
    position: relative;

    .arrow {
        font-size: 27px;
        border-radius: 10000px;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
        position: absolute;
        top: calc(50% - 13.5px);
        z-index: 1000;
        cursor: pointer;
    }

    .leftArrow {
        left: 23px;
        ${({ isLeftArrowOn }) => css`
            ${!isLeftArrowOn ? 'display: none;' : ''}
        `}
    }

    .rightArrow {
        right: 23px;
        ${({ isRightArrowOn }) => css`
            ${!isRightArrowOn ? 'display: none;' : ''}
        `}
    }
`
export const Stories = styled.div`
    height: 100%;
    width: 9999px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    transition: all ease-in 0.2s;
`
export const NoStoriesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #8e8e8e;
`
