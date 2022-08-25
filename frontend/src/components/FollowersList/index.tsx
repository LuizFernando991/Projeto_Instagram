import Link from 'next/link'
import { RiCloseLine } from 'react-icons/ri'
import { useTransition } from 'react-spring'
import * as Styled from './styles'

export type FollowersListProps = {
    isOpen: boolean
    header: string
    setIsOpen: (isOpen: boolean) => void
    users: Array<{
        _id: string
        name: string
        username: string
        imageProfile: string
    }>
}

export function FollowersList({ isOpen, setIsOpen, header, users }: FollowersListProps) {
    const transition = useTransition(isOpen, {
        from: { transform: 'scale(1.2)', opacity: 0 },
        enter: { transform: 'scale(1)', opacity: 1 },
        leave: { transform: 'scale(1.2)', opacity: 0 },
        delay: 100,
    })
    return (
        <>
            <Styled.ListContainer onClick={() => setIsOpen(false)} />
            {transition((style, item) =>
                item ? (
                    <Styled.List style={style}>
                        <Styled.ListHeader>
                            <p>{header}</p>
                            <RiCloseLine className="close-button" onClick={() => setIsOpen(false)} />
                        </Styled.ListHeader>
                        <Styled.Ul>
                            {users.map((user) => (
                                <li key={user._id}>
                                    {user.imageProfile ? (
                                        <img
                                            src={`http://localhost:5050/images/profileImages/${user.imageProfile}`}
                                            alt={user.username}
                                            width="45"
                                            height="45"
                                        />
                                    ) : (
                                        <img
                                            src="/assets/images/defaultImageProfile.jpg"
                                            alt={user.username}
                                            width="45"
                                            height="45"
                                        />
                                    )}
                                    <div>
                                        <Link href={`/${user.username}`}>
                                            <a>{user.username}</a>
                                        </Link>
                                        <p>{user.name}</p>
                                    </div>
                                </li>
                            ))}
                        </Styled.Ul>
                    </Styled.List>
                ) : (
                    ''
                ),
            )}
        </>
    )
}
