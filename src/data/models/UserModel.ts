import { ContactModel } from './ContactModel'
import { EducationModel } from './EducationModel'
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
  curr_company: ExperienceModel

  skill_set: string[]
  my_experiences: ExperienceModel[]
  my_projects: ProjectModel[]
  my_languages: LanguageModel[]
  my_contacts: ContactModel[]
  my_links: LinkModel[]
  my_education: EducationModel[]
}
