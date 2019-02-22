import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient) {}
  get_All_Categories() {
    return this.http.get("http://127.0.0.1:8000/api/categories"); //.subscribe((res)=>{
  }
  get_Category(id: number) {
    return this.http.get("http://127.0.0.1:8000/api/categories/" + id); //.subscribe((res)=>{
  }
  get_All_Items() {
    return this.http.get("http://127.0.0.1:8000/api/items"); //.subscribe((res)=>{
  }
  get_Item(id: number) {
    return this.http.get("http://127.0.0.1:8000/api/items/" + id); //.subscribe((res)=>{
  }

  get_All_Users() {
    return this.http.get("http://127.0.0.1:8000/api/users"); //.subscribe((res)=>{
  }
  insert_User(data) {
    var body = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    };
    console.log(body);

    return this.http.post("http://127.0.0.1:8000/api/register", body);
  }
  Get_User(data) {
    var body = {
      email: data.Email,
      password: data.Password
    };
    return this.http.post("http://127.0.0.1:8000/api/login", body);
  }
  Get_UserDate(id: number) {
    return this.http.get("http://127.0.0.1:8000/api/user/"+ id);
  }
}
