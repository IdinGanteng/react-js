import{ Navbar,Container,Nav, NavbarBrand,} from "react-bootstrap"


const NavigationBar=()=>{
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">IDIN FILM</Navbar.Brand>
                    
                    <Nav>
                       
                        <Nav.Link href="#comedy">COMEDY</Nav.Link>
                        <Nav.Link href="#comedy">SUPER HERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar;