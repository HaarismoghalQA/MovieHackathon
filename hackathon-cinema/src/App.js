import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './compontents/Navbar';


function App() {
  return (

    <div>
      <BrowserRouter>

        <Nav />
      </BrowserRouter>

    </div>
  );
}

export default App;
