import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  courseTitle = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.findCourseById(params.cid)
        .then(course => {
          if (course === null) {
            this.router.navigate(['/error']).then();
          } else {
            this.courseTitle = course.title;
          }
        });
    });
  }

}
