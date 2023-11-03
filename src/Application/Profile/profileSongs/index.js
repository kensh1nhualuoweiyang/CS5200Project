import { Link, useParams } from "react-router-dom"


function ProfileSongs() {
    const linklist = ["My Songs","My Playlist", "Followers", "Followings"];
    const {page} = useParams();
    const{uID} = useParams();
    return (
        <div className="wd-profile-main-nav">
            <ul className="nav nav-tabs">
                {
                    linklist.map((item,index) => (
                        <li className="nav-item">
                            <Link className={`nav-link ${decodeURIComponent(page).includes(item) && "active"}`} to={`/Application/Profile/${uID}/${item}`}>{item}</Link>


                        </li>
                    ))
                    
                }
               
               
            </ul>

        </div>


    )
}

export default ProfileSongs