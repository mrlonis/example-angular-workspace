import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { Paginator } from './paginator';

describe('Paginator', () => {
  let component: Paginator;
  let fixture: ComponentFixture<Paginator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paginator],
    }).compileComponents();

    fixture = TestBed.createComponent(Paginator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has default pageSize of 50', () => {
    expect(component.pageSize()).toBe(50);
  });

  it('has default pageSizeOptions', () => {
    expect(component.pageSizeOptions()).toEqual([5, 10, 25, 50, 100]);
  });

  it('has default ariaLabel of "Select page"', () => {
    expect(component.ariaLabel()).toBe('Select page');
  });

  it('reflects a pageSize input', () => {
    fixture.componentRef.setInput('pageSize', 10);
    fixture.detectChanges();
    expect(component.pageSize()).toBe(10);
  });

  it('reflects a pageSizeOptions input', () => {
    fixture.componentRef.setInput('pageSizeOptions', [10, 20]);
    fixture.detectChanges();
    expect(component.pageSizeOptions()).toEqual([10, 20]);
  });

  it('reflects an ariaLabel input', () => {
    fixture.componentRef.setInput('ariaLabel', 'Select page of elements');
    fixture.detectChanges();
    expect(component.ariaLabel()).toBe('Select page of elements');
  });

  it('emits paginatorReady with the MatPaginator instance after view init', async () => {
    const fixture2 = TestBed.createComponent(Paginator);
    const component2 = fixture2.componentInstance;
    let emittedPaginator: MatPaginator | undefined;
    component2.paginatorReady.subscribe((p) => {
      emittedPaginator = p;
    });
    fixture2.detectChanges();
    await fixture2.whenStable();
    expect(emittedPaginator).toBeInstanceOf(MatPaginator);
  });

  it('resolves the required MatPaginator viewChild signal after render', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.paginator()).toBeInstanceOf(MatPaginator);
  });
});
