
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"
import EditForm from "./EditForm";

const MyModal = ({setExperience, setModal, experienceId, experience, modal}) => {
const [postMode, setPostMode] = useState(false)
const [editMode, setEditMode] = useState(false)


useEffect(() => {experienceId === "" ? setPostMode(true) : setEditMode(true)},[experienceId])

 const deleteExperience = async () => {
   try{
   const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences/" + experienceId,
   {method: "DELETE", headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
  }}
  );
  if (response.ok) {
    console.log("success!!")
    } 
} catch (error) {
  console.log(error);
}
 }

 const saveChanges = async () => {
  try{
  const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences/" + experienceId,
  {method: "PUT", 
  body: JSON.stringify(experience),
  headers: {
  'Content-Type': 'application/json',
   Authorization:
     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
 }}
 );
 if (response.ok) {
   console.log(response.json)
   console.log("experience updated")
   } 
} catch (error) {
 console.log(error);
}
}

const postExperience = async () => {
  try{
  const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences/",
  {method: "POST", 
  body: JSON.stringify(experience),
  headers: {
  'Content-Type': 'application/json',
   Authorization:
     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
 }}
 );
 if (response.ok) {
   console.log(response.json)
   console.log("experience updated")
   } 
} catch (error) {
 console.log(error);
}
}

const hideModal = () => {
  setModal(false)
}

    return(<>
  <Modal  onHide={hideModal} id="modal" show={modal}>
              <Modal.Header closeButton>
                <div style={{fontSize: "19px"}}>Edit experience</div>
              </Modal.Header>
              <EditForm expId={experienceId} setExperience={setExperience} experience={experience}/>
              <Modal.Footer className="d-flex justify-content-between">
                {editMode && (<><Button id="deleteButton" onClick={()=>{deleteExperience()}}>
                 Delete experience </Button>
                <Button id="saveButton" onClick={()=>{saveChanges()}}>Save </Button></>)}
                {postMode && (<Button id="saveButton" onClick={()=>{postExperience()}}>
                  Post
                </Button>)}
              </Modal.Footer>
            </Modal>
    </>)
} 

export default MyModal