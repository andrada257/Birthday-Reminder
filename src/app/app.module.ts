import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     AppRoutingModule, 
     BrowserAnimationsModule, 
     MatTableModule, 
     MatInputModule,
     MatFormFieldModule,
     FormsModule,
     ReactiveFormsModule,
     MatDialogModule,
     MatButtonModule,
     MatIconModule,
     MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
