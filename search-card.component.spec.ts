import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchCardComponent } from './search-card.component';

describe('SearchCardComponent', () => {
  let component: SearchCardComponent;
  let fixture: ComponentFixture<SearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCardComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the empty value', () => {
    spyOn(component.searchEvent, 'emit').and.callThrough();
    component.searchCriteria = '';
    component.searchProduct();
    expect(component.searchCriteria.length).toEqual(0);
    expect(component.searchEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.hasError).toEqual(false);
  });

  it('should emit the value ', () => {
    spyOn(component.searchEvent, 'emit').and.callThrough();
    component.searchCriteria = 'testing';
    component.searchProduct();
    expect(component.searchEvent.emit).toHaveBeenCalledWith('testing');
    expect(component.searchEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.hasError).toEqual(false);
  });

  it('should return an error ', () => {
    spyOn(component.searchEvent, 'emit').and.callThrough();
    component.searchCriteria = 'te';
    component.searchProduct();
    expect(component.searchEvent.emit).not.toHaveBeenCalled();
    expect(component.hasError).toEqual(true);
  });
});
