// Needs to be customizable

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const ProfileSection = ({ name, card }) => {

    const [editMode, setEditMode] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        location.pathname === "/in/me" ? setEditMode(true) : setEditMode(false)
    }, [location])


    const content = card !== "about" ? card : <div>I have over 15 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets.</div>
    return (
        <div className="profileSection">
            <div className="d-flex justify-content-between">
                <h5 className="mb-3 d-inline-block">{name}</h5> {editMode && (<div><Button className="editButton"><i className="bi bi-plus-lg"></i></Button><Button className="editButton" onClick={() => { navigate('/in/details/6214aa4e0448b40015116892') }}><i className="bi bi-pencil"></i></Button></div>)}</div>

            {content}
        </div>

    )
}

export default ProfileSection