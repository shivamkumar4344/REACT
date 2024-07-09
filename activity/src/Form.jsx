import Button from "./Button";

function handleFormSubmit(e){
    e.preventDefault();
    console.log("Form was submited");
}

function Form()
{
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="write something" />
            <Button/>
        </form>
    )
}

export default Form;