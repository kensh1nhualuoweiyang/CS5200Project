

import { useEffect, useState } from "react"
import "./index.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import * as client from "../client"

function SongCreator() {
  const { sID, userName } = useParams()
  const availableGenre = ["Rock", "Pop", "Country", "EDM",]
  const navigate = useNavigate()
  const [songInfo, setSongInfo] = useState({})
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchSongInfo = async () => {
      const response = await client.getSongDetail(sID)
      setSongInfo(response[0])
    }
    if (sID !== "newSong") {
      fetchSongInfo()
    }
    else {
      setSongInfo({ userName: userName })

    }
  }, [sID])

  const handleSongUpdate = async () => {
    try {
      if (sID === "newSong") {
        console.log("Entered");
        const response = await client.createNewSong(songInfo)
        navigate(`/Application/Songs/${response.data[0][0].id}`)
      }
      else {
        const response = await client.updateSong(songInfo)
        console.log("Entered");
        navigate(`/Application/Songs/${sID}`)
      }
    }
    catch (err) {
      setError(err.response.data.error)
    }
  }
  return (
    <div className="wd-song-create ">
      <div className="row g-2">
        {error && <p className="alert alert-danger">{error}</p>}
      </div>
      <div className="row g-2">
        <div className="col-3">
          <label for="title" className="col-form-label">Song Title</label>
        </div>
        <div className="col-auto">
          <input type="text" id="title" className="form-control" value={songInfo.title} onChange={(event) => setSongInfo({ ...songInfo, title: event.target.value })} />
        </div>
      </div>
      <div className="row g-2 mt-2">
        <div className="col-3">
          <label for="title" className="col-form-label">Genre</label>
        </div>
        <div className="dropdown col-auto">
          <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" value={songInfo.genre}>
            {songInfo.genre}
          </button>
          <ul className="dropdown-menu">
            {
              availableGenre.map((item) => (
                <li className="dropdown-item" onClick={() => setSongInfo({ ...songInfo, genre: item })}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="row g-2 mt-2">
        <div className="mb-3 col-3">
          <label for="lyrics" className="form-label">lyrics</label>
        </div>
        <div className="mb-3 col-9">
          <textarea
            className="wd-song-create-lyrics form-control"
            id="lyrics"
            rows="20"
            value={songInfo.lyrics && songInfo.lyrics.replace(/<br\/>/g, '\n')}
            onChange={(e) => setSongInfo({ ...songInfo, lyrics: e.target.value })}
          ></textarea>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn btn-dark me-4" type="submit" onClick={handleSongUpdate}>Submit</button>
        <Link to={sID === "newSong" ? `/Application/Profile/${userName}` : `/Application/Songs/${sID}`} className="btn btn-secondary">Cancel</Link>
      </div>

    </div >

  )
}




export default SongCreator