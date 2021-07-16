import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegendariesComponent } from './components/legendaries/legendaries.component';
import { LayoutComponent } from './components/pokedex/layout/layout.component';

const routes: Routes = [
  {'path': 'pokedex', 'component' : LayoutComponent},
  {'path': 'legendaries', 'component' : LegendariesComponent},
  {'path': '', pathMatch:'full', 'component': HomeComponent},
  {'path': '**','component': HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
