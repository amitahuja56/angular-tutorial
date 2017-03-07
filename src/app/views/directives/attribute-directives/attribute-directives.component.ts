import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cone=true;
  ctwo=true;
  style="italic";
  size="30px";
  toggle(){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
    

  }

}
