import {  ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, effect } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonsService } from './services/pokemons.service';
import { Pokemon } from './interfaces';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'


@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent
//implements OnInit,OnDestroy
{

  public route = inject(ActivatedRoute);
  public currentPage = toSignal<number>(this.route.queryParamMap.pipe(
    map((params) => params.get('page') ?? '1'),
    map((page) => (isNaN(+page)) ? 1 : +page),
    map((page) => Math.max(page, 1) )
  ));
  pokemonService = inject(PokemonsService);
  public pokemons = signal<Pokemon[]>([]);

  public isLoading = signal(false);

  
  // private appRef= inject(ApplicationRef);
  // private $appState = this.appRef.isStable.subscribe((isStable) => {
  //   console.log('App state changed', isStable);
  // });



  constructor(){
    effect(() => {
      console.log('Current Page', this.currentPage());
      this.loadPage(this.currentPage());
    });
  }
   




  ngOnInit(): void {
    this.loadPage();
    console.log('Current Page', this.currentPage());
    
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // },1000);
  }


  loadPage(nexPage = 0): void {
    this.isLoading.set(true);
    this.pokemonService.loadPage(nexPage).subscribe((pokemons) => {
      this.pokemons.set(pokemons);
      this.isLoading.set(false);
    });

  }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }
}
