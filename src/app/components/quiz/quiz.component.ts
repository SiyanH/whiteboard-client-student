import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizServiceClient,
              private questionService: QuestionServiceClient,
              private route: ActivatedRoute) {
  }

  quizTitle = '';
  questions = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.findQuizById(params.qid)
        .then(quiz => this.quizTitle = quiz.title);
      this.questionService.findQuestionsForQuiz(params.qid)
        .then(questions => this.questions = questions);
    });
  }
}
