import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.scss']
})
export class ModelDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userForm= new FormGroup({
    name: new FormControl('amit',[Validators.required, Validators.minLength(4)]),
    id: new FormControl(null, Validators.pattern('^[1-9][0-4]{4}$')),
    location: new FormControl()
  });

  onSubmit(){
    console.log(this.userForm.value);
  }

}
