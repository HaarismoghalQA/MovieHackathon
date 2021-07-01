const Movies = (props) => {
    const { Title, Year, Runtime, Genre, Plot, Poster } = props;
    return (
        < div >
            <h3>Movie Title: {Title}</h3>            
            <h3>Movie Year: {Year}</h3>
            <h3>Movie runtime: {Runtime}</h3>            
            <h3>Genre : {Genre}</h3>
            <h3>Plot : {Plot}</h3>
            <img src={Poster} width="200" alt="image of movie"/>             
        </div >
    );
}

export default Movies; 