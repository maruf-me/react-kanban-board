import appSlice from "./appSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ app: appSlice });
export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;