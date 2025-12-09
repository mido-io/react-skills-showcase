import { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";

function Square({ value, onClick, isWinningSquare }) {
    return (
        <button
            onClick={onClick}
            className={`
                w-full h-24 text-4xl font-bold flex items-center justify-center transition-all duration-200 rounded-lg shadow-sm
                ${value === 'X' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}
                ${isWinningSquare
                    ? 'bg-green-200 dark:bg-green-900/50 ring-2 ring-green-500 dark:ring-green-400'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
            `}
        >
            <span className="transform transition-transform hover:scale-110 drop-shadow-sm">{value}</span>
        </button>
    )
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");
    const [winningLine, setWinningLine] = useState(null);

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return { winner: squares[x], line: winningPatterns[i] };
            }
        }
        return null;
    }

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
        setWinningLine(null);
    }

    useEffect(() => {
        const result = getWinner(squares);
        if (result) {
            setStatus(`Winner: ${result.winner}`);
            setWinningLine(result.line);
        } else if (squares.every((item) => item !== "")) {
            setStatus("It's a Draw!");
            setWinningLine(null);
        } else {
            setStatus(`Next Player: ${isXTurn ? "X" : "O"}`);
            setWinningLine(null);
        }
    }, [squares, isXTurn]);

    return (
        <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tic Tac Toe</h1>
                <div className={`text-xl font-medium px-6 py-2 rounded-full inline-block ${status.includes("Winner")
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    }`}>
                    {status}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] bg-gray-200 dark:bg-gray-700 p-2 rounded-xl shadow-xl">
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        onClick={() => handleClick(index)}
                        isWinningSquare={winningLine?.includes(index)}
                    />
                ))}
            </div>

            <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
                <FaRedo /> Restart Game
            </button>
        </div>
    )
}

export default TicTacToe