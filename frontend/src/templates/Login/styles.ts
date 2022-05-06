import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
`

export const PhonesContainer = styled.div`
    margin-right: 3rem;
`

export const Login = styled.div`
    background: ${({ theme }) => theme.backgroundColors.white};
    width: 35rem;
    min-height: 47rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.borderColor.default};
    padding: 2rem 4rem;
    margin-top: 4rem;
    margin-bottom: 2rem;

    img {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .forgot {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.blue};
    }
`

export const SingUp = styled.div`
    width: 35rem;
    background: ${({ theme }) => theme.backgroundColors.white};
    margin: 0 auto;
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
