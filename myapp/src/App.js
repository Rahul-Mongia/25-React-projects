
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Edit from './Pages/Edit';
function App() {
  return (
   <div>
    <h1 style={{ textAlign:"center"}}>MEME GENERATOR</h1>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
   </div>
  );
}

export default App;
