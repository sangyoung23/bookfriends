import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [button, setButton] = useState(true);

  const changeButton = () => {
    id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  };

  const goToHome = () => {
    localStorage.setItem("id", id);
    localStorage.setItem("password", pw);
    document.location.href = "/";
  };

  return (
    <div className="Login">
      <div className="login-img">
        <h2>Welcome!</h2>
        <h1>Hello, Book Friends</h1>
      </div>
      <div className="login-form">
        <h1>LOGIN</h1>
        <label htmlFor="username">Email</label>
        <input
          id="username"
          placeholder="email을 입력해주세요"
          type="text"
          onChange={(e) => setId(e.target.value)}
          onKeyUp={changeButton}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={(e) => setPw(e.target.value)}
          onKeyUp={changeButton}
        ></input>
        <button type="button" disabled={button} onClick={goToHome}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
