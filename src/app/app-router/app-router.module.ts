import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent} from '../movie-detail/movie-detail.component';
import {HttpServiceComponent} from '../http-service/http-service.component';
import {ComingSoonComponent} from '../coming-soon/coming-soon.component';
import {ComingSoonDetailsComponent} from '../coming-soon-details/coming-soon-details.component';

const appRoutes: Routes = [
  { path: 'http-service', component: HttpServiceComponent},
  { path: 'coming-soon', component: ComingSoonComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'coming-soon-details/:id', component: ComingSoonDetailsComponent},
  { path: '', redirectTo: '/http-service', pathMatch: 'full' },
  { path: '**', component: HttpServiceComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
