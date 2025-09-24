import Task_card from "@/components/modules/task/Task_card";
import { useAppSelector } from "@/redux/hook";
import { select_task } from "@/redux/task/task_slice";

const Task = () => {
  const tasks = useAppSelector(select_task);
  console.log(tasks);

  return (
    <div className="mt-20">
      {tasks?.map((task) => (
        <Task_card task={task} />
      ))}
    </div>
  );
};

export default Task;
