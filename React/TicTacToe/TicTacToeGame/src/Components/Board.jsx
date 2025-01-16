import Squares from './SquareBoard'
import { useState, useEffect } from 'react';

const Checkwinner = (state) => {


    const winnerlist  = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 2],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ];

    for (let i of winnerlist) {
        const [a, b, c] = i;
        if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
            return state[a]
        }   
    }
    return null
};



const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setXturn] = useState(true);

        
    const winner = Checkwinner(state);

    const handleclick = (index) => {

       
        const copystate = [...state]

        if (copystate[index] !== null || winner) return;

        if (isXturn) {
            copystate[index] = "X"
        } else {
            copystate[index] = "O"
        }
        setState(copystate)
        setXturn(!isXturn)

    };


    return (
        <div>
            { winner ? (
            <h2 className="winner-text">{winner} Won the Game!</h2>
            ) : (
            <h2 className="turn-text">Next Turn: {isXturn ? 'X' : 'O'}</h2>
        )}
            <div className=" board w-[498px] h-[498px] bg-white">
                <div className="boardrow w-full h-[166px] flex justify-evenly items-center">
                    <Squares onClick={() => handleclick(0)} value={state[0]} />
                    <Squares onClick={() => handleclick(1)} value={state[1]} />
                    <Squares onClick={() => handleclick(2)} value={state[2]} />
                </div>
                <div className="boardrow w-full h-[166px] flex justify-evenly items-center">
                    <Squares onClick={() => handleclick(3)} value={state[3]} />
                    <Squares onClick={() => handleclick(4)} value={state[4]} />
                    <Squares onClick={() => handleclick(5)} value={state[5]} />
                </div>
                <div className="boardrow w-full h-[166px] flex justify-evenly items-center">
                    <Squares onClick={() => handleclick(6)} value={state[6]} />
                    <Squares onClick={() => handleclick(7)} value={state[7]} />
                    <Squares onClick={() => handleclick(8)} value={state[8]} />
                </div>
            </div>
        </div>
    )
}

export default Board;