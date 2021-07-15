import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  public tipos : Array <any> = [];
  public pokemons : any[] = [];
  page = 1;
  cards: any;

    getColors(typo:any){
    switch (typo) {
        case 'rock':
          return '#B69E31';
        case 'ghost':
          return '#70559B';
        case 'steel':
          return '#B7B9D0';
        case 'normal':
          return '#AAA67F';
        case 'fire':
          return '#F57D31';
        case 'grass':
          return '#3d9e0c';
        case 'electric':
          return '#F9CF30';
        case 'ice':
          return '#9AD6DF';
        case 'fighting':
          return '#C12239';
        case 'poison':
          return '#A43E9E';
        case 'ground':
          return '#DEC16B';
        case 'flying':
          return '#A891EC';
        case 'psychic':
          return '#FB5584';
        case 'bug':
          return '#A7B723';
        case 'dragon':
          return '#7037FF';
        case 'dark':
          return '#75574C';
        case 'fairy':
          return '#E69EAC';
        case 'water':
          return '#6493EB';
        
        default:
          return 'white';
    }
  }

  constructor(public pokeservice : PokemonsService) { 
    this.tipos = pokeservice.types;
  }
  getPokemons(){
      this.pokeservice.getPokemons().subscribe(
        (res:any)=>{
          res.results.forEach((result:any) => {
              this.pokeservice.getMorePokemons(result.name).subscribe(
                response => this.pokemons.push(response)
              )
          });
          
        },
        err=>{ 
          console.log(err);
        }
        )
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
