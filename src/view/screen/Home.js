import { createContext, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
const nav = useNavigate()
  const {data} =useContext(AuthContext)
  console.log(data);
  function productfun(item){
    console.log(item);
    nav("/details",{state:item})
      
  }
    return(
      <>
      {
        data.map(d=>(
          <div className="product-div" onClick={()=>productfun(d)}>
            <img src={d.image} className="product-img"/>
            <p className="product-text">{d.product_name}</p>
          </div>
        ))
      }
      </>
    )
  }
  
  export default Home;
  