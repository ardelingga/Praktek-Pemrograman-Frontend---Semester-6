const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"
let ID_MOVIE = "";

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    DETAIL: () => `${BASE_URL}/movie/${ID_MOVIE}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    RECOMMENDATION: () => `${BASE_URL}/movie/${ID_MOVIE}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    SET_ID_MOVIE: async (idMovie) => {
        ID_MOVIE = idMovie;
    },
}

export default ENDPOINTS;