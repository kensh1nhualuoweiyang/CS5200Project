
import "./index.css"

import cover from "./cover.jpg"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import * as client from "../../client"
function SongResult() {

  
    const examplePlaylist = []
    const {keyword} = useParams()
    const [result,setResult] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await client.getSearchSongs(keyword)
            setResult(response)
        }
        fetchData()
     },[])


    return (
        <div className="wd-song-result">
            <ul className="list-group">
                {
                    result.map((item) => (
                        <li className="list-group-item list-group-item-action">
                            <img src={cover} />
                            <Link to={`/Application/Songs/${item.id}`} className="ms-5 me-5">{item.title}</Link>
                            <Link to={`/Application/Profile/${item.userName}`} className="ms-5 me-5">{item.userName}</Link>
                            <span className="me-5">Likes : {item.likes}</span>
                            <div className="btn-group ms-5">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Add to Playlist
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        //Fix user
                                        examplePlaylist.length >= 1 ?
                                        examplePlaylist.map((item) => (
                                            <li><button type="button" className="dropdown-item" >{item}</button></li>
                                        )):
                                        <li className="ms-3">No Playlist Found</li>
                                    }
                                    
                                </ul>
                            </div>
                        </li>

                    ))
                }

            </ul>
        </div>

    )

}


export default SongResult