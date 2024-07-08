import Product from "./Product";

function ProductTab()
{
    let options = ["hi-tech","durable","fast"];
    let options2 = ["high-power","light-weight"];
    let options3 = ["smooth","long-lasting"];
    return(
        <div>
        <Product title="Laptop" price={40000} features={options}/>
        <Product title="Mobie" price={20000} features={options2}/>
        <Product title="Pen" price={10} features={options3}/>
        </div>
    )
};

export default ProductTab;