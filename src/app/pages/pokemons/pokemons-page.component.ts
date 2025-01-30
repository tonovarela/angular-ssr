import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';


@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent { }
