import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';

import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'template-driven-forms',
    pathMatch: 'full'
  }, {
    path: 'template-driven-forms',
    component: TemplateDrivenFormsComponent
  },
  {
    path: 'model-driven-forms',
    component: ModelDrivenFormsComponent
  },
  {
    path: 'custom-validators',
    component: CustomValidatorsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
