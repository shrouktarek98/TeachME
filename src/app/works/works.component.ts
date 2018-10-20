import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  users:object;
  constructor(private services:ServicesService) { 
    this.services.get_products().subscribe((response)=>{this.users=response});
  }

  ngOnInit() {
  }

}
