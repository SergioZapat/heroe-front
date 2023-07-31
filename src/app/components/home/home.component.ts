import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  paises:any[] = [];

  constructor( ) {

    console.log("Constructor del home hecho");

  }

  ngOnInit(): void {
  }

}
