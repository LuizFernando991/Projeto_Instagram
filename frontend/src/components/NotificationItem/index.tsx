import Image from 'next/image'
import Link from 'next/link'
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentDate: any = new Date()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const notificationDate: any = new Date(notification.createdAt)
    const time = Math.abs(currentDate - notificationDate) / 1000
    let timeMessage: string
    if (time > 60 && time <= 60 * 60) {
        timeMessage = `${Math.floor(time / 60)}min`
    } else if (time > 60 * 60 && time <= 60 * 60 * 24) {
        timeMessage = `${Math.floor(time / (60 * 60))}h`
    } else if (time > 60 * 60 * 24) {
        timeMessage = `${Math.floor(time / (60 * 60 * 24))}d`
    } else {
        timeMessage = `${time}s`
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
                    {message}. <span className="time">{timeMessage}</span>
                </p>
            </Styled.InfoContainer>
        </Styled.NotificationItem>
    )
}
