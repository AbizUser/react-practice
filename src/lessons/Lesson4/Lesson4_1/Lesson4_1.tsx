import { useState } from "react";
import { useAuth } from "../context/AuthContext";

//認証用プロバイダの作成

//〇メモ化
//再レンダリングされる度に今まで使用していた関数や値が再生成されないように行う

const Lesson4_1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const {user, login, logout} = useAuth()
  const handleLogin = () => {
    login({id: "1", username, email})
  };

  return (
    <div>
      {user ? 
      <div>
        <p>ログイン済み:</p>
        <button onClick={logout}>ログアウト</button>
      </div> :  
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>ログイン</button>
      </div>}
    </div>
  );
};

export default Lesson4_1;
