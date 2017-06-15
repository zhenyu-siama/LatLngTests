import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ErrisyMapModule, ILazyMapAPIConfig } from './googlemap.module';

import { AppComponent } from './app.component';


const mapConfig: ILazyMapAPIConfig = {};
mapConfig.key = "AIzaSyDuwaktag_hsaoU-K4nabUQge5jXz0fGsM";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ErrisyMapModule.forRoot(mapConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
