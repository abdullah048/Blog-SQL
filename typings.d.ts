export interface Books {
  id: number
  title: string
  description: string
  cover: string
}

export interface Users {
  id: number
  username: string
  email: string
  password: string
  img: string
}

export interface Posts {
  id: number
  title: string
  description: string
  img: string
  date: Date
  uid: number
}
