import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  User:any;
  constructor(private route: Router,private servicesService:ServicesService) { 

  }

  ngOnInit() {
  }
  onClickSubmit(data)
  {
    this.servicesService.Get_User(data).subscribe(Response=>{
    this.User=Response
    if(this.User.length!=0)
    {     
       this.route.navigate(["/header"]);
    }
    });
  }

}
