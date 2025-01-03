import UserCard from "../userCard";
import { DepartmentEnum, UserRoleEnum } from "../userCard/type";
import "./index.scss";

function Nav() {
  return (
    <nav className="nav">
      <UserCard name={"测试名字"} role={UserRoleEnum.DOCTOR} department={DepartmentEnum.NONE} />
    </nav>
  );
}

export default Nav;
