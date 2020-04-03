import axios from "axios";

const params = {
  api_key: "330bb808249284ee577c0190446a6570",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing", { params }),
  upcoming: () => api.get("movie/upcoming", { params }),
  popular: () => api.get("movie/popular", { params }),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        ...params,
        append_to_response: "videos,images",
        include_image_language: "en,null"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        ...params,
        query: encodeURIComponent(term)
      }
    }),
  movieCollection: id => api.get(`collection/${id}`, { params })
};

export const tvApi = {
  airingPlaying: () => api.get("tv/airing_today", { params }),
  topRating: () => api.get("tv/top_rated", { params }),
  popular: () => api.get("tv/popular", { params }),
  tvDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        ...params,
        append_to_response: "videos,images",
        include_image_language: "en,null"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        ...params,
        query: encodeURIComponent(term)
      }
    }),
  season: (id, num) =>
    api.get(`/tv/${id}/season/${num}`, {
      params: {
        ...params,
        append_to_response: "videos,images",
        include_image_language: "en,null"
      }
    })
};
