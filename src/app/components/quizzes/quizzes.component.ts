import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../../services/quiz.service.client';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) {
  }

  courseId = '';
  quizzes = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.service.findAllQuizzes()
        .then(quizzes => {
          this.quizzes = quizzes;
          return quizzes.map(quiz => this.service.findAttemptsForQuiz(quiz._id));
        })
        .then(attemptPromises =>
          Promise.all(attemptPromises)
        )
        .then(attempts => {
          for (let i = 0; i < this.quizzes.length; i++) {
            this.quizzes[i].attempts = attempts[i];
          }
        });
    });
  }

}
