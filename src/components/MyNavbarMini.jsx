import "./MyNavbarMini.css";
import {Dropdown, DropdownButton }from "react-bootstrap"

const MyNavBarMini = () => {
  return (
    <div className="mainsticky mt-4">
      <div className="compact-links1 d-flex mx-2 justify-content-center">
        <a
          href="https://about.linkedin.com/it-it?lr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          about
        </a>

        <a
          href="https://www.linkedin.com/accessibility"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary mx-3"
        >
          Accesibility
        </a>

        <a
          href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIvDJ8flGSJG7%2BUFMDZeaBw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          Help Center
        </a>
      </div>
      <div className="compact-links2 mt-1 d-flex justify-content-center">
      <div className="mr-3">
              <DropdownButton
                id="dropdown-basic-button"
                title="Privacy & Terms"
                size="sm"
                className="mb-2"
              >
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Privacy Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/user-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  User Agreement
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Cookie Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/copyright-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Copyright Policy
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <a className="text-secondary choices"href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIvDJ8flGSJG7%2BUFMDZeaBw%3D%3D">Ad Choices</a>


      </div>
      <div className="compact-links3 d-flex justify-content-center">
          <a className="text-secondary mx-2 adv" href="https://business.linkedin.com/it-it/marketing-solutions/ads?lr=1">Advertising</a>
          <DropdownButton
                id="dropdown-basic-button"
                title="Buisness Services"
                size="sm"
                className="mb-2"
              >
                <Dropdown.Item
                  href="https://business.linkedin.com/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control&src=li-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Talent Solutions
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/user-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  User Agreement
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Cookie Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/copyright-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Copyright Policy
                </Dropdown.Item>
              </DropdownButton>
              </div>
              <div className="compact-links4 d-flex justify-content-center">
               <a className="mr-3 text-secondary" href="/">Get the Linkedin app</a> <a className=" text-secondary" href="/">More</a>
              </div>

      
    </div>
  );
};

export default MyNavBarMini;
