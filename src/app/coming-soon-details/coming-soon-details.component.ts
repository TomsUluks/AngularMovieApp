import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { IMovie } from '../IMovie';
import {ITrailer} from '../ITrailer';
import { MovieService } from '../movie-service';

@Component({
  selector: 'app-coming-soon-details',
  templateUrl: './coming-soon-details.component.html',
  styleUrls: ['./coming-soon-details.component.css'],
  providers: [MovieService]
})
export class ComingSoonDetailsComponent implements OnInit {

  movie : IMovie;
 trailer : ITrailer;
  constructor(public movieService : MovieService, private router: Router, private activatedRoute : ActivatedRoute) { 
    
  }
  ngOnInit() {
    this.movieService.getMovie(this.activatedRoute.snapshot.params['id']).subscribe(response => this.movie = response);
  }
  public gotoMovies(){
    this.router.navigate(['coming-soon']);
  }
}
