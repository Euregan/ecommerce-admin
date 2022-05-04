import type { NextApiRequest, NextApiResponse } from 'next'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import database from '../../libs/database'

type Data =
  | {
      message: string
    }
  | {
      token: string
    }

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method === 'POST') {
    if (!process.env.JWT_SECRET) {
      return response.status(500)
    }

    const { email, password } = request.body
    if (!email || !password) {
      return response.status(400).json({ message: 'Missing information' })
    }

    return database.user
      .findUnique({
        where: {
          email,
        },
      })
      .then((user) => {
        if (user) {
          return argon2.verify(user.password, password).then((matches) => {
            if (!process.env.JWT_SECRET) {
              return response.status(500)
            }

            if (matches) {
              const token = jwt.sign(
                {
                  id: user.id,
                  email: user.email,
                },
                process.env.JWT_SECRET
              )
              response.setHeader('jwt', token).status(200).json({ token })
            } else {
              response.status(401).json({
                message: 'Either the email or the password is invalid',
              })
            }
          })
        } else {
          response.status(401).json({
            message: 'Either the email or the password is invalid',
          })
        }
      })
      .catch((error: any) => {
        console.error(error)
        response.status(500).json({ message: 'Something wrong happened' })
      })
  } else {
    response.status(405).json({ message: 'Wrong method' })
  }
}
