function MsgBox({userName,textColor})
{
    let styles = {color:textColor};
    return <h2 style={styles}>This message is for you {userName}</h2>
};

export default MsgBox;