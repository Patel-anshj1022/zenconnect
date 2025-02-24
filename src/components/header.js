import { faAddressBook, faContactBook, faMap } from "@fortawesome/free-regular-svg-icons"
import { faBook, faHome, faKitMedical, faPeopleGroup, faPhone, faPhoneSquare, faSignHanging, faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons/faMobilePhone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav, Navbar } from "react-bootstrap"

const HeaderComponent = () => {
    return (
        <header>
            <nav className="d-sm-flex align-items-center justify-content-center m-3">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                        <h1 className="m-2">ZenConnect</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faHome} />
                                Home
                            </Nav.Link>
                            <Nav.Link href="#link" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faMap} />
                                About Us
                            </Nav.Link>
                            <Nav.Link href="#link" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faSignHanging} />
                                Features
                            </Nav.Link>
                            <Nav.Link href="#link" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faKitMedical} />
                                Therapists
                            </Nav.Link>
                            <Nav.Link href="#link" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faBook} />
                                Resources
                            </Nav.Link>
                            <Nav.Link href="#link" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faPeopleGroup} />
                                Community
                            </Nav.Link>
                            <Nav.Link href="#link" className="d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faSquarePhone} />
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
    )
}

export default HeaderComponent