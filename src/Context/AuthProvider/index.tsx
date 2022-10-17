import React, { createContext, useState } from 'react'
import { IAuthProvider, IContext, IUSers } from './types'

export const AuthContext = createContext<IContext>({} as IContext)

// export const AuthProvider = ({ children }: IAuthProvider) => {
//   const [user, setUser] = useState<IUSers | null>()
//   async function authenticate(email: string, password: string) {}
//   function logout() {}
//   return (
//     <AuthContext.Provider  value={{ ...user, authenticate, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
