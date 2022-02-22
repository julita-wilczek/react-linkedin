
import experience from "../data/experience.json"
import { Image, Button, Modal,  Form } from "react-bootstrap"
import { useState, useEffect } from "react"

import EditForm from "./EditForm"


import { parseISO, format, } from 'date-fns'



const ExperienceCard = ({ edit }) => {

    const userID = "6214aa4e0448b40015116892"
    const [editButton, setEditButton] = useState(false)
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        edit ? setEditButton(true) : setEditButton(false)
    }, [edit])

    const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

      
     


    


    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userID + "/experiences", {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
                },
            }
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setExperiences(data)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        experiences.map((exp) => {
            return (<><div key={exp._id} className="d-flex">

                <Image className="mr-2" style={{ height: "50px" }} alt={exp.place} src={exp["place-img"]} />
                <div>
                    <h6 className="mb-0">{exp.rol}</h6>
                    <div style={{ fontSize: "14px" }}>{exp.company}</div>
                    <div style={{ fontSize: "14px" }} className="text-muted">{format(parseISO(exp.startDate), 'MMM yyyy')} - {format(parseISO(exp.endDate), 'MMM yyyy')} </div>
                    <div style={{ fontSize: "14px" }} className="text-muted">{exp.area}</div>
                    <div style={{ fontSize: "14px" }} className="mt-2">{exp.description}</div>
                    <div></div>
                </div>
            </div>

        </div>
        {editButton && (<><Button variant="primary" onClick={handleShow}>
              Edit 
            </Button>
      
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
            </Modal></>)}
        <hr />
        </>)}
    )
    )
    
   
}

export default ExperienceCard

