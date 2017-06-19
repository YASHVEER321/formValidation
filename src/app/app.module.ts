import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppComponent2 } from './tdf.component';
import { AppComponent3 } from './mdf.component';
import { AppComponent4 } from './success.component';
import {AppRoutingModule} from './routeFile';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    AppComponent3,
    AppComponent4
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
