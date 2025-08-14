import { FaShoppingCart } from "react-icons/fa";
import { products } from "./constants/products";
import { FaStar } from "react-icons/fa6";

const App = () => {

    // const arr = [1, 2, 3, 4, 5, 6];

    const handleClick = (title) => {
        console.log(title)
    }

    return <div className="d-flex gap-1 flex-wrap justify-content-center">
        {/* {
            arr.map((number, index) => {
                // key -> unique identifier -> Which element is create, update or delete
                return <div key={index} className="bg-primary d-flex justify-content-center text-light">{number}</div>
            })
        } */}
        <div id="clicked"></div>
        {
            products.map(product => {
                return <div key={product.id} style={{width: "10rem"}} className="border border-2 border-secondary p-1 rounded-2">
                    <div>
                        <img src={product.image} alt={product.title} className="w-100" style={{aspectRatio: 1/1, objectFit: "contain"}}/>
                    </div>
                    <div>
                        <h5 className="text-truncate">{product.title}</h5>
                        <div className="d-flex justify-content-between">
                            <span className="d-flex align-items-center gap-1"><FaStar /> {product.rating.rate}</span>
                            <span>${product.price}</span>
                        </div>
                        <button onClick={() => handleClick(product.title)} className="btn btn-success w-100 rounded-2 mt-2"><FaShoppingCart /> Add to Cart</button>
                    </div>
                </div>
            })
        }
    </div>
}

export default App;