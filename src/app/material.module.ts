import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules: any[] = [
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
