import phone from "./assets/Light Blue Smartphone Showcase.png"
import laptop from "./assets/Modern HP Laptop on White Background.png"
import watch from "./assets/Modern Smartwatch Fitness Display.png"

import "./App.css"

const products = [
    {
        id : 1,
        productname : "Laptop",
        image : laptop,
        price : 50000
    },
    {
        id : 2,
        productname : "Mobile",
        image : phone,
        price : 30000
    },
    {
        id : 3,
        productname : "SmartWatch",
        image : watch,
        price : 50000
    },
    {
        id : 3,
        productname : "SmartWatch",
        image : watch,
        price : 50000
    },
    {
        id : 3,
        productname : "SmartWatch",
        image : watch,
        price : 50000
    },
    {
        id : 3,
        productname : "SmartWatch",
        image : watch,
        price : 50000
    },
    {
        id : 3,
        productname : "SmartWatch",
        image : watch,
        price : 50000
    },
    {
        id : 3,
        productname : "SmartWatch",
        image : watch,
        price : 50000
    }
]

function Cards(){

    return(
        <div>
            <h1>Product Cards</h1>
            <div className="container">

                {products.map((product)=>(
                    <div className="card">
                        <img src={product.image} alt="" />
                        <h3>{product.productname}</h3>
                        <p>Price:Rs.{product.price}</p>
                         <button>Buy Now</button>
                         <button>Add To cart</button>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Cards