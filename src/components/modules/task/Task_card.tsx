import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { delete_task, is_completed_toggle } from "@/redux/task/task_slice";
import type { TTask } from "@/types";
import { format } from "date-fns";
import { LucideTrash } from "lucide-react";
import { Update_Task_Modal } from "./Update_Task_Modal";

type TTask_Props = {
  task: TTask;
};

const Task_card = ({ task }: TTask_Props) => {
  const dispatch = useAppDispatch();
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
          <h2 className={cn("text-lg font-semibold",{
            "line-through": task.is_completed
          })}>{task.title}</h2>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-gray-600">Assigned User {task.description}</p>
          <p className="text-sm text-gray-400">
            Due:{" "}
            {task.due_date instanceof Date
              ? format(task.due_date, "PPP")
              : task.due_date}
          </p>
        </div>
      </div>

      {/* Right: Select + Delete */}
      <div className="flex items-center flex-row-reverse  gap-2">
        <Checkbox
          checked={task.is_completed}
          onClick={() => dispatch(is_completed_toggle(task.id))}
        />

          <Update_Task_Modal task={task}/>
        
        <button
          onClick={() => dispatch(delete_task(task.id))}
          className="text-xs bg-red-500 hover:bg-red-700 p-1 rounded-md"
        >
          <LucideTrash size={15} />
        </button>
      </div>
    </div>
  );
};

export default Task_card;
