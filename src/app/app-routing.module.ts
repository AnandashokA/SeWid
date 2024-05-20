import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './component/events/events.component';
import { SpecialEventsComponent } from './component/special-events/special-events.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CartComponent } from './component/cart/cart.component';
import { VegiesComponent } from './component/vegies/vegies.component';
import { FruitsComponent } from './component/fruits/fruits.component';
import { HomeComponent } from './component/home/home.component';
import { DairyProductsComponent } from './component/dairy-products/dairy-products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'special',
    component:SpecialEventsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'fruits',
    component:FruitsComponent
  },
  {
    path:'vegies',
    component:VegiesComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dairy',
    component:DairyProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
