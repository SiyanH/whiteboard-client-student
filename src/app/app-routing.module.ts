import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
  {path: '', redirectTo: '/table/courses', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
