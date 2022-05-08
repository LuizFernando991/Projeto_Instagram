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
    width: 50rem;
    height: 30rem;
    top: 150%;
    right: -5rem;

    .loading {
        position: relative;
        top: calc(50% - 50px);
        left: calc(50% - 25px);
    }
    .no-notifications {
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        p {
            color: rgba(38, 38, 38, 1);
            font-size: 1.3rem;
            margin-top: 3rem;
        }
        svg {
            font-size: 8rem;
            color: rgba(38, 38, 38, 0.4);
            margin-left: 0;
        }
    }
    z-index: 2;
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
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`
export const NotificationsList = styled.ul`
    width: 100%;
    height: 98%;
`
