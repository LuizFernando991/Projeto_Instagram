import styled from 'styled-components'

type Props = {
    isOpen: boolean
}

export const DropdownContainer = styled.div<Props>`
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    border-radius: 6px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
    width: 33rem;
    height: 35rem;
    top: 128%;
    left: -30%;

    .loading {
        position: relative;
        top: calc(50% - 50px);
        left: calc(50% - 25px);
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
    left: 50%;
    transform: rotate(45deg);
    z-index: 3;
`
export const SearchResultList = styled.ul`
    width: 100%;
    max-height: 96%;
    overflow-y: auto;
    margin-bottom: 2rem;
    li:hover {
        height: auto;
        background-color: rgba(219, 219, 219, 0.5);
    }
`
