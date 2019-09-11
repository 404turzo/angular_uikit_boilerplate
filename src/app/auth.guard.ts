import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//Service

@Injectable()
export class AuthGuard implements CanActivate{

	constructor(private router: Router, private route: ActivatedRoute){}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean{    
		return false;
	}
}