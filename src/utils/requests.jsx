const API_KEY = "4ce04360040c43a900093a3cd8ee17d4"
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatemovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};
export default requests;