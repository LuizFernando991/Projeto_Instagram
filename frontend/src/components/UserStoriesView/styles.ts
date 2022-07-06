import styled from 'styled-components'

export const UserStoriesContainer = styled.div`
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
`
