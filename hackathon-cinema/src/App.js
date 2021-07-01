import './App.css';
import Aboutus from './components/Aboutus';
import ContactUsPage from './components/contact';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './components/Navbar';
import MyMovie from './myMovie/MyMovie';
import MovieFinder from './components/moviefinder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Route path="/MyMovie">
          <MyMovie />
        </Route>

        <Route path="/ContactUs">
          <ContactUsPage />
        </Route>

        <Route path="/AboutUs">
          <Aboutus />
        </Route>
    
        <Route path="/FindMovie">
          <MovieFinder />
        </Route>
    
        <footer>
           <b>&copy;ByteMe</b>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
