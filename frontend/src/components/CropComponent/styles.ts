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
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        padding: 10px 10px;
        color: ${({ theme }) => theme.colors.white};
        background-color: #0095f6;
        border-radius: 8px;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }
`
