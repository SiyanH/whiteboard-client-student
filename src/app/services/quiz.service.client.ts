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
}
