// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../db'
import { Posts } from '../../../typings'

interface NextResponse extends NextApiResponse {
  message?: string
  data: Posts[]
}

export default function handler(req: NextApiRequest, res: NextResponse) {
  const { method } = req
  const q = req.query.cat
    ? 'SELECT * FROM post WHERE cat=?'
    : 'SELECT * FROM post'

  switch (method) {
    case 'GET':
      db.query(q, [req.query.cat], (err, data) => {
        if (err)
          return res.status(500).json({
            message: 'Error while fetching posts...'
          })

        res.status(200).json(data)
      })
      break
    case 'POST':
      res.json({
        message: 'Hello'
      })
      break
    case 'PUT':
      res.json({
        message: 'Hello'
      })
      break
    case 'DELETE':
      res.json({
        message: 'Hello'
      })
      break
    default:
      break
  }
}
