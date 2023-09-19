import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { PeopleService } from 'src/app/_services';
import { PeopleListApiComponent } from 'src/app/people-api-list/people-api-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-delete-user-details-modal',
  templateUrl: './delete-user-details-modal.component.html',
  styleUrls: ['./delete-user-details-modal.component.scss'],
  host: {
    class: 'full-width',
  },
})
export class DeleteUserDetailsComponent {
  @Output() submitClicked = new EventEmitter<any>();
  constructor(
    private peopleService: PeopleService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PeopleListApiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  deleteUser() {
    this.peopleService
      .deleteUser(this.data)
      .pipe(take(1))
      .subscribe(
        (result) => {
          if (result) {
            this.snackBar.open('User deleted successfully', undefined, {
              duration: 4000,
              panelClass: 'success-snackbar',
            });
            this.submitClicked.emit(this.data);
            this.dialogRef.close();
          }
        },
        (error) => {
          this.snackBar.open('Something went wrong', undefined, {
            duration: 4000,
            panelClass: 'error-snackbar',
          });
        }
      );
  }
}
