import "./index.css"
import logoImg from "./logo.png"
import { Link, useLocation } from "react-router-dom"
function Header() {
    const link = ["Home", "Profile"]
    const { pathname } = useLocation();
    const subNav = ["Rock", "Pop", "R&B/Hip-Hop", "Latin", "Country", "Classical", "EDM", "Jazz"]
    return (
        <>
            <div className="wd-header-body fixed-top">
                <div className="wd-header-content mt-2">
                    <div className="d-flex wd-header-nav">
                        <img src={logoImg} alt="Logo" ></img>
                        <nav className="ms-3 navbar navbar-expand-lg">
                            <ul className="navbar-nav">
                                {link.map((item) => (
                                    <li className="nav-item" key={item}>
                                        <Link className={`nav-link ${decodeURIComponent(pathname).includes(item) && "active"}`} to={`./${item}`}>{item}</Link>
                                    </li>
                                ))}
                                <li className="nav-item ml-auto">
                                    <div className="wd-header-end d-flex">
                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search For Song, Artist, or Playlist" aria-label="Search" />
                                            <button className="btn btn-outline-dark me-2" type="submit">Search</button>
                                        </form>
                                        <Link to={"/Application/Register"} className="btn btn-outline-dark me-2">Register</Link>
                                        <Link to={"/Application/Login"} className="btn btn-outline-dark me-2">Login</Link>

                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <hr className="mb-0" />

                    <nav className="wd-header-sub-nav navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            {
                                subNav.map((item) => (
                                    <li className="nav-item" key={item}>
                                        <Link className="nav-link me-2" to={`Genre/${item}`}>{item}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>



    )
}

export default Header