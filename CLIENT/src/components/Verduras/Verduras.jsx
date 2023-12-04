
import ProductList from "../ProductList/ProductList";

const Verduras = ({addToCart}) => {

    return(
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h1>VERDURAS</h1>
            <ProductList addToCart={addToCart} category="verdura"></ProductList>
        </div>
    )
};

export default Verduras;