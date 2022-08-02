import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Animedetail = () => {
    let {id} = useParams();
    let[anime,setAnime] = useState(null);

    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/anime/"+id)
        .then((res)=>res.json())
        .then((fetcheddata)=>{setAnime(fetcheddata.data);
        console.log(fetcheddata.data)})
    } , [id])

    return (
        anime &&
        <div>
           <div className="detail">
            <img src={anime.images.jpg.large_image_url} alt="not found"/>
            <h1>{anime.title}</h1>
            <h1>Type :{anime.type}</h1>
            <h1>Status :{anime.status}</h1>
            <h1>Source :{anime.source}</h1>
            <h1>Episodes :{anime.episodes}</h1>
            <h1>Rank :{anime.rank}</h1>
            <h1>Duration :{anime.duration}</h1>


            <p>{anime.synopsis}</p>
            <iframe width="500" height="315" src={anime.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
    
    );
}
export default Animedetail;