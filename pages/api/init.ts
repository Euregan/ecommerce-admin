import type { NextApiRequest, NextApiResponse } from 'next'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import database from '../../libs/database'

type Data =
  | {
      message: string
    }
  | {
      count: number
    }
  | {
      token: string
    }

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method === 'GET') {
    return database.user
      .count()
      .then((count) => response.status(200).json({ count }))
      .catch((error: any) => {
        console.error(error)
        response.status(500).json({ message: 'Something wrong happened' })
      })
  } else if (request.method === 'POST') {
    const { email, password } = request.body
    if (!email || !password) {
      return response.status(400).json({ message: 'Missing information' })
    }

    if (!process.env.JWT_SECRET) {
      return response.status(500)
    }

    return database.user
      .count()
      .then((count) =>
        count === 0
          ? argon2.hash(password)
          : Promise.reject('Cannot initialize as there already are users')
      )
      .then((hashedPassword) =>
        database.user.create({
          data: {
            password: hashedPassword,
            email,
          },
        })
      )
      .then((user) => {
        if (!process.env.JWT_SECRET) {
          return response.status(500)
        }

        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET
        )
        response.setHeader('jwt', token).status(200).json({ token })
      })
      .catch((error) => {
        console.error(error)
        response.status(500).json({ message: 'Something wrong happened' })
      })
  } else {
    response.status(405).json({ message: 'Wrong method' })
  }
}
