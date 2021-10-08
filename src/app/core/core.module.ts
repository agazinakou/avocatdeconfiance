import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { FilterLawPipe } from './pipes/filterLaw.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


const pipes = [
  FilterLawPipe
];
@NgModule({
  exports: [
    AvatarComponent,
    FormsModule,
    ReactiveFormsModule,
    ...pipes
  ],
  declarations: [
    AvatarComponent,
    ...pipes
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
