import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDetailsPagePage } from './stock-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: StockDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDetailsPagePageRoutingModule {}
