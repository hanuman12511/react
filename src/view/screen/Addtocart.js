import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Addtocart() {
  const nav=useNavigate()
const {addcart} = useContext(AuthContext)
console.log(addcart);

function orderfun(){

  console.log("add");
  nav("/addres")
  
}
    return(
      <>
     {
        addcart.map(d=>(
          <div className="product-div">
            <img src={d.image} className="product-img"/>
            <p className="product-text">{d.product_name}</p>
          </div>
        ))
      }
      <button onClick={orderfun}>Order Now</button>
      </>
    )
  }
  
  export default Addtocart;
  