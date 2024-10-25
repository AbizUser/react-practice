import { ChangeEvent, useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState("Amanos");
  console.log("rendering!")
  //初回リロード時と状態変数の更新時にレンダリングされる。
  //子要素に対しても更新処理が走る。
  //またデバッグ時には純関数であることを確認するために値が二回出力される。

const handleClick = () => {
  setAge((state) => state + 1);
  setAge((state) => state + 1); //更新用関数を定義して前の値を更新する方法
  setAge((state) => state + 1);//ここまで来たらレンダリングする。
  console.log(name);
};

  return (
    <div>
      <input 
      type="text"
      value={name}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
      <button onClick={handleClick}
      className="border p-2 
      rounded-md bg-red-100">
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
