import './App.css';
import Aboutus from './components/Aboutus';
import ContactUsPage from './components/contact';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './components/Navbar';

import MovieFinder from './components/moviefinder';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav/>

                <Route path="/ContactUs">
                  <ContactUsPage/>
                </Route>

                <Route path="/AboutUs">
                  <Aboutus/>
                </Route>
      
                <Route path="/MoiveFinder">
                  <MovieFinder/>
                </Route>

            </BrowserRouter>
        </div>
    );
}

export default App;
