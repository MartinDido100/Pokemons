import { Component, OnInit, ViewChild , ElementRef,Renderer2 } from '@angular/core';
import { PokemonsService } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  public tipos : Array <any> = [];
  public pokemons : any[] = [];
  public pokemonsToShow: any[] = [];
  filteredTypes : any[] = [];
  cards: any;
  filterPost = '';
  isLoading: boolean = true;

  @ViewChild('pokedex') pokedex:any;
  @ViewChild('filters') filters:any;

  getColors(tipo:any){
    switch (tipo) {
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

  constructor(public pokeservice : PokemonsService, private elem: ElementRef,private renderer2 : Renderer2) { 
    this.tipos = pokeservice.types;
  }
  getPokemons(){
      this.pokeservice.getPokemons().subscribe(
        (res:any)=>{
          res.results.forEach((result:any) => {
              this.pokeservice.getMorePokemons(result.name).subscribe(
                (response:any) => {
                  this.pokemons.push(response); 
                }
              )
          });
          this.isLoading = false;
        },
        err=>{ 
          console.log(err);
        }
        )
  }
    
  catchTypes(e:any){
    e.target.classList.add("active");
    let str = e.target.textContent.trim();
    if (this.filteredTypes.length > 0) {
      if (!this.filteredTypes.includes(str)) {
        this.filteredTypes.push(str);
      }else{
        const index = this.filteredTypes.indexOf(e.target.textContent);
        this.filteredTypes.splice(index, 1);
        e.target.classList.remove("active");
      }
    }else{
      this.filteredTypes.push(str);
    }
  }

  filterTypes(){
    if (this.filteredTypes.length > 0) {
      this.pokemonsToShow = [];
    }
    this.pokemons.forEach((x,i)=>{
      if(this.filteredTypes.includes(x.types[0].type.name)){
        this.pokemonsToShow.push(x);
      }
    })
  }

  removeFilter(){
    this.pokemonsToShow = this.pokemons;
    this.filteredTypes = [];
    this.elem.nativeElement.querySelectorAll(".active").forEach((x:any) => x.classList.remove("active"));
  }

  openFilters(){
    const divFilters = this.filters.nativeElement;
    this.renderer2.setStyle(divFilters,'top',0);
  }

  closeFilters(){
    const divFilters = this.filters.nativeElement;
    this.renderer2.setStyle(divFilters,'top','-100%');
  }

  ngOnInit(): void {
    this.getPokemons();
    this.pokemonsToShow = this.pokemons;
  }

  ngAfterViewInit(){
    this.pokeservice.windowClickable.emit(this.pokedex.nativeElement);
  } 
}
