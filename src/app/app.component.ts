import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeachMe';

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
























