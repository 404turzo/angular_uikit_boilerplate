import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from '../components/public/home/home';
import { Login } from '../components/public/login/login';

export const PublicRoutes : Routes =
[

	{path: '',   component: Home},
	{path: 'login',   component: Login}

];