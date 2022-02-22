import { Navbar, Nav, Form, FormControl, Image } from "react-bootstrap";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar
      id="Navbar"
      className="d-flex justify-content-center py-0 "
      expand="lg"
    >
      <i id="linkedinIcon" className="bi bi-linkedin"></i>
      <Form inline id="searchBar">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 "
          id="SearchBarNavbar"
        />
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ml-5">
          <Nav.Link
            className=" d-flex flex-column align-items-center justify-content-end"
            href="#home"
          >
            <i className="bi bi-house-door-fill "></i>
            Home
          </Nav.Link>
          <Nav.Link
            className=" d-flex flex-column align-items-center justify-content-end"
            href="#home"
          >
            <i className="bi bi-people-fill"></i>
            Network
          </Nav.Link>
          <Nav.Link
            className=" d-flex flex-column align-items-center justify-content-end"
            href="#home"
          >
            <i className="bi bi-briefcase-fill"></i>
            Job
          </Nav.Link>
          <Nav.Link
            className="  d-flex flex-column align-items-center justify-content-end"
            href="#home"
          >
            <i className="bi bi-chat-dots-fill"></i>
            Messaging
          </Nav.Link>
          <Nav.Link
            className=" d-flex flex-column align-items-center justify-content-end"
            href="#home"
          >
            <i className="bi bi-bell-fill"></i>
            Notifications
          </Nav.Link>
          <Nav.Link
            className=" d-flex flex-column align-items-center justify-content-end"
            href="#home"
            id="userImage"
          >
            <Image
              id="UserImageNavbar"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              roundedCircle
            />
            Me
          </Nav.Link>
          <Nav.Link
            className=" d-flex flex-column align-items-center justify-content-end"
            href="#home"
          >
            <i className="bi bi-grid-3x3-gap-fill"></i>
            Work
          </Nav.Link>
          <Nav.Link id="tryPremium" className=" d-flex  " href="#home">
            Try Premium for free
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar