import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { ModuleListComponent } from './components/module-list/module-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    PageNotFoundComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
