import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Square = (props) => {
    return (
        <button
            className="square"
            onClick={props.onClick} /*  вызов функции */
        >
            {props.value}
        </button>
    );
};

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), // заполнить все ячейки массива null
            xIsNext: true, // изначально первым ходят Х
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); // сохраняем копию массива squares
        squares[i] = this.state.xIsNext ? 'X' : 'O'; // если true то Х иначе О
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, // по клику false
        }); // перезаписываем стейт новым массивом
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]} // установить value ячеек значениями из стейта
            onClick={() => this.handleClick(i)} // переносим функцию
        />

    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); // если true то ходят Х иначе О

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
