import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../types/User'

type Handler<R> = (
  request: NextApiRequest,
  response: NextApiResponse<R>,
  user: User
) => Promise<R>

export const authenticated = <R>(handler: Handler<R>) => (
  request: NextApiRequest,
  response: NextApiResponse<R>
) => {
  const token =
    request.headers.authorization &&
    request.headers.authorization.split('Bearer ')[1]
  try {
    if (token === undefined || process.env.JWT_SECRET === undefined) {
      return response.status(401).end()
    }

    const user = jwt.verify(token, process.env.JWT_SECRET) as User

    if (process.env.JWT_EXPIRES) {
      response.setHeader(
        'jwt',
        jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES }
        )
      )
    }

    return handler(request, response, user)
  } catch (error) {
    console.error(error)
    response.status(401).end()
  }
}
