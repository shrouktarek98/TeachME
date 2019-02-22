import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ID:number;
  Items: any; 
  constructor(
    private servicesService:ServicesService,
    private _Activatedroute: ActivatedRoute,
    private route: Router ) { 
    this.ID = this._Activatedroute.snapshot.params["id"];
    this.servicesService.get_Item(this.ID).subscribe(Response=>{
    this.Items=Response
      });
    }

  ngOnInit() {
  }

}
