import styled from 'styled-components'

export const CreateNewPostContainer = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    background-color: #f1f1f1;
    border-radius: 18px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .input-icon {
        svg {
            font-size: 60px;
            color: ${({ theme }) => theme.colors.softGrey};
            transition: all ease-in 0.2s;
            cursor: pointer;

            &:hover {
                color: #383838;
            }
        }
    }

    h3 {
        margin-bottom: 20px;
        margin-top: 2px;
        font-size: 22px;
        font-weight: 300;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.softGrey};
    }
`
