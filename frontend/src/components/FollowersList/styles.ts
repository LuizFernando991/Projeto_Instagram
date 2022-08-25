import styled from 'styled-components'
import { animated } from 'react-spring'

export type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style: any
}

export const ListContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.6);
`

export const List = styled(animated.section)<Props>`
    width: 400px;
    height: 400px;
    background-color: white;
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`

export const ListHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};

    .close-button {
        color: ${({ theme }) => theme.colors.black};
        position: absolute;
        right: 2px;
        font-size: 28px;
        cursor: pointer;
    }
`
export const Ul = styled.ul`
    width: 100%;
    overflow-y: auto;
    max-height: calc(100% - 50px);
    li {
        display: flex;
        padding: 8px 16px;
        align-items: center;
        img {
            border-radius: 999px;
            margin-right: 15px;
        }

        a {
            color: ${({ theme }) => theme.colors.black};
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
        }

        p {
            color: ${({ theme }) => theme.colors.softGrey};
            font-weight: 400;
            font-size: 14px;
        }
    }
`
