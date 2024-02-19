import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxQuestionComponent } from './check-box-question.component';

describe('CheckBoxQuestionComponent', () => {
  let component: CheckBoxQuestionComponent;
  let fixture: ComponentFixture<CheckBoxQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckBoxQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
