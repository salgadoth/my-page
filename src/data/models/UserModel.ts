import { ExperienceModel } from './ExperienceModel'
import { LanguageModel } from './LanguageModel'
import { ProjectModel } from './ProjectModel'

export interface UserModel {
  username: string
  fname: string
  lname: string
  created_at: string
  updated_at: string
  title: string

  my_experiences: ExperienceModel[]
  my_projects: ProjectModel[]
  my_skils: string[]
  my_laguages: LanguageModel[]
}
