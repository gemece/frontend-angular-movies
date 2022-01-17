import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MovieComponent } from './component/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

import { MovieService } from './services/movie.service';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    JwPaginationModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule
    
  ],
  
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }