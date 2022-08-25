import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpinionComponent } from './opinion/opinion.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'opinion', component:OpinionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
