
import cover from "./cover.jpg"
import CarouselCtrl from "../CarouselCtrl"
import { Link } from "react-router-dom"
import {AiFillPlayCircle} from "react-icons/ai"
import "./index.css"
function NewSongRec() {
    return (
        <div id="newSongRec" className="wd-new-song-slide carousel slide mb-2" >
            <div className="carousel-inner mb-3">
                <h4 className="mt-4 mb-3">New Release</h4>
                {
                    Array.from({ length: 2 }).map((item, index) => (
                        <div className={`wd-new-song-item carousel-item ${index == 0 && "active"}`}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-11">
                                        <table className="wd-new-song-table table">
                                            <tbody>
                                                {
                                                    Array.from({ length: 3 }).map(() => (
                                                        <tr>
                                                            {
                                                                Array.from({ length: 4 }).map(() => (
                                                                    <td>
                                                                        <Link to={"../Songs/:sID"} className="d-flex">
                                                                            <div className="wd-new-songRec-image-container">
                                                                                <img src={cover} alt="Cover" />
                                                                                <AiFillPlayCircle />
                                                                            </div>
                                                                            <div className="ms-3">
                                                                                <p className="wd-new-song-rec-name">Example Song Name</p>
                                                                                <p className="wd-new-song-rec-author">Example Author Name</p>
                                                                            </div>

                                                                        </Link>
                                                                    </td>
                                                                ))
                                                            }
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CarouselCtrl id="newSongRec" />
        </div>
    )
}

export default NewSongRec