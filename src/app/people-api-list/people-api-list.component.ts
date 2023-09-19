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
import { DeleteUserDetailsComponent } from '../modals/delete-user/delete-user-details-modal.component';

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
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadPeople();
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteUserDetailsComponent, {
      data: id,
    });
    dialogRef.componentInstance.submitClicked.subscribe(() => {
      this.loadPeople();
    });
  }

  openEditModal(people: PeopleGoRest) {
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
