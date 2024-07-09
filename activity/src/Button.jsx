function PrintHello()
{
    console.log("Hello!");
};

export default function Button()
{
    let styles = {
        textAlign:"center",
        borderRadius:"12px",
        border:"solid 2px black",
        marginLeft:"48%",
        marginTop:"20px",
        height:"30px",
        width:"80px",
        backgroundColor:"cyan",
        fontFamily:"sans-serif",
        cursor:"pointer"

    }
    return(<div ><button style={styles} onClick={PrintHello}>Click Me!</button></div>)
};