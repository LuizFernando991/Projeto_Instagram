import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export type Props = {
    isArrowShow: boolean
}

export type animatedProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style: any
    isVisualizationsShow: boolean
}

export type animatedUl = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style: any
    isVisualizationsShow: boolean
}

export const UserCardContainer = styled.div<Props>`
    width: 400px;
    height: 750px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #030303;
    border-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all ease-in 0.45s;
    .arrow {
        position: absolute;
        color: ${({ theme }) => theme.colors.secondaryColor};
        top: calc(50% - 15px);
        font-size: 30px;
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
        left: -40px;
    }

    .rightArrow {
        right: -40px;
    }

    .more {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        font-size: 30px;
    }
`
export const UserInfoContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    img {
        border-radius: 9999px;
    }
    p {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white};
        margin-left: 6px;
        font-size: 1.2rem;
    }
`

export const VisualizatedContainer = styled.div`
    position: absolute;
    left: -40px;
    background-color: transparent;
    width: 480px;
    height: 100%;
`

export const VisualizatedList = styled(animated.div)<animatedProps>`
    width: 390px;
    height: 340px;
    border: 1px solid ${({ theme }) => theme.borderColor.focus};
    border-radius: 10px 10px 0px 0px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9999;

    .eye-icon {
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-size: 17px;
        z-index: 9999;
        position: initial;
        margin-top: 2px;
        cursor: auto;
    }

    .header {
        width: 100%;
        height: 20px;
        padding: 20px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor.focus};
        ${({ isVisualizationsShow }) => css`
            ${isVisualizationsShow ? '' : 'display: none;'}
        `}
    }

    p {
        font-size: 1.7rem;
        margin-left: 5px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.secondaryColor};
    }

    .close-buttom-visualizations {
        color: ${({ theme }) => theme.colors.secondaryColor};
        position: absolute;
        cursor: pointer;
        top: 5px;
        right: 5px;
        transition: all ease-in 0.2s;

        &:hover {
            color: #383838;
        }
    }

    .delete-buttom {
        color: ${({ theme }) => theme.colors.secondaryColor};
        position: absolute;
        cursor: pointer;
        top: 11px;
        right: 50px;
        font-size: 18px;
        transition: all ease-in 0.2s;

        &:hover {
            color: #de1818;
        }
    }
`

export const Ul = styled(animated.ul)<animatedUl>`
    width: 100%;
    height: 295px;
    display: flex;
    flex-direction: column;
    ${({ isVisualizationsShow }) => css`
        ${isVisualizationsShow ? '' : 'display: none;'}
    `}

    li {
        width: 100%;
        height: 60px;
        padding: 4px 5px;
        display: flex;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};
        background-color: ${({ theme }) => theme.backgroundColors.grey};

        &:first-of-type {
            border-top: 1px solid ${({ theme }) => theme.borderColor.default};
        }

        .image-visualizated {
            display: flex;
            align-items: center;
        }

        .image-visualizated img {
            border-radius: 999px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 14px;

            p {
                margin-left: 0;
                font-size: 0.98rem;
                font-weight: bold;
            }

            h4 {
                font-size: 1.2rem;
            }
        }
    }
`
