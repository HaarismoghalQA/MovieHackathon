import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Aboutus from './components/Aboutus';
import ContactUsPage from './components/contact';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import MyMovie from './components/MyMovie';
import MovieFinder from './components/moviefinder';
import LandingPage from './components/Landing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Route path="/" exact>
          <LandingPage/>
        </Route>

        <Route path="/MyMovies">
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
           <i>&copy;ByteMe</i>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
