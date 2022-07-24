import styled from 'styled-components'
import { animated } from 'react-spring'

export type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style: any
}

export const CreatePostContainer = styled.div`
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

export const CreatePost = styled(animated.div)<Props>`
    width: 780px;
    height: 700px;
    background-color: #f1f1f1;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 18px;

    .create-post-header {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};
        display: flex;
        align-items: center;
        justify-content: center;

        h3 {
            font-size: 18px;
            color: ${({ theme }) => theme.colors.primaryColor};
        }
    }
`

export const ChosePost = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: all ease 2s;

    h4 {
        margin-bottom: 20px;
        margin-top: 2px;
        font-size: 22px;
        font-weight: 300;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.softGrey};
    }

    .create-post-button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;

        button {
            width: 160px;
            padding: 10px 15px;
            color: ${({ theme }) => theme.colors.white};
            background-color: #0095f6;
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
        }

        p {
            font-weight: 300;
            margin-top: 5px;
            margin-bottom: 5px;
            font-size: 15px;
            color: ${({ theme }) => theme.colors.softGrey};
        }
    }
`
