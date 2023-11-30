

import { Link, useParams } from "react-router-dom"
import "./index.css"
import { FaRegUserCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
import * as client from "../../client"
function ProfileFollower(){
    const {userName} = useParams()
    const [followers,setFollowers] = useState([])

    const fetchData = async () => {
        const response = await client.getFollower(userName)
        setFollowers(response)
    }
    useEffect(() => {
        
        fetchData()
    },[userName])

    return(
        <div className="wd-pFollower list-group mt-4">
            {console.log(followers)}
            {
                
                followers && followers.map((item) => (
                    <div className="list-group-item list-group-item-action">
                        <FaRegUserCircle/>
                        <Link to={`/Application/Profile/${item.follower}`} className="ms-5">{item.follower}</Link>
                    </div>
                ))
            }   
        </div>
    )

}

export default ProfileFollower