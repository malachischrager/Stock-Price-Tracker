import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentTradesPage } from './recent-trades.page';

const routes: Routes = [
  {
    path: '',
    component: RecentTradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentTradesPageRoutingModule {}
