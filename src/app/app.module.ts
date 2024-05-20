import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { EventsComponent } from './component/events/events.component';
import { SpecialEventsComponent } from './component/special-events/special-events.component';
import { EventService } from './event.service';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './component/cart/cart.component';
import { VegiesComponent } from './component/vegies/vegies.component';
import { FruitsComponent } from './component/fruits/fruits.component';
import { HomeComponent } from './component/home/home.component';
import { DairyProductsComponent } from './component/dairy-products/dairy-products.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    SidebarComponent,
    CartComponent,
    VegiesComponent,
    FruitsComponent,
    HomeComponent,
    DairyProductsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
