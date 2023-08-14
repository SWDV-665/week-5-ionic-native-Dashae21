import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss']
})
export class GroceryPage {

  groceryItems: { name: string; quantity: number; completed: boolean }[] = [];
  newItemName: string = '';

  addItem() {
    if (this.newItemName) {
      this.groceryItems.push({ name: this.newItemName, quantity: 1, completed: false });
      this.newItemName = '';
    }
  }

  removeItem(item: { name: string; quantity: number; completed: boolean }) {
    const index = this.groceryItems.indexOf(item);
    if (index !== -1) {
      this.groceryItems.splice(index, 1);
    }
  }
}
