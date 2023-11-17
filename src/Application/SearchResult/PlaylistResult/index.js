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
                            <Link to={`/Application/Playlist/${item.id}`} className="ms-5 me-5" onClick={() => client.increasePlaylistView(item.id)}>{item.name}</Link>
                            <Link to={`/Application/Profile/${item.userName}`} className="ms-5 me-5"onClick={() =>client.increasePlaylistView(item.id)}>{item.userName}</Link>
                            <span className="me-5">View : {item.views}</span>
                         
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default PlaylistResult