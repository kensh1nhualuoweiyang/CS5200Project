import "./index.css"
import { FaRegUserCircle } from "react-icons/fa"
import { Route, Routes, Navigate, useParams, Link, useLocation } from "react-router-dom"
import ProfileSongs from "./profileSongs"
import ProfilePlaylist from "./playlist"
import ProfileFollower from "./followers"
import ProfileFollowing from "./following"
import { useEffect } from "react"
import { useState } from "react"
import * as client from "../client"
function Profile() {
    const linklist = ["My Songs", "My Playlist", "Followers", "Followings"];
    const { pathname } = useLocation();
    const { userName } = useParams();

    const [user, setUser] = useState({})
    const fetchUserInfo = async () => {
        const response = await client.getBasicUserInfo(userName);
        setUser(response[0][0])
    }
    const [currentUser, setCurrentUser] = useState(null)
    const [following, setFollowing] = useState([])


  
    useEffect(() => {
        fetchUser()
        fetchUserInfo()
        fetchFollowing()
    }, [userName])



    const fetchUser = async () => {
        const response = await client.getCurrentUser()
        setCurrentUser(response)
    }

    const fetchFollowing = async () => {
        const response = await client.getSelfFollowing()
        console.log(response);
        setFollowing(response)
    }

    const handleFollow = async () => {
        const response = await client.follow(userName)
        setFollowing([...following, {userName:userName}]);
        fetchUserInfo()
    }

    const handleUnfollow = async () => {
        const response = await client.unfollow(userName)
        const newFollowing = following.filter((item) =>  item.userName !== userName)
        fetchUserInfo()
        setFollowing(newFollowing)
        
    }

    return (
        <div className="wd-profile">
            <div className="wd-profile-header">

                <FaRegUserCircle />
                <h3 className="mt-2 wd-profile-user-name">{user.userName}</h3>
                {currentUser && currentUser !== userName && !following.some(item => item.userName === userName) && <button className="btn btn-secondary " onClick={handleFollow}>Follow</button>}
                {currentUser && currentUser !== userName &&  following.some(item => item.userName === userName) && <button className="btn btn-secondary" onClick={handleUnfollow}>Unfollow</button>}
                <div className="d-flex wd-profile-header-followInfo">
                    <p>Followers: {user.fansCount}</p>
                    <p>Follwing: {user.followingCount}</p>
                </div>
            </div>
            <div className="wd-profile-body">

                <div className="wd-profile-main-nav">
                    <ul className="nav nav-tabs">
                        {
                            linklist.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <Link className={`nav-link ${decodeURIComponent(pathname).includes(item) && "active"}`} to={`/Application/Profile/${userName}/${item}`}>{item}</Link>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to={"My Songs"} />} />
                    <Route path="My Songs" element={<ProfileSongs />} />
                    <Route path="My Playlist" element={<ProfilePlaylist />} />
                    <Route path="Followers" element={<ProfileFollower />} />
                    <Route path="Followings" element={<ProfileFollowing updateMethod = {fetchUserInfo} />} />
                </Routes>
            </div>

        </div>
    )
}

export default Profile