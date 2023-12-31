
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom"
import "./index.css"
import { Link } from "react-router-dom"
import UserResult from "./UserResult"
import PlaylistResult from "./PlaylistResult"
import SongResult from "./SongResult"

function SearchResult() {
    const resultTitle = ["Users", "Songs", "Playlists"]
    const { pathname } = useLocation()
    const {keyword} = useParams()
    const url = pathname.split('/')
    const currentPage = url[url.length-1]
    return (
        <div className="wd-search-result d-flex">
            <ul className="nav flex-column nav-underline">
                {
                    resultTitle.map((item) => (
                        <li className="nav-item float-end">
                            <Link className={`nav-link ${currentPage===item && "active"}`} to={`/Application/Search/${keyword}/${item}`} >{item}</Link>
                        </li>
                    ))
                }

            </ul>
            <div className="wd-search-body">
                <Routes>
                    <Route path="/" element={<Navigate to={"Users"} />} />
                    <Route path="Users" element={<UserResult />} />
                    <Route path="Playlists" element={<PlaylistResult />} />
                    <Route path="Songs" element={<SongResult />} />
                </Routes>
            </div>
        </div>
    )
}

export default SearchResult