// This is for fetching posts

import { useEffect, useState } from "react"
import Post from "./Post"

const PostAreaSection = ({reload}) => {

useEffect(() => {fetchPost()}, [])
useEffect(() => {fetchPost()}, [reload])

const[posts, setPosts] = useState([])

const fetchPost = async() => {
try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
          },
    });
    if (response.ok) {
        let data = await response.json();
        let filteredData = data.filter((element) => element.text.length > 200 && (element.username !== "Mohammadamin") && (element.username !== "TommysTurnips") && (element.username !== "dollariyke")  && !(element.text.includes("Lorem ipsum")))
        let fromNewest = filteredData.reverse()
        setPosts(fromNewest)
        console.log(filteredData)
    }
}
catch (error) {
    console.log(error)
}
}

return(
    posts.map(post => {return(<Post userId={post.user._id} key={post._id} imageUploaded={post.image} text={post.text} date={post.createdAt} image={post.user.image} name={post.user.name} surname={post.user.surname} title={post.user.title}/>)})
    )
}

export default PostAreaSection

