// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Users } from '../../../typings'
import { db } from '../db'
import bcrypt from 'bcryptjs'
import { MysqlError } from 'mysql'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req

  if (method === 'POST') {
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?'
    db.query(q, [req.body.email, req.body.username], (err, data) => {
      if (err) return res.status(500)
      if (data.length)
        return res.status(409).json({ message: 'user already exists' })

      // Hash password and create user.
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.password, salt)

      // Query to insert user into db.
      const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES (?)'
      const values = [req.body.username, req.body.email, hash]

      db.query(q, [values], err => {
        if (err) return res.status(500)
        return res.status(200).json({ message: 'User has been created' })
      })
    })
  }
}
