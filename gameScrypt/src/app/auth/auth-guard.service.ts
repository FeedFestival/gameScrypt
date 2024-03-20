import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../shared/header/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const currentUser = this.loginService.loggedUser();
        const tokenExpired = this.loginService.isTokenExpired();

        if (currentUser && !tokenExpired) {
            return true;
        } else {
            if (tokenExpired) {
                this.router.navigate(['logout']);
            }
            return false;
        }
    }
}
