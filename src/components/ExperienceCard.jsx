
import experience from "../data/experience.json"
import { Image, Button, Modal,  Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { parseISO, format, } from 'date-fns'
import {useParams, useLocation } from 'react-router-dom'
import MyModal from "./Modal"


const ExperienceCard = ({ edit}) => {
    const [editButton, setEditButton] = useState(false)
    const [experiences, setExperiences] = useState([])
    const [modal, setModal] = useState(false)
    const params = useParams()
    const location = useLocation()
    let url = location.pathname === "/in/me" ? "https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences" : "https://striveschool-api.herokuapp.com/api/profile/" + params.profileId + "/experiences"
    console.log(url)

    useEffect(() => {
        edit ? setEditButton(true) : setEditButton(false)
    }, [edit])

   
    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        try {
            let response = await fetch(url, {
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

    const showModal = () => {
        setModal(true)
    }

    return (
        experiences.map((exp) => {
            return (<><div className="d-flex">

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
        {editButton && (<Button onClick={()=>{showModal()}}>
              Edit exp #{exp._id}
            </Button>)}
        <hr />
        {modal && (<MyModal />)}
        </>)}
    )
    )
    
   
}

export default ExperienceCard

