import { useState, useEffect } from 'react'
import { Button } from "react-bootstrap"
import "./Header.css"
import { useLocation, useParams } from 'react-router-dom'
import HeaderModal from './HeaderModal'

export default function Header({personalData, setPersonalData}) {
    const location = useLocation()
    const [myProfile, setMyProfile] = useState(true)
    //const [isLoading, setIsLoading] = useState(false)
    //const [isError, setIsError] = useState(false)
    const params = useParams()
    const url = location.pathname === "/in/me" ? 'https://striveschool-api.herokuapp.com/api/profile/me' : 'https://striveschool-api.herokuapp.com/api/profile/' + params.profileId
    const data = personalData
    const [modal, setModal] = useState(false)
    const [reload, setReload] = useState(null)
    const mailto = "mailto:" + data.email


    useEffect(() => {
        fetchData()
    }, [])
    
    useEffect(() => {
        fetchData()
    }, [reload])
    
    useEffect (() => {
        location.pathname === "/in/me" ? setMyProfile(true) :setMyProfile(false)
    }, [location])

    const fetchData = async () => {
        try {
            let response = await fetch(url, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhYTQ4MDgyZWExZDAwMTViYjA1NWQiLCJpYXQiOjE2NTAyNzg2NjYsImV4cCI6MTY1MTQ4ODI2Nn0.6JbnsMx2f_LapEl9vU2JHole-4eJA8ktC8CQSNkfKeY'
                }
            })
            if (response.ok) {
                let data = await response.json()
                setPersonalData(data)
            } else {
                console.log('error')

            }
        } catch (error) {
            console.log(error)
        
        }
    }
    
    return (
        <div id="header" style={{marginTop: "0px"}}>
        <div id="top-image"></div>
        <div>
            <img src={data.image} alt="user profile" className="userImgUpdated"></img>
            <div className='d-flex justify-content-between mt-5'><h3>{data.name} {data.surname}</h3> {myProfile && (<Button className="editButton" onClick={()=>{setModal(true)}}><i className="bi bi-pencil"></i></Button>)}</div>
            
            <div className="mt-n1">{data.title}</div>
            <div style={{fontSize:"14px"}} className="text-muted">{data.area} · <a href={mailto}><span>Contact info</span></a> </div>
            <div style={{fontSize:"14px"}} className="mt-2"><span>500+ connections</span></div>
            
            <Button variant="primary" className="btns">Open to</Button>
            {myProfile && (<Button variant="outline-primary" className="btns">Add profile section</Button>)}
            <Button variant="outline-secondary" className="btns" id="more">More</Button>
            </div>
            <HeaderModal setModal={setModal} modal={modal} setReload={setReload}/>
        </div>
    )
}



