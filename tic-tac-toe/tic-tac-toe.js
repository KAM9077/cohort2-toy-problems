/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	var x1,x2,dx1,y1,y2,dy1;
	for (var i = 0; i < board.length; i++) {
		x1 = 0, x2 = 0, y1 = 0, y2 = 0, dx1 = 0, dy1 = 0;
		for (var j = 0; j < board[i].length; j++) {
			if(board[j][i] === 1)				
				x1++;
			if(board[i][j] === 1)
				x2++
			if(board[j][i] === 2)
				y1++
			if(board[j][i] === 2)
				y2++;
			if(board[j][j] === 1)
				dx1++
			if(board[j][j] === 2)
				dy1++
		}
			if(x1===3||x2===3||dx1===3){
			return 1
		}else if(y1===3||y2===3||dy1===3)
			return 2
	}

	if((x1===0 && y1===0)||(x2===0 && y2===0)){
		return 0;
	}else return -1 
};
