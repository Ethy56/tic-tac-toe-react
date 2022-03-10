import Box from "./box.js"
import React, { useState } from "react";

var checkResult = function(given){
	var arr = [[0,0,0],[0,0,0],[0,0,0]], x = 0, y = 0;
	for (var i = 0; i < given.length; i++) {
		if (given[i].value === "X") {
			arr[x][y++] = -1;
		} else if (given[i].value === "O") {
			arr[x][y++] = 1;
		} else {
			arr[x][y++] = 0;
		}
		if (y >= 3) {
			y = 0;
			x++;
		}
	}
    for(var i = 0; i<3;i++){
        var rowSum = 0;
        for(var j = 0; j<3;j++){
            rowSum += arr[i][j];
        }
        if(rowSum === 3)
            return "O";
        else if(rowSum === -3)
            return "X";
    }

    for(var i = 0; i<3;i++){
        var colSum = 0;
        for(var j = 0; j<3;j++){
            colSum += arr[j][i];
        }
        if(colSum === 3)
            return "O";
        else if(colSum === -3)
            return "X";
    }

    if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
        return "O";
    else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
        return "X";

    if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
        return "O";
    else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
        return "X";
    return null;
};

function turn(thisturn) {
	return (
		<h2 className="text-4xl text-white">🔎 Turn: {thisturn}</h2>
	)
}

function results(winner) {
	return (
		<h2 className="text-4xl text-white">🚀 Winner: {winner}</h2>
	)
}

const Board = props => {
	var idnum = 0;
	const [Turn, SetTurn] = props.turn;
	const [Values, SetValues] = props.values;
	const [IsWinner, SetWinner] = props.winner;
	return (
		<div className="flex justify-center items-center">
			<div className="grid grid-rows-3 grid-cols-3 w-[70vw] h-[70vh] gap-x-[2.5vw] gap-y-[2.5vh]">
				{Values.map((item) => {
						return (
							<button key={item.id} className="transition-colors bg-slate-700 hover:bg-slate-600 rounded" id={item.id} onClick={(comp)=>{
								var id = comp.target.id;
								if (Values[id].value === null && IsWinner === null) {
									var tmparr = [...Values];
									tmparr[id].value = Turn;
									SetValues(tmparr);
									SetTurn(Turn === "X" ? "O" : "X");
									var win = checkResult(Values);
									if (win !== null) {
										SetWinner(win);
									}
								}
							}}>
								<Box value={item.value} id={item.id} />
							</button>
						);
				})}
				{IsWinner ? results(IsWinner) : turn(Turn)}
			</div>
		</div>
	);
}

export default Board;