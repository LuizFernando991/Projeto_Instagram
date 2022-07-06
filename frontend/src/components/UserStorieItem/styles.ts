import styled, { css } from 'styled-components'

export type Props = {
    haveStories: boolean
}

export const UserStorieItem = styled.div<Props>`
    display: inline-block;
    cursor: pointer;
    width: 62.3px;
    height: 62.3px;
    position: relative;

    .border {
        border-radius: 6666px;
        border: 2px solid #ea0059;
        display: flex;
        padding: 2px;
        align-items: center;
        ${({ haveStories }) =>
            css`
                ${haveStories ? '' : 'border: none'}
            `}
    }

    img {
        border-radius: 6666px;
        border: 2px solid #ea0059;
    }

    p {
        text-align: center;
        margin-top: 3px;
        font-weight: 700;
    }

    svg {
        font-size: 17px;
        color: #0083ff;
        background-color: white;
        border-radius: 9999px;
        position: absolute;
        top: calc(50% + 15px);
        right: 0;
    }
`
