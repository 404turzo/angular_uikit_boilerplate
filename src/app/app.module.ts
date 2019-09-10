import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.route';

// layouts
import { PublicLayout } from "./layouts/public.layout";
import { AdminLayout } from "./layouts/admin.layout";

//Guard
import { AuthGuard } from './app.authguard'; 


// components
import { AppComponent } from './app.component';

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


// services
import { UserService } from './services/user.service'; 

@NgModule({
  declarations: [
    AppComponent,
    AdminLayout, 
    PublicLayout, 
    NotFound,
    Home, Login, PublicNavbar,
    Dashboard, Navbar
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutes
  ],

  providers: [
    AuthGuard,
    UserService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
