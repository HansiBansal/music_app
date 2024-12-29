import { Song } from "../utils/api-client";
import SongCard from "./SongCard";

 const Songs = ({allsongs}:{allsongs:Song[]}) => {
  return (
    <div className="row">
        {allsongs.map((song:Song, index:number)=><SongCard key={index} song = {song}/>)}
    </div>
  )
}
export default Songs; 
