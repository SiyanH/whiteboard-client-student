import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() {
  }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();
  grading = false;

  submitAnswer = () => {
    this.grading = true;
    this.answerChange.emit(this.answer);
  };

  ngOnInit(): void {
  }

}
