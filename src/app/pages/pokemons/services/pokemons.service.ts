import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Pokemon, PokemonAPIResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private httpClient = inject(HttpClient);
  private readonly urlAPI = "https://pokeapi.co/api/v2";


  public loadPage(page: number): Observable<Pokemon[]> {
    if (page !== 0) {
      --page;
    }
    page = Math.max(0, page);
    return this.httpClient.get<PokemonAPIResponse>(`${this.urlAPI}/pokemon?offset=${page * 20}&limit=20`)
    
      .pipe(
        //delay(3000),
        map(({ results }) => results.map((pokemon) => {
          const id = pokemon.url.split('/').at(-2) ?? '';          
          return {
            id: +id,
            name: pokemon.name
          };
        })
        ))

  }

}
