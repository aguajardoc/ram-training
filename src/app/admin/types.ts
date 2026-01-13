import { Role } from "generated/prisma"

export type UserRow = {
  id: string
  name: string | null
  email: string | null
  role: Role
  _count: {
    solves: number
  }
}