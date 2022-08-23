import styled from 'styled-components'

export const ProfileContainer = styled.div`
    height: 100vh;
    overflow-y: scroll;
`
export const Main = styled.main`
    width: 50%;
    margin: 3rem auto;
`
export const UserInfoContainer = styled.section`
    display: flex;
    padding: 20px;
`

export const ProfileImage = styled.div`
    width: 150px;
    height: 150px;

    img {
        border-radius: 999px;
    }
`

export const Info = styled.div`
    margin-left: 120px;
    width: 300px;
`

export const InfoHeader = styled.div`
    display: flex;

    h2 {
        font-weight: 300;
        font-size: 28px;
        line-height: 32px;
        color: ${({ theme }) => theme.colors.black};
    }

    button {
        background-color: transparent;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        padding: 5px 9px;
        color: ${({ theme }) => theme.colors.black};
        margin-left: 70px;
        cursor: pointer;
    }

    .followingButton,
    .editButton {
        border: 1px solid ${({ theme }) => theme.borderColor.default};
    }

    .followButton {
        color: #fff;
        background-color: ${({ theme }) => theme.backgroundColors.blue};
    }
`

export const Follows = styled.div`
    display: flex;
    margin-top: 45px;

    p {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        &:not(:last-child) {
            margin-right: 25px;
        }

        span {
            font-weight: 600;
            margin-right: 3px;
        }
    }
`

export const Name = styled.div`
    margin-top: 45px;
    margin-bottom: 45px;
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
`
export const PostsContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: space-between;
    ul {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li {
            margin-bottom: 20px;
        }
    }
`