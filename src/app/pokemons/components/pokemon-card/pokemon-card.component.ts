import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { Pokemon } from '../../../pages/pokemons/interfaces';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent  {

  public pokemon = input.required<Pokemon>();

  public readonly imagen= computed(()=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`);
  
 }
