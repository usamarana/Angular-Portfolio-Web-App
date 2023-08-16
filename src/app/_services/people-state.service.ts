import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PeopleStateService {
    private readonly loading$ = new BehaviorSubject<boolean>(false);

    setLoading(loading: boolean) {
        this.loading$.next(loading);
    }
    
    getLoading(): Observable<boolean> {
        return this.loading$.asObservable();
    }
}
