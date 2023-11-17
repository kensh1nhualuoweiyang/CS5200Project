import { Link, useParams } from "react-router-dom"
import "./index.css"
import { useState } from "react";
import { useEffect } from "react";
import * as client from "../../client"
function ProfileSongs() {
    const { userName } = useParams();
    const [songs, setSongs] = useState([])
    const [user,setUser] = useState(null)
    const fetchUser = async () =>{
        const response = await client.getCurrentUser()
        setUser(response)
    }

    const fetchUserSongs = async () => {
        const response = await client.getSongCreated(userName)
        setSongs(response)
    }
   
    useEffect(() => {
        fetchUserSongs()
        fetchUser()
    }, [userName])

    const handleDelete = async (id) => {
        const response = await client.deleteSong(id)
        const newSongs = songs.filter((item) => item.id !== id)
        setSongs(newSongs)
    }



    return (
        <div className="container mt-3">
            <div className="list-group">
                {
                    songs.length === 0 ? (
                        <div className="d-flex">
                            <h3 className="me-4">No Songs Created</h3>
                        </div>
                    ) : (
                        songs.map((item, index) => (
                            <div key={index} className="list-group-item list-group-item-action">
                                <Link className="wd-profile-songs" key={item} to={`/Application/Songs/${item.id}`} >
                                    {item.title}
                                </Link>
                               {user && user === userName && <div className="float-end">
                                    <Link className="btn btn-primary me-3" to={`/Application/${userName}/${item.id}/creator`}>Edit</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>}
                            </div>
                        ))
                    )
                }

            </div>
           {user && user === userName && <Link to={`/Application/${userName}/newSong/creator`} className="float-end btn btn-primary mt-2">Create</Link>}
        </div>
    );
}

export default ProfileSongs;
