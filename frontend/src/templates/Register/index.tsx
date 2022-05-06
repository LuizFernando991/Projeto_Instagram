import { TextLogo } from '../../components/TextLogo'
import { SeparateLine } from '../../components/SeparateLine'
import { AuthButton } from '../../components/AuthButton'
import { AuthInput } from '../../components/AuthInput'
import * as Styled from './styles'

export function Register() {
    return (
        <Styled.Container>
            <Styled.RegisterContainer>
                <TextLogo width="175" height="51" />
                <h2>Sing up to see photos and videos from your friends</h2>
                <SeparateLine />
                <form>
                    <AuthInput placeholder="Email" />
                    <AuthInput placeholder="Name" />
                    <AuthInput placeholder="Username" />
                    <AuthInput placeholder="Password" />
                    <AuthInput placeholder="Confirm Password" />
                    <AuthButton text="Sing up" />
                </form>
                <p>
                    By signing up, you agree to our <span>Terms</span>,{' '}
                    <span>Data Policy</span> and <span>Cookies Policy</span>.
                </p>
            </Styled.RegisterContainer>
            <Styled.Login>
                <span>Have an account?</span>
                <a href="#">Login</a>
            </Styled.Login>
        </Styled.Container>
    )
}
