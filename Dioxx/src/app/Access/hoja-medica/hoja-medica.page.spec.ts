import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HojaMedicaPage } from './hoja-medica.page';

describe('HojaMedicaPage', () => {
  let component: HojaMedicaPage;
  let fixture: ComponentFixture<HojaMedicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaMedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
