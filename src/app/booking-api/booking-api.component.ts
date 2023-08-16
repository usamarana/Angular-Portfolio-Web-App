import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PeopleGoRest } from '../_models';
import { PeopleService } from '../_services';
import { take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking-api',
  templateUrl: './booking-api.component.html',
  styleUrls: ['./booking-api.component.scss'],
  host: {
    class: 'full-width',
  },
})
export class BookingApiComponent implements OnInit {
  public bookingForm!: FormGroup;
  public submitted: boolean = false;
  public current = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private peopleService: PeopleService,
  ) {}

  public ngOnInit(): void {
    this.initialiseForm();
  }

  /**
   * Initialise the form group
   */
  private initialiseForm(): void {
    this.bookingForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  /**
   * If valid, process the data and store in the DB
   */
  public onSubmit(): void {
    this.submitted = true;

    if (!this.bookingForm.valid) return;

    const { email, gender, id, name } =
      this.bookingForm.value;
    const people: PeopleGoRest = {
      email: email,
      gender: gender,
      id: id,
      name: name,
      status: "active",
    };

    this.peopleService.checkInGoRest(people)
      .pipe(take(1))
      .subscribe((result: PeopleGoRest) => {
        if(result) {
          this.snackBar.open('People checked in successfully');
          this.router.navigate(['people-api']);
        }
        (error: HttpErrorResponse)=>{
          alert(error.error.message);
          this.snackBar.open(error.error.message);
        }
      })
  }
}
