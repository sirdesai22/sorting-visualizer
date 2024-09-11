import { useState } from "react";
import getMergeSort from "../hooks/algorithms/mergeSort";
import getBubbleSort from "../hooks/algorithms/bubbleSort";
import playBubbleSortAnimations from "../hooks/animations/bubbleSort";
import playMergeSortAnimations from "../hooks/animations/mergeSort";
import { IoMdRefresh } from "react-icons/io";

type Props = {
  generateArray: Function;
  array: number[];
};

// const ANIMATION_SPEED_MS = 10;

// const NUMBER_OF_ARRAY_BARS = 310;

// const PRIMARY_COLOR = "turquoise";

// const SECONDARY_COLOR = "red";

const SettingsBar = ({ generateArray, array }: Props) => {
  const [range, setRange] = useState(500);
  const [speed, setSpeed] = useState(5);
  const [stop, setStop] = useState(true);
  const [running, setRunning] = useState(false);
  

  const mergeSort = () => {
    setStop(false);
    setRunning(true);
    const animations = getMergeSort(array);
    playMergeSortAnimations(animations, speed);
    setStop(true);
  };

  const quickSort = () => {
    // setStop(false);
    // const animations = getMergeSort(array);
    // playMergeSortAnimations(animations, speed);
    // setStop(true);
  };

  const heapSort = () => {
    // setStop(false);
    // const animations = getMergeSort(array);
    // playMergeSortAnimations(animations, speed);
    // setStop(true);
  };

  const bubbleSort = () => {
    setStop(false);
    const animations = getBubbleSort(array);
    playBubbleSortAnimations(animations, speed);
    setStop(true);
  };

  return (
    <div className="p-3 bg-black text-white flex justify-evenly items-center">
      <h1 className="text-3xl font-bold">Sorting Visualizer</h1>
      <div>
        <p>Array Range</p>
        <input
          type="range"
          min="10"
          max="500"
          value={range}
          step="1"
          onChange={(e) => {
            setRange(Number(e.target.value));
          }}
        />
        <span>{range}</span>
      </div>

      <div>
        <p>Speed</p>
        <input
          type="range"
          min="0"
          max="100"
          value={speed}
          step="1"
          onChange={(e) => {
            setSpeed(Number(e.target.value));
          }}
        />
        <span>{speed}</span>
      </div>

      <button
        className="focus:border-2 px-3 py-2 rounded-lg"
        disabled={running}
        onClick={() => {
          mergeSort();
        }}
      >
        Merge Sort
      </button>
      <button
        className="focus:border-2 px-3 py-2 rounded-lg"
        disabled={running}
        onClick={() => {
          quickSort();
        }}
      >
        Quick Sort
      </button>
      <button
        className="focus:border-2 px-3 py-2 rounded-lg"
        disabled={running}
        onClick={() => {
          heapSort();
        }}
      >
        Heap Sort
      </button>
      <button
        className="focus:border-2 px-3 py-2 rounded-lg"
        disabled={running}
        onClick={() => {
          bubbleSort();
        }}
      >
        Bubble Sort
      </button>
      <div className="flex justify-center items-center">
        {/* <button
          className={`px-3 py-2 text-xl ${stop ? "bg-gray-600" : "bg-red-600"} font-semibold rounded-full w-10 h-10`}
          onClick={() => {
            window.location.reload();
          }}
          disabled={stop}
        >
          X
        </button> */}
        <IoMdRefresh 
          className={`text-4xl ${
            stop ? "text-gray-600" : "text-red-600"
          } font-semibold mx-5 cursor-pointer`}
          onClick={() => {
            window.location.reload();
          }}
          visibility={"stop"}
        />

        <button
          className="px-3 py-2 text-xl bg-blue-600 font-semibold rounded-xl"
          onClick={() => {
            generateArray(5, range);
          }}
        >
          Generate Array
        </button>
      </div>
    </div>
  );
};

export default SettingsBar;
