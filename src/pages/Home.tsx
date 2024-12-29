import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import Songs from "../components/Songs";
import getAllSongs, { Song } from "../utils/api-client";

const Home = () => {
  const[songs,setSongs]= useState<Song[]>([]);
  const fetchSongs = async (singerName:string = 'Sonu Nigam')=>{
    //store all the songs in songs component
    //const songs: Song[] = await getAllSongs();

    setSongs(await getAllSongs(singerName));//rendering /pRINTING
    //console.log('all Songs are',songs);
  }

  //Hook- Component Load/ Mount
  // useEffect(callBackFn, []) ; // Mounting Phase
  // [] - not monitor any state

  useEffect(()=>{
            fetchSongs();
  },[]);
  return (
    <div className="container">
      <SearchBox fn ={fetchSongs}/>
      <hr/>  
      <Songs allsongs={songs}/>
    </div>
  )
}
export default Home;
