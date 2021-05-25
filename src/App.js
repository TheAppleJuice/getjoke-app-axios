
import Axios from 'axios';
import './App.css';
import {useState} from "react";

function App() {

const [joke, setJoke] = useState("")

    const getJoke = () => {
        Axios.get("https://official-joke-api.appspot.com/jokes/random").then((response)=>{
            setJoke(response.data.setup + " ... " + response.data.punchline);
        })
    }

  return (
    <div>
        Humor humor humor    <button onClick={getJoke}>Get joke</button>
            {joke}
    </div>
  );
}

export default App;
