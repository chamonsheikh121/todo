import type { TTask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

interface ITask_Initial_State {
  tasks: TTask[];
}

const initialState: ITask_Initial_State = {
  tasks: [
    
  ],
};

const task_slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add_task: (state, action: PayloadAction<TTask>) => {
      const id = uuidv4();
      const payload = {
        ...action.payload,
        id,
        is_completed: false,
      };
      console.log(payload);

      state.tasks.push(payload);
    },
  },
});

export const { add_task } = task_slice.actions;

export const select_task = (state: RootState) => state.todo.tasks;

export default task_slice.reducer;
