import { configureStore } from '@reduxjs/toolkit'
import task_slice from './task/task_slice'

export const store = configureStore({
  reducer: {
    todo: task_slice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch