import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchCarsPage } from '../search-cars/search-cars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(SearchCarsPage)
  }
}
