import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockDetailsPagePageRoutingModule } from './stock-details-page-routing.module';

import { StockDetailsPagePage } from './stock-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockDetailsPagePageRoutingModule
  ],
  declarations: [StockDetailsPagePage]
})
export class StockDetailsPagePageModule {}
