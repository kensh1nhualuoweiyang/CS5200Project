import { useParams } from "react-router"
import "./index.css"
import cover from "./cover.jpg"
import { BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import * as client from "../client"
import { BiLike } from "react-icons/bi";

function SongDetail() {
    const { sid } = useParams()
    const [songDetail, setSongDetail] = useState({})
    const [comments, setComents] = useState([])
    const [playlist, setPlaylist] = useState([])
    const [user, setUser] = useState()
    const [like, setLike] = useState()
    const [detail, setDetail] = useState({})

    const fetchLike = async () => {
        const response = await client.getLikeSongs()
        setLike(response)
    }
    const fetchUser = async () => {
        const response = await client.getCurrentUser()
        setUser(response)
    }

    const fetchPlaylist = async () => {
        const response = await client.getPlaylistCreated(user)
        setPlaylist(response)
    }

    const fetchSongData = async () => {
        const response = await client.getSongDetail(sid)
        setSongDetail(response[0])
    }

    const fetchSongComment = async () => {
        const response = await client.getSongComments(sid)
        setComents(response)
    }

    const handlePostComment = async () => {
        const commentData = {
            detail: detail, userName: user, commentDate: new Date().toISOString().slice(0, 19).replace('T', ' '), sid: sid
        }
        setDetail("")
        const response = await client.postComment(commentData)
        fetchSongComment()
    }

    const handleDelete = async (cid) => {
        const response = await client.deleteComment(cid)
        const newComments = comments.filter((item) =>cid !=item.cid )
        setComents(newComments)
    }

    useEffect(() => {
        fetchUser()
        fetchSongComment()
        fetchSongData()
        fetchLike()
    }, [sid])

    const handleAdd = async (pid, sid) => {
        const response = await client.addToPlaylist(pid, sid)
    }
    const handleLike = async () => {
        if (!like.includes(sid)) {
            const response = await client.likeSong(sid)
            setLike([...like, sid])
            setSongDetail({ ...songDetail, likes: songDetail.likes + 1 })
        }

    }

    return (

        <div className="wd-song-detail-holder">
            <div className="wd-song-detail container">
                {songDetail && <div className="wd-song-detail-info d-flex pt-3">
                    <img src={cover} />
                    <div className="wd-song-info ms-5">
                        <h4>{songDetail.title}</h4>
                        <p>Uploaded By:&nbsp;&nbsp;{songDetail.userName}</p>
                        <p>Likes: {songDetail.likes}</p>
                        {user && <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" onClick={fetchPlaylist} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Add to Playlist
                            </button>
                            <ul className="dropdown-menu">
                                {
                                    playlist.length >= 1 ?
                                        playlist.map((item) => (
                                            <li><button type="button" className="dropdown-item" onClick={() => handleAdd(item.id, songDetail.id)}>{item.name}</button></li>
                                        )) :
                                        <li className="ms-3">No Playlist Found</li>
                                }
                            </ul>
                        </div>}
                        <br />
                        {user && <button className="btn btn-transparent mt-2" onClick={handleLike}><BiLike className="me-2" /></button>}
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
                                        <div className="wd-comment-date">
                                            {user && user === item.userName && <button className="btn btn-danger me-2" onClick={() => handleDelete(item.cid)}>Delete</button>}
                                            {item.commentDate}
                                        </div>
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
                        <textarea class="form-control" id="comment" rows="3" onChange={(e) => setDetail(e.target.value)}></textarea>
                        <div className="float-end mt-2 mb-3">
                            <button className="btn btn-primary" onClick={handlePostComment}>Post</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}


export default SongDetail