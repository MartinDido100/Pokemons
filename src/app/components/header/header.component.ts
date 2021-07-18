import { Component, OnInit , ElementRef} from '@angular/core';
import { PokemonsService } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpended: boolean = false;
  private mainDom:any;
  private pokedexDom:any;
  constructor(private elem : ElementRef, public pokeService : PokemonsService) { }

  traerMain(){
    this.pokeService.windowClickable.subscribe(data =>{
      this.mainDom = data;
    })
  }

  traerPokedex(){
    this.pokeService.windowClickable.subscribe(data =>{
      this.pokedexDom = data;
    })
  }

  openMenu(){
    const ul = this.elem.nativeElement.querySelector(".header__ul");
    if (this.isOpended == false) {
      ul.classList.add("header__ul-active");
      this.isOpended = true;
    }else{
      ul.classList.remove("header__ul-active");
      this.isOpended = false;
      this.mainDom.addEventListener("click",()=>{
        ul.classList.remove("header__ul-active");
        this.isOpended = false;
      })
      this.pokedexDom.addEventListener("click",()=>{
        ul.classList.remove("header__ul-active");
        this.isOpended = false;
      })
    }
  }
  
  closeMenu(){
    const ul = this.elem.nativeElement.querySelector(".header__ul");
    if (this.isOpended == true) {
      ul.classList.remove("header__ul-active");
      this.isOpended = false;
    }
  }

  ngOnInit(): void {
    this.traerMain();
    this.traerPokedex();
    this.closeMenu();
  }

}
