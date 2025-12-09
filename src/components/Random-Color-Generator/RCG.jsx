import React, { useState } from "react";
import { FaCopy, FaRandom, FaPalette } from "react-icons/fa";

const RCG = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [copied, setCopied] = useState(false);

  const randomNumberUtility = (length) => Math.floor(Math.random() * length);

  const handleCreateRandomHexColor = () => {
    const hex = ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumberUtility(hex.length)];
    }
    setColor(hexColor);
    setTypeOfColor("hex");
    setCopied(false);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomNumberUtility(256);
    const g = randomNumberUtility(256);
    const b = randomNumberUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
    setTypeOfColor("rgb");
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Color Generator</h1>
        <p className="text-gray-500 dark:text-gray-400">Generate random HEX or RGB colors.</p>
      </div>

      <div
        className="relative h-64 rounded-3xl shadow-2xl flex flex-col items-center justify-center transition-colors duration-500 ease-in-out group"
        style={{ backgroundColor: color }}
      >
        <div className="bg-black/20 backdrop-blur-md px-8 py-4 rounded-2xl text-white space-y-2">
          <h3 className="text-lg font-medium uppercase tracking-widest opacity-80">
            {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
          </h3>
          <h1 className="text-4xl font-bold font-mono tracking-wider">{color}</h1>
        </div>

        <button
          onClick={handleCopy}
          className="absolute bottom-4 right-4 p-3 bg-white/20 hover:bg-white/30 text-white rounded-xl backdrop-blur-sm transition-all active:scale-95"
          title="Copy to Clipboard"
        >
          {copied ? <span className="text-sm font-bold">Copied!</span> : <FaCopy size={20} />}
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={handleCreateRandomHexColor}
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
        >
          <FaPalette /> Create HEX
        </button>

        <button
          onClick={handleCreateRandomRgbColor}
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
        >
          <FaPalette /> Create RGB
        </button>

        <button
          onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
        >
          <FaRandom /> Randomize
        </button>
      </div>
    </div>
  );
};

export default RCG;
