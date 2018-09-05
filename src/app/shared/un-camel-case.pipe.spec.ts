
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {UnCamelCasePipe} from './un-camel-case.pipe';



describe('Pipe: Default', () => {
  let pipe: UnCamelCasePipe;

  beforeEach(() => {
    pipe = new UnCamelCasePipe();
  });

  it('should capitalize separate the word based on Camel Case', () => {
    const sentence = "capitalizeThisSentence";
    expect(pipe.transform(sentence)).toBe('Capitalize This Sentence');
    })

});

