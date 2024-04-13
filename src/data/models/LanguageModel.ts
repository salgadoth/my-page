import { FluencyLevel } from '../enum/FluencyLevel'

export interface LanguageModel {
  language: string
  fluency_level: FluencyLevel
}
