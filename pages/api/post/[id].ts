import jwt from 'jsonwebtoken'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../db'
import { Posts } from '../../../typings'
import { getCookie } from 'cookies-next'

interface NextResponse extends NextApiResponse {
  message?: string
  data: Posts[]
}

export default function handler(req: NextApiRequest, res: NextResponse) {
  const { method } = req
  if (method === 'GET') {
    const q =
      'SELECT  `title`, `desc`, `cover`, `date`, `cat`, p.id AS id, p.username FROM user u JOIN post p ON u.id=p.uid WHERE p.id=? '
    db.query(q, [req.query.id], (err, data) => {
      if (err)
        return res.status(500).json({
          message: 'Error while fetching posts'
        })
      res.status(200).json(data[0])
    })
  } else if (method === 'DELETE') {
    const token = getCookie('access_token', { req, res })

    if (!token) return res.status(401).json({ message: 'Auth failed!' })

    jwt.verify(token as string, 'jwtkey', (err, userInfo) => {
      if (err) return res.status(403).json({ message: 'Token not valid!' })
      const q = 'DELETE FROM post WHERE `id` = ? AND `uid` = ?'

      db.query(q, [req.query.id, userInfo?.id])

      res.status(200).json({
        message: 'Post deleted successfully'
      })
    })
  }
}
