import { Song } from "../utils/api-client";

const SongCard = ({song}:{song:Song})=>{
    return(<div className="card me-4" style={{width: '18rem'}}>
        <img src={song.artworkUrl100} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{song.trackName}</h5>
          <p className="card-text">{song.collectionName}</p>
          <audio controls src ={song.previewUrl}></audio>
        </div>
      </div>)
}
export default SongCard;

//object and then placeholder