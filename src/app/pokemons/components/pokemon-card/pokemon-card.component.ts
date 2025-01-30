import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent { }
