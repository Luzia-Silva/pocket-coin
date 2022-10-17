export interface IUSers {
  email?: string
  token?: string
}
export interface IContext extends IUSers {
  authenticate: (email: string, YupPassword: string) => Promise<void>
  logout: () => void
}
export interface IAuthProvider {
  children: JSX.Element
}
