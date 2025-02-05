import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Pokemon, PokemonAPIResponse, PokemonDetalleResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private httpClient = inject(HttpClient);
  private readonly urlAPI = "https://pokeapi.co/api/v2";


  public loadPage(page: number): Observable<Pokemon[]> {
    
    const limit = 12;
    page = Math.max(1, page);    
    return this.httpClient.get<PokemonAPIResponse>(`${this.urlAPI}/pokemon?offset=${ (page-1) * limit}&limit=${limit}`)
    
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

  public loadById(id: number): Observable<Pokemon> {
      return this.httpClient.get<PokemonDetalleResponse>(`${this.urlAPI}/pokemon/${id}`);
  }

}
