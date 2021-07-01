const Movies = (props) => {
    const { Title, Year, Rated, Writer } = props;
    return (
        < div >
            <h3>Movie Title: {Title}</h3>            
            <h3>Movie Year: {Year}</h3>
            <h3>Movie Rated: {Rated}</h3>            
            <h3>Writer : {Writer}</h3>
            
        </div >
    );
}

export default Movies; 