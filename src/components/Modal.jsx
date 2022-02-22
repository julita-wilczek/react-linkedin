
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap"
import { useState } from "react";
import EditForm from "./EditForm";

const MyModal = () => {

  const [show, setShow] = useState(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(<>
    <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit experience</Modal.Title>
              </Modal.Header>
              <EditForm />
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </>)
} 

export default MyModal