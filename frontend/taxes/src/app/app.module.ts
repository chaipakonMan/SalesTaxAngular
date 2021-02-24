import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

import { TransferServiceComponent } from './services/transfer-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WorkComponent,
    PageNotFoundComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [TransferServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
