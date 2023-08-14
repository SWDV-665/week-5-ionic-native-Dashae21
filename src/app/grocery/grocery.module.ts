import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GroceryPageRoutingModule } from './grocery-routing.module';
import { GroceryPage } from './grocery.page';

import { Toast } from '@ionic-native/toast/ngx'; // Import the Toast module

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroceryPageRoutingModule
  ],
  declarations: [GroceryPage],
  providers: [Toast] // Add the Toast provider here
})
export class GroceryPageModule {}
