import {Injectable} from '@angular/core';
import {API_URL_QUIZZES} from '../common/constants';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(API_URL_QUIZZES)
      .then(response => response.json());
  findQuizById = (qid) =>
    fetch(`${API_URL_QUIZZES}/${qid}`)
      .then(response => response.json());
  submitQuiz = (qid, questions) =>
    fetch(`${API_URL_QUIZZES}/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
}
