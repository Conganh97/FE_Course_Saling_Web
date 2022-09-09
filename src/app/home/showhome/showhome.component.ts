import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ScriptService} from "../../script.service";
import {Instructor} from "../../model/Instructor";
import {AdminInstructorService} from "../../admin/service/admin-instructor.service";

@Component({
  selector: 'app-showhome',
  templateUrl: './showhome.component.html',
  styleUrls: ['./showhome.component.css']
})
export class ShowhomeComponent implements OnInit {
  instructor: Instructor[] = []

  constructor(private adminInstructorService: AdminInstructorService) {
  }

  ngOnInit(): void {
    this.adminInstructorService.getAll().subscribe((data) => {
      this.instructor = data
      console.log(data)
    })
  }
}
//   constructor(private script: ScriptService) {
//   }
//
//   ngOnInit(): void {
//     this.script.load('bootstrap', 'tiny-slider',
//       'glightbox', 'purecounter_vanilla', 'functions').then(data => {
//       console.log('script loaded ', data);
//     }).catch(error => console.log(error));
//   }
//
//
//
// }
