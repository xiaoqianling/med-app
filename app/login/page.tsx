"use client";
import { useRouter } from "next/navigation";
import "./index.scss";

function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <div className="login_container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-box">
          <label>账号</label>
          <label>
            <input type="text" />
          </label>
        </div>
        <div className="input-box">
          <label>密码</label>
          <label>
            <input type="password" />
          </label>
        </div>
        <div className="btn-box">
          <a href="#">忘记密码？</a>
          <div>
            <button onClick={handleLogin}>登录</button>
            <button>注册</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
