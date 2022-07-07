import styled from 'styled-components'

export const NavBar = styled.nav`
    margin-left: auto;
    display: flex;
    justify-content: right;

    svg {
        margin-left: 24px;
        cursor: pointer;
    }
`
export const Notifications = styled.div`
    position: relative;

    .notification-dot {
        width: 5px;
        height: 5px;
        border-radius: 999px;
        background-color: #ea0059;
        position: absolute;
        bottom: -2px;
        right: calc(25% - 2.5px);
    }
`
export const Profile = styled.div`
    position: relative;
    margin-left: 24px;
    img {
        cursor: pointer;
        border-radius: 555px;
    }
`
