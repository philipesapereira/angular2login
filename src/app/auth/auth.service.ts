import { Injectable } from '@angular/core';
import { StorageService } from '../shared/Storage.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private KEY_TOKEN = 'token';

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      const logado = this.token !== '' ? true : false;

      if (!logado) {
        this.router.navigate(['login']);
      }

      return logado;
  }

  get token(): string {
    return this.storageService.get(this.KEY_TOKEN);
  }
}
