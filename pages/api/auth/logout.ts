// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteCookie } from 'cookies-next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  deleteCookie('access_token', { req, res })
  res.status(200).json({ message: 'Logged Out Successfully' })
}
