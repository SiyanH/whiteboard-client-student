import {Injectable} from '@angular/core';
import {API_URL_MODULE} from '../common/constants';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (mid) =>
    fetch(`${API_URL_MODULE}/${mid}/lessons`)
      .then(response => response.json());
}
