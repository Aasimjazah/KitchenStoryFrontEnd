import { Component } from '@angular/core';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { NavBarComponent } from './MyComponent/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  public flag: boolean = true;
  title = 'KitchenStoryFrontEnd';
}
