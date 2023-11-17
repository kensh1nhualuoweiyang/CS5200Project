import "./index.css"
import coverImg from "./cover.jpg"
import { Link } from "react-router-dom";
import CarouselCtrl from "../CarouselCtrl";
import { useEffect, useState } from "react";
import * as client from "../../client"


function PlaylistRecomm() {


    const [slides, setSlides] = useState([])
    useEffect(() => {
        const loadTopPlaylist = async () =>{
            const response = await client.getPlaylistRec();
            const newSlides = []
            for (let i = 0; i < response.length; i += 9) {
                newSlides.push(response.slice(i, i + 5))
            }
            setSlides(newSlides)
        }
        loadTopPlaylist()
    },[])

    const increaseView = async (pid) => { await client.increasePlaylistView(pid) }

    return (
        <div id="playListCarousel" className="wd-playlist-slide carousel slide" >
            <div className="carousel-inner mb-3">
                <h4>Top Playlist</h4>
                {
                    Array.from({ length: slides.length }).map((_, slideIndex) => (
                        <div className={`wd-playlist-slide-item carousel-item ${slideIndex === 0 && 'active'}`}>
                            <div className="wd-playlist-slide-element">

                                {slides[slideIndex].map((item, index) => (
                                    
                                    <Link to={`/Application/Playlist/${item.id}`} className="wd-playlist-card card mx-3 mt-5"
                                        onClick={() => increaseView(item.id)}>
                                        <img src={coverImg} className="card-img-top" />
                                        <div className="card-body py-0 px-0">
                                            <h5 className="card-title mb-0">{item.name}</h5>
                                        </div>
                                        <p class="card-text">View: {item.views}</p>
                                    </Link>

                                ))}
                            </div>
                        </div>
                    ))

                }
            </div>
            <CarouselCtrl id="playListCarousel" leng={slides.length} />
        </div >




    )
}

export default PlaylistRecomm;