// import { useEffect, useState } from "react";

// const Lesson2_1 = () => {

// const [position, setPosition] = useState({ X: 0, y: 0 });
 
// useEffect(() => {
//   function handleMove(e) {
//     setPosition({ x: e.clientX, y: e.clientY });
//   }

//   window.addEventListener("pointermove", handleMove);
//   //イベントリスナーはクリーンアップしなければ走り続ける

//   return () => {
//     window.removeEventListener("pointermove", handleMove);
//   };
// }, []);
// //第２依存配列を空にするとレンダリングは一度しか実行しない。

//   return (
//     <div
//       style={{
//         position: "absolute",
//         backgroundColor: "blue",
//         borderRadius: "50%",
//         opacity: 0.6,
//         pointerEvents: "none",
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -20,
//         top: -20,
//         width: 50,
//         height: 50,
//       }}
//     ></div>
//   );
// };

// export default Lesson2_1;
