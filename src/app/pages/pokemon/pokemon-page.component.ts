import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../pokemons/interfaces';

import { PokemonsService } from '../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent  implements OnInit {
  public pokemon = signal<Pokemon | null>(null);
  public pokemonService = inject(PokemonsService);
  public router =inject(ActivatedRoute)
  

  ngOnInit(): void {


   const id = this.router.snapshot.paramMap.get('id')??0 ;
   this.pokemonService.loadById(+id).subscribe(this.pokemon.set);
   
     
    
    
  }



}
