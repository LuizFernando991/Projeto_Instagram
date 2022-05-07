import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '../../helpers/api'
import { AuthContext } from '../../contexts/AuthContext'
import { setCookie } from 'nookies'
import { TextLogo } from '../../components/TextLogo'
import { AuthInput } from '../../components/AuthInput'
import { AuthButton } from '../../components/AuthButton'
import { SeparateLine } from '../../components/SeparateLine'
import * as Styled from './styles'

export type UserType = {
    email: string
    password: string
}

export function Login() {
    const [userLogin, setUserLogin] = useState<UserType | undefined>()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const { setUser } = useContext(AuthContext)

    function handleOnInputChange(event: { target: HTMLInputElement }): void {
        setUserLogin({ ...userLogin, [event.target.name]: event.target.value })
    }

    async function handleOnSubmit(event: React.FormEvent) {
        event.preventDefault()
        try {
            const data = await api.post('/user/login', userLogin)
            setCookie(undefined, 'instagram-token', data.data.token, {
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/',
            })
            api.defaults.headers['Authorization'] = `Bearer ${data.data.token}`
            setUser(data.data.user)
            //route user to home page
        } catch (err) {
            switch (err.response.data.message) {
                case 'email is required':
                    setErrorMessage('Invalid email!')
                    break
                case 'password is required':
                    setErrorMessage('Invalid password!')
                    break
                case 'user not found':
                    setErrorMessage('User not found!')
                    break
                case 'wrong password':
                    setErrorMessage('Wrong password!')
                    break
                default:
                    setErrorMessage('Something went wrong try later')
            }
        }
    }

    return (
        <Styled.Container>
            <Styled.PhonesContainer>
                <Image src="/assets/images/phones.png" width="454" height="618" alt="logo" />
            </Styled.PhonesContainer>
            <div>
                <Styled.Login errorMessage={errorMessage}>
                    <TextLogo width="175" height="51" />
                    <form>
                        <AuthInput placeholder="Email" name="email" onChange={handleOnInputChange} />
                        <AuthInput
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={handleOnInputChange}
                        />
                        <AuthButton onClick={handleOnSubmit} text="Log in" />
                        <p>{errorMessage ? errorMessage : 'Placeholder'}</p>
                    </form>
                    <div className="forgot">
                        <SeparateLine />
                        <a href="#">Forgot password?</a>
                    </div>
                </Styled.Login>
                <Styled.SingUp>
                    <span>Don&apos;t have an account?</span>
                    <Link href="/auth/register">
                        <a>Sing Up</a>
                    </Link>
                </Styled.SingUp>
            </div>
        </Styled.Container>
    )
}
