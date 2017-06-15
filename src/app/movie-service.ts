import { Component, OnInit, Injectable  } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable } from 'rxjs';
import {IMovie} from './IMovie';
import {ITrailer} from './ITrailer';
import 'rxjs/add/operator/map';

@Injectable()

export class MovieService {
    movies : IMovie[];  
    constructor(private http: Http) {
    
   }
   public getMovies(): Observable<Response> { return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=683e674e815d9e79d4024c0bd7740655&language=en-US&page=1`); }
   public getUpcomingMovies(): Observable<Response> { return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=683e674e815d9e79d4024c0bd7740655&language=en-US&page=1`); }
   public getMovie(id:number): Observable<IMovie> {return this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=683e674e815d9e79d4024c0bd7740655&language=en-US&page=1").map(response => response.json())};
   //public getTrailer(id:number): Observable<ITrailer> {return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=683e674e815d9e79d4024c0bd7740655&language=en-US").map(response => response.json())};
}

