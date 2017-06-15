import { Component, OnInit } from '@angular/core';
import {IMovie} from '../IMovie';
import {ITrailer} from '../ITrailer';
import {MovieService} from '../movie-service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  movies : IMovie[];
  constructor(private movieService : MovieService, private router: Router,private activatedRoute : ActivatedRoute) {
        movieService.getUpcomingMovies().subscribe(response => this.movies = response.json().results); 

   }

  ngOnInit() {
  }
     public onSelect(movie : IMovie){
    this.router.navigate(['/coming-soon-details', movie.id]);
  }
}
