import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './MyComponent/nav-bar/nav-bar.component';
import { UserService } from './MyServices/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSignInComponent } from './MyComponent/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './MyComponent/user-sign-up/user-sign-up.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { UserAreaComponent } from './MyComponent/user-area/user-area.component';
import { MainComponent } from './MyComponent/main/main.component';
import { AdminAreaComponent } from './MyComponent/admin-area/admin-area.component';
import { AllUsersComponent } from './MyComponent/all-users/all-users.component';
import { AllProductsComponent } from './MyComponent/all-products/all-products.component';
import { AddProductComponent } from './MyComponent/add-product/add-product.component';
import { UserNavbarComponent } from './MyComponent/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './MyComponent/admin-navbar/admin-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserSignInComponent,
    UserSignUpComponent,
    FooterComponent,
    UserAreaComponent,
    MainComponent,
    AdminAreaComponent,
    AllUsersComponent,
    AllProductsComponent,
    AddProductComponent,
    UserNavbarComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, NavBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
