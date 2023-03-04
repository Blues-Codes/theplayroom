import { useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services/authService";
import { LoadingContext } from "./loading.context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const { setIsLoading, setParent, setMessage } = useContext(LoadingContext)

    const navigate = useNavigate();

    const authenticateParent = () => {
        const token = localStorage.getItem("authToken");
        
        setIsLoading(true);
     
        if (token) {
            get("/auth/verify")
                .then((results) => {
                    console.log("Are we logged in?", results.data);
                    setParent(results.data)
                })
                .catch((err) => {
                    localStorage.clear();
                    setIsLoading(false)
                    setMessage(err.message)
                    console.log(err.message);
                })
                .finally(() => {
                    setIsLoading(false)
                });
            } else {
                localStorage.clear()
                setIsLoading(false);
                setParent(null);
            }
    }

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
}

export { AuthContext, AuthProvider }