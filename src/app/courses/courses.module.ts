import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
//include MatTableModule
import {MatTableModule} from '@angular/material/table';
//para o card
import {MatCardModule} from '@angular/material/card';
//para o toolbar
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class CoursesModule { }
