import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css']
})
export class SearchTeacherComponent implements OnInit {
  users:any;
  constructor(private route: Router,private servicesService:ServicesService) { 
    this.servicesService.get_All_Users().subscribe(Response=>{
      this.users=Response;
    });
  }
  
  ngOnInit() {
  }

  filt = function() {
    let drop = document.getElementById('drop');
    drop.style.display = 'block';
    drop.style.transform = 'translateY(45px)';
    document.getElementById('informationhead').style.display = 'none';
    document.getElementById('searchhead').style.display = 'none';
    document.getElementById('teacherinform').style.display = 'none';

    document.getElementById('leftnav').style.display = 'none';
    document.getElementById('rightnav').style.display = 'none';
    document.getElementById('cancal').style.display = 'block';
    document.getElementById('apply').style.display = 'block';

  }
  apply = function(){
    let drop = document.getElementById('drop');
    drop.style.display = 'none';
    drop.style.transform = 'translateY(-80px)';
    document.getElementById('informationhead').style.display = 'block';
    document.getElementById('searchhead').style.display = 'flex';
    document.getElementById('teacherinform').style.display = 'block';

    document.getElementById('leftnav').style.display = 'inline-flex';
    document.getElementById('rightnav').style.display = 'block';
    document.getElementById('cancal').style.display = 'none';
    document.getElementById('apply').style.display = 'none';
  }
  
  
  
}
