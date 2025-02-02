import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonListSkeletonComponent } from '../../../pages/pokemons/ui/pokemon-list-skeleton/pokemon-list-skeleton.component';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent { }
