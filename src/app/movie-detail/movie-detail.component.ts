import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { IMovie } from '../IMovie';
import {ITrailer} from '../ITrailer';
import { MovieService } from '../movie-service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {

 movie : IMovie;
 trailer : ITrailer;
  constructor(public movieService : MovieService, private router: Router, private activatedRoute : ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.movieService.getMovie(this.activatedRoute.snapshot.params['id']).subscribe(response => this.movie = response);
    //this.movieService.getTrailer(this.activatedRoute.snapshot.params['id']).subscribe(response => this.trailer = response)
  }

  public gotoMovies(){
    this.router.navigate(['http-service']);
  }

}
