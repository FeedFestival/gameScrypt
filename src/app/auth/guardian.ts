import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../shared/header/login.service';
import { __isDan, __isDuringStorm, __isInAir, __isIt } from '../shared/login/login.access';

@Injectable({
    providedIn: 'root'
})
export class Guardian implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const user = this.loginService.loggedUser();
        const hasRole = __isInAir(user.roles)
            && __isDuringStorm(user.roles) && __isDan(user.roles) && __isIt(user.roles);
        if (hasRole) {
            return true;
        } else {
            this.router.navigate(['logout']);
            return false;
        }
    }
}
