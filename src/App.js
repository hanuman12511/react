import {BrowserRouter} from 'react-router-dom'
import Router from './view/router/Router';
import { AuthContext } from './view/context/AuthContext';
import {data} from './view/data/data'
function App() {
  return(
    <>
    <AuthContext.Provider value={data}>   
      <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </AuthContext.Provider>
 
    </>
  )
}

export default App;
