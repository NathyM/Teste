import { WebStorage } from "redux-persist";
import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";
import projectsReducer from "./features/projectSlice";

const persistConfig: {
  key: string;
  version: number;
  storage: WebStorage;
  whitelist?: string[];
} = {
  key: "Prova",
  version: 1,
  storage,
  whitelist: ["user", "project"],
};
const reducers = combineReducers({
  user: userReducer,
  project: projectsReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);

export {};
