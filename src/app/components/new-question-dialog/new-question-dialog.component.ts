import { Component, Inject, OnInit, WritableSignal, computed, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxModule } from '@angular/material/checkbox';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Question } from '../../models/question.model';
import { QuestionTypeEnum } from '../../enums/question-type.enum';
import { QuestionType } from '../../models/question-type.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-question-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-question-dialog.component.html',
  styleUrl: './new-question-dialog.component.scss',
  providers: [
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: { overlayPanelClass: 'customClass' }
    }
  ],
})
export class NewQuestionDialogComponent implements OnInit {

  form!: FormGroup
  questionType = [{ name: QuestionTypeEnum.CHECKBOX }, { name: QuestionTypeEnum.PARAGRAPH }];

  selectedQuestionType = signal<QuestionType>({ name: QuestionTypeEnum.PARAGRAPH });

  isCheckBoxType = computed(() => {
    return this.selectedQuestionType().name === QuestionTypeEnum.CHECKBOX
  })

  questions: Question[] = []

  get optionsArray() {
    return this.form.controls["options"] as FormArray;
  }

  constructor(public dialogRef: MatDialogRef<NewQuestionDialogComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public questionData: Question) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: QuestionTypeEnum.PARAGRAPH,
      text: ["", Validators.required],
      options: this.formBuilder.array([]),
      allowSpecific: [false, Validators.required],
      required: [false, Validators.required],
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.form.controls['type'].setValue(this.selectedQuestionType().name);
      this.dialogRef.close(this.form.value);
    } else {
      alert("Form is not validate")
    }
  }

  changeQuestionType($event: any): void {
    this.selectedQuestionType.set($event.value);
  }

  addNewOptions(): void {
    const optionForm = this.formBuilder.group({
      id:"",
      value: ["", Validators.required]
    });
    this.optionsArray.push(optionForm);
  }

  getControls(): any {
    return this.optionsArray.controls;
  }

}

