export interface UsersInterface {
  id: string
  username: string
  password: string
  fname: string
  lname: string

  created_at: Date
  updated_at: Date
}

export interface CreateUsersInterface {
  id: string
  username: string
  password: string
  fname: string
  lname: string
}
