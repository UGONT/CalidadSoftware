import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAdultoPage } from './form-adulto.page';

describe('FormAdultoPage', () => {
  let component: FormAdultoPage;
  let fixture: ComponentFixture<FormAdultoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdultoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
