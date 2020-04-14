import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Country = [
    {
      name: "Istanbul"
    },
    {
      name: "Berlin"
    },
    {
      name: "London"
    },
    {
      name: "Helsinki"
    },
    {
      name: "Dublin"
    },
    {
      name: "Vancouver"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
