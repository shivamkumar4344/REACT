import { useState } from "react"

export default function LikeButton()
{

    const [isLiked , setIsLiked] = useState(true);

    let toggle = () =>{
        setIsLiked(!isLiked);
    }

    let styles = {
        color:"red",
    }

    let LikeButtonStyle = {
        fontSize:"50px",

    }
    
    return(
    <div>
        <h5>Like Button</h5>
        <p onClick={toggle} style={ LikeButtonStyle}>
        { isLiked ? <i className="fa-regular fa-heart"></i> : <i style={styles} className="fa-solid fa-heart"></i>}
        </p>
    </div>
    )
};