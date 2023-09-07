import {BrowserRouter} from 'react-router-dom'
import Router from './view/router/Router';
import { AuthContext } from './view/context/AuthContext';
import {data,addcart,addres} from './view/data/data'
import './view/style/style.css'
function App() {
  return(
    <>
    <AuthContext.Provider value={{data,addcart,addres}}>   
      <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </AuthContext.Provider>
 
    </>
  )
}

export default App;
