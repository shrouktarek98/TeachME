import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  ID:number;
  User: any; 
  Name:string;
  constructor(private route: Router,private servicesService:ServicesService,
    private _Activatedroute: ActivatedRoute) {
    this.ID = this._Activatedroute.snapshot.params["id"];
    this.servicesService.Get_UserDate(1).subscribe(Response=>{
    this.User=Response,
    this.Name=this.User.firstName
    console.log(this.Name)
     });
    }

  ngOnInit() {
  }
  veiw = function(){
    let arow = document.getElementById("arow");
    let bodycenter = document.getElementById("bodycenter");
    let footercenter = document.getElementById("footercenter");
    let clas = arow.classList;
    let boo = false;
    for (let index = 0; index < clas.length; index++) {
        if(clas[index]=='a1'){
          boo=true;
        }
    }
    if(boo){
      arow.classList.remove('a1');
      arow.classList.add('b1');
      bodycenter.style.display = 'none';
      footercenter.style.display = 'none';
      console.log('a');
      arow.style.transform='rotate(180deg)';
    }
    else{
      arow.classList.remove('b1');
      arow.classList.add('a1');
      bodycenter.style.display = 'block';
      footercenter.style.display = 'block';
      arow.style.transform='rotate(360deg)';
    }
  }

}
