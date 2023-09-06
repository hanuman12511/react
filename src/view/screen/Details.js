import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Details() {
  const nav = useNavigate()
 const loc =useLocation()
 const[detail,setDetail] =useState(loc.state)
const{addcart} =useContext(AuthContext)
 function addtocartfun(){
  console.log(detail);
  addcart.push(detail)
  nav("/addtocart")

 }
    return(
      <>
      <img src={detail.image} className="detail-img"/>
      <button onClick={addtocartfun}>Add to Cart</button>
      </>
    )
  }
  
  export default Details;
  