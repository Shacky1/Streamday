import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.tmdbApiKey;
  private baseUrl = environment.tmdbBaseUrl;

  constructor(private http: HttpClient) {}

  // Popular Movies
  getPopularMovies() {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  // Search by title
  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`);
  }

  // Movie Details with IMDB ID
  // Get movie details + external IDs
getMovieDetail(id: number) {
  return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=external_ids`);
}

  // TV Show Details with external IDs
  getTvDetail(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&append_to_response=external_ids`);
  }

  // Get movies by genre
  getMoviesByGenre(genreId: number) {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`);
  }

  // Fallback: Find IMDb ID from TMDB ID
findImdbId(id: number) {
  return this.http.get(`${this.baseUrl}/find/${id}?api_key=${this.apiKey}&external_source=tmdb_id`);
}

// Search movies + TV shows
searchMulti(query: string) {
  return this.http.get(`${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`);
}

}


