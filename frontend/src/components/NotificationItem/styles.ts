import styled from 'styled-components'

export const NotificationItem = styled.li`
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.backgroundColors.white};
    display: flex;
    justify-content: start;
    padding: 0.8em 1em;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor.default};
    &:hover {
        background-color: ${({ theme }) => theme.backgroundColors.grey};
    }
    img {
        border-radius: 5555px;
    }
`
export const InfoContainer = styled.div`
    margin-left: 2rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    span {
        margin-right: 0.5rem;
        font-weight: bold;
    }
    .time {
        font-weight: 300;
        color: ${({ theme }) => theme.colors.softGrey};
    }
`
