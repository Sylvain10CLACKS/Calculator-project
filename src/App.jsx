import { useState } from "react";

const App = () => {
  const [input, setInput] = useState(""); 
  const [memory, setMemory] = useState(0); 

  const handleInput = (value) => {
    setInput((prev) => prev + value); 
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleMemoryAdd = () => {
    setMemory((prev) => prev + parseFloat(input || 0));
    setInput("");
  };

  const handleMemorySubtract = () => {
    setMemory((prev) => prev - parseFloat(input || 0));
    setInput("");
  };

  const handleMemoryRecall = () => {
    setInput(memory.toString());
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500">
      <main className="bg-gray-900 border-2 rounded-md w-1/4 mx-auto py-4 h-fit my-auto">
        <input
          className="w-[90%] h-20 bg-slate-400 ml-4 rounded-sm p-3"
          value={input}
          readOnly
        />

        <div className="flex w-[90%] justify-between mx-auto pt-4">
          <button className="bg-gray-400 w-16 h-10 rounded-lg hover:bg-gray-500" onClick={handleMemoryClear}>
            mc
          </button>
          <button className="bg-gray-400 w-16 h-10 rounded-lg hover:bg-gray-500" onClick={handleMemoryRecall}>
            mr
          </button>
          <button className="bg-gray-400 w-16 h-10 rounded-lg hover:bg-gray-500" onClick={handleMemorySubtract}>
            m-
          </button>
          <button className="bg-gray-400 w-16 h-10 rounded-lg hover:bg-gray-500" onClick={handleMemoryAdd}>
            m+
          </button>
        </div>

        <div className="flex w-[90%] justify-between mx-auto pt-4">
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={handleClear}>
            AC
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("Math.sqrt(")}>
            √X
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("%")}>
            %
          </button>
          <button className="bg-yellow-400 w-16 h-16 rounded-lg hover:bg-white text-lg" onClick={() => handleInput("/")}>
            ÷
          </button>
        </div>

        <div className="flex w-[90%] justify-between mx-auto pt-4">
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("7")}>
            7
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("8")}>
            8
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("9")}>
            9
          </button>
          <button className="bg-yellow-400 w-16 h-16 rounded-lg hover:bg-white text-lg" onClick={() => handleInput("*")}>
            X
          </button>
        </div>

        <div className="flex w-[90%] justify-between mx-auto pt-4">
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("4")}>
            4
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("5")}>
            5
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("6")}>
            6
          </button>
          <button className="bg-yellow-400 w-16 h-16 rounded-lg hover:bg-white text-lg" onClick={() => handleInput("-")}>
            -
          </button>
        </div>

        <div className="flex w-[90%] justify-between mx-auto pt-4">
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("1")}>
            1
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("2")}>
            2
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("3")}>
            3
          </button>
          <button className="bg-yellow-400 w-16 h-16 rounded-lg hover:bg-white text-lg" onClick={() => handleInput("+")}>
            +
          </button>
        </div>

        <div className="flex w-[90%] justify-between mx-auto pt-4">
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput("0")}>
            0
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => handleInput(".")}>
            .
          </button>
          <button className="bg-gray-400 w-16 h-16 rounded-lg hover:bg-gray-500" onClick={() => setInput((prev) => (parseFloat(prev) * -1).toString())}>
            +/-
          </button>
          <button className="bg-yellow-400 w-16 h-16 rounded-lg hover:bg-white text-lg" onClick={handleCalculate}>
            =
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
