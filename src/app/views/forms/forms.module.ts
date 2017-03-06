import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FormsRoutingModule } from './forms-routing.module';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ValidatorsComponent } from './validators/validators.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, TemplateDrivenFormsComponent, ModelDrivenFormsComponent, ValidatorsComponent, CustomValidatorsComponent]
})
export class FormsModule { }
