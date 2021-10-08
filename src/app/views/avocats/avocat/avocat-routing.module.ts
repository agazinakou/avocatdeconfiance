import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvocatComponent } from './avocat.component';

const routes: Routes = [{ path: '', component: AvocatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvocatRoutingModule { }
