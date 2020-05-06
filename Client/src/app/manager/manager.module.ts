import { TemplateTableModule } from './../control/template-table/template-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerTestComponent } from './manager-test/manager-test.component';
import { ManagerBankQuestionsComponent } from './manager-bank-questions/manager-bank-questions.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardChannelComponent } from './dashboard-channel/dashboard-channel.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ViewTestComponent } from './manager-test/bottomSheet/view-test/view-test.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { ConfirmDeleteComponent } from './usecontroll/dialog/confirm-delete/confirm-delete.component';
import { TypeImportComponent } from './manager-test/dialog/type-import/type-import.component';
import { AddTestComponent } from './manager-test/bottomSheet/add-test/add-test.component';



@NgModule({
  declarations: [
    ManagerComponent,
    ManagerTestComponent,
    ManagerBankQuestionsComponent,
    ProfileComponent,
    DashboardChannelComponent,
    ViewTestComponent,
    ConfirmDeleteComponent,
    TypeImportComponent,
    AddTestComponent
  ],
  imports: [
    CustomMaterialModule,
    FormsModule,
    CommonModule,
    ManagerRoutingModule,
    TemplateTableModule
  ],
  entryComponents: [ViewTestComponent, TypeImportComponent, AddTestComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [ManagerComponent]
})
export class ManagerModule { }
