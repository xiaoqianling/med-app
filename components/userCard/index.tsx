import { FunctionComponent } from "react";
import { DepartmentEnum, DepartmentMap, UserRoleEnum, UserRoleMap } from "./type";
import Image from "next/image";
import localAvatar from "./avatar.svg";
import "./index.scss";
import Link from "next/link";

interface UserCardProps {
  avatar?: string;
  name: string;
  role: UserRoleEnum;
  department: DepartmentEnum;
}

const UserCard: FunctionComponent<UserCardProps> = ({ avatar, name, role, department }) => {
  return (
    <div className="user_card_container">
      <Link href={"/login"}>
        <Image src={avatar ?? localAvatar} alt="头像" width={60} height={60} onClick={() => {}} />
      </Link>
      <span>{name}</span>
      <div className="info">
        <span>{UserRoleMap[role]}</span>
        <span>{DepartmentMap[department]}</span>
      </div>
    </div>
  );
};

export default UserCard;
