import styled, { css } from 'styled-components'

export type Props = {
    isSelected: boolean
}

export const CardContainer = styled.li<Props>`
    width: 400px;
    height: 80vh;
    background-color: #030303;
    border-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: scale(0.65);
    transition: all ease-in 0.45s;
    ${({ isSelected }) => css`
        ${isSelected ? 'transform: scale(1);' : ''}
    `}

    .arrow {
        position: absolute;
        color: ${({ theme }) => theme.colors.secondaryColor};
        top: calc(50% - 15px);
        font-size: 30px;
        transition: all ease 0.4s;
        ${({ isSelected }) => css`
            ${!isSelected ? 'display: none;' : ''}
        `}
        cursor: pointer;

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

    .user-image {
        height: 100%;
        width: 100%;
        position: relative;
        background-color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
        transition: all ease-in 0.4s;
        cursor: pointer;
        ${({ isSelected }) => css`
            ${isSelected ? 'display: none;' : ''}
        `}
        div img {
            width: 100px;
            height: 100px;
        }
    }
`
export const InfoContainer = styled.div`
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
