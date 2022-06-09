import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';





@NgModule({
  declarations: [Component],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,MatCardModule ],
    
  exports:[
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
    
  
})
export class AppMaterialModule { }
