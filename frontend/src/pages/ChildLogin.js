import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom";
import Games from "./Games";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

function Keyboard({ onLetterClick }) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
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
              <button key={letter} onClick={() => handleClick(letter)}>
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

  function handleLetterClick(letter) {
    setText(text + letter);
  }

  const { user } = AuthContext();
  const { childId } = useParams();

  const sendUpdate = () => {
    const socket = io('http://localhost:3000');
    socket.emit('update', `Child ${childId} did something`);
    socket.disconnect();
  };

  return (
    <>
      <div className="childLogin">
        <input type="text" value={text} />
        <Keyboard onLetterClick={handleLetterClick} />
      </div>
      <div className="welcomeMsg">
        <p> `Hi ${ChildLogin}! Let's play a game!`</p>
        <Link to="/games" path={<Games />} />
      </div>
    <div>
      <h1>Child Dashboard</h1>
      <button onClick={sendUpdate}>Do Something</button>
    </div>
    </>
  );
}

// const Child = () => {
//   const { user } = AuthContext();
//   const { childId } = useParams();

//   const sendUpdate = () => {
//     const socket = io('http://localhost:3000');
//     socket.emit('update', `Child ${childId} did something`);
//     socket.disconnect();
//   };

//   return (
//   );
// };

export default ChildLogin;
