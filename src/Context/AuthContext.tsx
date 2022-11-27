import { createContext, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useRouter } from "next/router";

import { recoverUserInformation, signInRequest } from "../services/auth";
import { IUser } from "../interface";
import Router from "react-router"
import { useMutation } from "@tanstack/react-query";
import baseUrlGlobal from "../services/baseUrlGlobal";
import { AxiosError } from "axios";
import Error from "next/error";

type SignInData = {
  email: string
  password: string
}
type AuthContextType = {
  isAuthenticated: boolean
  user: IUser
  signIn: (data: SignInData) => Promise<void>
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const router = useRouter()
  const [user, setUser] = useState<IUser | any>(null)
  const isAuthenticated = !!user
  useEffect(() => {
    const { 'pocketcoin-token': token } = parseCookies()
    const userId = localStorage.getItem('userId')
    if (token) {
      recoverUserInformation(userId || "").then(response => setUser(response))
    }
  }, [])
  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password
    })
    setCookie(undefined, 'pocketcoin-token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })
    setUser(user)

  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
export async function destroyCookies() {
  destroyCookie({}, 'pocketcoin-token')

}