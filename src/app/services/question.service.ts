import { Injectable, WritableSignal, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { CheckboxQuestion } from '../models/checkbox.model';
import { ParagraphQuestion } from '../models/paragraph.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: WritableSignal<Question[]> = signal<Question[]>([])
  constructor() { }

  updateQuestions(question: CheckboxQuestion | ParagraphQuestion): void {
    this.questions.update((questions) => [question, ...questions])
  }
}
