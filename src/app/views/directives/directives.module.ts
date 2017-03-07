import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { HomeComponent } from './home/home.component';

import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, AttributeDirectivesComponent, StructuralDirectivesComponent]
})
export class DirectivesModule { }
