import { useParams } from "react-router"
import "./index.css"
import cover from "./cover.jpg"
import { BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import * as client from "../client"
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function SongDetail() {
    const { sid } = useParams()
    const examplePlaylist = []
    const [songDetail, setSongDetail] = useState({})
    const [comments, setComents] = useState([])
    const fetchSongData = async () => {
        const response = await client.getSongDetail(sid)
        setSongDetail(response[0])
    }

    const fetchSongComment = async () => {
        const response = await client.getSongComments(sid)
        setComents(response)
    }
    
    useEffect(() => {
        fetchSongData()
        fetchSongComment()
    }, [sid])
    return (

        <div className="wd-song-detail-holder">
            <div className="wd-song-detail container">
                {songDetail && <div className="wd-song-detail-info d-flex pt-3">
                    <img src={cover} />
                    <div className="wd-song-info ms-5">
                        <h4>{songDetail.title}</h4>
                        <p>Uploaded By:&nbsp;&nbsp;{songDetail.userName}</p>
                        <p>Likes: {songDetail.likes}</p>
                        <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Add to Playlist
                            </button>
                            <ul className="dropdown-menu">
                                {
                                    examplePlaylist.length >= 1 ?
                                        examplePlaylist.map((item) => (
                                            <li><button type="button" className="dropdown-item" >{item}</button></li>
                                        )) :
                                        <li className="ms-3">No Playlist Found</li>
                                }
                            </ul>
                        </div>
                        <br />
                        <button className="btn btn-transparent mt-2"><BiLike className="me-2" /></button>
                    </div>
                </div>}
                <hr />
               {songDetail && <div className="wd-song-lyrics">
                    <h4>Lycris</h4>
                    {songDetail.lyrics && songDetail.lyrics.split('<br/>').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>}
                <hr />
                <div className="wd-song-comments">
                    <h4>Comments</h4>
                    <ul className="list-group">
                        {
                            comments.map((item) => (
                                <li className="list-group-item ">
                                    <div className="d-flex">
                                        <BiUserCircle className="me-2" />
                                        <Link to={`/Application/Profile/${item.userName}`} className="wd-song-comment-user">
                                            {item.userName}
                                        </Link>
                                        <p className="wd-comment-date float-end">
                                            {item.commentDate}
                                        </p>
                                    </div>

                                    <div className="wd-song-comment-body mt-2 ms-5">
                                        {item.detail}
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                    <hr className="mb-2 mt-3" />
                    <div className="mb-2">
                        <label for="comment" class="form-label">Enter Comments</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                        <div className="float-end mt-2 mb-3">
                            <button className="btn btn-primary">Post</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}


export default SongDetail