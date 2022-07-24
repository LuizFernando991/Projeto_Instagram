import styled, { css } from 'styled-components'

export type Props = {
    overflow: boolean
}

export const HomeContainer = styled.div<Props>`
    height: 100vh;
    ${({ overflow }) => css`
        ${overflow ? 'overflow: auto;' : 'overflow: hidden;'}
    `}
`

export const Main = styled.main`
    width: 53%;
    margin: 3rem auto;
    display: flex;
    justify-content: space-around;
`
export const Posts = styled.div`
    width: 500px;
`
export const PostsColl = styled.section`
    width: 500px;
    margin-top: 20px;
`
