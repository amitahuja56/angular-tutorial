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
  
  title = 'Pipes';
  submenu = [{
    name: 'Predefined Pipes',
    path: 'predefined-pipes'
  }, {
    name: 'Custom Pipes',
    path: 'custom-pipes'
  }];

}
