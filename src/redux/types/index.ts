import { store } from '../store.js';
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
