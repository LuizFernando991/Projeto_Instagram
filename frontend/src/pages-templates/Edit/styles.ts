import styled, { css } from 'styled-components'

export type OptionsProps = {
    isSelected: boolean
}

export const EditPageContainer = styled.div`
    min-height: 100vh;
`

export const EditContainer = styled.main`
    width: 55%;
    min-height: 500px;
    margin: 50px auto;
    border: 1px solid ${({ theme }) => theme.borderColor.default};
    background-color: #fff;
    display: flex;
    border-radius: 5px;
`

export const SideOptions = styled.div`
    width: 20%;
    border-right: 1px solid ${({ theme }) => theme.borderColor.default};

    ul {
        width: 100%;
    }
`

export const Options = styled.li<OptionsProps>`
    width: 100%;
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    ${({ isSelected }) => css`
        ${isSelected ? 'font-weight: 600;' : ''}
        ${isSelected ? 'border-left: 2px solid #000;' : ''}
    `}
    &:hover {
        background-color: ${({ theme }) => theme.backgroundColors.grey};
    }
    &:first-child {
        margin-top: 5px;
    }
`

export const EditInfo = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`

export const PasswordContainer = styled.div`
    width: 60%;
    margin: 50px auto;

    .erroMessage {
        font-size: 14px;
        color: red;
        line-height: 20px;
        margin-left: 150px;
    }
`

export const ImagePasswordPageContainer = styled.div`
    display: flex;
    align-items: center;

    .imageContainer {
        width: 120px;
        display: flex;
        justify-content: right;
        margin-right: 30px;
    }

    .image {
        width: 45px;
        height: 45px;
        border-radius: 999px;
    }

    h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: 38px;
        color: ${({ theme }) => theme.colors.black};
    }
`

export const PasswordForm = styled.form`
    margin-top: 30px;
    div {
        display: flex;
        margin-bottom: 20px;
        aside {
            width: 120px;
            text-align: right;
            margin-right: 30px;

            label {
                font-size: 16px;
                font-weight: 600;
                line-height: 18px;
            }
        }

        input[type='password'] {
            width: auto;
            outline: none;
            border: 1px solid rgba(219, 219, 219, 1);
            border-radius: 6px;
            color: #262626;
            flex-grow: 1;
            font-size: 14px;
            line-height: 30px;
            margin: 0;
            overflow: visible;
            padding: 4px 12px;
        }

        input[type='submit'] {
            margin-left: 150px;
            border: 1px solid transparent;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            padding: 5px 9px;
            background-color: ${({ theme }) => theme.backgroundColors.blue};
            cursor: pointer;
        }
    }
`
export const UserInfoContainer = styled.div``

export const ChangeImageContainer = styled.div``
