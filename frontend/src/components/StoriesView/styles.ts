import styled, { css } from 'styled-components'

export type Props = {
    isStorieViewOpen: boolean
}

export const StoriesContainer = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.92);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    z-index: 3;
    svg {
        color: white;
        font-size: 30px;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
    .text-logo {
        position: absolute;
        top: 20px;
        left: 20px;
    }

    ${({ isStorieViewOpen }) =>
        css`
            ${isStorieViewOpen ? '' : 'display: none'}
        `}
`
export const StorieRow = styled.ul`
    display: flex;
    align-items: center;
    min-width: 100%;
    justify-content: start;
    transition: all ease-in 0.4s;
    transform-origin: left;
    transform: translateX(calc(50vw - 200px));
`
