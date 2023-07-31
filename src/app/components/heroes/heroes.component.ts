import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private  _heoresService:HeroesService,
              private router:Router) {

   }

  ngOnInit() {
    this._heoresService.getHeroes().subscribe(data =>{this.heroes = data })
    // console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.router.navigate( [ '/heroe', idx ])

  }

}


