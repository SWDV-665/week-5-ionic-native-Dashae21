import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Import ToastController
import { Toast } from '@ionic-native/toast/ngx'; // Import the Toast module

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss']
})
export class GroceryPage {

  groceryItems: { name: string; quantity: number; completed: boolean }[] = [];
  newItemName: string = '';

  constructor(
    private toastController: ToastController, // Add ToastController to the constructor
    private toast: Toast // Add the Toast module to the constructor
  ) {}

  async addItem() {
    if (this.newItemName) {
      this.groceryItems.push({ name: this.newItemName, quantity: 1, completed: false });
      this.newItemName = '';

      // Display a toast message when an item is added
      this.toast.show('Item added!', '2000', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
      );
    }
  }

  // Rest of the code remains the same
}
