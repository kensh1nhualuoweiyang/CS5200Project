
import { Link, useParams } from "react-router-dom"
import "./index.css"

function GenreRec() {
    const { gName } = useParams()
    return (
        <div className="wd-genre-rec">
            <h3>Top {gName} Songs</h3>
            <table className="table table-striped mt-2">
                <tbody>
                    {Array.from({ length: 10 }).map((num, index) => (
                        <tr key={index} className="row">
                            <div className="col-2">
                                <p className="me-5 wd-genre-rank">Rank: {index + 1}</p>
                            </div>
                            <div className="col-5">
                                <Link to={"/Application/Songs/:sID"} className="d-flex">
                                    <p className="me-5">Example Song Name</p>
                                </Link>
                            </div>
                            <div className="col-5">
                                <Link to={"/Application/Profile:uID"}>
                                    <p className="ms-5">Author</p>
                                </Link>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default GenreRec