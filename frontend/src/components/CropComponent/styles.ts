import styled from 'styled-components'

export const CropperContainer = styled.div`
    width: 100%;
`
export const CropperImage = styled.div`
    height: 400px;
    width: 100%;
    position: relative;
`
export const SliderContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    .zoom-label {
        font-weight: 300;
        font-size: 15px;
        color: ${({ theme }) => theme.colors.softGrey};
    }
`
export const ButtonContainer = styled.div`
    width: 100%;
    position: absolute;
    top: -35px;
    right: -700px;

    button {
        color: #0095f6;
        border-radius: 8px;
        font-size: 15px;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }
`
