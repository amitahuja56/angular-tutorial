import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

import { HomeComponent} from './home/home.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'structural-directives',
    pathMatch: 'full'
  }, {
    path: 'structural-directives',
    component: StructuralDirectivesComponent
  },
  {
    path: 'attribute-directives',
    component: AttributeDirectivesComponent
  }  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DirectivesRoutingModule { }
