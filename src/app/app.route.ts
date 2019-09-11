import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { AdminRoutes } from "./routes/admin.route";
import { PublicRoutes } from "./routes/public.route";

// Layouts
import { PublicLayout } from "./layouts/public.layout";
import { AdminLayout } from "./layouts/admin.layout";

 
//Guard
import { AuthGuard } from './auth.guard';

const APP_ROUTE: Routes = [
	
	{ path: '', redirectTo: '/dashboard'},
	{ path: '', component: PublicLayout, data: { title: 'Public Views' }, children: PublicRoutes },
	{ path: '', component: AdminLayout, canActivate:[AuthGuard], data: { title: 'Secure Views' }, children: AdminRoutes },
	{ path: '**', redirectTo: '/notfound'},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
