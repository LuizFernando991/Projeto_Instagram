import * as Styled from './styles'

export type AuthInputProps = {
    placeholder?: string
}

export function AuthInput({ placeholder }: AuthInputProps) {
    return <Styled.Input type="text" placeholder={placeholder} />
}
