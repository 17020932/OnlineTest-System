import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { MainAppRoutingModule } from './main-app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAppComponent } from './main-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemTagComponent } from './dashboard/use-control/item-tag/item-tag.component';
import { ChannelComponent } from './dashboard/use-control/channel/channel.component';
import { TestComponent } from './dashboard/use-control/test/test.component';
import { SearchComponent } from './search/search.component';
import { HistoryTestComponent } from './history-test/history-test.component';
import { PersonalChannelComponent } from './personal-channel/personal-channel.component';
import { HightlightchanelComponent } from './hightlightchanel/hightlightchanel.component';



@NgModule({
  declarations: [
    MainAppComponent,
    DashboardComponent,
    ItemTagComponent,
    ChannelComponent,
    TestComponent,
    SearchComponent,
    HistoryTestComponent,
    PersonalChannelComponent,
    HightlightchanelComponent
  ],
  imports: [
    CustomMaterialModule,
    FormsModule,
    CommonModule,
    MainAppRoutingModule
  ],
  providers: [],
  bootstrap: [MainAppComponent]
})
export class MainAppModule { }
