import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs/hammer';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import {AppComponent} from './app.component';
import {ObjectToList} from './shared/key-value.pipe';
import {UnCamelCasePipe} from './shared/un-camel-case.pipe';
import {GroupByPipe} from './shared/groupby.pipe';

@NgModule({
  exports: [
    MatListModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, UnCamelCasePipe, GroupByPipe, ObjectToList],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
