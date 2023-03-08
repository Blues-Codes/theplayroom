import {  useState } from "react";
import { Link } from "react-router-dom";
import PreLoadedGames from "./PreLoadedGames";
import CreatedGames from "./CreatedGames";
import { post } from "../services/authService"


function Keyboard({ onLetterClick }) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L","\u2190"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function handleClick(letter) {
    onLetterClick(letter);
  }

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <>
          <div key={index} className="row">
            {row.map((letter) => (
              <button key={letter} onClick={() => { 
                handleClick(letter)}}>
                {letter}
              </button>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

const ChildLogin = () => {
  const [text, setText] = useState("");
  console.log(text)
  function handleLetterClick(letter) {
    if (letter === "\u2190") {
      setText(text.slice(0, -1)); // remove last character from text
    } else {
      setText(text + letter);
    }  // const { user } = AuthContext();
  // const { childId } = useParams();
  }

  const handleChildLogin =(e) => {
    e.preventDefault()
    post('/child/childlogin', {text})
    .then((results) => {
      console.log(results.data)
    }) 
    .catch((err) =>{
      console.log(err)
    })
  }


  return (
    <>
      <div className="childLogin">
        <form onSubmit={handleChildLogin}>
        <input type="text" name="text"value={text} />
        <button>GO</button>

        </form>
        <Keyboard onLetterClick={handleLetterClick} />
      </div>
      <div className="welcomeMsg">
        <p> `Hi ${ChildLogin}! Let's play a game!`</p>
        <Link to="/PreLoaded-games" path={<PreLoadedGames />} />
        <Link to="/created-games" path={<CreatedGames />} />
      </div>
    </>
  );
}



export default ChildLogin;
