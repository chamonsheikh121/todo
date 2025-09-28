export type TTask = {
  id: string;
  title: string;
  description: string;
  due_date: Date; // or Date if you want to convert it
  is_completed: boolean;
  assigned_user: string| null; 
  priority: "low" | "medium" | "high"; // restrict to these values
};

export type TUser = {
  id: string;
  name: string;
};
