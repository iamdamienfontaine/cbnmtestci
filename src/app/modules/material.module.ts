import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { 
// MatAutocompleteModule, MatCheckboxModule, MatBadgeModule,
MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  imports: [
    CommonModule
  ],

  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule, 
    MatFormFieldModule,
    FlexLayoutModule,
    MatListModule,
    MatSnackBarModule, 
    MatPaginatorModule, 
    MatChipsModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTooltipModule,
    ScrollingModule
  ],

  declarations: []
})
export class MaterialModule { }

