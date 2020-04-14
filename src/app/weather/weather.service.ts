import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Weather } from './weather';

@Injectable()
export class weatherService {
  constructor(private http: HttpClient) { }

  fetchCity(): Observable<Weather[]>{
     return this.http.get<Weather[]>("https://www.metaweather.com/api/location/search/?query=karachi");
    }
}