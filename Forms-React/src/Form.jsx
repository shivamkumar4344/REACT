import { useState } from "react"

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password:"",
    });

    let handleInputChange = (event) => {


        setFormData((curr) => {
            return { ...curr, [event.target.name]: event.target.value };
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password:""
        })
    };

    return (
        <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="enter your full name " value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />

            <br /><br />
            <label htmlFor="username">User-Name</label>
            <input type="text" placeholder="enter your username " value={formData.username} onChange={handleInputChange} id="username" name="username" />
            <br /><br />
            
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="enter your password " value={formData.password} onChange={handleInputChange} id="password" name="password" />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}