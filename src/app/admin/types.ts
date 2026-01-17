import { Role, type ModuleProblem, type Solve, type User } from "generated/prisma"

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

export type ModuleRow = {
  id: string
  name: string
  launchDate: Date
  hidden: Boolean
  moduleProblems: ModuleProblem[]
}