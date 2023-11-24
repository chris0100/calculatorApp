import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { ApplyOperationComponent } from './components/apply-operation/apply-operation.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import {TokenInterceptor} from "./guards/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListComponent,
    ApplyOperationComponent,
    LoginComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en'},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
