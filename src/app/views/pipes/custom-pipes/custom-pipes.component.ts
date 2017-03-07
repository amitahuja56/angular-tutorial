import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  number=2;
  toPower=3;
  exponentValues(e, n,p){
    this.number=n;
    this.toPower=p;
  }
}
