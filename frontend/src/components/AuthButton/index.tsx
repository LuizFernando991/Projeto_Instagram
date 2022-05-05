import * as Styled from './styles'

export type AuthButtonProps = {
    text: string
}

export function AuthButton({ text }: AuthButtonProps) {
    return <Styled.Button>{text}</Styled.Button>
}
