const apiUrl = 'https://api.themoviedb.org/3/movie/popular';
const language = 'en-US';
let page = 1;

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmEyZDBiN2YzMzNlZDkzNTliMWUxNDJjZThmN2VjZiIsInN1YiI6IjYyMDZjNzJlMTVhNGExMDA0NGVmMWNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.swkbv0rH_FC5aNjFgDTxQSg0DhLBikruGyPuM3XqJxM'
	}
};

export async function load({ fetch }) {
	const res = await fetch(`${apiUrl}?language=${language}&page=${page}`, options);
	const data = await res.json();

	if (res.ok) {
		return {
			popular: data.results
		};
	}
}
