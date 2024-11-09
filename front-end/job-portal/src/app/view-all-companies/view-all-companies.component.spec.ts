import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCompaniesComponent } from './view-all-companies.component';

describe('ViewAllCompaniesComponent', () => {
  let component: ViewAllCompaniesComponent;
  let fixture: ComponentFixture<ViewAllCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllCompaniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
