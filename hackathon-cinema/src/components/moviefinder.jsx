import axios from "axios";
import { useState } from "react";
import MovieCard from "./props/MovieCard";

const MovieFinder = () => {

	const [apiKey, setApiKey] = useState("");
	const [movieTitle, setMovieTitle] = useState("");
	const [plot, setPlot] = useState("Short");
	const [movieYear, setMovieYear] = useState("");
	const [output, setOutput] = useState((<p></p>));

	const handleClick = (e) => {
		e.preventDefault();
		setOutput((<p>Loading</p>));

		let url = `http://www.omdbapi.com/?apikey=${encodeURIComponent(apiKey) }&t=${encodeURIComponent(movieTitle)}`

		if (plot === "Full") {
			url += "&plot=full"
		}

		if (movieYear !== "") {
			url += `&y=${encodeURIComponent(movieYear)}`
		}
		
		axios.get(url).then((resp)=> {
			if (resp.data.Response === "False"){
				setOutput((<p>Movie Not Found</p>));
			}else{
				setOutput((
					<div>
						<MovieCard movie={resp.data}/>
						<button variant="secondary" type="button" onClick={()=>{axios.post("http://5.226.143.166:9456/api/film", resp.data).then((resp)=> setOutput(<h2>Saved Movie</h2>))}}>Save Movie</button>
					</div>))
			}
		}).catch((error) => {
			setOutput((<p>There Wan an Error: {error.message}</p>));
		});
	}
	return ( 
		<div>
			<form>
				<fieldset>
					<legend>
						Movie Finder
					</legend>

					<label htmlFor="apiKey" required >API Key</label>
					<br />
					<input type="text" name="apiKey" id="apiKey" onChange={ (e) => {
							setApiKey(e.target.value);
					}}
					/>

					<br />
					<label htmlFor="movieTitle">Movie Name</label>
					<br />
					<input type="text" name="movieTitle" id="movieTitle" onChange={ (e) => {
						setMovieTitle(e.target.value);
					} }/>
					
					<br />
					<label htmlFor="movieYear">Movie Year</label>
					<br />
					<input type="year" name="movieYear" id="movieYear" onChange={ (e) => {
						setMovieYear(e.target.value);
					} }/>

					<br />
					<label htmlFor="movieDescription">Length of Description</label>
					<br />
					<select name="movieDescription" id="movieDescription" onChange= { (e) => {
						setPlot(e.target.value);
					}}>
						<option value="Short">Short</option>
						<option value="Full">Long</option>
					</select>

				</fieldset>
				<button onClick={handleClick}>Submit</button>
			</form>

			<div>
				{output}
			</div>
		</div>
		
	);
}
 
export default MovieFinder;