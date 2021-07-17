import { Component, OnInit,ViewChild} from '@angular/core';
import { PokemonsService } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public pokeService: PokemonsService) { 
  }

  @ViewChild("main") main: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.pokeService.windowClickable.emit(this.main.nativeElement); 
  } 
}
