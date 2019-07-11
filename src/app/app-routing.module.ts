import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RentalsComponent } from './home/rentals/rentals.component';
import { AddrentalComponent } from './home/addrental/addrental.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  
  {path:'allproperties' , component:RentalsComponent},
  {path:'addproperty' , component:AddrentalComponent},
  {path:'auth' , component:AuthComponent },
  { path: 'auth', component: AuthComponent,children:[
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
