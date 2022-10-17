import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx' //importo un componente
import About from './pages/About.jsx'
//import Notfound from './pages/Notfound.jsx'


// * --> significa para todas las paguinas 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      {/* <Route path='*' element={<Notfound/>} />  */}
    </Routes>
  )
}

export default App