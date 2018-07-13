import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCarsPage } from './search-cars';

@NgModule({
  declarations: [
    SearchCarsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCarsPage),
  ],
})
export class SearchCarsPageModule {}
