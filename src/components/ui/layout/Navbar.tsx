import { Link } from "react-router";
import Logo from "./Logo";
import { ModeToggle } from "../Mode_toggle";

const Navbar = () => {
  return (
    <div className="flex justify-around">
      <div className="w-0.5 h-0.5 border-2 border-red-700"><Logo /></div>
      <ul className="flex justify-center gap-5">
        <li>
          <Link to={"/task"}>task</Link>
        </li>
        <li>
          <Link to={"/users"}>users</Link>
        </li>
      </ul>
      <ModeToggle></ModeToggle>
    </div>
  );
};

export default Navbar;
