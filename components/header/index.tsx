import "./index.scss";
import Power from "../icons/power";
import localAvatar from "./next.svg";
import Image from "next/image";
import { Input } from "antd";

function Header() {
  return (
    <div className="header_container py-2">
      <div className="logo">
        <Image src={localAvatar} alt="头像" width={100} height={100} />
      </div>
      <div className="weather">🌞 晴</div>
      <div className="search">
        <Input.Search />
      </div>
      <div className="message">
        <div className="mes">消息</div>
        <div className="email">邮件</div>
      </div>
      <div className="quit">
        <Power />
      </div>
    </div>
  );
}

export default Header;
