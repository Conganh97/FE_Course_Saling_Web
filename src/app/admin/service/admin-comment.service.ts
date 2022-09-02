import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rating} from "../../model/Rating";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AdminCommentService {

  constructor(private http:HttpClient) { }
  getAllById(id:number):Observable<Rating[]>{
    return this.http.get<Rating[]>(API_URL+"/admin/rating/"+id)
  }
  approval(id:number):Observable<Rating>{
   return  this.http.get<Rating>(API_URL+"/admin/rating/approval/"+id)
  }
  delete(id:number):Observable<Rating>{
    return this.http.get<Rating>(API_URL+"/admim/rating/delete/"+id)
  }
}
