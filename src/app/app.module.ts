import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConvertdigittotextPipe } from './convertdigittotext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertdigittotextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConvertdigittotextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
