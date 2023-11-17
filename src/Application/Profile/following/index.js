


import { Link, useParams } from "react-router-dom"
import "./index.css"
import { FaRegUserCircle } from "react-icons/fa"
import { useState } from "react"
import { useEffect } from "react"
import * as client from "../../client"
function ProfileFollowing({updateMethod}) {


    const {userName} = useParams()
    const [followings,setFollowings] = useState([])


    
    useEffect(() => {
        const fetchData = async () => {
            const response = await client.getFollowing(userName)
            setFollowings(response)
        }
        fetchData()
    },[userName])

    const handleUnfollow = async (name) =>{
        const response = await client.unfollow(name)
        const newFollowing = followings.filter((item) => item.userName != name)
        setFollowings(newFollowing)
        updateMethod()
    }

    return (
        <div className="wd-pFollowing list-group mt-4">
            {
                followings.map((item) => (
                    <div className="list-group-item list-group-item-action">
                        <FaRegUserCircle />
                        <Link to={`/Application/Profile/${item.userName}`} className="ms-5">{item.userName}</Link>
                        <div className="float-end">
                            <button className="btn btn-danger" onClick={() => handleUnfollow(item.userName)}>Unfollow</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default ProfileFollowing