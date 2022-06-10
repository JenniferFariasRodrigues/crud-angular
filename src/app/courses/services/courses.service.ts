import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay,first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  // private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //apos o seridor dar a resposta vai finalizar a origem ods dados
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
