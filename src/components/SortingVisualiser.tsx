import { useEffect, useState } from "react";
import SettingsBar from "./SettingsBar";

const SortingVisualiser = () => {
  const [array, setArray] = useState([]);

  const generateArray = (min: number, max: number) => {
    const generatedArray: any = [];
    for (let i = 0; i < 100; i++) {
      generatedArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    console.log("first")
    setArray(generatedArray);
  };

  useEffect(() => {
    generateArray(5, 500);
  }, []);



  return (
    <div>
      <SettingsBar generateArray={generateArray} array={array} />
      <div className="flex w-full justify-center gap-1">
        {array.map((ele, index) => (
          <div className="bg-blue-500 w-4 lg:w-2 array-bar" style={{height: `${ele}px`}} key={index}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualiser;
