
import ProductList from "../ProductList/ProductList";

const Frutas = ({addToCart}) => {
    
    return(
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h1>FRUTAS</h1>
            <ProductList addToCart={addToCart} category="fruta"></ProductList>
        </div>
    );
};

export default Frutas;