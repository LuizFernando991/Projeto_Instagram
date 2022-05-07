import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.borderColor.default};
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 60%;
    max-width: 30rem;

    .icon-logo {
        display: flex;
        align-items: center;
        font-size: 3rem;
        display: none;
        cursor: pointer;
        a {
            display: flex;
            align-items: center;
        }
    }

    .text-logo {
        display: flex;
        align-items: center;
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
