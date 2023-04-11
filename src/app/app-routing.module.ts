import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './MyComponent/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './MyComponent/user-sign-up/user-sign-up.component';
import { UserAreaComponent } from './MyComponent/user-area/user-area.component';
import { MainComponent } from './MyComponent/main/main.component';
import { AdminAreaComponent } from './MyComponent/admin-area/admin-area.component';
import { AllUsersComponent } from './MyComponent/all-users/all-users.component';
import { AllProductsComponent } from './MyComponent/all-products/all-products.component';

const routes: Routes = [
  {path:"signIn" , component:UserSignInComponent},
  {path:"signUp" , component:UserSignUpComponent},
  {path:"userArea", component: UserAreaComponent},
  {path:"", component:MainComponent},
  {path:"adminArea",component:AdminAreaComponent,
    children:
    [
     {path:"allUsers",component:AllUsersComponent},
     {path:"allProducts",component:AllProductsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
