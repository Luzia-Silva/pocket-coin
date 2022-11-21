import { queries } from './queries'

type SignInRequestData = {
  email: string
  password: string
}
const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
   await delay()
  return {
    user: {
      _id: {
        $oid: '637bad0eb924e22dd23d1fed',
      },
      name: 'Luzia Gabriela ',
      surname: 'Lu ',
      category: [
        'Um conteúdo Bússola',
        'Pop',
        'Mundo',
        'Brasil',
        'Economia',
        'Minhas Finanças',
      ],
      amount: ['USD-BRL', 'EUR-BRL', 'BTC-BRL'],
      email: 'aluziagabriela@gmail.com',
      password: '$2a$12$XBPQn2cDSbyBLQYklaT33erczJX/rRB.B0pjTyAkCUBdH/5dtsjsC',
    },
    message: 'authentication performed successfully',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdhYjUzNmQ3Mjc2NGU4MDgxNGM0YzQiLCJpYXQiOjE2NjkwNDc1NDksImV4cCI6MTY2OTEzMzk0OX0.viZ_e5UHi25ZCTu7A7Vt9bbxReKz-VOjOPxpYlobTdU',
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      _id: {
        $oid: '637bad0eb924e22dd23d1fed',
      },
      name: 'Luzia Gabriela ',
      surname: 'Lu ',
      category: [
        'Um conteúdo Bússola',
        'Pop',
        'Mundo',
        'Brasil',
        'Economia',
        'Minhas Finanças',
      ],
      amount: ['USD-BRL', 'EUR-BRL', 'BTC-BRL'],
      email: 'aluziagabriela@gmail.com',
      password: '$2a$12$XBPQn2cDSbyBLQYklaT33erczJX/rRB.B0pjTyAkCUBdH/5dtsjsC',
    },

    message: 'authentication performed successfully',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdhYjUzNmQ3Mjc2NGU4MDgxNGM0YzQiLCJpYXQiOjE2NjkwNDc1NDksImV4cCI6MTY2OTEzMzk0OX0.viZ_e5UHi25ZCTu7A7Vt9bbxReKz-VOjOPxpYlobTdU',
  }
}
