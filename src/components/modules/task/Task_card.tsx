import type { TTask } from "@/types";

type TTask_Props = {
  task: TTask;
};

const Task_card = ({ task }: TTask_Props) => {
  console.log(task);
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 max-w-xl mx-auto hover:shadow-lg transition-shadow">
      {/* Left: Task Info */}
      <div>
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-400">Due: {task.due_date}</p>
      </div>

      {/* Right: Priority and Status */}
      <div className="flex flex-col items-end">
        <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm">
          {task.priority}
        </span>

        <span className="mt-2 px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-sm">
          {task.is_completed}
        </span>
      </div>
    </div>
  );
};

export default Task_card;
