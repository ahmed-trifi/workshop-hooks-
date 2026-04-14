import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={()=> setShow(!show)}>{show == true ? "Faire Disparaitre" : "Montrer"}</button>

      {
        show == true &&  <Counter/>
      }
     
    </div>
  );
}

export default App;
