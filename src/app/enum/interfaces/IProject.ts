import IPerson from "./IPerson"

export default interface IProject{
  id: string
  name: string,
  project_manager: string,
  team: [],
  deadline: string,
  equipe?: string
  description: string
 };

 export interface IProjectInformation {
  id: string
  name: string,
  project_manager: string,
  team: IPerson[],
  deadline: string,
  equipe?: string
  description: string

 }