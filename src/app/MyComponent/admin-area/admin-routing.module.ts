import { NgModule } from "@angular/core";
import { AllUsersComponent } from "../all-users/all-users.component";
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    
    {path:"allUsers",component:AllUsersComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }