import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServicesService } from './../services.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User:any;
  constructor(private route: Router,private servicesService:ServicesService) { }

  ngOnInit() {
  }

  onClickSubmit(data)
  {
    this.servicesService.insert_User(data).subscribe(Response => {
    this.User=Response
    this.route.navigate(["/header"]);  
  });
  }
}
