import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ELEMENT_DATA, PeriodicElement } from 'lib';
import { Paginator } from 'paginator';
import { Table } from './table';

@Component({
  selector: 'lib-table-test-host',
  imports: [Table, Paginator],
  template: `<lib-table [data]="data"
    ><lib-paginator paginatorContent #paginatorContent
  /></lib-table>`,
})
class TableWithPaginatorComponent {
  readonly data: PeriodicElement[] = ELEMENT_DATA;
}

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

    expect(component.dataSource.filteredData).toHaveLength(1);
  });

  it('syncs data to dataSource when data input changes', () => {
    fixture.componentRef.setInput('data', ELEMENT_DATA);
    fixture.detectChanges();
    expect(component.dataSource.data).toBe(ELEMENT_DATA);
  });

  it('has the correct columns to display', () => {
    expect(component.columnsToDisplay).toEqual(['name', 'weight', 'symbol', 'position']);
  });

  it('has the correct columns to display with expand', () => {
    expect(component.columnsToDisplayWithExpand).toEqual([
      'name',
      'weight',
      'symbol',
      'position',
      'expand',
    ]);
  });

  it('expandedElement is null by default', () => {
    expect(component.expandedElement).toBeNull();
  });

  it('isExpanded returns false when no element is expanded', () => {
    expect(component.isExpanded(ELEMENT_DATA[0])).toBe(false);
  });

  it('isExpanded returns true when the element is expanded', () => {
    component.toggle(ELEMENT_DATA[0]);
    expect(component.isExpanded(ELEMENT_DATA[0])).toBe(true);
  });

  it('isExpanded returns false for a different element when another is expanded', () => {
    component.toggle(ELEMENT_DATA[0]);
    expect(component.isExpanded(ELEMENT_DATA[1])).toBe(false);
  });

  it('toggle expands a collapsed element', () => {
    component.toggle(ELEMENT_DATA[0]);
    expect(component.expandedElement).toBe(ELEMENT_DATA[0]);
  });

  it('toggle collapses an already expanded element', () => {
    component.toggle(ELEMENT_DATA[0]);
    component.toggle(ELEMENT_DATA[0]);
    expect(component.expandedElement).toBeNull();
  });

  it('toggles a row when it is clicked via the template', async () => {
    fixture.componentRef.setInput('data', ELEMENT_DATA);
    fixture.detectChanges();
    await fixture.whenStable();

    const row = fixture.debugElement.query(By.css('tr.example-element-row'))
      .nativeElement as HTMLElement;
    row.click();
    fixture.detectChanges();

    expect(component.expandedElement).toBe(ELEMENT_DATA[0]);
  });

  it('collapses a row when it is clicked a second time via the template', async () => {
    fixture.componentRef.setInput('data', ELEMENT_DATA);
    fixture.detectChanges();
    await fixture.whenStable();

    const row = fixture.debugElement.query(By.css('tr.example-element-row'))
      .nativeElement as HTMLElement;
    row.click();
    fixture.detectChanges();
    row.click();
    fixture.detectChanges();

    expect(component.expandedElement).toBeNull();
  });

  it('toggles a row when the expand button is clicked via the template', async () => {
    fixture.componentRef.setInput('data', ELEMENT_DATA);
    fixture.detectChanges();
    await fixture.whenStable();

    const button = fixture.debugElement.query(By.css('button[aria-label="expand row"]'))
      .nativeElement as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(component.expandedElement).toBe(ELEMENT_DATA[0]);
  });
});

describe('Table with Paginator content', () => {
  let hostFixture: ComponentFixture<TableWithPaginatorComponent>;
  let tableComponent: Table;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithPaginatorComponent],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TableWithPaginatorComponent);
    await hostFixture.whenStable();
    tableComponent = hostFixture.debugElement.query(By.directive(Table)).componentInstance as Table;
  });

  it('should have paginatorContent defined when a Paginator is projected', () => {
    expect(tableComponent.paginatorContent()).toBeDefined();
  });

  it('renders the footer row when a Paginator is projected', () => {
    hostFixture.detectChanges();
    const footerRow = hostFixture.debugElement.query(By.css('tr.mat-mdc-footer-row'));
    expect(footerRow).not.toBeNull();
  });
});
