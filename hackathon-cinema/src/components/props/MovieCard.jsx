const MovieCard = ({movie}) => {

    return ( 
        <div>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={"Poster For " + movie.Title} width="300"/>
            <h4>Awards: {movie.Awards}</h4>
            <h5>Genre: {movie.Genre}</h5>
            <h5>Plot: {movie.Plot}</h5>
            <h5>Runtime: {movie.Runtime}</h5>

        </div>
        );
}
 
export default MovieCard;