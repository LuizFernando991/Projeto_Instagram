import styled from 'styled-components'

export const AsideContainer = styled.aside`
    width: 35%;
    display: flex;
    margin-top: 20px;
`

export const ImageAsideContainer = styled.div`
    border-radius: 9999px;

    img {
        border-radius: 9999px;
    }
`
export const InfoContainer = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    h4 {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: 1.23em;
    }

    p {
        color: ${({ theme }) => theme.colors.softGrey};
        font-size: 0.99em;
        margin-top: 2px;
    }
`
