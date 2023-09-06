import {Routes,Route} from 'react-router-dom'
import Home from '../screen/Home';
import Payment from '../screen/Payment';
import Addtocart from '../screen/Addtocart';
import Details from '../screen/Details';
import Addres from '../screen/Addres';
function Router() {
    return(
      <>
   <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/details" Component={Details}/>
    <Route path="/addtocart" Component={Addtocart}/>
    <Route path="/payment" Component={Payment}/>
    <Route path="/addres" Component={Addres}/>
   </Routes>
      </>
    )
  }
  
  export default Router;
  