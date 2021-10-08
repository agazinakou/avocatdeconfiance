import { Component, OnInit } from '@angular/core';
import { Avocat, StoreService } from 'src/app/core';

@Component({
  selector: 'app-avocats',
  templateUrl: './avocats.component.html',
  styleUrls: ['./avocats.component.scss']
})
export class AvocatsComponent implements OnInit {

  avocats: Avocat[] = [];
  loading = true;
  query = '';

  constructor(private store: StoreService) {
    if(this.store.getAvocats()){
      this.avocats = this.store.getAvocats();
    } else {
      // TODO: Fetch API
    }
  }

  ngOnInit(): void {
  }

}
