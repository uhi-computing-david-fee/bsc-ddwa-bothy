import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class Tmdb {

  // Angular's HTTP client is used for all requests to TMDb.
  private http = inject(HttpClient);

  getMovies() {
    // Build the query parameters sent to the TMDb Discover endpoint.
    // These are only example parameters to demonstrate the request structure.
    // Replace or extend them to match the filters from your Assessment 2 design.
    let params = new HttpParams()
      .set('api_key', environment.tmdbAPIKey) // must always be included
      .set('sort_by', 'popularity.desc')
      .set('include_adult', 'false');

    // Make a GET request to TMDb's movie discovery endpoint.
    // The returned Observable can be subscribed to by your own services
    // or components when building the discovery feature.
    return this.http.get('https://api.themoviedb.org/3/discover/movie', { params });
  }
}