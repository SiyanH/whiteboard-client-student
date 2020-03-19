import {Injectable} from '@angular/core';
import {API_URL_COURSE} from '../common/constants';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) =>
    fetch(`${API_URL_COURSE}/${cid}/modules`)
      .then(response => response.json());
}
