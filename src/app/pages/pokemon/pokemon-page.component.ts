import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonDetalle } from '../pokemons/interfaces';

import { PokemonsService } from '../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  public pokemon = signal<PokemonDetalle | null>(null);
  public pokemonService = inject(PokemonsService);
  public router = inject(ActivatedRoute)
  private title = inject(Title);
  private meta = inject(Meta);



  

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id') ?? 0;
    if (!id) return;

    this.pokemonService.loadById(+id)
      .pipe(tap(({ id, name }: PokemonDetalle)=>{
        const title = `${id} - ${name}`;
        const pageDescription = `Información del pokemon ${name}`;        
        this.title.setTitle(title);
        this.meta.updateTag({ name: 'description', content: pageDescription });
        this.meta.updateTag({ name: 'og:title', content: title });
        this.meta.updateTag({ name: 'og:description', content: pageDescription });
        this.meta.updateTag({ name: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` });
      }))
      .subscribe(this.pokemon.set);




  }



}
