import { Outlet } from "react-router";
import Navbar from "./components/ui/layout/Navbar";


const App = () => {
  return (
    <div>
      <Navbar />

      <h1>This is App component</h1>
      <Outlet/>
    </div>
  );
};

export default App;
