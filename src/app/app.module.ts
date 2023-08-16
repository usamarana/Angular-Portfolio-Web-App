import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { PeopleListApiComponent } from './people-api-list/people-api-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingApiComponent } from './booking-api/booking-api.component';
import { EditUserDetailsComponent } from './modals/edit-user/edit-user-details-modal.component';
import { WebAppInfoComponent } from './web-app-info/web-app-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    PeopleListApiComponent,
    PageNotFoundComponent,
    BookingApiComponent,
    EditUserDetailsComponent,
    WebAppInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
