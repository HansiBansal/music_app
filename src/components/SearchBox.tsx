import { useRef } from "react";

const SearchBox=({fn}:{fn:Function})=>{

   const searchTxt = useRef<HTMLInputElement | null>(null);
   const getSearchValue = ()=>{
      console.log('Search Value' , searchTxt?.current?.value);
      fn(searchTxt?.current?.value);
   }

 return(<div className="form-group">
    <label>Search:</label>
    <input  ref={searchTxt} className="form-control" type="text" placeholder="type to search here"/>
    <button onClick={getSearchValue} className="btn btn-primary">Search</button>
 </div>)
}
export default SearchBox;