import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Endpoints } from '../_enums';
import { PeopleGoRest } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(protected httpClient: HttpClient) {}

  //GET API to display all users in a list  
  public getPeopleGoRest(): Observable<PeopleGoRest[]> {
    const url = `${Endpoints.GoRest}?access-token=${Endpoints.AccessToken}`
    return this.httpClient.get<PeopleGoRest[]>(url);
  }

  //POST API for adding new user
  public checkInGoRest(people: PeopleGoRest): Observable<PeopleGoRest> {
    const url = `${Endpoints.GoRest}?access-token=${Endpoints.AccessToken}`
    return this.httpClient.post<PeopleGoRest>(url, people).pipe(
      catchError(this.handleError)
    );
  }

  //DELETE API for deleting users
  public deleteUser(id: number): Observable<boolean> {
    const url = `${Endpoints.GoRest}/${id}?access-token=${Endpoints.AccessToken}`;
    return this.httpClient.delete<boolean>(url).pipe(map(() => true));
  }

  //PUT API to edit/modify existing user details
  public editUser(people: PeopleGoRest): Observable<boolean> {
    const url = `${Endpoints.GoRest}/${people.id}?access-token=${Endpoints.AccessToken}`;
    return this.httpClient.put(url, people).pipe(map(() => true));
  }

  // TODO: Handle API errors gracefully
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(error);
  }
}
