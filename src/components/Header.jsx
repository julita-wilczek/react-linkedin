import { useState, useEffect } from 'react'
import { Button } from "react-bootstrap"
import "./Header.css"

export default function Header() {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGYyM2JlNDBiNTAwMTViNmM5MzYiLCJpYXQiOjE2NDU0MzI2MTEsImV4cCI6MTY0NjY0MjIxMX0.XMHFmhlgBOpU5vRzOfPZDux7ojlsvqlSYXpEAjQG_-U'
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

    return (
        <div className={"header"}>
            <img src={"https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg"} className={"userBanner"} width="600" height="150" alt={"Linkedin Banner"}></img >
            {data && <img src={data.image} alt={"user profile"} className={"userImg"}></img>}
            {data && <h1 className={"mt-4"}>{data.name} {data.surname}</h1>}
            {data && <h6 className={"mt-4"}>{data.title}</h6>}
            {data && <h6 className={"mt-4"}>{data.area}</h6>}
            <Button variant="primary" className={"btns"}>Open to</Button>
            <Button variant="secondary" className={"btns"}>Add profile section</Button>
            <Button variant="secondary" className={"btns"}>More</Button>

        </div>
    )
}



