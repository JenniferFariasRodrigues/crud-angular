import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

// import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from "../model/course";
import { CoursesService } from "./../services/courses.service";
import { ThemePalette } from "@angular/material/core";
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  color: ThemePalette = "primary";
  mode: ProgressSpinnerMode = "determinate";
  value = 50;
  
  courses$: Observable<Course[]>;
  // courses: Course[] = [];
  displayedColumns = ["name", "category"];

  // CoursesService: CoursesService;

  constructor(private CoursesService: CoursesService) {
    //this.courses = [];
    // this.CoursesService = new CoursesService();
    this.courses$ = this.CoursesService.list();
    // this.CoursesService.list().subscribe(courses => this.courses = courses);
  }

  ngOnInit(): void {
    // this.courses = this.CoursesService.list();
  }
}
