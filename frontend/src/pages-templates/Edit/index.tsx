import * as Styled from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../helpers/api'

export type PasswordFormType = {
    lastPassword: string
    password: string
    confirmPassword: string
}

export function EditPage() {
    const { user } = useContext(AuthContext)
    const [passwordForm, setPasswordForm] = useState<PasswordFormType | null>(null)
    const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const router = useRouter()

    async function handleOnSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (!passwordForm || !passwordForm.password || !passwordForm.confirmPassword || !passwordForm.lastPassword) {
            setErrorMessage('Fill all filds before ')
            return
        }
        if (passwordForm.password !== passwordForm.confirmPassword) {
            setErrorMessage('Password and confirm password must be same')
            return
        }

        try {
            await api.put('user/changepassword', passwordForm)
            router.push('/')
        } catch (err) {
            setErrorMessage('An error occurred, please try later')
            return
        }
    }

    function handleOnInputChange(event: { target: HTMLInputElement }): void {
        setPasswordForm({ ...passwordForm, [event.target.name]: event.target.value })
    }

    return (
        <Styled.EditPageContainer>
            <Header isCreatePostOpen={isCreatePostOpen} setIsCreatePostOpen={setIsCreatePostOpen} />
            <Styled.EditContainer>
                <Styled.SideOptions>
                    <ul>
                        <Styled.Options isSelected={page === 0} onClick={() => setPage(0)}>
                            Edit profile
                        </Styled.Options>
                        <Styled.Options isSelected={page === 1} onClick={() => setPage(1)}>
                            Change Password
                        </Styled.Options>
                    </ul>
                </Styled.SideOptions>
                <Styled.EditInfo>
                    {page === 0 ? (
                        <div></div>
                    ) : (
                        <Styled.PasswordContainer>
                            <Styled.ImagePasswordPageContainer>
                                <div className="imageContainer">
                                    <div className="image">
                                        {user?.imageProfile ? (
                                            <Image
                                                width="45"
                                                height="45"
                                                src={`http://localhost:5050/images/profileImages/${user?.imageProfile}`}
                                            />
                                        ) : (
                                            <Image
                                                width="45"
                                                height="45"
                                                src="/assets/images/defaultImageProfile.jpg"
                                            />
                                        )}
                                    </div>
                                </div>
                                <h2>{user?.username}</h2>
                            </Styled.ImagePasswordPageContainer>
                            <Styled.PasswordForm onSubmit={handleOnSubmit}>
                                <div>
                                    <aside>
                                        <label htmlFor="lastPassword">Current Password</label>
                                    </aside>
                                    <input
                                        id="lastPassword"
                                        name="lastPassword"
                                        type="password"
                                        onChange={handleOnInputChange}
                                    />
                                </div>
                                <div>
                                    <aside>
                                        <label htmlFor="password">New Password</label>
                                    </aside>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={handleOnInputChange}
                                    />
                                </div>
                                <div>
                                    <aside>
                                        <label htmlFor="confirmPassword">Confirm New Password</label>
                                    </aside>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        onChange={handleOnInputChange}
                                    />
                                </div>
                                <div>
                                    <input type="submit" value="Change Password" />
                                </div>
                            </Styled.PasswordForm>
                            {errorMessage ? <p className="erroMessage">{errorMessage}</p> : ''}
                        </Styled.PasswordContainer>
                    )}
                </Styled.EditInfo>
            </Styled.EditContainer>
        </Styled.EditPageContainer>
    )
}
