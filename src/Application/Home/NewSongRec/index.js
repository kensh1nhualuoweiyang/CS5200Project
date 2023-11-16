
import cover from "./cover.jpg"
import CarouselCtrl from "../CarouselCtrl"
import { Link } from "react-router-dom"
import { AiFillPlayCircle } from "react-icons/ai"
import "./index.css"
import { useState } from "react"
import * as client from "../../client"
import { useEffect } from "react"

function NewSongRec() {

    const [slides, setSlides] = useState([])
    useEffect(() => {
        const loadNewSongs = async () => {
            const response = await client.getNewRelease();

            const newSlides = []
            for (let i = 0; i < response.length; i += 12) {
                newSlides.push(response.slice(i, i + 12))
            }
            setSlides(newSlides)
        }
        loadNewSongs()
    }, [])

    return (
        <>
            <div id="newSongRec" className="wd-new-song-slide carousel slide mb-2" >
                <div className="carousel-inner mb-3">
                    <h4 className="mt-4 mb-3">New Release</h4>
                    {
                        Array.from({ length: slides.length }).map((_, index) => (
                            <div className={`wd-new-song-item carousel-item ${index === 0 && "active"}`}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <table className="wd-new-song-table table">
                                                <tbody>
                                                    {
                                                        Array.from({ length: (slides[index].length / 3) }).map((_, rowIndex) => (
                                                            <tr>
                                                                {
                                                                    slides[index].slice(rowIndex * 4, (rowIndex + 1) * 4).map((item) => (
                                                                        <td>
                                                                            <Link to={`/Application/Songs/${item.id}`} className="d-flex">
                                                                                <div className="wd-new-songRec-image-container">
                                                                                    <img src={cover} alt="Cover" />
                                                                                    <AiFillPlayCircle />
                                                                                </div>
                                                                                <div className="ms-3">
                                                                                    <p className="wd-new-song-rec-name">{item.title}</p>
                                                                                    <p className="wd-new-song-rec-author">{item.userName}</p>
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
                <CarouselCtrl id="newSongRec" leng={slides.length} />
            </div>

        </>

    )
}

export default NewSongRec