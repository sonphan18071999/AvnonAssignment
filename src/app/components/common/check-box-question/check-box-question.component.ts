import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-check-box-question',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './check-box-question.component.html',
  styleUrl: './check-box-question.component.scss'
})
export class CheckBoxQuestionComponent {

}
