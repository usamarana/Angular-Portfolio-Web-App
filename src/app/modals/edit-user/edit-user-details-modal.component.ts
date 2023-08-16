import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/_services';
import { PeopleGoRest } from 'src/app/_models';
import { PeopleListApiComponent } from 'src/app/people-api-list/people-api-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user-details-modal',
  templateUrl: './edit-user-details-modal.component.html',
  styleUrls: ['./edit-user-details-modal.component.scss'],
  host: {
    class: 'full-width'
  }
})
export class EditUserDetailsComponent implements OnInit {
  @Output() submitClicked = new EventEmitter<any>();
  editForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PeopleListApiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeopleGoRest) {
    console.log('data', data);
  }

  ngOnInit() {
    this.initialiseForm();
  }
  
  private initialiseForm() {
    this.editForm = this.formBuilder.group({
      id: this.data.id,
      name: [this.data.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [this.data.email, Validators.required],
      gender: [this.data.gender, Validators.required],
      status: [this.data.status]
    });
  }

  public onSubmit() {
    this.peopleService.editUser(this.editForm.value).subscribe((res: boolean) => {
      if (res) {
        this.snackBar.open('User details successfully updated!');
        this.submitClicked.emit(this.editForm.value);
        this.dialogRef.close();
      }
    })
  }
}
