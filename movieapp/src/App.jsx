import { useState } from "react";
import "./App.css";

//* movie API Calling

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQ2YjVhZjdmOTE2M2NjM2E4MGVjODg4ZDNlOTg3MyIsInN1YiI6IjY2NDNkYzE3OGEzOGIyZjUwMzMyODg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nPsUBniZRt28_ak8PmDws1_TKEq_jPRWG06G0EnDB5I",
	},
};

let movieCards;
async function getPopularMovies() {
	try {
		const RAWdata = await fetch(url, options);
		const data = await RAWdata.json();
		const movieResults = data.results;
		// console.log(movieResults);

		movieCards = movieResults.map((movie) => {
			return (
				<MovieContainer
					key={movie.id}
					{...movie}
				/>
			);
		});
	} catch (error) {
		console.log(
			`There has been an error in the getPopularMovies fetch API: ${error}`,
		);
	}
}
getPopularMovies();

// **********************************************************

//* Nav bar component

function NavBar() {
	return (
		<div className="navBar">
			<div>
				<h3>Movie App</h3>
			</div>

			<input
				className="Search-bar"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
}

// **********************************************************

//* Movie Container

const img_path = "https://image.tmdb.org/t/p/w1280";

function MovieContainer(props) {
	let ratingColor = "#fff";

	if (props.vote_average > 7) {
		ratingColor = "#46fc52";
	} else if (props.vote_average > 4) {
		ratingColor = "#fcbd35";
	} else {
		ratingColor = "#f94a4a";
	}

	const rating = props.vote_average.toString().substring(0, 3);

	return (
		<div className="outer-container">
			<div className="Movie-container">
				<div className="Movie__Imgs">
					<img src={img_path + props.poster_path} />
				</div>

				<div className="info-section__top-bit">
					<div className="title-and-rating">
						<h3 style={{ fontSize: "16px", fontWeight: "600" }}>
							{props.title}
						</h3>
						<div
							className="rating"
							style={{ color: ratingColor }}
						>
							{rating}
						</div>
					</div>
					<p className="desc">
						{props.overview.length > 130
							? `${props.overview.substring(0, 130)}...`
							: props.overview}
					</p>
				</div>
			</div>
		</div>
	);
}

// **********************************************************

//* Putting shit together
function App() {
	const [reload, setReload] = useState();

	setTimeout(() => {
		setReload(movieCards);
	}, 1500);

	return (
		<>
			<NavBar />
			<div className="movieCard-container">{reload}</div>
		</>
	);
}

export default App;
