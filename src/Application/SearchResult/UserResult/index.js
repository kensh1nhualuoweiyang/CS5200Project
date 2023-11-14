import { Link, useParams } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa"
import "./index.css"
import { useState } from "react"
import { useEffect } from "react"
import * as client from "../../client"
function UserResult() {
   

    const [result, setResult] = useState([])
    const {keyword} = useParams()
    console.log(keyword);
    useEffect(() => {
        const fetchData = async () =>{
            const response = await client.getSearchUser(keyword)
            setResult(response)
        }
        fetchData()
    },[])

    return (
        <div className="wd-search-user-result">
            <ul className="list-group">
                {
                    result.map((item) => (
                        <div className="list-group-item list-group-item-action">
                            <Link id="user" to={`/Application/Profile/${item._id}`} className="ms-5">
                                <FaRegUserCircle className="me-5" />
                                <span>{item.userName}</span>
                            </Link>
                        </div>

                    ))
                }

            </ul>
        </div>
    )
}

export default UserResult