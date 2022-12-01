import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dsc-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input() placeHolder!: string;
  @Input() minLength!: number;
  @Output() searchEvent = new EventEmitter<string>();
  searchCriteria = '';
  hasError = false;

  searchProduct() {
    if (this.searchCriteria.trim().length === 0 || this.searchCriteria.trim().length >= 3) {
      this.searchEvent.emit(this.searchCriteria);
      this.hasError = false;
    } else {
      this.hasError = true;
    }
  }
}
