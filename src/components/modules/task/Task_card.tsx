import { cn } from "@/lib/utils";
import type { TTask } from "@/types";
import { format } from "date-fns";

type TTask_Props = {
  task: TTask;
};

const Task_card = ({ task }: TTask_Props) => {
  console.log(task);
  return (
    <div className="flex items-center justify-around shadow-md rounded-lg p-4 mb-4 border mx-auto hover:shadow-lg transition-shadow">
      {/* Left: Circle + Task Info */}
      <div className="flex items-start gap-3">
        {/* Priority Circle */}
        <span
          className={cn(`w-3 h-3 mt-2 rounded-full`, {
            "bg-red-500": task.priority == "high",
            "bg-yellow-500": task.priority == "medium",
            "bg-green-500": task.priority == "low",
          })}
        ></span>

        <div>
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-400">Due: {task.due_date instanceof Date ? format(task.due_date, "PPP") : task.due_date}</p>
        </div>
      </div>

      {/* Right: Select + Delete */}
      <div className="flex flex-col items-end gap-2">
        <select
          className="border rounded-md text-sm px-2 py-1"
          defaultValue={task.is_completed ? "completed" : "pending"}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button
          // onClick={() => onDelete(task.id)}
          className="text-xs bg-red-500 hover:bg-red-700 p-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task_card;
