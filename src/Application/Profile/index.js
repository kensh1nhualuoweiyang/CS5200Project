import "./index.css"
import { FaRegUserCircle } from "react-icons/fa"
import cover from "./cover.jpg"
import { Route, Routes, Navigate } from "react-router-dom"
import ProfileSongs from "./profileSongs"
function Profile() {
    return (
        <div className="wd-profile">
            <div className="wd-profile-header">
                <FaRegUserCircle />
                <h3 className="mt-2 wd-profile-user-name">User Name</h3>
                <button className="btn btn-secondary">Follow</button>
                <div className="d-flex wd-profile-header-followInfo">
                    <p>Followers: 0</p>
                    <p>Follwing: 0</p>
                </div>
            </div>
            <div className="wd-profile-body">
                <Routes>
                    <Route path="/" element={<ProfileSongs />} />
                    <Route path="My Songs/*" element={<ProfileSongs />} />
                </Routes>
            </div>

        </div>
    )
}

export default Profile