import type { TTask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { delete_user } from "../users/user_slice";
// import { v4 as uuidv4 } from "uuid";

interface ITask_Initial_State {
  tasks: TTask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: ITask_Initial_State = {
  tasks: [],
  filter: "all",
};

type TDraft_task = Pick<
  TTask,
  "title" | "description" | "due_date" | "priority"
>;

type TUpdate_payload_Task = {
  id: string;
  updates: Partial<TTask>;
};

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
    add_task: (state, action: PayloadAction<TDraft_task>) => {
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
    delete_task: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    update_task: (state, action: PayloadAction<TUpdate_payload_Task>) => {
      const { id, updates } = action.payload;

      console.log(id, updates);
      const task =
        state.tasks.length && state.tasks.find((task) => task.id == id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    filter_task: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(delete_user, (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.assigned_user == action.payload ? (task.assigned_user = undefined) : task
      );
    });
  },
});

export const {
  add_task,
  is_completed_toggle,
  delete_task,
  update_task,
  filter_task,
} = task_slice.actions;

export const select_task = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter == "low") {
    const low_tasks = state.todo.tasks.filter((task) => task.priority == "low");
    return low_tasks;
  } else if (filter == "medium") {
    const medium_tasks = state.todo.tasks.filter(
      (task) => task.priority == "medium"
    );
    return medium_tasks;
  } else if (filter == "high") {
    const high_tasks = state.todo.tasks.filter(
      (task) => task.priority == "high"
    );
    return high_tasks;
  } else {
    return state.todo.tasks;
  }
};

export default task_slice.reducer;
