import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;

  onColumnsCountChange(newCols: number): void {
    this.cols = newCols;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
