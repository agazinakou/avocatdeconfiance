import { Avocat } from './../../../core/models/avocat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avocat',
  templateUrl: './avocat.component.html',
  styleUrls: ['./avocat.component.scss']
})
export class AvocatComponent implements OnInit {

  avocat: Avocat = new Avocat();

  constructor() {
    // TODO: Retreive data from query and fetch API
    this.avocat = {
      id: 1,
      picture: 'https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png',
      lastname: 'Kevin',
      firstname: 'Qwestlove',
      law: ['Droit privé', ' Droit international'],
      country: 'Côte d\'ivoire',
      city: 'Abidjan',
      pricing: '20 000 FCFA',
      rate: '4.5'
    };
  }

  ngOnInit(): void {
  }

}
