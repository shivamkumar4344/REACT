import { useState } from "react";

export default function CommentsForm()
{
    let [formData ,setFormData] = useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange = (event)=>{
        setFormData((curr)=>{
            return {...curr,[event.target.name] : event.target.value};
        })

    };

    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        setFormData({
            username:"",
            remarks:"",
            rating:5
        })
    };


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username
            </label>
            <input type="text" placeholder="enter your username" onChange={handleInputChange} id="username" name="username"/>
            <br /><br />
            <label htmlFor="remakrs">Remarks</label>
            <textarea name="remarks" id="remarks" onChange={handleInputChange}>
            </textarea>
            <br /><br />
            <label htmlFor="rating">Rating</label>
            <input type="number" placeholder="enter your rating" onChange={handleInputChange} id="rating" name="rating" min={1} max={5}/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}