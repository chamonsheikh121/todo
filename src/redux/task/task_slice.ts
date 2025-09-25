import type { TTask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

interface ITask_Initial_State {
  tasks: TTask[];
}

const initialState: ITask_Initial_State = {
  tasks: [],
};

type TDraft_task = Pick<
  TTask,
  "title" | "description" | "due_date" | "priority"
>;
const create_task = (payload: TDraft_task): TTask => {
  return {
    id: nanoid(),
    ...payload,
    is_completed: false,
  };
};

const task_slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add_task: (state, action: PayloadAction<TTask>) => {
      const payload = create_task(action.payload);
      state.tasks.push(payload);
    },
    is_completed_toggle: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const task =
        state.tasks.length &&
        state.tasks.find((task) => task.id == action.payload);
      if (task) {
        task.is_completed = !task.is_completed;
      }
    },
  },
});

export const { add_task, is_completed_toggle } = task_slice.actions;

export const select_task = (state: RootState) => state.todo.tasks;

export default task_slice.reducer;
