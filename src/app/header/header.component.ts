import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private route: Router ) { }
  
 
  ngOnInit() {
  }
  
  off = function(){
    let morecareer = document.getElementById("morecareer");
    let inoff = document.getElementById("InOff");
    inoff.remove();
    morecareer.style.display = 'block';
  }
  form = function(){
    let forms = document.getElementById("form");
    let signup = document.getElementById("signup");
    signup.remove();
    forms.style.display = 'block';
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
