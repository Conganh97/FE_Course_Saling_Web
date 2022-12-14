import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ScriptService} from "../../script.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AdminLessonService} from "../service/admin-lesson.service";

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {
  idCourse:any
  constructor(private script: ScriptService,private route: ActivatedRoute, private storage: AngularFireStorage, private router: Router,
              private lessonService:AdminLessonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.idCourse = paramMap.get('idCourse');

    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.script.load('bootstrap',
      'glightbox', 'functions', 'awesome', 'bootstrap-icons', 'choices', 'bootstrap-icons', 'quill', 'stepper', 'aos', 'choices.min.js').then(data => {
    }).catch(error => console.log(error));
  }
  createForm = new FormGroup({
    nameLesson: new FormControl(),
    contentLesson: new FormControl(),
    linkVideo: new FormControl,
    timeLesson: new FormControl(),
    course: new FormControl(),

  })
  saveLesson(file: any) {
    console.log(file)
    for (let f of file) {
      if (f != null) {
        const filePath = f.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, f).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(
            url => {
              this.createForm.get('linkVideo')?.setValue(url)
              this.createForm.get('course')?.setValue({'idCourse':this.idCourse})
              console.log(this.createForm.value)
              this.lessonService.save(this.idCourse,this.createForm.value).subscribe((data) => {
                this.router.navigate(["/admin/courseCategory"])})
            })))
        ).subscribe((data) => {

        });
      }
    }

  }
}
