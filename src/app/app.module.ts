import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.route';
import { AppComponent } from './app.component';

// layouts

// routes

// components

// common
import { NotFound } from './components/common/notfound/notfound';

// public 
import { Home } from './components/public/home/home';
import { Login } from './components/public/login/login';
import { PublicNavbar } from './components/public/navbar/public.navbar';

// admin
import { Dashboard } from './components/admin/dashboard/dashboard';
import { Navbar } from './components/admin/navbar/navbar';

// admin - shared components

@NgModule({
  declarations: [
    AppComponent,
    NotFound,
    Home, Login, PublicNavbar,
    Dashboard, Navbar
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
