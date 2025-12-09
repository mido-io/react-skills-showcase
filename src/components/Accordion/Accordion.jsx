import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM to efficiently update the UI.",
  },
  {
    id: 2,
    title: "Why use React?",
    content: "React makes it easy to build scalable, interactive interfaces. It encourages reusable components, improves performance, and has a large ecosystem.",
  },
  {
    id: 3,
    title: "What is an Accordion Component?",
    content: "An accordion is a UI pattern that expands and collapses sections to reveal or hide content. It improves readability and organizes information.",
  },
  {
    id: 4,
    title: "How to Build an Accordion in React?",
    content: "You can build an accordion by managing local component state (e.g., useState) to track whether each section is open, and toggling visibility on click.",
  },
];

function Accordion() {
  const [singleSelected, setSingleSelected] = useState(null);
  const [isMultiMode, setIsMultiMode] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelected = (id) => {
    setSingleSelected(singleSelected === id ? null : id);
  };

  const handleMultiSelected = (id) => {
    if (multiSelected.includes(id)) {
      setMultiSelected(multiSelected.filter(item => item !== id));
    } else {
      setMultiSelected([...multiSelected, id]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Accordion</h1>
        <p className="text-gray-500 dark:text-gray-400">Expand and collapse content sections.</p>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsMultiMode(!isMultiMode)}
          className={`
            px-6 py-2 rounded-full font-medium transition-all duration-300
            ${isMultiMode
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }
          `}
        >
          {isMultiMode ? "Multi Selection Enabled" : "Enable Multi Selection"}
        </button>
      </div>

      <div className="space-y-4">
        {accordionData.map((item) => {
          const isOpen = isMultiMode
            ? multiSelected.includes(item.id)
            : singleSelected === item.id;

          return (
            <div
              key={item.id}
              className={`
                bg-white dark:bg-gray-900 rounded-xl border transition-all duration-300 overflow-hidden
                ${isOpen ? 'border-blue-500 shadow-md' : 'border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'}
              `}
            >
              <button
                onClick={() => isMultiMode ? handleMultiSelected(item.id) : handleSingleSelected(item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold text-lg ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                  {item.title}
                </span>
                <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>

              <div
                className={`
                  transition-all duration-300 ease-in-out
                  ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 mt-2">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
