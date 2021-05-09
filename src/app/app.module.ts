import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
