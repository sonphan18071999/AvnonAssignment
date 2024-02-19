import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-add-new-question',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-new-question.component.html',
  styleUrl: './add-new-question.component.scss'
})
export class AddNewQuestionComponent {
  isOpenDialog = signal<boolean>(false);

  constructor(public dialog: MatDialog, protected questionService: QuestionService){
  }

  openDialog():void{
    const dialogRef = this.dialog.open(NewQuestionDialogComponent,{
      width: '50%',
      panelClass:'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.questionService.updateQuestions(result);
    });

  }
}
