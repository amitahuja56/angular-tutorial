import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   title = 'Forms';
  submenu = [{
    name: 'Template Driven Forms',
    path: 'template-driven-forms'
  }, {
    name: 'Model Driven Forms',
    path: 'model-driven-forms'
  }, {
    name: 'Custom Validators ',
    path: 'custom-validators'
  }];
  constructor() { }

  ngOnInit() {
  }

}
