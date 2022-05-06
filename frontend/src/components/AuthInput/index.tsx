import React from 'react'
import * as Styled from './styles'

export type AuthInputProps = {
    placeholder?: string
    name: string
    type?: string
    onChange?: (event: { target: HTMLInputElement }) => void
}

export function AuthInput({ placeholder, onChange, type = 'text', name }: AuthInputProps) {
    return <Styled.Input type={type} placeholder={placeholder} onChange={onChange} name={name} />
}
