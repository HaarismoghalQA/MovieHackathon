import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
    <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav>
            <Nav.Link href="/MyMovies">My Movies</Nav.Link>
            <Nav.Link href="/AboutUs"> About Us</Nav.Link>
            <Nav.Link href="/ContactUs"> Contact Us</Nav.Link>
            <Nav.Link href="/FindMovie"> Movie Finder</Nav.Link>
        </Nav>
    </Navbar>
    );
}

export default NavBar;