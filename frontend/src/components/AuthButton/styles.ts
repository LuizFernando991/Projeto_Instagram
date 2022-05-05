import styled from 'styled-components'

export const Button = styled.button`
    background-color: #0095f6;
    padding: 1rem 0 1rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.3rem;
    margin: 2rem 0;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    border: none;
`
