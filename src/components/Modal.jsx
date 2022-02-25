
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"
import { useLocation } from "react-router-dom";
import EditForm from "./EditForm";

const MyModal = ({setExperience, setmodal, experienceId, experience, modal, setReload}) => {
const [postMode, setPostMode] = useState(false)
const [editMode, setEditMode] = useState(false)
const [expImg, setExpImg] = useState(null)
const location = useLocation()

const PostModeOn = () => {
  setPostMode(true)
  setEditMode(false)
}

const EditModeOn = () => {
  setEditMode(true) 
  setPostMode(false)
}
useEffect(() => {location.pathname === "/in/me" ? PostModeOn() : EditModeOn()},[location])


 const deleteExperience = async () => {
   try{
   const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences/" + experienceId,
   {method: "DELETE", headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
  }}
  );
  if (response.ok) {
    setmodal(false)
    setReload(response)
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
  if (expImg !== null) {
   uploadPicture(experienceId)} 
   else{
    setmodal(false)
    setReload(response)
   }
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
   const data = await response.json()
  setExperience({role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: ""}) 
 if (data) { 
   if (expImg !== null) {
   uploadPicture(data._id)} 
   else{
    setmodal(false)
    setReload(response)
   }
   } 
  
  }
} catch (error) {
  console.log(error)
}
}



const uploadPicture = async (expId) => {
  
  console.log(expId)
  try {
    

    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences/" + expId +"/picture", {
      method: "POST", 
      body: expImg,
      headers: {

       Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
     }
    })

    if (response.ok) {
      setmodal(false)
      setReload(response)
    } else {
      console.log("sth wrong")
    }

  } catch (error) {
    console.log(error)
  }
}

const hideModal = () => {
  setmodal(false)
}

    return(<>
  <Modal  onHide={hideModal} id="modal" show={modal}>
              <Modal.Header closeButton>
              {editMode && (<div style={{fontSize: "19px"}}>Edit experience</div>)}
                {postMode && (<div style={{fontSize: "19px"}}>Add experience</div>)}
              </Modal.Header>
              <EditForm expId={experienceId} postMode={postMode} setExperience={setExperience} experience={experience} setExpImg={setExpImg}/>
              <Modal.Footer>
                {editMode && (<div className="d-flex w-100 justify-content-between"><Button id="deleteButton" onClick={()=>{deleteExperience()}}>
                 Delete experience </Button>
                <Button id="saveButton" onClick={()=>{saveChanges()}}>Save </Button></div>)}
                {postMode && (<div className="d-flex justify-content-left"><Button id="saveButton" onClick={()=>{postExperience()}}>
                  Post
                </Button></div>)}
              </Modal.Footer>
            </Modal>
    </>)
} 

export default MyModal