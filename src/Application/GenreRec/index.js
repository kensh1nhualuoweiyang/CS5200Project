import { Link, useParams } from "react-router-dom";
import "./index.css";
import cover from "./cover.jpg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import * as client from "../client"
function GenreRec() {
  const { gName } = useParams();
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getGenreRec(gName);
      setSongs(response);
    };
    fetchData();
  }, [gName]);


  console.log(songs);
  
  return (
    <div className="wd-genre-rec">
      <h3 className="mt-3">Top {gName} Songs</h3>
      <table className="table table-striped mt-2">
        <tbody>
          {songs.map((item, index) => (
            <tr key={index} className="row">
              <td className="col-2">
                <p className="me-5 wd-genre-rank">Rank: {index + 1}</p>
              </td>
              <td className="col-2">
                <img className="wd-genre-rec-song-cover" src={cover} alt="Song Cover" />
              </td>
              <td className="col-5">
                <Link to={`/Application/Songs/${item._id}`} className="d-flex">
                  <p className="me-5">{item.title}</p>
                </Link>
              </td>
              <td className="col-3">
                <Link to={`/Application/Profile/${item.aid}`}>
                  <p className="ms-2">{item.author}</p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GenreRec;
