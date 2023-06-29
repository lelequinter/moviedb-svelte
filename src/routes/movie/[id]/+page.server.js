const apiUrl = 'https://api.themoviedb.org/3/movie';
const language = 'en-US';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmEyZDBiN2YzMzNlZDkzNTliMWUxNDJjZThmN2VjZiIsInN1YiI6IjYyMDZjNzJlMTVhNGExMDA0NGVmMWNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.swkbv0rH_FC5aNjFgDTxQSg0DhLBikruGyPuM3XqJxM'
	}
};

export async function load({ fetch, params }) {
	const res = await fetch(`${apiUrl}/${params.id}?language=${language}`, options);
	const movieDetail = await res.json();

	if (res.ok) {
		return movieDetail;
	}
}
