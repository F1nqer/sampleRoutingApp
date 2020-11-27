import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { routerComponents } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routerComponents,
    ComputerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'baseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
