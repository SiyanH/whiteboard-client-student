import {Injectable} from '@angular/core';
import {API_URL_COURSE} from '../common/constants';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch(API_URL_COURSE)
      .then(response => response.json());

  findCourseById = (cid) =>
    fetch(`${API_URL_COURSE}/${cid}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      });
}
