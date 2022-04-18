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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhYTQ4MDgyZWExZDAwMTViYjA1NWQiLCJpYXQiOjE2NTAyNzg2NjYsImV4cCI6MTY1MTQ4ODI2Nn0.6JbnsMx2f_LapEl9vU2JHole-4eJA8ktC8CQSNkfKeY",
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

