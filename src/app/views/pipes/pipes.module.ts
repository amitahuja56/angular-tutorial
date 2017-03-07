import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './home/home.component';


import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, PredefinedPipesComponent, CustomPipesComponent]
})
export class PipesModule { }
