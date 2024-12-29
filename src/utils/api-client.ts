//back end api calls/ webservice/web api

export type Song = {
    trackName: string;
    previewUrl: string;
    collectionName:string;
    artworkUrl100: string
}

const getAllSongs= async (singerNames:string = 'sonu nigam'):Promise<Song[]> =>{
    console.log('URL is ',import.meta.env.VITE_ITUNES_URL);
    const uri = `?term=${singerNames}&limit=25`;
    // fetch data from itunes_url
    const response = await fetch(import.meta.env.VITE_ITUNES_URL + uri);

  

    const data = await response.json();//json parse object//data in any type
    const songs:Song[] = data.results;//any convert song type
    //song traverse and pick the required fields
    const allSongs:Song[] = songs.map(s=>{
        //destructure the required fields
        const {trackName,collectionName,previewUrl,artworkUrl100}:Song=s;
        // return one by one obj - store in a new array (allSongs array)
        return{trackName,collectionName,previewUrl,artworkUrl100};
    });
    return allSongs;
}
export default getAllSongs;