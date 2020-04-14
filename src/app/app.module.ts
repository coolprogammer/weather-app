import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { weatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [weatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
