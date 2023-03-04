import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../services/authService";
import axios from "axios";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [parent, setParent] = useState(null);

    const [ childName, setChildName ] = useState([]);
    const [ gamesPlayed, setGamesPlayed ] = useState(null);
    const [message, setMessage] = useState([])

    const [ updates, setUpdates ] = useState([])

    const setTimedMessage = (newMessage) => {
      setMessage(newMessage);
      setTimeout(() => {
        setMessage('')
      }, 4000)
    }
    
    
    const getUpdates = () =>{
        get('/updates')
        .then((results) =>{
        setUpdates(results.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const getUpdate = () =>{
    get(`/updates`)
}

return (
    <LoadingContext.Provider value={{ childName, setChildName, updates, setUpdates, isLoading, parent, setParent, setIsLoading, gamesPlayed, message, setGamesPlayed, getUpdates, setTimedMessage, getUpdate}}>
          {children}
        </LoadingContext.Provider>
      );
      
    }
      
export { LoadingContext, LoadingProvider }