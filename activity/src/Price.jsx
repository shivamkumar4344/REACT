export default function Price({oldPrice,newPrice})
{
    let oldStyles = {
        textDecorationLine:"line-through"
    };
    let newStyle={
        fontWeight:"bold"
    };

    let allStyles = {
        backgroundColor:"#e0c367",
        height:"30px",
        width:"292px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    };

    return(
        <div style={allStyles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyle}>{newPrice}</span>
        </div>
    )
};