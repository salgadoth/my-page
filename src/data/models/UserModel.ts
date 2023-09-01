import { ExperienceModel } from './ExperienceModel'
import { ProjectModel } from './ProjectModel'

export interface UserModel {
  username: string
  fname: string
  lname: string
  created_at: string
  updated_at: string

  UserExperience: ExperienceModel[]
  UserProjects: ProjectModel[]
}
