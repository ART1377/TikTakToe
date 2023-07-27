"use client";
import React, { useState } from "react";
import Button from "./components/Button";

export default function Home() {

  /////////////////////// winPosibilities
  const winPosibilities = [
    ["0", "1", "2"],
    ["0", "4", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["2", "4", "6"],
    ["3", "4", "5"],
    ["6", "7", "8"],
  ];


  const [tableState, setTableState] = useState(Array(9).fill(""));
  const [whoWon, setWhoWon] = useState<string>("");
  const [xPoint, setXPoint] = useState<number>(0);
  const [oPoint, setOPoint] = useState<number>(0);
  const [playerOneTurn, setPlayerOneTurn] = useState<boolean>(true);



  /////////////////////// Check Winner Function
  const checkWinner = (board: string[]) => {
    winPosibilities.map((item) => {
      if (
        board[+item[0]] === "" ||
        board[+item[1]] === "" ||
        board[+item[2]] === ""
      ) {
        return;
      } else if (
        board[+item[0]] === board[+item[1]] &&
        board[+item[1]] === board[+item[2]]
      ) {
        setWhoWon(board[+item[0]]);

        if (board[+item[0]] == "X") {
          let point = xPoint + 1;
          setXPoint(point);
          console.log(xPoint, oPoint);
        }
        if (board[+item[0]] == "O") {
          let point = oPoint + 1;
          setOPoint(point);
          console.log(xPoint, oPoint);
        }
      }
    });
  };


  /////////////////////// Main Function
  const mainFunction = (event: React.FormEvent, value: number) => {
    const target = event.target as HTMLButtonElement;
    if (target.innerHTML) {
      return;
    }

    target.classList.add(
      `${playerOneTurn ? "text-blue-500" : "text-orange-500"}`
    );
    const inner = playerOneTurn ? "X" : "O";
    let board = [...tableState];

    board[value] = inner;

    setTableState(board);

    target.innerHTML = playerOneTurn ? "X" : "O";
    setPlayerOneTurn(!playerOneTurn);

    checkWinner(board);
  };


  /////////////////////// Reset Function
  const reset = () => {
    setWhoWon("");
    setTableState(Array(9).fill(""));
  };

  if (whoWon == "O" || whoWon == "X") {
    return (
      <>
        <div className="!h-screen !w-screen flex justify-center items-center bg-neutral-100">
          <div className="bg-neutral-50 text-center space-y-3 p-20 shadow-[6px_6px_14px_#b8b8b8,-6px_-6px_14px_#f0f0f0] rounded-lg max-w-[50%] h-1/6 flex justify-center flex-col">
            <h1 className="text-xl sm:text-3xl">
              player{" "}
              <span
                className={`font-bold ${
                  whoWon == "O" ? "text-orange-500" : "text-blue-500"
                }`}
              >
                {whoWon}
              </span>{" "}
              won the game
            </h1>
            <button
              onClick={reset}
              className={`py-2 px-4 mt-2 w-fit mx-auto sm:text-3xl text-neutral-50 font-semibold rounded-md ${
                whoWon == "O" ? "bg-orange-500" : "bg-blue-500"
              }`}
            >
              Play again
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="!h-screen !w-screen pt-12 bg-neutral-100">
        <h1 className="text-4xl font-bold mx-auto space-x-1 text-center pb-8 sm:pb-16">
          <span className="text-blue-500">Tik</span>
          <span className="text-orange-500">Tak</span>
          <span className="text-blue-500">Toe</span>
        </h1>
        <div className="flex justify-evenly pb-4 max-w-[70%] mx-auto space-x-8">
          <h1 className="w-6 text-3xl font-bold h-fit mt-auto border-b-4 text-center text-blue-500 border-blue-500">
            {xPoint}
          </h1>
          <h1 className="w-6 text-3xl font-bold h-fit mt-auto border-b-4 text-center text-orange-500 border-orange-500">
            {oPoint}
          </h1>
        </div>
        <div className="flex justify-center pb-4 space-x-1">
          <div
            className={`w-24 h-24  shadow-md text-5xl  flex justify-center border items-center font-bold text-blue-500 ${
              playerOneTurn ? "bg-neutral-100" : "bg-neutral-300 opacity-70"
            }`}
          >
            X
          </div>
          <div
            className={`w-24 h-24  shadow-md text-5xl  flex justify-center border items-center font-bold text-orange-500 ${
              !playerOneTurn ? "bg-neutral-100" : "bg-neutral-300 opacity-70"
            }`}
          >
            O
          </div>
        </div>

        <div className="container grid grid-cols-3 justify-items-stretch w-fit mx-auto gap-1">
          <Button clickHandler={(e) => mainFunction(e, 0)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 1)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 2)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 3)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 4)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 5)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 6)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 7)}></Button>
          <Button clickHandler={(e) => mainFunction(e, 8)}></Button>
        </div>
      </div>
    </>
  );
}
