import styled from 'styled-components'

export const ListItem = styled.li`
    a {
        width: 100%;
        padding: 0.4rem 1.5rem;
        display: flex;
        align-items: center;
    }

    img {
        width: 44px;
        height: 44px;
        border-radius: 1000px;
        margin-right: 20px;
    }
`
export const InfoContainer = styled.div`
    margin-left: 1rem;
    h4 {
        color: #000;
        font-size: 1.3rem;
        font-weight: 600;
    }

    p {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.softGrey};
    }
`
