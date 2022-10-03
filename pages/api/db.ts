// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blog'
})
