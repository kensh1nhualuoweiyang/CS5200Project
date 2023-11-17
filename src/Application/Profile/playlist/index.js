import { Link, useParams } from "react-router-dom";
import "./index.css"
import { useState } from "react";
import { useEffect } from "react";
import * as client from "../../client"
function ProfilePlaylist() {


    const [playlist, setPlaylist] = useState([])
    const { userName } = useParams()
    const [newPlaylist, setNewPlaylist] = useState({ public: true })
    const [error, setError] = useState()
    const [user, setUser] = useState(null)
    const fetchUser = async () => {
        const response = await client.getCurrentUser()
        setUser(response)
    }
    const fetchData = async () => {
        const response = await client.getPlaylistCreated(userName)
        setPlaylist(response)
    }
    useEffect(() => {
        fetchData()
        fetchUser()
        setNewPlaylist({ ...newPlaylist, userName: userName })
    }, [userName])

    const handleDelete = async (id) => {
        const response = await client.deletePlaylist(id)
        const newPlaylist = playlist.filter((item) => item.id !== id)
        setPlaylist(newPlaylist)
    }

    const handleCreate = async () => {
        try {
            const response = await client.createNewPlaylist(newPlaylist);
            console.log(response);
            const updatedPlaylist = [...playlist, { ...newPlaylist, id: response.id }];
            setPlaylist(updatedPlaylist);

            setNewPlaylist({ public: true });
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    return (
        <div className="container mt-3">

            <div className="list-group">
                {
                    playlist.length > 0 ? (

                        playlist.map((item, index) => (
                            <div className="list-group-item list-group-item-action">
                                <Link className="wd-profile-playlist" key={index} to={`/Application/Playlist/${item.id}`} >
                                    {item.name}
                                </Link>
                                {user && userName === user && <div className="float-end">
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>}
                            </div>
                        ))
                    ) : (
                        <h3 className="me-4">No Playlist Created</h3>

                    )}
            </div>
            <div className="float-end mt-3">

                {user && userName === user && <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    Create Playlist
                </button>}
                <form className="dropdown-menu p-4">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label for="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={newPlaylist.name} onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="category" id="public" onClick={() => setNewPlaylist({ ...newPlaylist, public: true })} checked={newPlaylist.public} />
                        <label class="form-check-label" for="public">
                            Public
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="category" id="private" onClick={() => setNewPlaylist({ ...newPlaylist, public: false })} checked={!newPlaylist.public}/>
                        <label class="form-check-label" for="private">
                            Private
                        </label>
                    </div>
                    <div class="mb-3">
                        <label for="desc" class="form-label">Description</label>
                        <textarea class="form-control" id="desc" rows="3" value={newPlaylist.description} onChange={(e) => setNewPlaylist({ ...newPlaylist, description: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleCreate}>Create</button>
                </form>
            </div>
        </div>
    );
}
export default ProfilePlaylist