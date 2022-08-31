import { Component, OnInit } from '@angular/core';
import {ScriptService} from "../../script.service";

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {

  constructor(private script:ScriptService) { }

  ngOnInit(): void {
    this.script.load('bootstrap', 'tiny-slider',
      'glightbox', 'purecounter_vanilla', 'functions').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

}
