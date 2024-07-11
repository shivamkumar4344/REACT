import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ red: 0, blue: 0, yellow: 0, green: 0 });

    let [arr,setArr] = useState(["no moves"]);

    let updateBlue = () => {
        setMoves((prev) => {
            return { ...prev, blue: prev.blue + 1 };
        });

        setArr((prev)=>{
            return [...prev," blue moves"];
        });
    }

    let updateYellow = () =>{
        setMoves((prev)=>{
           return {...prev, yellow : prev.yellow+1};
        });
    }

    let updateRed = () =>{
        setMoves((prev)=>{
            return {...prev,red: prev.red+1};
        });
    }

    let updateGreen = () =>{
        setMoves((prev)=>{
            return {...prev,green: prev.green+1};
        });
    }

    return (
        <div>
            <h2>Game Begins!!</h2>
            <p>{arr}</p>
            <div className="Board">
                <p>Blue Moves = {moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
                <p>Yellow Moves = {moves.yellow} </p>
                <button style={{ backgroundColor: "yellow" }}onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green} </p>
                <button style={{ backgroundColor: "green" }}onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
};