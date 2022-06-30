import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.borderColor.default};
    position: sticky;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60%;
    max-width: 30rem;

    & > div {
        width: 33%;
    }

    .icon-logo {
        display: flex;
        align-items: center;
        font-size: 3rem;
        display: none;
        margin-right: auto;
        cursor: pointer;
        a {
            display: flex;
            align-items: center;
        }
    }

    .text-logo {
        display: flex;
        align-items: center;
        margin-right: auto;
        cursor: pointer;
        a {
            display: flex;
            align-items: center;
        }
    }

    @media (max-width: 600px) {
        min-width: 0; //see later how to fix it
        .text-logo {
            display: none;
        }
        .icon-logo {
            display: block;
        }
    }
`
