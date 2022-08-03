
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjectInformation } from '../../app/enum/interfaces/IProject';


interface IProject {
  id: string,
  name: string,
  project?: IProjectInformation,
}

const initialState: IProject = {
id: '',
name: '',
project: undefined,
};

const clearProject: IProject = {
id: '',
name: '',
project: undefined,
};

export const projectSlice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    storeProject: (state, action: PayloadAction<IProject>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    removeProject: state => {
      state.id = clearProject.id;
      state.name = clearProject.name;
      state.project = clearProject.project;
    },
    updateDataProject: (state, action: PayloadAction<IProjectInformation>) => {
      state.project = action.payload;
    },
  },
});

export const { storeProject, removeProject, updateDataProject } = projectSlice.actions;
export default projectSlice.reducer;