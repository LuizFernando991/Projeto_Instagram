import styled from 'styled-components'

type Props = {
    isOnFocus: boolean
}

export const SearchBarContainer = styled.div<Props>`
    position: relative;

    svg {
        font-size: 2rem;
        color: #8e8e8e;
        position: absolute;
        top: 0.6rem;
        left: 1rem;
    }

    input {
        width: 27rem;
        border-radius: 0.5rem;
        font-size: 1.3rem;
        padding: ${({ isOnFocus }) => (isOnFocus ? '0.7rem 0 0.7rem 1.5rem' : '0.7rem 0 0.7rem 4rem')};
        font-family: ${({ theme }) => theme.font.family.default};
        background-color: ${({ theme }) => theme.backgroundColors.grey};
        border: 0.1rem solid ${({ theme }) => theme.borderColor.default};
        outline: none;
        margin-bottom: 0.5rem;
        transition: all ease-in 0.1s;

        &::placeholder {
            font-size: 1.3rem;
            font-family: ${({ theme }) => theme.font.family.default};
            color: #8e8e8e;
        }

        &:focus {
            border: 0.1rem solid ${({ theme }) => theme.borderColor.focus};
        }

        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            height: 1.3rem;
            width: 1.3rem;
            border-radius: 1.3rem;
            color: #8e8e8e;
            background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
            margin-right: 8px;
        }
    }
`
