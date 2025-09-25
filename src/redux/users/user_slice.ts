import type { TUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type TUser_InitialState = {
  user: TUser[];
  filter: string;
};

const initialState: TUser_InitialState = {
  user: [],
  filter: "all",
};

const create_user = (name: string) => {
  return {
    id: nanoid(),
    name,
  };
};

const user_slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add_user: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const payload = create_user(action.payload);
      state.user.push(payload);
    },
    delete_user: (state, action: PayloadAction<string>) => {
        console.log(action.payload)
      state.user = state?.user?.filter((u) => u.id !== action.payload);
    },
  },
});

export const select_users = (state: RootState) => state.users.user;

export const { add_user , delete_user} = user_slice.actions;

export default user_slice.reducer;
