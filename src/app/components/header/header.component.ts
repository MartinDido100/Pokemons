import { Component, OnInit , ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpended: boolean = false;

  constructor(private elem : ElementRef) { }

  openMenu(){
    const ul = this.elem.nativeElement.querySelector(".header__ul");
    if (this.isOpended == false) {
      ul.classList.add("header__ul-active");
      this.isOpended = true;
    }else{
      ul.classList.remove("header__ul-active");
      this.isOpended = false;
    }
  }

  ngOnInit(): void {
  }

}
