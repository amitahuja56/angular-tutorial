import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms'

import { FormsRoutingModule } from './forms-routing.module';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';

import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, TemplateDrivenFormsComponent, ModelDrivenFormsComponent, CustomValidatorsComponent]
})
export class FormsModule { }
