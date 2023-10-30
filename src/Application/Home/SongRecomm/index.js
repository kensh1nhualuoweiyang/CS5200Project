import "./index.css"
import cover from "./cover.jpg"
import CarouselCtrl from "../CarouselCtrl"
import { Link } from "react-router-dom"
import { AiFillPlayCircle } from "react-icons/ai"


function SongRecomm() {

    return (
        <div id="songRecomm" className="wd-song-slide carousel slide" >
            <div className="carousel-inner">
                <h4 className="mt-4 mb-3">Top Songs</h4>
                {
                    Array.from({ length: 3 }).map((item, index) => (
                        <div className={`wd-song-recomm-item carousel-item ${index == 0 && "active"}`}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <table className="wd-song-table table table-striped">
                                            <tbody>
                                                {
                                                    Array.from({ length: 3 }).map(() => (
                                                        <tr>
                                                            {
                                                                Array.from({ length: 3 }).map(() => (
                                                                    <td>
                                                                        <Link to={"../Songs/:sID"} className="d-flex">
                                                                            <div className="wd-songRec-image-container">
                                                                                <img src={cover} alt="Cover" />
                                                                                <AiFillPlayCircle />
                                                                            </div>
                                                                            <div className="ms-3">
                                                                                <p className="wd-song-rec-name">Example Song Name</p>
                                                                                <p className="wd-song-rec-author">Example Author Name</p>
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
            <CarouselCtrl id="songRecomm" />

        </div>
    )


}
export default SongRecomm