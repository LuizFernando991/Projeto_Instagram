import styled, { css } from 'styled-components'

export type Props = {
    isArrowShow: boolean
}

export const CreateNewPostContainer = styled.div`
    background-color: #f1f1f1;
    width: 100%;
    height: calc(100% - 50px);
    border-radius: 0px 0px 18px 18px;
    z-index: 100;
    position: absolute;
    display: flex;
    justify-content: center;
`
export const ImagesContainer = styled.div`
    width: 500px;
    height: 500px;
    margin-left: 5px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DescriptionContainer = styled.div`
    width: auto;
    height: 200px;
    margin-top: 20px;
    padding: 5px;
    border-top: 1px solid ${({ theme }) => theme.borderColor.default};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};

    .user-info {
        display: flex;
        align-items: center;

        img {
            border-radius: 999px;
        }

        h3 {
            margin-left: 10px;
            font-size: 14px;
            font-weight: 600;
        }
    }
    textarea {
        margin-top: 20px;
        background-color: #f1f1f1;
        width: 280px;
        resize: none;
        outline: none;
        border: none;
        font-size: 15px;
        padding: 5px;

        &::placeholder {
            color: #b9b9b9;
        }
    }
`
export const ButtonContainer = styled.div`
    width: 100%;
    position: absolute;
    top: -35px;
    right: -700px;

    button {
        color: #0095f6;
        border-radius: 8px;
        font-size: 15px;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }
`
export const Slider = styled.div<Props>`
    width: 480px;
    position: relative;
    overflow: hidden;
    .images-container {
        overflow: hidden;
        display: flex;
    }
    img {
        width: 480px;
        height: 500px;
        display: inline-block;
    }
    .arrow {
        position: absolute;
        color: ${({ theme }) => theme.colors.secondaryColor};
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
export const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        font-size: 60px;
        color: ${({ theme }) => theme.colors.softGrey};
        transition: all ease-in 0.2s;
        cursor: pointer;
    }
    h1 {
        margin-bottom: 20px;
        margin-top: 2px;
        font-size: 22px;
        font-weight: 300;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.softGrey};
    }
`
