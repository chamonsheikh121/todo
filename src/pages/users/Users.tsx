import { Add_User } from "@/components/modules/users/Add_User";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { delete_user, select_users } from "@/redux/users/user_slice";
// import { LucideTrash } from "lucide-react";

const Users = () => {
//   const users = useAppSelector(select_users);
// const dispatch = useAppDispatch()
// console.log(users) 

  return (
    <div>
      <div className="mt-20 flex justify-end">
        <Add_User />
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {/* {users?.length ? 
          users.map((user) => (
            <div className="p-10 border border-gray-500 rounded-xl flex justify-between">
              <h1>{user.name}</h1>
              <LucideTrash onClick={()=>dispatch(delete_user(user.id))} className="text-red-700 cursor-pointer" size={15}></LucideTrash>
            </div>
          )):'No user found'} */}
      </div>
    </div>
  );
};

export default Users;
