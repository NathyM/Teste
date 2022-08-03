import { removeUser, setId, setPersonId, storeUser } from "../features/userSlice";
import {useAppSelector, useAppDispatch } from "../hooks";


export function useUser() {
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const name: string = user.name.split(' ')[0];
  return {

    ...user,
    name,
    userData: {
      ...user,
      name,
    },
    storeUser,
    removeUser: () => dispatch(removeUser()),
    changeUserPersonId: (person_id: string) => dispatch(setPersonId({ user: { person_id } })),
    changeUserId: (id: string) => dispatch(setId({ user: { id } })),

  };
}


