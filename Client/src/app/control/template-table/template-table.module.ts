import { TemplateTableComponent } from './template-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    TemplateTableComponent
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    CustomMaterialModule,
    CommonModule
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [TemplateTableComponent],
  exports: [
    TemplateTableComponent
  ]
})
export class TemplateTableModule { }
