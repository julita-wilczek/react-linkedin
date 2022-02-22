// Needs to be customizable

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const ProfileSection = ({name, card}) => {

    const [editMode, setEditMode] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const detailsRef = "myID" // this needs to be passed from the parameter

    useEffect(() => {location.pathname === "/in/me" ? setEditMode(true) : setEditMode(false)
}, [location])
    
    
    const content = card !== "about" ? card : <div>I have over 15 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets.</div>
    return (
    <div className="profileSection">
    <div className="d-flex justify-content-between">
        <h5 className="mb-3 d-inline-block">{name}</h5> {editMode && (<div><Button className="editButton"><i class="bi bi-plus-lg"></i></Button><Button className="editButton" onClick={()=>{navigate('/in/details/' + detailsRef)}}><i class="bi bi-pencil"></i></Button></div>)}</div>

    {content}
    </div>

    )
    }
    
    export default ProfileSection