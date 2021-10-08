import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvocatRoutingModule } from './avocat-routing.module';
import { AvocatComponent } from './avocat.component';
import { CoreModule } from 'src/app/core';


@NgModule({
  declarations: [AvocatComponent],
  imports: [
    CommonModule,
    AvocatRoutingModule,
    CoreModule
  ]
})
export class AvocatModule { }
