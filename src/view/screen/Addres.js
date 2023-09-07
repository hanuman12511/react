import { useContext, useRef } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Addres(){
let {addres} =useContext(AuthContext)
const name = useRef("")
const area = useRef("")
const city = useRef("")
const state = useRef("")
    function AddAddres(){
        console.log(" addresdata");
        const params={
         name : name.current.value,
            area:area.current.value, 
            city :city.current.value,
            state :state.current.value,
        }
        addres[0]=params
        console.log(addres);
    }
    
    return(
        <>
        <div className="main-addres-div"> 
        <div className="addres-div">
        <input type="txt" ref={name} placeholder="Enter name"/>
       <input type="txt" ref={area} placeholder="Enter area"/>
       <input type="txt" ref={city} placeholder="Enter city"/>
       <input type="txt" ref={state} placeholder="Enter state"/>
       <button onClick={AddAddres}>Add Addres</button>
       </div>
       </div>
        </>
    )
}