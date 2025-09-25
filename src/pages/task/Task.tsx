import { Add_Task_Modal } from "@/components/modules/task/Add_Task_Modal";
import Task_card from "@/components/modules/task/Task_card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { filter_task, select_task } from "@/redux/task/task_slice";

const Task = () => {
  const tasks = useAppSelector(select_task);
  const dispatch = useAppDispatch();

  const tab_item = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Low",
      value: "low",
    },
    {
      name: "Medium",
      value: "medium",
    },
    {
      name: "High",
      value: "high",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex  p-6 rounded-md justify-between items-center">
        <p>tasks</p>
        <div className="flex items-center gap-10">
          <div>
            <Tabs defaultValue="all">
              <TabsList>
                {tab_item?.map((tab) => (
                  <TabsTrigger
                    onClick={() =>
                      dispatch(
                        filter_task(
                          //  akhane 3 ta process a type declare kora jai, as const use kore, nicher avabe othoba {name:string, value:Filtertypes} where filter types gulo "all" | "low" | "medium" | "high"
                          tab.value as "all" | "low" | "medium" | "high"
                        )
                      )
                    }
                    className="cursor-pointer "
                    value={tab.value}
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <Add_Task_Modal />
        </div>
      </div>
      {tasks?.map((task) => (
        <Task_card task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Task;
