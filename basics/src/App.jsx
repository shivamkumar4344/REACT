import "./App.css";
import Title from "./Title";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";


function App() {
  return(
    <>
    <Title/>
    <MsgBox userName="Shivam" textColor="red"/>
    <MsgBox userName="Ajay" textColor="blue"/>
    
    <ProductTab/>
    
    </>
  )
};

export default App;
