import { Router } from '@angular/router';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fottor',
  templateUrl: './fottor.component.html',
  styleUrls: ['./fottor.component.css']
})
export class FottorComponent implements OnInit {
  categories: any;
  items:any;0
  constructor( private route:Router,private servicesService:ServicesService) {
    this.servicesService.get_All_Categories().subscribe(Response => {
      this.categories = Response;
    });
    this.servicesService.get_All_Items().subscribe(Response => {
      this.items = Response;
    });
   
  }
  ngOnInit() {
  }

}
