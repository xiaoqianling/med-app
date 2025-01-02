"use client";
import { useRouter } from "next/navigation";
import "./index.scss";
import Link from "next/link";
import { useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    router.push("/home");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="login_container">
      {/* TODO: 更强大的表单 数据验证 */}
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-box">
          <label>账号</label>
          <label>
            <input type="text" value={account} onChange={(e) => {setAccount(e.target.value)}}/>
          </label>
        </div>
        <div className="input-box">
          <label>密码</label>
          <label>
            <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
          </label>
        </div>
        <div className="btn-box">
          <Link href="/forget_password">忘记密码</Link>
          <div>
            <button onClick={handleLogin}>登录</button>
            <button onClick={handleRegister}>注册</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
