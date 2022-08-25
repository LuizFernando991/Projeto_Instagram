import Link from 'next/link'
import * as Styled from './styles'

export type ProfileItemProps = {
    name: string
    imageProfile: string
    username: string
    key?: string
}

export function ProfileItem({ key = '', imageProfile, name, username }: ProfileItemProps) {
    return (
        <Styled.ListItem key={key}>
            <Link href={`/${username}`}>
                <a>
                    {imageProfile ? (
                        <img
                            width="44"
                            height="44"
                            src={`http://localhost:5050/images/profileImages/${imageProfile}`}
                        />
                    ) : (
                        <img width="44" height="44" src="/assets/images/defaultImageProfile.jpg" />
                    )}
                    <Styled.InfoContainer>
                        <h4>{username}</h4>
                        <p>{name}</p>
                    </Styled.InfoContainer>
                </a>
            </Link>
        </Styled.ListItem>
    )
}
