import { useState, useEffect } from "react";
import axios from 'axios';
import Movies from "./Movies";

const MyMovie = () => {

    // Data being pulled from API
    const [MovieList, setMovieList] = useState([]);

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
    });


    const getData = () => {
        setTimeout(() => {
            axios.get('http://www.omdbapi.com/?apikey=fd684686&t=detective+pikachu')
                .then((response) => {
                    // Setting loaded state to true because data is loaded
                    setLoaded(true);
                    setMovieList([ByteMovie]);
                   // setMovieList(response.data)
                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                });
        }, loadTime);
    }

    const ByteMovie = {
        Title: "Byte Me",
        Year: 2021,
        Rated: "PG",
        Writer: "Team Byte Me"
    };

    const postData = (id) => {
        axios.post(`http://www.omdbapi.com/?apikey=[fd684686]&${id}`, ByteMovie, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
                setError(error)
            });
    }

    // Name, image url, abv and food pairing 

    if (error) {
        return <p> Oops, something has gone wrong! {error.message} </p>
    } else if (!loaded) {
        return <p> Please wait, we are loading your data :)</p>
    } else {
        return (
            <div>
                {MovieList.map((movie) => (
                    <Movies Title={movie.Title} Year={movie.Year} Rated={movie.Rated} Writer={movie.Writer} />
                ))}
            </div>
        )
    }

}



export default MyMovie;