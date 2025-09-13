import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from "./slices/auth-slice.ts";


export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
  }), middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

export const { dispatch } = store
