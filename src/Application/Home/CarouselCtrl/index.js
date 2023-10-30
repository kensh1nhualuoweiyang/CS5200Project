

function CarouselCtrl({id}) {
    return (
        <>
            <div class="carousel-indicators mt-0 mb-0">
                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    )
}


export default CarouselCtrl