import { configureStore } from "@reduxjs/toolkit";
import { base_api } from "./api/RTK_Query";

export const store = configureStore({
  reducer: {
    [base_api.reducerPath]: base_api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(base_api.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
