import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['tkl', '60%', 'full']


  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
