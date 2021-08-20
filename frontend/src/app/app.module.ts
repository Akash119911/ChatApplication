import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFileUploaderModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
