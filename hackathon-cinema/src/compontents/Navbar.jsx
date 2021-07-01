import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <p><Link to="/">Home</Link>
            </p><br />

            <button>
                <Link to="">My Movies</Link>
            </button>

            <button>
                <Link to="">Movie Finder</Link>
            </button>


            <button>
                <Link to="">About Us</Link>
            </button>

            <button>
                <Link to="">Contact Us</Link>
            </button>


        </div>
    );
}

export default Nav;