import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }