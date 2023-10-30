import "./index.css"
import coverImg from "./cover.jpg"
import { Link } from "react-router-dom";
import CarouselCtrl from "../CarouselCtrl";

function PlaylistRecomm() {
    const createSlides = (length, perSlide) => {
        const slides = [];

        while (length - perSlide > 0) {
            slides.push(perSlide)
            length -= perSlide
        }
        slides.push(perSlide - (perSlide-length))

        return slides;
    }
    const slides = createSlides(13, 5);
    return (
        <div id="playListCarousel" className="wd-playlist-slide carousel slide" >
            <div className="carousel-inner mb-3">
                <h4>Top Playlist</h4>
                {
                    slides.map((slideNum, index) => (
                        <div key={index} className={`wd-playlist-slide-item carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="wd-playlist-slide-element">
                                {
                                    Array.from({length: slideNum }).map(() => (
                                        <Link to={"../Playlist/:pID"} className="wd-playlist-card card mx-3 mt-5">
                                            <img src={coverImg} className="card-img-top" />
                                            <div className="card-body py-0 px-0">
                                                <h5 className="card-title mb-0">Playlist Name</h5>
                                            </div>
                                            <p class="card-text">View: 0</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <CarouselCtrl id="playListCarousel"/>
        </div >

    )
}

export default PlaylistRecomm;