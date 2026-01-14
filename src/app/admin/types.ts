import { Role, type Solve, type User } from "generated/prisma"

export type UserRow = {
  id: string
  name: string | null
  email: string | null
  role: Role
  _count: {
    solves: number
  }
}

export type SolveUser = {
  user: User
} & Solve;

export type ProblemRow = {
  id: string
  name: string
  url: string
  solves: SolveUser[]
}