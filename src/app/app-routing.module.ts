import { UsernameComponent } from './components/username/username.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:LandingPageComponent},
  {path:'signup1',component:UsernameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
