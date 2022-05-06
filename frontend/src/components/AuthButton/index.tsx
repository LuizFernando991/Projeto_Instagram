import React from 'react'
import * as Styled from './styles'

export type AuthButtonProps = {
    text: string
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export function AuthButton({ text, onClick }: AuthButtonProps) {
    return <Styled.Button onClick={onClick}>{text}</Styled.Button>
}
