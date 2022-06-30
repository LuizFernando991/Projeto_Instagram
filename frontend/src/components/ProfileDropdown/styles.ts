import styled from 'styled-components'

export type Props = {
    isOpen: boolean
}

export const DropdownContainer = styled.div<Props>`
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    border-radius: 6px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
    width: 18rem;
    height: 12rem;
    top: 150%;
    right: -8px;
    z-index: 99999;
    font-size: 1.2rem;

    ul {
        width: 100%;
        height: 60%;
        margin-top: -10px;
    }

    li a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};

        &:hover {
            background-color: ${({ theme }) => theme.backgroundColors.grey};
        }
    }

    li svg {
        margin-left: 0rem;
        margin-right: 1rem;
    }

    .log-out {
        display: flex;
        padding-left: 1rem;
        flex-direction: column;
        justify-content: center;
        height: 40px;
        margin-top: 2px;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.backgroundColors.grey};
        }
    }
`
export const Arrow = styled.div`
    position: relative;
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    border-top: 1px solid ${({ theme }) => theme.borderColor.default};
    border-left: 1px solid ${({ theme }) => theme.borderColor.default};
    top: -6px;
    left: 86.5%;
    transform: rotate(45deg);
    z-index: 3;
`
export const OnClickContainer = styled.div<Props>`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`
