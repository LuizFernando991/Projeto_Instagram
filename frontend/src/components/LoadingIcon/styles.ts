import styled from 'styled-components'

export const Loadding = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: rgba(138, 138, 138, 0.7);
    height: 50px;
    width: 50px;
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`
