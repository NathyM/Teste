import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
    user: {
        name: string,
        preferred_username: string,
        id: string,
    }
}

const initialState: IUser = {
  user: {
    name: '',
    preferred_username: '',
    id: '',
  },
};

const clearUser: IUser = {
  user: {
    name: '',
    preferred_username: '',
    id: '',
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    storeUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload.user;
    },
    removeUser: state => {
      state.user = clearUser.user;
    },
    setId: (state, action: PayloadAction<{ user: { id: string } }>) => {
      state.user.id = action.payload.user.id;
    },
    setPersonId: (state, action: PayloadAction<{ user: { person_id: string } }>) => {
      //@ts-ignore
      state.user.person_id = action.payload.user.person_id;
    },
  },
});

export const { removeUser, storeUser, setId, setPersonId } = userSlice.actions;

export default userSlice.reducer;



