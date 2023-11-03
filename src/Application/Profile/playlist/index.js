import { Link } from "react-router-dom";
import "./index.css"

function ProfilePlaylist(){

    const playListHolder = [1,2,3]

    return (
        <div className="container mt-3">
            <div className="list-group">
                {
                    playListHolder.length === 0 ? (
                        <div className="d-flex">
                            <h3 className="me-4">No Songs Created</h3>
                            <Link className="btn btn-secondary">Create Song</Link>
                        </div>

                    ) : (
                        playListHolder.map((item, index) => (
                            <div className="list-group-item list-group-item-action">
                                <Link className="wd-profile-playlist" key={item} to={`/Application/Playlist/${item}`} >
                                    {item}
                                </Link>
                                <div className="float-end">
                                    <Link className="btn btn-primary me-3">Edit</Link>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        ))
                    )}
            </div>
        </div>
    );
}
export default ProfilePlaylist