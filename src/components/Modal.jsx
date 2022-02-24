
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"
import EditForm from "./EditForm";

const MyModal = ({setExperience, setModal, experienceId, experience, modal, setReload}) => {
const [postMode, setPostMode] = useState(false)
const [editMode, setEditMode] = useState(false)
const [expImg, setExpImg] = useState(null)
const [expId, setExpId] = useState("")

useEffect(() => {setExpId(experienceId)}, [experienceId])


const PostModeOn = () => {
  setPostMode(true)
  setEditMode(false)
}

const EditModeOn = () => {
  setEditMode(true) 
  setPostMode(false)
}
useEffect(() => {experienceId === "" ? PostModeOn() : EditModeOn()},[experienceId])

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
    setModal(false)
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
  uploadPicture()
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
 if (data) {  
   setExpId(data._id)
   } 
  
  }
} catch (error) {
  console.log(error)
}
}

useEffect(() => {uploadPicture()}, [expId])

const uploadPicture = async () => {
  
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
      setModal(false)
      setReload(response)
    } else {
      console.log("sth wrong")
    }

  } catch (error) {
    console.log(error)
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
              <EditForm expId={experienceId} setExperience={setExperience} experience={experience} setExpImg={setExpImg}/>
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