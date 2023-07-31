import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit, OnDestroy {

  heroes:any[] = [];
  casa:string = "";

  constructor( private ActivatedRoute : ActivatedRoute,
               private _heroesService: HeroesService,
               private router:Router) {
    console.log("Constructor");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.ActivatedRoute.params.subscribe( params => {
      console.log(params)
      this.casa = params['casa'];
      this._heroesService.buscarPorCasa( params['casa'] ).subscribe(data => {
        console.log("Subscribe");
        this.heroes = data;
      })
      console.log(this.heroes);
    });
  }
  verHeroe(id:number){
    this.router.navigate( [ '/heroe', id ])

  }
}
