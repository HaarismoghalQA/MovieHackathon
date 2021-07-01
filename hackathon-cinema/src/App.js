import './App.css';
import Aboutus from './compontents/Aboutus';
import ContactUsPage from './components/contact';
import { BrowserRouter } from "react-router-dom";
import Nav from './compontents/Navbar';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Aboutus />
                <ContactUsPage />
            </BrowserRouter>
        </div>
    );
}

export default App;
