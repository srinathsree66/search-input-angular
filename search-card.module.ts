import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchCardComponent } from './search-card.component';

@NgModule({
  declarations: [SearchCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SearchCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchCardModule {}
