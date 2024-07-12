import { useState } from "react";
import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15})
{
    const[ticket,setTicket] = useState(genTicket(n));
    let isWinnnig = sum(ticket) === winningSum;

    let buyTicket = () =>{
         setTicket(genTicket(n));
         
    }

    return(
        <>
            <h2>Lottery Game!</h2>
            <Ticket ticket={ticket}/>
            <h3>{isWinnnig ? "Congratualtions, you won!!":"You are close to win"}</h3>
            <button onClick={buyTicket}>Buy Ticket</button>
            
        </>
    )
};