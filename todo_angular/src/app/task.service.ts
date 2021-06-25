 import { HttpClient } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const URL = environment.apiBaseUrl;

@Injectable({providedIn:'root'})
export class TaskService{
   
    constructor(private http:HttpClient){
    
    }

    getList():Observable<any>{
      
      return this.http.get<any>(`${URL}/view`)
      
    }
    addItem(data:any):Observable<any>{
         const name:string = data
      return this.http.post<any>(`${URL}/add`,{params:{name:name}})
  }
  deleteItem(data:any):Observable<any>{
    const id:string = data
    return this.http.get<any>(`${URL}/delete?id=${id}`)
}
  }