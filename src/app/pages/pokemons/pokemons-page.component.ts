import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';


@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent,PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent 
//implements OnInit,OnDestroy
 {
  
  // public isLoading =signal(true);
  // private appRef= inject(ApplicationRef);
  // private $appState = this.appRef.isStable.subscribe((isStable) => {
  //   console.log('App state changed', isStable);
  // });


  // ngOnInit(): void {  
  //   setTimeout(() => {
  //     this.isLoading.set(false);
  //   },1000);
  // } 

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }
}
