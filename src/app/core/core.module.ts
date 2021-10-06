import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { FilterLawPipe } from './pipes/filterLaw.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const Pipes = [
  FilterLawPipe
];
@NgModule({
  exports: [
    AvatarComponent,
    FormsModule,
    ReactiveFormsModule,
    ...Pipes
  ],
  declarations: [
    AvatarComponent,
    ...Pipes
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
