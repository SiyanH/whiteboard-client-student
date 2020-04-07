import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {QuizComponent} from './components/quiz/quiz.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/courses/:cid', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
  {path: 'table/courses/:cid/quizzes', component: QuizzesComponent},
  {path: 'table/courses/:cid/quizzes/:qid', component: QuizComponent},
  {path: 'error', component: PageNotFoundComponent},
  {path: '', redirectTo: '/table/courses', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
