import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  off = function(){
    let morecareer = document.getElementById("morecareer");
    let inoff = document.getElementById("InOff");
    inoff.remove();
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
