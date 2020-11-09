import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroscopeDetailsComponent } from './microscope-details/microscope-details.component';
import { MicroscopeListComponent } from './microscope-list/microscope-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MicroscopeService } from './microscope.service';

@NgModule({
  declarations: [
    AppComponent,
    MicroscopeDetailsComponent,
    MicroscopeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
