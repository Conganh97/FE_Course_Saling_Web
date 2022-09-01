import {Component, OnInit} from '@angular/core';
import {ScriptService} from "./script.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE_Course_Saling_Web';
  constructor(private script:ScriptService) {
  }

}
