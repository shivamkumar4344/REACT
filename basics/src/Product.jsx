import "./Product.css";
import Title from "./Title";

function Product({ title, price, features }) {
    let styles = { backgroundColor: price > 25000 ? "yellow" : "" };

    return (
        <div className="Product">
            <h2>{title}</h2>
            <h4>Price: {price}</h4>
            <h5>Features: {features.map((items) => <li>{items}</li>)} </h5>
            {price > 30000 ? <p>Discount of 10%</p> : <p>Discount of 5% </p>}

        </div>
    )
};

export default Product;