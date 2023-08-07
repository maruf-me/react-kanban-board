import appSlice from "./appSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const reducer = combineReducers({ app: appSlice });

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;