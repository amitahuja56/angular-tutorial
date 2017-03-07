import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'predefined-pipes',
    pathMatch: 'full'
  }, {
    path: 'predefined-pipes',
    component: PredefinedPipesComponent
  },
  {
    path: 'custom-pipes',
    component: CustomPipesComponent
  }  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PipesRoutingModule { }
