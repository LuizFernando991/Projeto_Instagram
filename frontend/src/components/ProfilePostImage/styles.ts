import styled from 'styled-components'

export const PostImagePreviewContainer = styled.div`
    position: relative;

    .multipleIcon {
        color: #fff;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
    }
`

export const HoverContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: none;
    transition: all ease 0.2s;

    ${PostImagePreviewContainer}:hover & {
        display: block;
    }

    div {
        color: #fff;
        font-size: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-right: 20px;
            }

            p {
                margin-right: 2px;
            }
        }
    }
`
