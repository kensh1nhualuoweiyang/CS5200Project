import "./index.css"
import cover from "./cover.jpg"
import CarouselCtrl from "../CarouselCtrl"
import { Link, Route, Routes } from "react-router-dom"
import { AiFillPlayCircle } from "react-icons/ai"
import SongDetail from "../../SongDetail"
import { useState } from "react"
import * as client from "../../client"
import { useEffect } from "react"

function SongRecomm() {
    
    const [slides, setSlides] = useState([])
    useEffect(() => {
        const loadTopSongs = async () =>{
            const response = await client.getTopSongs();
          
            const newSlides = []
            for (let i = 0; i < response.length; i += 9) {
                newSlides.push(response.slice(i, i + 9))
            }
            setSlides(newSlides)
        }
        loadTopSongs()
    },[])




    return (
        <>
            <div id="songRecomm" className="wd-song-slide carousel slide" >
                <div className="carousel-inner">
                    <h4 className="mt-4 mb-3">Top Songs</h4>
                    {
                        Array.from({ length: slides.length }).map((item, index) => (
                            <div className={`wd-song-recomm-item carousel-item ${index === 0 && "active"}`}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10">
                                            <table className="wd-song-table table table-striped">
                                                <tbody>
                                                    {
                                                        Array.from({ length: (slides[index].length / 3) }).map((_,rowIndex) => (

                                                            <tr>
                                                                {
                                                                   slides[index].slice(rowIndex * 3,(rowIndex + 1) * 3).map((item) => (
                                                                        <td className="col-3">
                                                                            <Link to={`/Application/Songs/${item.id}`} className="d-flex">
                                                                                <div className="wd-songRec-image-container">
                                                                                    <img src={cover} alt="Cover" />
                                                                                    <AiFillPlayCircle />
                                                                                </div>
                                                                                <div className="ms-3">
                                                                                    <p className="wd-song-rec-name">{item.title}</p>
                                                                                    <p className="wd-song-rec-author">{item.author}</p>
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
                <CarouselCtrl id="songRecomm" leng={slides.length} />

            </div>
            <Routes>
                <Route path="/Application/Songs/:sid" element={<SongDetail />} />
            </Routes>
        </>

    )


}
export default SongRecomm