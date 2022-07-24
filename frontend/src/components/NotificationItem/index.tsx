import Image from 'next/image'
import Link from 'next/link'
import { CalcDate } from '../../helpers/date-calc'
import { NotificationType } from '../NotificationsDropdown'
import * as Styled from './styles'

export type NotificationItemProps = {
    notification: NotificationType
}

export function NotificationItem({ notification }: NotificationItemProps) {
    let message: string
    switch (notification.notificationType) {
        case 'follow':
            message = 'Followed you'
            break
        case 'like':
            message = 'Liked your post'
            break
        case 'comment':
            message = 'Commented yout post'
            break
    }

    return (
        <Styled.NotificationItem>
            <Link href="#">
                <a>
                    {notification.notificationBy.imageProfile ? (
                        <Image
                            width="44"
                            height="44"
                            src={`http://localhost:5050/images/profileImages/${notification.notificationBy.imageProfile}`}
                        />
                    ) : (
                        <Image width="44" height="44" src="/assets/images/defaultImageProfile.jpg" />
                    )}
                </a>
            </Link>
            <Styled.InfoContainer>
                <span>{notification.notificationBy.username} </span>
                <p>
                    {message}. <span className="time">{CalcDate(notification.createdAt)}</span>
                </p>
            </Styled.InfoContainer>
        </Styled.NotificationItem>
    )
}
