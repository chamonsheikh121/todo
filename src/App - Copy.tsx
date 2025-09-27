import { Outlet } from "react-router";
import Navbar from "./components/ui/layout/Navbar";


const App = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default App;
