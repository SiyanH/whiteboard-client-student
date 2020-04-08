import {Injectable} from '@angular/core';
import {API_URL_QUIZZES} from '../common/constants';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${API_URL_QUIZZES}/${qid}/questions`)
      .then(response => response.json());
}
