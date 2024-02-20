import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxQuestion } from '../../../models/checkbox.model';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-check-box-question',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './check-box-question.component.html',
  styleUrl: './check-box-question.component.scss'
})
export class CheckBoxQuestionComponent implements OnInit {
  @Input() question: CheckboxQuestion = {} as CheckboxQuestion;
  form!: FormGroup;

  get optionsArray() {
    return this.form.controls["options"] as FormArray;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [this.question.text],
      options: this.buildOptions()
    })
  }

  constructor(private formBuilder: FormBuilder) { }

  getControls(): any {
    return this.optionsArray.controls;
  }

  private buildOptions(): FormArray {
    const optionsArray = this.question.options.map(option => this.formBuilder.group(option));
    return this.formBuilder.array(optionsArray);
  }

}
