import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=300`);
  }

  getMorePokemons(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  types: Array<any> =[
    {
      type: 'rock',
      color: '$rock'
    },
    {
      type: 'ghost',
      color: '$ghost'
    },
    {
      type: 'steel',
      color: '$steel'
    },
    {
      type: 'water',
      color: '$water'
    },
    {
      type: 'normal',
      color: '$normal'
    },
    {
      type: 'fire',
      color: '$fire'
    },
    {
      type: 'grass',
      color: '$grass'
    },
    {
      type: 'electric',
      color: '$electric'
    },
    {
      type: 'ice',
      color: '$ice'
    },
    {
      type: 'fighting',
      color: '$fighting'
    },
    {
      type: 'poison',
      color: '$poison'
    },
    {
      type: 'ground',
      color: '$ground'
    },
    {
      type: 'flying',
      color: '$flying'
    },
    {
      type: 'psychic',
      color: '$psychic'
    },
    {
      type: 'bug',
      color: '$bug'
    },
    {
      type: 'dragon',
      color: '$dragon'
    },
    {
      type: 'dark',
      color: '$dark'
    },
    {
      type: 'fairy',
      color: '$fairy'
    },
  ];
}
