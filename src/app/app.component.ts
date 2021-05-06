import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status:boolean=true;
  statusRev()
  {
    this.status=!this.status;
  }
  userNames:string[]=[];
  putItem(item:string)
  {
   this.userNames.push(item)
  }

}
