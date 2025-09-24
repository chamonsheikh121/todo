import type { TTask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ITask_Initial_State {
  tasks: TTask[];
}

const initialState: ITask_Initial_State = {
  tasks: [
    {
      id: "ajkcdjajsk",
      title: "Initialized frontend",
      description: "create a home page and routing setup",
      due_date: "2025-11",
      is_completed: false,
      priority: "high",
    },
  ],
};

const task_slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});


export const select_task = (state:RootState) => state.todo.tasks

export default task_slice.reducer;
