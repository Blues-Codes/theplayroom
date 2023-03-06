import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { post } from "../services/authService"
import { AuthContext } from "../context/auth.context"
import { LoadingContext } from "../context/loading.context";
import BackgroundImg from "../components/BackgroundImg";

const Signup = () => {

    const { authenticateParent } = useContext(AuthContext)
    const [ newParent, setNewParent ] = useState(
        {
            name: "",
            email: "",
            password: "",
            city: "",
            age: "",
            childName: "",
            childAge: "",
            relation: ""
                }
    )
    const navigate = useNavigate()
    const handleChange = (e) => {
        setNewParent((recent)=>({...recent, [e.target.name]: e.target.value}))
        console.log("Changing Parent", newParent)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        post('/auth/signup', newParent)
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
    <BackgroundImg>
    <div className="ParentSignup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' name="name" value={newParent.name} onChange={handleChange}></input>
            <label>Email</label>
            <input type='email' name="email" value={newParent.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type='password' name="password" value={newParent.password} onChange={handleChange}></input>
            <label>City</label>
            <input type='text' name="city" value={newParent.city} onChange={handleChange}></input>
            <label>Child Name</label>
            <input type='text' name="childName" value={newParent.childName} onChange={handleChange}></input>
            <label>Child Age</label>
            <input type='text' name="childAge" value={newParent.childAge} onChange={handleChange}></input>
            <label>Relation</label>
            <select type="relation">
                <option type="option">Select</option>
                <option type="option1">Parent</option>
                <option type="option2">Grandparent</option>
                <option type="option3">Guardian</option>
                <option type="option4">Aunt</option>
                <option type="option5">Uncle</option>
                <option type="option6">Sibling</option>
            </select>
            {/* <input type='text' name="name" value={newParent.relation} onChange={handleChange}></input> */}

            <button type="submit">Sign Up</button>
        </form>
    </div>
    </BackgroundImg>
)
}

export default Signup