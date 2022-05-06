import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    max-width: 35rem;
`

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    width: 100%;
    padding: 3rem 4rem;
    border: 0.1rem solid ${({ theme }) => theme.borderColor.default};

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 2rem;
    }

    h2 {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.secondaryColor};
    }
    p {
        color: ${({ theme }) => theme.colors.secondaryColor};
        text-align: center;
        font-size: 1.1rem;
    }

    p span {
        font-weight: bold;
    }
`

export const Login = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.backgroundColors.white};
    margin-top: 3rem;
    border: 0.1rem solid ${({ theme }) => theme.borderColor.default};
    padding: 2rem;
    text-align: center;

    span {
        font-size: 1.3rem;
        margin-right: 0.5rem;
    }

    a {
        font-size: 1.3rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.blue};
    }
`
