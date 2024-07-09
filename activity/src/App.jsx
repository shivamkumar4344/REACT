import ProductTab from './ProductTab';
import Button from './Button';



function App() {
  let styles = {
    textAlign:"center",
    fontWeight:"bold",
  }
  return (
    <>
    <h1 style={styles}>Blockbuster deals on Computer Accessories | Shop Now</h1>
      <ProductTab/>
      <Button/>
      </>
  )
};

export default App;
