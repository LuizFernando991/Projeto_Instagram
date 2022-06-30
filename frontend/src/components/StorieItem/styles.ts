import styled from 'styled-components'

export type Props = {
    isVisualizate: boolean
}

export const StorieItem = styled.div<Props>`
    display: inline-block;
    transform: scale(0.9);

    & > div {
        border-radius: 6666px;
        border: 2px solid ${({ isVisualizate, theme }) => (isVisualizate ? theme.borderColor.default : '#ea0059')};
        display: flex;
        padding: 2px;
        align-items: center;
    }

    img {
        border-radius: 6666px;
    }

    p {
        text-align: center;
        margin-top: 3px;
        font-weight: 700;
    }
`
