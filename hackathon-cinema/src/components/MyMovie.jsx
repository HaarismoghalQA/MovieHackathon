import { useState, useEffect } from "react";
import axios from 'axios';
import MovieCard from "./props/MovieCard";


const url = "http://5.226.143.166:9456"


const MyMovie = () => {

    // Data being pulled from API
    const [movieList, setMovieList] = useState([]);

    // Error state
    const [error, setError] = useState(null);

    // Check if Loaded state
    const [loaded, setLoaded] = useState(false)

    // Load time for setLoaded function
    const loadTime = 3000;

    // Use Effect Hook

    // axios.*request type*(url)
    useEffect(() => {
        getData();
    } );

    //const filmTitle = "detective+pikachu";
    const getData = () => {
		setTimeout(() => {
			//setLoaded(false);
            axios.get(url + `/api/film`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }) //t=detective+pikachu
                .then((response) => {
                    setLoaded(true);
                    // setMovieList([ByteMovie]);
                    setMovieList(response.data);
                    

                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                });
        }, loadTime);
    }
   
	const deleteFilm = (id) => {
		axios.delete(url + "/api/film/" + id).then( (resp) => {
			getData();
		} )
	};

	const updateFilm = (id, imdbID) => {
		// open a modal 
		// ask for api key
		// send put request with data from omdb api

		const apiKey = prompt('Please enter your API Key');

		const shortBool = window.confirm("Do you want a short description");

		let omdbUrl = `http://www.omdbapi.com/?apikey=${encodeURIComponent(apiKey) }&i=${imdbID}`;

		if (!shortBool) {
			omdbUrl += "&plot=full"
		}


		axios.get(omdbUrl).then( (resp ) => {
			axios.put(url + "/api/film/" + id, resp.data).then( () => {
				setLoaded(false);
			} );
		} )
	}

    if (error) {
        return <p> Oops, something has gone wrong! {error.message} </p>
    } else if (!loaded) {
        return <p> Please wait, we are loading your data :)</p>
    } else {
        // console.log(movieList)
        return (
            <div>
                {movieList.map((x,i) => (
                    <div> 
						<MovieCard key={i} movie={x} />
						<button onClick={ (e) => {  deleteFilm(x._id); 
							e.preventDefault();
						}  }>
							Delete
						</button>
						<button onClick = { (e)=> { updateFilm(x._id, x.imdbID); e.preventDefault();}}>
							Update
						</button>
					</div>
                ))}
            </div>
        )
    }

}



export default MyMovie;