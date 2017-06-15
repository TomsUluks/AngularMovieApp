import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRouterModule} from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MovieService } from './movie-service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ComingSoonDetailsComponent } from './coming-soon-details/coming-soon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpServiceComponent,
    ComingSoonComponent,
    MovieDetailComponent,
    ComingSoonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
