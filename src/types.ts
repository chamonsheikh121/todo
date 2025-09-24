

export type TTask  = {
  id: string;
  title: string;
  description: string;
  due_date: string | Date; // or Date if you want to convert it
  is_completed: boolean;
  priority: "low" | "medium" | "high"; // restrict to these values
};
