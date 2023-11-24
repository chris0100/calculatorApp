import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";
import {Token} from "../interfaces/token.interface";


const AUTH_API = 'http://localhost:8080/api/users/auth/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,  private storageService: StorageService,) {
  }

  headers = new HttpHeaders({'Content-Type': 'application/json'})


  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      AUTH_API,
      {
        username,
        password,
      },
      {headers: this.headers}
    );
  }

  logout(): void {
    this.storageService.clean();
  }
}
