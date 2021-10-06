import { Component, OnInit } from '@angular/core';
import { Avocat } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avocats: Avocat[] = [];
  loading = true;

  query = '';

  constructor() { }

  ngOnInit(): void {
    this.avocats = [{
      id: 1,
      picture: 'https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png',
      lastname: 'Kevin',
      firstname: 'Qwestlove',
      law: ['Droit privé', ' Droit international'],
      country: 'Côte d\'ivoire',
      city: 'Abidjan',
      pricing: '20 000 FCFA',
      rate: '4.5'
    }, {
      id: 1,
      picture: 'https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png',
      lastname: 'Chrissy',
      firstname: 'Polachek',
      law: ['Droit privé', ' Droit international'],
      country: 'Côte d\'ivoire',
      city: 'Abidjan',
      pricing: '20 000 FCFA',
      rate: '4.9'
    }];
  }

}
