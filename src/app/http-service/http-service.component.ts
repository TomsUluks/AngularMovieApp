import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IMovie} from '../IMovie';
import {ITrailer} from '../ITrailer';
import {MovieService} from '../movie-service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css'],
  providers: [MovieService]
})
export class HttpServiceComponent implements OnInit {
  private movies : IMovie[];
  private trailers : ITrailer[];
  constructor(private movieService : MovieService, private router: Router,private activatedRoute : ActivatedRoute) {
    this.movieService.getMovies().subscribe(response => this.movies = response.json().results); 
    //movieService.getTrailer().subscribe(response => this.trailers = response.json().results);
   }

  ngOnInit() { }
  
     public onSelect(movie : IMovie){
    this.router.navigate(['/movie-detail', movie.id]);
  }
  };

