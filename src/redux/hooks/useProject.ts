
import { IProjectInformation } from "../../app/enum/interfaces/IProject";
import { removeProject, storeProject, updateDataProject } from "../features/projectSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export function useProject() {
  const { id, name, project } = useAppSelector((state) => state.project);

  const dispatch = useAppDispatch();

  return{
    project_id : id,
    name,
    data: project,
    atualizarDadosProcesso: (project: IProjectInformation) => dispatch(updateDataProject(project)),
    setProject: (id: string, name:string) => dispatch(storeProject({ id, name })),
    removeProject: () => dispatch(removeProject),
  };
}