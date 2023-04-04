import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'descending';
  itemsShowCount = 12;

  onUpdateSort(newVal: string): void {
    this.sort = newVal;
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
  }

  onUpdateColumns(cols: number): void {
    this.columnsCountChange.emit(cols);
  }

}
