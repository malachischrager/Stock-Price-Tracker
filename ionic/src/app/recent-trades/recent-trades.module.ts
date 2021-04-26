import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentTradesPageRoutingModule } from './recent-trades-routing.module';

import { RecentTradesPage } from './recent-trades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentTradesPageRoutingModule
  ],
  declarations: [RecentTradesPage]
})
export class RecentTradesPageModule {}
