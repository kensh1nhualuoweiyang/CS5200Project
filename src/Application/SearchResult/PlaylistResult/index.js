import { Link, useParams } from "react-router-dom"
import cover from "./cover.jpg"
import "./index.css"
import { useEffect } from "react"
import { useState } from "react"
import * as client from "../../client"
function PlaylistResult() {

    const {keyword} = useParams()
    const [result,setResult] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await client.getSearchPlaylist(keyword)
            setResult(response)
        }
        fetchData()
     },[])

    return (
        <div className="wd-playlist-result">
            <ul className="list-group">
                {
                    result.map((item) => (
                        <li className="list-group-item list-group-item-action">
                            <img src={cover} />
                            <Link to={`/Application/Playlist/${item._id}`} className="ms-5 me-5">{item.title}</Link>
                            <Link to={`/Application/Profile/${item.author}`} className="ms-5 me-5">{item.author}</Link>
                            <span className="me-5">View : {item.view}</span>
                         
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default PlaylistResult