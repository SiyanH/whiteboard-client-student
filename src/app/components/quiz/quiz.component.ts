import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../../services/quiz.service.client';
import {QuestionServiceClient} from '../../services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizServiceClient,
              private questionService: QuestionServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  courseId = ''
  quizId = '';
  quizTitle = '';
  questions = [];

  submitQuiz = () => {
    this.quizService.submitQuiz(this.quizId, this.questions);
    this.router.navigate([`/table/courses/${this.courseId}/quizzes`]);
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.quizId = params.qid;
      this.quizService.findQuizById(params.qid)
        .then(quiz => this.quizTitle = quiz.title);
      this.questionService.findQuestionsForQuiz(params.qid)
        .then(questions => this.questions = questions);
    });
  }
}
