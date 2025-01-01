import "./index.scss";
import Power from "../icons/power";

function Header() {
  return (
    <div className="header_container">
      <div className="logo">这里是logo</div>
      <div className="weather">这里是天气</div>
      <div className="search">
        <input type="text" placeholder="搜索框" />
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
