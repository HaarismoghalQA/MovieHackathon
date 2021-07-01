
import axios from "axios";
import { useState } from "react";

const MovieFinder = () => {

	const [apiKey, setApiKey] = useState("");
	const [movieTitle, setMovieTitle] = useState("");
	const [plot, setPlot] = useState("short");
	const [movieYear, setMovieYear] = useState("");
	// const []

	const handleClick = (e) => {
		e.preventDefault();

		console.log(e.target);


		if (plot) {
			url += "&plot=full"
		}

		if (movieYear !== "") {
			url += `&y=${encodeURIComponent(movieYear)}`
		}


		// send an api request
		console.log(url);
		
		axios.get(url).then((resp)=> {
			console.log(resp);
		}).catch((error) => {
			console.log(error);
		});

	}
	return ( 
		<div>
			<form action="/">
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
						<option value="short">Short</option>
						<option value="full">Long</option>
					</select>

				</fieldset>
				<button onClick={handleClick}>Submit</button>
			</form>

			<div>
				<div>
					Film Card
				</div>
			</div>
		</div>
	);
}
 
export default MovieFinder;