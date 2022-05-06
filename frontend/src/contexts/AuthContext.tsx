import React, { createContext, useState } from 'react'

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
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user

    return <AuthContext.Provider value={{ isAuthenticated, setUser, user }}>{children}</AuthContext.Provider>
}
