
import { useEffect, useState } from "react";

export default function Joker() {

    const URL = "https://official-joke-api.appspot.com/random_joke";
    let [joke, setJoke] = useState({setup:"",punchline:""});

    let getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };

    useEffect(() =>{ 
        async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
        }getFirstJoke()
    },[])

    return (
        <div>
            <h1>Joker</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>New Jokes</button>
        </div>
    )
}