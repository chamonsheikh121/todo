import { Add_Task_Modal } from "@/components/modules/task/Add_Task_Modal";
import Task_card from "@/components/modules/task/Task_card";
import { useAppSelector } from "@/redux/hook";
import { select_task } from "@/redux/task/task_slice";

const Task = () => {
  const tasks = useAppSelector(select_task);
 console.log(tasks)
  return (
    <div className="mt-20">
      <div className="flex  p-6 rounded-md justify-between items-center">
        <p>tasks</p>
        <Add_Task_Modal/>
      </div>
      {tasks?.map((task) => (
        <Task_card task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Task;
