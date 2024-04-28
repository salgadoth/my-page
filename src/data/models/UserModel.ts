import { ContactModel } from './ContactModel'
import { ExperienceModel } from './ExperienceModel'
import { LanguageModel } from './LanguageModel'
import { LinkModel } from './LinkModel'
import { ProjectModel } from './ProjectModel'

export interface UserModel {
  username: string
  fname: string
  lname: string
  created_at: string
  updated_at: string
  title: string

  skill_set: string[]
  my_experiences: ExperienceModel[]
  my_projects: ProjectModel[]
  my_laguages: LanguageModel[]
  my_contacts: ContactModel[]
  my_links: LinkModel[]
}
