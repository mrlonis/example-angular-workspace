import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ELEMENT_DATA } from 'lib';
import { Table } from './table';

describe('Table', () => {
  let component: Table;
  let fixture: ComponentFixture<Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table],
    }).compileComponents();

    fixture = TestBed.createComponent(Table);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters the data source from the signal input', () => {
    fixture.componentRef.setInput('data', ELEMENT_DATA);
    fixture.componentRef.setInput('filter', 'Hydrogen');
    fixture.detectChanges();

    expect(component.dataSource().filteredData).toHaveLength(1);
  });
});
