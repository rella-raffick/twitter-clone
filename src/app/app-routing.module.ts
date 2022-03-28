import { PasswordComponent } from './components/password/password.component';
import { UsernameComponent } from './components/username/username.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:LandingPageComponent},
  {path:'username',component:UsernameComponent},
  {path:'password',component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
