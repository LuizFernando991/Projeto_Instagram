import React, { ReactElement } from 'react'
import { NotificationItem } from '../NotificationItem'
import { IoHeartCircleOutline } from 'react-icons/io5'
import * as Styled from './styles'

export type NotificationType = {
    _id: string
    notificationBy: {
        _id: string
        name: string
        username: string
        imageProfile: string
    }
    notificationType: string
    createdAt: Date
}

export type NotificationsDropdownpProps = {
    isNotificationsOpen: boolean
    notifications?: Array<null | NotificationType>
    setIsNotificationsOpen: (isNotificationsOpen: boolean) => void
}

export function NotificationsDropdown({
    isNotificationsOpen,
    setIsNotificationsOpen,
    notifications = [],
}: NotificationsDropdownpProps): ReactElement {
    return (
        <>
            <Styled.DropdownContainer isOpen={isNotificationsOpen}>
                <Styled.Arrow />
                {notifications.length === 0 ? (
                    <div className="no-notifications">
                        <IoHeartCircleOutline />
                        <p>Activity in your posts</p>
                        <p>When someone likes or comments on one of your posts, it will be shown here.</p>
                    </div>
                ) : (
                    <Styled.NotificationsList>
                        {notifications.map((item) => (
                            <NotificationItem key={item._id} notification={item} />
                        ))}
                    </Styled.NotificationsList>
                )}
            </Styled.DropdownContainer>
            <Styled.OnClickContainer isOpen={isNotificationsOpen} onClick={() => setIsNotificationsOpen(false)} />
        </>
    )
}
