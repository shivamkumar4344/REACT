import { useEffect, useState } from "react"

export default function Counter()
{
    const [countx,setCountx] = useState(0);
    const [county,setCounty] = useState(0);

    let incCountx = () =>{
        setCountx(curr=>curr+1);
    }
    let incCounty = () =>{
        setCounty(curr=>curr+1);
    }

    useEffect(function printSomething(){
        console.log("hii");
    },[countx]);

    return(
        <div>
            <h3>countX = {countx}</h3>
            <button onClick={incCountx}>Increase</button>
            <br /><br />
            <h3>countY = {county}</h3>
            <button onClick={incCounty}>Increase</button>
        </div>
    )
}