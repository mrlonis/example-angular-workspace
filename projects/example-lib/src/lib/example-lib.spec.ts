import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLib } from './example-lib';

describe('ExampleLib', () => {
  let component: ExampleLib;
  let fixture: ComponentFixture<ExampleLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleLib],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
