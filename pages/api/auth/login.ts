// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { setCookie } from 'cookies-next'

interface NextResponse extends NextApiResponse {
  message: string
}

export default function handler(req: NextApiRequest, res: NextResponse) {
  const { method } = req
  if (method === 'POST') {
    // Check if your exist
    const query = 'SELECT * FROM users WHERE username = ?'
    db.query(query, [req.body.username], (err, data) => {
      if (err)
        return res
          .status(500)
          .json({ message: `Error while trying to process the request` })
      if (data.length === 0)
        return res.status(404).json({ message: `User doesn't exist!` })

      const isPassword = bcrypt.compareSync(req.body.password, data[0].password)

      if (!isPassword)
        return res.status(400).json({ message: 'Invalid Password' })

      const isUsername = req.body.username === data[0].username ? true : false

      if (!isUsername)
        return res.status(400).json({ message: 'Invalid Username' })

      const token = jwt.sign({ id: data[0].id }, 'jwtkey')

      setCookie('access_token', token, { req, res })

      const { password, ...rest } = data[0]

      res.status(200).json(rest)
    })
  }
}
