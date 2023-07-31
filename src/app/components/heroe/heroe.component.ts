import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe: any;

  constructor(private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService) {
      this.activatedRoute.params.subscribe( params => {
          this._heroesService.getHeroe( params['id'] ).subscribe (data => this.heroe = data)
      })
  }

}
