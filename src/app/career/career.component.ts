import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  categories:any;
  constructor(private services:ServicesService) {
    services.get_All_Categories().subscribe(res=>{
      this.categories=res
    });
   }

  ngOnInit() {
  }
  off = function(){
    let morecareer = document.getElementById("morecareer");
    let inoff = document.getElementById("InOff");
    let submit=document.getElementById("submit");
    inoff.remove();
    morecareer.style.transition="all 5s linear 15s";
    morecareer.style.display = 'block';
   
   
  }
  focus = function(id){
    let input = document.getElementById(id);
    input.style.borderBottom = '2.5px solid #fff';
  }
  blur = function(id){
    let input = document.getElementById(id);
    input.style.borderBottom = '2.5px solid hsla(0,0%,100%,.5)';
  }

}
