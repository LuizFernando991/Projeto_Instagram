import React, { createContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { api } from '../helpers/api'

type AuthContextType = {
    isAuthenticated: boolean
    user: User | undefined
    setUser: (user: User) => void
}

type User = {
    _id: string
    name: string
    email: string
    username: string
    imageProfile: string
    notifications: []
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user

    useEffect(() => {
        const { 'instagram-token': token } = parseCookies()
        if (token) {
            api.get('/user/currentuser').then((res) => {
                setUser(res.data.user)
            })
        }
    }, [])

    return <AuthContext.Provider value={{ isAuthenticated, setUser, user }}>{children}</AuthContext.Provider>
}
