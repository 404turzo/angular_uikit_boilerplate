import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFound } from '../components/common/notfound/notfound';
import { Dashboard } from '../components/admin/dashboard/dashboard';

export const AdminRoutes : Routes =
[
	{path: 'dashboard',   component: Dashboard},
	{path: 'notfound', component: NotFound}
	
];