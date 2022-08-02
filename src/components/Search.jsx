import Animelist from "./Animelist";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Search = () => {
    let[animes ,setAnimes] = useState(null);
    // let[searchedAnimes ,setSearchedAnimes] = useState([]);
    let {searchVal} = useParams();

    useEffect(()=>
    {
        fetch("https://api.jikan.moe/v4/anime")
        .then((res)=>{return res.json()})
        .then((fetchedData)=>{setAnimes(fetchedData.data)
        console.log(fetchedData.data);})

    } , [searchVal])

    return ( 
        <div>
             <h1>{searchVal}</h1>
             {animes && 
            <Animelist animes={animes.filter((anime)=>{return anime.title.includes(searchVal)})} tittle="Result for your search"/>}
        </div>
     );
}
 
export default Search;