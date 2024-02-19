import { Component, Input, OnInit, WritableSignal, signal } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-paragraph-question',
  standalone: true,
  imports: [],
  templateUrl: './paragraph-question.component.html',
  styleUrl: './paragraph-question.component.scss'
})
export class ParagraphQuestionComponent implements OnInit {

  @Input() question: Question = {} as Question;
  ngOnInit(): void {
    console.log(this.question)
  }
}
