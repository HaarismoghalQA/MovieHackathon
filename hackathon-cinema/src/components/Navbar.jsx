import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <button><Link to="/">Home</Link>
            </button>

            <button>
                <Link to="/MyMovie">My Movies</Link>
            </button>

            <button>

                <Link to="/FindMovie">Movie Finder</Link>

            </button>


            <button>
                <Link to="/AboutUs">About Us</Link>
            </button>

            <button>
                <Link to="/ContactUs">Contact Us</Link>
            </button>


        </div>
    );
}

export default Nav;