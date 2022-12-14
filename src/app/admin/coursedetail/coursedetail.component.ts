import { Component, OnInit } from '@angular/core';
import {ScriptService} from "../../script.service";
import {AdminCourseService} from "../service/admin-course.service";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../model/Course";
import {Rating} from "../../model/Rating";
import {AdminCommentService} from "../service/admin-comment.service";
import {Lesson} from "../../model/Lesson";
import {AdminLessonService} from "../service/admin-lesson.service";

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  idCourse:any;
  course!:Course;
  rating:any[]=[]
  lesson:Lesson[]=[]
  constructor(private script: ScriptService, private courseService: AdminCourseService,private route: ActivatedRoute,private ratingService:AdminCommentService,private lessonService:AdminLessonService) {
  }

  ngOnInit(): void {
    this.script.load('bootstrap', 'tiny-slider',
      'glightbox', 'purecounter_vanilla', 'functions',).then(data => {
    }).catch(error => console.log(error));
    this.route.paramMap.subscribe(paramMap => {
      this.idCourse = paramMap.get('idCourse');
      this.courseService.findById(this.idCourse).subscribe((data)=>{
        this.course = data
      })
      this.ratingService.getAllById(this.idCourse).subscribe((data)=>{
        this.rating=data
      })
      this.lessonService.getAllById(this.idCourse).subscribe((data)=>{
        this.lesson=data
      })
    })
  }
  counter(i: number) {
    return new Array(i);
  }
  approval(id:number){
    this.ratingService.approval(id).subscribe()
  }
  deleteRating(id:number){
    this.ratingService.delete(id).subscribe()
  }
}
