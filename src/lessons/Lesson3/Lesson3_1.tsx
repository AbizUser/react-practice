import { useRef, useState } from "react";

const Lesson3_1 = () => {
  const [input, setInput] = useState("");
  // const [input] = useRef("");

  //値の保持をする
  const ref = useRef(0);
  console.log(ref.current);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("you Clickrf" + ref.current);
  }
  //レンダリングした後にも値を保持可能で速度改善などに利用可能


  // function handleClick = () => {
  //   ref.current = ref.current + 1;
  // }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleClick}>Click me!</button>
      <p></p>
    </div>
  );
};

export default Lesson3_1;
