 import {useState} from "react" ;

export default function  LotteryGame() {
    
let [number , setNumber] = useState(0);

   function RandomNumber() {
    setNumber(()=>{
      let Num =  Math.floor(Math.random()*900+ 100);
     
      let Num1 =  Num /100 ;
      let NUM1 = Math.floor(Num1);
      console.log(NUM1)
      let Num2 = Num1 - NUM1;
      let NUM2 = Num2 *100;
      let newNum2 = NUM2/10;
      let NewNum2 = Math.floor(newNum2);
      console.log(NewNum2)
      let Num3 = newNum2 - NewNum2
      let NUM3 = Num3 * 10 ;
      let newNum3 = Math.floor(NUM3)
      console.log(newNum3)
      
      let sum = NUM1 + NewNum2 + newNum3 ;

      console.log(sum);

        if(sum==15) {
             isDone : true;
        }
      return Num;
    });

   }
    
    return (
        <div> 
            <h1>Lottery </h1>
            <h3>Lottery Ticket= {number} </h3>
            <button onClick= {RandomNumber} >Get New Ticket</button>
            </div>
    ) 
};