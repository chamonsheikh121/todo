import { Link } from "react-router";

import { ModeToggle } from "../Mode_toggle";

const Navbar = () => {
  return (
    <div className="flex justify-around">
      <div className="">Logo</div>
      <ul className="flex justify-center gap-5">
        <li>
          <Link to={"/"}>task</Link>
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
