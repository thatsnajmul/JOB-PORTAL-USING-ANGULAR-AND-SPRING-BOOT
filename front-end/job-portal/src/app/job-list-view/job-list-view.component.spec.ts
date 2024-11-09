import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListViewComponent } from './job-list-view.component';

describe('JobListViewComponent', () => {
  let component: JobListViewComponent;
  let fixture: ComponentFixture<JobListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
