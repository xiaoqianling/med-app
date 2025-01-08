import UserCard from "../userCard";
import { DepartmentEnum, UserRoleEnum } from "../userCard/type";
import "./index.scss";
import NavGroup from "./navGroup";

function Nav() {
  return (
    <nav className="nav">
      <UserCard name={"许医生"} role={UserRoleEnum.DOCTOR} department={DepartmentEnum.INNER} />
      <NavGroup />
    </nav>
  );
}

export default Nav;
