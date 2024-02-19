import { Component } from '@angular/core';
import { AddNewQuestionComponent } from '../../components/add-new-question/add-new-question.component';
import { QuestionFormComponent } from '../../components/question-form/question-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddNewQuestionComponent, MatCardModule, QuestionFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
