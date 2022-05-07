import Link from 'next/link'
import { api } from '../../helpers/api'
import { AuthContext } from '../../contexts/AuthContext'
import { setCookie } from 'nookies'
import { useContext, useState } from 'react'
import { TextLogo } from '../../components/TextLogo'
import { SeparateLine } from '../../components/SeparateLine'
import { AuthButton } from '../../components/AuthButton'
import { AuthInput } from '../../components/AuthInput'
import * as Styled from './styles'

type User = {
    email: string
    name: string
    username: string
    password: string
    confirmPassword: string
}

export function Register() {
    const [userRegister, setUserRegister] = useState<User | null>()
    const [errorMessage, setErrorMessage] = useState<string | null>()
    const { setUser } = useContext(AuthContext)

    function handleOnInputChange(event: { target: HTMLInputElement }): void {
        setUserRegister({ ...userRegister, [event.target.name]: event.target.value })
    }

    async function handleOnSubmit(event: React.FormEvent) {
        event.preventDefault()
        try {
            const data = await api.post('/user/register', userRegister)
            setCookie(undefined, 'instagram-token', data.data.token, {
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/',
            })
            api.defaults.headers['Authorization'] = `Bearer ${data.data.token}`
            setUser(data.data.user)
            //route user to home page
        } catch (err) {
            switch (err.response.data.message) {
                case 'email already used':
                    setErrorMessage('Email already used')
                    break
                case 'username already user':
                    setErrorMessage('Username already used')
                    break
                case 'name is required':
                    setErrorMessage('Invalid name')
                    break
                case 'username is required':
                    setErrorMessage('Invalid username')
                    break
                case 'email is required':
                    setErrorMessage('Invalid email')
                    break
                case 'password is required':
                    setErrorMessage('Invalid password')
                    break
                case 'confirmPassword is required':
                    setErrorMessage('Confirm password')
                    break
                case 'password must match with confirmPassword':
                    setErrorMessage('Password do not match with confirm password')
                    break
                default:
                    setErrorMessage('Something went wrong try later')
            }
        }
    }
    return (
        <Styled.Container>
            <Styled.RegisterContainer errorMessage={errorMessage}>
                <TextLogo width="175" height="51" />
                <h2>Sing up to see photos and videos from your friends</h2>
                <SeparateLine />
                <form>
                    <AuthInput name="email" onChange={handleOnInputChange} placeholder="Email" />
                    <AuthInput name="name" onChange={handleOnInputChange} placeholder="Name" />
                    <AuthInput name="username" onChange={handleOnInputChange} placeholder="Username" />
                    <AuthInput type="password" name="password" onChange={handleOnInputChange} placeholder="Password" />
                    <AuthInput
                        type="password"
                        name="confirmPassword"
                        onChange={handleOnInputChange}
                        placeholder="Confirm Password"
                    />
                    <AuthButton onClick={handleOnSubmit} text="Sing up" />
                    <p>{errorMessage ? errorMessage : 'Placeholder'}</p>
                </form>
                <p>
                    By signing up, you agree to our <span>Terms</span>, <span>Data Policy</span> and{' '}
                    <span>Cookies Policy</span>.
                </p>
            </Styled.RegisterContainer>
            <Styled.Login>
                <span>Have an account?</span>
                <Link href="/auth/login">
                    <a>Login</a>
                </Link>
            </Styled.Login>
        </Styled.Container>
    )
}
