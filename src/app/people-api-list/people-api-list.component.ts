import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PeopleGoRest } from '../_models';
import { PeopleService } from '../_services';
import { MatSort } from '@angular/material/sort';
import { PeopleStateService } from '../_services/people-state.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDetailsComponent } from '../modals/edit-user/edit-user-details-modal.component';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-api-list.component.html',
  styleUrls: ['./people-api-list.component.scss'],
  host: {
    class: 'full-width',
  },
})
export class PeopleListApiComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columns: string[] = ['id', 'name', 'email', 'gender', 'status', 'action'];
  dataSource!: MatTableDataSource<PeopleGoRest>;
  people: PeopleGoRest[] = [];
  readonly loading$ = this.peopleStateService.getLoading();
  constructor(
    private peopleService: PeopleService,
    private peopleStateService: PeopleStateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadPeople();
  }

  deleteUser(id: number) {
    this.peopleService
      .deleteUser(id)
      .pipe(take(1))
      .subscribe(
        (result) => {
          if (result) {
            this.snackBar.open('Executive Group deleted', undefined, {
              duration: 4000,
              panelClass: 'success-snackbar',
            });
            this.loadPeople();
          }
        },
        (error) => {
          this.snackBar.open(error.error.messages[0], undefined, {
            duration: 4000,
            panelClass: 'error-snackbar',
          });
        }
      );
  }

  openDialog(people: PeopleGoRest) {
    const dialogRef = this.dialog.open(EditUserDetailsComponent, {
      data: people,
    });
    dialogRef.componentInstance.submitClicked.subscribe(() => {
      this.loadPeople();
    });
  }

  //Load the list of people from the API
  private loadPeople(): void {
    this.peopleStateService.setLoading(true);
    this.peopleService
      .getPeopleGoRest()
      .pipe(take(1))
      .subscribe(
        (people: PeopleGoRest[]) => {
          this.people = [...people];
          this.dataSource = new MatTableDataSource<PeopleGoRest>(this.people);
          setTimeout(() => (this.dataSource.paginator = this.paginator));
          setTimeout(() => (this.dataSource.sort = this.sort));
          this.peopleStateService.setLoading(false);
        },
        (err: any) => {
          console.error(err);
        }
      );
  }
}
