import { Component, Input } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Service2Service } from 'src/app/MyServices/service2.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent
 {

  flagValue:Service2Service;

  constructor(public serve: Service2Service){
    this.flagValue = serve;
    }





}
