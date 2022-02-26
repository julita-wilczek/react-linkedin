import { Navbar, Nav, Form, FormControl, Image, Container} from "react-bootstrap";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    
    <Navbar
      id="Navbar"
      className="d-flex justify-content-center py-0 flex-nowrap" 
    ><Container fluid style={{width: "100vw"}}>
      <i id="linkedinIcon" className="bi bi-linkedin"></i>
      <Form inline id="searchBar" className="d-none d-md-inline-block">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 "
          id="SearchBarNavbar"
        />
      </Form>
   
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href="/"
        >
          <i className="iconNavBar bi bi-house-door-fill "></i>
          <span className="d-none d-md-inline-block">Home</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href="#home"
        >
          <i className="iconNavBar bi bi-people-fill"></i>
          <span className="d-none d-md-inline-block">Network</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href="#home"
        >
          <i className="iconNavBar bi bi-briefcase-fill"></i>
          <span className="d-none d-md-inline-block">Job</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href="#home"
        >
          <i className="iconNavBar bi bi-chat-dots-fill"></i>
          <span className="d-none d-md-inline-block">Messaging</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href="#home"
        >
          <i className="iconNavBar bi bi-bell-fill text-muted"></i>
          <span className="d-none d-md-inline-block">Notification</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href="/in/me"
          id="userImg"
        >
          <Image
            id="UserImageNavbar"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            roundedCircle
          />
          <span className="d-none d-md-inline-block">Me</span>
        </Nav.Link>
        <Nav.Link
          className="containerIconAndNameNavBar d-flex flex-column align-items-center justify-content-end"
          href=""
        >
          <i className="iconNavBar bi bi-grid-3x3-gap-fill text-muted"></i>
          <span className="d-none d-md-inline-block">Work</span>
        </Nav.Link>
        <Nav.Link id="tryPremium" style={{color: "#915907"}} className="d-flex " href="#home">
          Try Premium for free
        </Nav.Link>
        </Container>
    </Navbar>
  
  );
};

export default MyNavbar;
