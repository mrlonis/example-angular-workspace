import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Table } from 'table';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('passes the signal filter to the table', () => {
    component.filter.set('Hydrogen');
    fixture.detectChanges();

    const tableDebugElement: DebugElement = fixture.debugElement.query(By.directive(Table));
    const tableComponentInstance: Table = tableDebugElement.componentInstance as Table;
    expect(tableComponentInstance.filter()).toBe('Hydrogen');
  });
});
