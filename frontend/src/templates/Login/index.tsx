import Image from 'next/image'
import { TextLogo } from '../../components/TextLogo'
import { AuthInput } from '../../components/AuthInput'
import { AuthButton } from '../../components/AuthButton'
import { SeparateLine } from '../../components/SeparateLine'
import * as Styled from './styles'

export function Login() {
    return (
        <Styled.Container>
            <Styled.PhonesContainer>
                <Image
                    src="/assets/images/phones.png"
                    width="454"
                    height="618"
                    alt="logo"
                />
            </Styled.PhonesContainer>
            <div>
                <Styled.Login>
                    <TextLogo width="175" height="51" />
                    <form>
                        <AuthInput placeholder="Email" />
                        <AuthInput placeholder="Password" />
                        <AuthButton text="Log in" />
                    </form>
                    <div className="forgot">
                        <SeparateLine />
                        <a href="#">Forgot password?</a>
                    </div>
                </Styled.Login>
                <Styled.SingUp>
                    <span>Don&apos;t have an account?</span>
                    <a href="#">Sing Up</a>
                </Styled.SingUp>
            </div>
        </Styled.Container>
    )
}
