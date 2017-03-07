import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   title = 'Directives';
  submenu = [{
    name: 'Structural Directives',
    path: 'structural-directives'
  }, {
    name: 'Attribute Directives',
    path: 'attribute-directives'
  }];
}
