import { Component, Input, OnInit } from '@angular/core';
import { Avocat } from 'src/app/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input() item: any;

  constructor() { }
}
