import "./index.css"
import playlistCover from "./plCover.jpg"
import cover from "./cover.jpg"
import { Link, useParams } from "react-router-dom"
import * as client from "../client"
import { useEffect } from "react"
import { useState } from "react"
function Playlist() {
    const { pID } = useParams()
    const [playlist, setPlaylist] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await client.getPlaylistDetail(pID)
            setPlaylist(response)
        }
        fetchData()
        console.log(playlist);
    },[pID])
  
    return (
        <div className="wd-playlist-detail-container">
            <div className="wd-playlist-detail container">
                <div className="wd-playlist-detail-info d-flex pt-3 ">
                    <img src={playlistCover} />
                    <div className="ms-5">
                        <h4>{playlist.title}</h4>
                        <p>{playlist.author}</p>
                        <p>Views: {playlist.view}</p>

                        <h4>Description:</h4>

                        {playlist.description}
                    </div>
                </div>
                <hr />
                <table className="table table-striped mt-3">
                    <tbody>
                        {   
                            
                            playlist.songs && playlist.songs.map((item, index) => (
                            <tr key={index} className="row">
                                <td className="col-4">
                                    <img src={cover} alt="Song Cover" />
                                </td>
                                <td className="col-3">
                                    <Link to={`/Application/Songs/${item._id}`} className="d-flex">
                                        <p className="me-5">{item.title}</p>
                                    </Link>
                                </td>
                                <td className="col-3">
                                    <Link to={`/Application/Profile/${item.aid}`}>
                                        <p className="ms-2">{item.author}</p>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Playlist