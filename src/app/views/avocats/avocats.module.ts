import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvocatsRoutingModule } from './avocats-routing.module';
import { AvocatsComponent } from './avocats.component';
import { CoreModule } from 'src/app/core';


@NgModule({
  declarations: [AvocatsComponent],
  imports: [
    CommonModule,
    AvocatsRoutingModule,
    CoreModule
  ]
})
export class AvocatsModule { }
