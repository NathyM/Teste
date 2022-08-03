import { TaskStatusEnum } from "../EnumTaskStatus"
import { IProjectInformation } from "./IProject"

export default interface ITask{
  id: string
  project: IProjectInformation
  name: string
  responsible: string
  deadline: string
  end?: string
  description: string
  status: TaskStatusEnum
}