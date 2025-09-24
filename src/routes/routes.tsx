import App from "@/App";

import Users from "@/pages/users/Users";
import Task from "@/pages/task/Task";
import { createBrowserRouter } from "react-router";




const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>, 
        children:[
            {
                index: true,
                element:<Task/>
            },
            {
                path:'users',
                element:<Users/>
            }
        ]
    }
])


export default routes;