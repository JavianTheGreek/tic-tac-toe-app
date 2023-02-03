import { useState } from 'react'
import Board from '../components/Board'
import { calculateWinner } from '../Helper/Helper'


function TicTacToe() {
    let rand = Math.floor(Math.random() * 2)
    const [board, setBoard] = useState(Array(9).fill(null))
    const [nextPlayer, setNextPlayer] = useState(rand)
    console.log(nextPlayer)
    let winner = calculateWinner(board)


    const handleMark = (i) => {
        const getBoardCopy = [...board]
        // If user click an occupied square or if game is won, return
        if (winner || getBoardCopy[i]) return;
        getBoardCopy[i] = nextPlayer ? "X" : "O"
        setBoard(getBoardCopy)
        setNextPlayer(!nextPlayer)
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null))
        setNextPlayer(rand)
    }


    return (
        <div className='w-full mx-auto px-4'>
            <h2 className='text-center mb-10 text-[36px] text-[#29ABA4] font-extrabold'>Tic Tac Toe</h2>

            <Board boxes={board} onClick={handleMark} />

            <div className="flex justify-between items-center text-2xl mt-4 text-[#29ABA4]">
                <div>
                    <p>Player 1 - X</p>
                    <p>Player 2 - O</p>
                </div>
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (nextPlayer ? "X" : "O")}
                </p>
            </div>
            <div className=" w-[180px] mx-auto">
                <button
                    className='border-[1.5px] border-gray-500 rounded-xl px-8 py-4 text-white bg-[#29ABA4] font-bold  m-4 text-3xl'
                    onClick={handleReset}>
                    Reset
                </button>

            </div>
        </div>

    )
}

export default TicTacToe