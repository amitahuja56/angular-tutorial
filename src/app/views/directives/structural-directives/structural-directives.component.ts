import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleNgif(){
    this.applyNgif=!this.applyNgif;
  }
  switchTab(e){
    console.log(e.target.value);
    this.tab=e.target.value;
  }
  appendColor(e,color){
    this.items.push(color);
  
  }

  
  applyNgif=true;

  smapleSDone :string ="<div *ngIf='applyNgif'> I am Comming Using ngIf </div>"

  smapleSDtwo:string="<button type='button' class='btn' (click)='toggleNgif()'> Toggle ngIf </button> "
  
  tab=2;
  items=["red", "blue", "green"];

}
