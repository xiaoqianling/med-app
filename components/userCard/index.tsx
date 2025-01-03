import { FunctionComponent } from "react";
import { DepartmentEnum, UserRoleEnum } from "./type";
import Image from "next/image";
import localAvatar from "./avatar.jpeg";

interface UserCardProps {
  avatar?: string;
  name: string;
  role: UserRoleEnum;
  department: DepartmentEnum;
}

const UserCard: FunctionComponent<UserCardProps> = ({ avatar, name, role, department }) => {
  return (
    <div className="user_card_container">
      <Image src={avatar ?? localAvatar} alt="头像" width={100} height={100} />
      <span>{name}</span>
      <div>
        <span>{role}</span>
        <span>{department}</span>
      </div>
    </div>
  );
};

export default UserCard;
