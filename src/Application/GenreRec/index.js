import { Link, useParams } from "react-router-dom";
import "./index.css";
import cover from "./cover.jpg";

function GenreRec() {
  const { gName } = useParams();

  return (
    <div className="wd-genre-rec">
      <h3 className="mt-3">Top {gName} Songs</h3>
      <table className="table table-striped mt-2">
        <tbody>
          {Array.from({ length: 10 }).map((num, index) => (
            <tr key={index} className="row">
              <td className="col-2">
                <p className="me-5 wd-genre-rank">Rank: {index + 1}</p>
              </td>
              <td className="col-2">
                <img className="wd-genre-rec-song-cover" src={cover} alt="Song Cover" />
              </td>
              <td className="col-5">
                <Link to="/Application/Songs/:sID" className="d-flex">
                  <p className="me-5">Example Song Name</p>
                </Link>
              </td>
              <td className="col-3">
                <Link to="/Application/Profile:uID">
                  <p className="ms-5">Author</p>
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
