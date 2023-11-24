import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NopagefoundComponent} from "./pages/nopagefound/nopagefound.component";
import {AuthRoutingModule} from "./pages/auth.routing";
import {PagesRoutingModule} from "./pages/pages.routing";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
