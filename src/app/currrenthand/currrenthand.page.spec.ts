import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrrenthandPage } from './currrenthand.page';

describe('CurrrenthandPage', () => {
  let component: CurrrenthandPage;
  let fixture: ComponentFixture<CurrrenthandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrrenthandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
