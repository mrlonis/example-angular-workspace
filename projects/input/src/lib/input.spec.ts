import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Input } from './input';

describe('Input', () => {
  let component: Input;
  let fixture: ComponentFixture<Input>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Input],
    }).compileComponents();

    fixture = TestBed.createComponent(Input);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has default empty label', () => {
    expect(component.label()).toBe('');
  });

  it('has default empty placeholder', () => {
    expect(component.placeholder()).toBe('');
  });

  it('has default empty value', () => {
    expect(component.value()).toBe('');
  });

  it('reflects a label input', () => {
    fixture.componentRef.setInput('label', 'Filter');
    fixture.detectChanges();
    expect(component.label()).toBe('Filter');
  });

  it('reflects a placeholder input', () => {
    fixture.componentRef.setInput('placeholder', 'Ex. Hydrogen');
    fixture.detectChanges();
    expect(component.placeholder()).toBe('Ex. Hydrogen');
  });

  it('reflects a value input', () => {
    fixture.componentRef.setInput('value', 'Hydrogen');
    fixture.detectChanges();
    expect(component.value()).toBe('Hydrogen');
  });

  it('updates the value signal on user input', () => {
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    inputEl.value = 'Helium';
    inputEl.dispatchEvent(new Event('input'));
    expect(component.value()).toBe('Helium');
  });

  it('updates the value signal to empty string on user input with empty value', () => {
    fixture.componentRef.setInput('value', 'Hydrogen');
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    inputEl.value = '';
    inputEl.dispatchEvent(new Event('input'));
    expect(component.value()).toBe('');
  });
});
