import { Navigate, Route,Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"

function Application(){
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to={"Home"}/>}/>
                <Route path="/Home/*" element = {<Home/>}/>
            </Routes>
        </div>
    )
}

export default Application