import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvocatsComponent } from './avocats.component';

const routes: Routes = [
  { path: '', component: AvocatsComponent },
  { path: 'profil/:name', loadChildren: () => import('./avocat/avocat.module').then(m => m.AvocatModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvocatsRoutingModule { }
