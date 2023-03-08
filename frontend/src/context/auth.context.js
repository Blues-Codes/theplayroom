import { useEffect, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services/authService";
import { LoadingContext } from "./loading.context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setIsLoading, setParent, setMessage } = useContext(LoadingContext);
  const [ child, setChild] = useState(null)
  const navigate = useNavigate();

  const authenticateParent = () => {
    const token = localStorage.getItem("authToken");
    console.log("THIS IS LINE 15",token);
    setIsLoading(true);

    if (!token) {
      localStorage.clear();
      setIsLoading(false);
      setParent(null);
    } else {
      get('/child/verify')
      .then((results) =>{
        console.log('Child verify', results.data);
        setChild(results.data)
      })
    get("/auth/verify")
      .then((results) => {
        console.log("Are we logged in?", results.data);
        setParent(results.data);
      })
      .catch((err) => {
        localStorage.clear();
        setIsLoading(false);
        setMessage(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  };

  const logout = () => {
    localStorage.clear();
    setMessage("You are logged out.");
    setParent(null);
    navigate("/");
  };

  useEffect(() => {
    authenticateParent();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticateParent, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
