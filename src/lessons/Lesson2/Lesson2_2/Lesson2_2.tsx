import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("ShinCode");
  const [bio, setBio] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  //無限ループ用

  useEffect(() => {
    let ignore = false;
      const startFetching = async () => {
        const response = await fetchBio(person);
        // console.log(response)
        if (!ignore) {
          setBio(response)
        }
      };
      startFetching();
      
      setCount(count + 1);

      return () => {
        ignore = true;
      };
      //Cleanup関数
    }, [person]);
    //personの値が変更される度にuseEffectの値が変更される。また依存配列にcountを含めると無限ループが発生

  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
      <p>{count}</p>
    </div>
  );
};

export default Lesson2_2;
