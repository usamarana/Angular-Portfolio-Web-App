import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeopleListApiComponent } from './people-api-list/people-api-list.component';
import { BookingApiComponent } from './booking-api/booking-api.component';
import { WebAppInfoComponent } from './web-app-info/web-app-info.component';

const routes: Routes = [
  {
    path: 'people-api',
    component: PeopleListApiComponent
  },
  {
    path: 'booking-api',
    component: BookingApiComponent
  },
  {
    path: 'web-app-info',
    component: WebAppInfoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
