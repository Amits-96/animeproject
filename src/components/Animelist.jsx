import { Link } from "react-router-dom";

const Animelist = ({animes , title}) => {
    return ( 
        <div className="main">
        <div className="middle">
             <div className="anime-title">
                <h1> {title} </h1>
             </div>
        {animes.map((anime)=>{return (
           <div className="list" key={anime.mal_id}>
             <Link to={`/anime${anime.mal_id}`}>
                <h2>{anime.mal_id}</h2>
                <h1>{anime.title}</h1>
                <img src={anime.images.jpg.small_image_url} alt=""/>
                <h3>Rating : {anime.score}</h3>
                </Link>
           </div>
        )})}
        </div>
        
   </div>
     );
}
 
export default Animelist;