import {useState} from "react";
import {genTicket,sum} from "./helper"
import Ticket from "./Ticket"
export default function Lottery({n=3,winCondition}) {
  let [ ticket , setTicket] = useState(genTicket(n)) ;
  let isWinning = winCondition(ticket);
  function BuyTicket() {
    setTicket(genTicket(n));
  };
    return (
        <div>
            <h3>{ isWinning && "Congratutlation you are won !!"}</h3>
            <h1>LOTTERY GAME !!</h1>
            <div>
            <Ticket ticket={ticket} />
            </div>
            <br />
            <button onClick={BuyTicket}>Generate ticket</button>
          
        </div>
    )
}