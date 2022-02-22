import { useState, useEffect } from 'react'
import { Button } from "react-bootstrap"
import "./Header.css"
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const [myProfile, setMyProfile] = useState(true)
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs'
                    }
                })
                console.log(response)
                if (response.ok) {
                    let data = await response.json()
                    console.log(data)
                    setData(data)
                    setIsLoading(false)
                    setIsError(false)
                } else {
                    console.log('error')
                    setIsError(true)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
                setIsError(true)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect (() => {
        location.pathname === "/in/me" ? setMyProfile(true) :setMyProfile(false)
    }, [location])

    return (
        <div id="header">
        <div id="top-image"></div>
        <div>
            <img src={data.image} alt="user profile" className="userImg"></img>
            <h3 className="mt-5">{data.name} {data.surname}</h3>
            <div className="mt-n1">{data.bio}</div>
            <div style={{fontSize:"14px"}} className="text-muted">{data.area} · <span>Contact info</span> </div>
            <div style={{fontSize:"14px"}} className="mt-2"><span>500+ connections</span></div>
            
            <Button variant="primary" className="btns">Open to</Button>
            {myProfile && (<Button variant="outline-primary" className="btns">Add profile section</Button>)}
            <Button variant="outline-secondary" className="btns" id="more">More</Button>
            </div>
        </div>
    )
}



