import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { post } from "../services/authService"


const Login = () => {

    const { authenticateParent } = useContext(AuthContext)

    const [ thisParent, setthisParent ] = useState(
        {
            email: "",
            password: ""
        }
    )

    const navigate = useNavigate()

    const handleChange = (e) => {
        setthisParent((recent)=>({...recent, [e.target.name]: e.target.value}))
        console.log("Changing Parent", thisParent)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        post('/auth/login', thisParent)
            .then((results) => {
                console.log("Created Parent", results.data)
                navigate(`/profile/${results.data._id}`)
                localStorage.setItem('authToken', results.data.token )
                
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                authenticateParent()
            })
    } 

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='email' name="email" value={thisParent.email} onChange={handleChange}></input>

                <label>Password</label>
                <input type='password' name="password" value={thisParent.password} onChange={handleChange}></input>

                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login