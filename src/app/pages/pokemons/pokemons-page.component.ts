import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { Title } from '@angular/platform-browser';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonsService } from './services/pokemons.service';
import { Pokemon } from './interfaces';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';



@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent,RouterLink],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent
//implements OnInit,OnDestroy
{

  public route = inject(ActivatedRoute);
  public router = inject(Router);

  private title=inject(Title);

  

  public currentPage = toSignal<number>(this.route.params.pipe(
    map((params) => params['page'] ?? '1'),
    map((page) => (isNaN(+page)) ? 1 : +page),
    map((page) => Math.max(1, page))
  ));
  pokemonService = inject(PokemonsService);
  public pokemons = signal<Pokemon[]>([]);

  public isLoading = signal(false);


  // private appRef= inject(ApplicationRef);
  // private $appState = this.appRef.isStable.subscribe((isStable) => {
  //   console.log('App state changed', isStable);
  // });

public loadOnPageChange =effect(()=>{  
  this.loadPage(this.currentPage()!-1);
})

  

  // ngOnInit(): void {
  //   this.loadPage();
  //   // setTimeout(() => {
  //   //   this.isLoading.set(false);
  //   // },1000);
  // }


  loadPage(page = 0): void {
    const pagetoLoad = this.currentPage()! + page;
    if (pagetoLoad ==0 ) return;
    this.isLoading.set(true);
    
    this.pokemonService
      .loadPage(pagetoLoad)
      .pipe(        
        tap(() => { 
          this.isLoading.set(false);
          this.title.setTitle(`Pokemons - Page ${pagetoLoad}`);
        //  this.router.navigate([], { queryParams: { page: pagetoLoad } }); 
        } 
        )
      )
      .subscribe((pokemons) => this.pokemons.set(pokemons));

  }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }
}
