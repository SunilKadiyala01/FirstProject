import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSampleProject';
  public text:string = "I am the parent Component"
  public message:string = "Test message is sending from parent component"
}
