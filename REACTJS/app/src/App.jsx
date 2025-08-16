// import { FaShoppingCart } from "react-icons/fa";
// import { products } from "./constants/products";
// import { FaStar } from "react-icons/fa6";

import { useState } from "react";

// const App = () => {

//     // const arr = [1, 2, 3, 4, 5, 6];
//     const a = 10;

//     const handleClick = (title) => {
//         console.log(title)
//     }

//     return <div className="d-flex gap-1 flex-wrap justify-content-center">
//         {/* {
//             arr.map((number, index) => {
//                 // key -> unique identifier -> Which element is create, update or delete
//                 return <div key={index} className="bg-primary d-flex justify-content-center text-light">{number}</div>
//             })
//         } */}
//         <div id="clicked"></div>
//         {
//             products.map(product => {
//                 return <div key={product.id} style={{width: "10rem"}} className="border border-2 border-secondary p-1 rounded-2">
//                     <div>
//                         <img src={product.image} alt={product.title} className="w-100" style={{aspectRatio: 1/1, objectFit: "contain"}}/>
//                     </div>
//                     <div>
//                         <h5 className="text-truncate">{product.title}</h5>
//                         <div className="d-flex justify-content-between">
//                             <span className="d-flex align-items-center gap-1"><FaStar /> {product.rating.rate}</span>
//                             <span>${product.price}</span>
//                         </div>
//                         <button onClick={() => handleClick(product.title)} className="btn btn-success w-100 rounded-2 mt-2"><FaShoppingCart /> Add to Cart</button>
//                     </div>
//                 </div>
//             })
//         }
//     </div>
// }

// export default App;

// state management in react

// functional component and class components

// Hooks -> functions that let you "hook" into React features

// state -> data that can change over time, object

// useState()
// spread operator, rest operator

const App = () => {
    // let a = 10;
    const [counter, setCounter] = useState(0)
    const [countObj, setCounterObj] = useState({ first_counter: 0, second_counter: 0 });
    const [list, setList] = useState([])
    // console.log(countObj)
    const handleIncrement = () => {
        // a++;
        // console.log(a)
        setCounter(counter + 1)
    }

    const updateC1 = () => {
        setCounterObj({
            ...countObj,
            first_counter: countObj.first_counter + 1
        }); 
    }

    const updateC2 = () => {
        setCounterObj({
            ...countObj,
            second_counter: countObj.second_counter + 1
        })
    }

    const handleCreateRandomValue = () => {
        const randomValue = crypto.randomUUID();
        setList([...list, randomValue])
    }

    return <div>
        <h1>App</h1>
        {/* <div>{a}</div> */}
        <div>{counter}</div>
        <button onClick={handleIncrement}>Update</button>

        <div>
            <div>C1: {countObj.first_counter}</div>
            <div>C2: {countObj.second_counter}</div>
            <button onClick={updateC1}>Update C1</button>
            <button onClick={updateC2}>Update C2</button>
        </div>

        <button onClick={handleCreateRandomValue}>Add Random Value</button>
        <div>
            {
                list.map((item, idx) => {
                    return <div key={idx} className="bg-primary text-light p-3">{item}</div>
                })
            }
        </div>
    </div>
}

export default App