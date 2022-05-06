import styled from 'styled-components'

export const Input = styled.input`
    padding: 1rem 0 1rem 1rem;
    border-radius: 0.3rem;
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.font.family.default};
    background-color: ${({ theme }) => theme.backgroundColors.grey};
    border: 0.1rem solid ${({ theme }) => theme.borderColor.default};
    outline: none;
    margin-bottom: 0.5rem;

    &::placeholder {
        font-size: 1.1rem;
        font-family: ${({ theme }) => theme.font.family.default};
        color: #8e8e8e;
    }

    &:focus {
        border: 0.1rem solid ${({ theme }) => theme.borderColor.focus};
    }
`
