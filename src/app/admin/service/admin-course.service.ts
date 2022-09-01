import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Course} from "../../model/Course";
import {Page} from "../../model/Page";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {

  constructor(private http:HttpClient) { }
  getAll(page:number): Observable<Page> {
    return this.http.get<Page>(API_URL + '/admin/'+page);
  }
  search(input:string):Observable<Course[]>{
    return this.http.get<Course[]>(API_URL+"admin/search")
  }
}
