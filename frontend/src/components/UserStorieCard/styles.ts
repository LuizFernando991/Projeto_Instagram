import styled, { css } from 'styled-components'

export type Props = {
    isArrowShow: boolean
}

export const UserCardContainer = styled.div<Props>`
    width: 400px;
    height: 80vh;
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
        color: ${({ theme }) => theme.colors.white};
        margin-left: 6px;
        font-size: 1.2rem;
    }
`
export const DeleteDropDown = styled.ul`
    width: 120px;
    height: 55px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundColors.grey};
    position: absolute;
    top: 10px;
    right: 10px;

    li {
        width: 100%;
        margin-top: 20px;
        height: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-top: 1px solid ${({ theme }) => theme.borderColor.default};
        &:hover {
            background-color: #f1f1f1;
        }

        p {
            font-weight: bold;
        }
    }

    .close-buttom {
        color: #505859;
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 20px;
        border-radius: 999px;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`
