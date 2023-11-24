import {Component, OnInit} from '@angular/core';
import {RequestOperation} from "../../interfaces/requestOperation.interface";
import {CalculateService} from "../../services/calculate.service";
import {Record} from "../../interfaces/record.interface";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(private calculateService: CalculateService,
              private storageService: StorageService,
              private authService: AuthService,
              private router: Router) {
  }

  isLoggedIn = false;
  username?: string;


  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUserToken();
      this.username = user.username;
    }
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }



  get records(): Record[] {
    return [...this.calculateService.records];
  }

  onSendOperation(request: RequestOperation) {
    this.calculateService.sendOperation(request);
  }
}
