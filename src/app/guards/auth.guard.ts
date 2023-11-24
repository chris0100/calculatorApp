import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {


  constructor(public authService: AuthService, private router: Router,  private storageService: StorageService) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.storageService.isLoggedIn()) {

      if (this.isTokenExpired()) {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }


  isTokenExpired(): boolean {
    const token = this.storageService.getUserToken();
    const objPayload = this.storageService.obtenerDatosToken(token);
    const now = new Date().getTime() / 1000;
    return objPayload.exp < now;
  }
}
