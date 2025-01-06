"use client";
import { useRouter } from "next/navigation";
import "./index.scss";
import Link from "next/link";
import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { LoginResult, verifyLoginForm } from "./util";

function LoginPage() {
  const router = useRouter();
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = (form: FormData) => {
    const result = verifyLoginForm(form);
    console.log("🌟 [REI] ~  handleLogin [REI] ~  result:", result);
    switch (result) {
      case LoginResult.Failed:
        messageApi.open({
          type: "error",
          content: "账号或密码错误"
        });
        return;
      case LoginResult.Success:
        messageApi.open({
          type: "success",
          content: "登录成功"
        });
        return;
      case LoginResult.Unknown:
        messageApi.open({
          type: "error",
          content: "未知错误"
        });
        return;
    }

    messageApi.loading({
      content: "Loading...",
      duration: 1,
      onClose() {
        router.push("/");
      }
    });
  };

  const handleRegister = () => {
    // router.push("/");
  };

  return (
    <div className="login_container">
      <Form action={handleLogin}>
        <Form.Item label="账号">
          <Input />
        </Form.Item>
        <Form.Item label="密码">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <Button onClick={handleRegister}>注册</Button>
      </Form>
      {/* TODO: 更强大的表单 数据验证 */}
      {contextHolder}
      {/* <div className="login-box">
        <h2>Login</h2>
        <div className="input-box">
          <label>账号</label>
          <label>
            <input
              type="text"
              value={account}
              onChange={(e) => {
                setAccount(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-box">
          <label>密码</label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="btn-box">
          <Link href="/forget_password">忘记密码</Link>
          <div>
            <button onClick={handleLogin}>登录</button>
            <button onClick={handleRegister}>注册</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LoginPage;
