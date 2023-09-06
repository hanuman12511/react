import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Addtocart() {
const data = useContext(AuthContext)
console.log(data);
    return(
      <>
      <h1>Home</h1>
      </>
    )
  }
  
  export default Addtocart;
  