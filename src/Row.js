import React, {useState,useEffect} from "react"
import axios from './axios';
import "./Row.css";

function Row({title,fetchURL,isLargeRow}) {

    const base_url = "https://image.tmdb.org/t/p/original/"; 
    const [movies , setMovies] = useState([]);

    useEffect(() => {

        async function fetchData(){

            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL])

    return (
        <div className='row'> 
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                
                {movies.map(movie => (
                    
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name}/>
                ))}
               
            </div>
        </div>   
    )

}

export default Row
