import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';


@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.scss']
})
export class CustomValidatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  emailForm= new FormGroup({
    email: new FormControl('',this.validateEmail)
  });

  validateEmail(c: FormControl) {
  
  let EMAIL_REGEXP=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
 
return EMAIL_REGEXP.test(c.value) ?  null:{
    validateEmail: {
      valid: false
    }
  };
}
}