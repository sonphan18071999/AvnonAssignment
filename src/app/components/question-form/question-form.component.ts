import { Component, OnInit, computed, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ParagraphQuestionComponent } from '../common/paragraph-question/paragraph-question.component';
import { CheckBoxQuestionComponent } from '../common/check-box-question/check-box-question.component';
import { MatButtonModule } from '@angular/material/button';
import { QuestionService } from '../../services/question.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CheckBoxQuestionComponent, MatFormFieldModule, MatCardModule, ParagraphQuestionComponent, MatButtonModule],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent implements OnInit {
  questions = computed(() => {
    return this.questionService.questions();
  })

  constructor(protected questionService: QuestionService) {
  }

  ngOnInit(): void {
  }

}
