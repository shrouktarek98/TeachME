import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  get_products(){
  return this.http.get("https://jsonplaceholder.typicode.com/posts/1");//.subscribe((res)=>{

  }
}
