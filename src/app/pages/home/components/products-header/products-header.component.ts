import { Component, EventEmitter, Output } from '@angular/core';

const SORT_VAL : { [sort: string]: string } = { 'ascending': 'asc', 'descending': 'desc'};

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'descending';
  itemsShowCount = 12;

  onUpdateSort(newVal: string): void {
    this.sort = newVal;
    this.sortChange.emit(SORT_VAL[newVal])
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count)
  }

  onUpdateColumns(cols: number): void {
    this.columnsCountChange.emit(cols);
  }

}
