import { useState, useEffect } from "react";
import axios from 'axios';
import Movies from "./Movies";

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
    });

    //const filmTitle = "detective+pikachu";
    const getData = () => {
        setTimeout(() => {
            axios.get(`http://5.226.143.166:9456/api/film`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }) //t=detective+pikachu
                .then((response) => {
                    // console.log(response.data);
                    // Setting loaded state to true because data is loaded
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

    const ByteMovie = {
        Title: "Byte Me",
        Year: 2021,
        Rated: "PG",
        Writer: "Team Byte Me"

    };

    const postData = (id) => {
        axios.post(`http://5.226.143.166:9456/api/film/${id}`, ByteMovie, {
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



    if (error) {
        return <p> Oops, something has gone wrong! {error.message} </p>
    } else if (!loaded) {
        return <p> Please wait, we are loading your data :)</p>
    } else {
        // console.log(movieList)
        return (
            <div>
                {movieList.map((x,i) => (
                    <Movies key={i} Title={x.Title} Year={x.Year} Runtime={x.Runtime} Genre={x.Genre} Plot={x.Plot} Poster={x.Poster} />
                ))}
            </div>
        )
    }

}



export default MyMovie;