import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlartsPage } from './alarts.page';

describe('AlartsPage', () => {
  let component: AlartsPage;
  let fixture: ComponentFixture<AlartsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
